
/* IMPORT */

import benchmark from 'benchloop';
import fs from 'node:fs';
import U8 from 'uint8-encoding';
import Hex from '../dist/node.js';

/* HELPERS */

const FIXTURE = fs.readFileSync ( './tasks/fixture.txt', 'utf8' );
const FIXTURE_UINT8 = U8.encode ( FIXTURE );
const FIXTURE_ENCODED = Hex.encodeStr ( FIXTURE );
const FIXTURE_ENCODED_UINT8 = Hex.encode ( FIXTURE_UINT8 );

/* MAIN */

benchmark.config ({
  iterations: 1
});

benchmark ({
  name: 'encode',
  fn: () => {
    Hex.encode ( FIXTURE_UINT8 );
  }
});

benchmark ({
  name: 'encodeStr',
  fn: () => {
    Hex.encode ( FIXTURE );
  }
});

benchmark ({
  name: 'decode',
  fn: () => {
    Hex.decode ( FIXTURE_ENCODED_UINT8 );
  }
});

benchmark ({
  name: 'decodeStr',
  fn: () => {
    Hex.decode ( FIXTURE_ENCODED );
  }
});

benchmark ({
  name: 'is',
  fn: () => {
    Hex.is ( FIXTURE_ENCODED );
  }
});

benchmark.summary ();
