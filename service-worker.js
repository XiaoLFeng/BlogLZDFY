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

var precacheConfig = [["/100.html","521d996152a77802aa73c022bf002cb4"],["/1000.html","ffd0f0991be84e0c69c9bd6826d77800"],["/1001.html","6c1d700316647df33ec45797bb91efa8"],["/1002.html","029bf632a7a0430f319d6514e1f85272"],["/1003.html","d81acba9d54682739a4191a912e9c8cb"],["/1004.html","bb653628732bf25c97ea4a84b52cfb34"],["/1005.html","d216cc9526bd1ddb61081c951f109c3a"],["/101.html","b7e676e57725ffe11fe5bda54b0a496d"],["/11.html","d22e2c2092def39c02004fe233f11a65"],["/110.html","b99fa654ca3467d52e5a5d782ece62fc"],["/128.html","ae08e7ead62846cde5ddbbd900706903"],["/129.html","834eeb5067122d40ca5186e5b064569c"],["/16.html","078b766bed81b03a7f2770bc603ebd23"],["/163.html","ce57aa83963089b7052514908fa538ab"],["/168.html","9cc6c3fbc303a714f93e21ca42194202"],["/176.html","e673d4d1228f7aa67f6bf41c859d6c5c"],["/182.html","13e8b0e4639c132d647d409b2c6856cc"],["/189.html","fa68b6a69c9cd51c1a2ea452909d707c"],["/190.html","c7d120a3e038a678e60b3528204128bb"],["/192.html","80ae9a4659dc27fe48134879b4f1f81e"],["/197.html","35fd922096f8b17fb86c6c90ab452bf7"],["/198.html","e71cd61d8342a9e4a15b7d82ad94b8da"],["/199.html","0f06b31a0fad9ed68228ddbb28eae53d"],["/203.html","5f9409594fef1ee80d7e08199b503220"],["/214.html","feb22bf1033ae706340d0b37c7f10b80"],["/215.html","4c8ab242994ae3a70e52e922fa234b86"],["/216.html","149653da824509af059617e84a542162"],["/224.html","24241d52b8a26481ab630a014e981a65"],["/235.html","5b819c66e506b5270f695345877bbbe3"],["/29.html","e419d9de9a02a4128a860a4e3067cc88"],["/404.html","5b8af9023fcf38c0ed21ee0a86e8af44"],["/41.html","458dc7698e6342467c16bfab53e1ace0"],["/42.html","0cf74cdb4280358ae3326e7f9c2383ca"],["/45.html","ecdba9511ec6d586623151e8a1a78c51"],["/48.html","92e6835f9d3b4d58cbdefd941070c776"],["/53.html","26acfb32beb7daee6ecf1b27cc5709c2"],["/58.html","05d00d8b8af661e00a7596499d67b870"],["/61.html","330572b253d8cf3bd2e8d1d6e94ec102"],["/63.html","035a3e0e77a4293c09032df3024da524"],["/64.html","cb63db37e9eedc4507c28ae323604643"],["/80.html","fae084bf2467fe39bffd62d6f5dc5eab"],["/92.html","daba82bd16496b05e05b6ca98b298c24"],["/94.html","fdd84db17747b7848bbde6f04e6a978a"],["/95.html","add8937561df386b462da26f1c495060"],["/97.html","89c75653e241539b536459087213d87e"],["/another/提问的智慧.html","d1ffc7ad101f843ffcea1ba92071b8d2"],["/api.html","30ba2aa86cb8be0fbd958d3d8d5f1b16"],["/archives/2020/03/index.html","e73a68970b9a1904340d3496b9d47c8d"],["/archives/2020/04/index.html","1a957cba906d9b183e9f8c7ef0a5ab64"],["/archives/2020/04/page/2/index.html","54600b116fe54f33819ca0c121fee77d"],["/archives/2020/05/index.html","a2324d998ab9f6e06e400e9c4de7375b"],["/archives/2020/07/index.html","cf04b8728673604d271c0786bcd2a27d"],["/archives/2020/07/page/2/index.html","86976487a7f0f13dd3e4b0a1c88fc548"],["/archives/2020/08/index.html","dc29410d3e96d7245a2b50fd7eb60142"],["/archives/2020/08/page/2/index.html","cdd9e6f00f7733229a9712da1a2fe57f"],["/archives/2020/index.html","f3d758dd109fd454b03ba9d88b7bbbca"],["/archives/2020/page/2/index.html","34c3075b76afccc54cfc5d52d7d0a81f"],["/archives/2020/page/3/index.html","41ab26c995e81083a0cd7dba7aab37f5"],["/archives/2020/page/4/index.html","55c6e2d4e72bed9be9cb924426c7c00e"],["/archives/2020/page/5/index.html","647c8ae97b58c55dab8e95b360b29eb9"],["/archives/index.html","a013b0fc92f917818deb4833d7a9f3f8"],["/archives/page/2/index.html","12b484462d603dd30b8c0ab02c89f980"],["/archives/page/3/index.html","0f95002fe495eef181f45f6ae4ef54f4"],["/archives/page/4/index.html","14c17219f859b0126553b3b28db69f8b"],["/archives/page/5/index.html","d34c559836daa5eb2d133a00f1ed6a86"],["/b-dual-existence.html","caf497956b50ad666323aa8f283bf47f"],["/categories/Docs-Live2D-实用/index.html","a8fffa40f551ce0584a57712f820511b"],["/categories/Minecraft/index.html","1ac32fc050db25e0baaa84f66f593230"],["/categories/Minecraft/插件/index.html","0d45c6fa5610648dd9ef45e13e073c31"],["/categories/PhotoShop/index.html","b3086de50b1f2b545db02ee03d5f6d47"],["/categories/index.html","c0725a01bf38085121d7b9d975244e69"],["/categories/关于/index.html","e9a30b6dd90b13c1834a30ab6193dae9"],["/categories/实用/index.html","f266da9b9699d35f9f0ba3b03f67bea0"],["/categories/实用/page/2/index.html","11420baa270defbe183e6168cc95fc66"],["/categories/技术/index.html","014c8122a3ac864d56c0b9eb5710e104"],["/categories/教程/index.html","76886ee05e3fc3a68cc91e89ea573885"],["/categories/闲聊/index.html","270c61b78d18861e8c184124154e422a"],["/categories/闲聊/page/2/index.html","e45a4c56a22c2d715b13c49a2df85a4b"],["/categories/闲聊/page/3/index.html","808b66d268e0d917c60fc8dd180c3d55"],["/categories/闲聊/page/4/index.html","ee4e0868ed1d6b075db953fcccbc29c5"],["/categories/音乐/index.html","dd2202f9bffe03749e605eac15da5245"],["/css/index.css","7e3c759ecab1625417faa52a97d30d7b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/waifu.css","e71d9ab3216c5dbfbcfc823e2d074dd4"],["/diary-20-08-14.html","22fe37c01212945ed194e9e05a55b786"],["/diary-20-08-16.html","10079f675ce39e3a4bb4fe8cb30cb735"],["/diary.html","bc5d8335b31bac6b080d6b3d718906a3"],["/doc-live2d.html","bdcbed9f0ba24ae59f555db916973e43"],["/frp/index.html","0166d1aef8f8d881bb8f725b157a3864"],["/githubchart.html","a141bd3494f19581722e89a152bcb546"],["/horainingyo.html","d891cf13219ea01fdd6eff459d1db3ed"],["/images/pwaicons/logo_16.png","94e5591015c3cb6e72360ed1f7b1a9fc"],["/images/pwaicons/logo_165.png","2e5d365f96deabbe0aed14af108ad69e"],["/images/pwaicons/logo_32.png","c8e36df84d26a193900bfccd8fbd637e"],["/images/pwaicons/logo_512.png","1dd00fd74bacf09f68e19719ef0574b2"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/comment.png","3b167d941508abf1017f854b28cd5151"],["/img/comment_bg.png","488773ac22a668a24cc60ff548fc3e3f"],["/img/favicon.png","7be3a186cbb83c3cb3bfd145c59dfc83"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","f1c4b91504ca0bd93c6177027612feae"],["/js/autoload.js","d95cc1096a472a68270af413be3c516e"],["/js/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","0176913a28754a766910352489a24a69"],["/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["/js/waifu-tips.js","554701a3d2fdad5f465b03d1c307e4e2"],["/link/index.html","e19001f682baa5f9fff493337d893789"],["/live2d.html","15de0ccc6c16148210e6de177c866db9"],["/live2d_widget.html","f17c4a7a34f270b79d09464dcee6d5e6"],["/music/NeteaseMusic/antd.min.css","4f2d3b71c9e6300d506e505a6b26796f"],["/music/NeteaseMusic/antd.min.js","7a6296e75996341045b1d0b4b0456d66"],["/music/NeteaseMusic/axios.min.js","aec752b41708ddd1d4703fb7f261c6d8"],["/music/NeteaseMusic/index.html","77bf43c1a700acc5acb8d9693068b9eb"],["/music/NeteaseMusic/moment.js","0941fc7ec3988352c959e5b3da86f666"],["/music/NeteaseMusic/vue.min.js","d85af260fc0f73ed755e7b0ba8229e44"],["/music/index.html","df5e9cd4034660c561dff84d95ff5dc2"],["/music/my.html","3f3b850e7f9578586ee56b665172ff77"],["/myself.html","093f96e4aabf2cd5fe8c6c2b1e984d77"],["/only-my-railgun.html","7341810bb0fac838b37f25722d360859"],["/page/2/index.html","820608e7567739a9c5a77e42c55f88cf"],["/page/3/index.html","f436f25b6660583eadc1a1766a6be005"],["/page/4/index.html","d45eccd6b3192a788f9fb0f58c10062b"],["/page/5/index.html","2b36d15281564c8e5c4737d1bf0b3b4a"],["/privacy/index.html","e1c68b584115720a8a0d04f0d1ef7728"],["/tags/301跳转/index.html","355dadb7889d388d9cb1778c2499166a"],["/tags/API/index.html","d524c6398bce24e5d293dd5a16942a5c"],["/tags/ARK-Server/index.html","8b8c4ac029fb20c98ecce07cb1345d7d"],["/tags/Centos/index.html","99d0847931b87c0692f9d613a38a6963"],["/tags/CloudBase云开发/index.html","4d61a4bbad6afb52f7d5b1321c81a060"],["/tags/Docs/index.html","62f5a777fa4b3831bb5f9565145f1f65"],["/tags/Frp/index.html","f93f64683017580f711de03c0326c775"],["/tags/Hexo/index.html","e4540c44e00bb32894f1a0d1aeb95279"],["/tags/Linux/index.html","7f27be79a6ab647b03f7a36a64c7ebb0"],["/tags/Live2D/index.html","4e3056ef30de92d40203ddb11640beca"],["/tags/Minecraft/index.html","d1149263cc9fc094521f2c30f3327180"],["/tags/PhpMyAdmin/index.html","f78e44dbb8c83d13230183ac7c7d671f"],["/tags/PicGo/index.html","093be412a88d16a71c31cfae9550a4f1"],["/tags/Windows/index.html","50609dff6aedddf9090fa39c03c305b9"],["/tags/Wordpress/index.html","60b4e8a5037104993bef4f75b94892b3"],["/tags/index.html","60577b435c7810d2b981bf08574f6dfc"],["/tags/late-in-autumn/index.html","76cf5213d49f0e13c3388b2454bf1aea"],["/tags/とある科学の超電磁炮/index.html","0f968bf6b57cada87c767106bf260646"],["/tags/书法/index.html","fcca16b69ab08cf429c0f79b91024032"],["/tags/介绍/index.html","a7152b1c35e2f2edd07b8513ea8a194f"],["/tags/公主焊接/index.html","05261f3da43be26cf96cff72fc7f1a2f"],["/tags/内网映射/index.html","0fef8ac68d8cfdc200fb1bfafda0efa8"],["/tags/博客/index.html","3165dc5d9bd9b1f0501b57a9ccddf9f4"],["/tags/博客更新/index.html","be06db905e85f4c86fb09cd55b6cae55"],["/tags/图床/index.html","53c10dd78c3fc183e7bed026a955a863"],["/tags/域名/index.html","2976bd74baf0da28cf9635d65c4b0e44"],["/tags/宝塔/index.html","2913da0bc94359faeba8b443b52baf68"],["/tags/实用/index.html","30d3654190dc269fdd164865af33eb1a"],["/tags/实用/page/2/index.html","aeca12aa1c62dacb0f398e37271fdea9"],["/tags/我的世界/index.html","0d7abc796d4e67321f2bc56fd9f87d06"],["/tags/技术/index.html","11ed3917851a492a344bf6d74b3bfbdd"],["/tags/插件/index.html","ed9b3c59a9ca08385cfdc052621e7a8d"],["/tags/搭建/index.html","0d738163ab72597213d23d4a3c4a9fb3"],["/tags/教程/index.html","1eae79222bf54694a801896f25a3ae93"],["/tags/新标日/index.html","7646cf1fdd18de89b2e492e9b8e3395e"],["/tags/方舟/index.html","e2be9cb9051ac0d679543b338c328a11"],["/tags/日语/index.html","5828ee9a3c6f4f73051edab99f9134c6"],["/tags/暑假/index.html","56ba5c848cd27f158a740dd1b4da4c9a"],["/tags/更新/index.html","f2c10b135c4043e4c90079c1e4192a76"],["/tags/服务器/index.html","1d61c6e045f1b4b41098bb9292bbd867"],["/tags/歌曲/index.html","ec5b7b3251b1d18b2a96bc7e03a67077"],["/tags/漏洞/index.html","6e7df4d13bb2a934d1b2c0bd6b5febc2"],["/tags/猫咖/index.html","601b016b4160afc06eab6a2b3c74f908"],["/tags/生存进化/index.html","97e7e50ea4f58948278cc45a1c920342"],["/tags/盗号未遂/index.html","aa9eca9d03d05fb6856b84b2928674f0"],["/tags/看板娘/index.html","4d4e9fdee5edfe37db1f8742c4e6db87"],["/tags/硬笔/index.html","1283ac23d337583bb31070d6e47166fa"],["/tags/练字/index.html","b36c4a0a507186c4c27d85a253de5ea3"],["/tags/网站/index.html","8d0bcad1f9dcb21fe55ddc86057108c0"],["/tags/腾讯云/index.html","d04b6d8256dc28c5885bc0385a68f0ee"],["/tags/自我介绍/index.html","9e1ff870258918a1c09ef794e470db58"],["/tags/萌国ICP备案/index.html","b5c569273626b6aa732593770231b81d"],["/tags/蓬莱伝說/index.html","545a41e498a8f1e307abc64914726529"],["/tags/软件/index.html","4f064ef45cba3b3c784cb60720e09265"],["/tags/闲得慌/index.html","8bb988324c777b54e36184a980a9e83e"],["/tags/闲聊/index.html","eb2c944f3b39c57aa2eec196563428c7"],["/tags/闲聊/page/2/index.html","9b5e02218ab77e6e9ac2ac830490610d"],["/tags/闲聊/page/3/index.html","877c4f9a639066d323c3c1a66ee696d9"],["/tags/静态网站托管/index.html","5567d5b27b71811215ce6948256d0232"],["/tags/音乐/index.html","6c9ec50afc826f4ace16c81e4c2b7f69"],["/tos/index.html","21dde08d3f1094463ec8ebdd1acb98cc"],["/y-late-in-autumn.html","a601080201ebd6613ea6a1e19a0b412d"]];
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




