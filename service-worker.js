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

var precacheConfig = [["/100.html","7adebdd80c40d5ac58d04fd4686d92c7"],["/1000.html","73493198b60ff0ea4eebcbdc1615f5d3"],["/1001.html","3829e298f8fda0ab5c71259402313be1"],["/1002.html","8ffeea9dd337381aad931341ccb7e2d2"],["/1003.html","74c0be48b2d352c598207eca084bdd91"],["/1004.html","77e192675ed956e6d897b66e5011c7f7"],["/1005.html","594ae25bedc91516ff842b2b70a2a5c0"],["/101.html","d489c8d2f6ee47443564a69ed59c819b"],["/11.html","9999950f36d1f1579c0b0a06c07b0ac2"],["/110.html","6f9fabb09d95747ba55a635469270323"],["/128.html","7c302ab215e4740c5881f69ef21ca4a3"],["/129.html","e8c326369f657d1fad743fb01d801cd7"],["/16.html","3f29b99067e6cd988920068657703109"],["/163.html","61c417cf1bcb99f5a2bab0402ecf2ee8"],["/168.html","35d67f1782c01aafdae61c3555933079"],["/176.html","831fa48d6893ad0db19899a3c5e26b81"],["/182.html","8d8f0a105655244ca4354681ccdf0a73"],["/189.html","952caf2c69602c41afdbc1e79c30cf60"],["/190.html","df1adbcb828342927fcc0740f17a05dc"],["/192.html","88aef21b425ba311158906da2610b047"],["/197.html","f6b3283b55e41abfcd38211549f8aed5"],["/198.html","0cefcf13e24755733a3e44cff2a560c6"],["/199.html","9a46dcfd35c6c3eb42615e5e5e240527"],["/203.html","5bb671e2b87b6319e73b554b63abde45"],["/214.html","5128bcc6bdac72a1a284f50fb5b1cee6"],["/215.html","4b99abaee568cc50ad6bacb8435425ea"],["/216.html","e3b0349bf0b990a27b71a1ebd8ae9943"],["/224.html","2db413dfc31eed80ec45a4b731fb3ae4"],["/235.html","a542cba8385e975d6aa815005573fd92"],["/29.html","823a85ad6a46599f6d33745555890619"],["/404.html","7e4b622e52dab20b21da5844f11159a0"],["/41.html","7805b392c57d7c0e8142f78146f11d5b"],["/42.html","7c651f7cfb1f8b15ef13ac2826b86e36"],["/45.html","6c96bf832d48b926c9773f66d3df1b93"],["/48.html","f7993492d0d34a462cc154e55a7dd6f1"],["/53.html","d6a470fe422279dcb78243350ad61ad2"],["/58.html","aaacd23b51e8971d90c1ba2c1f66119b"],["/61.html","0c4250497b48879f082695a77621b7b2"],["/63.html","e869708705f0ee1f0e96885e4cedb423"],["/64.html","9e753eb54ee8833cba70b602995fcbbf"],["/80.html","98cd7076c788a59a00957f8bf2ea89ca"],["/92.html","aa519ba9566598ca82daec009f8ebaba"],["/94.html","aa3fd25930f24c5c7c83b1e03b887d16"],["/95.html","264a841a7ba8bf14571717534fd6b376"],["/97.html","d784e7baa4ea6fe919ebf4741bfda885"],["/another/提问的智慧.html","557af72f18cde129b48363c2443b2747"],["/api.html","c8f4f404639b9e3e0d6392418533f37d"],["/archives/2020/03/index.html","e01e5f1fab86085e7bbfc4ace7e1a31e"],["/archives/2020/04/index.html","10ca6116e45dc31422c8ffe47943b639"],["/archives/2020/04/page/2/index.html","511cf48853042f632aaa5905dfb664e5"],["/archives/2020/05/index.html","ebaf068e00f7f0359516078bb8d4fa53"],["/archives/2020/07/index.html","d51a2d1ee6d5df5aba748d4a308c1123"],["/archives/2020/07/page/2/index.html","e4e42c75373b71020182bde3ef3b2148"],["/archives/2020/08/index.html","775d0d9a5c2da0c5e6eb30afeeba2713"],["/archives/2020/08/page/2/index.html","12c0c0a9a5c2eb7509766536e2475ce2"],["/archives/2020/index.html","94ec875bb4c63b07728c0bfb4145ada2"],["/archives/2020/page/2/index.html","267ed495d53d30a4d55a6f009a14fe1d"],["/archives/2020/page/3/index.html","25f7debb83f44f9a6c1b2421e6454e05"],["/archives/2020/page/4/index.html","78916626344f665f8ccefcbd5a3a0b36"],["/archives/2020/page/5/index.html","6242c766f3619e4f89df13e16d08762e"],["/archives/index.html","faff51c45b1e6fd43b5854183dc33b29"],["/archives/page/2/index.html","a22e6a1488046434fd57ee81f987d083"],["/archives/page/3/index.html","04043ff80062679f73e8bf5d9343f1ac"],["/archives/page/4/index.html","c49c82551dd15a7f71e27b84822a00b6"],["/archives/page/5/index.html","6b47575caf48371e1d1cc225a6a04778"],["/b-dual-existence.html","9d53346e922a49401a87961272f87bb5"],["/categories/Docs-Live2D-实用/index.html","d61955398ede707f4534de99b8834dd2"],["/categories/Minecraft/index.html","c304a3cccaacedba27f535acf41db059"],["/categories/Minecraft/插件/index.html","ed57407e9efe448aa10283efff258b32"],["/categories/PhotoShop/index.html","7d3b5106c9909e63cd82c145919c8d87"],["/categories/index.html","a71cf116555b7d9062d3299ccade3021"],["/categories/关于/index.html","8dcd8c7e70872a8abdfe655aa0b69fa0"],["/categories/实用/index.html","25022af6d0daa34007b730849b453756"],["/categories/实用/page/2/index.html","2fa2a470a0833c66b6c2bd5b82892569"],["/categories/技术/index.html","408e28049bd7eaf86e11071801d8106a"],["/categories/教程/index.html","e0d6e1b6c9413087f604d863e9eaf05b"],["/categories/闲聊/index.html","41765b376f02ff69d7e6772ad78101b3"],["/categories/闲聊/page/2/index.html","d85df3be6895f58b3fc78cdc010cd556"],["/categories/闲聊/page/3/index.html","16a5496168326c6367a857f8c6b8bcfd"],["/categories/闲聊/page/4/index.html","b354d21986d931ca4cae640f816a68b0"],["/categories/音乐/index.html","bcc7156944ccbed3883993f99ec92416"],["/css/index.css","7e3c759ecab1625417faa52a97d30d7b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/waifu.css","e71d9ab3216c5dbfbcfc823e2d074dd4"],["/diary-20-08-14.html","406b6167d31516187572138e0d58fc87"],["/diary-20-08-16.html","5b21abdf7bd597c978d77ded286b9bd7"],["/diary.html","bb04bc15d668558895a6225bc23b9daa"],["/doc-live2d.html","9aa2c0511c4535fe7c907cf87e43eabb"],["/frp/index.html","c7664a736abe814f94d9204957bfb876"],["/githubchart.html","35881f58cd2540cc4462852f15f71a34"],["/horainingyo.html","2b6bb8b22e48a7da56a91cef5e54b1de"],["/images/pwaicons/logo_16.png","94e5591015c3cb6e72360ed1f7b1a9fc"],["/images/pwaicons/logo_165.png","2e5d365f96deabbe0aed14af108ad69e"],["/images/pwaicons/logo_32.png","c8e36df84d26a193900bfccd8fbd637e"],["/images/pwaicons/logo_512.png","1dd00fd74bacf09f68e19719ef0574b2"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/comment.png","3b167d941508abf1017f854b28cd5151"],["/img/comment_bg.png","488773ac22a668a24cc60ff548fc3e3f"],["/img/favicon.png","7be3a186cbb83c3cb3bfd145c59dfc83"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","86052bc6f2aa5edcb1a0369c81783fe0"],["/js/autoload.js","d95cc1096a472a68270af413be3c516e"],["/js/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","0176913a28754a766910352489a24a69"],["/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["/js/waifu-tips.js","554701a3d2fdad5f465b03d1c307e4e2"],["/link/index.html","32d38ed5b32ee34a9233f436c4839fa5"],["/live2d.html","cc165c35446d0cf537b72d0db24d11ad"],["/live2d_widget.html","f4d44873dbd6ccfcd129ded4954c52ed"],["/music/NeteaseMusic/antd.min.css","4f2d3b71c9e6300d506e505a6b26796f"],["/music/NeteaseMusic/antd.min.js","7a6296e75996341045b1d0b4b0456d66"],["/music/NeteaseMusic/axios.min.js","aec752b41708ddd1d4703fb7f261c6d8"],["/music/NeteaseMusic/index.html","2e76fafcc559d29abf9b4017d8157506"],["/music/NeteaseMusic/moment.js","0941fc7ec3988352c959e5b3da86f666"],["/music/NeteaseMusic/vue.min.js","d85af260fc0f73ed755e7b0ba8229e44"],["/music/index.html","6ecff56eb088a72f6cd9939897f3b149"],["/music/my.html","f77705aa0c584bf66ec104b3d66eff44"],["/myself.html","3ad38fa9bb48814efb91a0e9c6b6be6b"],["/only-my-railgun.html","28e70b4ad0e08f69654b13550e5dcea6"],["/page/2/index.html","6b291731a3dc29ca1c5b3e8e1eb83b3e"],["/page/3/index.html","e041e8983dcee68a6a95501abcdb0a46"],["/page/4/index.html","5424720e302f09f6bd544227f7db91b0"],["/page/5/index.html","81bbdc752baba5f1a2891de971b0ca37"],["/privacy/index.html","baa8bd25027d595b09fac8273f88827d"],["/tags/301跳转/index.html","4b681b19c5fb4b4d3223f3dc5a88258d"],["/tags/API/index.html","f56177fb43488392f76795239690eb2f"],["/tags/ARK-Server/index.html","a3e6d139a64ffabf9fe4bba8368b68c8"],["/tags/Centos/index.html","015cc13d64fea517e227b5522d375ba8"],["/tags/CloudBase云开发/index.html","4df7bf51274f183ef942af6a94038da2"],["/tags/Docs/index.html","6d9fd90e32570b0965bc3da6be41fc26"],["/tags/Frp/index.html","dedfab7cc8401251520a0fb4dbb76c85"],["/tags/Hexo/index.html","cadca4fe81bfb69f48c4c145b668bcff"],["/tags/Linux/index.html","c49489627fb81df88934750f96011460"],["/tags/Live2D/index.html","a1fda0e0828d62f5cd4b6705bc623a90"],["/tags/Minecraft/index.html","62068dfe24698a560d48a61458a68e18"],["/tags/PhpMyAdmin/index.html","095c4dbc891bd2af06bc59b0d83d8f8e"],["/tags/PicGo/index.html","fefe1f776699bc7dc4e6c9f66fea4836"],["/tags/Windows/index.html","4161da7b1522d06a81cbf2b6616d222f"],["/tags/Wordpress/index.html","adb1bcb79ab9c258cd16fbba97826643"],["/tags/index.html","d550d5f1e3a9fb59d82e0e29751e7b79"],["/tags/late-in-autumn/index.html","634c2d2472e771bfe7980016953287f5"],["/tags/とある科学の超電磁炮/index.html","e31065811496d6c0c91b8db0f53eb3b1"],["/tags/书法/index.html","e6868d3dba484035a7d797e909b0eec0"],["/tags/介绍/index.html","ecc6dfc16fbcde0220b370dba313b291"],["/tags/公主焊接/index.html","a2a1d135a92cc3643d990cd440318173"],["/tags/内网映射/index.html","88028df0c2de6904c392b2ee4b60bd90"],["/tags/博客/index.html","4f9f57b92e2336fb4b62574a1a3d43ce"],["/tags/博客更新/index.html","f980bc71a9f70ad5530b7e789f2b6f9c"],["/tags/图床/index.html","4ef910194daf5261517f58ead22d1fc7"],["/tags/域名/index.html","8eaa32229fe12eb2e462f7862d712d75"],["/tags/宝塔/index.html","df32a4c5229bbd4b61ff6d972d1f6f01"],["/tags/实用/index.html","d86771fa4088d2ea6131e0dcafa1e324"],["/tags/实用/page/2/index.html","c2a4620438516783dd08d179923d962f"],["/tags/我的世界/index.html","e05c28258cf33e708da38d8c59e20a7f"],["/tags/技术/index.html","adf15a338cddf93c8a9a9612514d950e"],["/tags/插件/index.html","d2502d5844e7c43176d390c5eadd65c0"],["/tags/搭建/index.html","ac4430becd6a9568129e3ba471d8af12"],["/tags/教程/index.html","01c719e70e1237ec009758dd61219128"],["/tags/新标日/index.html","4245782b7efb6a0dee0138e8440ff59e"],["/tags/方舟/index.html","7b9440d05e724aff6ab91e9761981d85"],["/tags/日语/index.html","8de6c252d6304e795bbc6ed57c0c9f37"],["/tags/暑假/index.html","962f45ccb6e5124915f32c44b8eed7af"],["/tags/更新/index.html","740e30f064682510b0b69f0964690b26"],["/tags/服务器/index.html","906e637b3a0fff3ff949c653404619b4"],["/tags/歌曲/index.html","9db91fbba0ebc363ab0b1fea4f3b7c20"],["/tags/漏洞/index.html","4da66db812624cf972ae925205864473"],["/tags/猫咖/index.html","7243be3b0a84a1dd9011df67f194dc0b"],["/tags/生存进化/index.html","33ab6425a44a17fef679c7833c2fe44b"],["/tags/盗号未遂/index.html","2755b5eb36206e9d3113e63836c3b53f"],["/tags/看板娘/index.html","9d3fbe9e25795aa3aa3444683ffc8e08"],["/tags/硬笔/index.html","025899759a0806c6aec9537b875ce0c1"],["/tags/练字/index.html","59fc84ca5f3d1b4aa244a355d85c5034"],["/tags/网站/index.html","5284ae3714be1cf7b028164db936db6b"],["/tags/腾讯云/index.html","d85dcc3e0198631fa4f2db97c8b844a3"],["/tags/自我介绍/index.html","12fe6c93c55f803eb670e19b5369824b"],["/tags/萌国ICP备案/index.html","81759dd73ba65d373d00e669b075ff78"],["/tags/蓬莱伝說/index.html","381ae429bb0c96383bd1ee11f8559488"],["/tags/软件/index.html","a0fbd6cb843b1b51d46196c7916e9c99"],["/tags/闲得慌/index.html","2c208c618bfa7958f36efaff139cce4a"],["/tags/闲聊/index.html","fbf1e2f03303d709d1200db61b7ddc18"],["/tags/闲聊/page/2/index.html","1315a242b5f3646e1ed8d188b1feaa90"],["/tags/闲聊/page/3/index.html","e81af7112f30eeed4fa0046c3a85fb87"],["/tags/静态网站托管/index.html","9d72d0dadf6e33f2dc9c4810af0d7d8a"],["/tags/音乐/index.html","355cbd29799adb937c0864cebadc217c"],["/tos/index.html","4db838c7c6db7be37cdb9d4b78e78546"],["/y-late-in-autumn.html","0a650a68a9d89749aab99bf596db6fd3"]];
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

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"https://www.xiaolfeng.cn"});




