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

var precacheConfig = [["/100.html","e2a526d76a5d077c21a5a388e0efd99d"],["/1000.html","0b14be8963b24f8194a909c4d0e83841"],["/1001.html","699bfae5fb6eedd4007b0e0b07e9dcf4"],["/1002.html","c2b7b95d4cf245c1c713464397050e7d"],["/1003.html","4bcaccf870da9fa28fc89130d305fb3a"],["/1004.html","6d6ce53da4c33b13e9670e5c06916b18"],["/1005.html","1e6aee68702a104e40878687d5700bb3"],["/101.html","26a61c8be765ae53c5e60bdbfaf7ec6d"],["/11.html","0b95f3c73c2eb11b58ff3af1fda03ab9"],["/110.html","077bc82aa49f6522c87202ef4433a63d"],["/128.html","fdd530625edbe94c31427fbac70c0363"],["/129.html","1c36f8c600aa7791304348475e73e789"],["/16.html","b8ae729e785e222cda5578128ecf236e"],["/163.html","9199517444c43adb473513ce3c3a442e"],["/168.html","355bd34ab55379a8471c6eb900060bd8"],["/176.html","be25fc4518ae4f07b2520fdf868a0b67"],["/182.html","e48594533983c95cd8cd5b63a21666de"],["/189.html","c15cb53b9289d9980a4eb24c9b00dda7"],["/190.html","495cefaa7923a4a59c45ea844120c611"],["/192.html","00000f4fbe821816ec8896a7ddb4ff97"],["/197.html","a8e85c8a4f513fc53a5a6ab4e67be906"],["/198.html","3103ee706b920b9b0b2a431836544cbc"],["/199.html","004f74ee260c07157d737f7e790f1104"],["/203.html","9ec55ee18b84b4ab7aa301c776b1ca1b"],["/214.html","ae93a596ea35c3316d8ec666040b8170"],["/215.html","3cb7318e83b66014840c679ecb9d07b1"],["/216.html","ce3d2f85dbec0e03b2b4c7c755bbe78e"],["/224.html","a81a1dc56f8d2c464c1cda4ae109b4fe"],["/235.html","7645a8c4224f1a03ce65cbf669be92a7"],["/29.html","10d40e3bbb934d0b4d4b0555e88ca37a"],["/404.html","fe895f2b5ee326ded79ef25c22e2b667"],["/41.html","ae4ee5b2e238df500f80a61b4145e7a7"],["/42.html","244cb6582a436e44389a5cd3958914ec"],["/45.html","33683e0c26b108c7858f1b2cbe6c60d4"],["/48.html","a45f571b88b235ee9a9e0d542d733309"],["/53.html","4a1cf4b264291700bea9f9cb452c232b"],["/58.html","37cb575a5e879782d25719af523e6274"],["/61.html","a9816abb5bedba9638c8c25f5d7c3789"],["/63.html","d834264e86383bcf2304e61bc37c26dc"],["/64.html","cd0087e11b97687e92c0f483f042f8f6"],["/80.html","103fb6c42a1b17fe0d028e08eaaad6d6"],["/92.html","76372c285a1c1fb21301df7c2680e7e3"],["/94.html","ed8a204c6b1e0d6935026af161172bbf"],["/95.html","361938ba8a8d297d4ecc3116ddd30748"],["/97.html","a90bc10bb26b04f0f93dde37b447f8b8"],["/another/提问的智慧.html","c78e69b5c60a0e1ec99c895440c39ade"],["/api.html","c648ac1c8b2c2a378c19dc70f13b8c33"],["/archives/2020/03/index.html","f201bc8c6bcc79867d0d434f99f49ec5"],["/archives/2020/04/index.html","7a4be79726112feccb0d11ea501e3eb3"],["/archives/2020/04/page/2/index.html","40540adc9fe88281dcbaaa23afcb809e"],["/archives/2020/05/index.html","953c5efbd9b5d1e1f7bce9647ddb68ce"],["/archives/2020/07/index.html","f52a25cdcf4df3e68cd992f0982f6d50"],["/archives/2020/07/page/2/index.html","ddba9b58789b34ecdb2bfdf4573d2ce4"],["/archives/2020/08/index.html","5676a67a17ff0223b1869750132cea37"],["/archives/2020/08/page/2/index.html","97ba10f390be4d81064f566d7d8438df"],["/archives/2020/index.html","d1bc4f944a3a242f6a9fa79b6d7752e7"],["/archives/2020/page/2/index.html","ea71b10826d3f7751b4132ff502037bf"],["/archives/2020/page/3/index.html","a521c038ec9913f0e9d4a819dec49da3"],["/archives/2020/page/4/index.html","c4494b839e73f8b2fda1ef4dddeb3bee"],["/archives/2020/page/5/index.html","750344ab2fd506f3a4aa183d0a26d640"],["/archives/index.html","933b0206e3e45bb2d59a2c7dd36dbc23"],["/archives/page/2/index.html","708190df179a7fbadcec60e3d7c57eeb"],["/archives/page/3/index.html","3e5693d1f505a5eb8fb03b798e4b0765"],["/archives/page/4/index.html","0b1c8bf686d88cc71628f37e68addf39"],["/archives/page/5/index.html","cdd016ad407bde9ec32b9373ecd5674e"],["/atom.xml","0b5aa0602c05fd60bfcef80e13b957f9"],["/b-dual-existence.html","9f674178237868fac4ff8918617c6b2f"],["/baidusitemap.xml","bdb85ee9e379796240a34899809ee39a"],["/categories/Docs-Live2D-实用/index.html","39a06dc90fee4e8d1b3197342d73930c"],["/categories/Minecraft/index.html","a3f43ec90b5d4e2c3f5d870cb53de584"],["/categories/Minecraft/插件/index.html","db071c1b04e444a64fcbd8d699485de3"],["/categories/PhotoShop/index.html","1000c944de531fd3768a1b7e88eff610"],["/categories/index.html","457540174ec783af613fade0c6b28e70"],["/categories/关于/index.html","438a537f048c041a4cb919948b23a61e"],["/categories/实用/index.html","76c65995dd790b56c41b0388cd73252f"],["/categories/实用/page/2/index.html","8a30fd0724d6f741a0d196d808ac4cc9"],["/categories/技术/index.html","3f3f4b9bc41ecf54d0bc9075bc1d0fdf"],["/categories/教程/index.html","ea795f02354be21d0d1d923c810375bb"],["/categories/闲聊/index.html","67b750fe5da3605ffda2b96390965b9f"],["/categories/闲聊/page/2/index.html","ad1f9a7349b0cb2f196bb2f797327443"],["/categories/闲聊/page/3/index.html","098842125b044684db3f9640e81c6c78"],["/categories/闲聊/page/4/index.html","79fd1d0bc327d00378ff2ba8ecd10c0f"],["/categories/音乐/index.html","32a70f301f6bec5c26528d06a8b26d62"],["/css/index.css","7e3c759ecab1625417faa52a97d30d7b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/waifu.css","e71d9ab3216c5dbfbcfc823e2d074dd4"],["/diary-20-08-14.html","2fe26ee02acd4ebe9b95e4360b176ac3"],["/diary-20-08-16.html","4f6c2733d82f3f6825f464abe8f399a4"],["/diary.html","e59ab69a6948ca36e395935abe5fa86b"],["/doc-live2d.html","c0c417a98938ac7ad17391ccb9fb85bc"],["/frp/index.html","965043ac4578171dca258c4e58d8285a"],["/githubchart.html","d682d77df863da930519e0583a11c224"],["/horainingyo.html","98e3529e47b809da662a84ba5fb9fab7"],["/images/pwaicons/logo_144.png","a84a9fb13adc66c2e6282cb4ec503d41"],["/images/pwaicons/logo_16.png","e3d5a19ccbc85331eac60e8f5d48e121"],["/images/pwaicons/logo_32.png","c8e36df84d26a193900bfccd8fbd637e"],["/images/pwaicons/logo_36.png","055f23ea216c3bc6aafcbd9e40b2433e"],["/images/pwaicons/logo_48.png","ce4452002e81d01eae5ae7697547b5a1"],["/images/pwaicons/logo_512.png","1dd00fd74bacf09f68e19719ef0574b2"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/comment.png","3b167d941508abf1017f854b28cd5151"],["/img/comment_bg.png","488773ac22a668a24cc60ff548fc3e3f"],["/img/favicon.png","7be3a186cbb83c3cb3bfd145c59dfc83"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","bd65e0c36db5b85ff6f0c5690b26455b"],["/js/autoload.js","d95cc1096a472a68270af413be3c516e"],["/js/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","0176913a28754a766910352489a24a69"],["/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["/js/waifu-tips.js","554701a3d2fdad5f465b03d1c307e4e2"],["/js/waifu-tips.json","8dd6573863792f6f2c2e57057d21ef96"],["/link/index.html","ab5368a78c03c37612a92ce5678c8d31"],["/live2d.html","bdb7fc6438641595cc912e7a53635d26"],["/live2d_widget.html","69ce9d8896104723488fa2a41c89afc6"],["/manifest.json","e9c7b166063c3f524dc846ecc519ef44"],["/music/NeteaseMusic/antd.min.css","4f2d3b71c9e6300d506e505a6b26796f"],["/music/NeteaseMusic/antd.min.js","7a6296e75996341045b1d0b4b0456d66"],["/music/NeteaseMusic/axios.min.js","aec752b41708ddd1d4703fb7f261c6d8"],["/music/NeteaseMusic/index.html","7d8cc8c8f234b16983c26a193667aca7"],["/music/NeteaseMusic/moment.js","0941fc7ec3988352c959e5b3da86f666"],["/music/NeteaseMusic/vue.min.js","d85af260fc0f73ed755e7b0ba8229e44"],["/music/index.html","c7742c095504e533e1e7583f691e5996"],["/music/my.html","4ba4ccd3ee0dd22886726403839ab3db"],["/myself.html","6a84825a304f1bd4158be92603c24342"],["/only-my-railgun.html","2e722c7974b6e9d3669e698427abd5bb"],["/page/2/index.html","f6872226cd211a79bbd1e686d88ef2ec"],["/page/3/index.html","a9ec75e5bc5958124f440193fcc19b81"],["/page/4/index.html","80170a879f3dc0b58341f3ce0f8439a4"],["/page/5/index.html","f135aa0ab7568b9a983d8a2a81a779d1"],["/privacy/index.html","d56a7158bd410d768a3bf6dd787e2741"],["/sitemap.xml","9735813b40e6e909d370d00e32295b92"],["/tags/301跳转/index.html","b1bbb3ac2af4d257173054bb4a332677"],["/tags/API/index.html","463942706907c5289058af36101c4acb"],["/tags/ARK-Server/index.html","6dab8b1e5897cde0cf44fb951a5f9dce"],["/tags/Centos/index.html","45adcfb9c9c32b8445e8fc9033d0a8cd"],["/tags/CloudBase云开发/index.html","fe732f8d982b230fb3c170b8ba10abb0"],["/tags/Docs/index.html","5ef5b0d52dd1013207b50496f0cda19b"],["/tags/Frp/index.html","cd997fa4283556ac6e4ded379b278dbc"],["/tags/Hexo/index.html","8729982f14daf1da2bdb38b6e67158b9"],["/tags/Linux/index.html","6610240ebd71d05236a0c4d9024a56d3"],["/tags/Live2D/index.html","f33805ca74e68631ec493af85428ef21"],["/tags/Minecraft/index.html","9d7832bd8ae5d21ce5177f6a96f9c5aa"],["/tags/PhpMyAdmin/index.html","645ababc84586c5058ceafd7fe431fbc"],["/tags/PicGo/index.html","73771b7339deb68731ac2cfe1ea8782f"],["/tags/Windows/index.html","fb5c0a4af8fd9805a22b5bf23ff3f892"],["/tags/Wordpress/index.html","96bccdc04ace1fcec7eae8485b07a12e"],["/tags/index.html","61faa7d6e71f096fb0ae74ac2409074d"],["/tags/late-in-autumn/index.html","5e27647815278f6b75f072b9e93fa7d7"],["/tags/とある科学の超電磁炮/index.html","62208dd2a3e46fedd500b4df65395206"],["/tags/书法/index.html","11c03f851038b666edf9275623082311"],["/tags/介绍/index.html","c000434a0a857b9113e806a7fd805fae"],["/tags/公主焊接/index.html","da8d50fedd680da790796b737a363463"],["/tags/内网映射/index.html","5cf857ce9f4caa3a9d418150c9822e4d"],["/tags/博客/index.html","8a7ec34aa08424c801ec1897328c8c6a"],["/tags/博客更新/index.html","74b7e4a8e13b90533ab342ccfe2bb5af"],["/tags/图床/index.html","2aa556f22d5176bc77d956e2986489c9"],["/tags/域名/index.html","d6cbb67f320a0739c8b9f2e69de4a85c"],["/tags/宝塔/index.html","7c78de152242081ffd0d403e317fc9ac"],["/tags/实用/index.html","891e409f8f554ae1cfdece36df58f66a"],["/tags/实用/page/2/index.html","d1b3ef7313b29fdaeb1ecc2e882f6c5b"],["/tags/我的世界/index.html","6d7e2514167497b6f1d9f587e08687db"],["/tags/技术/index.html","6345cebc45ed489a46fda91b20c50420"],["/tags/插件/index.html","f825bda156bbb7e7ee8caef86eafa9f0"],["/tags/搭建/index.html","542b13ac14d0927ec6b6324a8d8e4bb7"],["/tags/教程/index.html","6019ee80d1450db8ede9113aeeb6359d"],["/tags/新标日/index.html","ddf2f5782da838d9474d4f85a77aeafd"],["/tags/方舟/index.html","ee0572048235eb0fb913bd93aca75f84"],["/tags/日语/index.html","2b69bf9a3f3e165a1ed87925d7b755eb"],["/tags/暑假/index.html","885fdd4190c2ddf6c0ae8130c718d71b"],["/tags/更新/index.html","683595f3e9cb602dd953566c52b46405"],["/tags/服务器/index.html","80c870f6d95ea133a0f2e479c8063b07"],["/tags/歌曲/index.html","e601a22253db535ccaca77fa68cea9ba"],["/tags/漏洞/index.html","d0dfd616a50d8adffdd1553f25158a4a"],["/tags/猫咖/index.html","adef290b5755518ce15973338ef37d6d"],["/tags/生存进化/index.html","a8893acd547205a1fe9dd715bd91a4bb"],["/tags/盗号未遂/index.html","5836633d64ff80eb0a0dc79a1cd83667"],["/tags/看板娘/index.html","10362abdde735d53169893e35bf0148a"],["/tags/硬笔/index.html","630afbdaa5d97b1381038d5cb02004ff"],["/tags/练字/index.html","4b705b2ca419ef072a96309706d6ad0a"],["/tags/网站/index.html","ce0f5445dbca83a950aa65546af554c0"],["/tags/腾讯云/index.html","9582f3ba50009fb70873c52461747643"],["/tags/自我介绍/index.html","932d18314944c91df1095953a5efdbbc"],["/tags/萌国ICP备案/index.html","6249b411a8d680b3affd00d4948f0409"],["/tags/蓬莱伝說/index.html","1999ec77664c54e870db16b68edf697f"],["/tags/软件/index.html","3a2e6cb37e7bf2e6c1bf0e3471b45820"],["/tags/闲得慌/index.html","18f7bf30b80b7e64e0d617f0c426cef4"],["/tags/闲聊/index.html","82582a8ae299cd58c229ba3c94942673"],["/tags/闲聊/page/2/index.html","e224c98030ace9880d8956f329ec5b6e"],["/tags/闲聊/page/3/index.html","3438ef8f8d94417e97f2d91bbb968a97"],["/tags/静态网站托管/index.html","ecf342910262900ddf99e79b3ba20baa"],["/tags/音乐/index.html","91fef26a262c4076820388732359ff61"],["/tos/index.html","5d94922ea75fe9bca77a20ac112a8594"],["/y-late-in-autumn.html","47ab266a0a4023ed1aac5cc4dbf1de8b"]];
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

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"www.xiaolfeng.cn"});




