'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "dfda7e635b6c9b6d0688ce8bb567b47a",
"assets/AssetManifest.bin.json": "3a375593d1fb7721f2a35a7b4306b448",
"assets/AssetManifest.json": "3e651d85333808ef1886a3745c67a76d",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/Satoshi-Bold.otf": "4a6fdcfc68ad464e8a9811e4edcacf00",
"assets/assets/fonts/Satoshi-Medium.otf": "378def5c1f4df7eb6554a88608893391",
"assets/assets/fonts/Satoshi-Regular.otf": "177a4dda04b52dedbd966942e932c5dc",
"assets/assets/images/appbar-arroew.svg": "20a56e21304d07a90b1d8e4b09b78e66",
"assets/assets/images/app_icon.png": "ceb7e6b786d56aa2b673a876358a80ac",
"assets/assets/images/bed-svg--.svg": "cfe51c8ffce490ed809249d2fd8f6e40",
"assets/assets/images/call-1.svg": "4b69eb35de0f0798812fb2b769dfd9e5",
"assets/assets/images/call-2.svg": "bd22f32652e21856c958d285ccf5e157",
"assets/assets/images/call-3.svg": "9801a986c5f7b94768988873a34662e0",
"assets/assets/images/camero.svg": "205e736ed446a61694b110b7fde637c6",
"assets/assets/images/cat_payment.svg": "65cdd636299db7ed3db4c8dc79b07c95",
"assets/assets/images/cat_state_empty.svg": "5a4938858f1dc10858a386a2dc6d1b68",
"assets/assets/images/cat_state_error.svg": "159f504595fcd32360d91de08e0e91af",
"assets/assets/images/cat_state_loading.svg": "b145eb684a6f810db32a2a8844c86c5b",
"assets/assets/images/cat_state_maintenance.svg": "be8c815255d5855fc37c9b33682780e0",
"assets/assets/images/cat_state_new_notification.svg": "f513b3af1d2f72b3d4262b385d5ac6de",
"assets/assets/images/cat_state_not_found.svg": "229495a45bdc1bdf7fb260d06ca6b630",
"assets/assets/images/cat_state_no_favorites.svg": "eea3f5ea0f106dfd8821520813b02a4c",
"assets/assets/images/cat_state_no_internet.svg": "fcb9154d8f12bee79774e2f998abdcf8",
"assets/assets/images/cat_state_no_messages.svg": "3301d42b46a2ff5db5d3f3200557ab77",
"assets/assets/images/cat_state_no_results.svg": "c76d59124bca68d704e5b9df81d64687",
"assets/assets/images/cat_state_permission_denied.svg": "a6b27770c8b5ddc5e69881b035372425",
"assets/assets/images/cat_state_session_expired.svg": "0d869abc7fdcfc5990edc7dcc3a8d5ff",
"assets/assets/images/cat_state_success.svg": "7d6bb1457e59109fe199d326b4749123",
"assets/assets/images/cat_state_uploading.svg": "c8174ac91368f4eff4944973f2624eec",
"assets/assets/images/cat_state_verification_pending.svg": "ae4e6bef7e1e50fb55e0ec914e20de0a",
"assets/assets/images/cat_success.svg": "8b06602fb3ddb37630c68fc3253cce8e",
"assets/assets/images/cat_trade.svg": "65cdd636299db7ed3db4c8dc79b07c95",
"assets/assets/images/cat_welcome.svg": "2861ce849e406917012ab4ac787214c8",
"assets/assets/images/changepassword-squrity.svg": "15a99342386bd12cda522476082024ab",
"assets/assets/images/chat-border.svg": "d425aea9306bbedea1afd95d63119472",
"assets/assets/images/chat-fill.svg": "a9f25013767850cb50a3ee7fee444ebc",
"assets/assets/images/Chat.png": "e265ed67d325c838a228dafc87f249c5",
"assets/assets/images/correct(3)_1.png": "5917e4178921f68fb39ca4248edd2f23",
"assets/assets/images/error_image.png": "3966de194d2480a8fbf2e70b8528e2d5",
"assets/assets/images/face-id.svg": "8d282f54ae14bc756a758513244274c1",
"assets/assets/images/fav-border.svg": "c2052f06fc05d72261e1d513c83bf843",
"assets/assets/images/fav-fill.svg": "a8864e5080253e10dbbfc9a7cf20ec41",
"assets/assets/images/fill_radiobutton.png": "287a17fa2c931fab23e97a92baece9e4",
"assets/assets/images/gpay.svg": "629bfd8dfac7bb1506aad2f74a0a2fb1",
"assets/assets/images/Group_1171275538.png": "20bc98e7aca1c4f644b14677ebdd7189",
"assets/assets/images/home-border.svg": "d8c53e24cbec79333171cc92b590dbe0",
"assets/assets/images/home-fill.svg": "360a1d5cfc4bf01cfe07309c66e620fc",
"assets/assets/images/Like.png": "37aed2c8307558a7c27ae08147ce7e18",
"assets/assets/images/messges.svg": "a74f946bd892d8457c099e067f5e147b",
"assets/assets/images/nonotificctaiomn-screen.svg": "0b53b8c00b7ca81963bfdd44dcc8fd63",
"assets/assets/images/notification--.svg": "2cf036b3cb45a7763a5173757d01d428",
"assets/assets/images/notificatyion-secqurity.svg": "18105d80ac46700f7a18516f8d7ad2b3",
"assets/assets/images/Order.png": "efe764dbc589c29618592f6ed8c4aeef",
"assets/assets/images/profile-1.svg": "09bff756b219b9ebd3d782b34aaa965e",
"assets/assets/images/profile-2.svg": "8d282f54ae14bc756a758513244274c1",
"assets/assets/images/profile-3.svg": "a6d36682b4a1a67dd5cbea9a921550e1",
"assets/assets/images/profile-4.svg": "6f1cc2ec4e9f39946dea460797cdeb83",
"assets/assets/images/profile-5.svg": "e1f3b3f9c15bddb647ea7fe07d0d7000",
"assets/assets/images/profile-6.svg": "d9fe363baf324f0390b7ddf12827ab13",
"assets/assets/images/profile-7.svg": "ee50738070a47ce6c22d6122988d5151",
"assets/assets/images/profile-border.svg": "7f57872ac5a9344f4ab6c30d0bcbc184",
"assets/assets/images/profile-fill.svg": "ab73292261fd52e325a87992d597aaca",
"assets/assets/images/profile-pen.svg": "08162755c963c1230802f51a02277e91",
"assets/assets/images/r-1.png": "ce2e8a3a18e05b6b241279623fa60bd7",
"assets/assets/images/radio-grey-btn.svg": "2a9092703c9896962e0988a33cc5b28a",
"assets/assets/images/Radio_button.png": "e5a9cedd0ef2d76a1367df36de2d6f4e",
"assets/assets/images/Radio_button_(2).png": "43e776dfc83c8bdbaf08b19aae88f393",
"assets/assets/images/Radio_button_(3).png": "c3e260f44eeef0c6e4485a8c6fe42a52",
"assets/assets/images/radio_green_btn.svg": "adbdad61e866e4fa3c3d708e5df3c0b3",
"assets/assets/images/Rectangle_712_(2).png": "207f401dd1300cf5805181edca3bbc34",
"assets/assets/images/search(12)_1.png": "a338bfa983cfaa5fe6cb8cb23c7ac672",
"assets/assets/images/setting-1.svg": "15a99342386bd12cda522476082024ab",
"assets/assets/images/setting-2.svg": "a7d94fc5e210f3ad5c3181a77dc39db8",
"assets/assets/images/setting-3.svg": "f6d1b23d3e110b9e00cbdc70d20c3f24",
"assets/assets/images/Splace_screen_(2).png": "00ade3c1f7302836d1e83b760650a35f",
"assets/assets/images/tune_FILL0_wght400_GRAD0_opsz24(4)_1.svg": "7aab6fc6fdbb9c7a9d5cba960a796d86",
"assets/assets/images/Vector.svg": "43abc1032bd631a65419b9dae09fa75e",
"assets/assets/images/Vector_(11).png": "ca639eafa14be20728af242f35818b05",
"assets/assets/images/Vector_(3).png": "ffca753e4f0a5773929ab5e622cb8de2",
"assets/assets/images/xmm_icon_v4.svg": "7e1d5eba1f14e7c9f3aeb6fa1e54114f",
"assets/assets/images/xmm_state_no_results.svg": "27d00287ae7e0ca132c88af0d298f8e4",
"assets/assets/jsons/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/FontManifest.json": "f7f92d1deff6ffc263fe44e319a3e147",
"assets/fonts/MaterialIcons-Regular.otf": "17da2eff7f847a4e91bfdca22525e371",
"assets/NOTICES": "7eb1d52e6c9c536fb10b3d8a61037356",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/easy_stepper/assets/loading_black.json": "d412b17ec906f03090996d68abab4eca",
"assets/packages/easy_stepper/assets/loading_white.json": "92623d18291ed579cf8bfe3f5fc74213",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "78534bb5b8901ecb856e392bf49e71ce",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "eee5709a29e5de253977dbaea2faf4d6",
"icons/error_image.png": "3966de194d2480a8fbf2e70b8528e2d5",
"icons/Icon-192.png": "7ebac346e030ef24b10ac61894711b07",
"icons/Icon-512.png": "847930e44285ad9a91e50dba043c628b",
"icons/Icon-maskable-192.png": "7ebac346e030ef24b10ac61894711b07",
"icons/Icon-maskable-512.png": "847930e44285ad9a91e50dba043c628b",
"index.html": "527589472bff90d4687acd161f2edf6d",
"/": "527589472bff90d4687acd161f2edf6d",
"main.dart.js": "395e871e86600c9ebcc73ab39e675088",
"manifest.json": "d41d8cd98f00b204e9800998ecf8427e",
"version.json": "debd20d25f5b4ea80550a86b28afd4cc"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
