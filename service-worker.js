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

var precacheConfig = [["/100.html","91e25add75b94b86989ac4c189f5ff14"],["/1000.html","3317df93f2c6f88084f1ba4793065fe0"],["/1001.html","e4de479361af2c6960a99dc8bc84f019"],["/1002.html","0c8b2cfe46f57037d0a029d1f40d2004"],["/1003.html","418037f6721592b47699603e9f7776d1"],["/1004.html","cbf3f0592cf58f37dd4f4e9fbacecbcb"],["/1005.html","3847739a9d2e035368d0409961c49b7b"],["/101.html","430b1515826e9c44e13f24393720c3bb"],["/11.html","13151046e91f790107bc77f89600301c"],["/110.html","5f15955fa34e83e8b3b60e9a25d9e346"],["/128.html","d98f957c3b20cf7e8a775262286bfa62"],["/129.html","92a395289b318395f8088665aa306cc0"],["/16.html","3b0c8674963711d7d87a51dee96249a1"],["/163.html","3475200f6339b31577b63574294b0ba6"],["/168.html","1da31b2db94d7f52f70abb0f875a6ccf"],["/176.html","a70ed05edb12a342ca277642986ed289"],["/182.html","1e69c21642994f46ca02eeff245e416a"],["/189.html","cd924fb203ef3011fad8f7361a46bd8e"],["/190.html","feddabc976471c3b30f103b38fa366bf"],["/192.html","7edb5b50f7fa108f28dc82351d5dd50d"],["/197.html","c8b06ee87b6e2fc7cb059fb32632354a"],["/198.html","9eaeb094cbcae32ce146a9c90bfad3bb"],["/199.html","6f6cc964c7afbd33739d5c9446cbdd2b"],["/203.html","a8639a3a307f8cf7a042bacdc3da4efa"],["/214.html","e6b3d89533adb140d4decf5d316469f0"],["/215.html","7469f28156adacf697c7e7d1348f99da"],["/216.html","54ce2ebe2d64c7ba82a7c0eff59f5573"],["/224.html","00f02e38032cdbca4202d9ed647818f9"],["/235.html","5d1a94a5a1fb8eac30fd6b628f3f8b2f"],["/29.html","c6537128b6f0a3971b5d0eca55bc3bdf"],["/404.html","599299b2bcdf099c5a3741137c3a0248"],["/41.html","9269094904caf42fd75af68922cf2087"],["/42.html","eb6691fcae29c5ee4b6e01d5f10576f8"],["/45.html","d8435604d6ac9b109e4512b5382c5e6a"],["/48.html","e1671e13c8569cbca3592aa11d388170"],["/53.html","3d9120bfd22610a6a2354f626c0ba1df"],["/58.html","c70a85ce2c4e26fe1a47fe71b80b7fa2"],["/61.html","7afe0d9a78e27001951e8d8c2ca0cbb5"],["/63.html","58a9330267579f647feea0ea1c34eab4"],["/64.html","9e2093cdc440540bde5b633b1184214a"],["/80.html","10bb1e6a43b05fcf919b0782a8e44335"],["/92.html","9f32754e43a5cea8a4048f3081a10386"],["/94.html","9967cc76f82bfe25eb67915015c361c9"],["/95.html","fd14293c6e21722c9b525f0793ebccdc"],["/97.html","5da279a83b6c0bc34440e0f8853b2246"],["/another/提问的智慧.html","dba0e4efbbcff5f059579b7407ba59c0"],["/api.html","4050f6a096671cecf46caf8845b2dadf"],["/archives/2020/03/index.html","03ddfe4a171cb0d2291b699b63960383"],["/archives/2020/04/index.html","bcfe8ba9570a73a433e3e0b36fa0c742"],["/archives/2020/04/page/2/index.html","790101b43b0cb0af711f7c78081036b2"],["/archives/2020/05/index.html","def69a9d7551329bbff92a879a3b1015"],["/archives/2020/07/index.html","3995b6234d62dc44b754fbeaa1d392ab"],["/archives/2020/07/page/2/index.html","2c22a74f02d1ee5fbe8ece7e9da1cfff"],["/archives/2020/08/index.html","1e43a65de032d7026c34173759249635"],["/archives/2020/08/page/2/index.html","7076ee562bbe623a27f3930006c6d2b7"],["/archives/2020/index.html","9c1d253f8e70e982d99aa89f0eb220c0"],["/archives/2020/page/2/index.html","0f254e4eeec7b2f035e11322aac39feb"],["/archives/2020/page/3/index.html","06fccd245a0d85096fdec16876a71dab"],["/archives/2020/page/4/index.html","5c127fa0d1a551c01b4e6d5a56ed9ba6"],["/archives/2020/page/5/index.html","0ea1dbee87920b18980e1caa478fa6bc"],["/archives/index.html","05351f44b0a33893e089da9fe9666b19"],["/archives/page/2/index.html","df772a308b158c56f5076ab670c5a802"],["/archives/page/3/index.html","ca71fa3b0a9ecfd192c494fa096d2a1d"],["/archives/page/4/index.html","c9a531bf6c1f0e8029b1afb7f8e54c14"],["/archives/page/5/index.html","932278bd345e56fd5b7098e4c77ab2ab"],["/atom.xml","b9adc44540819bcceab49cb1d333d0b9"],["/b-dual-existence.html","032d24375434ff4517da7dafe228d552"],["/baidusitemap.xml","3958f84c384c7b1824aed5e576b985bf"],["/categories/Docs-Live2D-实用/index.html","99bb418e5b1c818f6a547c17b0db5a57"],["/categories/Minecraft/index.html","623de2047a6170daedb0ecfc917e798d"],["/categories/Minecraft/插件/index.html","7f06e9bebc150b02c04c865b1405d38d"],["/categories/PhotoShop/index.html","5967242a46b08d118e7290d14b6056fb"],["/categories/index.html","f3f7bceba4bca57039a451ffd58607ed"],["/categories/关于/index.html","6a89a2c8a7a870ca964e429e2123fb44"],["/categories/实用/index.html","a5709d0586dd5be23aa4228ba7385473"],["/categories/实用/page/2/index.html","8b31ae968c71472754f9d8d526b4ea23"],["/categories/技术/index.html","5809e7bb16d015a8741524513cef3a98"],["/categories/教程/index.html","836ea20f295b59a6c49737c47480d1a6"],["/categories/闲聊/index.html","84329b7b89f21909831a3feaaf4c6866"],["/categories/闲聊/page/2/index.html","afb4ba478f0db8494e9173de0839476b"],["/categories/闲聊/page/3/index.html","c55c4504dd046c522cc44b0b3de9696d"],["/categories/闲聊/page/4/index.html","2bcdea0cc58f874afc3c86cac241377b"],["/categories/音乐/index.html","5cd2ce6f6be933c842cd9b239bbda969"],["/css/index.css","7e3c759ecab1625417faa52a97d30d7b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/waifu.css","e71d9ab3216c5dbfbcfc823e2d074dd4"],["/diary-20-08-14.html","45d1f2d1445937df9496a95ed7687bc5"],["/diary-20-08-16.html","5af256666ac79232df9601e4424c6f8e"],["/diary.html","8cf901ec1204da63810be4973bcf6045"],["/doc-live2d.html","e3663bd8095a9748ec62a44eabd07221"],["/frp/index.html","e1df83f81c3f2951f7048fc0215fd30e"],["/githubchart.html","23645647c14cec7136e67cfa1527b1f9"],["/horainingyo.html","0c885e3ca09383c3bffd93a948f2e53d"],["/images/pwaicons/logo_144.png","a84a9fb13adc66c2e6282cb4ec503d41"],["/images/pwaicons/logo_16.png","e3d5a19ccbc85331eac60e8f5d48e121"],["/images/pwaicons/logo_32.png","c8e36df84d26a193900bfccd8fbd637e"],["/images/pwaicons/logo_36.png","055f23ea216c3bc6aafcbd9e40b2433e"],["/images/pwaicons/logo_48.png","ce4452002e81d01eae5ae7697547b5a1"],["/images/pwaicons/logo_512.png","1dd00fd74bacf09f68e19719ef0574b2"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/comment.png","3b167d941508abf1017f854b28cd5151"],["/img/comment_bg.png","488773ac22a668a24cc60ff548fc3e3f"],["/img/favicon.png","7be3a186cbb83c3cb3bfd145c59dfc83"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","ee5845181133538971c5812df636962e"],["/js/autoload.js","d95cc1096a472a68270af413be3c516e"],["/js/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","0176913a28754a766910352489a24a69"],["/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["/js/waifu-tips.js","554701a3d2fdad5f465b03d1c307e4e2"],["/js/waifu-tips.json","8dd6573863792f6f2c2e57057d21ef96"],["/link/index.html","5a1af5413021115361860c81c63cbee4"],["/live2d.html","1af50ba0bc1fbe0df26cba7120990f47"],["/live2d_widget.html","ca5a457525fbb6c7b702de1bb652c4c8"],["/manifest.json","cd1867c510461dfa2d8684ca64c3a056"],["/music/NeteaseMusic/antd.min.css","4f2d3b71c9e6300d506e505a6b26796f"],["/music/NeteaseMusic/antd.min.js","7a6296e75996341045b1d0b4b0456d66"],["/music/NeteaseMusic/axios.min.js","aec752b41708ddd1d4703fb7f261c6d8"],["/music/NeteaseMusic/index.html","f517bdc625c2719623681c60d3e3df84"],["/music/NeteaseMusic/moment.js","0941fc7ec3988352c959e5b3da86f666"],["/music/NeteaseMusic/vue.min.js","d85af260fc0f73ed755e7b0ba8229e44"],["/music/index.html","dbb24492aabb63cd1e7a31e9435950e6"],["/music/my.html","d739564a3cc0b2f2bf5c00704204109c"],["/myself.html","384405c7af5d194a320aae07a91ca2d5"],["/only-my-railgun.html","0a1e4bd35fa5fd7edfcd3e44cc6b8463"],["/page/2/index.html","983b0c1f65ce70d2882df077025f3256"],["/page/3/index.html","f44758fbf990eb42886038af97dc8435"],["/page/4/index.html","845c2818d4b0dd09f0eeb61f94a440eb"],["/page/5/index.html","40cf3f7ff7ee2f15e6e9e6948fccbce2"],["/privacy/index.html","0254f3b760ab470d62a49927a8486de0"],["/sitemap.xml","a0e0f71be9465389b7f4aa4b94098bdb"],["/tags/301跳转/index.html","d091201786e6c295916917f14518d996"],["/tags/API/index.html","50594a53aaf324621617e74976f269c3"],["/tags/ARK-Server/index.html","083633009a07cd028bcae5b57bf07299"],["/tags/Centos/index.html","5fdca480b264c334010611190727e86e"],["/tags/CloudBase云开发/index.html","915ce9114c60fbceb5ed7b502395364b"],["/tags/Docs/index.html","a78b9f6a416d6ddaecff9a35b971d99d"],["/tags/Frp/index.html","c4ddb561f09201b282e0a7675b511cb3"],["/tags/Hexo/index.html","682ebfcfa3d519881acccb2a32dabfba"],["/tags/Linux/index.html","b14a894cf2e203ea5a0103091942d01c"],["/tags/Live2D/index.html","28edb89657900db72566f8eeeb02293a"],["/tags/Minecraft/index.html","2d3729a908d3a2030fdb739de25731f4"],["/tags/PhpMyAdmin/index.html","36bfce76b4225fb50dc37b22b389e50c"],["/tags/PicGo/index.html","dd03e3cef040c6de4e1752873b322cca"],["/tags/Windows/index.html","fb1a3d2e458c87ce856e5f830182b57e"],["/tags/Wordpress/index.html","a50f46e797ed6d38f981a1e39538a334"],["/tags/index.html","42e29f0d50e75c51f1f891acb06cd613"],["/tags/late-in-autumn/index.html","a83d9f5279056ee50c8203226a4e4832"],["/tags/とある科学の超電磁炮/index.html","9979bacea60789c1afdd08a544afb427"],["/tags/书法/index.html","a894f24f7860ef0ac7f5fc6cd18cc699"],["/tags/介绍/index.html","22bec5fab0f8f3eb75c6f8055a9daf65"],["/tags/公主焊接/index.html","6c5a55dfdbcb22a3d1b2aaff3efe4adc"],["/tags/内网映射/index.html","fc8402542a99dde9bbeafec94ea7829a"],["/tags/博客/index.html","5a4466da335bc62ca62a6e497a6e129e"],["/tags/博客更新/index.html","d0a89d35e2d25c71d6b094657bafc97c"],["/tags/图床/index.html","fca3d7cdc118f713059652b145f6f2be"],["/tags/域名/index.html","b08de66a37138ca9bcd70b1fe0401d32"],["/tags/宝塔/index.html","9071fb5a8c0c34184002f0fdd5ab400b"],["/tags/实用/index.html","5a3c710041055bc46ba0328c0bc9eb54"],["/tags/实用/page/2/index.html","4f5cfacf26e8060ba8b4ba673c86cfd2"],["/tags/我的世界/index.html","4bb9760939dcc2d6547b2edf6a0e5668"],["/tags/技术/index.html","0c2ca26ce1c83135b55a10768da60aef"],["/tags/插件/index.html","81b0d49b87d4e3ece5d8992b6950e231"],["/tags/搭建/index.html","d7a6c0904aa287ea1151389bf1aa5a9f"],["/tags/教程/index.html","839cee871f50beea16b048c58e7bb5f6"],["/tags/新标日/index.html","78abf93c40dbbdf5b9fe05c6fab13d75"],["/tags/方舟/index.html","b1748db07d4b39114622de4dcd1447f8"],["/tags/日语/index.html","de4473c94b5ded69c02fa7ca91edf0c2"],["/tags/暑假/index.html","df19fdc3eee24d96f6f112af69250e52"],["/tags/更新/index.html","62dcb57eee9bd0930bb3985ccc62f3a3"],["/tags/服务器/index.html","0a3e362c834d4590a01d803fce07bb20"],["/tags/歌曲/index.html","bdf6b78798166a891122b39fb9936bd8"],["/tags/漏洞/index.html","ed0a9154279871cea927f5dbab8bd5a9"],["/tags/猫咖/index.html","e9e8780fcfb80dfa66f9dfde7f537a13"],["/tags/生存进化/index.html","e4a551b065012cac2c83d3adaacac3be"],["/tags/盗号未遂/index.html","44918d8ea55465ce39e4973c6d778b55"],["/tags/看板娘/index.html","61cc7af20715bb42d4efa6d90c07bab8"],["/tags/硬笔/index.html","7d6c9fe738d4a8aaa7a5d988623ff514"],["/tags/练字/index.html","7abb29aee9910630afe56623ce7d26af"],["/tags/网站/index.html","f7d04cab1737976d5c5270b1b85ab9b1"],["/tags/腾讯云/index.html","980ff0ec95db18580c490b97b5be5052"],["/tags/自我介绍/index.html","cf476f7b9e051abfe43eaf711d848cfd"],["/tags/萌国ICP备案/index.html","75924d963a564a3e272de435b205b597"],["/tags/蓬莱伝說/index.html","80c0335fd0bd2167da9e90f3ab33a546"],["/tags/软件/index.html","e09efdce06dfe94d016924ea641a1421"],["/tags/闲得慌/index.html","4fc9f43ee4c6acc7b6a05b5fd5435fc7"],["/tags/闲聊/index.html","9a79994e006f77ad039db515d29c762a"],["/tags/闲聊/page/2/index.html","cebbf2c190b197870a305ae867ce8067"],["/tags/闲聊/page/3/index.html","805c08c9ef7b86eb70a73db2b11802e9"],["/tags/静态网站托管/index.html","5bf47504d84475b664dd5004f5edd6f3"],["/tags/音乐/index.html","d319e0fd5f5d7ad7d7a30765c54a2adf"],["/tos/index.html","ca0715fc410a74f4cebe5ba4424a4494"],["/y-late-in-autumn.html","1e898ffbfb0b0d3ade25bc526c097459"]];
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




