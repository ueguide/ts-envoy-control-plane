import { envoy } from '../conversion'
import { HttpConnectionManager } from '../envoy/config/filter/network/http_connection_manager/v2/http_connection_manager_pb'
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
              'apiType': 'GRPC',
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
                    'apiType': 'GRPC',
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
                    'apiType': 'GRPC',
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
                        'name': 'service'
                      }
                    ]
                  }
                }
              }
            ]
          }
        ]
      }

      const msg = envoy.api.v2.Listener( data )
      console.log( JSON.stringify( msg.toObject(), null, 2 ) )

      const a = msg.getFilterChainsList()[0].getFiltersList()[0].getTypedConfig()
      expect( a ).not.toBeNull()
      if ( a ) {
        const http = a.unpack( HttpConnectionManager.deserializeBinary, a.getTypeName() )
        expect( http ).not.toBeNull()
        if ( http ) {
          console.log( JSON.stringify( http.toObject(), null, 2 ) )

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
  })

})

