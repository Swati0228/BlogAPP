/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/email/route";
exports.ids = ["app/api/email/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Femail%2Froute&page=%2Fapi%2Femail%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Femail%2Froute.js&appDir=%2FUsers%2Fswatisingh%2FDesktop%2Ffullstack-blog-nextjs-main%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fswatisingh%2FDesktop%2Ffullstack-blog-nextjs-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Femail%2Froute&page=%2Fapi%2Femail%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Femail%2Froute.js&appDir=%2FUsers%2Fswatisingh%2FDesktop%2Ffullstack-blog-nextjs-main%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fswatisingh%2FDesktop%2Ffullstack-blog-nextjs-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_swatisingh_Desktop_fullstack_blog_nextjs_main_app_api_email_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/email/route.js */ \"(rsc)/./app/api/email/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/email/route\",\n        pathname: \"/api/email\",\n        filename: \"route\",\n        bundlePath: \"app/api/email/route\"\n    },\n    resolvedPagePath: \"/Users/swatisingh/Desktop/fullstack-blog-nextjs-main/app/api/email/route.js\",\n    nextConfigOutput,\n    userland: _Users_swatisingh_Desktop_fullstack_blog_nextjs_main_app_api_email_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZlbWFpbCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGZW1haWwlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZlbWFpbCUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRnN3YXRpc2luZ2glMkZEZXNrdG9wJTJGZnVsbHN0YWNrLWJsb2ctbmV4dGpzLW1haW4lMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGc3dhdGlzaW5naCUyRkRlc2t0b3AlMkZmdWxsc3RhY2stYmxvZy1uZXh0anMtbWFpbiZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDMkI7QUFDeEc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9zd2F0aXNpbmdoL0Rlc2t0b3AvZnVsbHN0YWNrLWJsb2ctbmV4dGpzLW1haW4vYXBwL2FwaS9lbWFpbC9yb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvZW1haWwvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9lbWFpbFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvZW1haWwvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvc3dhdGlzaW5naC9EZXNrdG9wL2Z1bGxzdGFjay1ibG9nLW5leHRqcy1tYWluL2FwcC9hcGkvZW1haWwvcm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Femail%2Froute&page=%2Fapi%2Femail%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Femail%2Froute.js&appDir=%2FUsers%2Fswatisingh%2FDesktop%2Ffullstack-blog-nextjs-main%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fswatisingh%2FDesktop%2Ffullstack-blog-nextjs-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./app/api/email/route.js":
/*!********************************!*\
  !*** ./app/api/email/route.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_config_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/config/db */ \"(rsc)/./lib/config/db.js\");\n/* harmony import */ var _lib_models_EmailModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/models/EmailModel */ \"(rsc)/./lib/models/EmailModel.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\nconst LoadDB = async ()=>{\n    await (0,_lib_config_db__WEBPACK_IMPORTED_MODULE_0__.ConnectDB)();\n};\nLoadDB();\nasync function POST(request) {\n    const formData = await request.formData();\n    const emailData = {\n        email: `${formData.get('email')}`\n    };\n    await _lib_models_EmailModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(emailData);\n    return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n        success: true,\n        msg: \"Email Subscribed\"\n    });\n}\nasync function GET(request) {\n    const emails = await _lib_models_EmailModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({});\n    return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n        emails\n    });\n}\nasync function DELETE(request) {\n    const id = await request.nextUrl.searchParams.get(\"id\");\n    await _lib_models_EmailModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findByIdAndDelete(id);\n    return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n        success: true,\n        msg: \"Email Deleted\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2VtYWlsL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE0QztBQUNLO0FBQ047QUFFM0MsTUFBTUcsU0FBUztJQUNYLE1BQU1ILHlEQUFTQTtBQUNuQjtBQUVBRztBQUVPLGVBQWVDLEtBQUtDLE9BQU87SUFDOUIsTUFBTUMsV0FBVyxNQUFNRCxRQUFRQyxRQUFRO0lBQ3ZDLE1BQU1DLFlBQVk7UUFDZEMsT0FBTyxHQUFHRixTQUFTRyxHQUFHLENBQUMsVUFBVTtJQUNyQztJQUNBLE1BQU1SLDhEQUFVQSxDQUFDUyxNQUFNLENBQUNIO0lBQ3hCLE9BQU9MLHFEQUFZQSxDQUFDUyxJQUFJLENBQUM7UUFBRUMsU0FBUztRQUFNQyxLQUFLO0lBQW1CO0FBQ3RFO0FBRU8sZUFBZUMsSUFBSVQsT0FBTztJQUM3QixNQUFNVSxTQUFTLE1BQU1kLDhEQUFVQSxDQUFDZSxJQUFJLENBQUMsQ0FBQztJQUN0QyxPQUFPZCxxREFBWUEsQ0FBQ1MsSUFBSSxDQUFDO1FBQUVJO0lBQU87QUFDdEM7QUFFTyxlQUFlRSxPQUFPWixPQUFPO0lBQ2hDLE1BQU1hLEtBQUssTUFBTWIsUUFBUWMsT0FBTyxDQUFDQyxZQUFZLENBQUNYLEdBQUcsQ0FBQztJQUNsRCxNQUFNUiw4REFBVUEsQ0FBQ29CLGlCQUFpQixDQUFDSDtJQUNuQyxPQUFPaEIscURBQVlBLENBQUNTLElBQUksQ0FBQztRQUFFQyxTQUFTO1FBQU1DLEtBQUs7SUFBZ0I7QUFDbkUiLCJzb3VyY2VzIjpbIi9Vc2Vycy9zd2F0aXNpbmdoL0Rlc2t0b3AvZnVsbHN0YWNrLWJsb2ctbmV4dGpzLW1haW4vYXBwL2FwaS9lbWFpbC9yb3V0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25uZWN0REIgfSBmcm9tIFwiQC9saWIvY29uZmlnL2RiXCI7XHJcbmltcG9ydCBFbWFpbE1vZGVsIGZyb20gXCJAL2xpYi9tb2RlbHMvRW1haWxNb2RlbFwiO1xyXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuXHJcbmNvbnN0IExvYWREQiA9IGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IENvbm5lY3REQigpO1xyXG59XHJcblxyXG5Mb2FkREIoKTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3QpIHtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xyXG4gICAgY29uc3QgZW1haWxEYXRhID0ge1xyXG4gICAgICAgIGVtYWlsOiBgJHtmb3JtRGF0YS5nZXQoJ2VtYWlsJyl9YFxyXG4gICAgfVxyXG4gICAgYXdhaXQgRW1haWxNb2RlbC5jcmVhdGUoZW1haWxEYXRhKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN1Y2Nlc3M6IHRydWUsIG1zZzogXCJFbWFpbCBTdWJzY3JpYmVkXCIgfSlcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXF1ZXN0KSB7XHJcbiAgICBjb25zdCBlbWFpbHMgPSBhd2FpdCBFbWFpbE1vZGVsLmZpbmQoe30pO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZW1haWxzIH0pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gREVMRVRFKHJlcXVlc3QpIHtcclxuICAgIGNvbnN0IGlkID0gYXdhaXQgcmVxdWVzdC5uZXh0VXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJpZFwiKTtcclxuICAgIGF3YWl0IEVtYWlsTW9kZWwuZmluZEJ5SWRBbmREZWxldGUoaWQpO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgbXNnOiBcIkVtYWlsIERlbGV0ZWRcIiB9KVxyXG59XHJcbiJdLCJuYW1lcyI6WyJDb25uZWN0REIiLCJFbWFpbE1vZGVsIiwiTmV4dFJlc3BvbnNlIiwiTG9hZERCIiwiUE9TVCIsInJlcXVlc3QiLCJmb3JtRGF0YSIsImVtYWlsRGF0YSIsImVtYWlsIiwiZ2V0IiwiY3JlYXRlIiwianNvbiIsInN1Y2Nlc3MiLCJtc2ciLCJHRVQiLCJlbWFpbHMiLCJmaW5kIiwiREVMRVRFIiwiaWQiLCJuZXh0VXJsIiwic2VhcmNoUGFyYW1zIiwiZmluZEJ5SWRBbmREZWxldGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/email/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/config/db.js":
/*!**************************!*\
  !*** ./lib/config/db.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ConnectDB: () => (/* binding */ ConnectDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nlet isConnected = false;\nconst ConnectDB = async ()=>{\n    if (isConnected) return;\n    try {\n        // Remove deprecated options\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI);\n        isConnected = true;\n        console.log(\"✅ DB Connected\");\n    } catch (err) {\n        console.error(\"❌ DB connection error:\", err);\n        throw err;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvY29uZmlnL2RiLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxJQUFJQyxjQUFjO0FBRVgsTUFBTUMsWUFBWTtJQUN2QixJQUFJRCxhQUFhO0lBRWpCLElBQUk7UUFDRiw0QkFBNEI7UUFDNUIsTUFBTUQsdURBQWdCLENBQUNJLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVztRQUU5Q0wsY0FBYztRQUNkTSxRQUFRQyxHQUFHLENBQUM7SUFDZCxFQUFFLE9BQU9DLEtBQUs7UUFDWkYsUUFBUUcsS0FBSyxDQUFDLDBCQUEwQkQ7UUFDeEMsTUFBTUE7SUFDUjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIi9Vc2Vycy9zd2F0aXNpbmdoL0Rlc2t0b3AvZnVsbHN0YWNrLWJsb2ctbmV4dGpzLW1haW4vbGliL2NvbmZpZy9kYi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5sZXQgaXNDb25uZWN0ZWQgPSBmYWxzZTtcclxuXHJcbmV4cG9ydCBjb25zdCBDb25uZWN0REIgPSBhc3luYyAoKSA9PiB7XHJcbiAgaWYgKGlzQ29ubmVjdGVkKSByZXR1cm47XHJcblxyXG4gIHRyeSB7XHJcbiAgICAvLyBSZW1vdmUgZGVwcmVjYXRlZCBvcHRpb25zXHJcbiAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKTtcclxuXHJcbiAgICBpc0Nvbm5lY3RlZCA9IHRydWU7XHJcbiAgICBjb25zb2xlLmxvZyhcIuKchSBEQiBDb25uZWN0ZWRcIik7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwi4p2MIERCIGNvbm5lY3Rpb24gZXJyb3I6XCIsIGVycik7XHJcbiAgICB0aHJvdyBlcnI7XHJcbiAgfVxyXG59O1xyXG5cclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiaXNDb25uZWN0ZWQiLCJDb25uZWN0REIiLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiY29uc29sZSIsImxvZyIsImVyciIsImVycm9yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/config/db.js\n");

/***/ }),

/***/ "(rsc)/./lib/models/EmailModel.js":
/*!**********************************!*\
  !*** ./lib/models/EmailModel.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Schema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    email: {\n        type: String,\n        required: true\n    },\n    date: {\n        type: Date,\n        default: Date.now()\n    }\n});\nconst EmailModel = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).email || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('email', Schema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmailModel);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9kZWxzL0VtYWlsTW9kZWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLFNBQVMsSUFBSUQsd0RBQWUsQ0FBQztJQUMvQkUsT0FBTztRQUNIQyxNQUFNQztRQUNOQyxVQUFVO0lBQ2Q7SUFFQUMsTUFBTTtRQUNGSCxNQUFNSTtRQUNOQyxTQUFTRCxLQUFLRSxHQUFHO0lBQ3JCO0FBQ0o7QUFFQSxNQUFNQyxhQUFhVix3REFBZSxDQUFDRSxLQUFLLElBQUlGLHFEQUFjLENBQUMsU0FBU0M7QUFFcEUsaUVBQWVTLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9zd2F0aXNpbmdoL0Rlc2t0b3AvZnVsbHN0YWNrLWJsb2ctbmV4dGpzLW1haW4vbGliL21vZGVscy9FbWFpbE1vZGVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gICAgZW1haWw6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcblxyXG4gICAgZGF0ZToge1xyXG4gICAgICAgIHR5cGU6IERhdGUsXHJcbiAgICAgICAgZGVmYXVsdDogRGF0ZS5ub3coKVxyXG4gICAgfVxyXG59KTtcclxuXHJcbmNvbnN0IEVtYWlsTW9kZWwgPSBtb25nb29zZS5tb2RlbHMuZW1haWwgfHwgbW9uZ29vc2UubW9kZWwoJ2VtYWlsJywgU2NoZW1hKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVtYWlsTW9kZWw7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiU2NoZW1hIiwiZW1haWwiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJkYXRlIiwiRGF0ZSIsImRlZmF1bHQiLCJub3ciLCJFbWFpbE1vZGVsIiwibW9kZWxzIiwibW9kZWwiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/models/EmailModel.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Femail%2Froute&page=%2Fapi%2Femail%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Femail%2Froute.js&appDir=%2FUsers%2Fswatisingh%2FDesktop%2Ffullstack-blog-nextjs-main%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fswatisingh%2FDesktop%2Ffullstack-blog-nextjs-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();