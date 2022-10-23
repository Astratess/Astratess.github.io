/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/main.js":
/*!********************************!*\
  !*** ../src/assets/js/main.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_lock_body_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/lock-body.js */ "../src/assets/js/modules/lock-body.js");
/* harmony import */ var _modules_lock_body_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_lock_body_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_grid_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/grid-build.js */ "../src/assets/js/modules/grid-build.js");
/* harmony import */ var _modules_grid_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_grid_build_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_sound_trigger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/sound-trigger.js */ "../src/assets/js/modules/sound-trigger.js");
/* harmony import */ var _modules_sound_trigger_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_sound_trigger_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_clock_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/clock.js */ "../src/assets/js/modules/clock.js");
/* harmony import */ var _modules_clock_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_clock_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_logo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/logo.js */ "../src/assets/js/modules/logo.js");
/* harmony import */ var _modules_logo_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_logo_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_nav_trigger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/nav-trigger.js */ "../src/assets/js/modules/nav-trigger.js");
/* harmony import */ var _modules_nav_trigger_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_nav_trigger_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_nav_active_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/nav-active.js */ "../src/assets/js/modules/nav-active.js");
/* harmony import */ var _modules_nav_active_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_nav_active_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_switch_mode_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/switch-mode.js */ "../src/assets/js/modules/switch-mode.js");
/* harmony import */ var _modules_switch_mode_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_switch_mode_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modules_widget_trigger_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/widget-trigger.js */ "../src/assets/js/modules/widget-trigger.js");
/* harmony import */ var _modules_widget_trigger_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_modules_widget_trigger_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _modules_hero_img_mode_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/hero-img-mode.js */ "../src/assets/js/modules/hero-img-mode.js");
/* harmony import */ var _modules_hero_img_mode_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_modules_hero_img_mode_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _modules_project_page_trigger_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/project-page-trigger.js */ "../src/assets/js/modules/project-page-trigger.js");
/* harmony import */ var _modules_project_page_trigger_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_modules_project_page_trigger_js__WEBPACK_IMPORTED_MODULE_10__);












/***/ }),

/***/ "../src/assets/js/modules/clock.js":
/*!*****************************************!*\
  !*** ../src/assets/js/modules/clock.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (document.querySelector('.clock')) {
  var rotateCogs = function rotateCogs() {
    var position = 0;
    cogs.forEach(function (cog) {
      cog.style.transform = "rotate(".concat(rotation[position], "deg)");
      position++;
    });
  };

  var calcRotation = function calcRotation() {
    for (var i = 0; i < degrees.length; i++) {
      rotation[i] += degrees[i];
    }

    return rotation;
  };

  var rotateArrows = function rotateArrows() {
    if (seconds >= 360) {
      seconds = 0;
      minutes += 6;
    }

    if (minutes >= 360) {
      minutes = 0;
      hours += 30;
    }

    seconds += 6;
    secondsRotate += 6;
    secondsArrow.style.transform = "rotate(".concat(secondsRotate, "deg)");
    minutesArrow.style.transform = "rotate(".concat(minutes, "deg)");
    hoursArrow.style.transform = "rotate(".concat(hours, "deg)");
  };

  var secondsArrow = document.querySelector('.arrow-seconds');
  var minutesArrow = document.querySelector('.arrow-long');
  var hoursArrow = document.querySelector('.arrow-short');
  var date = new Date();
  var seconds = date.getSeconds() * 6;
  var secondsRotate = date.getSeconds() * 6;
  var minutes = date.getMinutes() * 6;
  var hours = date.getHours() % 12 * 30;
  var cogs = document.querySelectorAll('.cog');
  var degrees = [45, -90, 25.71, -40, -60, -30, 24, -40, 20];
  var rotation = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  rotateArrows();
  setInterval(function () {
    calcRotation();
    rotateCogs();
    rotateArrows();
  }, 1000);
  setTimeout(function () {
    cogs.forEach(function (cog) {
      cog.classList.add('clock-transition');
    });
    secondsArrow.classList.add('clock-transition');
    minutesArrow.classList.add('clock-transition');
    hoursArrow.classList.add('clock-transition');
  }, 1000);
}

/***/ }),

/***/ "../src/assets/js/modules/grid-build.js":
/*!**********************************************!*\
  !*** ../src/assets/js/modules/grid-build.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (document.querySelector('.widgets')) {
  var widgets = document.querySelectorAll('.widget');
  var gridCols = getComputedStyle(document.querySelector('.widgets')).gridTemplateColumns.split(' ');
  var row = 1;
  var col = 1;
  widgets.forEach(function (widget) {
    widget.style.gridColumn = "".concat(col);
    widget.style.gridRow = "".concat(row);
    col += 2;

    if (col > gridCols.length) {
      col = col - gridCols.length;
      row++;
    }
  });
}

/***/ }),

/***/ "../src/assets/js/modules/hero-img-mode.js":
/*!*************************************************!*\
  !*** ../src/assets/js/modules/hero-img-mode.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$('.btn-moon').on('click', function (event) {
  $('.hero__image').toggleClass('img-light-mode');
});
var mode = localStorage.getItem('mode');

if (mode == 'light') {
  $('.hero__image').toggleClass('img-light-mode');
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "../src/assets/js/modules/lock-body.js":
/*!*********************************************!*\
  !*** ../src/assets/js/modules/lock-body.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.body.classList.add('is-locked');

/***/ }),

/***/ "../src/assets/js/modules/logo.js":
/*!****************************************!*\
  !*** ../src/assets/js/modules/logo.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var scrollPosition = window.scrollY;
var logoA = document.getElementById('logo-a');
var logo = document.getElementById('logo');
window.addEventListener('scroll', function () {
  scrollPosition = window.scrollY;

  if (scrollPosition >= 300 && window.innerWidth > 1023) {
    logo.style.top = "1rem";
    logo.style.left = "6rem";
    logo.style.animation = '4s relocate 1s forwards';
    logo.classList.add('logo');
    logoA.classList.add('logo-a');
    logoA.href = '#hero';
  } else if (scrollPosition == 0 && window.innerWidth > 1023) {
    logo.style.top = "90%";
    logo.style.left = "96%";
    logo.style.transform = 'translateX(20rem)';
    setTimeout(function () {
      logo.style.transform = '';
      logo.style.animation = '2s fade forwards';
      logo.style.top = "-10%";
      logo.style.left = "6rem";
      logo.classList.remove('logo');
      logoA.classList.remove('logo-a');
      logoA.href = 'index.html';
    }, 1000);
  }
});

/***/ }),

/***/ "../src/assets/js/modules/nav-active.js":
/*!**********************************************!*\
  !*** ../src/assets/js/modules/nav-active.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var currentLocation = location.pathname.split("/").pop();
$('.nav a[href="' + currentLocation + '"]').parent().addClass('is-active').siblings().removeClass('is-active');
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "../src/assets/js/modules/nav-trigger.js":
/*!***********************************************!*\
  !*** ../src/assets/js/modules/nav-trigger.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$('.menu').on('click', function (event) {
  event.preventDefault();
  var $this = $(this);
  var $target = $($this.attr('href'));
  $this.children(":first").toggleClass("is-active");
  $target.toggleClass('is-active');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "../src/assets/js/modules/project-page-trigger.js":
/*!********************************************************!*\
  !*** ../src/assets/js/modules/project-page-trigger.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$('.page').on('click', function (event) {
  $(this).toggleClass('is-active');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "../src/assets/js/modules/sound-trigger.js":
/*!*************************************************!*\
  !*** ../src/assets/js/modules/sound-trigger.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var audioTrigger = document.querySelector('.audio-trigger');
playerButton = document.querySelector('.socials__btn-play');
audio = document.querySelector('audio');
audio.volume = 0.1;

function toggleAudio() {
  if (audio.paused) {
    audio.play();
    playerButton.classList.add('is-active');
  } else {
    audio.pause();
    playerButton.classList.remove('is-active');
  }
}

audioTrigger.addEventListener('click', toggleAudio);

/***/ }),

/***/ "../src/assets/js/modules/switch-mode.js":
/*!***********************************************!*\
  !*** ../src/assets/js/modules/switch-mode.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var modeTrigger = document.querySelector('.btn-moon');
heroImg = document.querySelector('.hero__image');
var mode = localStorage.getItem('mode');

if (mode == 'light') {
  document.body.classList.add('light-mode');
}

modeTrigger.addEventListener('click', function () {
  document.body.classList.toggle('light-mode');

  if (document.body.classList.contains('light-mode')) {
    mode = 'light';
    localStorage.setItem('mode', mode);
  } else {
    mode = 'dark';
    localStorage.setItem('mode', mode);
  }
});

/***/ }),

/***/ "../src/assets/js/modules/widget-trigger.js":
/*!**************************************************!*\
  !*** ../src/assets/js/modules/widget-trigger.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var widgets = document.querySelectorAll('.widget__head');
widgets.forEach(function (widget) {
  widget.addEventListener('click', function () {
    openWidget(widget);
  });
});

function openWidget(widget) {
  if (window.innerWidth <= 812) {
    widget.parentNode.parentNode.classList.toggle('is-active');
    $(widget).parent().siblings().toggle(400);
  } else {
    var centerX = window.innerWidth / 2;
    var centerY = window.innerHeight / 2;
    var origX = getOffset(widget.parentNode.parentNode).left;
    var origY = getOffset(widget.parentNode.parentNode).top;
    var endX = Math.floor(centerX - origX - widget.offsetWidth / 2);
    var endY = Math.floor(centerY - origY - widget.offsetHeight / 2);
    widget.parentNode.parentNode.style.transform = "translate(".concat(endX - centerX / 3, "px, ").concat(endY, "px)");
    widget.parentNode.parentNode.classList.toggle('is-active');
    $('.modal').toggleClass('is-active');
    document.body.classList.toggle('is-locked');
  }
}

$('.modal').on('click', function (event) {
  $(this).removeClass('is-active');
  $('.widget.is-active').css('transform', "translate(0, 0)");
  $('.widget.is-active').removeClass('is-active');
  document.body.classList.toggle('is-locked');
});

function getOffset(el) {
  var rect = el.getBoundingClientRect();
  return {
    left: rect.left,
    top: rect.top
  };
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map