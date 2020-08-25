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

var precacheConfig = [["/100.html","69e6da234ac9eba2b2f2d4f055804690"],["/1000.html","62d9d7823e0111081b35e9c974499253"],["/1001.html","ae67b97ebb9246fc7bd2341b945f3df8"],["/1002.html","cedb0e5c4c40afe2a6cb23e2c14fb834"],["/1003.html","b86b22540a4ea17fde64c6c1c179c219"],["/1004.html","cdc0e577f6477bb86d570dd8cb320ba4"],["/1005.html","ea170358505bd043b74eadfa5aa23694"],["/101.html","07f55ecf43638eae47b2e30408dadc05"],["/11.html","ed444263340e4beab83f0eb2af5bdf76"],["/110.html","7f8612d740e6fa0539d2da4917d8f2a9"],["/128.html","830e0f61337e6cebaf5ac504a1028649"],["/129.html","a7fc8148f42ae81e72a9bc51dee2776d"],["/16.html","202de53e82d50664482116582d2c8931"],["/163.html","483fcf733fba3fcc9a1c38f19e6abe52"],["/168.html","d04d959d14836708b9f0d4e265701b56"],["/176.html","8e05b8a71e6ff6ecebf3852ec3253dd1"],["/182.html","17cf94b8d1585c774879a2239309c6f9"],["/189.html","ffc4baeafe5352d70b1b044783a09111"],["/190.html","2339d06d6bbb0f120031949816a8fde6"],["/192.html","ff4941ef556a215c17fca6674285c20e"],["/197.html","d01050f8be8019b8ed4b9ca2600a837a"],["/198.html","faf0d410633f91da9182a436333d1bd8"],["/199.html","11daae5908141b8b3a0b22f51a8b44aa"],["/203.html","4f9529982e5cdc0b1b716e89bbce8563"],["/214.html","b1b334967493a0519da8540b305632fb"],["/215.html","c401b242e85cbd84c501e14b79d9a4c2"],["/216.html","db25a2ee9d7aed00ad0886756deee685"],["/224.html","10f1ad53a320f33f79203beea91422e1"],["/235.html","da8c4c7dfa02343333878f8b01b5e28b"],["/29.html","2ac52d332e75f75021c4402fb42f1189"],["/404.html","220e4718e99175c1fa5f6be1a7bbf0fb"],["/41.html","89ae6ce50f1296ec45816c81e982767c"],["/42.html","b21390af4a2050388268140a093b05c7"],["/45.html","5fef43e8981235b6dc164d765195e8b6"],["/48.html","a2c2bdc2ade40938ce59c7dcaf2a8f15"],["/53.html","9195c1d6c6d0839d8ae71b77892b83e8"],["/58.html","da51620909d0b24ea38a059e87bee140"],["/61.html","3c515e62b9b5b4affb254f65bd666261"],["/63.html","2769560168c835588f58f5412e125836"],["/64.html","661fb84b8adf487fa18d4da52748660f"],["/80.html","398cb5e3fc862de3beebf204d24ce5ba"],["/92.html","0b8a661d89a22a9d599749d256522a13"],["/94.html","86f8855731378fd56702e783740e75c5"],["/95.html","0c5947c47f38fa064b3706855c3bf626"],["/97.html","05ba1a5f2c14d250392784a7998b04fe"],["/another/提问的智慧.html","84dc3843157926a2e66a2a353cbac83e"],["/api.html","faf32a97a9b9e107bd581d7f11cc8d40"],["/archives/2020/03/index.html","285ccb75a974524698d9c2ac2912601e"],["/archives/2020/04/index.html","beb3246b145974d43e2440010af5b349"],["/archives/2020/04/page/2/index.html","8b16250db71abb0f7d13fbf45198d3f0"],["/archives/2020/05/index.html","639b20e0d8f5f8a4ec9ead601becad8d"],["/archives/2020/07/index.html","7eba6cdf97f5ab79a5d9c06f5e12a4b5"],["/archives/2020/07/page/2/index.html","3e09385fb739de408dd6c87248a25275"],["/archives/2020/08/index.html","4b63ff62533867998dcf13923fcd4d5f"],["/archives/2020/08/page/2/index.html","e6671325a52d0e5d57629867acdd0834"],["/archives/2020/index.html","3718f14bc3d8d95c51fc558cb39b04b4"],["/archives/2020/page/2/index.html","73f0edd65596cf3ac68472aed9cf4870"],["/archives/2020/page/3/index.html","5e744df8d8ed29f2648f741eea8567e5"],["/archives/2020/page/4/index.html","9277ead1c70946a2562a0622f8cc2c00"],["/archives/2020/page/5/index.html","804d03b863e86eb563634b30ad6dd396"],["/archives/index.html","9b9a85fcc869c9763d036b21122a65d4"],["/archives/page/2/index.html","69c934a62e245b3fac95f31809d753a1"],["/archives/page/3/index.html","e109caaf6794055e2b32657b25985b6a"],["/archives/page/4/index.html","4c7ba1b035ca715e253c6f1b087b6af2"],["/archives/page/5/index.html","fe4ac9f18fd9e1fa5f520d50e123dcc4"],["/atom.xml","9b0a3e9aaf84f87be935ea8e680eea89"],["/b-dual-existence.html","02f4aa91ff8fa9694ac9d8e0ae72d84e"],["/baidusitemap.xml","3958f84c384c7b1824aed5e576b985bf"],["/categories/Docs-Live2D-实用/index.html","eef66167ffad4a69694b4b7c175f405d"],["/categories/Minecraft/index.html","84818827389a3fb8967bef8d83e9f0de"],["/categories/Minecraft/插件/index.html","cbaf88e563dd3b2c051b888f1c851cb6"],["/categories/PhotoShop/index.html","538c1853a5cbb0b373c8cf7f4aa8a88f"],["/categories/index.html","197b496b2ba8978bd21098e800d4a919"],["/categories/关于/index.html","16a060e6f2d253b87078d3f6f699d820"],["/categories/实用/index.html","55cd3ca272809fe2b540ba6e178440e8"],["/categories/实用/page/2/index.html","9547051fd765784ec632309c21afc95e"],["/categories/技术/index.html","a9061561e7cc35d71b16d2d148846e6d"],["/categories/教程/index.html","eef7db0dc6022369edf072d8219cf848"],["/categories/闲聊/index.html","45b9e0949a4067bb00356bfcdae4b91b"],["/categories/闲聊/page/2/index.html","875c50dc6f40f71e0ad52f126194d484"],["/categories/闲聊/page/3/index.html","084068a69ebcd6092b105360902e2161"],["/categories/闲聊/page/4/index.html","2a9ed31943f8f389375e4adc3b68a311"],["/categories/音乐/index.html","aff54489cde5e47b7c9575027ae3a2e1"],["/css/index.css","7e3c759ecab1625417faa52a97d30d7b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/waifu.css","e71d9ab3216c5dbfbcfc823e2d074dd4"],["/diary-20-08-14.html","25e9b370553c7a69ff3a72a578b418ed"],["/diary-20-08-16.html","0013ef85390f6aaedda25d4b7b08ceb3"],["/diary.html","90a73c17b31076be8199d1c1fdc29cb5"],["/doc-live2d.html","a86492191bd8e435e5fb5be34401f417"],["/frp/index.html","d5fa757616f4ff74dc0812807c6af22a"],["/githubchart.html","20118ec820389a36a3d0b26ed27a072c"],["/horainingyo.html","10709937f9e50e1cfd0d5a9ee65540ad"],["/images/pwaicons/logo_144.png","a84a9fb13adc66c2e6282cb4ec503d41"],["/images/pwaicons/logo_16.png","e3d5a19ccbc85331eac60e8f5d48e121"],["/images/pwaicons/logo_32.png","c8e36df84d26a193900bfccd8fbd637e"],["/images/pwaicons/logo_36.png","055f23ea216c3bc6aafcbd9e40b2433e"],["/images/pwaicons/logo_48.png","ce4452002e81d01eae5ae7697547b5a1"],["/images/pwaicons/logo_512.png","1dd00fd74bacf09f68e19719ef0574b2"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/comment.png","3b167d941508abf1017f854b28cd5151"],["/img/comment_bg.png","488773ac22a668a24cc60ff548fc3e3f"],["/img/favicon.png","7be3a186cbb83c3cb3bfd145c59dfc83"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","cf39ebbbc07d21fa8e2303a9885c13f7"],["/js/autoload.js","d95cc1096a472a68270af413be3c516e"],["/js/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","0176913a28754a766910352489a24a69"],["/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["/js/waifu-tips.js","554701a3d2fdad5f465b03d1c307e4e2"],["/js/waifu-tips.json","8dd6573863792f6f2c2e57057d21ef96"],["/link/index.html","cb16d2dbeea56e0943059e3166e85e64"],["/live2d.html","e237910fcc6d5a16878fe362d92117be"],["/live2d_widget.html","462a99838d823fc3a900db89d46793cc"],["/manifest.json","cd1867c510461dfa2d8684ca64c3a056"],["/music/NeteaseMusic/antd.min.css","4f2d3b71c9e6300d506e505a6b26796f"],["/music/NeteaseMusic/antd.min.js","7a6296e75996341045b1d0b4b0456d66"],["/music/NeteaseMusic/axios.min.js","aec752b41708ddd1d4703fb7f261c6d8"],["/music/NeteaseMusic/index.html","22ba0ae1ad80d9e5cfd4870734f4db7a"],["/music/NeteaseMusic/moment.js","0941fc7ec3988352c959e5b3da86f666"],["/music/NeteaseMusic/vue.min.js","d85af260fc0f73ed755e7b0ba8229e44"],["/music/index.html","47db15b3b81d50e606aa46d9e5f0112f"],["/music/my.html","499b96340b5f53284e109284a2e4cde5"],["/myself.html","0058bc8416c3ab99a36c3b86b771c30f"],["/only-my-railgun.html","687a47491a2818321572fd04ee64fcdf"],["/page/2/index.html","2caf422fb0dce3dcb2bf8d375da05ff5"],["/page/3/index.html","1965cb105a918a500c905060b8bb5531"],["/page/4/index.html","fadec197633af9f654b07f00d185856b"],["/page/5/index.html","911832a9f5ae1aee507ecd1d640857bf"],["/privacy/index.html","e89cf21edc19c227ea294067aff82733"],["/sitemap.xml","0136bac9f03c5593dc7b7e831bc078dc"],["/tags/301跳转/index.html","e5dab90e172eb159b0f092aa926a8556"],["/tags/API/index.html","b5800081f56704612b10ebabbe4d1865"],["/tags/ARK-Server/index.html","b32c13ceebd9c44a884544aba5d90c44"],["/tags/Centos/index.html","7d0612a8d2502de9d12de81b76fb94db"],["/tags/CloudBase云开发/index.html","017fbabfaf575d392613160bc4fc9f81"],["/tags/Docs/index.html","c42eb7efe7647ade6797b0328b165d52"],["/tags/Frp/index.html","197755b6a808b2a0e6638cf1975e364d"],["/tags/Hexo/index.html","44134eeed652f7e9ea51848bcc100e28"],["/tags/Linux/index.html","90a35212392b80ca77f224051b464314"],["/tags/Live2D/index.html","7236afe760ae3a3100b4dc150334ed91"],["/tags/Minecraft/index.html","5cf61d5709da5a562d9da666d9b83c12"],["/tags/PhpMyAdmin/index.html","d2111133bc914d1e6eca16ed0141320c"],["/tags/PicGo/index.html","92d1159f5bf3051bc9a14755b666b69c"],["/tags/Windows/index.html","8f5887cb3ff0d1e3d68f5d6e3495face"],["/tags/Wordpress/index.html","1d5ab9139adddf9a14793d1a04600d4c"],["/tags/index.html","dd7aa6dc57f4ff5d3c33a0d125c09863"],["/tags/late-in-autumn/index.html","80e3241f85c94bdb33f9ae92d1d5ddef"],["/tags/とある科学の超電磁炮/index.html","284e5d18c0d96fe03d04e3cdd21a5cbd"],["/tags/书法/index.html","7e0f01f7702ab8256cc5b7cef2dc26a2"],["/tags/介绍/index.html","b2456563977a836e8461919000171190"],["/tags/公主焊接/index.html","54ca1d0db245ed104972d68afef30381"],["/tags/内网映射/index.html","7b8d72aa8037eebe9f8aebb59e760a78"],["/tags/博客/index.html","18f2d86c36d8a694ffad55f22a5f67ff"],["/tags/博客更新/index.html","644a93c4e74a79fc8fea48fd23d8defe"],["/tags/图床/index.html","8a648359ac8e24731bb1954712dd72dd"],["/tags/域名/index.html","4c8503891fa9a25c2c50e20cb467a7cd"],["/tags/宝塔/index.html","2585fc67671d9e940477b96ae6286a63"],["/tags/实用/index.html","25104387b65047146cf9a95c01f11bf2"],["/tags/实用/page/2/index.html","e54002fea80dd58af3ac6d4e96378925"],["/tags/我的世界/index.html","76dae9214a90bbb04a9c0bc2c6cef731"],["/tags/技术/index.html","9d075af99e1ba0801067308c7906acc7"],["/tags/插件/index.html","1fdc36fa2ac4548d7f0c4fc5329bfdd9"],["/tags/搭建/index.html","c7d763febd7b74f658db6af0ee38cbd4"],["/tags/教程/index.html","ddcd41cd71753dff0119cfed065c039a"],["/tags/新标日/index.html","eb4711a267ef9cde3105e92664f50174"],["/tags/方舟/index.html","8a32618fc2c8f3a0e991f038cad29991"],["/tags/日语/index.html","fbcf95f58714c318febf6c005f9566fe"],["/tags/暑假/index.html","ad7d5008b5a2d29050eb8cbd72c8401e"],["/tags/更新/index.html","c582e61b7a242fbeec94c7bb8225eacc"],["/tags/服务器/index.html","2ea4f35752bbf8c3bea934da2de9a352"],["/tags/歌曲/index.html","197605080c2b8fbcf1f8f091e6eaa1af"],["/tags/漏洞/index.html","94dccd990d7ac13fa15c360939a430ec"],["/tags/猫咖/index.html","7d1c3b9adc05708f2a5f9f54023533a3"],["/tags/生存进化/index.html","f4849c6b9bdf1c13a31615349218c420"],["/tags/盗号未遂/index.html","ba01fdaf351ed494ec9d6c714bb2c784"],["/tags/看板娘/index.html","ea4420c59149030045dfb8483e34342e"],["/tags/硬笔/index.html","13df2da155793917137b04727b29f0bf"],["/tags/练字/index.html","0ea68b2c2b7794bacf94eeb273292537"],["/tags/网站/index.html","9547e21b556c3a7505a644a8233b9f78"],["/tags/腾讯云/index.html","073e1c991ff1f58005be6f97bc4fd74b"],["/tags/自我介绍/index.html","9be6deefc46dc2e6a805fc57e9ec2364"],["/tags/萌国ICP备案/index.html","726c2857f5b8f4c2f3c01167d7e3a18c"],["/tags/蓬莱伝說/index.html","b79feeecf9a7994b9fe5092eff22285a"],["/tags/软件/index.html","aafd1f4eef71c06f6fac959dd55b4b89"],["/tags/闲得慌/index.html","738f23c126d9b429832027e4467bf5fd"],["/tags/闲聊/index.html","ba34c35130915df29b39335d21fad867"],["/tags/闲聊/page/2/index.html","d1c9865dd7ac3e1aebe36f37c11ea09c"],["/tags/闲聊/page/3/index.html","474151df4371894450e195a32b5fa964"],["/tags/静态网站托管/index.html","e87d218148d634be91f8ef0072dde909"],["/tags/音乐/index.html","2b11b141d51d64ed1517554dea7a9e5d"],["/tos/index.html","dfc5783c229996c6e32290f2bdb73bf6"],["/y-late-in-autumn.html","aad8061908c0521080e29abdca493e51"]];
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




