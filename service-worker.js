/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/100.html","b09e51a98b8365abc353860947d37778"],["/1000.html","f6434840b83128e949553f24128ac7b1"],["/1001.html","6a46550ba8139886bafce482c7b5c007"],["/1002.html","96f2809295473dd2fdcb5629c0be839e"],["/1003.html","bd113cadc885ef70e09f7a1c9bd3a8a8"],["/1004.html","93b2bff4e07cb94375db974bb26a47be"],["/1005.html","9a52376d1659d44d25f3f39b7983c04d"],["/101.html","cf2dba25e1b30281868eab03bebd18f8"],["/11.html","4010909ac626da42a6db1b7c5dbcca27"],["/110.html","329a93516777321cf1a5873593beb57a"],["/128.html","3acb2e9d7526f6315182853ce466b7d0"],["/129.html","be11e11be0ce5668672c90fdc641657c"],["/16.html","13a2531b9a853549aa105720d292ad95"],["/163.html","dc62c13cc40282da98bf0ce6b798a4a3"],["/168.html","444430a35809314ce7722fa885f724db"],["/176.html","dee70861030893fe32130c70f8389db6"],["/182.html","f6686d4446f8b050a7510d1b26fa8bc0"],["/189.html","e6e438737e95304dc44c25b831ef44e4"],["/190.html","c60e76dfcf1b091a51b77cc5aa9e027e"],["/192.html","78843246cd80b002b10252ab50332c91"],["/197.html","c92423cb7e63bb950b4baa671ed217b4"],["/198.html","7b09dd6d9379000ecba36bdc8cf0b50d"],["/199.html","c6c411b79b1e362af10db47fe4b7a90c"],["/203.html","8f2160b8a833485ecf37804dd236de6e"],["/214.html","bae65c290e1aab9ae4cc6b1347f01f3d"],["/215.html","4ea08eec90a26dad77a7eb1755e19928"],["/216.html","178201f076e00c030caa0bcc2d500980"],["/224.html","81dba7b974865ab2633ebda9b75e2314"],["/235.html","5895d0522ecf84b1c1927e29e1a08b2d"],["/29.html","e5b5cd41ab23b72553221f3bd03e6ceb"],["/404.html","c63a75b405508aeca9446d1456840dfd"],["/41.html","3733a269e09ad701707bdabd9c96289b"],["/42.html","697929ab5b07da9ad53384c25ffb3c3c"],["/45.html","6ecaf75fac8cd7c63f3e45e1c698291d"],["/48.html","9299e89c87e80cab674befc8d08fc478"],["/53.html","ef4028fa264d0b87c2e8b0b06dc3a534"],["/58.html","a96763a914896332efaa425dc12e6612"],["/61.html","b63d488cc90a4e9bd1db71b9f38d491d"],["/63.html","9d36092a26527dd00262ef073588aa73"],["/64.html","9e30f3ec559e06b38e274645b174567d"],["/80.html","4eb977a54605f2e191a296fae6f0fe17"],["/92.html","a939ad4363be828f221c89465ae9b33f"],["/94.html","038d8149a0b96758cc7fbf72ef0b5997"],["/95.html","723f3b3d12624c755bf8454265a657ef"],["/97.html","81147250a0b085b9966ecc0f9a5f9b3e"],["/another/提问的智慧.html","26aa063ffa87b557a31ad8553134e04d"],["/api.html","8eab295126e5136cb1e7bc34ba913924"],["/archives/2020/03/index.html","6ec5640257779f74fb5d7a593fc79940"],["/archives/2020/04/index.html","31d0490471ca9f073528eb719c011922"],["/archives/2020/04/page/2/index.html","509bb8c75199e30b20d34e61f3045b81"],["/archives/2020/05/index.html","ea59a35026057ad4724838af91cf03bf"],["/archives/2020/07/index.html","265c379e6751cd897ccefbd4bf5eb158"],["/archives/2020/07/page/2/index.html","7156df1e5f6c8b2496df9a9275b783d7"],["/archives/2020/08/index.html","2d3644855b34b8d7174509ccc1c471c9"],["/archives/2020/08/page/2/index.html","a65a125f8e762ec11885aeaa2ad23702"],["/archives/2020/index.html","15a9234e546fc7fc3a12d3d95e71281a"],["/archives/2020/page/2/index.html","ebbb661fbc74f80a922d449782b74728"],["/archives/2020/page/3/index.html","562ee64e098aa50af86204bfa1a91715"],["/archives/2020/page/4/index.html","0ed01564becf96c54e04fe36576ab1d4"],["/archives/2020/page/5/index.html","e710cb2eaab889af36079af86dbc9eac"],["/archives/index.html","be94ebe2aeb278ffd1ae64fb71ee8046"],["/archives/page/2/index.html","6d91ff57572c8391a53c7acb4dba053d"],["/archives/page/3/index.html","3d9e65f6c8ff77c5e1e984f82ba034d9"],["/archives/page/4/index.html","38ed8c8afc9c0a818d4cd336dedda322"],["/archives/page/5/index.html","e270cd5b5cdb59939ab5db0f6530bb3b"],["/atom.xml","e49be4c85c6e452a7b632405db8116fb"],["/b-dual-existence.html","525471bdbca551acadb0b44573259993"],["/baidusitemap.xml","3958f84c384c7b1824aed5e576b985bf"],["/categories/Docs-Live2D-实用/index.html","780fa29d77d7da313e895fb0010d0645"],["/categories/Minecraft/index.html","14778d1467ef641968d121037eb0c5aa"],["/categories/Minecraft/插件/index.html","b014fc23cd073151a591aec20a53640a"],["/categories/PhotoShop/index.html","4e72a0b7da3a3898365913ff5e065e66"],["/categories/index.html","f3125ed364a311a6deccbb5d5dd8e920"],["/categories/关于/index.html","2c7379df5bbde46a9e8048d983a2b638"],["/categories/实用/index.html","4a1b10e3c412e94ac7812b0b8ac04e03"],["/categories/实用/page/2/index.html","dc8cbfdb01bf087bd150b1620fb4e517"],["/categories/技术/index.html","564d89ca79777e98e962b46213195f96"],["/categories/教程/index.html","778995bd99e528be4504f5216bf7ec78"],["/categories/闲聊/index.html","d7a2d858ae7946bfa593caf7462ceba0"],["/categories/闲聊/page/2/index.html","6fb58693a93714d2f03335bcdc34b746"],["/categories/闲聊/page/3/index.html","1c4b53de2f07ceb26e8cca9be826df87"],["/categories/闲聊/page/4/index.html","2ff1d8d4860fc63f914174d0be553862"],["/categories/音乐/index.html","c1a3a038266b142980ba1369a3161a5d"],["/css/index.css","7e3c759ecab1625417faa52a97d30d7b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/waifu.css","e71d9ab3216c5dbfbcfc823e2d074dd4"],["/diary-20-08-14.html","063fe10b437fa2e45167b6ac77e4b08d"],["/diary-20-08-16.html","555b556f78dc50114e2ae7e60d682217"],["/diary.html","d0228869975d3e9099c204ad3db2e8f8"],["/doc-live2d.html","ca14b856fa27dc88d0b802ce5c2683c4"],["/frp/index.html","9d0701297116d745505f183797d752dc"],["/githubchart.html","62426f13ef4964bd94a75211aea9e47d"],["/horainingyo.html","8baa290741c2e8253d22caf00e971d13"],["/images/pwaicons/logo_144.png","a84a9fb13adc66c2e6282cb4ec503d41"],["/images/pwaicons/logo_16.png","e3d5a19ccbc85331eac60e8f5d48e121"],["/images/pwaicons/logo_32.png","c8e36df84d26a193900bfccd8fbd637e"],["/images/pwaicons/logo_36.png","055f23ea216c3bc6aafcbd9e40b2433e"],["/images/pwaicons/logo_48.png","ce4452002e81d01eae5ae7697547b5a1"],["/images/pwaicons/logo_512.png","1dd00fd74bacf09f68e19719ef0574b2"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/comment.png","3b167d941508abf1017f854b28cd5151"],["/img/comment_bg.png","488773ac22a668a24cc60ff548fc3e3f"],["/img/favicon.png","7be3a186cbb83c3cb3bfd145c59dfc83"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","ffd0a99baa6ef7be0e54025ce3392452"],["/js/autoload.js","d95cc1096a472a68270af413be3c516e"],["/js/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","0176913a28754a766910352489a24a69"],["/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["/js/waifu-tips.js","554701a3d2fdad5f465b03d1c307e4e2"],["/js/waifu-tips.json","8dd6573863792f6f2c2e57057d21ef96"],["/link/index.html","a9ac15397dad4fd157a2c0c9f2e02767"],["/live2d.html","32dcd0eff31305a0cf132df97791427c"],["/live2d_widget.html","a9d01200ca21f4614642e0598c8021d9"],["/manifest.json","e9c7b166063c3f524dc846ecc519ef44"],["/music/NeteaseMusic/antd.min.css","4f2d3b71c9e6300d506e505a6b26796f"],["/music/NeteaseMusic/antd.min.js","7a6296e75996341045b1d0b4b0456d66"],["/music/NeteaseMusic/axios.min.js","aec752b41708ddd1d4703fb7f261c6d8"],["/music/NeteaseMusic/index.html","1dcc2d06e2a0517a1f285b7606fb76f1"],["/music/NeteaseMusic/moment.js","0941fc7ec3988352c959e5b3da86f666"],["/music/NeteaseMusic/vue.min.js","d85af260fc0f73ed755e7b0ba8229e44"],["/music/index.html","70ac612b738f42234335a3f99979c3df"],["/music/my.html","4810a4162e4941028f87924210cead86"],["/myself.html","f58d03a6e14518d2fafd8582be56a900"],["/only-my-railgun.html","cfa25f53e65a448ec1a1f0373878efc9"],["/page/2/index.html","7e60772bc6ca201555e6e13d32cdd6e6"],["/page/3/index.html","235c843ae9a4295a4baec393ceabda06"],["/page/4/index.html","f0aae743b932c9f7eea5ae06855209bd"],["/page/5/index.html","58b137e2eac39b2d0b852b4cf63a43e7"],["/privacy/index.html","3a986aa95fd4d57fd109a51e238ab31f"],["/sitemap.xml","ee72061d804121bb4e22e0b771cb2c01"],["/tags/301跳转/index.html","c699e73021a9b2071daf6200cb200714"],["/tags/API/index.html","b23cbb797924a4ebe8076ba67d6dd4f3"],["/tags/ARK-Server/index.html","2e949b3b461d8f0992557fccff0f6df9"],["/tags/Centos/index.html","936d66c3344b170230930756e2e7faa6"],["/tags/CloudBase云开发/index.html","95874363762491f335bbda90870a3845"],["/tags/Docs/index.html","f6bce5c185219ebddd326004271bbdbb"],["/tags/Frp/index.html","65f0d7ecd4e4959ae1474da6f11a7248"],["/tags/Hexo/index.html","cd421a799ce2dd6aa8f52807743c450d"],["/tags/Linux/index.html","3960a792933951e866ccc44c8cc55b67"],["/tags/Live2D/index.html","3784d8e4dd80ba9c089b93a1a0f16bd6"],["/tags/Minecraft/index.html","c2d8e6004efe7ddc97d84ff14a307db3"],["/tags/PhpMyAdmin/index.html","bc6dafe091ce4ddcd8044e26b76a27a2"],["/tags/PicGo/index.html","6644d07ad39b6053b8977e5de38c58cd"],["/tags/Windows/index.html","83e0a469200fbaecf53866bce82a2728"],["/tags/Wordpress/index.html","c83e5299590bc652807b188fb9890409"],["/tags/index.html","de34043e75f9624fb3e8aa1248f468ef"],["/tags/late-in-autumn/index.html","43c2326be961eaefc4949764ebe611c6"],["/tags/とある科学の超電磁炮/index.html","4b58f05ca381e1809808045c87cc9b2c"],["/tags/书法/index.html","11c5e30df78069c71fb771864587e210"],["/tags/介绍/index.html","4c268a7177f5cd9ffbed4f4650fe27a9"],["/tags/公主焊接/index.html","23b1f2848f4cfa1154d402f264c0da3b"],["/tags/内网映射/index.html","a43b7387682a122ccf50f4c354f9b6e1"],["/tags/博客/index.html","438533c8080355ef63d3dc1660e8a17b"],["/tags/博客更新/index.html","8ee6390501e53e28915094a54f7774f2"],["/tags/图床/index.html","3b9acb98e86a57e0c38c1b6fe0566776"],["/tags/域名/index.html","305efd76c340d0ef58009af142d34299"],["/tags/宝塔/index.html","111291cf0fdc2dec746182035932d2b2"],["/tags/实用/index.html","969610db8bde05c00371366ba62d91c8"],["/tags/实用/page/2/index.html","e52959cbcc2f635884405531b1c4265a"],["/tags/我的世界/index.html","f561482db003d2a4e526dec0d42bb6e6"],["/tags/技术/index.html","5273db610f78a3c59f946a8560893810"],["/tags/插件/index.html","b9f3759dc6887bf4228821e338ebc4a7"],["/tags/搭建/index.html","11e52913e46a8e73ae4dc79918dc38c1"],["/tags/教程/index.html","b3de945a45960486a32792b989fa8719"],["/tags/新标日/index.html","9784eba73c98b66afa0c40aa64ef5c6a"],["/tags/方舟/index.html","d40300d00195b6e0a8b9de37700caf1f"],["/tags/日语/index.html","9906bfcfff68faa0af2d967496ccf69e"],["/tags/暑假/index.html","0084136014bf300546a2a5b66695cce5"],["/tags/更新/index.html","bc99f78c61e8be83548f904e4e2b9200"],["/tags/服务器/index.html","eb0feebdc2a9380a1af3a21233139993"],["/tags/歌曲/index.html","1f6d29ad79052b433a9867f0f970b7a1"],["/tags/漏洞/index.html","c3eccc86f4c36f9244b4c7a77ba2a560"],["/tags/猫咖/index.html","0a5ab9a4225d8122e4ad0fc6203c1af3"],["/tags/生存进化/index.html","b4c3352d633d14c6635dcbf3a368c94f"],["/tags/盗号未遂/index.html","3779ad975a0fb0f066b85de11ad8a450"],["/tags/看板娘/index.html","149a2f94c142c9c2670b5bb9cebab2ae"],["/tags/硬笔/index.html","6290570b07fe96decd431ad0326797af"],["/tags/练字/index.html","c98066ed297286f0e81337887e503e3c"],["/tags/网站/index.html","2792a22234d15f93318591100154a3d3"],["/tags/腾讯云/index.html","33f469dd89a5683933095ccf62b99689"],["/tags/自我介绍/index.html","d4e732cd23f5ceda4d61687a4405633e"],["/tags/萌国ICP备案/index.html","db74e3bbe71043e428cb73a9be91ee71"],["/tags/蓬莱伝說/index.html","0327a233c7bdb2b3d5cc6831fa494f74"],["/tags/软件/index.html","d1be952fd2a59f58d0fd12bd7cb9b2fe"],["/tags/闲得慌/index.html","71264f091f3a5205485ae7f682d93f73"],["/tags/闲聊/index.html","7fd25defee7b68e0928ea0352c69914d"],["/tags/闲聊/page/2/index.html","1538148e58c1d04a0418e025d6370ed4"],["/tags/闲聊/page/3/index.html","381c27a049aceaad504d57b42919c906"],["/tags/静态网站托管/index.html","1fbb199f333be0b0deba195f4c2ac253"],["/tags/音乐/index.html","f1c8ee2d22d8386755838c3cb2b37dd8"],["/tos/index.html","4c8748fe8f6548778c552ee602fb2321"],["/y-late-in-autumn.html","5cfb8ce78e646f7e04fa2b3afbed7038"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});




