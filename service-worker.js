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

var precacheConfig = [["/100.html","b14b7c1bf372f0b9edb9e5299217e7e8"],["/1000.html","ffd0f0991be84e0c69c9bd6826d77800"],["/1001.html","6c1d700316647df33ec45797bb91efa8"],["/1002.html","029bf632a7a0430f319d6514e1f85272"],["/1003.html","d81acba9d54682739a4191a912e9c8cb"],["/1004.html","bb653628732bf25c97ea4a84b52cfb34"],["/1005.html","d216cc9526bd1ddb61081c951f109c3a"],["/101.html","6a0ff590afd07e2ce203689d45329a7d"],["/11.html","b5f673b9064b84d5fae5cf410f90f3fd"],["/110.html","09bd440bbd3bb722f5e4140d2c8c202e"],["/128.html","ae89587de6473b61aedb51a79c243beb"],["/129.html","1d14a3afef2ccebd05fd2821d331629f"],["/16.html","422f6d8c31e4e4290235425aa7c76017"],["/163.html","bb6dd3ce2debf0f5ab1d87aad66d619d"],["/168.html","7c99c0fa9cf1920c8ce88fed47a8eeed"],["/176.html","aa24a2a5813e3eaa536fc35770001f09"],["/182.html","e48de3539ee937e537b4000340103d51"],["/189.html","10c59cce5ac514f153e8d2badcab01db"],["/190.html","76e097427fc4f99a19f2a71ef59eb3b9"],["/192.html","7b15d33854c2d6a49e1ff2dfe8ac1c54"],["/197.html","c9be8fb90c74b6d370e47fd8b3c55e5a"],["/198.html","b11213dca68930b769e9208952a381b1"],["/199.html","54dc92486ea815a4355003727c9ee913"],["/203.html","f3301c0a57daf8fb9be43259bb520da5"],["/214.html","c40031e23db2f5ee2ae1e5ab995b8de7"],["/215.html","4c8ab242994ae3a70e52e922fa234b86"],["/216.html","149653da824509af059617e84a542162"],["/224.html","24241d52b8a26481ab630a014e981a65"],["/235.html","5b819c66e506b5270f695345877bbbe3"],["/29.html","4c5de535c45eb3d0b7ffdd7d3c9b2315"],["/404.html","4bec7ff02283879c3f77e993183b852b"],["/41.html","6d3c605eb9e0e5824ef1ddba1709ed5b"],["/42.html","46555fa06514915d8a46786cc9a7b069"],["/45.html","9c01260c9eb92709af68794694c54b26"],["/48.html","c07aa95d9643a14b765ec5b4af4feaae"],["/53.html","4755d8aa9d7eab2022d041acc5d66069"],["/58.html","1d5e1ae02cdaa82fe11819a6d5d8b566"],["/61.html","495e13485c1e983abed2c478ca4912a4"],["/63.html","1663bb44cc106dab45e98b8d310f0282"],["/64.html","d41d1c8983e2dfcec54fcb2a0b6b4ad5"],["/80.html","fe47b68a0cfa32152fb0b98c0a02f2e7"],["/92.html","3ec54bf4ca26a5cedd0e515ad2796634"],["/94.html","3d39164d263e8b8ec2760fd6a9408ee6"],["/95.html","0928b122c072bcdefc9816e39eb5291e"],["/97.html","892419c93003caf115490f77a13b1fb4"],["/another/提问的智慧.html","d1ffc7ad101f843ffcea1ba92071b8d2"],["/api.html","30ba2aa86cb8be0fbd958d3d8d5f1b16"],["/archives/2020/03/index.html","7b189618d52043b9608823147670dd90"],["/archives/2020/04/index.html","8c09a63c411b0407e45342ec773a5e73"],["/archives/2020/04/page/2/index.html","b4a30d7af6059e953b12a39d56e04c88"],["/archives/2020/05/index.html","d1f8e63d8b9940ff027f7f7d86260f8b"],["/archives/2020/07/index.html","aeee43e26d6cc6faef6fce0b6d11b0e0"],["/archives/2020/07/page/2/index.html","7dd249aeec49c8d3264339b35ad49b6b"],["/archives/2020/08/index.html","807d2492019e5646346b42333173f663"],["/archives/2020/08/page/2/index.html","90ff09a87f2e431ca753a8b2976bae64"],["/archives/2020/index.html","02f254267f696bf964aeb042f2c01349"],["/archives/2020/page/2/index.html","24fa215058abdb843c86270d2fc611a7"],["/archives/2020/page/3/index.html","7dff93eb5a5e9c7cb5d3a69c98d6d073"],["/archives/2020/page/4/index.html","d236dbc517618a31074afe73e0577e96"],["/archives/2020/page/5/index.html","a2618674d2f79279b368a291e3a42c40"],["/archives/index.html","e2548a52a168989971ab73eead126413"],["/archives/page/2/index.html","088c20bbc2e14fd6d7fc4d599cb74cd2"],["/archives/page/3/index.html","7770e2a35db5a9d76b1810db5b4c3059"],["/archives/page/4/index.html","e7629216cf18e5597a169c4357d5036b"],["/archives/page/5/index.html","d2b320eec75a29e18c3008ff94e0f5b5"],["/b-dual-existence.html","2614278fdc6307c1558d4957b24fa498"],["/categories/Docs-Live2D-实用/index.html","cb46e006fe8e6216fe34a5468598d7c3"],["/categories/Minecraft/index.html","d71a7c388d86f6f3023c529e6224ea65"],["/categories/Minecraft/插件/index.html","c04ef46d55637c0f2dc9aa892f11e185"],["/categories/PhotoShop/index.html","d0b1869596196608367234fd8a22b5c2"],["/categories/index.html","d63b700a48781e4957fb980c145fce76"],["/categories/关于/index.html","6fc5310d836d232fdc3e0a88f1225d2a"],["/categories/实用/index.html","6dbb2c15b1332a3ea478400cf678fd1f"],["/categories/实用/page/2/index.html","f5289fac143eddf0368c2e6b4aed8055"],["/categories/技术/index.html","9ccad88419ba98a9288c69f31574b80c"],["/categories/教程/index.html","48f148a77120920a71acc90bf618717d"],["/categories/闲聊/index.html","03b8b6965233b00bf4c3a5832db2376f"],["/categories/闲聊/page/2/index.html","5e7d8093e6c7131ad02a69f560bef509"],["/categories/闲聊/page/3/index.html","0c43810f4638f42b44ea56983e64b35a"],["/categories/闲聊/page/4/index.html","0f3effc843a83062addd7399835dee20"],["/categories/音乐/index.html","7386860f5fe9a293d78dae79bb0f5107"],["/css/index.css","7e3c759ecab1625417faa52a97d30d7b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/waifu.css","e71d9ab3216c5dbfbcfc823e2d074dd4"],["/diary-20-08-14.html","22fe37c01212945ed194e9e05a55b786"],["/diary-20-08-16.html","10079f675ce39e3a4bb4fe8cb30cb735"],["/diary.html","bc5d8335b31bac6b080d6b3d718906a3"],["/doc-live2d.html","130966052f0d937abadbad47713030fe"],["/frp/index.html","e403c685db37d708574f12f29e527516"],["/githubchart.html","a141bd3494f19581722e89a152bcb546"],["/horainingyo.html","a3592f8957804a2fe406922e2a971cea"],["/images/pwaicons/logo_16.png","94e5591015c3cb6e72360ed1f7b1a9fc"],["/images/pwaicons/logo_165.png","2e5d365f96deabbe0aed14af108ad69e"],["/images/pwaicons/logo_32.png","c8e36df84d26a193900bfccd8fbd637e"],["/images/pwaicons/logo_512.png","1dd00fd74bacf09f68e19719ef0574b2"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/comment.png","3b167d941508abf1017f854b28cd5151"],["/img/comment_bg.png","488773ac22a668a24cc60ff548fc3e3f"],["/img/favicon.png","7be3a186cbb83c3cb3bfd145c59dfc83"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","2aa60507c3efe9f7066aff1b51ff83da"],["/js/autoload.js","d95cc1096a472a68270af413be3c516e"],["/js/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","0176913a28754a766910352489a24a69"],["/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["/js/waifu-tips.js","554701a3d2fdad5f465b03d1c307e4e2"],["/link/index.html","1fd0cd2dfae3538a830b6a846d16630a"],["/live2d.html","15de0ccc6c16148210e6de177c866db9"],["/live2d_widget.html","f17c4a7a34f270b79d09464dcee6d5e6"],["/music/NeteaseMusic/antd.min.css","4f2d3b71c9e6300d506e505a6b26796f"],["/music/NeteaseMusic/antd.min.js","7a6296e75996341045b1d0b4b0456d66"],["/music/NeteaseMusic/axios.min.js","aec752b41708ddd1d4703fb7f261c6d8"],["/music/NeteaseMusic/index.html","231973bdc85c4cb47753abaadede2909"],["/music/NeteaseMusic/moment.js","0941fc7ec3988352c959e5b3da86f666"],["/music/NeteaseMusic/vue.min.js","d85af260fc0f73ed755e7b0ba8229e44"],["/music/index.html","68f40b0db7ed2433d85c2341aaa669a7"],["/music/my.html","affd39e0ec332c948cb536e1cf987784"],["/myself.html","3a50ada2bb86fe4092c0e1f987937d17"],["/only-my-railgun.html","3c1ec9a8cfd2f978d4e05ba2893ea10b"],["/page/2/index.html","f74562d7411d5fc1d4aaf4c3a77761fb"],["/page/3/index.html","bb1ac48b48fe028ee6ba551ca67e8048"],["/page/4/index.html","ac77c0377260d47c3bac1f8704ccdaeb"],["/page/5/index.html","8a47d42bd0dff66b10c464dfa43ca782"],["/privacy/index.html","0d4fd6c2aa382b36f2be7e32e3413f30"],["/tags/301跳转/index.html","a8c238531ba31b8afbb4782bf7ba0217"],["/tags/API/index.html","e3f9b95a3f601bd6e1279be54f01571e"],["/tags/ARK-Server/index.html","982e1489b4958d329d40c7d76ea996f8"],["/tags/Centos/index.html","6752cf3aaf300ceed2409e6cd6919bcb"],["/tags/CloudBase云开发/index.html","bb71a263c68e6d4d1a50e4927a34ca0a"],["/tags/Docs/index.html","f00ec6885a94ccdbae856773c23a6404"],["/tags/Frp/index.html","15b96b38fe0c1f787987b64b7759d7ad"],["/tags/Hexo/index.html","985c664de76fe4fd7bd915d723b9bc40"],["/tags/Linux/index.html","1e969eed095f9e63900d7dc6c1aa40de"],["/tags/Live2D/index.html","1debd057db6378361540cdf3792c2df5"],["/tags/Minecraft/index.html","4c34e7bb091907ebb9cb98f059335563"],["/tags/PhpMyAdmin/index.html","e0b6edf914aea1f64f2a65eaff8e7ea7"],["/tags/PicGo/index.html","97bc9dfaf959aa391c52f92b6096827d"],["/tags/Windows/index.html","c4383c68fd34a1e306bcecf5b9040c61"],["/tags/Wordpress/index.html","b66abca63f03f3064000d2b69e5a854f"],["/tags/index.html","bfaaa90b0d2d1e83e8a47cdc65ac4494"],["/tags/late-in-autumn/index.html","c0c43f35ebd0f2cf4f8176497cb78257"],["/tags/とある科学の超電磁炮/index.html","9d0e73d19f8d1ea53c4e90081d86f670"],["/tags/书法/index.html","73eeff6c73182853ea08c1a76de0093a"],["/tags/介绍/index.html","db5280c2a4de9f364660d03378192fa1"],["/tags/公主焊接/index.html","5a4692052cd1ac5c72dbfdfdc78fb1bd"],["/tags/内网映射/index.html","f6c4ed1915e5c9cca3acd254873d1653"],["/tags/博客/index.html","3422c94159097774116a81ede1eeec5c"],["/tags/博客更新/index.html","c9bdbe9e6c84ab4dc655cda97abf2f21"],["/tags/图床/index.html","e46602ea327f248e129cb0488be73d23"],["/tags/域名/index.html","72cad9d4c8ccd69823524577de3c9b57"],["/tags/宝塔/index.html","7e1b47fbda32638924fb729865803ad3"],["/tags/实用/index.html","54bdf5226838303456c86cdbc17c493a"],["/tags/实用/page/2/index.html","db547ba3828102ef8b0d291119abdc77"],["/tags/我的世界/index.html","74579cc01ed7b73c0c85a70e908f345a"],["/tags/技术/index.html","557d8737639a68e182f39889c170078f"],["/tags/插件/index.html","f33eb72a4d7b867c4c0a48ac393c49ce"],["/tags/搭建/index.html","9ac41e953e74d97d7fe8ea0b13c6e829"],["/tags/教程/index.html","d7303c97bccf08c2b1b04f53f548a5cb"],["/tags/新标日/index.html","b7b851b02182a27424fb93c5d47b6fbb"],["/tags/方舟/index.html","34c06b949f3e06ffd7c7f7d8b57f906c"],["/tags/日语/index.html","0ae2dff17170a6bfd9709699a90afd82"],["/tags/暑假/index.html","8f990b95e79d924771ae71b74e4ffe76"],["/tags/更新/index.html","3a87b5b20db7366c8be6746d64107852"],["/tags/服务器/index.html","7211ef74645a5fd79ea2a5ff339e4230"],["/tags/歌曲/index.html","09f84927f090d5df584edfe9d24ae22a"],["/tags/漏洞/index.html","c6125542e3e8e1dd0e04fcdfb84665f2"],["/tags/猫咖/index.html","70cae578c81f0bef6702fe1d30838311"],["/tags/生存进化/index.html","c73d9f6c76803ae76b32a0a2771079fe"],["/tags/盗号未遂/index.html","194d4260a852be1e607d5249ff10c8fb"],["/tags/看板娘/index.html","f7c8df9eec3f186778d56ec70e690f86"],["/tags/硬笔/index.html","b4795e7037ec5f7ad23f366bab5e3020"],["/tags/练字/index.html","914c45bc326dc1a835e279e7c2ee9433"],["/tags/网站/index.html","a88dca126168c1f285ca3e2ee6b47aa5"],["/tags/腾讯云/index.html","b7fcc7d7dcf9238fee0f72440864d4fa"],["/tags/自我介绍/index.html","f90f9bdc31193baeed6003d3a18d24f0"],["/tags/萌国ICP备案/index.html","c8c23e906b5e0536b064f546d295ce13"],["/tags/蓬莱伝說/index.html","6495cb5a663257ebf56ac1162d1c7bc0"],["/tags/软件/index.html","dd21af14b0a9ae16cfd1ee173920e978"],["/tags/闲得慌/index.html","c1086aee6274947f2d5b3d40a8dacff7"],["/tags/闲聊/index.html","aa31fb61b3c2b500bb62d931ec04757e"],["/tags/闲聊/page/2/index.html","34bf86e832b045d0ea8f401d3d5459d6"],["/tags/闲聊/page/3/index.html","8aa8f51119ecdf4028263b7d541641bf"],["/tags/静态网站托管/index.html","8cf13e389b8a507d79cb29848aae2edb"],["/tags/音乐/index.html","cd91651eb4dc936ff6fbd6a16c8e8bca"],["/tos/index.html","c42977e77e273c25dd66deb54b30e6a6"],["/y-late-in-autumn.html","e1500ff5c9812fc20b4b9df43fdd6bc8"]];
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
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"www.xiaolfeng.cn"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"xiaolfeng.cn"});




