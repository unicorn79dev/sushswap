if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,r)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const n={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-1c7cfa15"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/DSXf7sda-W9NHcG3FvKY1/_buildManifest.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/DSXf7sda-W9NHcG3FvKY1/_ssgManifest.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/03871d1c-ee7ffaf2d6bd21b37e3a.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/1256.3d0adaa9ff0b14519288.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/1431.67db9f13327578c00df4.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/144-00a0a6d37f5bc15c73ac.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/1541-f3afbc9784dd7c549600.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/1809.bd780c4c303ebe0fcb4a.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/1866.55cb23215fa6c4050d68.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/1985-5bbb33ffbdb20216240a.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/2099-2ca0c129b32dafa63d96.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/2200-a437e03d083ee0ae6b52.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/2478-a517fae78afc284633ac.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/2631-128194b92b2f2d864b3c.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/2782.f45dff09c3973b97f744.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/3004-8d0291971c077a054d82.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/3129-0f97ec685dfd64657f76.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/313-121e97f0925c30f96734.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/323-1e4c130d7e697a1f1166.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/3418-b0e0345a5c6b97197bd7.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/3720-61d151e8fa9b3d6d4b42.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/375670f6-fc1ed969f9f3ade46a2e.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/3848.58ddf2750182dcf3a1f2.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/4002.316ddc02ac15ec66f8b3.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/4071-0941018902a7091a1850.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/4102-ea262f5553e808a03262.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/4214.0f545191b45e1f41d4f1.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/4241-d5f3ca39a7d17d6b960c.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/5070.62397c1f126909491b74.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/5554.80d2b519b40bbd2c3859.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/5743.ac961b5c800b786aabbf.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/6033-c555217dff982426749d.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/6264.e62bf8c324ffaee38891.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/6894.92d50f7975ec964ab9ff.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/6932.714a2609fbc65ae05034.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/6bb294b1-a0a94537a3e1258123f5.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/7019.fbf354bbf6281641f1f2.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/70aa133f.977e4869f59681a86023.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/7279-8e6b8854bad9b10ac4f9.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/72f0048f-e0710925b9c16878f6fb.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/7331.4901dacb372fc3f068ff.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/7639-48418b021e297cfa1b2e.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/767-9a6f73ece14feaab1029.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/7830.3acdc18e8207693604a5.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/8057-03f56fedb7a59286adb5.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/8163.584af60cf5278cd7a402.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/8292.f6d37cc499799b533f12.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/84.f7f53632788964b669b7.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/8457.78be151453c903fe25e4.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/8536.5c169c9deda6e50261bc.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/8674-b437c2e646658c31ed11.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/8796.79d1dbe65edd7304c892.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/8867-9aa3494bc879283f5efb.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/9090.66c73a95be920278a2e5.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/9312-227ee2083e437b2227ed.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/9374-723f29b8881997b13a13.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/9457d73a.9a7a31e91a0002be0e98.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/9504.283390e17a4b9c14c05b.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/9cb7a7c1-5b3ef86ee5381e5800ae.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/c78d26b1-a79a5da156c1237db879.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/commons-2bc9f9ff4df1cf0b878d.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/e875fc17-e99bf32a5dcd29f5d3f7.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/framework-0131ed6397b35b057069.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/main-0319fd02900aa950962a.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/pages/_app-7c4e78edc26bb564723b.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/pages/_error-fdc6dcaf18f179cc8c91.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/pages/add/%5B[...tokens%5D%5D-b0843e7b4453fc80db8f.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/pages/analytics-25dfb4679c97ebb56551.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/pages/balances-290718b1565bcf50f688.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/pages/bentobox-aae7cc09827be7492c95.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/pages/borrow-b8dbaeb36547ef6377d3.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/pages/borrow/%5Bpair%5D-c18544c4f682ea56e555.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/pages/farm-c9db958a2ec20d1fd321.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/pages/find-74746fa05bb1ed2517d9.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/pages/index-b1c4c81d43ad6fc6111e.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/pages/lend-1dfaf5ed3f40ee43abf0.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/pages/lend/%5Bpair%5D-a962976040297e1dfde6.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/pages/limit-order-cfd60a464aa9a1d3efde.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/pages/migrate-572d85983a70bf0c84f2.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/pages/miso-581c89bc974658dedb98.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/pages/pairs-acf9be97686c9076a993.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/pages/pool-b4a2a358a3ef2d1d8865.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/pages/remove/%5B[...tokens%5D%5D-658d2a48499bd036872b.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/pages/settings-01e4851c91b46a93766a.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/pages/stake-ea403afb909ededcd32e.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/pages/swap-70ef5f04861c8594ba4a.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/pages/token/%5Bid%5D-fecc9b88667d4a33e73f.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/pages/tokens-d96c5b0ff2f92eaaf877.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/pages/tools-038b7d1d27551f30eed6.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/pages/tools/meowshi-518a2ff8971013d3ce6e.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/pages/tools/saave-4e47255e0ba52bd2cc60.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/pages/transactions-4241f23796a0f19f4534.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/pages/vaults-a330ca568a768a409140.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/pages/vesting-af4cd1a3ab7777dda6f6.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/polyfills-a69ea31819cc82dc2ab1.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/chunks/webpack-690a5527e7a0054dc9af.js",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/css/1d01fe62c88c7a213802.css",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/css/7155d242bbc0b9cedfed.css",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/media/dm-sans-all-400-normal.484bce2203e0d3f842b844fb96db73fe.woff",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/media/dm-sans-latin-400-normal.9566aaac2083dccdc16ea3f2f2135e59.woff2",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/_next/static/media/dm-sans-latin-ext-400-normal.652b69dab458b43059108ddf5c5946d2.woff2",revision:"DSXf7sda-W9NHcG3FvKY1"},{url:"/animation/analytics.json",revision:"f1f48d34b86d2fed0c05a17ffa653434"},{url:"/animation/confirmation-popup-loader.json",revision:"09338b2935f145b7f4494d2251fac40a"},{url:"/animation/confirmation-success.json",revision:"d411a0a40c9d18a2240bf5e6a8e3d910"},{url:"/animation/error-txn-rejected.json",revision:"038939d7e40b79af761c7fbb71b9d20a"},{url:"/animation/loading-circle.json",revision:"7325a34cfe4bae6240b811420450cb17"},{url:"/animation/network-switcher.json",revision:"f224fdab969861c89ae80f304bcb63ee"},{url:"/animation/receipt-printing.json",revision:"5f80114b2d889e5254bc49304da6f0c2"},{url:"/animation/select-coin.json",revision:"8837ac7545222b015cf4040723669a31"},{url:"/animation/settings-slider.json",revision:"0f0b4970d3144222417d30f06ed33b49"},{url:"/animation/staking-submitted.json",revision:"3285ec4474c01065a263839e0df9ecd5"},{url:"/animation/supply-submitted.json",revision:"e84a9ba847c9803b755aab239b549f6c"},{url:"/animation/swap-arrows.json",revision:"8dd11d0b9966afe2b21bcd88fb6e1f31"},{url:"/animation/unstake-submitted.json",revision:"4ac2e63fe4d6e54a74692c232c6fd8ec"},{url:"/animation/wallet.json",revision:"fe3cb03beef11aa9c586c05319c880e8"},{url:"/animation/withdraw-submitted.json",revision:"304005bae1f74a590cada7d5765c227c"},{url:"/bento-illustration.png",revision:"5a46b39f712ff0488c82c2a7176cac5f"},{url:"/bentobox-hero.jpg",revision:"e06959e5864d27852e33c21f8a73ced6"},{url:"/bentobox-logo.png",revision:"bf814ab88a9427dee23047a9c2128410"},{url:"/blue-loader.svg",revision:"a511662985f970ddc2862cf376a4ade5"},{url:"/borrow-graphic.png",revision:"25a3cda597d87a1ba0f589919c49bf2a"},{url:"/chef.svg",revision:"04bb469844f9d1dcc2315a1c7ee438e8"},{url:"/coming-soon.png",revision:"8bb14006b52bdc1350360ed91b2a61b4"},{url:"/deposit-graphic.png",revision:"03de2f2edc189d4eed07171e6e9c438b"},{url:"/error-triangle.svg",revision:"8f22198d2de1f6416850b20d6c1192ac"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/images/apple-touch-icon.png",revision:"f2320031b3959bde6dd577b8559e2d2e"},{url:"/images/favicon-16x16.png",revision:"dccdb9291e487f98fa6013d148643a3b"},{url:"/images/favicon-32x32.png",revision:"649a9a9b9417c70359369cf026dba5f9"},{url:"/images/flags/ch-flag.png",revision:"b09e066f1edb136373b54cc2c67d7bce"},{url:"/images/flags/de-flag.png",revision:"e93de8aad8feb670c078b69238944eb8"},{url:"/images/flags/en-flag.png",revision:"ef962575955bce64c1c79c744481b703"},{url:"/images/flags/es-flag.png",revision:"74c8fdc9987c56225e6fd366c9516d5d"},{url:"/images/flags/he-flag.png",revision:"00addd6f3211ca7719cdac91af59dcd6"},{url:"/images/flags/it-flag.png",revision:"d53b25380031ea12b718aae85cf561da"},{url:"/images/flags/ro-flag.png",revision:"c2d2e71c466238aa2d974d6281e1320a"},{url:"/images/flags/ru-flag.png",revision:"83215cd12a005624d9b1000727b9befb"},{url:"/images/flags/vi-flag.png",revision:"1c716e98928ba37bae0ebbe1d6ffa365"},{url:"/images/logo-192x192.png",revision:"c1238dfe6797e54f922e3e1e06ebea76"},{url:"/images/logo-512x512.png",revision:"7db2fb292ad424aaf50bda7c7689a7fa"},{url:"/images/native-tokens/avax.png",revision:"2565884a03843bf5f37bf4a806402acf"},{url:"/images/native-tokens/bnb.png",revision:"169d592d3323f7f3fa81a79455e543bf"},{url:"/images/native-tokens/eth.png",revision:"de9d1e4c3a37f48edf1cd6308885ca02"},{url:"/images/native-tokens/ftm.png",revision:"36219035bda49f68552d39fca8523d1e"},{url:"/images/native-tokens/ht.png",revision:"a6b2ef486f070cf8fd7efa40929d1492"},{url:"/images/native-tokens/matic.png",revision:"fd1442f7f060cb78ff101592a6cda24c"},{url:"/images/native-tokens/moonbeam.png",revision:"e2a09d609102fa228e2c66856e74b885"},{url:"/images/native-tokens/okt.png",revision:"b3831b0ae6ec12a96ae2dd29a9f7e373"},{url:"/images/native-tokens/one.png",revision:"b42c62b6d576efd2af99ca49ab3c0d53"},{url:"/images/native-tokens/xdai.png",revision:"573f0f5f8086daf29bbfeea736b3ba39"},{url:"/images/networks/arbitrum-network.jpg",revision:"e13d4e3caa3a52004fa676acbacbb6bc"},{url:"/images/networks/avalanche-network.jpg",revision:"c0b785e666e0ebb73b0d5bf633dd83f8"},{url:"/images/networks/bsc-network.jpg",revision:"c234e4b9693f70ec697713cbafc53c65"},{url:"/images/networks/fantom-network.jpg",revision:"b38c2308780b7cda16b72ad9ab67918a"},{url:"/images/networks/goerli-network.jpg",revision:"bfa3e8c83bbdd0b018a2af55904e85b0"},{url:"/images/networks/harmonyone-network.jpg",revision:"55abcda6471ba41f172a35dd9d65800d"},{url:"/images/networks/heco-network.jpg",revision:"624c6a297d927a977c6e4c8baae35705"},{url:"/images/networks/kovan-network.jpg",revision:"8eeea938b6b6e7740a072be055eb12a9"},{url:"/images/networks/mainnet-network.jpg",revision:"97195efc5b2a70b8c0a8755838f9bb1c"},{url:"/images/networks/matic-network.jpg",revision:"6f2764a8b0d4d876fafc4280852ba685"},{url:"/images/networks/moonbeam-network.jpg",revision:"18a53ab891fd339e5c0f53cba5ac5db1"},{url:"/images/networks/okex-network.jpg",revision:"ddbf0a958858042a11255cc62929fc37"},{url:"/images/networks/polygon-network.jpg",revision:"f35785eb02bc3ef30f10a5ca88e687a9"},{url:"/images/networks/rinkeby-network.jpg",revision:"d7aecb9c343c81ec5d67ad06296b8d16"},{url:"/images/networks/ropsten-network.jpg",revision:"fc75a1a8c3ff4f9791f20bb05603c445"},{url:"/images/networks/xdai-network.jpg",revision:"37ebe0774e6ccc2ed55b2ae2e358c02c"},{url:"/images/oracles/chainlink.jpg",revision:"8b9fe5f5820a4192ebd21d0767c97a52"},{url:"/images/oracles/pegged.jpg",revision:"468870175f80e582d71367473073d077"},{url:"/images/oracles/sushiswap.jpg",revision:"9f9a26518a403330d71177a8ea63f941"},{url:"/images/tokens/1inch-square.jpg",revision:"9ebae649cdac273b676d75bce2b1c907"},{url:"/images/tokens/1up-square.jpg",revision:"db3231c7b16f4c50108dc550c7975198"},{url:"/images/tokens/aave-square.jpg",revision:"2f80e3a1b912ac3659ad950ea53f105c"},{url:"/images/tokens/abyss-square.jpg",revision:"99877547c820d1d5fbb47d92f26a417a"},{url:"/images/tokens/ada-square.jpg",revision:"973ad6199ae14ca99bf6b51821504c76"},{url:"/images/tokens/adx-square.jpg",revision:"85c059781b1addc904ebd26baed92903"},{url:"/images/tokens/akro-square.jpg",revision:"6fa498553c7a81a13967a2f566297ffa"},{url:"/images/tokens/alcx-square.jpg",revision:"1f58b94ab9d9cdfbb3dccecabfe84975"},{url:"/images/tokens/alpha-square.jpg",revision:"0535d19ef3f6088de6e85f45e5c09301"},{url:"/images/tokens/amp-square.jpg",revision:"9e1650f7da8986937f1caaa2f65d5010"},{url:"/images/tokens/ampl-square.jpg",revision:"de3f769f5a838607a1287915102f5216"},{url:"/images/tokens/ankr-square.jpg",revision:"b57a16c7f44b42ee0f5811da4be3ede1"},{url:"/images/tokens/ant-square.jpg",revision:"87799c635a7d195bc5f21b9577cd5499"},{url:"/images/tokens/ast-square.jpg",revision:"bc6d58ce4ecfcf9ff03d03d4d82ea2ad"},{url:"/images/tokens/auc-square.jpg",revision:"7c6b7b17543cbba15ef2991a9080be8e"},{url:"/images/tokens/auction-square.jpg",revision:"84b669270fc60f264768a3562522eba3"},{url:"/images/tokens/badger-square.jpg",revision:"731a59b33bdd761e31294d1103b025c7"},{url:"/images/tokens/balancer-square.jpg",revision:"1e0b2cf1889b59dc8e9f8a217a907434"},{url:"/images/tokens/band-square.jpg",revision:"8d4d364565f2f1449dfc777e47c7347d"},{url:"/images/tokens/bat-square.jpg",revision:"8140d6c6d696dfb58cdb4146482dfbca"},{url:"/images/tokens/bch-square.jpg",revision:"caa540ff0ac5592b29176d9fa939a33d"},{url:"/images/tokens/bnb-square.jpg",revision:"b244210738f3e3ce1c8f31c2745a2b52"},{url:"/images/tokens/bnt-square.jpg",revision:"68476e6ee0efcc41fb42c4b806dac919"},{url:"/images/tokens/bor-square.jpg",revision:"7eedf961d6aa7d35a7cc8ea8356a9f7b"},{url:"/images/tokens/btc++-square.jpg",revision:"c12c55e4c6f59c07668426da837b82be"},{url:"/images/tokens/btc-square.jpg",revision:"2eb817bc8e137e8f1489b22f76fd546a"},{url:"/images/tokens/btm-square.jpg",revision:"ca5cccad2f1a76b0fa35095f11135c61"},{url:"/images/tokens/busd-square.jpg",revision:"657f70427d40c21cc31caf2b6ed98eaf"},{url:"/images/tokens/bzrx-square.jpg",revision:"eb179271d188ea34f3a8ab04b7cc16c0"},{url:"/images/tokens/cake-square.jpg",revision:"a2222209794405c85661f7935cb7a4c2"},{url:"/images/tokens/cat-square.jpg",revision:"0e0c2a65dd22e93f2f8787ad6462fbce"},{url:"/images/tokens/cel-square.jpg",revision:"a0404abf157082119dc701f596d56670"},{url:"/images/tokens/coin-square.jpg",revision:"04d9879b748f8249bc24ea6696dc6233"},{url:"/images/tokens/comp-square.jpg",revision:"d36ab063e342348f60b5e4f49a6b2bd4"},{url:"/images/tokens/cover-square.jpg",revision:"fb530cfcc9a5f848b931f91e3ec01a80"},{url:"/images/tokens/cream-square.jpg",revision:"c0320c66d127c5da57f1282df63b0234"},{url:"/images/tokens/cro-square.jpg",revision:"ba1c9cce6df5d575a97d6a90503e7650"},{url:"/images/tokens/crv-square.jpg",revision:"de58e84255b156ff7a64c2a205dd0021"},{url:"/images/tokens/cur-square.jpg",revision:"fe990aef5898dc86e89edbb8ca1f6edc"},{url:"/images/tokens/dai-square.jpg",revision:"9b784fd86478c250a76697173462537c"},{url:"/images/tokens/data-square.jpg",revision:"a188441c3949d59335a4e518b544e114"},{url:"/images/tokens/dmg-square.jpg",revision:"eb6fe382b788a58a0e985668aabe2a88"},{url:"/images/tokens/dnt-square.jpg",revision:"7dec566f136d6a448e7769f46aa1c24a"},{url:"/images/tokens/doge-square.jpg",revision:"090b27fa03c313421968c31e77b49057"},{url:"/images/tokens/dos-square.jpg",revision:"304a110c4b26f6bb51c523ba961f961d"},{url:"/images/tokens/dot-square.jpg",revision:"c15f99770d3332ed187642d03a69e327"},{url:"/images/tokens/dpi-square.jpg",revision:"b258cb70fdfc676cc298f04dff87b743"},{url:"/images/tokens/dxd-square.jpg",revision:"92e9b769dc1eb72a53fb15ecd0762f1b"},{url:"/images/tokens/enj-square.jpg",revision:"7c332009d58928f52c83d86cb2d167f2"},{url:"/images/tokens/eos-square.jpg",revision:"e57d2661c8d4b8c86cf6a80e22b1eb4d"},{url:"/images/tokens/eth-square.jpg",revision:"08c756c5ab0952e63be03fc9aee1f5f9"},{url:"/images/tokens/fil-square.jpg",revision:"f5a72687541bfa9012879eada4a944dd"},{url:"/images/tokens/front-square.jpg",revision:"9fbfdb977b98e5c43b0c53da1d4e4124"},{url:"/images/tokens/frx-square.jpg",revision:"fe21548c0f8b004f78ae2ed7b74f1eba"},{url:"/images/tokens/ftm-square.jpg",revision:"67201d57d6da991d7c89738257ded52a"},{url:"/images/tokens/ftx-square.jpg",revision:"a7f59c95d25240320fa19f619086d6c4"},{url:"/images/tokens/grid-square.jpg",revision:"3cbdaa12c6170907c09bf302ee0b3ac9"},{url:"/images/tokens/grt-square.jpg",revision:"a9ca8f7eed4831f0216ec0976161c053"},{url:"/images/tokens/gusd-square.jpg",revision:"bea058d7e5dc777b18ccf84c91c96783"},{url:"/images/tokens/heco-square.jpg",revision:"7e7cf429c639b06a61f583b06a4e9239"},{url:"/images/tokens/hegic-square.jpg",revision:"ef4bdcbeac27b66dd7e2c5fc09c1417f"},{url:"/images/tokens/hot-square.jpg",revision:"1ba774c0c0bf4949dd57b6aadb529d3e"},{url:"/images/tokens/husd-square.jpg",revision:"280c69cec9982c35f32eee19879fc8f6"},{url:"/images/tokens/ice-square.jpg",revision:"df6403aac16496105ac5f9d01be595ea"},{url:"/images/tokens/idex-square.jpg",revision:"8588490510f5ad44806f9673508131ab"},{url:"/images/tokens/inj-square.jpg",revision:"652a510e5487875305b7c0b49f7cede2"},{url:"/images/tokens/jrt-square.jpg",revision:"1c9efc35819fca6fa7ffa1748b8af64a"},{url:"/images/tokens/knc-square.jpg",revision:"776b4b9d19162f8fb9c7d341a07e64c9"},{url:"/images/tokens/kp3r-square.jpg",revision:"44fdb603a092843aecc4dd3f5eb7694b"},{url:"/images/tokens/krill-square.jpg",revision:"00e755eee1e0d76e4df8237bdfbc96e7"},{url:"/images/tokens/lend-square.jpg",revision:"99bb2e1a3b918cdda0bd81ac1fecb3b3"},{url:"/images/tokens/link-square.jpg",revision:"1a7e1b0db96f5ee82b4d34aa81354e28"},{url:"/images/tokens/lon-square.jpg",revision:"fa62af9daa430c437c7e4e924bab142b"},{url:"/images/tokens/lrc-square.jpg",revision:"23a457bfc2ea811ba5637a6813835e5e"},{url:"/images/tokens/ltc-square.jpg",revision:"399bca2728f7244bd384454c0919363d"},{url:"/images/tokens/mana-square.jpg",revision:"927215ae8a694c86a3cfabc5b502ddf4"},{url:"/images/tokens/math-square.jpg",revision:"9df4434767e0c43bbee1155b9dd0bc98"},{url:"/images/tokens/matic-square.jpg",revision:"b0601d92491b755f362799881d2ce357"},{url:"/images/tokens/mcb-square.jpg",revision:"1476507af05c91d4e385e6561644ffdd"},{url:"/images/tokens/mdx-square.jpg",revision:"953283375bb71a4f57f50345ae22704d"},{url:"/images/tokens/mkr-square.jpg",revision:"746d2528bd8238980f7d5ae852af1a07"},{url:"/images/tokens/mln-square.jpg",revision:"cb4c8349c965c79b689648b6ad2a9120"},{url:"/images/tokens/mta-square.jpg",revision:"d5c6557e6a6396b54d5610e1129066b3"},{url:"/images/tokens/nec-square.jpg",revision:"f75d8e9bbe5028c0d1f74fcba15f0adc"},{url:"/images/tokens/neo-square.jpg",revision:"e628af29c51cb831cf2146e7561aa733"},{url:"/images/tokens/nmr-square.jpg",revision:"540be278098538893615b1c1933c0481"},{url:"/images/tokens/nxm-square.jpg",revision:"254a1a880777919048459c8f3441ad2f"},{url:"/images/tokens/ocean-square.jpg",revision:"18ff14adc957799cb092e598d36eceb0"},{url:"/images/tokens/ogn-square.jpg",revision:"66de107aae6182b2065a5ba3f63a14ff"},{url:"/images/tokens/okb-square.jpg",revision:"40d2ca72d484d54e55e34e2141a3c3fc"},{url:"/images/tokens/omg-square.jpg",revision:"99cf5a66da8469ee76a3673848a53f0c"},{url:"/images/tokens/ont-square.jpg",revision:"e5df78270e0643e514363a5c3dab2047"},{url:"/images/tokens/orn-square.jpg",revision:"3d73e3242de3bf978d60cb47e21d8c99"},{url:"/images/tokens/oxt-square.jpg",revision:"7e5ea21d59f152b2c7f7e2f20e45e129"},{url:"/images/tokens/pax-square.jpg",revision:"5000ac41f55a016069b6c564b92b0743"},{url:"/images/tokens/paxg-square.jpg",revision:"6c480274563f37157e4ba7beea6ff56d"},{url:"/images/tokens/perp-square.jpg",revision:"9bd7ef52eae813b82ec7a189aa8afae6"},{url:"/images/tokens/pnt-square.jpg",revision:"b4782bef5692068f4625838cb65a387c"},{url:"/images/tokens/polygon-square.jpg",revision:"f35785eb02bc3ef30f10a5ca88e687a9"},{url:"/images/tokens/rai-square.jpg",revision:"a901e30e48ddadeec425d54be7b26f8a"},{url:"/images/tokens/ramp-square.jpg",revision:"4e76c0d268a845cc640d3bd8c069a452"},{url:"/images/tokens/rari-square.jpg",revision:"071d7513cf4cc5e375010c4a290c4fab"},{url:"/images/tokens/rcn-square.jpg",revision:"1eda3329f5a8d923dec03f3472eabe89"},{url:"/images/tokens/ren-square.jpg",revision:"6657a050b70b898aa4247bf16a6b3bcc"},{url:"/images/tokens/repv2-square.jpg",revision:"56a90e134559a75e92ca30111e7bb184"},{url:"/images/tokens/rgt-square.jpg",revision:"9ff95d0543c608affa47550ab7b8a583"},{url:"/images/tokens/rlc-square.jpg",revision:"0df1cabf3a584562b85f2353f2a20426"},{url:"/images/tokens/rsr-square.jpg",revision:"29e5324ce9d55258602985628a697f68"},{url:"/images/tokens/rsv-square.jpg",revision:"93cce4a816e5ef6b92492767bd83ab6b"},{url:"/images/tokens/rune-square.jpg",revision:"c4c64c5b5a721b892c2b4e45b021eb62"},{url:"/images/tokens/sai-square.png",revision:"cb24341bd22fb6269d3e75261122568f"},{url:"/images/tokens/sand-square.jpg",revision:"415ee9857e5a8e048df941c8ce39e685"},{url:"/images/tokens/seth-square.jpg",revision:"986b7aa66884124f71e65fad34b31c7d"},{url:"/images/tokens/sfi-square.jpg",revision:"35302df7c91d437a333564c619a286d8"},{url:"/images/tokens/snx-square.jpg",revision:"94a2b5b9153cf6da3d10079b325cf09e"},{url:"/images/tokens/snx-square.png",revision:"c1610d0c3331758e4b13f57d4b34467b"},{url:"/images/tokens/srm-square.jpg",revision:"0aaf45616a7d90054f440a71f16a4115"},{url:"/images/tokens/stake-square.jpg",revision:"887e7cf3fcacfc9748e75240119bf470"},{url:"/images/tokens/stm-square.jpg",revision:"c8f77e37e691d2ed7f65ddf0cdfdc72a"},{url:"/images/tokens/stx-square.jpg",revision:"363dc5461221a396c0f0b231a333a5ca"},{url:"/images/tokens/susd-square.jpg",revision:"f03e58811dd8cd6e6101f3f44432cbca"},{url:"/images/tokens/sushi-square.jpg",revision:"49616ca5d71a0ba9ffabb55b8433a9c0"},{url:"/images/tokens/sxp-square.jpg",revision:"b03b50838dae8f9d70159ce5c560a6b1"},{url:"/images/tokens/tkn-square.jpg",revision:"f849de30f4a17e3babb489d300160402"},{url:"/images/tokens/tomoe-square.jpg",revision:"c85c5523b9310de54f4d3ab53445fa04"},{url:"/images/tokens/trb-square.jpg",revision:"14c728431c4a4f34bddfdec2ce1c1c08"},{url:"/images/tokens/tru-square.jpg",revision:"00171d142c8c44e3cf403b2da332ab91"},{url:"/images/tokens/try-square.jpg",revision:"f457eaa9852d2513e2bacbec763a9944"},{url:"/images/tokens/tusd-square.jpg",revision:"ea4fb03b343d13f01cabb5f2e2709aab"},{url:"/images/tokens/udoo-square.jpg",revision:"826ff552ca5281d7645b39bea99e3ba4"},{url:"/images/tokens/uma-square.jpg",revision:"0ff0e43173ac04541c311434798b7e5b"},{url:"/images/tokens/uni-square.jpg",revision:"a1285dde00f400f781b0560a34aa78c8"},{url:"/images/tokens/unknown.png",revision:"beb315c366d43d5173af385882f1fca5"},{url:"/images/tokens/usdc-square.jpg",revision:"9d4c0f49c70b7f017f1f58d3f76c5625"},{url:"/images/tokens/usdk-square.jpg",revision:"6d725275e5e5a8d1f248daef698ccca8"},{url:"/images/tokens/usdt-square.jpg",revision:"81fb5d21883bef1776447c4f6438eea4"},{url:"/images/tokens/ust-square.jpg",revision:"5f259bdadbf246c9b1bd92bb8fe9a013"},{url:"/images/tokens/vai-square.jpg",revision:"f7d395295767b2c6bd15abba68269e2c"},{url:"/images/tokens/waves-square.jpg",revision:"ed5f28e448b95f1916deeff506e383dc"},{url:"/images/tokens/wnxm-square.jpg",revision:"e1b7e36b52060f5fbdd005860c7099da"},{url:"/images/tokens/wom-square.jpg",revision:"455507887fec3fd50d6a33cf89748fa6"},{url:"/images/tokens/xio-square.jpg",revision:"d7de22785af1c37574a871b5e41a8962"},{url:"/images/tokens/xrp-square.jpg",revision:"819f3782a227813730b11e73ac7e124f"},{url:"/images/tokens/xsushi-square.jpg",revision:"721485a7e2edcb6269c3ed818cb3dbea"},{url:"/images/tokens/xtz-square.jpg",revision:"ab0a1916643fde5d2c1266134286ccb9"},{url:"/images/tokens/xvs-square.jpg",revision:"23b1835b700267e0c196a98e279fb770"},{url:"/images/tokens/yfi-square.jpg",revision:"7083096382404d9fa45cb6441ef4c1cb"},{url:"/images/tokens/yfii-square.jpg",revision:"1583cf4c5096861a73f2dc4191f34a8c"},{url:"/images/tokens/zec-square.jpg",revision:"af721f34ab882fa3026958bb4297a85e"},{url:"/images/tokens/zrx-square.jpg",revision:"8b300c833a948ba30f6676c7595d1d59"},{url:"/images/wallets/coinbase.svg",revision:"62578f5994645a1825d4829e2c4394b0"},{url:"/images/wallets/fortmatic.png",revision:"11562b35c593bdff062d22994aa93db7"},{url:"/images/wallets/injected.svg",revision:"d285b6cf22b4f1552bb4009333462632"},{url:"/images/wallets/lattice.png",revision:"3101eb1ee2d95b6cdc32c6ec960c80e4"},{url:"/images/wallets/metamask.png",revision:"023762b6aec2a2249b8fdfb638f00ef3"},{url:"/images/wallets/portis.png",revision:"b234b2bfa0417c7e8711c3a8d17afeec"},{url:"/images/wallets/torus.png",revision:"9877cd978dfe022be2ffea8dd28f9ee7"},{url:"/images/wallets/wallet-connect.svg",revision:"8215855c185176eb79446ce8cc1f3998"},{url:"/kashi-logo.png",revision:"bf456175bc1722155d33fa2fa3e13f44"},{url:"/kashi-neon.png",revision:"f8d8dba1e0a3273c21fc5e94c3f78dbc"},{url:"/logo.png",revision:"3d80a0cc1d7b49ff66ce88baff44c652"},{url:"/manifest.json",revision:"17482192304f2bc6d1b4c796cc533bc2"},{url:"/menu.svg",revision:"6754a53454b677cfb39a1aefaaf5b028"},{url:"/new.svg",revision:"4697d1bd91f384c8bba2947107a7f3a8"},{url:"/onsen-card-bg.gif",revision:"e92fb9870851c2256f98d0ccde4ef7b2"},{url:"/tokenlist.svg",revision:"9bf02894bf694278d67b1f0544b174ff"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"},{url:"/x.svg",revision:"5b8e218668bfea1d44b887bd042f6a52"},{url:"/xsushi-sign.png",revision:"c59ad4a596b96b4fa4b0080ab0643acd"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
