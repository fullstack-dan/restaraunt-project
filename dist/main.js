/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((module) => {

const contact = document.createElement('div')
    header = document.createElement('h1');
    header.textContent = `Get in touch!`;

    contact.appendChild(header);

    copy = document.createElement('p');
    copy.textContent = `So call me maybe!`;

    contact.appendChild(copy);

module.exports = {contact: contact};

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((module) => {

const homepage = document.createElement('div')
    header = document.createElement('h1');
    header.textContent = `Three's Eatery`;

    homepage.appendChild(header);

    copy = document.createElement('p');
    copy.textContent = `A restaurant in Atlanta, Georgia with a mouth full of stars. We've won accolades like "Best Restaurant in Atlanta, 2022" and "One of the Best Restaurants in America, 2022." And we're just getting started!`;

    homepage.appendChild(copy);

module.exports = {homepage: homepage};

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((module) => {

const menu = document.createElement('div')
    header = document.createElement('h1');
    header.textContent = `Our Menu`;

    menu.appendChild(header);

    copy = document.createElement('p');
    copy.textContent = `Food! Food food food food food!`;

    menu.appendChild(copy);

module.exports = {menu: menu};

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_contact__WEBPACK_IMPORTED_MODULE_2__);



const body = document.querySelector('body');
const content = document.querySelector('#content');
const tab_bar = document.createElement('nav');
body.insertBefore(tab_bar, document.querySelector('#content'));

content.appendChild(_home__WEBPACK_IMPORTED_MODULE_0__.homepage);

const homeTab = document.createElement('div');
homeTab.textContent = 'Home';
homeTab.page = _home__WEBPACK_IMPORTED_MODULE_0__.homepage;
const menuTab = document.createElement('div');
menuTab.textContent = 'Menu';
menuTab.page = _menu__WEBPACK_IMPORTED_MODULE_1__.menu;
const contactTab = document.createElement('div');
contactTab.textContent = 'Contact';
contactTab.page = _contact__WEBPACK_IMPORTED_MODULE_2__.contact;

const tabs = [homeTab, menuTab, contactTab];
tabs.forEach(tab => {
    tab.classList.add('tab');
    tab.addEventListener('click', () => {
        changePage(tab.page);
    })
    tab_bar.appendChild(tab);
});

function changePage(page) {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    content.appendChild(page);
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxrQkFBa0I7Ozs7Ozs7Ozs7QUNYbEI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsa0JBQWtCOzs7Ozs7Ozs7O0FDWGxCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLGtCQUFrQjs7Ozs7O1VDWGxCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOZ0M7QUFDSjtBQUNNO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiwyQ0FBUTs7QUFFNUI7QUFDQTtBQUNBLGVBQWUsMkNBQVE7QUFDdkI7QUFDQTtBQUNBLGVBQWUsdUNBQUk7QUFDbkI7QUFDQTtBQUNBLGtCQUFrQiw2Q0FBTzs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXJhdW50LXByb2plY3QvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXJhdW50LXByb2plY3QvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXJhdW50LXByb2plY3QvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXJhdW50LXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGFyYXVudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhcmF1bnQtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGFyYXVudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGFyYXVudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGFyYXVudC1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gYEdldCBpbiB0b3VjaCFgO1xuXG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgY29weSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb3B5LnRleHRDb250ZW50ID0gYFNvIGNhbGwgbWUgbWF5YmUhYDtcblxuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29weSk7XG5cbm1vZHVsZS5leHBvcnRzID0ge2NvbnRhY3Q6IGNvbnRhY3R9OyIsImNvbnN0IGhvbWVwYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IGBUaHJlZSdzIEVhdGVyeWA7XG5cbiAgICBob21lcGFnZS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgY29weSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb3B5LnRleHRDb250ZW50ID0gYEEgcmVzdGF1cmFudCBpbiBBdGxhbnRhLCBHZW9yZ2lhIHdpdGggYSBtb3V0aCBmdWxsIG9mIHN0YXJzLiBXZSd2ZSB3b24gYWNjb2xhZGVzIGxpa2UgXCJCZXN0IFJlc3RhdXJhbnQgaW4gQXRsYW50YSwgMjAyMlwiIGFuZCBcIk9uZSBvZiB0aGUgQmVzdCBSZXN0YXVyYW50cyBpbiBBbWVyaWNhLCAyMDIyLlwiIEFuZCB3ZSdyZSBqdXN0IGdldHRpbmcgc3RhcnRlZCFgO1xuXG4gICAgaG9tZXBhZ2UuYXBwZW5kQ2hpbGQoY29weSk7XG5cbm1vZHVsZS5leHBvcnRzID0ge2hvbWVwYWdlOiBob21lcGFnZX07IiwiY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBgT3VyIE1lbnVgO1xuXG4gICAgbWVudS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgY29weSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb3B5LnRleHRDb250ZW50ID0gYEZvb2QhIEZvb2QgZm9vZCBmb29kIGZvb2QgZm9vZCFgO1xuXG4gICAgbWVudS5hcHBlbmRDaGlsZChjb3B5KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7bWVudTogbWVudX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7aG9tZXBhZ2V9IGZyb20gJy4vaG9tZSc7XG5pbXBvcnQge21lbnV9IGZyb20gJy4vbWVudSc7XG5pbXBvcnQge2NvbnRhY3R9IGZyb20gJy4vY29udGFjdCc7XG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5jb25zdCB0YWJfYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG5ib2R5Lmluc2VydEJlZm9yZSh0YWJfYmFyLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpKTtcblxuY29udGVudC5hcHBlbmRDaGlsZChob21lcGFnZSk7XG5cbmNvbnN0IGhvbWVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmhvbWVUYWIudGV4dENvbnRlbnQgPSAnSG9tZSc7XG5ob21lVGFiLnBhZ2UgPSBob21lcGFnZTtcbmNvbnN0IG1lbnVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm1lbnVUYWIudGV4dENvbnRlbnQgPSAnTWVudSc7XG5tZW51VGFiLnBhZ2UgPSBtZW51O1xuY29uc3QgY29udGFjdFRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29udGFjdFRhYi50ZXh0Q29udGVudCA9ICdDb250YWN0JztcbmNvbnRhY3RUYWIucGFnZSA9IGNvbnRhY3Q7XG5cbmNvbnN0IHRhYnMgPSBbaG9tZVRhYiwgbWVudVRhYiwgY29udGFjdFRhYl07XG50YWJzLmZvckVhY2godGFiID0+IHtcbiAgICB0YWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG4gICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjaGFuZ2VQYWdlKHRhYi5wYWdlKTtcbiAgICB9KVxuICAgIHRhYl9iYXIuYXBwZW5kQ2hpbGQodGFiKTtcbn0pO1xuXG5mdW5jdGlvbiBjaGFuZ2VQYWdlKHBhZ2UpIHtcbiAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwYWdlKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=