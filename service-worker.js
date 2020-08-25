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

var precacheConfig = [["/100.html","5690d52de8dfef7bc81ef3a5f806a6a0"],["/1000.html","c78b35248d37ca0446159f349ad83d56"],["/1001.html","70f3a68803e8242a6110a544cc26c8a2"],["/1002.html","b0a26893448e281f15547bf417dd3ccc"],["/1003.html","601b426a07fa9051202915aa409f38eb"],["/1004.html","92302d2de74d7a73fb4a0a12240758e3"],["/1005.html","a082d480c71141b775ce34eaa0c1c914"],["/101.html","6d10bf7636d8a4f2957eae61a27f1cf5"],["/11.html","9bab2d9dcf5a2b7f8399ad1bd0124356"],["/110.html","4d846f7b079115f76c4a3db608327be1"],["/128.html","f011482363ebec2615b44508ad0568a5"],["/129.html","c2c2b997f6b3b90818e6f5272055609b"],["/16.html","a789e261f7e13c01961006ebf54dbc1c"],["/163.html","fade7414731e930e0922f08da094247b"],["/168.html","75e793b6759f896c4544accce3a10472"],["/176.html","93554f1e6c80006f5c68340017294d08"],["/182.html","8a2043da30e088c5b2c95b9249d1c0e1"],["/189.html","5347bc64c65b60e5d78efe5b8193e406"],["/190.html","6debc2932f89e1f9284f1d6d3b8f3780"],["/192.html","ef09f4c5069f095ec2d0ea44a643fd47"],["/197.html","17a971c1f17c6465d8e2e8ba11ece577"],["/198.html","9ee2cd34c54fa67b7442356bbe1fea3b"],["/199.html","9de981e5d24897aae4f016d64341e099"],["/203.html","edd3df7165d20aec3023d996ac67c797"],["/214.html","358f1a9311d30be7e614f22cadc5687a"],["/215.html","b769bdf8e7116f6d5551bf7eab8704cd"],["/216.html","e07cd14097d16a409abb18d5ef279503"],["/224.html","8628e20c8d2de418d5ad91a3dbe394c5"],["/235.html","d8381a02f4ebb78f401056d1e5f77810"],["/29.html","da6112d7deed3038877bd07ef9947fdb"],["/404.html","049b819d8912b7ca0f56d262b19f17b9"],["/41.html","a781c8d1dee3088a99df9f9d4df63a77"],["/42.html","ce7a99ec9ee114f983339b4a5f84b6be"],["/45.html","c2416cd17428fa21dd3fbf69889beb53"],["/48.html","a97ecef23367f2b2313a500c382bec04"],["/53.html","72f928faa3352919c71d67147d76fe29"],["/58.html","cd89344f00513f5f58d384c14334d690"],["/61.html","643f89bb21c59bf310a8ab3c8e4df9b9"],["/63.html","39c7a6dc85b5a943833d8a11b9733270"],["/64.html","54ecb667e4639c3fe9286169cdee57b3"],["/80.html","19fe9aca6c7314bf1c29c957ad772670"],["/92.html","8b371ad1d29dd3fa3db7553d6130e7d6"],["/94.html","e5a6ea3fc8416bebf31d2adf62aa90f2"],["/95.html","452ba8adf66e58d2ab24d4df7705351c"],["/97.html","4628cbc41dfdb11174de1179f94f31ee"],["/another/提问的智慧.html","41b9d2fce2011df232f665ae93b3b3c4"],["/api.html","354284759a2cc218357a54b366e425c1"],["/archives/2020/03/index.html","c16a0919155906b744884d83ae40e13c"],["/archives/2020/04/index.html","77316b8ea32c486f6e82a6732d8152cd"],["/archives/2020/04/page/2/index.html","6197ba268cc889cf2c1688fa9777d948"],["/archives/2020/05/index.html","8f1d2db0f576e089ea768161d59e7258"],["/archives/2020/07/index.html","056671f4276584c4f9dc44856e96aaac"],["/archives/2020/07/page/2/index.html","f90b3afba6e70a69fbce189327f69cd8"],["/archives/2020/08/index.html","e9337a7ea437d5c09960faec120a98b7"],["/archives/2020/08/page/2/index.html","bf1c7c116ad3cdda845cd8f9d0fc6763"],["/archives/2020/index.html","b807e03a322d21146c3f38a3fe6ea65b"],["/archives/2020/page/2/index.html","db6172c69e204077df991df59b92eea8"],["/archives/2020/page/3/index.html","0ae1921d11cbfdc99ec27fbcf020831d"],["/archives/2020/page/4/index.html","216d1177b4ad508a5fe08e5d1216ef3b"],["/archives/2020/page/5/index.html","884ec99149825f53958ca5acccc9bb0a"],["/archives/index.html","26dd1ebee031f6ddf0138d1d3a1dc642"],["/archives/page/2/index.html","75dd8f12831093733553b57062ed7a5c"],["/archives/page/3/index.html","55676e9044c8a1ba4fbdba44db71c763"],["/archives/page/4/index.html","88f89750c2eec5697ede9a7761eb96f8"],["/archives/page/5/index.html","0a7b26895b65efa9293ad9be9f4d0d5c"],["/b-dual-existence.html","cb1370b74347c9708de3937a04a9b569"],["/categories/Docs-Live2D-实用/index.html","266b9f893ceb9b116df9aa98e5bd92c2"],["/categories/Minecraft/index.html","b7ce4a7b7a274dd6c6a2cfb06a829a9f"],["/categories/Minecraft/插件/index.html","655239433474fa3af140b892d608e5c2"],["/categories/PhotoShop/index.html","30d99367f7946f5e8a5448e9c2cf51f5"],["/categories/index.html","f29a8bf2dc3228ec5ff983df2d7c0099"],["/categories/关于/index.html","685cb825ab8ab92bd148bceb9a09ce36"],["/categories/实用/index.html","517f6b96d81db719864783b0e23c7192"],["/categories/实用/page/2/index.html","fa50af0d9519ed9354072c9ad979922f"],["/categories/技术/index.html","af2d2212611e1755542cb8a592d93a2f"],["/categories/教程/index.html","44fea7cb40883bbaf6eedad54f4d2627"],["/categories/闲聊/index.html","b53749bc0ee06cd68e9f948a960c8a00"],["/categories/闲聊/page/2/index.html","57ce1844896fcd3193f47f82beed3171"],["/categories/闲聊/page/3/index.html","360bfc5688cd52ee58a43ed5b8780357"],["/categories/闲聊/page/4/index.html","2e89df0a480a8956560e00411ee3e15b"],["/categories/音乐/index.html","105a343cc23a71d2b310e0d5ff786168"],["/css/index.css","7e3c759ecab1625417faa52a97d30d7b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/waifu.css","e71d9ab3216c5dbfbcfc823e2d074dd4"],["/diary-20-08-14.html","6f406c9f35ee7c23ed2f83cf2933bf74"],["/diary-20-08-16.html","162d269a48d392cdfe44b69bac3bd6f9"],["/diary.html","a647c6974180e0d79cce7a07c0e9c152"],["/doc-live2d.html","855d101774f4f55fc162c99904da9b78"],["/frp/index.html","bc51c923ba27bdb2e5ef593c47a6d984"],["/githubchart.html","8ada45ef6606c9915bf6ff13b91cdc35"],["/horainingyo.html","38d434a108f6c05113417a044f6bbb01"],["/images/pwaicons/logo_16.png","94e5591015c3cb6e72360ed1f7b1a9fc"],["/images/pwaicons/logo_165.png","2e5d365f96deabbe0aed14af108ad69e"],["/images/pwaicons/logo_32.png","c8e36df84d26a193900bfccd8fbd637e"],["/images/pwaicons/logo_512.png","1dd00fd74bacf09f68e19719ef0574b2"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/comment.png","3b167d941508abf1017f854b28cd5151"],["/img/comment_bg.png","488773ac22a668a24cc60ff548fc3e3f"],["/img/favicon.png","7be3a186cbb83c3cb3bfd145c59dfc83"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","0b114be4a81c8952592c6abb4afbf5a4"],["/js/autoload.js","d95cc1096a472a68270af413be3c516e"],["/js/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","0176913a28754a766910352489a24a69"],["/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["/js/waifu-tips.js","554701a3d2fdad5f465b03d1c307e4e2"],["/link/index.html","cd8709507fe3beaf5aef657e37fe5910"],["/live2d.html","0be600408235ae82301cf22fea008b52"],["/live2d_widget.html","96b4dc29d73990c0d2092d6279b4cdcf"],["/music/NeteaseMusic/antd.min.css","4f2d3b71c9e6300d506e505a6b26796f"],["/music/NeteaseMusic/antd.min.js","7a6296e75996341045b1d0b4b0456d66"],["/music/NeteaseMusic/axios.min.js","aec752b41708ddd1d4703fb7f261c6d8"],["/music/NeteaseMusic/index.html","0cac9d0051f365e8a0df5449e7e0bc65"],["/music/NeteaseMusic/moment.js","0941fc7ec3988352c959e5b3da86f666"],["/music/NeteaseMusic/vue.min.js","d85af260fc0f73ed755e7b0ba8229e44"],["/music/index.html","6a57c1741fb87e3b96a5bdd1039cb8eb"],["/music/my.html","46ff14634ca6d367ae074063b3fda3c3"],["/myself.html","ca6df2f1aabce4cfbcfcf7f0f69d97fe"],["/only-my-railgun.html","00219f91a904e1c9c7ec0fb6cea7b6ef"],["/page/2/index.html","e24b4a9b07e269d7d603abf4c4411a7d"],["/page/3/index.html","b013a38f9442b41dc43b604946d61038"],["/page/4/index.html","0c4a462f47edeb5a519d1ba9b05fe7a2"],["/page/5/index.html","e76dbb2e53fdd6f9255bc3183c9e48ec"],["/privacy/index.html","abf7e53795d0aa178bbbe42dbd19878a"],["/tags/301跳转/index.html","91ea714fba5928fd3214b939e4161e16"],["/tags/API/index.html","9c571e66421ace2eaad3f6f9c5b4c9c7"],["/tags/ARK-Server/index.html","66b71a08e346820cdc257165349399ff"],["/tags/Centos/index.html","f88019a9d04d9ce9b6969ba27581d654"],["/tags/CloudBase云开发/index.html","0f5a294c2c793347cc2a4bfd224e27d5"],["/tags/Docs/index.html","c720c6a669f612f9a984967afa880137"],["/tags/Frp/index.html","ce1c91c8ea7203fdb2bf6618c5a7f282"],["/tags/Hexo/index.html","25a974e9c644b75b0e9a12732a6f01a5"],["/tags/Linux/index.html","d3a62d5bcfa432a27594cd407527aa6a"],["/tags/Live2D/index.html","0dc8a790da19db931df37eadca48f4ee"],["/tags/Minecraft/index.html","3168a2a565b49785eae6c09e375677c8"],["/tags/PhpMyAdmin/index.html","3e3ca14a54d9614d9d31144abfd45cd3"],["/tags/PicGo/index.html","a5d634ca3cfec8046c3ce1a6ed9d63ed"],["/tags/Windows/index.html","809813241a7a2b990c9ca62084ff292e"],["/tags/Wordpress/index.html","baf3ef2ed4123d9fbd23ad632a195ea7"],["/tags/index.html","5bd2b8911c8277217c97ba206c2daa06"],["/tags/late-in-autumn/index.html","e61e0544c63db3d6a8642077155a92bd"],["/tags/とある科学の超電磁炮/index.html","3c87ea2c94660f6e5201ca4973d1fe0b"],["/tags/书法/index.html","98f7b57eda9480e704cce016996efbf8"],["/tags/介绍/index.html","19957038585cd80cd4a971c3e09aed6c"],["/tags/公主焊接/index.html","1033b6306cacc420f507952db51c2a6a"],["/tags/内网映射/index.html","59c35c58672c6520e00d2da4874240c3"],["/tags/博客/index.html","abbf489593e314889b6f15a77fbf6fab"],["/tags/博客更新/index.html","12e9114ac57c7e0b7a7eeb3b3a30b1fc"],["/tags/图床/index.html","790c876b9f0c084f1054173b707d2ccb"],["/tags/域名/index.html","f45435da7fae713578ffaa0d5abf0847"],["/tags/宝塔/index.html","54ad7a0e8411b2f38afbe8e1bf87ab99"],["/tags/实用/index.html","5e89dcb9701d4a63d8d129d8e9567653"],["/tags/实用/page/2/index.html","414cf1a999967d597b67b9441fd0ea72"],["/tags/我的世界/index.html","2fcc0b0394d2bad2d7ff0c0f840ef2b2"],["/tags/技术/index.html","761ccdbe835f03678f50aac083084ee3"],["/tags/插件/index.html","36f11d426da6d897fe3ef22811d51d23"],["/tags/搭建/index.html","af7da8e1fb266bd8dbc3da9e3daf959e"],["/tags/教程/index.html","a323d3d467f41584181c8970d49f8b61"],["/tags/新标日/index.html","af8a7a3462e6f53a917a9c989693e110"],["/tags/方舟/index.html","bd509bb4e4d9babf8865e1a1d1d1aea4"],["/tags/日语/index.html","d7defb799d66af2e1a19ee3f1b47cf11"],["/tags/暑假/index.html","20389c2bbdaed5288f2f4bf410ecda6e"],["/tags/更新/index.html","1ebfdf856431826b5b33ade6b41eaeb7"],["/tags/服务器/index.html","8d15797051a1fb25544bf0e43bc7ac09"],["/tags/歌曲/index.html","388d3bb133babe4a894efdce0e3434c5"],["/tags/漏洞/index.html","13ea9c32476e52e47f837badb0e3c79e"],["/tags/猫咖/index.html","5b647e4609dfb83f280123fe7a94e3f6"],["/tags/生存进化/index.html","f9bca7152012f51af55abc8164f78d49"],["/tags/盗号未遂/index.html","98e85f92af109781cccff12e91e4d98e"],["/tags/看板娘/index.html","5a98e0e868b30724c1743eedf38f92f6"],["/tags/硬笔/index.html","ee7dfe84384800a712e6ecf5597ff663"],["/tags/练字/index.html","5758b384313a763c3ae8cc2166b9f791"],["/tags/网站/index.html","71f6d3a74543095f04ff616acb05086a"],["/tags/腾讯云/index.html","4e520dcc19f50fc800af6a288da1998e"],["/tags/自我介绍/index.html","517d7a8e22819678ffa06fa3b055e210"],["/tags/萌国ICP备案/index.html","f7276bc7d8125ee2cf71a5ca8691f9e6"],["/tags/蓬莱伝說/index.html","dd19f71e68f173f3be9770cb155afd8e"],["/tags/软件/index.html","28f801dd7b6151c2f0a6d2d53137d392"],["/tags/闲得慌/index.html","05fabfcbe8d0d537b59649edbc8827c6"],["/tags/闲聊/index.html","73db44da9b3e66bc7a95c7f905c14cec"],["/tags/闲聊/page/2/index.html","d7b348ecee8500815dc3c74e6e3c6346"],["/tags/闲聊/page/3/index.html","542de74caeb21d362b15860912c507e2"],["/tags/静态网站托管/index.html","20bd3cb9fea80fa621f8a6b7d5659102"],["/tags/音乐/index.html","8e557aa1e0512a161fe9d7af0443be6a"],["/tos/index.html","1eb63991efaf54798e94c9d41d6777dd"],["/y-late-in-autumn.html","043a6283b09d8df7ce098343d790ce7c"]];
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




