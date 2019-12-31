import { envoy } from '../conversion'
import { HttpConnectionManager } from '../envoy/config/filter/network/http_connection_manager/v2/http_connection_manager_pb'
import { TcpProxy } from '../envoy/config/filter/network/tcp_proxy/v2/tcp_proxy_pb'
import { ExtAuthz } from '../envoy/config/filter/network/ext_authz/v2/ext_authz_pb'
import { Lua } from '../envoy/config/filter/http/lua/v2/lua_pb'

describe( 'conversion', () => {
  describe( 'eds', () => {
    test( 'with socket address', () => {
      const data = {
        'cluster_name': 'bbc',
        'endpoints': [
          {
            'lb_endpoints': [
              {
                'endpoint': {
                  'address': {
                    'socket_address': {
                      'address': '199.232.32.81',
                      'port_value': '80'
                    }
                  }
                }
              }
            ]
          }
        ]
      }

      const msg = envoy.api.v2.ClusterLoadAssignment( data )
      expect( msg.toObject() ).toEqual({
        'clusterName': 'bbc',
        'endpointsList': [
          {
            'lbEndpointsList': [
              {
                'endpoint': {
                  'address': {
                    'socketAddress': {
                      'protocol': 0,
                      'address': '199.232.32.81',
                      'portValue': '80',
                      'namedPort': '',
                      'resolverName': '',
                      'ipv4Compat': false
                    }
                  }
                },
                'endpointName': '',
                'healthStatus': 0
              }
            ],
            'priority': 0
          }
        ],
        'namedEndpointsMap': []
      }
      )
    })

    test( 'with pipe path', () => {
      const data = {
        'cluster_name': 'agent',
        'endpoints': [
          {
            'lb_endpoints': [
              {
                'endpoint': {
                  'address': {
                    'pipe': {
                      'path': '/some/agent.sock'
                    }
                  }
                }
              }
            ]
          }
        ]
      }

      const msg = envoy.api.v2.ClusterLoadAssignment( data )
      // console.log( JSON.stringify( msg.toObject(), null, 2 ) )
      expect( msg.toObject() ).toEqual({
        'clusterName': 'agent',
        'endpointsList': [
          {
            'lbEndpointsList': [
              {
                'endpoint': {
                  'address': {
                    'pipe': {
                      'path': '/some/agent.sock',
                      'mode': 0
                    }
                  }
                },
                'endpointName': '',
                'healthStatus': 0
              }
            ],
            'priority': 0
          }
        ],
        'namedEndpointsMap': []
      })
    })
  })

  describe( 'cds', () => {

    test( 'xds cluster', () => {
      const data = {
        'name': 'xds_cluster',
        'connect_timeout': '0.25s',
        'type': 'STRICT_DNS',
        'lb_policy': 'ROUND_ROBIN',
        'http2_protocol_options': {},
        'upstream_connection_options': {
          'tcp_keepalive': {}
        },
        'load_assignment': {
          'cluster_name': 'xds_cluster',
          'endpoints': [
            {
              'lb_endpoints': [
                {
                  'endpoint': {
                    'address': {
                      'socket_address': {
                        'address': '127.0.0.1',
                        'port_value': '3000'
                      }
                    }
                  }
                }
              ]
            }
          ]
        }
      }

      const msg = envoy.api.v2.Cluster( data )
      // console.log( JSON.stringify( msg.toObject(), null, 2 ) )
      expect( msg.toObject() ).toEqual({
        'transportSocketMatchesList': [],
        'name': 'xds_cluster',
        'altStatName': '',
        'type': 'STRICT_DNS',
        'connectTimeout': {
          'seconds': 0.25,
          'nanos': 0
        },
        'lbPolicy': 'ROUND_ROBIN',
        'hostsList': [],
        'loadAssignment': {
          'clusterName': 'xds_cluster',
          'endpointsList': [
            {
              'lbEndpointsList': [
                {
                  'endpoint': {
                    'address': {
                      'socketAddress': {
                        'protocol': 0,
                        'address': '127.0.0.1',
                        'portValue': '3000',
                        'namedPort': '',
                        'resolverName': '',
                        'ipv4Compat': false
                      }
                    }
                  },
                  'endpointName': '',
                  'healthStatus': 0
                }
              ],
              'priority': 0
            }
          ],
          'namedEndpointsMap': []
        },
        'healthChecksList': [],
        'http2ProtocolOptions': {
          'allowConnect': false,
          'allowMetadata': false,
          'streamErrorOnInvalidHttpMessaging': false
        },
        'extensionProtocolOptionsMap': [],
        'typedExtensionProtocolOptionsMap': [],
        'respectDnsTtl': false,
        'dnsLookupFamily': 0,
        'dnsResolversList': [],
        'useTcpForDnsLookups': false,
        'protocolSelection': 0,
        'upstreamConnectionOptions': {
          'tcpKeepalive': {}
        },
        'closeConnectionsOnHostHealthFailure': false,
        'drainConnectionsOnHostRemoval': false,
        'filtersList': []
      })
    })


    test( 'eds cluster with tls', () => {
      const data = {
        'name': 'service-a',
        'connect_timeout': '5s',
        'type': 'EDS',
        'lb_policy': 'ROUND_ROBIN',
        'circuit_breakers': {
          'thresholds': [{
            'priority': 'HIGH',
            'max_connections': 1000000000,
            'max_pending_requests': 1000000000,
            'max_requests': 1000000000,
            'max_retries': 1000000000
          }]
        },
        'eds_cluster_config': {
          'eds_config': {
            'api_config_source': {
              'api_type': 'GRPC',
              'grpc_services': [{
                'envoy_grpc': {
                  'cluster_name': 'xds_cluster'
                }
              }]
            }
          }
        },
        'tls_context': {
          'common_tls_context': {
            'tls_certificate_sds_secret_configs': [{
              'name': 'spiffe://foo.bar/service-b',
              'sds_config': {
                'api_config_source': {
                  'api_type': 'GRPC',
                  'grpc_services': [{
                    'envoy_grpc': {
                      'cluster_name': 'spiffe-agent'
                    }
                  }]
                }
              }
            }],
            'combined_validation_context': {
              'default_validation_context': {
                'verify_subject_alt_name': [
                  'spiffe://foo.bar/service-a'
                ]
              },
              'validation_context_sds_secret_config': {
                'name': 'spiffe://foo.bar',
                'sds_config': {
                  'api_config_source': {
                    'api_type': 'GRPC',
                    'grpc_services': [{
                      'envoy_grpc': {
                        'cluster_name': 'spiffe-agent'
                      }
                    }]
                  }
                }
              }
            },
            'tls_params': {
              'ecdh_curves': [ 'X25519:P-256:P-521:P-384' ]
            }
          }
        }
      }

      const msg = envoy.api.v2.Cluster( data )
      // console.log( JSON.stringify( msg.toObject(), null, 2 ) )
      expect( msg.toObject() ).toEqual({
        'transportSocketMatchesList': [],
        'name': 'service-a',
        'altStatName': '',
        'type': 'EDS',
        'edsClusterConfig': {
          'edsConfig': {
            'path': '',
            'apiConfigSource': {
              'apiType': 2,
              'clusterNamesList': [],
              'grpcServicesList': [
                {
                  'envoyGrpc': {
                    'clusterName': 'xds_cluster'
                  },
                  'initialMetadataList': []
                }
              ],
              'setNodeOnFirstMessageOnly': false
            }
          },
          'serviceName': ''
        },
        'connectTimeout': {
          'seconds': 5,
          'nanos': 0
        },
        'lbPolicy': 'ROUND_ROBIN',
        'hostsList': [],
        'healthChecksList': [],
        'circuitBreakers': {
          'thresholdsList': [
            {
              'priority': 'HIGH',
              'maxConnections': {
                'value': 1000000000
              },
              'maxPendingRequests': {
                'value': 1000000000
              },
              'maxRequests': {
                'value': 1000000000
              },
              'maxRetries': {
                'value': 1000000000
              },
              'trackRemaining': false
            }
          ]
        },
        'tlsContext': {
          'commonTlsContext': {
            'tlsParams': {
              'tlsMinimumProtocolVersion': 0,
              'tlsMaximumProtocolVersion': 0,
              'cipherSuitesList': [],
              'ecdhCurvesList': [
                'X25519:P-256:P-521:P-384'
              ]
            },
            'tlsCertificatesList': [],
            'tlsCertificateSdsSecretConfigsList': [
              {
                'name': 'spiffe://foo.bar/service-b',
                'sdsConfig': {
                  'path': '',
                  'apiConfigSource': {
                    'apiType': 2,
                    'clusterNamesList': [],
                    'grpcServicesList': [
                      {
                        'envoyGrpc': {
                          'clusterName': 'spiffe-agent'
                        },
                        'initialMetadataList': []
                      }
                    ],
                    'setNodeOnFirstMessageOnly': false
                  }
                }
              }
            ],
            'combinedValidationContext': {
              'defaultValidationContext': {
                'verifyCertificateSpkiList': [],
                'verifyCertificateHashList': [],
                'verifySubjectAltNameList': [
                  'spiffe://foo.bar/service-a'
                ],
                'allowExpiredCertificate': false
              },
              'validationContextSdsSecretConfig': {
                'name': 'spiffe://foo.bar',
                'sdsConfig': {
                  'path': '',
                  'apiConfigSource': {
                    'apiType': 2,
                    'clusterNamesList': [],
                    'grpcServicesList': [
                      {
                        'envoyGrpc': {
                          'clusterName': 'spiffe-agent'
                        },
                        'initialMetadataList': []
                      }
                    ],
                    'setNodeOnFirstMessageOnly': false
                  }
                }
              }
            },
            'alpnProtocolsList': []
          },
          'sni': '',
          'allowRenegotiation': false
        },
        'extensionProtocolOptionsMap': [],
        'typedExtensionProtocolOptionsMap': [],
        'respectDnsTtl': false,
        'dnsLookupFamily': 0,
        'dnsResolversList': [],
        'useTcpForDnsLookups': false,
        'protocolSelection': 0,
        'closeConnectionsOnHostHealthFailure': false,
        'drainConnectionsOnHostRemoval': false,
        'filtersList': []
      })
    })

  }) // end cds


  describe( 'lds', () => {
    test( 'edge proxy listener', () => {
      const data = {
        'name': 'listener-a',
        'address': {
          'socket_address': {
            'address': '0.0.0.0',
            'port_value': '80'
          }
        },
        'filter_chains': [
          {
            'filters': [
              {
                'name': 'envoy.http_connection_manager',
                'typed_config': {
                  '@type': 'type.googleapis.com/envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager',
                  'codec_type': 'AUTO',
                  'stat_prefix': 'ingress_http',
                  'use_remote_address': true,
                  'idle_timeout': '1s',
                  'http_filters': [
                    {
                      'name': 'envoy.ext_authz',
                      'typed_config': {
                        '@type': 'type.googleapis.com/envoy.config.filter.network.ext_authz.v2.ExtAuthz',
                        'failure_mode_allow': true,
                        'grpc_service': {
                          'envoy_grpc': {
                            'cluster_name': 'external-auth-service'
                          },
                          'timeout': '5s'
                        }
                      }
                    },
                    {
                      'name': 'envoy.ext_authz',
                      'typed_config': {
                        '@type': 'type.googleapis.com/envoy.config.filter.http.lua.v2.Lua',
                        'inline_code': 'function envoy_on_request(request_handle)\nend'
                      }
                    },
                    {
                      'name': 'envoy.router',
                      'config': {}
                    }
                  ],
                  'route_config': {
                    'name': 'local_route',
                    'virtual_hosts': [
                      {
                        'name': 'service',
                        'retry_policy': {
                          'retry_on': 'connect-failure',
                          'num_retries': 2
                        },
                        'domains': [ '*' ],
                        'routes': [
                          {
                            'match': {
                              'prefix': '/route/a',
                              'grpc': {}
                            },
                            'route': {
                              'cluster': 'service-a'
                            },
                            'per_filter_config': {
                              'envoy.ext_authz': {
                                'disabled': true
                              }
                            }
                            /* 'typed_per_filter_config': {
                              'envoy.ext_authz': {
                                'disabled': true
                              }
                            }*/
                          }
                        ]
                      }
                    ]
                  }
                }
              }
            ],
            'tls_context': {
              'common_tls_context': {
                'tls_certificate_sds_secret_configs': [{
                  'name': 'spiffe://foo.bar/proxy-a',
                  'sds_config': {
                    'api_config_source': {
                      'api_type': 'GRPC',
                      'grpc_services': [{
                        'envoy_grpc': {
                          'cluster_name': 'spiffe-agent'
                        }
                      }]
                    }
                  }
                }],
                'combined_validation_context': {
                  'default_validation_context': {
                    'verify_subject_alt_name': [
                      'spiffe://foo.bar/service-a'
                    ]
                  },
                  'validation_context_sds_secret_config': {
                    'name': 'spiffe://foo.bar',
                    'sds_config': {
                      'api_config_source': {
                        'api_type': 'GRPC',
                        'grpc_services': [{
                          'envoy_grpc': {
                            'cluster_name': 'spiffe-agent'
                          }
                        }]
                      }
                    }
                  }
                },
                'tls_params': {
                  'ecdh_curves': [ 'X25519:P-256:P-521:P-384' ]
                }
              }
            }
          }
        ]
      }

      const msg = envoy.api.v2.Listener( data )
      // console.log( JSON.stringify( msg.toObject(), null, 2 ) )
      expect( msg.toObject() ).toEqual({
        'name': 'listener-a',
        'address': {
          'socketAddress': {
            'protocol': 0,
            'address': '0.0.0.0',
            'portValue': '80',
            'namedPort': '',
            'resolverName': '',
            'ipv4Compat': false
          }
        },
        'filterChainsList': [
          {
            'tlsContext': {
              'commonTlsContext': {
                'tlsParams': {
                  'tlsMinimumProtocolVersion': 0,
                  'tlsMaximumProtocolVersion': 0,
                  'cipherSuitesList': [],
                  'ecdhCurvesList': [
                    'X25519:P-256:P-521:P-384'
                  ]
                },
                'tlsCertificatesList': [],
                'tlsCertificateSdsSecretConfigsList': [
                  {
                    'name': 'spiffe://foo.bar/proxy-a',
                    'sdsConfig': {
                      'path': '',
                      'apiConfigSource': {
                        'apiType': 2,
                        'clusterNamesList': [],
                        'grpcServicesList': [
                          {
                            'envoyGrpc': {
                              'clusterName': 'spiffe-agent'
                            },
                            'initialMetadataList': []
                          }
                        ],
                        'setNodeOnFirstMessageOnly': false
                      }
                    }
                  }
                ],
                'combinedValidationContext': {
                  'defaultValidationContext': {
                    'verifyCertificateSpkiList': [],
                    'verifyCertificateHashList': [],
                    'verifySubjectAltNameList': [
                      'spiffe://foo.bar/service-a'
                    ],
                    'allowExpiredCertificate': false
                  },
                  'validationContextSdsSecretConfig': {
                    'name': 'spiffe://foo.bar',
                    'sdsConfig': {
                      'path': '',
                      'apiConfigSource': {
                        'apiType': 2,
                        'clusterNamesList': [],
                        'grpcServicesList': [
                          {
                            'envoyGrpc': {
                              'clusterName': 'spiffe-agent'
                            },
                            'initialMetadataList': []
                          }
                        ],
                        'setNodeOnFirstMessageOnly': false
                      }
                    }
                  }
                },
                'alpnProtocolsList': []
              }
            },
            'filtersList': [
              {
                'name': 'envoy.http_connection_manager',
                'typedConfig': {
                  'typeUrl': 'type.googleapis.com/envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager',
                  'value': 'EgxpbmdyZXNzX2h0dHAidQoLbG9jYWxfcm91dGUSZgoHc2VydmljZRIBKhpACgwKCC9yb3V0ZS9hQgASCwoJc2VydmljZS1hQiMKD2Vudm95LmV4dF9hdXRoehIQCg4KCGRpc2FibGVkEgIgAYIBFQoPY29ubmVjdC1mYWlsdXJlEgIIAip9Cg9lbnZveS5leHRfYXV0aHoiagpFdHlwZS5nb29nbGVhcGlzLmNvbS9lbnZveS5jb25maWcuZmlsdGVyLm5ldHdvcmsuZXh0X2F1dGh6LnYyLkV4dEF1dGh6EiESHQoXChVleHRlcm5hbC1hdXRoLXNlcnZpY2UaAggFGAEqfQoPZW52b3kuZXh0X2F1dGh6ImoKN3R5cGUuZ29vZ2xlYXBpcy5jb20vZW52b3kuY29uZmlnLmZpbHRlci5odHRwLmx1YS52Mi5MdWESLwotZnVuY3Rpb24gZW52b3lfb25fcmVxdWVzdChyZXF1ZXN0X2hhbmRsZSkKZW5kKhAKDGVudm95LnJvdXRlchIAWgIIAXICCAE='
                }
              }
            ],
            'name': ''
          }
        ],
        'drainType': 0,
        'listenerFiltersList': [],
        'continueOnListenerFiltersTimeout': false,
        'socketOptionsList': [],
        'trafficDirection': 0,
        'reusePort': false
      })

      const a = msg.getFilterChainsList()[0].getFiltersList()[0].getTypedConfig()
      expect( a ).not.toBeNull()
      if ( a ) {
        const http = a.unpack( HttpConnectionManager.deserializeBinary, a.getTypeName() )
        expect( http ).not.toBeNull()

        // check http connection manager
        if ( http ) {
          // console.log( JSON.stringify( http.toObject(), null, 2 ) )
          expect( http.toObject() ).toEqual({
            'codecType': 0,
            'statPrefix': 'ingress_http',
            'routeConfig': {
              'name': 'local_route',
              'virtualHostsList': [
                {
                  'name': 'service',
                  'domainsList': [
                    '*'
                  ],
                  'routesList': [
                    {
                      'name': '',
                      'match': {
                        'grpc': {},
                        'prefix': '/route/a',
                        'path': '',
                        'regex': '',
                        'headersList': [],
                        'queryParametersList': []
                      },
                      'route': {
                        'cluster': 'service-a',
                        'clusterHeader': '',
                        'clusterNotFoundResponseCode': 0,
                        'prefixRewrite': '',
                        'hostRewrite': '',
                        'autoHostRewriteHeader': '',
                        'priority': 0,
                        'rateLimitsList': [],
                        'hashPolicyList': [],
                        'upgradeConfigsList': [],
                        'internalRedirectAction': 0
                      },
                      'perFilterConfigMap': [
                        [
                          'envoy.ext_authz',
                          {
                            'fieldsMap': [
                              [
                                'disabled',
                                {
                                  'nullValue': 0,
                                  'numberValue': 0,
                                  'stringValue': '',
                                  'boolValue': true
                                }
                              ]
                            ]
                          }
                        ]
                      ],
                      'typedPerFilterConfigMap': [],
                      'requestHeadersToAddList': [],
                      'requestHeadersToRemoveList': [],
                      'responseHeadersToAddList': [],
                      'responseHeadersToRemoveList': []
                    }
                  ],
                  'requireTls': 0,
                  'virtualClustersList': [],
                  'rateLimitsList': [],
                  'requestHeadersToAddList': [],
                  'requestHeadersToRemoveList': [],
                  'responseHeadersToAddList': [],
                  'responseHeadersToRemoveList': [],
                  'perFilterConfigMap': [],
                  'typedPerFilterConfigMap': [],
                  'includeRequestAttemptCount': false,
                  'retryPolicy': {
                    'retryOn': 'connect-failure',
                    'numRetries': {
                      'value': 2
                    },
                    'retryHostPredicateList': [],
                    'hostSelectionRetryMaxAttempts': 0,
                    'retriableStatusCodesList': [],
                    'retriableHeadersList': [],
                    'retriableRequestHeadersList': []
                  }
                }
              ],
              'internalOnlyHeadersList': [],
              'responseHeadersToAddList': [],
              'responseHeadersToRemoveList': [],
              'requestHeadersToAddList': [],
              'requestHeadersToRemoveList': [],
              'mostSpecificHeaderMutationsWins': false
            },
            'httpFiltersList': [
              {
                'name': 'envoy.ext_authz',
                'typedConfig': {
                  'typeUrl': 'type.googleapis.com/envoy.config.filter.network.ext_authz.v2.ExtAuthz',
                  'value': 'Eh0KFwoVZXh0ZXJuYWwtYXV0aC1zZXJ2aWNlGgIIBRgB'
                }
              },
              {
                'name': 'envoy.ext_authz',
                'typedConfig': {
                  'typeUrl': 'type.googleapis.com/envoy.config.filter.http.lua.v2.Lua',
                  'value': 'Ci1mdW5jdGlvbiBlbnZveV9vbl9yZXF1ZXN0KHJlcXVlc3RfaGFuZGxlKQplbmQ='
                }
              },
              {
                'name': 'envoy.router',
                'config': {
                  'fieldsMap': []
                }
              }
            ],
            'serverName': '',
            'serverHeaderTransformation': 0,
            'idleTimeout': {
              'seconds': 1,
              'nanos': 0
            },
            'accessLogList': [],
            'useRemoteAddress': {
              'value': true
            },
            'xffNumTrustedHops': 0,
            'skipXffAppend': false,
            'via': '',
            'preserveExternalRequestId': false,
            'forwardClientCertDetails': 0,
            'proxy100Continue': false,
            'representIpv4RemoteAddressAsIpv4MappedIpv6': false,
            'upgradeConfigsList': [],
            'mergeSlashes': false
          })

          // check ext_authz filter
          const ext = http.getHttpFiltersList()[0].getTypedConfig()
          expect( ext ).not.toBeNull()
          if ( ext ) {
            const authz = ext.unpack( ExtAuthz.deserializeBinary, ext.getTypeName() )
            expect( authz ).not.toBeNull()
            if ( authz ) {
              expect( authz.toObject() ).toEqual({
                'statPrefix': '',
                'grpcService': {
                  'envoyGrpc': {
                    'clusterName': 'external-auth-service'
                  },
                  'timeout': {
                    'seconds': 5,
                    'nanos': 0
                  },
                  'initialMetadataList': []
                },
                'failureModeAllow': true,
                'includePeerCertificate': false
              })
            }
          }

          // check lua filter
          const l = http.getHttpFiltersList()[1].getTypedConfig()
          expect( l ).not.toBeNull()
          if ( l ) {
            const lua = l.unpack( Lua.deserializeBinary, l.getTypeName() )
            expect( lua ).not.toBeNull()
            if ( lua ) {
              expect( lua.toObject() ).toEqual({
                'inlineCode': 'function envoy_on_request(request_handle)\nend'
              })
            }
          }

        }
      }


    })

    //

    test( 'redis listener', () => {
      const data = {
        'name': 'redis-listener',
        'address': {
          'socket_address': {
            'address': '0.0.0.0',
            'port_value': '80'
          }
        },
        'filter_chains': [
          {
            'filters': [
              {
                'name': 'envoy.tcp_proxy',
                'typed_config': {
                  '@type': 'type.googleapis.com/envoy.config.filter.network.tcp_proxy.v2.TcpProxy',
                  'stat_prefix': 'redis_tcp',
                  'cluster': 'redis_cluster'
                }
              }
            ]
          }
        ]
      }

      const msg = envoy.api.v2.Listener( data )
      // console.log( JSON.stringify( msg.toObject(), null, 2 ) )
      expect( msg.toObject() ).toEqual({
        'name': 'redis-listener',
        'address': {
          'socketAddress': {
            'protocol': 0,
            'address': '0.0.0.0',
            'portValue': '80',
            'namedPort': '',
            'resolverName': '',
            'ipv4Compat': false
          }
        },
        'filterChainsList': [
          {
            'filtersList': [
              {
                'name': 'envoy.tcp_proxy',
                'typedConfig': {
                  'typeUrl': 'type.googleapis.com/envoy.config.filter.network.tcp_proxy.v2.TcpProxy',
                  'value': 'CglyZWRpc190Y3ASDXJlZGlzX2NsdXN0ZXI='
                }
              }
            ],
            'name': ''
          }
        ],
        'drainType': 0,
        'listenerFiltersList': [],
        'continueOnListenerFiltersTimeout': false,
        'socketOptionsList': [],
        'trafficDirection': 0,
        'reusePort': false
      })

      const a = msg.getFilterChainsList()[0].getFiltersList()[0].getTypedConfig()
      expect( a ).not.toBeNull()
      if ( a ) {
        const tcp = a.unpack( TcpProxy.deserializeBinary, a.getTypeName() )
        expect( tcp ).not.toBeNull()

        // check tcp proxy config
        if ( tcp ) {
          // console.log( JSON.stringify( tcp.toObject(), null, 2 ) )
          expect( tcp.toObject() ).toEqual({
            'statPrefix': 'redis_tcp',
            'cluster': 'redis_cluster',
            'accessLogList': [],
            'hashPolicyList': []
          })
        }
      }

    })

    test( 'listener with rds', () => {
      const data = {
        'address': {
          'socket_address': {
            'address': '0.0.0.0',
            'port_value': '80'
          }
        },
        'filter_chains': [
          {
            'filters': [
              {
                'name': 'envoy.http_connection_manager',
                'typed_config': {
                  '@type': 'type.googleapis.com/envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager',
                  'codec_type': 'auto',
                  'stat_prefix': 'ingress_http',
                  'rds': {
                    'route_config_name': 'local_route',
                    'config_source': {
                      'api_config_source': {
                        'api_type': 'GRPC',
                        'grpc_services': [{
                          'envoy_grpc': {
                            'cluster_name': 'xds_cluster'
                          }
                        }]
                      }
                    }
                  }
                }
              }
            ]
          }
        ]
      }

      const msg = envoy.api.v2.Listener( data )
      // console.log( JSON.stringify( msg.toObject(), null, 2 ) )

      const a = msg.getFilterChainsList()[0].getFiltersList()[0].getTypedConfig()
      expect( a ).not.toBeNull()
      if ( a ) {
        const http = a.unpack( HttpConnectionManager.deserializeBinary, a.getTypeName() )
        expect( http ).not.toBeNull()

        // check http connection manager
        if ( http ) {
          // console.log( JSON.stringify( http.toObject(), null, 2 ) )
          expect( http.toObject() ).toEqual({
            'codecType': 0,
            'statPrefix': 'ingress_http',
            'rds': {
              'configSource': {
                'path': '',
                'apiConfigSource': {
                  'apiType': 2,
                  'clusterNamesList': [],
                  'grpcServicesList': [
                    {
                      'envoyGrpc': {
                        'clusterName': 'xds_cluster'
                      },
                      'initialMetadataList': []
                    }
                  ],
                  'setNodeOnFirstMessageOnly': false
                }
              },
              'routeConfigName': 'local_route'
            },
            'httpFiltersList': [],
            'serverName': '',
            'serverHeaderTransformation': 0,
            'accessLogList': [],
            'xffNumTrustedHops': 0,
            'skipXffAppend': false,
            'via': '',
            'preserveExternalRequestId': false,
            'forwardClientCertDetails': 0,
            'proxy100Continue': false,
            'representIpv4RemoteAddressAsIpv4MappedIpv6': false,
            'upgradeConfigsList': [],
            'mergeSlashes': false
          }
          )
        }
      }

    })


  }) // end lds

  describe( 'rds', () => {
    test( 'route config with typed filter', () => {
      const data = {
        'name': 'local_route',
        'virtual_hosts': [
          {
            'name': 'service',
            'domains': [ '*' ],
            'routes': [
              {
                'match': {
                  'prefix': '/route/a'
                },
                'route': {
                  'cluster': 'service-a'
                },
                'typed_per_filter_config': {
                  'envoy.ext_authz': {
                    '@type': 'type.googleapis.com/envoy.config.filter.http.ext_authz.v2.ExtAuthzPerRoute',
                    'disabled': true
                  }
                }
              }
            ]
          }
        ]
      }

      const msg = envoy.api.v2.RouteConfiguration( data )
      // console.log( JSON.stringify( msg.toObject(), null, 2 ) )
      expect( msg.toObject() ).toEqual({
        'name': 'local_route',
        'virtualHostsList': [
          {
            'name': 'service',
            'domainsList': [
              '*'
            ],
            'routesList': [
              {
                'name': '',
                'match': {
                  'prefix': '/route/a',
                  'path': '',
                  'regex': '',
                  'headersList': [],
                  'queryParametersList': []
                },
                'route': {
                  'cluster': 'service-a',
                  'clusterHeader': '',
                  'clusterNotFoundResponseCode': 0,
                  'prefixRewrite': '',
                  'hostRewrite': '',
                  'autoHostRewriteHeader': '',
                  'priority': 0,
                  'rateLimitsList': [],
                  'hashPolicyList': [],
                  'upgradeConfigsList': [],
                  'internalRedirectAction': 0
                },
                'perFilterConfigMap': [],
                'typedPerFilterConfigMap': [
                  [
                    'envoy.ext_authz',
                    {
                      'typeUrl': 'type.googleapis.com/envoy.config.filter.http.ext_authz.v2.ExtAuthzPerRoute',
                      'value': 'CAE='
                    }
                  ]
                ],
                'requestHeadersToAddList': [],
                'requestHeadersToRemoveList': [],
                'responseHeadersToAddList': [],
                'responseHeadersToRemoveList': []
              }
            ],
            'requireTls': 0,
            'virtualClustersList': [],
            'rateLimitsList': [],
            'requestHeadersToAddList': [],
            'requestHeadersToRemoveList': [],
            'responseHeadersToAddList': [],
            'responseHeadersToRemoveList': [],
            'perFilterConfigMap': [],
            'typedPerFilterConfigMap': [],
            'includeRequestAttemptCount': false
          }
        ],
        'internalOnlyHeadersList': [],
        'responseHeadersToAddList': [],
        'responseHeadersToRemoveList': [],
        'requestHeadersToAddList': [],
        'requestHeadersToRemoveList': [],
        'mostSpecificHeaderMutationsWins': false
      })
    })
  })

})

