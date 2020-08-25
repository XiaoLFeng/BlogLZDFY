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

var precacheConfig = [["/100.html","43eef2cc84da8c93e646e01967161857"],["/1000.html","d0e4a7f6437ade52e9fb12ec6c47cd35"],["/1001.html","82f228ee6669791b68f41071d133a365"],["/1002.html","e9cf432f5313b8ab01d5e18a384437fd"],["/1003.html","db0a2f8243f1b3ee70c560857910b253"],["/1004.html","76d29f93a8e4c2551f853dc14e6bbafd"],["/1005.html","8f9cc72b8e58686e51a56aea5819f0af"],["/101.html","49b5b27edd26638520f517b231c0c453"],["/11.html","f233625152537d5feced1ac264fa9b0f"],["/110.html","6e81b0cde34736201b0492eb72452f25"],["/128.html","2eebf711b60be2c74331d58f11fb35aa"],["/129.html","a48e1e420cf63be514d42604952c288f"],["/16.html","0049f60e523e3c5dc587d7bfbd8f9879"],["/163.html","ea44ca79c9889d530762427fe55b45f9"],["/168.html","f43c7ce62e46b9921644b40af4d4671c"],["/176.html","1b08d59beab4426e7cc6c76f4492feaa"],["/182.html","4a232412c686aaf3f286846d902692c8"],["/189.html","c8cb84aba3cb54de1fe5c62c9b5f6d42"],["/190.html","7b20a3fb95b4c2e44a60e13982c152c6"],["/192.html","f304d39fe30ed2cf34dce3af3b3d38ac"],["/197.html","cde00c57c08bc8ecb526a768195f0ea2"],["/198.html","022956e9047dff393f297206ef5a6bdd"],["/199.html","efbc4fb4bcb499ded38967fc9a86ce1a"],["/203.html","430ba63cae36c1baa009490f727653f1"],["/214.html","57e467e122bd49375cf81cceb3866c15"],["/215.html","3018df5747aa2db215269fa38671f3d9"],["/216.html","866d6f62c3b4f63c458b8052db087967"],["/224.html","604f4f503089367ea5b5958b606181ff"],["/235.html","b9d203d5a0eff30e0b4d772fa6a53e7d"],["/29.html","dc7779f64c0a8ce538d6529b906dd46d"],["/404.html","c6806fec9aa3c940058058e4381bb0e5"],["/41.html","9774a483db0a4bc90b05612c08fec70e"],["/42.html","26dbc2ff9ec2eedef8d5b21901652c34"],["/45.html","3158094ef493f725496bead9cae3a421"],["/48.html","f147ab2fe84b767b6e58ee91ab53e51c"],["/53.html","8590d9e16556fd2b2725ae63af7b0733"],["/58.html","88db84ac15ecef9f4625c5aeb6f1301b"],["/61.html","f29a7e73c04214a0aa6d76d1b92c9973"],["/63.html","c6cb95066dc14938075ab80098bd5f8f"],["/64.html","295dda9e30f2e9f026222167973d42b0"],["/80.html","cabf29416c09c7207bc321960afd88c8"],["/92.html","60ebeea4454e47e0eb1f96b57c5a993d"],["/94.html","c49540db4c724d94c49061170df2ba99"],["/95.html","c95bf5d435e82b34a6f9ae7166a8d766"],["/97.html","687fb941e8562aedf7b2f9f0dffd0b16"],["/another/提问的智慧.html","95a1340391371ad1837f7c95760b6d27"],["/api.html","ff1973efa954e4544ce31f428e0e7852"],["/archives/2020/03/index.html","df41a6ebb0b052cb1427a716b3e95d5d"],["/archives/2020/04/index.html","0b3b71585f6b53dd570338604835f155"],["/archives/2020/04/page/2/index.html","62d2410d6892ffb7e3d98f92c81d0fc3"],["/archives/2020/05/index.html","15524b99eb713a4a695b5a897bf35865"],["/archives/2020/07/index.html","2d102fa32f5773efa1964ce672a7c61f"],["/archives/2020/07/page/2/index.html","0b4a9cdfabe3896a699d6650b9a5a920"],["/archives/2020/08/index.html","ea5e4562040299cf587c76883d1003df"],["/archives/2020/08/page/2/index.html","cd27e81533644fd783042622d82e560e"],["/archives/2020/index.html","f51b6bdaafa0a189acd0cb9ccdaadaa3"],["/archives/2020/page/2/index.html","c2ec4d2f5e3c2bdfe06d1fa220578e2b"],["/archives/2020/page/3/index.html","3a48127684721b3672afd5f18b3d5e5f"],["/archives/2020/page/4/index.html","070c5644146fd2cdf5b0a7720a9b03ae"],["/archives/2020/page/5/index.html","5ca82777dac6b61c65ae16aed34f12f3"],["/archives/index.html","0a0e2d18145148ffb8f5db54a58f7d5e"],["/archives/page/2/index.html","76da037ba290a349d32e25bd87ecfd88"],["/archives/page/3/index.html","299b7f2467ca8206b933e7ca265f5534"],["/archives/page/4/index.html","d0db4cac93eca6109ff355b8427d5429"],["/archives/page/5/index.html","529b8d0d8fbe8ed6ad596f9c68d32ff0"],["/atom.xml","b0e6befac9d6fdd17c895f8bffa1753c"],["/b-dual-existence.html","ae06f1c52da8a8b073df153f2a127e77"],["/baidusitemap.xml","97723819e32ebefe44ef813a7fab47df"],["/categories/Docs-Live2D-实用/index.html","62ca09360ed69dac1a7770ab720d7586"],["/categories/Minecraft/index.html","fae958f470b2295bd95a0f88055e52f8"],["/categories/Minecraft/插件/index.html","773e5ef417a7e99d1d5f24e0f12ba01e"],["/categories/PhotoShop/index.html","ffd26544003e32e74bf0f73eb7d64b06"],["/categories/index.html","a1fbfdb42f5585acb4d84d91cf07cbb1"],["/categories/关于/index.html","ddc750689d250d4276210bd35120aca5"],["/categories/实用/index.html","a510edeba7b025563dcd95353804bae3"],["/categories/实用/page/2/index.html","0df4620c88bf86f468358bdda431b710"],["/categories/技术/index.html","9804d2831884f755d98083fd0ca4e41a"],["/categories/教程/index.html","083423a22273c07e6eab858afeffd236"],["/categories/闲聊/index.html","9fed2a707ce7c2990ec3c492670fd601"],["/categories/闲聊/page/2/index.html","fe33d283539f15a8b8b0f713b5284f26"],["/categories/闲聊/page/3/index.html","1b682c714e289901fccf26d794b0f204"],["/categories/闲聊/page/4/index.html","faf46c1759b5a556f65bca84a8dc6b50"],["/categories/音乐/index.html","bdebc01801dd069e1c9ba03b8ce8ab0f"],["/css/index.css","7e3c759ecab1625417faa52a97d30d7b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/waifu.css","e71d9ab3216c5dbfbcfc823e2d074dd4"],["/diary-20-08-14.html","c776f2a4bdd2898854cafcc58bda0785"],["/diary-20-08-16.html","f8690ce1b3d45d630dee73e1ea4b2297"],["/diary.html","ffa87c7f7aa5fda2c9bb7b8d21ce12d2"],["/doc-live2d.html","3b6f9bc353f734d0e9e2fefb34da53db"],["/frp/index.html","7a6c90a27c36959e6640785ce72e5173"],["/githubchart.html","c6232c0f7caa9b2180b6bd6f3c41c6ac"],["/horainingyo.html","18e016ac3b7ac37f35f8dc03b00f5da3"],["/images/pwaicons/logo_144.png","a84a9fb13adc66c2e6282cb4ec503d41"],["/images/pwaicons/logo_16.png","e3d5a19ccbc85331eac60e8f5d48e121"],["/images/pwaicons/logo_32.png","c8e36df84d26a193900bfccd8fbd637e"],["/images/pwaicons/logo_36.png","055f23ea216c3bc6aafcbd9e40b2433e"],["/images/pwaicons/logo_48.png","ce4452002e81d01eae5ae7697547b5a1"],["/images/pwaicons/logo_512.png","1dd00fd74bacf09f68e19719ef0574b2"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/comment.png","3b167d941508abf1017f854b28cd5151"],["/img/comment_bg.png","488773ac22a668a24cc60ff548fc3e3f"],["/img/favicon.png","7be3a186cbb83c3cb3bfd145c59dfc83"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","3180554b08332916db85519dc292d548"],["/js/autoload.js","d95cc1096a472a68270af413be3c516e"],["/js/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","0176913a28754a766910352489a24a69"],["/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["/js/waifu-tips.js","554701a3d2fdad5f465b03d1c307e4e2"],["/js/waifu-tips.json","8dd6573863792f6f2c2e57057d21ef96"],["/link/index.html","f54d30814b0f6646c653023e1f6df9ed"],["/live2d.html","46fa690cc1f15b747bfc85832130fcde"],["/live2d_widget.html","cc50195eb29e0d1cbedc8c444225dd1c"],["/manifest.json","78c73207f469d101c30f93aa2eba2ccb"],["/music/NeteaseMusic/antd.min.css","4f2d3b71c9e6300d506e505a6b26796f"],["/music/NeteaseMusic/antd.min.js","7a6296e75996341045b1d0b4b0456d66"],["/music/NeteaseMusic/axios.min.js","aec752b41708ddd1d4703fb7f261c6d8"],["/music/NeteaseMusic/index.html","0497b58dd468b9e09848fc74addb8092"],["/music/NeteaseMusic/moment.js","0941fc7ec3988352c959e5b3da86f666"],["/music/NeteaseMusic/vue.min.js","d85af260fc0f73ed755e7b0ba8229e44"],["/music/index.html","ab3e9673cbc406d7d2c4f9380edc98f2"],["/music/my.html","6b1f5b26f67747f77e56c89f9eb5ac10"],["/myself.html","4e34e0a84ec98f3303f8fea00c965334"],["/only-my-railgun.html","222c3cf24721f9e55cfabce5ae25d37b"],["/page/2/index.html","8735eff15cbc4e06a7a6544d7c145c37"],["/page/3/index.html","42fdcec78f4144c4ec044175849de8db"],["/page/4/index.html","2d5173cd8e6c15a2ca8764b272f82d23"],["/page/5/index.html","ec6ef5adef4ae89fe62c88f43aaf1ac1"],["/privacy/index.html","20052afebc3d1dd3624d2bac1e38fa42"],["/sitemap.xml","09ac5662dfc80c69865154cd8f47f284"],["/tags/301跳转/index.html","fb4dcd4126489eca0c4fcf4fd5f57da5"],["/tags/API/index.html","9f064cff0c40f2d22b4154bf81904f2d"],["/tags/ARK-Server/index.html","09df9cebfb97c9b3e825d5eceb55fdd3"],["/tags/Centos/index.html","5e058e18524a236921bc53eceaeee8dc"],["/tags/CloudBase云开发/index.html","59cb821e7c3af2af032bff3664def858"],["/tags/Docs/index.html","d22eff10215af0e8c70b9796c004ba7d"],["/tags/Frp/index.html","33834990dd96ade75df51139ce0f9f79"],["/tags/Hexo/index.html","3bd6bed416b83fea02e09c9fae36a448"],["/tags/Linux/index.html","724358e4ed076aa4d6d8121765b6b9df"],["/tags/Live2D/index.html","af264a7f05a7f3c53105b49ae5422a0d"],["/tags/Minecraft/index.html","11a23f4e468c2565ff6b0734e2381efe"],["/tags/PhpMyAdmin/index.html","a29819b043cd839e9b36cc74e551e896"],["/tags/PicGo/index.html","d52aabb28768adf5ab145cde44a16b60"],["/tags/Windows/index.html","598e477a60949a93cf2f901135433948"],["/tags/Wordpress/index.html","805c7fd304138745fa259e5c3a73b1c8"],["/tags/index.html","ba6ac12b576da817900f1ad8fe990a9b"],["/tags/late-in-autumn/index.html","1e43f73999bcc2c4cea3c6b31a63d316"],["/tags/とある科学の超電磁炮/index.html","6cf11b3090bc19a9a38e1f58d5ea4049"],["/tags/书法/index.html","4dbf370247c5f75229479dd5540bf3bd"],["/tags/介绍/index.html","11f8f7d1dc5631f6c603d2e236094c3a"],["/tags/公主焊接/index.html","efcd6e3b923143c6c235609b780abe55"],["/tags/内网映射/index.html","614408e747007e081802b169c7489094"],["/tags/博客/index.html","fffd17ced58535a7000f1fe56534a10c"],["/tags/博客更新/index.html","a36a1bc2365033f570eb3133521cab3a"],["/tags/图床/index.html","49ecbb6d3b4972ac6a65e06be9be3cab"],["/tags/域名/index.html","88856b00dc1323063940bed820520e83"],["/tags/宝塔/index.html","7d23d32b55d1f2d394bce7e1aca77320"],["/tags/实用/index.html","d1e9d554e31070d2ce1ffd5153483ddc"],["/tags/实用/page/2/index.html","adfe5538731d277892fd8e431dfa3061"],["/tags/我的世界/index.html","842b92540cdd9474004c2079f2569d3a"],["/tags/技术/index.html","acb200cfba3d555fbda11f2f05a08cb6"],["/tags/插件/index.html","a45b4fde772653e495b4d978143aa854"],["/tags/搭建/index.html","24b729bcde82cc68caed39de885da6fd"],["/tags/教程/index.html","a98f00e0dbceda2931cebf5ea2c43a5f"],["/tags/新标日/index.html","ef0c8c9f0816b613ddb7c0b6ba0c6cc4"],["/tags/方舟/index.html","3c2ae299a36eb38b3f519b1956181518"],["/tags/日语/index.html","42e6ca54bf8e7e0c717a4933e9509721"],["/tags/暑假/index.html","d83577918c87649b831dd9cda7d06830"],["/tags/更新/index.html","66ec24e892e1e6cceb59fb97ec60bd9b"],["/tags/服务器/index.html","8cfa5fb4b418674ae2548f365f856b3f"],["/tags/歌曲/index.html","18d60c2a64c2969d4d8dc4f5e03ef115"],["/tags/漏洞/index.html","d2bb338af436dbc63c7475b0e1132369"],["/tags/猫咖/index.html","652e0a428f4a2cfd0eb230079329adf5"],["/tags/生存进化/index.html","5b94bd13960edc322d72b5fbaa59fb7a"],["/tags/盗号未遂/index.html","31ebaf459a3ed83a803ff42465833db1"],["/tags/看板娘/index.html","a45b5cadc32628604f64368486673d0c"],["/tags/硬笔/index.html","930a215d5273f47dc28b22d4dd9f515a"],["/tags/练字/index.html","e2c253227d4e3abd32ca2f6c452f2d8f"],["/tags/网站/index.html","1017454c06cfcbc94ef6e9e0bab64971"],["/tags/腾讯云/index.html","f71f88e5d09dec2a5979901fd2c71568"],["/tags/自我介绍/index.html","a6732dc001584e2e0c302567697db0c9"],["/tags/萌国ICP备案/index.html","f0b249debc57b3e0c445e4543e70ae22"],["/tags/蓬莱伝說/index.html","4da58f58ffae7e2b51de691068338e75"],["/tags/软件/index.html","7f65f7e2cc7af86a2c26283c70dd9666"],["/tags/闲得慌/index.html","803f969a1428b579568c83d4ade78b3a"],["/tags/闲聊/index.html","1b62acdc6b5fac0f72f86b2021b89b2a"],["/tags/闲聊/page/2/index.html","72b9320775cd038fb3edcd981da7a9dd"],["/tags/闲聊/page/3/index.html","d2e28a2afc3f9c50dc1b76c6b4e2beb6"],["/tags/静态网站托管/index.html","4678b10a7b9d720c61d5aef5f27a38fd"],["/tags/音乐/index.html","91361094c5bb78a7d36740614933350e"],["/tos/index.html","e10615a9151fba803e68a24e9199bec4"],["/y-late-in-autumn.html","d5df4378aedc946de8c000396171d4cc"]];
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




