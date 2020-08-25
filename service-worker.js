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

var precacheConfig = [["/100.html","a92c5ff570bcb75a5ebc98f52a0ef9fd"],["/1000.html","ffd0f0991be84e0c69c9bd6826d77800"],["/1001.html","6c1d700316647df33ec45797bb91efa8"],["/1002.html","029bf632a7a0430f319d6514e1f85272"],["/1003.html","d81acba9d54682739a4191a912e9c8cb"],["/1004.html","bb653628732bf25c97ea4a84b52cfb34"],["/1005.html","d216cc9526bd1ddb61081c951f109c3a"],["/101.html","b7e676e57725ffe11fe5bda54b0a496d"],["/11.html","b5f673b9064b84d5fae5cf410f90f3fd"],["/110.html","449a682a374649a9b519667384cac4ea"],["/128.html","d73dea698ead3213817a7fc0ca948f21"],["/129.html","586334d752be588de27c40d65fedd74d"],["/16.html","28ee311c48ea98239ca107d8b67787f1"],["/163.html","a2bd05ea2c66141168470163e0472439"],["/168.html","312df30c370aa70db34c537fdac7ca69"],["/176.html","906d8855c81b9a5424be8efa9502249f"],["/182.html","df482d6ef8c274faefcf31b097d0bb55"],["/189.html","0ff3250b0296dbfd7c8171895a32fb55"],["/190.html","f8bfd03bf92d0fdf800c06833aa4fbf4"],["/192.html","80ae9a4659dc27fe48134879b4f1f81e"],["/197.html","35fd922096f8b17fb86c6c90ab452bf7"],["/198.html","b9ac2f6025fb3089bdf5f030b58fc560"],["/199.html","46ce440695c8259f04c285940e2df9d9"],["/203.html","56f4e6712d5e3130b366fc50494c4939"],["/214.html","d7563fdb0102d65a2770b9e8a7a5bdcd"],["/215.html","4c8ab242994ae3a70e52e922fa234b86"],["/216.html","149653da824509af059617e84a542162"],["/224.html","24241d52b8a26481ab630a014e981a65"],["/235.html","5b819c66e506b5270f695345877bbbe3"],["/29.html","8b223315f373469ac802f7e072f83803"],["/404.html","884266072bc0bcd7cb7da525afcb613f"],["/41.html","43f06c34ecf3dbd317733d98e044bab6"],["/42.html","64f97192525b16b24f88f57d030e19d8"],["/45.html","ac1317ceea696c9d140b51cbf9f96df5"],["/48.html","c1191de27226b4cd2c56a8c515f033b5"],["/53.html","5375e8c4611d754d92722bf3106964c0"],["/58.html","e54a9455d0caa77eae725e943660ec5e"],["/61.html","fd3bf48aa648a3289f40311e64f0a2a4"],["/63.html","1663bb44cc106dab45e98b8d310f0282"],["/64.html","4157bf975564d6a4e26da57e5402c8b8"],["/80.html","6756344b945cbce372d41995847c604f"],["/92.html","17ae921e84bef44d1800fdface58811e"],["/94.html","face864eea192100616abfb77817be6c"],["/95.html","11bdab25c4feb4b383d946d2c9d13b6e"],["/97.html","674d47408d684e268b087372bf58ad86"],["/another/提问的智慧.html","d1ffc7ad101f843ffcea1ba92071b8d2"],["/api.html","30ba2aa86cb8be0fbd958d3d8d5f1b16"],["/archives/2020/03/index.html","81e544c6354b907d1eb46ad959757d3a"],["/archives/2020/04/index.html","09b46dd9b8d94cba4009f2cefe4b98fd"],["/archives/2020/04/page/2/index.html","81fa6fde62b17ccec5bad38bf2442a82"],["/archives/2020/05/index.html","420458a91ff49120a25fdbed1cc1ada9"],["/archives/2020/07/index.html","ba4fcd8f8aa96c84bae176dc4ecee64e"],["/archives/2020/07/page/2/index.html","f785851d21d8628e5c6318540f4859ef"],["/archives/2020/08/index.html","8c6d4c88a2046e87146569c507aa7c3d"],["/archives/2020/08/page/2/index.html","3e5be6f1efe5b822dcd187ff2c749c64"],["/archives/2020/index.html","c00d6319cf34bb38876d682522ca8a08"],["/archives/2020/page/2/index.html","e02e81d4453a7efc2c6db792441ddff1"],["/archives/2020/page/3/index.html","f14596055065c87d516a4061bc40c0a4"],["/archives/2020/page/4/index.html","cb527a32ced513eef59af02e2d052e08"],["/archives/2020/page/5/index.html","e507be4e0439f4c11029e17b271c8b53"],["/archives/index.html","cbb056e0483c71296ad699e9879893b1"],["/archives/page/2/index.html","60691ed92efeae74285856691afefe1b"],["/archives/page/3/index.html","796b570b2886525895d18edd8f253f4a"],["/archives/page/4/index.html","4d57603a88d1c0bd0c7aa29d8c866ed8"],["/archives/page/5/index.html","e92e0ef6eba0b32301a825cbaeafc786"],["/b-dual-existence.html","18582c37c1545571ff0f02454ea819cb"],["/categories/Docs-Live2D-实用/index.html","533b59ef5fe7cb513cef9ed5f64cbf82"],["/categories/Minecraft/index.html","a084629ad073bb37fd65805862f489b0"],["/categories/Minecraft/插件/index.html","fe2ea9b979a70313aeae84c0badfcb26"],["/categories/PhotoShop/index.html","666fa42ba9d79e50230cc9809f0e2c32"],["/categories/index.html","d63b700a48781e4957fb980c145fce76"],["/categories/关于/index.html","16d90ead27dc7662c88119cafe313293"],["/categories/实用/index.html","a863a73d2ede135634f144afa37dfa02"],["/categories/实用/page/2/index.html","4a94e17efb5ad0503cb8acef64117ae8"],["/categories/技术/index.html","acfae5a0e890b136a1592a4635b835f4"],["/categories/教程/index.html","3aa29c6a0b5412fa1841a7b21895a3e7"],["/categories/闲聊/index.html","039821af6e536359ef92e2f81f6695a0"],["/categories/闲聊/page/2/index.html","6589be9ded5009d7f290fc13c5345c2b"],["/categories/闲聊/page/3/index.html","608a9f54cd30836920420b8c52843396"],["/categories/闲聊/page/4/index.html","98543d544201eb2dc8ef0b1ec4fcf4c7"],["/categories/音乐/index.html","83a40854aa81c4fadeb2913ff2ba9d6b"],["/css/index.css","7e3c759ecab1625417faa52a97d30d7b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/waifu.css","e71d9ab3216c5dbfbcfc823e2d074dd4"],["/diary-20-08-14.html","22fe37c01212945ed194e9e05a55b786"],["/diary-20-08-16.html","10079f675ce39e3a4bb4fe8cb30cb735"],["/diary.html","2a4cab5e3f5d28efc0829e1c996ecb1b"],["/doc-live2d.html","23e60721722eb876013c4b158e59b382"],["/frp/index.html","9e5ca997cb8572d96899f1d59165113e"],["/githubchart.html","a141bd3494f19581722e89a152bcb546"],["/horainingyo.html","bc79ba2a0e35d121ea641b24fc53ae1e"],["/images/pwaicons/logo_16.png","94e5591015c3cb6e72360ed1f7b1a9fc"],["/images/pwaicons/logo_165.png","2e5d365f96deabbe0aed14af108ad69e"],["/images/pwaicons/logo_32.png","c8e36df84d26a193900bfccd8fbd637e"],["/images/pwaicons/logo_512.png","1dd00fd74bacf09f68e19719ef0574b2"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/comment.png","3b167d941508abf1017f854b28cd5151"],["/img/comment_bg.png","488773ac22a668a24cc60ff548fc3e3f"],["/img/favicon.png","7be3a186cbb83c3cb3bfd145c59dfc83"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","dff6d7cc40594182414111db29894d4b"],["/js/autoload.js","d95cc1096a472a68270af413be3c516e"],["/js/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","0176913a28754a766910352489a24a69"],["/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["/js/waifu-tips.js","554701a3d2fdad5f465b03d1c307e4e2"],["/link/index.html","e19001f682baa5f9fff493337d893789"],["/live2d.html","15de0ccc6c16148210e6de177c866db9"],["/live2d_widget.html","f17c4a7a34f270b79d09464dcee6d5e6"],["/music/NeteaseMusic/antd.min.css","4f2d3b71c9e6300d506e505a6b26796f"],["/music/NeteaseMusic/antd.min.js","7a6296e75996341045b1d0b4b0456d66"],["/music/NeteaseMusic/axios.min.js","aec752b41708ddd1d4703fb7f261c6d8"],["/music/NeteaseMusic/index.html","2f4d0594b9993ca2dadd9fd230483bea"],["/music/NeteaseMusic/moment.js","0941fc7ec3988352c959e5b3da86f666"],["/music/NeteaseMusic/vue.min.js","d85af260fc0f73ed755e7b0ba8229e44"],["/music/index.html","4169b676a81379e080a0dce03dcb9e41"],["/music/my.html","fd7200172373755e19a1b0f00df55ee2"],["/myself.html","093f96e4aabf2cd5fe8c6c2b1e984d77"],["/only-my-railgun.html","1c5da64a1d082451665384fd1bc8c877"],["/page/2/index.html","8186dd5a7658da05e683fb52a9801547"],["/page/3/index.html","92759a31173ae72ef424416929fcadd2"],["/page/4/index.html","4a0f17327f849bb72033911cdc094da7"],["/page/5/index.html","daac5493fb7495aa22d16777a458f808"],["/privacy/index.html","848b852268cbe2d2738343ef1ae359e6"],["/tags/301跳转/index.html","e6ca9b145869e743f9479c9a58e13dbe"],["/tags/API/index.html","1c2f7dbecffe154c5c60b27ae4679862"],["/tags/ARK-Server/index.html","dae37a7b93c27423e6478df29ce7824b"],["/tags/Centos/index.html","aa9bf222a4628e0353be745e34aa8434"],["/tags/CloudBase云开发/index.html","6c5b6d4f8be1de12aa2e898ed83b6449"],["/tags/Docs/index.html","fbdd5e89deb901d608f976e6ed1b2643"],["/tags/Frp/index.html","5367ca35c31cad9ea468e0aca54c25ef"],["/tags/Hexo/index.html","0c96fd8b4dcab2c7a9a6d543a5e6c957"],["/tags/Linux/index.html","b32fc8458cd602e89ffba22f2320597b"],["/tags/Live2D/index.html","701dc25064ec7271d9b5e262b3c48838"],["/tags/Minecraft/index.html","e560954c91818ea1cdd7ccf9afde3b8c"],["/tags/PhpMyAdmin/index.html","95e6910e81f51db08c0f09fd7b2de0ab"],["/tags/PicGo/index.html","dd3ddbb1f313adf428e8252e2fd0716d"],["/tags/Windows/index.html","fbcbeda99e76a9b358b0328137c13c88"],["/tags/Wordpress/index.html","48ed37543283c0e5713f8b09ac3b3323"],["/tags/index.html","06879a0a936587d53a3b3f944cf698f9"],["/tags/late-in-autumn/index.html","b6d400d61ba3211f289cceb40cfe70cd"],["/tags/とある科学の超電磁炮/index.html","e96a6ed34dec0d2e4cd75a96b80fbc2f"],["/tags/书法/index.html","522d952cac7b6ca247120e3ba4cdae35"],["/tags/介绍/index.html","2cbe5d39275c04a380075918690a7019"],["/tags/公主焊接/index.html","b514c2fcbc2ba0ea5245323c3bdaf30b"],["/tags/内网映射/index.html","01c39c1d02979759a424a28b0c251b83"],["/tags/博客/index.html","42c0f51fecfb2ecae02449620e3cc3c6"],["/tags/博客更新/index.html","2c08a4f583f3395400d073a2276f3c71"],["/tags/图床/index.html","c722d8f61457935142207804ed058f59"],["/tags/域名/index.html","73247c98b1faf01aea762b38dad3fab8"],["/tags/宝塔/index.html","59e2842f5d412391cfcbe07c232164b3"],["/tags/实用/index.html","026e01306ac5490a56bfad48d986b5aa"],["/tags/实用/page/2/index.html","fcd0bdbf7175fdd0b8fa0cc7ef00de08"],["/tags/我的世界/index.html","8563a3e50aac577ec0e501427bba310d"],["/tags/技术/index.html","b8511b45f9fd42e6d90609aaf99e9063"],["/tags/插件/index.html","c2d41e2b6edaa84b554a5c6a3fec95bf"],["/tags/搭建/index.html","0beaeb214dbf46f06053b3c65931349b"],["/tags/教程/index.html","cb91518ea81ecc0af2ed55aa9e0c3feb"],["/tags/新标日/index.html","600e0ccbd80975cb2651aedc9330879d"],["/tags/方舟/index.html","90793ef2ad30068bb3ee4105fa29b0b3"],["/tags/日语/index.html","9500e8f7042c7b93f59b35b995cd11ac"],["/tags/暑假/index.html","c9910dca38dcc51806ea945029175238"],["/tags/更新/index.html","a87f8a34f5eafc61f0a3e85765868cef"],["/tags/服务器/index.html","81ad8c098de6af4badca79a3a55ab1a7"],["/tags/歌曲/index.html","33ecdcb3cc5ad0119817cd27db56018f"],["/tags/漏洞/index.html","e563073a33cd2fc9f64af9330eb17814"],["/tags/猫咖/index.html","4a9a522f1e08e6aeecae0b0a6d04fa07"],["/tags/生存进化/index.html","fc4a6d41bd8c2a6d67eb93bb3706781a"],["/tags/盗号未遂/index.html","00a847267a3d99a41e977d5217d8e063"],["/tags/看板娘/index.html","6c1576cf8870b62434edc6acac0e2327"],["/tags/硬笔/index.html","1acee6ab62bb061529b68f7689bf7660"],["/tags/练字/index.html","b6a503c2054d4c45d26980a581e3c285"],["/tags/网站/index.html","5bd1e101e4197b20f3bf6b5ec77e687e"],["/tags/腾讯云/index.html","5849c4e74ad4d8d7e02ca41bdd9f5557"],["/tags/自我介绍/index.html","804c428c522ea4492fd024a9b727531b"],["/tags/萌国ICP备案/index.html","ce40cb2cf6101997d26a5eea762c1155"],["/tags/蓬莱伝說/index.html","eda7b45e5ea504c73f7c38be28b2dc88"],["/tags/软件/index.html","0092adefaa2630db756cae21abbb254b"],["/tags/闲得慌/index.html","09a470bd5554350bcec2d1050424f1a2"],["/tags/闲聊/index.html","3076f6a57c3f5ef7444ae6e8759fb65a"],["/tags/闲聊/page/2/index.html","52657017e5aa2884b5affe5ea3b158ef"],["/tags/闲聊/page/3/index.html","6e352eefc566e25a49423d83e96d0f9a"],["/tags/静态网站托管/index.html","32fbfa72a3d211f9eb949e786626bf25"],["/tags/音乐/index.html","4c30e3b0445f146b62ef72194acca095"],["/tos/index.html","7462ce2675ece17fcef861f90047cc27"],["/y-late-in-autumn.html","9f17904e333046ed9a426d7022759d32"]];
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

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":null});




