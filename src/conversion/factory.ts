import * as pascalcase from 'pascalcase'
import { Message } from 'google-protobuf'

export const factory = <T extends Message, K extends keyof T>( pb: {new(): T}, setters: Record<K, any> ) => {
  return ( obj: any ): T => {
    const out = ( new pb() ) as any
    const ext = setters as any

    for ( const key in obj ) {
      const val = obj[key]
      let method = `set${pascalcase( key )}`
      // if val is an array, expect 'List' suffix on setter method
      if ( val instanceof Array ) {
        method += 'List'
      }

      // console.log( 'method>>', method )
      // if setter extended, call here
      if ( Reflect.has( out, method ) && Reflect.has( ext, method ) ) {
        out[method]( ext[method]( val, obj ) )
      } else if ( Reflect.has( out, method ) && typeof val != 'object' ) {
        out[method]( val )
      }
    }

    return out
  }
}
