System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  blacklist: {},

  map: {
    "axios": "npm:axios@0.14.0",
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "chai": "npm:chai@3.5.0",
    "core-js": "npm:core-js@1.2.7",
    "lodash": "npm:lodash@4.15.0",
    "moment": "npm:moment@2.15.0",
    "node-uuid": "npm:node-uuid@1.4.7",
    "react": "npm:react@15.3.1",
    "react-addons-test-utils": "npm:react-addons-test-utils@0.14.8",
    "react-bootstrap": "npm:react-bootstrap@0.30.3",
    "react-bootstrap-table": "npm:react-bootstrap-table@1.6.2",
    "react-datagrid": "npm:react-datagrid@2.1.1",
    "react-dom": "npm:react-dom@15.3.1",
    "react-loader": "npm:react-loader@2.4.0",
    "react-paginate": "npm:react-paginate@0.5.7",
    "react-redux": "npm:react-redux@4.4.5",
    "react-router": "npm:react-router@2.8.1",
    "react-router-bootstrap": "npm:react-router-bootstrap@0.23.1",
    "redux": "npm:redux@3.6.0",
    "redux-mock-store": "npm:redux-mock-store@0.0.6",
    "redux-thunk": "npm:redux-thunk@1.0.3",
    "systemjs": "npm:systemjs@0.19.38",
    "systemjs-hot-reloader": "github:capaj/systemjs-hot-reloader@0.5.9",
    "github:capaj/systemjs-hot-reloader@0.5.9": {
      "debug": "npm:debug@2.2.0",
      "socket.io-client": "github:socketio/socket.io-client@1.4.8",
      "weakee": "npm:weakee@1.0.0"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.11.0"
    },
    "github:jspm/nodelibs-domain@0.1.0": {
      "domain-browser": "npm:domain-browser@1.1.7"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.9"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "npm:asap@2.0.4": {
      "domain": "github:jspm/nodelibs-domain@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asn1.js@4.8.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:axios@0.14.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "follow-redirects": "npm:follow-redirects@0.0.7",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel-runtime@6.11.6": {
      "core-js": "npm:core-js@2.4.1",
      "regenerator-runtime": "npm:regenerator-runtime@0.9.5"
    },
    "npm:bn.js@4.11.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:browserify-aes@1.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.3",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@4.0.1": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:browserify-sign@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.3.1",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pako": "npm:pako@0.2.9",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.1.5",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:buffer-shims@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:chai@3.5.0": {
      "assertion-error": "npm:assertion-error@1.0.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "deep-eql": "npm:deep-eql@0.1.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "type-detect": "npm:type-detect@1.0.0"
    },
    "npm:cipher-base@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:classnames@1.2.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:clone@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-js@1.2.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-js@2.4.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.3.1"
    },
    "npm:create-hash@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.5"
    },
    "npm:create-hmac@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.11.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@4.0.0",
      "create-ecdh": "npm:create-ecdh@4.0.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "diffie-hellman": "npm:diffie-hellman@5.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.6",
      "public-encrypt": "npm:public-encrypt@4.0.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:debug@2.2.0": {
      "ms": "npm:ms@0.7.1"
    },
    "npm:deep-eql@0.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "type-detect": "npm:type-detect@0.1.1"
    },
    "npm:define-properties@1.1.2": {
      "foreach": "npm:foreach@2.0.5",
      "object-keys": "npm:object-keys@1.0.11"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:diffie-hellman@5.0.2": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.0",
      "randombytes": "npm:randombytes@2.0.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:domain-browser@1.1.7": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:drag-helper@1.3.3": {
      "has-touch": "npm:has-touch@1.0.1",
      "object-assign": "npm:object-assign@4.1.0",
      "region-align": "npm:region-align@2.1.3"
    },
    "npm:elliptic@6.3.1": {
      "bn.js": "npm:bn.js@4.11.6",
      "brorand": "npm:brorand@1.0.6",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:encoding@0.1.12": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "iconv-lite": "npm:iconv-lite@0.4.13"
    },
    "npm:es-abstract@1.6.1": {
      "es-to-primitive": "npm:es-to-primitive@1.1.1",
      "function-bind": "npm:function-bind@1.1.0",
      "is-callable": "npm:is-callable@1.1.3",
      "is-regex": "npm:is-regex@1.0.3"
    },
    "npm:es-to-primitive@1.1.1": {
      "is-callable": "npm:is-callable@1.1.3",
      "is-date-object": "npm:is-date-object@1.0.1",
      "is-symbol": "npm:is-symbol@1.0.1"
    },
    "npm:es6-promise@3.3.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:expect@1.20.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "define-properties": "npm:define-properties@1.1.2",
      "has": "npm:has@1.0.1",
      "is-equal": "npm:is-equal@1.5.3",
      "is-regex": "npm:is-regex@1.0.3",
      "object-inspect": "npm:object-inspect@1.2.1",
      "object-keys": "npm:object-keys@1.0.11",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tmatch": "npm:tmatch@2.0.1"
    },
    "npm:fbjs@0.6.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:fbjs@0.8.4": {
      "core-js": "npm:core-js@1.2.7",
      "immutable": "npm:immutable@3.8.1",
      "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
      "loose-envify": "npm:loose-envify@1.2.0",
      "object-assign": "npm:object-assign@4.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "promise": "npm:promise@7.1.1",
      "ua-parser-js": "npm:ua-parser-js@0.7.10"
    },
    "npm:follow-redirects@0.0.7": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "debug": "npm:debug@2.2.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-consume": "npm:stream-consume@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:functionally@0.6.2": {
      "newify": "npm:newify@1.1.9"
    },
    "npm:has@1.0.1": {
      "function-bind": "npm:function-bind@1.1.0"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:history@2.1.2": {
      "deep-equal": "npm:deep-equal@1.0.1",
      "invariant": "npm:invariant@2.2.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "query-string": "npm:query-string@3.0.3",
      "warning": "npm:warning@2.1.0"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:iconv-lite@0.4.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:invariant@2.2.1": {
      "loose-envify": "npm:loose-envify@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:is-arrow-function@2.0.3": {
      "is-callable": "npm:is-callable@1.1.3"
    },
    "npm:is-equal@1.5.3": {
      "has": "npm:has@1.0.1",
      "is-arrow-function": "npm:is-arrow-function@2.0.3",
      "is-boolean-object": "npm:is-boolean-object@1.0.0",
      "is-callable": "npm:is-callable@1.1.3",
      "is-date-object": "npm:is-date-object@1.0.1",
      "is-generator-function": "npm:is-generator-function@1.0.3",
      "is-number-object": "npm:is-number-object@1.0.3",
      "is-regex": "npm:is-regex@1.0.3",
      "is-string": "npm:is-string@1.0.4",
      "is-symbol": "npm:is-symbol@1.0.1",
      "object.entries": "npm:object.entries@1.0.3"
    },
    "npm:isomorphic-fetch@2.2.1": {
      "node-fetch": "npm:node-fetch@1.6.1",
      "whatwg-fetch": "npm:whatwg-fetch@0.10.1"
    },
    "npm:loose-envify@1.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-tokens": "npm:js-tokens@1.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:miller-rabin@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "brorand": "npm:brorand@1.0.6"
    },
    "npm:node-fetch@1.6.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "encoding": "npm:encoding@0.1.12",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "is-stream": "npm:is-stream@1.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:node-uuid@1.4.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:object.entries@1.0.3": {
      "define-properties": "npm:define-properties@1.1.2",
      "es-abstract": "npm:es-abstract@1.6.1",
      "function-bind": "npm:function-bind@1.1.0",
      "has": "npm:has@1.0.1"
    },
    "npm:pako@0.2.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:parse-asn1@5.0.0": {
      "asn1.js": "npm:asn1.js@4.8.0",
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.6",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pbkdf2@3.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process-nextick-args@1.0.7": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.9": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:promise@7.1.1": {
      "asap": "npm:asap@2.0.4",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:public-encrypt@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:query-string@3.0.3": {
      "strict-uri-encode": "npm:strict-uri-encode@1.1.0"
    },
    "npm:randombytes@2.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react-addons-create-fragment@0.14.8": {
      "react": "npm:react@0.14.8"
    },
    "npm:react-addons-test-utils@0.14.8": {
      "react": "npm:react@0.14.8"
    },
    "npm:react-addons-update@15.3.1": {
      "react": "npm:react@15.3.1"
    },
    "npm:react-bootstrap-table@1.6.2": {
      "classnames": "npm:classnames@2.2.5",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@0.14.8",
      "react-toastr": "npm:react-toastr@2.8.0"
    },
    "npm:react-bootstrap@0.30.3": {
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "classnames": "npm:classnames@2.2.5",
      "dom-helpers": "npm:dom-helpers@2.4.0",
      "invariant": "npm:invariant@2.2.1",
      "keycode": "npm:keycode@2.1.4",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@15.3.1",
      "react-dom": "npm:react-dom@15.3.1",
      "react-overlays": "npm:react-overlays@0.6.6",
      "react-prop-types": "npm:react-prop-types@0.4.0",
      "uncontrollable": "npm:uncontrollable@4.0.3",
      "warning": "npm:warning@3.0.0"
    },
    "npm:react-class@1.2.4": {
      "object-assign": "npm:object-assign@4.1.0",
      "react": "npm:react@0.14.8"
    },
    "npm:react-class@2.1.0": {
      "object-assign": "npm:object-assign@4.1.0",
      "react": "npm:react@15.3.1"
    },
    "npm:react-clonewithprops@1.0.1": {
      "react": "npm:react@15.3.1"
    },
    "npm:react-datagrid@2.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "clone": "npm:clone@1.0.2",
      "css-utils": "npm:css-utils@1.0.0",
      "drag-helper": "npm:drag-helper@1.3.3",
      "es6-promise": "npm:es6-promise@3.3.0",
      "has-touch": "npm:has-touch@1.0.1",
      "hasown": "npm:hasown@1.0.1",
      "node-uuid": "npm:node-uuid@1.4.7",
      "normalize.css": "npm:normalize.css@3.0.3",
      "object-assign": "npm:object-assign@4.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@15.3.1",
      "react-class": "npm:react-class@1.2.4",
      "react-dom": "npm:react-dom@15.3.1",
      "react-load-mask": "npm:react-load-mask@2.0.2",
      "react-menus": "npm:react-menus@2.0.6",
      "react-simple-toolbar": "npm:react-simple-toolbar@1.0.5",
      "react-style-normalizer": "npm:react-style-normalizer@1.2.8",
      "react-virtual-scroller": "npm:react-virtual-scroller@2.1.3",
      "region": "npm:region@2.1.2",
      "region-align": "npm:region-align@2.1.3",
      "ustring": "npm:ustring@1.4.1",
      "whatwg-fetch": "npm:whatwg-fetch@0.10.1"
    },
    "npm:react-dom@0.14.8": {
      "react": "npm:react@0.14.8"
    },
    "npm:react-dom@15.3.1": {
      "react": "npm:react@15.3.1"
    },
    "npm:react-event-names@1.0.0": {
      "has-touch": "npm:has-touch@1.0.1"
    },
    "npm:react-load-mask@2.0.2": {
      "object-assign": "npm:object-assign@4.1.0",
      "react": "npm:react@15.3.1",
      "react-dom": "npm:react-dom@15.3.1"
    },
    "npm:react-loader@2.4.0": {
      "react": "npm:react@15.3.1",
      "react-dom": "npm:react-dom@15.3.1",
      "spin.js": "npm:spin.js@2.3.2"
    },
    "npm:react-menus@2.0.6": {
      "arrow-style": "npm:arrow-style@1.1.1",
      "buffer-function": "npm:buffer-function@1.0.0",
      "has-touch": "npm:has-touch@1.0.1",
      "object-assign": "npm:object-assign@4.1.0",
      "point-in-triangle": "npm:point-in-triangle@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@15.3.1",
      "react-dom": "npm:react-dom@15.3.1",
      "react-event-names": "npm:react-event-names@1.0.0",
      "react-style-normalizer": "npm:react-style-normalizer@1.2.8",
      "region-align": "npm:region-align@2.1.3",
      "select-parent": "npm:select-parent@1.0.1"
    },
    "npm:react-overlays@0.6.6": {
      "classnames": "npm:classnames@2.2.5",
      "dom-helpers": "npm:dom-helpers@2.4.0",
      "react": "npm:react@15.3.1",
      "react-dom": "npm:react-dom@15.3.1",
      "react-prop-types": "npm:react-prop-types@0.4.0",
      "warning": "npm:warning@3.0.0"
    },
    "npm:react-paginate@0.5.7": {
      "classnames": "npm:classnames@1.2.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react-addons-create-fragment": "npm:react-addons-create-fragment@0.14.8",
      "react-dom": "npm:react-dom@0.14.8",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:react-prop-types@0.4.0": {
      "react": "npm:react@15.3.1",
      "warning": "npm:warning@3.0.0"
    },
    "npm:react-redux@4.4.5": {
      "hoist-non-react-statics": "npm:hoist-non-react-statics@1.2.0",
      "invariant": "npm:invariant@2.2.1",
      "lodash": "npm:lodash@4.15.0",
      "loose-envify": "npm:loose-envify@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@15.3.1",
      "redux": "npm:redux@3.6.0"
    },
    "npm:react-router-bootstrap@0.23.1": {
      "react": "npm:react@15.3.1"
    },
    "npm:react-router@2.8.1": {
      "history": "npm:history@2.1.2",
      "hoist-non-react-statics": "npm:hoist-non-react-statics@1.2.0",
      "invariant": "npm:invariant@2.2.1",
      "loose-envify": "npm:loose-envify@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@15.3.1",
      "warning": "npm:warning@3.0.0"
    },
    "npm:react-simple-toolbar@1.0.5": {
      "object-assign": "npm:object-assign@2.1.1",
      "react": "npm:react@15.3.1",
      "react-clonewithprops": "npm:react-clonewithprops@1.0.1",
      "react-style-normalizer": "npm:react-style-normalizer@1.2.8"
    },
    "npm:react-toastr@2.8.0": {
      "classnames": "npm:classnames@2.2.5",
      "element-class": "npm:element-class@0.2.2",
      "lodash": "npm:lodash@4.15.0",
      "react": "npm:react@15.3.1",
      "react-addons-update": "npm:react-addons-update@15.3.1",
      "react-dom": "npm:react-dom@15.3.1"
    },
    "npm:react-virtual-scroller@2.1.3": {
      "drag-helper": "npm:drag-helper@1.3.3",
      "has-touch": "npm:has-touch@1.0.1",
      "object-assign": "npm:object-assign@4.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@15.3.1",
      "react-class": "npm:react-class@2.1.0",
      "react-dom": "npm:react-dom@15.3.1",
      "react-load-mask": "npm:react-load-mask@2.0.2",
      "react-style-normalizer": "npm:react-style-normalizer@1.2.8"
    },
    "npm:react@0.14.8": {
      "fbjs": "npm:fbjs@0.6.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react@15.3.1": {
      "fbjs": "npm:fbjs@0.8.4",
      "loose-envify": "npm:loose-envify@1.2.0",
      "object-assign": "npm:object-assign@4.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@2.1.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-shims": "npm:buffer-shims@1.0.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@1.0.7",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:redux-mock-store@0.0.6": {
      "expect": "npm:expect@1.20.2"
    },
    "npm:redux@3.6.0": {
      "lodash": "npm:lodash@4.15.0",
      "lodash-es": "npm:lodash-es@4.15.0",
      "loose-envify": "npm:loose-envify@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "symbol-observable": "npm:symbol-observable@1.0.2"
    },
    "npm:regenerator-runtime@0.9.5": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:region-align@2.1.3": {
      "object-assign": "npm:object-assign@4.1.0",
      "region": "npm:region@2.1.2"
    },
    "npm:region@2.1.2": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "hasown": "npm:hasown@1.0.1",
      "newify": "npm:newify@1.1.9",
      "object-assign": "npm:object-assign@2.1.1"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sha.js@2.4.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:systemjs@0.19.38": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "when": "npm:when@3.7.7"
    },
    "npm:tmatch@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ua-parser-js@0.7.10": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:uncontrollable@4.0.3": {
      "invariant": "npm:invariant@2.2.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@15.3.1"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:ustring@1.4.1": {
      "functionally": "npm:functionally@0.6.2",
      "i-s": "npm:i-s@1.2.3"
    },
    "npm:util-deprecate@1.0.2": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:warning@2.1.0": {
      "loose-envify": "npm:loose-envify@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:warning@3.0.0": {
      "loose-envify": "npm:loose-envify@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:when@3.7.7": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
