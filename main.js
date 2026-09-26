/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* 1. Use a more-intuitive box-sizing model */\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* 2. Remove default margin */\r\n*:not(dialog) {\r\n  margin: 0;\r\n}\r\n\r\n/* 3. Enable keyword animations */\r\n@media (prefers-reduced-motion: no-preference) {\r\n  html {\r\n    interpolate-size: allow-keywords;\r\n  }\r\n}\r\n\r\nbody {\r\n  /* 4. Increase line-height */\r\n  line-height: 1.5;\r\n  /* 5. Improve text rendering */\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n\r\n/* 6. Improve media defaults */\r\nimg,\r\npicture,\r\nvideo,\r\ncanvas,\r\nsvg {\r\n  display: block;\r\n  max-width: 100%;\r\n}\r\n\r\n/* 7. Inherit fonts for form controls */\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n\r\n/* 8. Avoid text overflows */\r\np,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  overflow-wrap: break-word;\r\n}\r\n\r\n/* 9. Improve line wrapping */\r\np {\r\n  text-wrap: pretty;\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  text-wrap: balance;\r\n}\r\n\r\n/*\r\n  10. Create a root stacking context\r\n*/\r\n#root,\r\n#__next {\r\n  isolation: isolate;\r\n}\r\n\r\n/* What is above is the CSS reset, below is my own CSS */\r\n\r\n* {\r\n  font-family: 'Cormorant Garamond';\r\n}\r\n\r\nh1 {\r\n  font-size: 36px;\r\n}\r\n\r\np {\r\n  font-size: 20px;\r\n}\r\n\r\nbody {\r\n  background-color: #ece5cf;\r\n}\r\n\r\nheader {\r\n  background-color: #621317;\r\n  display: flex;\r\n  padding: 1.1rem 2rem;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  gap: 1.75rem;\r\n}\r\n\r\nnav button {\r\n  background: none;\r\n  border: none;\r\n  color: #ece5cf;\r\n  font-size: 1.5rem;\r\n  cursor: pointer;\r\n  padding: 0.25rem 0;\r\n}\r\n\r\nnav button:hover {\r\n  color: #ffffff;\r\n}\r\n\r\n.home-page {\r\n  display: grid;\r\n  grid-template-columns: 1fr 400px;\r\n  gap: 2rem;\r\n  align-items: center;\r\n  max-width: 1100px;\r\n  margin: 0 auto;\r\n  padding: 1.2rem;\r\n}\r\n\r\n#title {\r\n  color: #621317;\r\n}\r\n\r\n.home-text {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.75rem;\r\n}\r\n\r\n.home-img {\r\n  width: 100%;\r\n  aspect-ratio: 4 / 5;\r\n  object-fit: cover;\r\n  border-radius: 8px;\r\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);\r\n}\r\n\r\n.menu-page {\r\n  max-width: 900px;\r\n  margin: 0 auto;\r\n  padding: 3rem 2rem;\r\n  opacity: 0;\r\n  animation: fadeInUp 0.8s ease-out forwards;\r\n}\r\n\r\n.menu-section {\r\n  color: #621317;\r\n  border-bottom: 1px solid #d8cfb8;\r\n  padding-bottom: 0.5rem;\r\n  margin-top: 2.5rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.menu-dishes {\r\n  list-style: none;\r\n  padding: 0;\r\n}\r\n.list-item {\r\n  display: grid;\r\n  grid-template-columns: 1fr auto;\r\n  column-gap: 1rem;\r\n  row-gap: 0.35rem;\r\n  padding: 1.1rem 0;\r\n}\r\n\r\n.dish-title {\r\n  grid-column: 1;\r\n  grid-row: 1;\r\n  font-weight: 700;\r\n  color: #2a1a1a;\r\n}\r\n\r\n.dish-price {\r\n  grid-column: 2;\r\n  grid-row: 1;\r\n  text-align: right;\r\n  font-weight: 600;\r\n  color: #621317;\r\n}\r\n\r\n.dish-paragraph {\r\n  grid-column: 1 / -1;\r\n  grid-row: 2;\r\n  text-align: left;\r\n  color: #6b6250;\r\n  font-size: 0.95rem;\r\n}\r\n\r\n.about-page {\r\n  max-width: 800px;\r\n  margin: 0 auto;\r\n  padding: 3rem 2rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1.25rem;\r\n}\r\n\r\n#about-title {\r\n  color: #621317;\r\n  opacity: 0;\r\n  animation: fadeInUp 0.8s ease-out forwards;\r\n  animation-delay: 0.1s;\r\n}\r\n\r\n.about-description {\r\n  color: #3a3128;\r\n  line-height: 1.7;\r\n  opacity: 0;\r\n  animation: fadeInUp 0.8s ease-out forwards;\r\n  animation-delay: 0.3s;\r\n}\r\n\r\n.about-mission {\r\n  color: #3a3128;\r\n  line-height: 1.7;\r\n  opacity: 0;\r\n  animation: fadeInUp 0.8s ease-out forwards;\r\n  animation-delay: 0.5s;\r\n}\r\n\r\n@keyframes fadeInUp {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateY(20px);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n.home-text h1,\r\n.home-text .tagline,\r\n.home-text .description-text,\r\n.home-img {\r\n  opacity: 0;\r\n  animation: fadeInUp 0.8s ease-out forwards;\r\n}\r\n\r\n.home-text h1 {\r\n  animation-delay: 0.1s;\r\n}\r\n\r\n.home-text .tagline {\r\n  animation-delay: 0.3s;\r\n}\r\n\r\n.home-text .description-text {\r\n  animation-delay: 0.5s;\r\n}\r\n\r\n.home-img {\r\n  animation-delay: 0.2s;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/img/bisteca-crua.jpg"
/*!**********************************!*\
  !*** ./src/img/bisteca-crua.jpg ***!
  \**********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"510b893c46c80c03c35b.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/bisteca-crua.jpg?\n}");

/***/ },

/***/ "./src/about.js"
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createAboutPage: () => (/* binding */ createAboutPage)\n/* harmony export */ });\n// about.js\r\nfunction createAboutPage() {\r\n  const container = document.createElement('div');\r\n  container.classList.add('about-page');\r\n\r\n  const heading = document.createElement('h1');\r\n  heading.id = 'about-title';\r\n  heading.textContent = 'A Florentine Tradition, A Brazilian Heart';\r\n\r\n  const description = document.createElement('p');\r\n  description.classList.add('about-description');\r\n  description.textContent = `In 1962, a young Brazilian traveler fell in love with Florence — and with a plate of bistecca alla fiorentina he tasted in a small trattoria near the Arno. He stayed, learned the Florentine art of grilling over open flame, and opened The Bisteca Restaurant that same year, building its menu around two things he loved most: Florence's fire-charred steak, and a breaded filet from his own Brazilian home, layered with tomato sauce and melted cheese.`;\r\n\r\n  const mission = document.createElement('p');\r\n  mission.classList.add('about-mission');\r\n  mission.textContent = `More than sixty years later, his family still runs the kitchen. Today, having inherited his legacy, it's my wife's and my mission to carry it forward — welcoming every traveler to the best of Florentine cooking, always served with a touch of Brazil.`;\r\n\r\n  container.appendChild(heading);\r\n  container.appendChild(description);\r\n  container.appendChild(mission);\r\n\r\n  return container;\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?\n}");

/***/ },

/***/ "./src/home.js"
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHomePage: () => (/* binding */ createHomePage)\n/* harmony export */ });\n/* harmony import */ var _img_bisteca_crua_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/bisteca-crua.jpg */ \"./src/img/bisteca-crua.jpg\");\n// home.js\r\n\r\n\r\nfunction createHomePage() {\r\n  const container = document.createElement('div');\r\n  container.classList.add('home-page');\r\n\r\n  const textWrapper = document.createElement('div');\r\n  textWrapper.classList.add('home-text');\r\n\r\n  const heading = document.createElement('h1');\r\n  heading.id = 'title';\r\n  heading.textContent = 'The Bisteca Restaurant';\r\n  textWrapper.appendChild(heading);\r\n\r\n  const tagline = document.createElement('p');\r\n  tagline.classList.add('tagline');\r\n  tagline.textContent = `Florence's Finest Cut, Since 1962`;\r\n  textWrapper.appendChild(tagline);\r\n\r\n  const descriptionText = document.createElement('p');\r\n  descriptionText.classList.add('description-text');\r\n  descriptionText.textContent = `For over sixty years, travelers from every corner of the world have found their way to our door, drawn by the smell of steak grilling over open flame in the old Florentine way. At The Bisteca Restaurant, our family's recipe for the perfect bistecca alla fiorentina has been passed down, generation to generation, unchanged and unhurried — just as tradition demands.`;\r\n  textWrapper.appendChild(descriptionText);\r\n\r\n  const bisteca = document.createElement('img');\r\n  bisteca.classList.add('home-img');\r\n  bisteca.src = _img_bisteca_crua_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n  bisteca.alt = 'Raw Florence Steak';\r\n\r\n  container.appendChild(textWrapper);\r\n  container.appendChild(bisteca);\r\n\r\n  return container;\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n// index.js\r\n\r\n\r\n\r\n\r\n\r\nconst content = document.getElementById('content');\r\nconst home = document.getElementById('home');\r\nconst menu = document.getElementById('menu');\r\nconst about = document.getElementById('about');\r\n\r\ncontent.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_1__.createHomePage)());\r\n\r\nconst tabs = [\r\n  { button: home, render: _home_js__WEBPACK_IMPORTED_MODULE_1__.createHomePage },\r\n  { button: menu, render: _menu_js__WEBPACK_IMPORTED_MODULE_2__.createMenuPage },\r\n  { button: about, render: _about_js__WEBPACK_IMPORTED_MODULE_3__.createAboutPage },\r\n];\r\n\r\ntabs.forEach(tab => {\r\n  tab.button.addEventListener('click', () => {\r\n    content.innerHTML = '';\r\n    content.appendChild(tab.render());\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMenuPage: () => (/* binding */ createMenuPage)\n/* harmony export */ });\n// menu.js\r\nfunction createMenuPage() {\r\n  const container = document.createElement('div');\r\n  container.classList.add('menu-page');\r\n\r\n  const heading = document.createElement('h1');\r\n  heading.id = 'title';\r\n  heading.textContent = 'Our Menu';\r\n  container.appendChild(heading);\r\n\r\n  const menu = {\r\n    Antipasti: [\r\n      {\r\n        name: 'Bruschetta',\r\n        description:\r\n          'Grilled country bread rubbed with garlic, topped with ripe tomatoes, basil, and a drizzle of olive oil.',\r\n        price: '€9',\r\n      },\r\n      {\r\n        name: 'Burrata',\r\n        description:\r\n          'Fresh, creamy burrata served with a touch of olive oil and cracked black pepper.',\r\n        price: '€13',\r\n      },\r\n      {\r\n        name: 'Carpaccio',\r\n        description:\r\n          'Thinly sliced raw beef dressed with lemon, olive oil, arugula, and shaved Parmesan.',\r\n        price: '€15',\r\n      },\r\n    ],\r\n    Primi: [\r\n      {\r\n        name: 'Linguine allo Scoglio',\r\n        description:\r\n          'Linguine tossed with a medley of fresh seafood in a light tomato and white wine sauce.',\r\n        price: '€17',\r\n      },\r\n      {\r\n        name: 'Spaghetti Carbonara',\r\n        description:\r\n          'The classic Roman pasta — guanciale, egg, Pecorino Romano, and cracked black pepper.',\r\n        price: '€15',\r\n      },\r\n      {\r\n        name: 'Tagliatelle al Ragù',\r\n        description:\r\n          'Hand-cut egg pasta with a slow-simmered beef and tomato ragù.',\r\n        price: '€16',\r\n      },\r\n    ],\r\n    Secondi: [\r\n      {\r\n        name: 'Bistecca alla Fiorentina',\r\n        description:\r\n          'Our signature dish and the heart of The Bisteca Restaurant — a generous bone-in T-bone, grilled rare over an open flame in the old Florentine way, seasoned with nothing more than coarse salt, cracked pepper, and a finish of Tuscan olive oil. Sliced tableside, meant to be shared.',\r\n        price: '€62',\r\n      },\r\n      {\r\n        name: 'Filetto alla parmigiana',\r\n        description:\r\n          'A tender breaded filet layered with tomato sauce and melted mozzarella until golden. Despite the Italian name, this one is 100% Brazilian — a beloved classic from home that earned a permanent spot on our menu.',\r\n        price: '€20',\r\n      },\r\n      {\r\n        name: 'Ossobuco alla Milanese',\r\n        description:\r\n          'Braised veal shank, slow-cooked until tender, finished with a bright gremolata of lemon zest, garlic, and parsley.',\r\n        price: '€26',\r\n      },\r\n    ],\r\n    Dolci: [\r\n      {\r\n        name: 'Budino di latte',\r\n        description:\r\n          'A silky milk pudding topped with a delicate caramel layer.',\r\n        price: '€7',\r\n      },\r\n      {\r\n        name: 'Cassata',\r\n        description:\r\n          'A traditional Sicilian sponge cake layered with sweet ricotta and candied fruit.',\r\n        price: '€7',\r\n      },\r\n      {\r\n        name: 'Tiramisù',\r\n        description:\r\n          'Espresso-soaked ladyfingers layered with mascarpone cream and a dusting of cocoa.',\r\n        price: '€8',\r\n      },\r\n    ],\r\n  };\r\n\r\n  Object.entries(menu).forEach(([sectionName, dishes]) => {\r\n    const menuSection = document.createElement('h2');\r\n    const menuDishes = document.createElement('ul');\r\n\r\n    menuSection.classList.add('menu-section');\r\n    menuDishes.classList.add('menu-dishes');\r\n\r\n    menuSection.textContent = sectionName;\r\n\r\n    container.appendChild(menuSection);\r\n    container.appendChild(menuDishes);\r\n\r\n    dishes.forEach(({ name, description, price }) => {\r\n      const listItem = document.createElement('li');\r\n      const dishTitle = document.createElement('h3');\r\n      const dishParagraph = document.createElement('p');\r\n      const priceSection = document.createElement('span');\r\n\r\n      listItem.classList.add('list-item');\r\n      dishTitle.classList.add('dish-title');\r\n      dishParagraph.classList.add('dish-paragraph');\r\n      priceSection.classList.add('dish-price');\r\n\r\n      dishTitle.textContent = name;\r\n      dishParagraph.textContent = description;\r\n      priceSection.textContent = price;\r\n\r\n      menuDishes.appendChild(listItem);\r\n      listItem.append(dishTitle, dishParagraph, priceSection);\r\n    });\r\n  });\r\n\r\n  return container;\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	__webpack_require__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		let scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		const document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript?.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					let i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^https?:/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:|[?#].*$/g, "").replace(/\/[^/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	__webpack_require__.nc = undefined;
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;