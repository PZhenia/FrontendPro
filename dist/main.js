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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/api.js */ \"./src/js/api.js\");\n/* harmony import */ var _js_ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/ui.js */ \"./src/js/ui.js\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n\n\n\n\n\nconst postsWrapper = document.querySelector('#posts-wrapper');\nconst createPostForm = document.querySelector('#create-post-form');\nconst titleInput = document.querySelector('#title-input');\nconst bodyInput = document.querySelector('#body-input');\nasync function init() {\n  try {\n    const posts = await (0,_js_api_js__WEBPACK_IMPORTED_MODULE_0__.getPosts)();\n    posts.forEach(post => {\n      const article = (0,_js_ui_js__WEBPACK_IMPORTED_MODULE_1__.createPostElement)(post);\n      postsWrapper.appendChild(article);\n    });\n  } catch (err) {\n    console.log(err.message);\n  }\n}\ncreatePostForm.addEventListener('submit', e => {\n  e.preventDefault();\n  const title = titleInput.value.trim();\n  const body = bodyInput.value.trim();\n  if (!title || !body) {\n    return;\n  }\n  (0,_js_api_js__WEBPACK_IMPORTED_MODULE_0__.addNewPost)(title, body).then(post => {\n    const article = (0,_js_ui_js__WEBPACK_IMPORTED_MODULE_1__.createPostElement)(post);\n    postsWrapper.appendChild(article);\n    titleInput.value = '';\n    bodyInput.value = '';\n  }).catch(err => {\n    console.log(err.message);\n  });\n});\ninit();\n\n//# sourceURL=webpack://frontendpro/./src/index.js?");

/***/ }),

/***/ "./src/js/api.js":
/*!***********************!*\
  !*** ./src/js/api.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNewPost: () => (/* binding */ addNewPost),\n/* harmony export */   getComments: () => (/* binding */ getComments),\n/* harmony export */   getPosts: () => (/* binding */ getPosts)\n/* harmony export */ });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/js/config.js\");\n\nasync function getPosts() {\n  try {\n    const response = await fetch(`${_config_js__WEBPACK_IMPORTED_MODULE_0__.API_URL}${_config_js__WEBPACK_IMPORTED_MODULE_0__.GET_POSTS}`);\n    if (!response.ok) {\n      throw new Error(`Failed to get posts - ${response.statusText}`);\n    }\n    return await response.json();\n  } catch (err) {\n    console.log(err.message);\n  }\n}\nasync function getComments(postId) {\n  try {\n    const response = await fetch(`${_config_js__WEBPACK_IMPORTED_MODULE_0__.API_URL}/${postId}${_config_js__WEBPACK_IMPORTED_MODULE_0__.GET_COMMENTS}`);\n    if (!response.ok) {\n      throw new Error(`Failed to get comments - ${response.statusText}`);\n    }\n    return await response.json();\n  } catch (err) {\n    console.log(err.message);\n  }\n}\nasync function addNewPost(title, body) {\n  try {\n    const response = await fetch(_config_js__WEBPACK_IMPORTED_MODULE_0__.API_URL, {\n      method: 'POST',\n      headers: {\n        'content-type': 'application/json'\n      },\n      body: JSON.stringify({\n        title,\n        body,\n        userId: 1\n      })\n    });\n    if (!response.ok) {\n      throw new Error(`Failed to add post - ${response.statusText}`);\n    }\n    return await response.json();\n  } catch (err) {\n    console.log(err.message);\n  }\n}\n\n//# sourceURL=webpack://frontendpro/./src/js/api.js?");

/***/ }),

/***/ "./src/js/config.js":
/*!**************************!*\
  !*** ./src/js/config.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   API_URL: () => (/* binding */ API_URL),\n/* harmony export */   GET_COMMENTS: () => (/* binding */ GET_COMMENTS),\n/* harmony export */   GET_POSTS: () => (/* binding */ GET_POSTS)\n/* harmony export */ });\nconst API_URL = 'https://jsonplaceholder.typicode.com/posts';\nconst GET_POSTS = '?_limit=10';\nconst GET_COMMENTS = '/comments?_limit=2';\n\n//# sourceURL=webpack://frontendpro/./src/js/config.js?");

/***/ }),

/***/ "./src/js/ui.js":
/*!**********************!*\
  !*** ./src/js/ui.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createPostElement: () => (/* binding */ createPostElement)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/js/api.js\");\n\nfunction createPostElement(post) {\n  const article = document.createElement('article');\n  article.classList.add('post');\n  article.innerHTML = `\n    <h4>${post.title}</h4>\n    <p>${post.body}</p>\n    <button class='open-comments'>Open comments</button>\n    <div class='comments-wrapper'></div>\n    `;\n  const openComments = article.querySelector('.open-comments');\n  const commentsWrapper = article.querySelector('.comments-wrapper');\n  openComments.addEventListener('click', () => {\n    if (commentsWrapper.innerHTML === '') {\n      (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(post.id).then(comments => {\n        if (comments.length > 0) {\n          renderComments(comments, commentsWrapper);\n          openComments.innerHTML = 'Close comments';\n        } else {\n          commentsWrapper.innerHTML = '<p><i>no comments yet</i></p>';\n          openComments.innerHTML = 'Close comments';\n        }\n      }).catch(err => console.log(err.message));\n    } else {\n      openComments.innerHTML = 'Open comments';\n      commentsWrapper.innerHTML = '';\n    }\n  });\n  return article;\n}\nfunction createCommentElement(comment) {\n  const p = document.createElement('p');\n  p.classList.add('comment');\n  p.innerText = comment.body;\n  return p;\n}\nfunction renderComments(comments, commentsWrapper) {\n  commentsWrapper.innerHTML = '';\n  comments.forEach(comment => {\n    const p = createCommentElement(comment);\n    commentsWrapper.appendChild(p);\n  });\n}\n\n//# sourceURL=webpack://frontendpro/./src/js/ui.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://frontendpro/./src/scss/style.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;