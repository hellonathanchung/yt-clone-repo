"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-client)/./app/firebase/firebase.ts":
/*!**********************************!*\
  !*** ./app/firebase/firebase.ts ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   onAuthStateChangedHelper: function() { return /* binding */ onAuthStateChangedHelper; },\n/* harmony export */   signInWithGoogle: function() { return /* binding */ signInWithGoogle; },\n/* harmony export */   signOut: function() { return /* binding */ signOut; }\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"(app-client)/./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"(app-client)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n// Import the functions you need from the SDKs you need\n\n\nconst apiKey = \"AIzaSyCUmV6-ESFPENtVhxIGsI_ostg7mawG6HI\";\nconst firebaseConfig = {\n    apiKey,\n    authDomain: \"hnc-yt-clone.firebaseapp.com\",\n    projectId: \"hnc-yt-clone\",\n    appId: \"1:544687017311:web:bf2943fc904c765b687aea\"\n};\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\nfunction signInWithGoogle() {\n    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithPopup)(auth, new firebase_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuthProvider());\n}\nfunction signOut() {\n    return auth.signOut();\n}\nfunction onAuthStateChangedHelper(callback) {\n    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChanged)(auth, callback);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2ZpcmViYXNlL2ZpcmViYXNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsdURBQXVEO0FBQ1Y7QUFDMEQ7QUFHdkcsTUFBTUssU0FBU0MseUNBQXdDO0FBQ3ZELE1BQU1HLGlCQUFpQjtJQUNyQko7SUFDQUssWUFBWTtJQUNaQyxXQUFXO0lBQ1hDLE9BQU87QUFDVDtBQUVBLE1BQU1DLE1BQU1iLDJEQUFhQSxDQUFDUztBQUMxQixNQUFNSyxPQUFPYixzREFBT0EsQ0FBQ1k7QUFFZCxTQUFTRTtJQUNkLE9BQU9iLDhEQUFlQSxDQUFDWSxNQUFNLElBQUlYLDZEQUFrQkE7QUFDckQ7QUFFTyxTQUFTYTtJQUNkLE9BQU9GLEtBQUtFLE9BQU87QUFDckI7QUFFTyxTQUFTQyx5QkFBeUJDLFFBQXFDO0lBQzVFLE9BQU9kLGlFQUFrQkEsQ0FBQ1UsTUFBTUk7QUFDbEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2ZpcmViYXNlL2ZpcmViYXNlLnRzPzM3MGIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0IHRoZSBmdW5jdGlvbnMgeW91IG5lZWQgZnJvbSB0aGUgU0RLcyB5b3UgbmVlZFxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcbmltcG9ydCB7IGdldEF1dGgsIHNpZ25JbldpdGhQb3B1cCwgR29vZ2xlQXV0aFByb3ZpZGVyLCBvbkF1dGhTdGF0ZUNoYW5nZWQsIFVzZXIgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuXG5cbmNvbnN0IGFwaUtleSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FQSV9LRVlcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICBhcGlLZXksXG4gIGF1dGhEb21haW46IFwiaG5jLXl0LWNsb25lLmZpcmViYXNlYXBwLmNvbVwiLFxuICBwcm9qZWN0SWQ6IFwiaG5jLXl0LWNsb25lXCIsXG4gIGFwcElkOiBcIjE6NTQ0Njg3MDE3MzExOndlYjpiZjI5NDNmYzkwNGM3NjViNjg3YWVhXCJcbn07XG5cbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuY29uc3QgYXV0aCA9IGdldEF1dGgoYXBwKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25JbldpdGhHb29nbGUoKSB7XG4gIHJldHVybiBzaWduSW5XaXRoUG9wdXAoYXV0aCwgbmV3IEdvb2dsZUF1dGhQcm92aWRlcigpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25PdXQoKSB7XG4gIHJldHVybiBhdXRoLnNpZ25PdXQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uQXV0aFN0YXRlQ2hhbmdlZEhlbHBlcihjYWxsYmFjazogKHVzZXI6IFVzZXIgfCBudWxsKSA9PiB2b2lkKSB7XG4gIHJldHVybiBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgY2FsbGJhY2spO1xufSJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiZ2V0QXV0aCIsInNpZ25JbldpdGhQb3B1cCIsIkdvb2dsZUF1dGhQcm92aWRlciIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9BUElfS0VZIiwiZmlyZWJhc2VDb25maWciLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwiYXBwSWQiLCJhcHAiLCJhdXRoIiwic2lnbkluV2l0aEdvb2dsZSIsInNpZ25PdXQiLCJvbkF1dGhTdGF0ZUNoYW5nZWRIZWxwZXIiLCJjYWxsYmFjayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/firebase/firebase.ts\n"));

/***/ })

});