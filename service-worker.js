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

var precacheConfig = [["/100.html","64f0bc4a6e8f179f96ea6a7d1a402c15"],["/1000.html","611242cf78e15cb4ff5c0e9923ba45e7"],["/1001.html","4d2832203749f81886fb6597365262fb"],["/1002.html","da618788d55d6f0e2a63833962c05219"],["/1003.html","83004a9a31c085615b7d8bfaffa180d3"],["/1004.html","fdf0e13e7e5b76b5c63fc5f220fc8601"],["/1005.html","73f9b54dcc608ac4c22bd69297d2d1d3"],["/101.html","d88303e9d468a680a2e478734e2833ff"],["/11.html","ec500ba76c010d3306eb2f8aca1f9db8"],["/110.html","c0626fc222de6252fdec507c44f0deab"],["/128.html","3c2175025577dadd9406148be7341cea"],["/129.html","fd5b67224f82de90f24d06e91e7bd1b3"],["/16.html","7cbd86ebf36fd630d5673323d7617ba7"],["/163.html","c593add0fad22072f6bbac1829fe8887"],["/168.html","79f6d5a3a6943e82239aa54dcc94e0aa"],["/176.html","f641e6f8978fe5f6b72201f46c91c4b5"],["/182.html","078106911ebd163766169c6ddaf70e32"],["/189.html","2b7d4a9ed71d3faf56875e13c04dea95"],["/190.html","d4468556d64a9a7f1a6a6cdc0ee0d8cb"],["/192.html","4e406727435020ce41f3a5787db55f4b"],["/197.html","ea548f3ff35fa22d6e366610a2a8fd32"],["/198.html","3b7b309af9486d06f1c2cfe869afa274"],["/199.html","a3bfac01806353b8fa87b43c51b864e0"],["/203.html","816847af63888bc5df524fc16dfd373d"],["/214.html","5c28b56e656f7106c4bcc3359211eaae"],["/215.html","2b242a30d04e68491005d84c08248822"],["/216.html","0f79ef50d84a2cd7ae8f89d91d38faa9"],["/224.html","8fe5960241c45b9a9858661dc3b05434"],["/235.html","65ad85ede94ed719877e03a6f8eb1e56"],["/29.html","92755b4d397cfb4915fea6264b6ccb44"],["/404.html","b4b87d240d1fb928fe6b95c3923fe5a0"],["/41.html","f9a0f0d3677b20a6273beccb9373ad46"],["/42.html","5683a3a0d3b130d5d7151164fbfc2a01"],["/45.html","d3021103040bb22eb527110bd4f6acb8"],["/48.html","fbb71ef083cec8bee6ed3b114671e234"],["/53.html","8426f464b467d057b19158f69d89dfa4"],["/58.html","ddc45d72ccd5d0e2675055b617d43d7a"],["/61.html","01957b9046b3f5fee17915d397016d3c"],["/63.html","a7098339be731a04758ac4fde7fe3a1a"],["/64.html","78cb6c55fede8207106b67ee29fa0d25"],["/80.html","bc549557bc28227b8a854bac87cea092"],["/92.html","54f58a4d178a7b9e419ff48a8d4186cb"],["/94.html","f9dbb57f47ee7005f2bf9df7d089b576"],["/95.html","2e7ecc92d34dc2172c72919a80a8e68a"],["/97.html","cfa465f59ad437783375bb96c19d570f"],["/another/提问的智慧.html","cace84cf9a1971dfefe906c0999858c2"],["/api.html","608dae66574380d44f80e24144dd39ee"],["/archives/2020/03/index.html","0718e4f2bbbef393c62aedea3e4660fa"],["/archives/2020/04/index.html","83a33bb31c0f46f3b4387fc2942e2ef2"],["/archives/2020/04/page/2/index.html","64b69f5a5fd11dec3f7575b5f1d73430"],["/archives/2020/05/index.html","39d83991bc1f0c6ceefd57df7e60f375"],["/archives/2020/07/index.html","fb142afee05ea807d881c693c378645e"],["/archives/2020/07/page/2/index.html","19fa50c0b2e5e43da9a324b462814117"],["/archives/2020/08/index.html","73c5049e24422e6208fd2d74f699a558"],["/archives/2020/08/page/2/index.html","2029baf5db6a79e05112abefcf3e910d"],["/archives/2020/index.html","b18b2447e10d536adc1623210897bb20"],["/archives/2020/page/2/index.html","4e99d295a6e8917f6c563c0b92512061"],["/archives/2020/page/3/index.html","0a4273155f0116bcb4b138cf6af998be"],["/archives/2020/page/4/index.html","c31b462773d8ba5f1b30df55a6a11296"],["/archives/2020/page/5/index.html","a9fba8df97bcf838a7b02614d9528594"],["/archives/index.html","4d8bfe92975956e1d0db8cc2959581a2"],["/archives/page/2/index.html","df626e0159ae4ee62832dee2d64d8791"],["/archives/page/3/index.html","328430691d1aea3c2e7077fe6bf7cb0b"],["/archives/page/4/index.html","ae65a1165c48e8eec759db71fc08a30b"],["/archives/page/5/index.html","85071944f34c0608237f4cdf48aca60f"],["/atom.xml","5200cf576b5178064ed40c176673804b"],["/b-dual-existence.html","8f1adb08c78250b0287342b0eafee9ea"],["/baidusitemap.xml","c6e50c8041c9fb67e8f5f9638efde797"],["/categories/Docs-Live2D-实用/index.html","e3d856127ffc48455497905e263755a5"],["/categories/Minecraft/index.html","ecb10812e5273163887a56b98aed4fff"],["/categories/Minecraft/插件/index.html","191549317fe63af17040f74bcf000023"],["/categories/PhotoShop/index.html","9401f11448403eaa4ab34a8430e0538d"],["/categories/index.html","779f23c9c37c488bbee69b55d6864b57"],["/categories/关于/index.html","58bd14d3351a9d6bc7789ac785bcf131"],["/categories/实用/index.html","4116e8d6ef1255c594d23566d0bfa3db"],["/categories/实用/page/2/index.html","4abe67b1bcc1ca5549fad1319fd9cc33"],["/categories/技术/index.html","5bb071d79db853e43c116750e202899a"],["/categories/教程/index.html","fd2ec518443743202b4b7646bdd22894"],["/categories/闲聊/index.html","5f47ed5ccc8d1329b242bd05f855af09"],["/categories/闲聊/page/2/index.html","9730c79e4bcef9dc0d6a083666f199c9"],["/categories/闲聊/page/3/index.html","340328f33d01b42ed1c70a984d143f5f"],["/categories/闲聊/page/4/index.html","8907d57edcaae21db6ec5beb80a45677"],["/categories/音乐/index.html","b73c18873c0af1eff5d8ee95cddad9dc"],["/css/index.css","7e3c759ecab1625417faa52a97d30d7b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/waifu.css","e71d9ab3216c5dbfbcfc823e2d074dd4"],["/diary-20-08-14.html","cf52aa8d99cffe5b810a82a13a7ab297"],["/diary-20-08-16.html","80ebc4ce592200bd69d3ec2aa920df48"],["/diary.html","bbf12241cda9c6bf4d4aa9145fd96d33"],["/doc-live2d.html","140a4697c0351f2b9f0b4b3875ad692d"],["/frp/index.html","c961c5da031e948102589f8c2fa84c42"],["/githubchart.html","bbba657096d17550f07d3780c673bc61"],["/horainingyo.html","8836cbc06b39038c4068d2dd569b4ca1"],["/images/pwaicons/logo_144.png","a84a9fb13adc66c2e6282cb4ec503d41"],["/images/pwaicons/logo_16.png","e3d5a19ccbc85331eac60e8f5d48e121"],["/images/pwaicons/logo_32.png","c8e36df84d26a193900bfccd8fbd637e"],["/images/pwaicons/logo_36.png","055f23ea216c3bc6aafcbd9e40b2433e"],["/images/pwaicons/logo_48.png","ce4452002e81d01eae5ae7697547b5a1"],["/images/pwaicons/logo_512.png","1dd00fd74bacf09f68e19719ef0574b2"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/comment.png","3b167d941508abf1017f854b28cd5151"],["/img/comment_bg.png","488773ac22a668a24cc60ff548fc3e3f"],["/img/favicon.png","7be3a186cbb83c3cb3bfd145c59dfc83"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","55e46233fad90de7b66a2035d72536f3"],["/js/autoload.js","d95cc1096a472a68270af413be3c516e"],["/js/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","0176913a28754a766910352489a24a69"],["/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["/js/waifu-tips.js","554701a3d2fdad5f465b03d1c307e4e2"],["/js/waifu-tips.json","8dd6573863792f6f2c2e57057d21ef96"],["/link/index.html","9cd5f854fe3bc47ffe9248c1e4a8d429"],["/live2d.html","81ca6bb6a6382d5ff86cdccbce9b1aff"],["/live2d_widget.html","c9f2d67f5cdf9e2f5685a53911faa5e3"],["/manifest.json","cd1867c510461dfa2d8684ca64c3a056"],["/music/NeteaseMusic/antd.min.css","4f2d3b71c9e6300d506e505a6b26796f"],["/music/NeteaseMusic/antd.min.js","7a6296e75996341045b1d0b4b0456d66"],["/music/NeteaseMusic/axios.min.js","aec752b41708ddd1d4703fb7f261c6d8"],["/music/NeteaseMusic/index.html","edddc6b6bbbef98c0ff70d23558f57df"],["/music/NeteaseMusic/moment.js","0941fc7ec3988352c959e5b3da86f666"],["/music/NeteaseMusic/vue.min.js","d85af260fc0f73ed755e7b0ba8229e44"],["/music/index.html","04940408356c5b0acc1bad004d26f12d"],["/music/my.html","34a978edebf4a09d1d8ad77c45dea462"],["/myself.html","81a07e743b937872c513a82bd39df8fe"],["/only-my-railgun.html","0ae76ac3fa2b2d03f342028a30dfb981"],["/page/2/index.html","21d54ddc01770f3041bd0349fbf4d044"],["/page/3/index.html","eac6a0d6cb0946027ae6c844c7e87dbb"],["/page/4/index.html","cbc2557a348b9d13abc23bec08cd730e"],["/page/5/index.html","e9e42312044460ab329e5cc371b62fdc"],["/privacy/index.html","04d319a9570a60a4d10749f48e351692"],["/sitemap.xml","b22e672ec2f123ccf241d954ae6ea17a"],["/tags/301跳转/index.html","49d18e8189f05aaaccc7cc01723246cf"],["/tags/API/index.html","4e0a5a8077a328e50ce4a53a44168081"],["/tags/ARK-Server/index.html","a807038e3a7bdfdb2f2c4de06abbef0a"],["/tags/Centos/index.html","9a25865c6ca217cf21db85ea2f852e71"],["/tags/CloudBase云开发/index.html","c0df8ade43847f31b99bc90d1b435b78"],["/tags/Docs/index.html","ad1ace1434c876571d959fa7b48e8db6"],["/tags/Frp/index.html","61b0d5aadb799eb5ca31a8a2d7219d1c"],["/tags/Hexo/index.html","f0acbbf14408fc1c0c2c02b61ab42eb3"],["/tags/Linux/index.html","5bd56a6dc2af60b10d268b986847f351"],["/tags/Live2D/index.html","3987037f628b497f847afb57ffa7907a"],["/tags/Minecraft/index.html","0f36bfec33718e50c5a70d733889a53c"],["/tags/PhpMyAdmin/index.html","729d5096433728daa36b27a6e6ace378"],["/tags/PicGo/index.html","d95c2f864ff03912f8c0120d4cab224a"],["/tags/Windows/index.html","cf9a5f4b1fe5a60a0fb5c2241d78e907"],["/tags/Wordpress/index.html","bc10a09380db5dc755ce4261ad4dbbbd"],["/tags/index.html","ac170e49daf4495ce406d17692112513"],["/tags/late-in-autumn/index.html","bd2c74a74e8b1d5b3f0e084295ee5daf"],["/tags/とある科学の超電磁炮/index.html","7c7561e9d66a03e5e7187023548d2e28"],["/tags/书法/index.html","15d1e0d79e7f69fffc42035915df7b7b"],["/tags/介绍/index.html","0833e403d8b97a83659253dfe5312e92"],["/tags/公主焊接/index.html","922c04e0728cb30f543749eb30eff80d"],["/tags/内网映射/index.html","da8cd23c9d851de68f9d7fad1776e3ec"],["/tags/博客/index.html","b567ce87f6613e7d1f9bd32ad745c0fe"],["/tags/博客更新/index.html","6a0dc31f657c19f45f4642a008d3c1ce"],["/tags/图床/index.html","d182e0a71c0646fb9ecd09dac3996527"],["/tags/域名/index.html","401469d145bfa50fb9eeb41128a766ee"],["/tags/宝塔/index.html","1e6baa45a8015af60f93583318885e08"],["/tags/实用/index.html","6e5ca609b283322a80f663f2778f8141"],["/tags/实用/page/2/index.html","b05b656bf5a914627aae7e14abfd3aa1"],["/tags/我的世界/index.html","a974dfd42cb04a77764fda91d6ba342c"],["/tags/技术/index.html","82d812b3ae37a018928107df2011a42b"],["/tags/插件/index.html","cf05ffccdc7be3cd6f4e6bb0ff82a850"],["/tags/搭建/index.html","512ce095e120713fcf468ca9e1f7ca7c"],["/tags/教程/index.html","860130fe6139fd52f9e4ff39078c2341"],["/tags/新标日/index.html","00e8bb2f7e5b6da68edcd441e6135d14"],["/tags/方舟/index.html","8f2a2d76ca0b1f8347093439ee64d85a"],["/tags/日语/index.html","95c23de5466442d8c8219d2ec0cf5d43"],["/tags/暑假/index.html","65882ba60361489fd086f4d52ba972f9"],["/tags/更新/index.html","43ca4c0540e5252c3ff52c704c3525ea"],["/tags/服务器/index.html","80f36831de597af97af17a1ed9d04aa5"],["/tags/歌曲/index.html","d66ef3bd0e5deccf9738506f0f89473d"],["/tags/漏洞/index.html","a7aeb84b964ca1ae94e1a70ec268abf0"],["/tags/猫咖/index.html","49c6999ee0440b9b77e4ff40b30c3370"],["/tags/生存进化/index.html","58abbef4abf30561440c996f832242c3"],["/tags/盗号未遂/index.html","af9312715d0460e12887dcc3d648df79"],["/tags/看板娘/index.html","d4dee5b7a3443919336e564a4c32b7cf"],["/tags/硬笔/index.html","956bd0206e0d3575a8c4f25d6b3f39e5"],["/tags/练字/index.html","1f9781de92d10d544ad2e23374cd01ab"],["/tags/网站/index.html","0fdd636162abaab78a6e895fc77599a1"],["/tags/腾讯云/index.html","75ad2069731a60fe1f2b3057d0384cd8"],["/tags/自我介绍/index.html","17795ae05e8e4174d015e7cafb0e500c"],["/tags/萌国ICP备案/index.html","f58b2ae045ed9cf41adea2f8676758a0"],["/tags/蓬莱伝說/index.html","a15cb9dbf9ad5bcc558cc8e95785f718"],["/tags/软件/index.html","0e00adb21976be6eb1ac4eb2e5850d7e"],["/tags/闲得慌/index.html","bee725193cb5c07ae75a45a6abde88de"],["/tags/闲聊/index.html","2bf50d7bacbbcc5103118d625e32ab97"],["/tags/闲聊/page/2/index.html","fd9cc88c31f08d63ed1a10c2bd7a8622"],["/tags/闲聊/page/3/index.html","84fd376dfbd0d5fcdff07bd051f30eb7"],["/tags/静态网站托管/index.html","d8b7dc6c7c4409420e059ca617fc4db6"],["/tags/音乐/index.html","822a77225358e212b029d42a1e227195"],["/tos/index.html","2b6a3c5d9605440438b2511e296228f1"],["/y-late-in-autumn.html","be956621b467c61ec5649157e974128d"]];
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




