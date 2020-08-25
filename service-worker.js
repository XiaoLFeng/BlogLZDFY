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

var precacheConfig = [["G:/myblog/public/100.html","f47ab9dab764cf137f0a4a5dbb136f32"],["G:/myblog/public/1000.html","c78b35248d37ca0446159f349ad83d56"],["G:/myblog/public/1001.html","70f3a68803e8242a6110a544cc26c8a2"],["G:/myblog/public/1002.html","b0a26893448e281f15547bf417dd3ccc"],["G:/myblog/public/1003.html","601b426a07fa9051202915aa409f38eb"],["G:/myblog/public/1004.html","92302d2de74d7a73fb4a0a12240758e3"],["G:/myblog/public/1005.html","a082d480c71141b775ce34eaa0c1c914"],["G:/myblog/public/101.html","13f9440d4035a8b69b609b0e783aaca2"],["G:/myblog/public/11.html","1b855a4b6710a52ce8b5af50f1acedb1"],["G:/myblog/public/110.html","0d5f2fe82ab0d3a5fffabbdca9a9bae9"],["G:/myblog/public/128.html","021b279bddd77915f15c4a97ed6a5ea2"],["G:/myblog/public/129.html","98740a10e7e3f3a42a79fd6e0f103c22"],["G:/myblog/public/16.html","6b46dca61a8c526d65c56a799d2dc257"],["G:/myblog/public/163.html","f00d17c74835eb538a9efa3d7ab0e98e"],["G:/myblog/public/168.html","bbeff39dcf3b2a997dcfcd345f06a066"],["G:/myblog/public/176.html","7d022254a2d464da70cbe7396438777c"],["G:/myblog/public/182.html","25388e4f1253509a343b9fbd4d65f8ab"],["G:/myblog/public/189.html","4f1f4dede34b2d1abbfbc936f5066948"],["G:/myblog/public/190.html","c97fb95b06b713c33fa427164261615d"],["G:/myblog/public/192.html","601f59b8aced2bbfa038bf45e898278b"],["G:/myblog/public/197.html","10bc05990b48f28a0afbdf372c2d5cd6"],["G:/myblog/public/198.html","9ee2cd34c54fa67b7442356bbe1fea3b"],["G:/myblog/public/199.html","437ec320470836d9600271c7cacac2c4"],["G:/myblog/public/203.html","3170f82474da3357ad35ddeda394174d"],["G:/myblog/public/214.html","1786b86b9c0e3bcb49e58eb2804b1192"],["G:/myblog/public/215.html","b769bdf8e7116f6d5551bf7eab8704cd"],["G:/myblog/public/216.html","e07cd14097d16a409abb18d5ef279503"],["G:/myblog/public/224.html","8628e20c8d2de418d5ad91a3dbe394c5"],["G:/myblog/public/235.html","d8381a02f4ebb78f401056d1e5f77810"],["G:/myblog/public/29.html","900e206f47b94e0cb844cd4b4c5f402e"],["G:/myblog/public/404.html","46f8d6e4defbc53ef37d86bd312f07ed"],["G:/myblog/public/41.html","8da0badc4ec99694155c929fdc50458a"],["G:/myblog/public/42.html","6e06658fe9a7f6d5773240cc8e6b7f34"],["G:/myblog/public/45.html","1b23e100df5cd4be149f5090c8320240"],["G:/myblog/public/48.html","ba9067261579e1b25a842d8b593a4cdb"],["G:/myblog/public/53.html","a6d7264fe1b299f8a7fbbd07a5a45645"],["G:/myblog/public/58.html","2e588eaa47a151dd84e6df4f651d7ea3"],["G:/myblog/public/61.html","4dc4fefc15ff28df8773fb09240e3b2a"],["G:/myblog/public/63.html","ba1539c726dd9267ebaf628532a49370"],["G:/myblog/public/64.html","7e4d91a444996b60282be4134385f60d"],["G:/myblog/public/80.html","d6c1ef484ca8f23b0577e11cfe87f06e"],["G:/myblog/public/92.html","a90932958109b1f21d52579a4e3ad05a"],["G:/myblog/public/94.html","fe488b387c55fcd38ca50efa1c953941"],["G:/myblog/public/95.html","3eafa4495816cd54c063cacbdd848e71"],["G:/myblog/public/97.html","239edef06a73a52d72e90c8aafdb9244"],["G:/myblog/public/another/提问的智慧.html","41b9d2fce2011df232f665ae93b3b3c4"],["G:/myblog/public/api.html","354284759a2cc218357a54b366e425c1"],["G:/myblog/public/archives/2020/03/index.html","55e112e67edb50958cb4d7eb82984003"],["G:/myblog/public/archives/2020/04/index.html","cc579c55f825b936be6367a1e73f895a"],["G:/myblog/public/archives/2020/04/page/2/index.html","f9c7e74550eb10523aff132ba1d9a056"],["G:/myblog/public/archives/2020/05/index.html","650060654d981b197f9bc362d308457c"],["G:/myblog/public/archives/2020/07/index.html","69f41568929ade984cb36833a2f2254c"],["G:/myblog/public/archives/2020/07/page/2/index.html","128325b40843dcce137c3bfe7c1f8259"],["G:/myblog/public/archives/2020/08/index.html","53416f8add060e16f8f6be341eccfa5f"],["G:/myblog/public/archives/2020/08/page/2/index.html","a9106f77bc3b1904869627d346b601c6"],["G:/myblog/public/archives/2020/index.html","1cd9b340cb23f7e3c438c0e3ca62d9bb"],["G:/myblog/public/archives/2020/page/2/index.html","9b05529fd35ac6ccea30e2cc4f1af7d0"],["G:/myblog/public/archives/2020/page/3/index.html","fc3702b151b7ae73453e308086ef245b"],["G:/myblog/public/archives/2020/page/4/index.html","edb2fb1c198747aa665e1e6cd10c68cd"],["G:/myblog/public/archives/2020/page/5/index.html","e1413c329f4f1eec00337cf3163c114e"],["G:/myblog/public/archives/index.html","5ed2e4801f97cf8c0f6a6b13b3815696"],["G:/myblog/public/archives/page/2/index.html","9a6ee6ae7e0972dd0d5de467e2c96e5a"],["G:/myblog/public/archives/page/3/index.html","2af607e52f2936ba7ac8a0a74a2802f1"],["G:/myblog/public/archives/page/4/index.html","26283a0f74ed5c917422e51c2dd8ecb6"],["G:/myblog/public/archives/page/5/index.html","b12a24e06ea7d21978845c45ae8c0b7c"],["G:/myblog/public/b-dual-existence.html","b47d767a41c5dcc3e1bfe367bfae6fab"],["G:/myblog/public/categories/Docs-Live2D-实用/index.html","fcecb64453dd21a9e0112643fa1f6cf5"],["G:/myblog/public/categories/Minecraft/index.html","ebc65e2bcc443a93ad36bb997bac0ad8"],["G:/myblog/public/categories/Minecraft/插件/index.html","d2daed0058f851347e014a6463c2a44c"],["G:/myblog/public/categories/PhotoShop/index.html","466f2daf3d3818fabaaa535055e85469"],["G:/myblog/public/categories/index.html","f29a8bf2dc3228ec5ff983df2d7c0099"],["G:/myblog/public/categories/关于/index.html","23fd50cac77aa3e3d47a4c25b42e0a42"],["G:/myblog/public/categories/实用/index.html","cc94d49873f99a93bfde2f72bbc1a58a"],["G:/myblog/public/categories/实用/page/2/index.html","854473026ca2991acb41080f82e782c6"],["G:/myblog/public/categories/技术/index.html","38966fc122ed2a44fbf2db9044fa8449"],["G:/myblog/public/categories/教程/index.html","a29c156621f9198fee7ef1a3e550888c"],["G:/myblog/public/categories/闲聊/index.html","4bbb553e937a5a723f665ddb37bf1261"],["G:/myblog/public/categories/闲聊/page/2/index.html","145af7df75570146941a270c341ab5ee"],["G:/myblog/public/categories/闲聊/page/3/index.html","6c432c2b960bbe9dcca8de2bce26050e"],["G:/myblog/public/categories/闲聊/page/4/index.html","2abb36dc2792da757c2cf8c0b438cc31"],["G:/myblog/public/categories/音乐/index.html","be30bbfd775cb5fd4aaedbb13c97242e"],["G:/myblog/public/css/index.css","7e3c759ecab1625417faa52a97d30d7b"],["G:/myblog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["G:/myblog/public/css/waifu.css","e71d9ab3216c5dbfbcfc823e2d074dd4"],["G:/myblog/public/diary-20-08-14.html","6f406c9f35ee7c23ed2f83cf2933bf74"],["G:/myblog/public/diary-20-08-16.html","162d269a48d392cdfe44b69bac3bd6f9"],["G:/myblog/public/diary.html","988d1b2e5d651b8dc8ac1e77bb355791"],["G:/myblog/public/doc-live2d.html","487357f3e8197e504021dfa9f578e1a0"],["G:/myblog/public/frp/index.html","11a456cb2a709208b91a7299f45f7ad4"],["G:/myblog/public/githubchart.html","8ada45ef6606c9915bf6ff13b91cdc35"],["G:/myblog/public/horainingyo.html","6b16ea4cfd8ea58253d904126e12d3e2"],["G:/myblog/public/images/pwaicons/logo_16.png","94e5591015c3cb6e72360ed1f7b1a9fc"],["G:/myblog/public/images/pwaicons/logo_165.png","2e5d365f96deabbe0aed14af108ad69e"],["G:/myblog/public/images/pwaicons/logo_32.png","c8e36df84d26a193900bfccd8fbd637e"],["G:/myblog/public/images/pwaicons/logo_512.png","1dd00fd74bacf09f68e19719ef0574b2"],["G:/myblog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["G:/myblog/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["G:/myblog/public/img/comment.png","3b167d941508abf1017f854b28cd5151"],["G:/myblog/public/img/comment_bg.png","488773ac22a668a24cc60ff548fc3e3f"],["G:/myblog/public/img/favicon.png","7be3a186cbb83c3cb3bfd145c59dfc83"],["G:/myblog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["G:/myblog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["G:/myblog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["G:/myblog/public/index.html","6e80ed5cd923933346167e937b8ff696"],["G:/myblog/public/js/autoload.js","d95cc1096a472a68270af413be3c516e"],["G:/myblog/public/js/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["G:/myblog/public/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["G:/myblog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["G:/myblog/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["G:/myblog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["G:/myblog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["G:/myblog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["G:/myblog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["G:/myblog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["G:/myblog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["G:/myblog/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["G:/myblog/public/js/tw_cn.js","0176913a28754a766910352489a24a69"],["G:/myblog/public/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["G:/myblog/public/js/waifu-tips.js","554701a3d2fdad5f465b03d1c307e4e2"],["G:/myblog/public/link/index.html","cd8709507fe3beaf5aef657e37fe5910"],["G:/myblog/public/live2d.html","0be600408235ae82301cf22fea008b52"],["G:/myblog/public/live2d_widget.html","96b4dc29d73990c0d2092d6279b4cdcf"],["G:/myblog/public/music/NeteaseMusic/antd.min.css","4f2d3b71c9e6300d506e505a6b26796f"],["G:/myblog/public/music/NeteaseMusic/antd.min.js","7a6296e75996341045b1d0b4b0456d66"],["G:/myblog/public/music/NeteaseMusic/axios.min.js","aec752b41708ddd1d4703fb7f261c6d8"],["G:/myblog/public/music/NeteaseMusic/index.html","75f6fa010ca393dd3d7965465fc1edf7"],["G:/myblog/public/music/NeteaseMusic/moment.js","0941fc7ec3988352c959e5b3da86f666"],["G:/myblog/public/music/NeteaseMusic/vue.min.js","d85af260fc0f73ed755e7b0ba8229e44"],["G:/myblog/public/music/index.html","de55d2327d37d610758eac8f056b7e72"],["G:/myblog/public/music/my.html","ea65a26e99a7ecb31ae5f1796a6ef5f3"],["G:/myblog/public/myself.html","d3dd8bb6071826a2fdbf2b3fc21165f8"],["G:/myblog/public/only-my-railgun.html","cac8ce1a0fa502a3a6ee8815d451b107"],["G:/myblog/public/page/2/index.html","ca026fa46ae5e749ee9b00d02ddd99c7"],["G:/myblog/public/page/3/index.html","a12039510a9ae8264134e23bd6a1cc94"],["G:/myblog/public/page/4/index.html","082747de9d1db8370d71d48aab45c420"],["G:/myblog/public/page/5/index.html","657534025534cc9c5825e891b9b68831"],["G:/myblog/public/privacy/index.html","169e37a872225842b17c54116222843f"],["G:/myblog/public/tags/301跳转/index.html","00fc6ba97eff36116c7b80bbfd66ff5c"],["G:/myblog/public/tags/API/index.html","805892e4b8a40575d65ca5fd49588670"],["G:/myblog/public/tags/ARK-Server/index.html","3887e9949fab3134771f393f4c37615d"],["G:/myblog/public/tags/Centos/index.html","0f6f0101bac9eebb3cff4569b29472f2"],["G:/myblog/public/tags/CloudBase云开发/index.html","5e898ad0ebf202bd0bd60ae63d58d08b"],["G:/myblog/public/tags/Docs/index.html","5da879af5ea7f7edb6834b7cff2b2ea8"],["G:/myblog/public/tags/Frp/index.html","b4856b5f3ce280ca01aa96a15cdcf374"],["G:/myblog/public/tags/Hexo/index.html","9301209590166a1712fb31b00ff5a434"],["G:/myblog/public/tags/Linux/index.html","2dffd9a0e8bc4f55eee9c9a6659ab2a9"],["G:/myblog/public/tags/Live2D/index.html","21edc9c56cd192f4920821b0123c3cbf"],["G:/myblog/public/tags/Minecraft/index.html","4db5f1fefaeeadc8a380ae41b74f6702"],["G:/myblog/public/tags/PhpMyAdmin/index.html","7b4c852bd848230a4f942b9d84782371"],["G:/myblog/public/tags/PicGo/index.html","ef119564daab963e8c76d5bc7ba8502f"],["G:/myblog/public/tags/Windows/index.html","5bddba8755592098852cebeddb915199"],["G:/myblog/public/tags/Wordpress/index.html","9e67197ecabdd5af5f2ed1fb0d16c197"],["G:/myblog/public/tags/index.html","94e7eaae8dd6368515e20ab0d04dfe6f"],["G:/myblog/public/tags/late-in-autumn/index.html","5a000fe2c081d9eb3263351a725f069b"],["G:/myblog/public/tags/とある科学の超電磁炮/index.html","59de4fae7032bebd813da72871eee279"],["G:/myblog/public/tags/书法/index.html","1ae5890664a0389fbab64ffc09cd88aa"],["G:/myblog/public/tags/介绍/index.html","1eaa42f4ecf03134f83de4e1594b20cb"],["G:/myblog/public/tags/公主焊接/index.html","c91d3989fc4660529cf021b23f9d23a8"],["G:/myblog/public/tags/内网映射/index.html","d505e1a7d0221ba00ba9fb670b9b3d46"],["G:/myblog/public/tags/博客/index.html","0f5589c0c5c2c0058a9e36fd67aeb0c5"],["G:/myblog/public/tags/博客更新/index.html","b87f4179e4f866b9ec64e1ed9e46ab69"],["G:/myblog/public/tags/图床/index.html","c5a7e608224cf0d0074e7efced74358e"],["G:/myblog/public/tags/域名/index.html","b123270a197effde6f82c55771b544c4"],["G:/myblog/public/tags/宝塔/index.html","2eb8c5e5fa8c1ffa36d30062dbc4da14"],["G:/myblog/public/tags/实用/index.html","13f04ebe5fc20ff05d673038c6630c69"],["G:/myblog/public/tags/实用/page/2/index.html","9fe8ada73fc64ac7d6403c94464b7661"],["G:/myblog/public/tags/我的世界/index.html","ac9d08ae94882933d577cee48774b224"],["G:/myblog/public/tags/技术/index.html","a9c9335a2cc54e49096ec190717f72b9"],["G:/myblog/public/tags/插件/index.html","cd8a18768798a363298f59e75336a544"],["G:/myblog/public/tags/搭建/index.html","df60828c983f13f0f7423242fe5e76ad"],["G:/myblog/public/tags/教程/index.html","0b48b98bfd31be7db1d98f5d52ebb1f0"],["G:/myblog/public/tags/新标日/index.html","8bca5a410c83c24f502439c9df63b336"],["G:/myblog/public/tags/方舟/index.html","77e42f6f6241bb982c80b054a3e670e0"],["G:/myblog/public/tags/日语/index.html","8b88e50590226fc17b0ada0816899afb"],["G:/myblog/public/tags/暑假/index.html","b8603e63ee21c261969aede3be65c254"],["G:/myblog/public/tags/更新/index.html","a76ed5ae94c525a44ee79fa3a90a7ea7"],["G:/myblog/public/tags/服务器/index.html","3f85c4b478450b36fa4d599496c73dc8"],["G:/myblog/public/tags/歌曲/index.html","7189241bc66885ca97fbe3cc04a4fbd7"],["G:/myblog/public/tags/漏洞/index.html","da5bac187745326ca43dec426e9dac98"],["G:/myblog/public/tags/猫咖/index.html","871c056b724d1c53456fd865ecbae816"],["G:/myblog/public/tags/生存进化/index.html","799d37e938112a6cb349ab5e59b437ba"],["G:/myblog/public/tags/盗号未遂/index.html","53631f3759834a710890847bdf1e876e"],["G:/myblog/public/tags/看板娘/index.html","93c08c7e39c243e6a5978b3df2da62bb"],["G:/myblog/public/tags/硬笔/index.html","9ee67b4dffa768977bfe59112b4380a3"],["G:/myblog/public/tags/练字/index.html","a26d1690499e0008a291b0c731372f7d"],["G:/myblog/public/tags/网站/index.html","a10c21aeac8b425ad4dff8bffc805b0e"],["G:/myblog/public/tags/腾讯云/index.html","b6e34e17983c12ef6a1552e4dc319c2a"],["G:/myblog/public/tags/自我介绍/index.html","328c4d975c7b13cb7e5ed59c8a09041c"],["G:/myblog/public/tags/萌国ICP备案/index.html","b8f150af7bb4275e8820329b4f400ad6"],["G:/myblog/public/tags/蓬莱伝說/index.html","5de4de51bd5499591c63c87d4775bd76"],["G:/myblog/public/tags/软件/index.html","175678c851f4073703233382b1a1b089"],["G:/myblog/public/tags/闲得慌/index.html","2a5fdb565cb65a7bad8f4cd2b28ed002"],["G:/myblog/public/tags/闲聊/index.html","2d8c422bf5100762c950f403b601413a"],["G:/myblog/public/tags/闲聊/page/2/index.html","cb9b67d3ec148b5513bda89bcfdede8a"],["G:/myblog/public/tags/闲聊/page/3/index.html","379acb89c9dfb47e1d019db10f4cccd9"],["G:/myblog/public/tags/静态网站托管/index.html","048ae79169b9c38ff1b10a8eb905e48b"],["G:/myblog/public/tags/音乐/index.html","361ae88ce1589918039be0871ac36e71"],["G:/myblog/public/tos/index.html","e2126d48ca3a400217072504d2c218b9"],["G:/myblog/public/y-late-in-autumn.html","580320c09c5e726b99dbc1d6d8966067"]];
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







