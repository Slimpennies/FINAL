(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ _app)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
// EXTERNAL MODULE: external "@thirdweb-dev/react"
var react_ = __webpack_require__(352);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(764);
;// CONCATENATED MODULE: ./pages/_app.js



// This is the chain your dApp will work on.
const activeChain = "binance";
function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime.jsx(react_.ThirdwebProvider, {
        activeChain: activeChain,
        autoConnect: false,
        children: /*#__PURE__*/ jsx_runtime.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js&preferredRegion=!

        // Next.js Route Loader
        
        
    

/***/ }),

/***/ 764:
/***/ (() => {



/***/ }),

/***/ 352:
/***/ ((module) => {

"use strict";
module.exports = require("@thirdweb-dev/react");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893], () => (__webpack_exec__(568)));
module.exports = __webpack_exports__;

})();