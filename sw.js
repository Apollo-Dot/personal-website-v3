/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-5357ef54'], (function (workbox) { 'use strict';

  self.skipWaiting();
  workbox.clientsClaim();

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "assets/games-699ad9b6.js",
    "revision": null
  }, {
    "url": "assets/index-7e464cae.css",
    "revision": null
  }, {
    "url": "assets/index-87c88f1a.js",
    "revision": null
  }, {
    "url": "assets/photography-e4271ac0.js",
    "revision": null
  }, {
    "url": "assets/preact-8cfcf72f.js",
    "revision": null
  }, {
    "url": "assets/preact-async-route-270d6121.js",
    "revision": null
  }, {
    "url": "assets/preact-router-a9b29072.js",
    "revision": null
  }, {
    "url": "assets/react-icons-8efa295f.js",
    "revision": null
  }, {
    "url": "assets/tailwind-scrollbar-hide-4ed993c7.js",
    "revision": null
  }, {
    "url": "assets/three-d22827c1.js",
    "revision": null
  }, {
    "url": "assets/trianglify-4ed993c7.js",
    "revision": null
  }, {
    "url": "assets/vendor-0b6b5afa.js",
    "revision": null
  }, {
    "url": "assets/workbox-window.prod.es5-a7b12eab.js",
    "revision": null
  }, {
    "url": "index.html",
    "revision": "0147c7c2a5e2584334ee87b8865ada43"
  }, {
    "url": "pwa-192x192.png",
    "revision": "96893efcc6915545f17894914f0be0b3"
  }, {
    "url": "pwa-512x512.png",
    "revision": "9a8b6f2b6cbcb7eecb0bb0250717250d"
  }, {
    "url": "manifest.webmanifest",
    "revision": "f6e7e69cbae1f79f0fb0950406f51cca"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));

}));
