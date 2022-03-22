
/* IMPORT */

import is from './is';

/* MAIN */

const Node = {

  /* API */

  encode: ( data: Uint8Array ): string => {

    return Buffer.from ( data ).toString ( 'hex' );

  },

  encodeStr: ( data: string ): string => {

    return Buffer.from ( data ).toString ( 'hex' );

  },

  decode: ( data: string ): Uint8Array => {

    const buffer = Buffer.from ( data, 'hex' );

    return new Uint8Array ( buffer.buffer, buffer.byteOffset, buffer.byteLength );

  },

  decodeStr: ( data: string ): string => {

    return Buffer.from ( data, 'hex' ).toString ();

  },

  is

};

/* EXPORT */

export default Node;
