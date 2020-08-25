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

var precacheConfig = [["/100.html","16dd80242851b08ab11c6933654097b7"],["/1000.html","2d1c3a652384251dfe6d4733a70c29b0"],["/1001.html","8977f4baacb970075c90be49ec7756fd"],["/1002.html","d8120094dff69ac379cae758e96dcfbd"],["/1003.html","b30be0ac752088631573e8ed6a4022eb"],["/1004.html","c4dc769579df0d910889b649394f85dd"],["/1005.html","c14a6e01a721721428e0aa31d1fefedf"],["/101.html","a9cfb3ebdc94cc3c244da6b644d30323"],["/11.html","26a8317fc62d74a4c7a427c67f4468f9"],["/110.html","aeef0cb3d654dde26e7870b292e976ac"],["/128.html","e2653b5728e0aa332d7433789809c5d0"],["/129.html","266a59e7c99ceb163342eb54afda5721"],["/16.html","ad0e57e53888bb5a575100a9f3008f67"],["/163.html","2d994e42dfc4cc44486bf02c45560a3c"],["/168.html","07366f1a063dd8d885dea4bdb3cc2671"],["/176.html","f5397ff55ad64155d5e98b1216defc47"],["/182.html","57ff31024bf0b0f3e559367d3ae8f206"],["/189.html","f72c1e60358842d92933036eeb16a887"],["/190.html","29f4c886cac7ee4aa0ee8bd1efeb9465"],["/192.html","4e78fd2c07a00459786d7b2679cd64b6"],["/197.html","f0467336915ef8323987daac077be752"],["/198.html","f2798039c2d4142f5c7712118310e240"],["/199.html","afb5ffc1345c5ba9e8d71aac4fe7763e"],["/203.html","25f3371f3d737c962fceec5dfb23d60a"],["/214.html","17f01398ae660527bcbc3bd371baf097"],["/215.html","2eca64d901a84d8f902ac802e3c86d74"],["/216.html","ab7f3e6407f00f159b602c3e260ce4c4"],["/224.html","2458db9861f810c7cdb221ea53e6dad8"],["/235.html","0a87f4b10722d3abf5b53d5bfcdc1bc8"],["/29.html","7741f34bcc34e392c8f4bdc22f5a6187"],["/404.html","53a9b0cff34a067bcc9880c765d021de"],["/41.html","69fba8661ae6f52fd2ddfd8ebb283261"],["/42.html","55004d16132599618cfb790beb6dc1af"],["/45.html","60aace1da62623f9e1cf72becf6ce4d5"],["/48.html","74c760b9a19a3306ff5c1a5031b1f7f8"],["/53.html","e33075d96837471b4a5e884104acdfed"],["/58.html","89e3117262eb70146e0a97ccc62380fb"],["/61.html","a61353ba87837feb7a0dd05a1ef2e24f"],["/63.html","22d22c753c5dcf4a586d2f9db89315d0"],["/64.html","1c9cc40eae38ec956eef9da74aae0bd7"],["/80.html","0e4d27b6beca844563916f3aaf7c9fa7"],["/92.html","ea25a7d1c254135bf546b16771756b2d"],["/94.html","d1cd004e36ee26eb29ded33c3f262760"],["/95.html","0483c28f785a039fe3a44fa6a62dcf78"],["/97.html","691c8577e612738a2d564474b6b41bc8"],["/another/提问的智慧.html","9ecc2a8ce0cf96de4d3c2cce84360f71"],["/api.html","4dc5fde0bdc32d997b345a9b50309b26"],["/archives/2020/03/index.html","578b44ec583688072b00e91dafefe836"],["/archives/2020/04/index.html","11717544989619bba71b3432738addf6"],["/archives/2020/04/page/2/index.html","c04b4c54d6039b5592d135de8815df5a"],["/archives/2020/05/index.html","8181bf2e16a70a3c980361d8edd94543"],["/archives/2020/07/index.html","570b181c45e1000e05fea545e4ca7227"],["/archives/2020/07/page/2/index.html","237aa679fb5df44abca64bfb4c1a7bee"],["/archives/2020/08/index.html","1c8425b8008983e4aad667af42bdfaf0"],["/archives/2020/08/page/2/index.html","5f29e11fb5075362890cb0511586eec0"],["/archives/2020/index.html","1988be29eef08307ae4d9bb54d1094d5"],["/archives/2020/page/2/index.html","13e868564a0797134ecc35dafb30e7f2"],["/archives/2020/page/3/index.html","ebd22c9522226c06a954a2051d722225"],["/archives/2020/page/4/index.html","5f3f117120ccc9ecfa4bf070f914d1ed"],["/archives/2020/page/5/index.html","15ddf80f3023b19b44076583e2e1c932"],["/archives/index.html","a188cbf2cf473e1b5c31755c7712d93b"],["/archives/page/2/index.html","7989c040fe621f7d5b411f377c8edfb2"],["/archives/page/3/index.html","80f51b42f1a9800d580915147b791d2e"],["/archives/page/4/index.html","0a030455ddf38213dd5cfd0030d7ed0a"],["/archives/page/5/index.html","63ec51456433b8788b6770c80c16f1a1"],["/atom.xml","778af73408f6256edd5341e701b4fa15"],["/b-dual-existence.html","d68aa7aeef00998edcb53f2f0c74ba5f"],["/baidusitemap.xml","63786f2e25ec3d6ff7e4132eb108ba93"],["/categories/Docs-Live2D-实用/index.html","a9f2809dcea226fb2c1d77d97ae0a5e1"],["/categories/PhotoShop/index.html","f3f149f89bce02c17a263f02e96ee596"],["/categories/index.html","c68f782ee0e9a5024c5c40926fb57e37"],["/categories/minecraft/index.html","73e0e2fe271eac5f5899613b4b07acdd"],["/categories/minecraft/插件/index.html","228f69d10f137b57473635555164cc6a"],["/categories/关于/index.html","2821f9c56ab47e80a968aff2fbea3f98"],["/categories/实用/index.html","a641af929efb5ce4cf9a2d71ca9d1195"],["/categories/实用/page/2/index.html","802cf2d76c51b2d4ce38243eef3285ae"],["/categories/技术/index.html","926c8730b2e59fb8fe0ab1575a6720ff"],["/categories/教程/index.html","3aadf571a00a903fe8726472eca78d51"],["/categories/闲聊/index.html","f354bfe05018a1ec593b8e06b3892cb6"],["/categories/闲聊/page/2/index.html","714de1b167e30d1dbef0094f7da05563"],["/categories/闲聊/page/3/index.html","9215d9338a40e6d4cf0fa1e0f6da2a9c"],["/categories/闲聊/page/4/index.html","b5f3b5b407177e607d4d52b870234d0d"],["/categories/音乐/index.html","6f170317204b4a2b66abe38b0184b9c3"],["/css/index.css","7e3c759ecab1625417faa52a97d30d7b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/waifu.css","e71d9ab3216c5dbfbcfc823e2d074dd4"],["/diary-20-08-14.html","6f55314f4cf1ef97e693683ad0716736"],["/diary-20-08-16.html","0bad84449d2a1e5df1c57599ddf1dfbf"],["/diary.html","6b07afb2a80ffc4845fde5a5c42fd3ce"],["/doc-live2d.html","749f9d435c52078026a0f11299cbf88d"],["/frp/index.html","4bbcb3988612b5bd9e94258314c86b58"],["/githubchart.html","cd3595ef08e53c4816d1db190a7b8861"],["/horainingyo.html","c47aa4e5f24d5a9f084e8a2fa21a69b8"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/comment.png","3b167d941508abf1017f854b28cd5151"],["/img/comment_bg.png","488773ac22a668a24cc60ff548fc3e3f"],["/img/favicon.png","7be3a186cbb83c3cb3bfd145c59dfc83"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","78e71e5726b6adaf014a0f18b774d88c"],["/js/autoload.js","d95cc1096a472a68270af413be3c516e"],["/js/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","0176913a28754a766910352489a24a69"],["/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["/js/waifu-tips.js","554701a3d2fdad5f465b03d1c307e4e2"],["/js/waifu-tips.json","8dd6573863792f6f2c2e57057d21ef96"],["/link/index.html","cfb151db575c95f7e76a540d4506e21c"],["/live2d.html","b9f3d75f19c9bd79a2d63ecc63e929c0"],["/live2d_widget.html","3f4523bb19a9142222f718106b35a3d6"],["/manifest.json","9e64ecb09d65f5f688e5038010f6c8fe"],["/music/NeteaseMusic/antd.min.css","4f2d3b71c9e6300d506e505a6b26796f"],["/music/NeteaseMusic/antd.min.js","7a6296e75996341045b1d0b4b0456d66"],["/music/NeteaseMusic/axios.min.js","aec752b41708ddd1d4703fb7f261c6d8"],["/music/NeteaseMusic/index.html","475d08a985f9bed68ef1e42b0814ce64"],["/music/NeteaseMusic/moment.js","0941fc7ec3988352c959e5b3da86f666"],["/music/NeteaseMusic/vue.min.js","d85af260fc0f73ed755e7b0ba8229e44"],["/music/index.html","4c47f7fb86af560a623a1cd5faa51569"],["/music/my.html","cfd495cb325368c6b9d0371ecbb70413"],["/myself.html","de675c897543d653ea0ee0e790805dee"],["/only-my-railgun.html","38cf3859ea2732960149d2145f8f8278"],["/page/2/index.html","a128e4df48dbac9eece7e613f9b5a597"],["/page/3/index.html","6f5f8aefd92f43e323bb9df58eaa4405"],["/page/4/index.html","c7915d16eb9c100abb9ecb92a80f3a1b"],["/page/5/index.html","928feb46cd5234ac6eb8ddb6d6bf2eba"],["/privacy/index.html","abd4b25b30840beb2022dc24fe6db342"],["/sitemap.xml","0136bac9f03c5593dc7b7e831bc078dc"],["/sw.js","997ad3b6d5e6b67f958fef7af2741b3b"],["/tags/301跳转/index.html","ba7b061433946e952a501c44220f13fc"],["/tags/API/index.html","efc46bad159f0737469421fd87e2ad97"],["/tags/ARK-Server/index.html","99f8030beaa7a5868fad3d3b7245cb05"],["/tags/Centos/index.html","ec9f1601ce500a701d6471dc7d63645e"],["/tags/CloudBase云开发/index.html","31612db77e8a353ee4174b1e1e831781"],["/tags/Docs/index.html","4ac7cf004192d82a4e543f311698d306"],["/tags/Frp/index.html","3fa7c58f71f3fe965e99685b246cb67d"],["/tags/Hexo/index.html","9ff4bef21b933110738756e04976c84b"],["/tags/Linux/index.html","2ae919c06dc89290cc110efad468c886"],["/tags/Live2D/index.html","7d13bc5548f5a16d091c9dc623c49001"],["/tags/Minecraft/index.html","ee23f5cbfa472ee5c9c883e07959762d"],["/tags/PhpMyAdmin/index.html","06d8bbd6ad17c9e4fe91ca0ded43b2f2"],["/tags/PicGo/index.html","a138bef76ade0f6bf32debf033e4c213"],["/tags/Windows/index.html","7fbd2a51904608592cf3cdceb9db6dcd"],["/tags/Wordpress/index.html","f9714bb831694fbe162390ffa6a8f20d"],["/tags/index.html","76529f1478cc5ed53ddd3e9e2a8df552"],["/tags/late-in-autumn/index.html","3ebd44bfe13bca9c23ff2e88e3bf9169"],["/tags/とある科学の超電磁炮/index.html","eead84f9a13371d163d8e15b60d53937"],["/tags/书法/index.html","01d8a5d2b80bafaf4cb3470fb88f10b4"],["/tags/介绍/index.html","d595f9e6fdb1bc2708a52b2132cfaa1c"],["/tags/公主焊接/index.html","76cf057415891cec6d88b2683a2ecdfa"],["/tags/内网映射/index.html","661e2f669426bbc0152207314259aac0"],["/tags/博客/index.html","54bc1b5567e1d988b079a95a90358410"],["/tags/博客更新/index.html","967139a5b01ba0c3838d743ef3e720d1"],["/tags/图床/index.html","9531c3bac2ae3b0e313c7cea0e22b972"],["/tags/域名/index.html","42324a8e2f70f9285956c20423fc4a26"],["/tags/宝塔/index.html","e130b8d4a4d7fcf889483c6ff011051e"],["/tags/实用/index.html","3f0075de8e130f0f98d93bc4de1901f9"],["/tags/实用/page/2/index.html","76774b76014cbef301ab512bc8fcd4a8"],["/tags/我的世界/index.html","5fa2e0dbe0be0d7183ef4e27d2cde314"],["/tags/技术/index.html","dc3737b015af7f62c45ab951451f3eb9"],["/tags/插件/index.html","bb84b58d7e3c60c1b5af6b9ad8828008"],["/tags/搭建/index.html","e220f5c5014118c4b740f09cfc1b1183"],["/tags/教程/index.html","b6454c6fb8dcdd288a72d69463deb1ca"],["/tags/新标日/index.html","353281f456be89bd52c23cf755a326af"],["/tags/方舟/index.html","c2b6ca461af5563b03aa5db13df08f25"],["/tags/日语/index.html","7290f1547833e38c36c46a0091a92141"],["/tags/暑假/index.html","8339212875f404014c83e2f9a8d0faaf"],["/tags/更新/index.html","637e5aa4e996954629cc41b346661e23"],["/tags/服务器/index.html","b1b9290d2b856135da7c8b68236985bf"],["/tags/歌曲/index.html","7892d86a2f5fd9e21e19fd8cf9636ae3"],["/tags/漏洞/index.html","6a88a18184f0f90c1089440236c6f2e3"],["/tags/猫咖/index.html","48806bc615b8e97f48ebc66be525e52b"],["/tags/生存进化/index.html","4f970bd47ebbf072e3e66ee55d97759c"],["/tags/盗号未遂/index.html","3cb4957cca3c39c6bbb706794babc2c8"],["/tags/看板娘/index.html","16aabb49227f3fcd9d72588e642391af"],["/tags/硬笔/index.html","a7139846cc4ab10d976bb9dae16fd954"],["/tags/练字/index.html","d914cbc9db770d0c3c319200a4681cf9"],["/tags/网站/index.html","263af0c0c1853ca5ccc7994584aa9a0e"],["/tags/腾讯云/index.html","5857fe12098129b1080cc1c2e062884f"],["/tags/自我介绍/index.html","e4719fcab0cdef72283cef345ef87921"],["/tags/萌国ICP备案/index.html","18927f30379aed6b0c3f09dc1678f797"],["/tags/蓬莱伝說/index.html","87dd64e603512633998dbdd7860652dc"],["/tags/软件/index.html","59475acf1220eba169a95a34cfd2c28f"],["/tags/闲得慌/index.html","497cc0c5fbbe025e664925dba3b3d39e"],["/tags/闲聊/index.html","560d7bc3160dbebccde993425979b7f6"],["/tags/闲聊/page/2/index.html","27bfa0596fa887c47d397f61348c1abf"],["/tags/闲聊/page/3/index.html","8dc445c510ccf272f7af7bea8ba688f7"],["/tags/静态网站托管/index.html","9b506f0b453dd928015e8e7f3805703e"],["/tags/音乐/index.html","21e446942989f4071cd50ea958887ec0"],["/tos/index.html","9ddb3efe6dc64894834e0377ef5761a8"],["/y-late-in-autumn.html","cb472f19f004e92b61d0c74f008a2813"]];
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




