SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "semantic-ui-jspm-issue/": "src/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.20"
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "semantic-ui-jspm-issue": {
      "main": "index.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "ajv": "npm:ajv@4.11.2",
    "assert": "npm:jspm-nodelibs-assert@0.2.0",
    "babel": "npm:babel@6.5.2",
    "babel-core": "npm:babel-core@6.22.1",
    "babel-loader": "npm:babel-loader@6.2.10",
    "bcrypt-pbkdf": "npm:bcrypt-pbkdf@1.0.1",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.1",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.0",
    "constants": "npm:jspm-nodelibs-constants@0.2.0",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.0",
    "dgram": "npm:jspm-nodelibs-dgram@0.2.0",
    "dns": "npm:jspm-nodelibs-dns@0.2.0",
    "domain": "npm:jspm-nodelibs-domain@0.2.0",
    "ecc-jsbn": "npm:ecc-jsbn@0.1.1",
    "events": "npm:jspm-nodelibs-events@0.2.0",
    "fs": "npm:jspm-nodelibs-fs@0.2.0",
    "fsevents": "npm:fsevents@1.0.17",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "https": "npm:jspm-nodelibs-https@0.2.1",
    "jodid25519": "npm:jodid25519@1.0.2",
    "jsbn": "npm:jsbn@0.1.0",
    "module": "npm:jspm-nodelibs-module@0.2.0",
    "net": "npm:jspm-nodelibs-net@0.2.0",
    "os": "npm:jspm-nodelibs-os@0.2.0",
    "path": "npm:jspm-nodelibs-path@0.2.1",
    "process": "npm:jspm-nodelibs-process@0.2.0",
    "querystring": "npm:jspm-nodelibs-querystring@0.2.0",
    "react": "npm:react@15.4.2",
    "react-dom": "npm:react-dom@15.4.2",
    "semantic-ui-react": "npm:semantic-ui-react@0.64.7",
    "stream": "npm:jspm-nodelibs-stream@0.2.0",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.0",
    "timers": "npm:jspm-nodelibs-timers@0.2.0",
    "tls": "npm:jspm-nodelibs-tls@0.2.0",
    "tty": "npm:jspm-nodelibs-tty@0.2.0",
    "tweetnacl": "npm:tweetnacl@0.14.5",
    "url": "npm:jspm-nodelibs-url@0.2.0",
    "util": "npm:jspm-nodelibs-util@0.2.1",
    "vm": "npm:jspm-nodelibs-vm@0.2.0",
    "webpack": "npm:webpack@2.2.1",
    "zlib": "npm:jspm-nodelibs-zlib@0.2.2"
  },
  packages: {
    "npm:react@15.4.2": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1",
        "object-assign": "npm:object-assign@4.1.1",
        "fbjs": "npm:fbjs@0.8.9"
      }
    },
    "npm:fbjs@0.8.9": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1",
        "object-assign": "npm:object-assign@4.1.1",
        "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
        "setimmediate": "npm:setimmediate@1.0.5",
        "core-js": "npm:core-js@1.2.7",
        "promise": "npm:promise@7.1.1",
        "ua-parser-js": "npm:ua-parser-js@0.7.12"
      }
    },
    "npm:loose-envify@1.3.1": {
      "map": {
        "js-tokens": "npm:js-tokens@3.0.1"
      }
    },
    "npm:isomorphic-fetch@2.2.1": {
      "map": {
        "node-fetch": "npm:node-fetch@1.6.3",
        "whatwg-fetch": "npm:whatwg-fetch@2.0.2"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.0": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:promise@7.1.1": {
      "map": {
        "asap": "npm:asap@2.0.5"
      }
    },
    "npm:node-fetch@1.6.3": {
      "map": {
        "encoding": "npm:encoding@0.1.12",
        "is-stream": "npm:is-stream@1.1.0"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.2.2"
      }
    },
    "npm:readable-stream@2.2.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "core-util-is": "npm:core-util-is@1.0.2",
        "isarray": "npm:isarray@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:encoding@0.1.12": {
      "map": {
        "iconv-lite": "npm:iconv-lite@0.4.15"
      }
    },
    "npm:jspm-nodelibs-domain@0.2.0": {
      "map": {
        "domain-browserify": "npm:domain-browser@1.1.7"
      }
    },
    "npm:jspm-nodelibs-http@0.2.0": {
      "map": {
        "http-browserify": "npm:stream-http@2.6.3"
      }
    },
    "npm:jspm-nodelibs-zlib@0.2.2": {
      "map": {
        "browserify-zlib": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.1": {
      "map": {
        "buffer": "npm:buffer@4.9.1"
      }
    },
    "npm:jspm-nodelibs-url@0.2.0": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "npm:stream-http@2.6.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.2.2",
        "builtin-status-codes": "npm:builtin-status-codes@3.0.0",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:buffer@4.9.1": {
      "map": {
        "isarray": "npm:isarray@1.0.0",
        "base64-js": "npm:base64-js@1.2.0",
        "ieee754": "npm:ieee754@1.1.8"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.2.2",
        "pako": "npm:pako@0.2.9"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.0": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.0": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:jspm-nodelibs-os@0.2.0": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "pbkdf2": "npm:pbkdf2@3.0.9",
        "create-hash": "npm:create-hash@1.1.2",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "create-hmac": "npm:create-hmac@1.1.4",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "randombytes": "npm:randombytes@2.0.3",
        "public-encrypt": "npm:public-encrypt@4.0.0"
      }
    },
    "npm:pbkdf2@3.0.9": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.3",
        "sha.js": "npm:sha.js@2.4.8",
        "ripemd160": "npm:ripemd160@1.0.1"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "inherits": "npm:inherits@2.0.3",
        "elliptic": "npm:elliptic@6.3.2",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "randombytes": "npm:randombytes@2.0.3",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "miller-rabin": "npm:miller-rabin@4.0.0",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "elliptic": "npm:elliptic@6.3.2",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-des": "npm:browserify-des@1.0.0",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.3",
        "inherits": "npm:inherits@2.0.3",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:sha.js@2.4.8": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:elliptic@6.3.2": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.3",
        "hash.js": "npm:hash.js@1.0.3",
        "brorand": "npm:brorand@1.0.6"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.3",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "inherits": "npm:inherits@2.0.3",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:cipher-base@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "brorand": "npm:brorand@1.0.6"
      }
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.9",
        "asn1.js": "npm:asn1.js@4.9.1"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:asn1.js@4.9.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:semantic-ui-react@0.64.7": {
      "map": {
        "lodash": "npm:lodash@4.17.4",
        "debug": "npm:debug@2.6.0",
        "classnames": "npm:classnames@2.2.5"
      }
    },
    "npm:debug@2.6.0": {
      "map": {
        "ms": "npm:ms@0.7.2"
      }
    },
    "npm:react-dom@15.4.2": {
      "map": {
        "fbjs": "npm:fbjs@0.8.9",
        "loose-envify": "npm:loose-envify@1.3.1",
        "object-assign": "npm:object-assign@4.1.1"
      }
    },
    "npm:babel-core@6.22.1": {
      "map": {
        "babel-helpers": "npm:babel-helpers@6.22.0",
        "slash": "npm:slash@1.0.0",
        "babel-generator": "npm:babel-generator@6.22.0",
        "babel-register": "npm:babel-register@6.22.0",
        "json5": "npm:json5@0.5.1",
        "babel-template": "npm:babel-template@6.22.0",
        "convert-source-map": "npm:convert-source-map@1.3.0",
        "babel-runtime": "npm:babel-runtime@6.22.0",
        "source-map": "npm:source-map@0.5.6",
        "lodash": "npm:lodash@4.17.4",
        "debug": "npm:debug@2.6.0",
        "babel-code-frame": "npm:babel-code-frame@6.22.0",
        "path-is-absolute": "npm:path-is-absolute@1.0.1",
        "private": "npm:private@0.1.7",
        "babel-types": "npm:babel-types@6.22.0",
        "babel-traverse": "npm:babel-traverse@6.22.1",
        "minimatch": "npm:minimatch@3.0.3",
        "babel-messages": "npm:babel-messages@6.22.0",
        "babylon": "npm:babylon@6.15.0"
      }
    },
    "npm:babel-loader@6.2.10": {
      "map": {
        "find-cache-dir": "npm:find-cache-dir@0.1.1",
        "object-assign": "npm:object-assign@4.1.1",
        "mkdirp": "npm:mkdirp@0.5.1",
        "loader-utils": "npm:loader-utils@0.2.16"
      }
    },
    "npm:babel-helpers@6.22.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.22.0",
        "babel-template": "npm:babel-template@6.22.0"
      }
    },
    "npm:babel-generator@6.22.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.22.0",
        "source-map": "npm:source-map@0.5.6",
        "lodash": "npm:lodash@4.17.4",
        "babel-types": "npm:babel-types@6.22.0",
        "babel-messages": "npm:babel-messages@6.22.0",
        "detect-indent": "npm:detect-indent@4.0.0",
        "jsesc": "npm:jsesc@1.3.0"
      }
    },
    "npm:babel-register@6.22.0": {
      "map": {
        "lodash": "npm:lodash@4.17.4",
        "babel-core": "npm:babel-core@6.22.1",
        "babel-runtime": "npm:babel-runtime@6.22.0",
        "mkdirp": "npm:mkdirp@0.5.1",
        "core-js": "npm:core-js@2.4.1",
        "source-map-support": "npm:source-map-support@0.4.11",
        "home-or-tmp": "npm:home-or-tmp@2.0.0"
      }
    },
    "npm:babel-template@6.22.0": {
      "map": {
        "lodash": "npm:lodash@4.17.4",
        "babel-runtime": "npm:babel-runtime@6.22.0",
        "babel-types": "npm:babel-types@6.22.0",
        "babel-traverse": "npm:babel-traverse@6.22.1",
        "babylon": "npm:babylon@6.15.0"
      }
    },
    "npm:find-cache-dir@0.1.1": {
      "map": {
        "mkdirp": "npm:mkdirp@0.5.1",
        "pkg-dir": "npm:pkg-dir@1.0.0",
        "commondir": "npm:commondir@1.0.1"
      }
    },
    "npm:loader-utils@0.2.16": {
      "map": {
        "object-assign": "npm:object-assign@4.1.1",
        "json5": "npm:json5@0.5.1",
        "emojis-list": "npm:emojis-list@2.1.0",
        "big.js": "npm:big.js@3.1.3"
      }
    },
    "npm:babel-types@6.22.0": {
      "map": {
        "lodash": "npm:lodash@4.17.4",
        "babel-runtime": "npm:babel-runtime@6.22.0",
        "esutils": "npm:esutils@2.0.2",
        "to-fast-properties": "npm:to-fast-properties@1.0.2"
      }
    },
    "npm:babel-traverse@6.22.1": {
      "map": {
        "debug": "npm:debug@2.6.0",
        "lodash": "npm:lodash@4.17.4",
        "babel-code-frame": "npm:babel-code-frame@6.22.0",
        "babel-messages": "npm:babel-messages@6.22.0",
        "babel-runtime": "npm:babel-runtime@6.22.0",
        "babel-types": "npm:babel-types@6.22.0",
        "babylon": "npm:babylon@6.15.0",
        "globals": "npm:globals@9.14.0",
        "invariant": "npm:invariant@2.2.2"
      }
    },
    "npm:babel-code-frame@6.22.0": {
      "map": {
        "esutils": "npm:esutils@2.0.2",
        "js-tokens": "npm:js-tokens@3.0.1",
        "chalk": "npm:chalk@1.1.3"
      }
    },
    "npm:babel-runtime@6.22.0": {
      "map": {
        "core-js": "npm:core-js@2.4.1",
        "regenerator-runtime": "npm:regenerator-runtime@0.10.1"
      }
    },
    "npm:babel-messages@6.22.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.22.0"
      }
    },
    "npm:mkdirp@0.5.1": {
      "map": {
        "minimist": "npm:minimist@0.0.8"
      }
    },
    "npm:minimatch@3.0.3": {
      "map": {
        "brace-expansion": "npm:brace-expansion@1.1.6"
      }
    },
    "npm:source-map-support@0.4.11": {
      "map": {
        "source-map": "npm:source-map@0.5.6"
      }
    },
    "npm:invariant@2.2.2": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1"
      }
    },
    "npm:pkg-dir@1.0.0": {
      "map": {
        "find-up": "npm:find-up@1.1.2"
      }
    },
    "npm:home-or-tmp@2.0.0": {
      "map": {
        "os-tmpdir": "npm:os-tmpdir@1.0.2",
        "os-homedir": "npm:os-homedir@1.0.2"
      }
    },
    "npm:detect-indent@4.0.0": {
      "map": {
        "repeating": "npm:repeating@2.0.1"
      }
    },
    "npm:brace-expansion@1.1.6": {
      "map": {
        "concat-map": "npm:concat-map@0.0.1",
        "balanced-match": "npm:balanced-match@0.4.2"
      }
    },
    "npm:chalk@1.1.3": {
      "map": {
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "has-ansi": "npm:has-ansi@2.0.0",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "supports-color": "npm:supports-color@2.0.0",
        "ansi-styles": "npm:ansi-styles@2.2.1"
      }
    },
    "npm:find-up@1.1.2": {
      "map": {
        "pinkie-promise": "npm:pinkie-promise@2.0.1",
        "path-exists": "npm:path-exists@2.1.0"
      }
    },
    "npm:repeating@2.0.1": {
      "map": {
        "is-finite": "npm:is-finite@1.0.2"
      }
    },
    "npm:path-exists@2.1.0": {
      "map": {
        "pinkie-promise": "npm:pinkie-promise@2.0.1"
      }
    },
    "npm:webpack@2.2.1": {
      "map": {
        "supports-color": "npm:supports-color@3.2.3",
        "source-map": "npm:source-map@0.5.6",
        "loader-utils": "npm:loader-utils@0.2.16",
        "mkdirp": "npm:mkdirp@0.5.1",
        "json-loader": "npm:json-loader@0.5.4",
        "acorn-dynamic-import": "npm:acorn-dynamic-import@2.0.1",
        "memory-fs": "npm:memory-fs@0.4.1",
        "loader-runner": "npm:loader-runner@2.3.0",
        "webpack-sources": "npm:webpack-sources@0.1.4",
        "tapable": "npm:tapable@0.2.6",
        "watchpack": "npm:watchpack@1.2.0",
        "node-libs-browser": "npm:node-libs-browser@2.0.0",
        "interpret": "npm:interpret@1.0.1",
        "ajv-keywords": "npm:ajv-keywords@1.5.1",
        "enhanced-resolve": "npm:enhanced-resolve@3.1.0",
        "async": "npm:async@2.1.4",
        "acorn": "npm:acorn@4.0.8",
        "uglify-js": "npm:uglify-js@2.7.5",
        "yargs": "npm:yargs@6.6.0",
        "ajv": "npm:ajv@4.11.2"
      }
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.1.1"
      }
    },
    "npm:has-ansi@2.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.1.1"
      }
    },
    "npm:pinkie-promise@2.0.1": {
      "map": {
        "pinkie": "npm:pinkie@2.0.4"
      }
    },
    "npm:is-finite@1.0.2": {
      "map": {
        "number-is-nan": "npm:number-is-nan@1.0.1"
      }
    },
    "npm:supports-color@3.2.3": {
      "map": {
        "has-flag": "npm:has-flag@1.0.0"
      }
    },
    "npm:webpack-sources@0.1.4": {
      "map": {
        "source-map": "npm:source-map@0.5.6",
        "source-list-map": "npm:source-list-map@0.1.8"
      }
    },
    "npm:node-libs-browser@2.0.0": {
      "map": {
        "buffer": "npm:buffer@4.9.1",
        "stream-browserify": "npm:stream-browserify@2.0.1",
        "readable-stream": "npm:readable-stream@2.2.2",
        "path-browserify": "npm:path-browserify@0.0.0",
        "constants-browserify": "npm:constants-browserify@1.0.0",
        "browserify-zlib": "npm:browserify-zlib@0.1.4",
        "domain-browser": "npm:domain-browser@1.1.7",
        "timers-browserify": "npm:timers-browserify@2.0.2",
        "https-browserify": "npm:https-browserify@0.0.1",
        "events": "npm:events@1.1.1",
        "os-browserify": "npm:os-browserify@0.2.1",
        "string_decoder": "npm:string_decoder@0.10.31",
        "stream-http": "npm:stream-http@2.6.3",
        "process": "npm:process@0.11.9",
        "util": "npm:util@0.10.3",
        "url": "npm:url@0.11.0",
        "punycode": "npm:punycode@1.4.1",
        "console-browserify": "npm:console-browserify@1.1.0",
        "querystring-es3": "npm:querystring-es3@0.2.1",
        "tty-browserify": "npm:tty-browserify@0.0.0",
        "vm-browserify": "npm:vm-browserify@0.0.4",
        "assert": "npm:assert@1.4.1",
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:watchpack@1.2.0": {
      "map": {
        "async": "npm:async@2.1.4",
        "graceful-fs": "npm:graceful-fs@4.1.11",
        "chokidar": "npm:chokidar@1.6.1"
      }
    },
    "npm:enhanced-resolve@3.1.0": {
      "map": {
        "object-assign": "npm:object-assign@4.1.1",
        "memory-fs": "npm:memory-fs@0.4.1",
        "tapable": "npm:tapable@0.2.6",
        "graceful-fs": "npm:graceful-fs@4.1.11"
      }
    },
    "npm:acorn-dynamic-import@2.0.1": {
      "map": {
        "acorn": "npm:acorn@4.0.8"
      }
    },
    "npm:async@2.1.4": {
      "map": {
        "lodash": "npm:lodash@4.17.4"
      }
    },
    "npm:memory-fs@0.4.1": {
      "map": {
        "readable-stream": "npm:readable-stream@2.2.2",
        "errno": "npm:errno@0.1.4"
      }
    },
    "npm:uglify-js@2.7.5": {
      "map": {
        "async": "npm:async@0.2.10",
        "source-map": "npm:source-map@0.5.6",
        "yargs": "npm:yargs@3.10.0",
        "uglify-to-browserify": "npm:uglify-to-browserify@1.0.2"
      }
    },
    "npm:timers-browserify@2.0.2": {
      "map": {
        "setimmediate": "npm:setimmediate@1.0.5"
      }
    },
    "npm:assert@1.4.1": {
      "map": {
        "util": "npm:util@0.10.3"
      }
    },
    "npm:util@0.10.3": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:errno@0.1.4": {
      "map": {
        "prr": "npm:prr@0.0.0"
      }
    },
    "npm:chokidar@1.6.1": {
      "map": {
        "path-is-absolute": "npm:path-is-absolute@1.0.1",
        "inherits": "npm:inherits@2.0.3",
        "is-binary-path": "npm:is-binary-path@1.0.1",
        "async-each": "npm:async-each@1.0.1",
        "anymatch": "npm:anymatch@1.3.0",
        "glob-parent": "npm:glob-parent@2.0.0",
        "is-glob": "npm:is-glob@2.0.1",
        "readdirp": "npm:readdirp@2.1.0"
      }
    },
    "npm:vm-browserify@0.0.4": {
      "map": {
        "indexof": "npm:indexof@0.0.1"
      }
    },
    "npm:console-browserify@1.1.0": {
      "map": {
        "date-now": "npm:date-now@0.1.4"
      }
    },
    "npm:yargs@6.6.0": {
      "map": {
        "get-caller-file": "npm:get-caller-file@1.0.2",
        "decamelize": "npm:decamelize@1.2.0",
        "read-pkg-up": "npm:read-pkg-up@1.0.1",
        "string-width": "npm:string-width@1.0.2",
        "which-module": "npm:which-module@1.0.0",
        "os-locale": "npm:os-locale@1.4.0",
        "y18n": "npm:y18n@3.2.1",
        "camelcase": "npm:camelcase@3.0.0",
        "require-main-filename": "npm:require-main-filename@1.0.1",
        "set-blocking": "npm:set-blocking@2.0.0",
        "cliui": "npm:cliui@3.2.0",
        "require-directory": "npm:require-directory@2.1.1",
        "yargs-parser": "npm:yargs-parser@4.2.1"
      }
    },
    "npm:yargs@3.10.0": {
      "map": {
        "decamelize": "npm:decamelize@1.2.0",
        "window-size": "npm:window-size@0.1.0",
        "camelcase": "npm:camelcase@1.2.1",
        "cliui": "npm:cliui@2.1.0"
      }
    },
    "npm:read-pkg-up@1.0.1": {
      "map": {
        "find-up": "npm:find-up@1.1.2",
        "read-pkg": "npm:read-pkg@1.1.0"
      }
    },
    "npm:string-width@1.0.2": {
      "map": {
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "code-point-at": "npm:code-point-at@1.1.0",
        "is-fullwidth-code-point": "npm:is-fullwidth-code-point@1.0.0"
      }
    },
    "npm:cliui@3.2.0": {
      "map": {
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "string-width": "npm:string-width@1.0.2",
        "wrap-ansi": "npm:wrap-ansi@2.1.0"
      }
    },
    "npm:yargs-parser@4.2.1": {
      "map": {
        "camelcase": "npm:camelcase@3.0.0"
      }
    },
    "npm:ajv@4.11.2": {
      "map": {
        "json-stable-stringify": "npm:json-stable-stringify@1.0.1",
        "co": "npm:co@4.6.0"
      }
    },
    "npm:glob-parent@2.0.0": {
      "map": {
        "is-glob": "npm:is-glob@2.0.1"
      }
    },
    "npm:readdirp@2.1.0": {
      "map": {
        "minimatch": "npm:minimatch@3.0.3",
        "readable-stream": "npm:readable-stream@2.2.2",
        "graceful-fs": "npm:graceful-fs@4.1.11",
        "set-immediate-shim": "npm:set-immediate-shim@1.0.1"
      }
    },
    "npm:os-locale@1.4.0": {
      "map": {
        "lcid": "npm:lcid@1.0.0"
      }
    },
    "npm:cliui@2.1.0": {
      "map": {
        "center-align": "npm:center-align@0.1.3",
        "wordwrap": "npm:wordwrap@0.0.2",
        "right-align": "npm:right-align@0.1.3"
      }
    },
    "npm:is-fullwidth-code-point@1.0.0": {
      "map": {
        "number-is-nan": "npm:number-is-nan@1.0.1"
      }
    },
    "npm:is-binary-path@1.0.1": {
      "map": {
        "binary-extensions": "npm:binary-extensions@1.8.0"
      }
    },
    "npm:anymatch@1.3.0": {
      "map": {
        "arrify": "npm:arrify@1.0.1",
        "micromatch": "npm:micromatch@2.3.11"
      }
    },
    "npm:is-glob@2.0.1": {
      "map": {
        "is-extglob": "npm:is-extglob@1.0.0"
      }
    },
    "npm:wrap-ansi@2.1.0": {
      "map": {
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "string-width": "npm:string-width@1.0.2"
      }
    },
    "npm:json-stable-stringify@1.0.1": {
      "map": {
        "jsonify": "npm:jsonify@0.0.0"
      }
    },
    "npm:read-pkg@1.1.0": {
      "map": {
        "load-json-file": "npm:load-json-file@1.1.0",
        "path-type": "npm:path-type@1.1.0",
        "normalize-package-data": "npm:normalize-package-data@2.3.5"
      }
    },
    "npm:lcid@1.0.0": {
      "map": {
        "invert-kv": "npm:invert-kv@1.0.0"
      }
    },
    "npm:load-json-file@1.1.0": {
      "map": {
        "pinkie-promise": "npm:pinkie-promise@2.0.1",
        "graceful-fs": "npm:graceful-fs@4.1.11",
        "strip-bom": "npm:strip-bom@2.0.0",
        "parse-json": "npm:parse-json@2.2.0",
        "pify": "npm:pify@2.3.0"
      }
    },
    "npm:path-type@1.1.0": {
      "map": {
        "pinkie-promise": "npm:pinkie-promise@2.0.1",
        "graceful-fs": "npm:graceful-fs@4.1.11",
        "pify": "npm:pify@2.3.0"
      }
    },
    "npm:micromatch@2.3.11": {
      "map": {
        "is-extglob": "npm:is-extglob@1.0.0",
        "is-glob": "npm:is-glob@2.0.1",
        "filename-regex": "npm:filename-regex@2.0.0",
        "arr-diff": "npm:arr-diff@2.0.0",
        "normalize-path": "npm:normalize-path@2.0.1",
        "array-unique": "npm:array-unique@0.2.1",
        "object.omit": "npm:object.omit@2.0.1",
        "extglob": "npm:extglob@0.3.2",
        "parse-glob": "npm:parse-glob@3.0.4",
        "regex-cache": "npm:regex-cache@0.4.3",
        "kind-of": "npm:kind-of@3.1.0",
        "expand-brackets": "npm:expand-brackets@0.1.5",
        "braces": "npm:braces@1.8.5"
      }
    },
    "npm:center-align@0.1.3": {
      "map": {
        "align-text": "npm:align-text@0.1.4",
        "lazy-cache": "npm:lazy-cache@1.0.4"
      }
    },
    "npm:right-align@0.1.3": {
      "map": {
        "align-text": "npm:align-text@0.1.4"
      }
    },
    "npm:fsevents@1.0.17": {
      "map": {
        "nan": "npm:nan@2.5.1",
        "node-pre-gyp": "npm:node-pre-gyp@0.6.33"
      }
    },
    "npm:node-pre-gyp@0.6.33": {
      "map": {
        "mkdirp": "npm:mkdirp@0.5.1",
        "semver": "npm:semver@5.3.0",
        "tar-pack": "npm:tar-pack@3.3.0",
        "tar": "npm:tar@2.2.1",
        "rc": "npm:rc@1.1.6",
        "nopt": "npm:nopt@3.0.6",
        "npmlog": "npm:npmlog@4.0.2",
        "rimraf": "npm:rimraf@2.5.4",
        "request": "npm:request@2.79.0"
      }
    },
    "npm:align-text@0.1.4": {
      "map": {
        "kind-of": "npm:kind-of@3.1.0",
        "longest": "npm:longest@1.0.1",
        "repeat-string": "npm:repeat-string@1.6.1"
      }
    },
    "npm:normalize-package-data@2.3.5": {
      "map": {
        "is-builtin-module": "npm:is-builtin-module@1.0.0",
        "validate-npm-package-license": "npm:validate-npm-package-license@3.0.1",
        "hosted-git-info": "npm:hosted-git-info@2.1.5",
        "semver": "npm:semver@5.3.0"
      }
    },
    "npm:extglob@0.3.2": {
      "map": {
        "is-extglob": "npm:is-extglob@1.0.0"
      }
    },
    "npm:parse-glob@3.0.4": {
      "map": {
        "is-glob": "npm:is-glob@2.0.1",
        "is-extglob": "npm:is-extglob@1.0.0",
        "is-dotfile": "npm:is-dotfile@1.0.2",
        "glob-base": "npm:glob-base@0.3.0"
      }
    },
    "npm:strip-bom@2.0.0": {
      "map": {
        "is-utf8": "npm:is-utf8@0.2.1"
      }
    },
    "npm:parse-json@2.2.0": {
      "map": {
        "error-ex": "npm:error-ex@1.3.0"
      }
    },
    "npm:arr-diff@2.0.0": {
      "map": {
        "arr-flatten": "npm:arr-flatten@1.0.1"
      }
    },
    "npm:object.omit@2.0.1": {
      "map": {
        "is-extendable": "npm:is-extendable@0.1.1",
        "for-own": "npm:for-own@0.1.4"
      }
    },
    "npm:tar-pack@3.3.0": {
      "map": {
        "debug": "npm:debug@2.2.0",
        "readable-stream": "npm:readable-stream@2.1.5",
        "rimraf": "npm:rimraf@2.5.4",
        "tar": "npm:tar@2.2.1",
        "uid-number": "npm:uid-number@0.0.6",
        "fstream-ignore": "npm:fstream-ignore@1.0.5",
        "fstream": "npm:fstream@1.0.10",
        "once": "npm:once@1.3.3"
      }
    },
    "npm:rc@1.1.6": {
      "map": {
        "minimist": "npm:minimist@1.2.0",
        "ini": "npm:ini@1.3.4",
        "deep-extend": "npm:deep-extend@0.4.1",
        "strip-json-comments": "npm:strip-json-comments@1.0.4"
      }
    },
    "npm:regex-cache@0.4.3": {
      "map": {
        "is-primitive": "npm:is-primitive@2.0.0",
        "is-equal-shallow": "npm:is-equal-shallow@0.1.3"
      }
    },
    "npm:is-builtin-module@1.0.0": {
      "map": {
        "builtin-modules": "npm:builtin-modules@1.1.1"
      }
    },
    "npm:expand-brackets@0.1.5": {
      "map": {
        "is-posix-bracket": "npm:is-posix-bracket@0.1.1"
      }
    },
    "npm:validate-npm-package-license@3.0.1": {
      "map": {
        "spdx-correct": "npm:spdx-correct@1.0.2",
        "spdx-expression-parse": "npm:spdx-expression-parse@1.0.4"
      }
    },
    "npm:npmlog@4.0.2": {
      "map": {
        "set-blocking": "npm:set-blocking@2.0.0",
        "console-control-strings": "npm:console-control-strings@1.1.0",
        "are-we-there-yet": "npm:are-we-there-yet@1.1.2",
        "gauge": "npm:gauge@2.7.2"
      }
    },
    "npm:kind-of@3.1.0": {
      "map": {
        "is-buffer": "npm:is-buffer@1.1.4"
      }
    },
    "npm:braces@1.8.5": {
      "map": {
        "repeat-element": "npm:repeat-element@1.1.2",
        "preserve": "npm:preserve@0.2.0",
        "expand-range": "npm:expand-range@1.8.2"
      }
    },
    "npm:tar@2.2.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "block-stream": "npm:block-stream@0.0.9",
        "fstream": "npm:fstream@1.0.10"
      }
    },
    "npm:readable-stream@2.1.5": {
      "map": {
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.3",
        "isarray": "npm:isarray@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:glob-base@0.3.0": {
      "map": {
        "glob-parent": "npm:glob-parent@2.0.0",
        "is-glob": "npm:is-glob@2.0.1"
      }
    },
    "npm:is-equal-shallow@0.1.3": {
      "map": {
        "is-primitive": "npm:is-primitive@2.0.0"
      }
    },
    "npm:debug@2.2.0": {
      "map": {
        "ms": "npm:ms@0.7.1"
      }
    },
    "npm:nopt@3.0.6": {
      "map": {
        "abbrev": "npm:abbrev@1.0.9"
      }
    },
    "npm:error-ex@1.3.0": {
      "map": {
        "is-arrayish": "npm:is-arrayish@0.2.1"
      }
    },
    "npm:block-stream@0.0.9": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:fstream-ignore@1.0.5": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimatch": "npm:minimatch@3.0.3",
        "fstream": "npm:fstream@1.0.10"
      }
    },
    "npm:for-own@0.1.4": {
      "map": {
        "for-in": "npm:for-in@0.1.6"
      }
    },
    "npm:spdx-correct@1.0.2": {
      "map": {
        "spdx-license-ids": "npm:spdx-license-ids@1.2.2"
      }
    },
    "npm:fstream@1.0.10": {
      "map": {
        "graceful-fs": "npm:graceful-fs@4.1.11",
        "inherits": "npm:inherits@2.0.3",
        "mkdirp": "npm:mkdirp@0.5.1",
        "rimraf": "npm:rimraf@2.5.4"
      }
    },
    "npm:are-we-there-yet@1.1.2": {
      "map": {
        "readable-stream": "npm:readable-stream@1.1.14",
        "delegates": "npm:delegates@1.0.0"
      }
    },
    "npm:gauge@2.7.2": {
      "map": {
        "supports-color": "npm:supports-color@0.2.0",
        "object-assign": "npm:object-assign@4.1.1",
        "string-width": "npm:string-width@1.0.2",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "console-control-strings": "npm:console-control-strings@1.1.0",
        "aproba": "npm:aproba@1.0.4",
        "has-unicode": "npm:has-unicode@2.0.1",
        "wide-align": "npm:wide-align@1.1.0",
        "signal-exit": "npm:signal-exit@3.0.2"
      }
    },
    "npm:expand-range@1.8.2": {
      "map": {
        "fill-range": "npm:fill-range@2.2.3"
      }
    },
    "npm:readable-stream@1.1.14": {
      "map": {
        "isarray": "npm:isarray@0.0.1",
        "stream-browserify": "npm:stream-browserify@1.0.0",
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.3",
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:rimraf@2.5.4": {
      "map": {
        "glob": "npm:glob@7.1.1"
      }
    },
    "npm:request@2.79.0": {
      "map": {
        "uuid": "npm:uuid@3.0.1",
        "is-typedarray": "npm:is-typedarray@1.0.0",
        "aws-sign2": "npm:aws-sign2@0.6.0",
        "forever-agent": "npm:forever-agent@0.6.1",
        "caseless": "npm:caseless@0.11.0",
        "oauth-sign": "npm:oauth-sign@0.8.2",
        "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
        "isstream": "npm:isstream@0.1.2",
        "stringstream": "npm:stringstream@0.0.5",
        "tunnel-agent": "npm:tunnel-agent@0.4.3",
        "extend": "npm:extend@3.0.0",
        "http-signature": "npm:http-signature@1.1.1",
        "combined-stream": "npm:combined-stream@1.0.5",
        "form-data": "npm:form-data@2.1.2",
        "mime-types": "npm:mime-types@2.1.14",
        "aws4": "npm:aws4@1.5.0",
        "har-validator": "npm:har-validator@2.0.6",
        "qs": "npm:qs@6.3.0",
        "tough-cookie": "npm:tough-cookie@2.3.2",
        "hawk": "npm:hawk@3.1.3"
      }
    },
    "npm:fill-range@2.2.3": {
      "map": {
        "repeat-element": "npm:repeat-element@1.1.2",
        "repeat-string": "npm:repeat-string@1.6.1",
        "is-number": "npm:is-number@2.1.0",
        "randomatic": "npm:randomatic@1.1.6",
        "isobject": "npm:isobject@2.1.0"
      }
    },
    "npm:stream-browserify@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@1.1.14"
      }
    },
    "npm:glob@7.1.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimatch": "npm:minimatch@3.0.3",
        "path-is-absolute": "npm:path-is-absolute@1.0.1",
        "once": "npm:once@1.4.0",
        "fs.realpath": "npm:fs.realpath@1.0.0",
        "inflight": "npm:inflight@1.0.6"
      }
    },
    "npm:once@1.3.3": {
      "map": {
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:once@1.4.0": {
      "map": {
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:wide-align@1.1.0": {
      "map": {
        "string-width": "npm:string-width@1.0.2"
      }
    },
    "npm:form-data@2.1.2": {
      "map": {
        "combined-stream": "npm:combined-stream@1.0.5",
        "mime-types": "npm:mime-types@2.1.14",
        "asynckit": "npm:asynckit@0.4.0"
      }
    },
    "npm:har-validator@2.0.6": {
      "map": {
        "chalk": "npm:chalk@1.1.3",
        "pinkie-promise": "npm:pinkie-promise@2.0.1",
        "is-my-json-valid": "npm:is-my-json-valid@2.15.0",
        "commander": "npm:commander@2.9.0"
      }
    },
    "npm:tough-cookie@2.3.2": {
      "map": {
        "punycode": "npm:punycode@1.4.1"
      }
    },
    "npm:is-number@2.1.0": {
      "map": {
        "kind-of": "npm:kind-of@3.1.0"
      }
    },
    "npm:randomatic@1.1.6": {
      "map": {
        "kind-of": "npm:kind-of@3.1.0",
        "is-number": "npm:is-number@2.1.0"
      }
    },
    "npm:isobject@2.1.0": {
      "map": {
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "npm:inflight@1.0.6": {
      "map": {
        "once": "npm:once@1.4.0",
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:http-signature@1.1.1": {
      "map": {
        "assert-plus": "npm:assert-plus@0.2.0",
        "jsprim": "npm:jsprim@1.3.1",
        "sshpk": "npm:sshpk@1.10.2"
      }
    },
    "npm:combined-stream@1.0.5": {
      "map": {
        "delayed-stream": "npm:delayed-stream@1.0.0"
      }
    },
    "npm:jspm-nodelibs-timers@0.2.0": {
      "map": {
        "timers-browserify": "npm:timers-browserify@1.4.2"
      }
    },
    "npm:mime-types@2.1.14": {
      "map": {
        "mime-db": "npm:mime-db@1.26.0"
      }
    },
    "npm:timers-browserify@1.4.2": {
      "map": {
        "process": "npm:process@0.11.9"
      }
    },
    "npm:hawk@3.1.3": {
      "map": {
        "cryptiles": "npm:cryptiles@2.0.5",
        "sntp": "npm:sntp@1.0.9",
        "boom": "npm:boom@2.10.1",
        "hoek": "npm:hoek@2.16.3"
      }
    },
    "npm:sshpk@1.10.2": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0",
        "asn1": "npm:asn1@0.2.3",
        "getpass": "npm:getpass@0.1.6",
        "dashdash": "npm:dashdash@1.14.1"
      }
    },
    "npm:sntp@1.0.9": {
      "map": {
        "hoek": "npm:hoek@2.16.3"
      }
    },
    "npm:is-my-json-valid@2.15.0": {
      "map": {
        "xtend": "npm:xtend@4.0.1",
        "generate-object-property": "npm:generate-object-property@1.2.0",
        "jsonpointer": "npm:jsonpointer@4.0.1",
        "generate-function": "npm:generate-function@2.0.0"
      }
    },
    "npm:cryptiles@2.0.5": {
      "map": {
        "boom": "npm:boom@2.10.1"
      }
    },
    "npm:jsprim@1.3.1": {
      "map": {
        "json-schema": "npm:json-schema@0.2.3",
        "extsprintf": "npm:extsprintf@1.0.2",
        "verror": "npm:verror@1.3.6"
      }
    },
    "npm:boom@2.10.1": {
      "map": {
        "hoek": "npm:hoek@2.16.3"
      }
    },
    "npm:bcrypt-pbkdf@1.0.1": {
      "map": {
        "tweetnacl": "npm:tweetnacl@0.14.5"
      }
    },
    "npm:ecc-jsbn@0.1.1": {
      "map": {
        "jsbn": "npm:jsbn@0.1.0"
      }
    },
    "npm:jodid25519@1.0.2": {
      "map": {
        "jsbn": "npm:jsbn@0.1.0"
      }
    },
    "npm:getpass@0.1.6": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0"
      }
    },
    "npm:verror@1.3.6": {
      "map": {
        "extsprintf": "npm:extsprintf@1.0.2"
      }
    },
    "npm:commander@2.9.0": {
      "map": {
        "graceful-readlink": "npm:graceful-readlink@1.0.1"
      }
    },
    "npm:dashdash@1.14.1": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0"
      }
    },
    "npm:generate-object-property@1.2.0": {
      "map": {
        "is-property": "npm:is-property@1.0.2"
      }
    }
  }
});
