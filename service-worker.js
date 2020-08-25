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

var precacheConfig = [["/100.html","a167c6f51b12ad0be8af69d4cedf56dc"],["/1000.html","2d1c3a652384251dfe6d4733a70c29b0"],["/1001.html","8977f4baacb970075c90be49ec7756fd"],["/1002.html","d8120094dff69ac379cae758e96dcfbd"],["/1003.html","b30be0ac752088631573e8ed6a4022eb"],["/1004.html","c4dc769579df0d910889b649394f85dd"],["/1005.html","c14a6e01a721721428e0aa31d1fefedf"],["/101.html","c817cb5d14165e718379fd154ecf695f"],["/11.html","e7365fe8753f6bd812ced616dc889be6"],["/110.html","c940ee666ded04a2ff68bdc42d60a80f"],["/128.html","aacf5a1c95c21d76f61c70cc8bfde2f3"],["/129.html","8f927c8000da77a70484e34a5bd9a321"],["/16.html","34af86e87848088d941e89be6f30ffb9"],["/163.html","f50b02960867db31c6883d63e38132cb"],["/168.html","38580d8a2fee6d5ebc5b36d647fff85a"],["/176.html","a2a47d3d9e6b6b1c826a0585fa56830e"],["/182.html","1a759824660513c66a1b9e3871e8ab55"],["/189.html","f2bf7d1a1269ba20aa73a3830e29fb3d"],["/190.html","3bf55dd6643496cf5ca516e8be3d43ca"],["/192.html","24a7e8d4e26fbf3551e4ab829855d719"],["/197.html","c21045064b6129dcd175d35f962e5bd0"],["/198.html","dded376064074ffeed69c4b3624427e6"],["/199.html","ca9d0ffa2682cb00da9a95bb54da9d94"],["/203.html","47e0771d6c11d4847cc4983e215d533c"],["/214.html","17f01398ae660527bcbc3bd371baf097"],["/215.html","2eca64d901a84d8f902ac802e3c86d74"],["/216.html","ab7f3e6407f00f159b602c3e260ce4c4"],["/224.html","2458db9861f810c7cdb221ea53e6dad8"],["/235.html","0a87f4b10722d3abf5b53d5bfcdc1bc8"],["/29.html","b346c8307e1a48beb63adafb94ecb8d4"],["/404.html","c78501f9fa351f97d8896775007244e8"],["/41.html","8bcc1f3812e6c48974e8148410c16ddf"],["/42.html","79c0e9c641653591459e07bfc43b20ae"],["/45.html","2375d0994113afdd3ff2c9679d21d8b0"],["/48.html","8f7a036b9923187b45c2cfdb9a2a534c"],["/53.html","820bf05c2bb7323381d4d9f6e51b1e9d"],["/58.html","3654c70df94601c81293de529f31d1e0"],["/61.html","83b8cc0c452321d442bce8be39259e21"],["/63.html","5a90c7f81a49c433560dc67a375be08f"],["/64.html","d30fb080fa8cf842f11cd57db12beb48"],["/80.html","db3406e693b13d095d273d46531bb0e6"],["/92.html","73c39e570ed877100d29f615e0c56ea5"],["/94.html","0a72233faef0c25b2799ac6d7f05a9eb"],["/95.html","917581c6d8b63f958119f9391050b7db"],["/97.html","5600bd2dcc72065ebe9e42c2e0c92d37"],["/another/提问的智慧.html","9ecc2a8ce0cf96de4d3c2cce84360f71"],["/api.html","4dc5fde0bdc32d997b345a9b50309b26"],["/archives/2020/03/index.html","6f57743ecc9c1734e109bed587ade936"],["/archives/2020/04/index.html","6853cc2cb398abdaa7a7b58d0c08d4ed"],["/archives/2020/04/page/2/index.html","a6f86a2550a724f9fe974e020a90246c"],["/archives/2020/05/index.html","acf91690aefd9b87831b25e713364fd2"],["/archives/2020/07/index.html","c3bdad39ba603925318e296e03fde797"],["/archives/2020/07/page/2/index.html","bccea24a34c258a5e6849f426fa714fd"],["/archives/2020/08/index.html","2f97b0a37417e37f3465ea44c65598d5"],["/archives/2020/08/page/2/index.html","5ea0a97184321b62599f03db9f9188bf"],["/archives/2020/index.html","85a0e018773c72257d793d33517ee977"],["/archives/2020/page/2/index.html","c278fa54d96496e6778c3a21766927f3"],["/archives/2020/page/3/index.html","9cdfe21d900b337586b434a01c74b364"],["/archives/2020/page/4/index.html","f1a615bfc41c82cd859c4e01a7cf44c4"],["/archives/2020/page/5/index.html","6a29fc770cbddc498201d52d56e09397"],["/archives/index.html","b10462c254fa1428e2583fbe89e69173"],["/archives/page/2/index.html","462c28f33c688f773b3d1f053e06b8d4"],["/archives/page/3/index.html","e5513ccd0b36ba2360fbe45cfe628023"],["/archives/page/4/index.html","a2b807d963d222c12b8d92f70155b3e6"],["/archives/page/5/index.html","68ae64a486296df5e24b5a7cf2ba9307"],["/atom.xml","14d17f7b613621a23fb10aa2791dc8d4"],["/b-dual-existence.html","c13fdfb467a0d4b5f9a4514b763938c1"],["/baidusitemap.xml","3958f84c384c7b1824aed5e576b985bf"],["/categories/Docs-Live2D-实用/index.html","f36db5fc2e0e1e963789e8131ebb40ce"],["/categories/Minecraft/index.html","a8fba6bed11ce14e01c61c3a015d6524"],["/categories/Minecraft/插件/index.html","63c3b94a0391bed6b9014060b202a18c"],["/categories/PhotoShop/index.html","a4d1379cfaf25b1dbae74a1e2d00cea2"],["/categories/index.html","4b0d75b6f7618540855d721aaa26c554"],["/categories/关于/index.html","e742724eee9d9bf0362f04d30e43c7f5"],["/categories/实用/index.html","b20c06902ec7a9e41305a53cfb0e41be"],["/categories/实用/page/2/index.html","3e9a95ee53754672aae3ac2b86160fca"],["/categories/技术/index.html","817ef4c3623c1d0fff3e9f2a59cdcb95"],["/categories/教程/index.html","2264c85e4ec303b7cc0d28a653edc07a"],["/categories/闲聊/index.html","e4d0d609bc0f357aa30382fe386b6abf"],["/categories/闲聊/page/2/index.html","4c777b72858b5ee3654fe1786bef9bec"],["/categories/闲聊/page/3/index.html","d1b9283ef563359cf2247f72dde245a9"],["/categories/闲聊/page/4/index.html","b516a5432458eef2b67b39c26144a38b"],["/categories/音乐/index.html","c05f638b2c58a7335e9e397cb7fca271"],["/css/index.css","7e3c759ecab1625417faa52a97d30d7b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/waifu.css","e71d9ab3216c5dbfbcfc823e2d074dd4"],["/diary-20-08-14.html","6f55314f4cf1ef97e693683ad0716736"],["/diary-20-08-16.html","0bad84449d2a1e5df1c57599ddf1dfbf"],["/diary.html","fd587cfb6d5dfdb136ce4a59c9ad4ea9"],["/doc-live2d.html","d616595a6a6bc9cb52ebfc902745d1d5"],["/frp/index.html","4bbcb3988612b5bd9e94258314c86b58"],["/githubchart.html","cd3595ef08e53c4816d1db190a7b8861"],["/horainingyo.html","608b7f20984304390b1d7b3edcaae372"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/comment.png","3b167d941508abf1017f854b28cd5151"],["/img/comment_bg.png","488773ac22a668a24cc60ff548fc3e3f"],["/img/favicon.png","7be3a186cbb83c3cb3bfd145c59dfc83"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","d62f346b4ed5b5050fb05477f3ecc875"],["/js/autoload.js","d95cc1096a472a68270af413be3c516e"],["/js/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","0176913a28754a766910352489a24a69"],["/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["/js/waifu-tips.js","554701a3d2fdad5f465b03d1c307e4e2"],["/js/waifu-tips.json","8dd6573863792f6f2c2e57057d21ef96"],["/link/index.html","dde05f107a401233acc449a6507798be"],["/live2d.html","b9f3d75f19c9bd79a2d63ecc63e929c0"],["/live2d_widget.html","3f4523bb19a9142222f718106b35a3d6"],["/manifest.json","9e64ecb09d65f5f688e5038010f6c8fe"],["/music/NeteaseMusic/antd.min.css","4f2d3b71c9e6300d506e505a6b26796f"],["/music/NeteaseMusic/antd.min.js","7a6296e75996341045b1d0b4b0456d66"],["/music/NeteaseMusic/axios.min.js","aec752b41708ddd1d4703fb7f261c6d8"],["/music/NeteaseMusic/index.html","95d70abcc7f6863c0a5ac13887c0b8c8"],["/music/NeteaseMusic/moment.js","0941fc7ec3988352c959e5b3da86f666"],["/music/NeteaseMusic/vue.min.js","d85af260fc0f73ed755e7b0ba8229e44"],["/music/index.html","a953ead92fa59df7793ed5a4d13d8269"],["/music/my.html","129bf4bce12e3f1ebc9d6802accda226"],["/myself.html","edfb81cd9518b1a9793bd053df6309fe"],["/only-my-railgun.html","fd43749754e3df490fb0dd58328602de"],["/page/2/index.html","95761491acb2ac5824a1eb1cf7d64ee7"],["/page/3/index.html","9290a8c5820ac6885ce559d59faa7047"],["/page/4/index.html","64eb892fda2261fe7ca6106bc122fceb"],["/page/5/index.html","e7f6525b11b1dc7326d63632594940f3"],["/privacy/index.html","abd4b25b30840beb2022dc24fe6db342"],["/sitemap.xml","518d8cd80bd70f3c56af171cf1fc0626"],["/tags/301跳转/index.html","2d9903c2f5b7b71572c844f7d5c345f9"],["/tags/API/index.html","2119223a44688342c2c74c3551434759"],["/tags/ARK-Server/index.html","f473ba5c2bba1937ada2415208e242c8"],["/tags/Centos/index.html","83ab2439504f50ee09438b8636743320"],["/tags/CloudBase云开发/index.html","059f82b1bd2b291786c7bf40fe3d925c"],["/tags/Docs/index.html","f9cc342412d2ed5f5bdb9a8b0578a022"],["/tags/Frp/index.html","892c2d4b42ce0b6f8ae3a192c11297b1"],["/tags/Hexo/index.html","641a7992ed5eb5d705dd3c5dcc998dc3"],["/tags/Linux/index.html","595036e846fc7b75ddd879da3433f154"],["/tags/Live2D/index.html","43775282594c848810ed9d9a6f6f34ae"],["/tags/Minecraft/index.html","048b8466ded3d6daa7ee6b6f9746071a"],["/tags/PhpMyAdmin/index.html","92446b569c82c2a5f6ccf18ff78c9415"],["/tags/PicGo/index.html","c8f92cafaf624d8a9293cf75ec31d1e1"],["/tags/Windows/index.html","9f72226d004e5198fd721aa2c1d465b3"],["/tags/Wordpress/index.html","017b08583f0cecf2df7924d972d0b14b"],["/tags/index.html","097e8da3870129e222fc8b42a2b987f6"],["/tags/late-in-autumn/index.html","a57f97926eaeb0e37bbfeeebc9b85b24"],["/tags/とある科学の超電磁炮/index.html","2fb956ee699bb5c0d6f350cd9abb286c"],["/tags/书法/index.html","04815830335ac1e707d23ee52b4261b9"],["/tags/介绍/index.html","513eb11aef0a047fc8b98db224107486"],["/tags/公主焊接/index.html","d749fe7d46689ab1ba42122f5327e120"],["/tags/内网映射/index.html","c002997890fa255bd6e7c0921eea80b2"],["/tags/博客/index.html","bd70717c792808251cc6954e9265c9ce"],["/tags/博客更新/index.html","c259e1b0da2aedcf2a52700501e1c5c5"],["/tags/图床/index.html","70cc80b6d054289e94c048f4532d4d71"],["/tags/域名/index.html","4bbb709d393a7e5433580049ed91ebd6"],["/tags/宝塔/index.html","4322b593f238e5dc4397d40d90074e0a"],["/tags/实用/index.html","4e5f6d69f171732184d48e30ca252f67"],["/tags/实用/page/2/index.html","7785929818b180ae89df64bddb2cd1d7"],["/tags/我的世界/index.html","cb7db74d3134f517eb6c56b3b72bac35"],["/tags/技术/index.html","ca883db01bc337093cc30883df30ac65"],["/tags/插件/index.html","04b236a5e16d49b6f2562e9d93cf6260"],["/tags/搭建/index.html","e7f9bbecd9951061883009ca2d66a11c"],["/tags/教程/index.html","f6898dfa813f134d207b4552f2d7ee01"],["/tags/新标日/index.html","93dc3692d12f2499eafc255b929e3e7c"],["/tags/方舟/index.html","df6c6f1ff8336a337f6b300be954f771"],["/tags/日语/index.html","a73efff73c7c050fde70e05879beebd9"],["/tags/暑假/index.html","ecb8cd8c3808b83146254a36da75d56d"],["/tags/更新/index.html","08a6b2728413305370414982d0fd4ada"],["/tags/服务器/index.html","07aa03eed31eadc51d6b5a4fb13d39cf"],["/tags/歌曲/index.html","27c1fb5bbbc559999def7e71a5ca8192"],["/tags/漏洞/index.html","e2b253d9c2747db14b646c7f04f5368b"],["/tags/猫咖/index.html","6df3189ef18ab21055f070e140686fb0"],["/tags/生存进化/index.html","2c8ab145803147d97735427dc8ec1132"],["/tags/盗号未遂/index.html","636bbfeafe5352f327a500266eb11402"],["/tags/看板娘/index.html","76bff4185af9c3b0f52efe129e3db29d"],["/tags/硬笔/index.html","e47da53524b7b15171e7ef38d0d9168e"],["/tags/练字/index.html","91772d0e19213d451b1cefd4055cdb8e"],["/tags/网站/index.html","91048b0fa528f363f9d0e36b15647c7f"],["/tags/腾讯云/index.html","13ebe844c56c4b40d8353ce087613493"],["/tags/自我介绍/index.html","43d346facb062f06439fbeabe758f1c2"],["/tags/萌国ICP备案/index.html","5b2cb6a2d82a5262054e491984e0cbda"],["/tags/蓬莱伝說/index.html","ca7db4b8d0be4af14702bb57d203cdab"],["/tags/软件/index.html","5f85d0738642eae983cce83ab05b60ce"],["/tags/闲得慌/index.html","526be13bc4f664d71a7cb5a13760dcea"],["/tags/闲聊/index.html","81f6b482068918d048896c24391ca2a5"],["/tags/闲聊/page/2/index.html","cc456f7f82166b3d71cdea6c6a5772cf"],["/tags/闲聊/page/3/index.html","fd8c0156a982d831cf43bcc495c0ac49"],["/tags/静态网站托管/index.html","e708b8e8920867500591c39ea0e7d526"],["/tags/音乐/index.html","3bf2264ee94f61d813fe40c1798930f6"],["/tos/index.html","dd0be3a7fbaa0ae1ad2c04351b4bcbba"],["/y-late-in-autumn.html","68f8126b5ed17943dc6ad27760dbf138"]];
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




