(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home/TheFormUser.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Home/TheFormUser.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_api_profesores__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services/api/profesores */ "./resources/js/services/api/profesores.js");
/* harmony import */ var _event_bus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/event-bus */ "./resources/js/event-bus.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TheFormUser",
  data: function data() {
    return {
      isProgress: false
    };
  },
  props: {
    user: {
      type: Object
    }
  },
  mounted: function mounted() {},
  methods: {
    doRegister: function doRegister(user) {
      var _app = this;

      _app.isProgress = true;
      Object(_services_api_profesores__WEBPACK_IMPORTED_MODULE_0__["createProfesor"])(_objectSpread({}, user)).then(function (data) {
        alert(data.message || "Registrado exitosamente!");
      })["catch"](function (err) {
        _event_bus__WEBPACK_IMPORTED_MODULE_1__["default"].$emit("platform-error", {
          message: "Lo sentimos, intente más tarde."
        });

        if (err && err.response) {}
      })["finally"](function () {
        _app.isProgress = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home/TheSearchUser.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Home/TheSearchUser.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_regres_in_api_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services/regres.in/api/users */ "./resources/js/services/regres.in/api/users.js");
/* harmony import */ var _event_bus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/event-bus */ "./resources/js/event-bus.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TheSearchUser",
  data: function data() {
    return {
      value: null,
      isSearchLoading: false
    };
  },
  methods: {
    search: function search() {
      var _this = this;

      this.isSearchLoading = true;
      Object(_services_regres_in_api_users__WEBPACK_IMPORTED_MODULE_0__["fetchById"])({
        id: this.value
      }).then(function (data) {
        _this.$emit("user-found", _objectSpread({}, data.data));
      })["catch"](function (err) {
        if (err && err.status === 404) {
          _event_bus__WEBPACK_IMPORTED_MODULE_1__["default"].$emit("platform-error", {
            message: "Usuario no encontrado."
          });
          return;
        }

        _event_bus__WEBPACK_IMPORTED_MODULE_1__["default"].$emit("platform-error", {
          message: "Lo sentimos, intente más tarde."
        });
      })["finally"](function () {
        _this.isSearchLoading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home/TheTableUsers.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Home/TheTableUsers.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_regres_in_api_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services/regres.in/api/users */ "./resources/js/services/regres.in/api/users.js");
/* harmony import */ var _event_bus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/event-bus */ "./resources/js/event-bus.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var PAGES = [1, 2];
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TheTableUsers",
  data: function data() {
    return {
      loading: false,
      users: [],
      page: 1,
      filteredId: null
    };
  },
  mounted: function mounted() {
    this.$nextTick(this.search);
  },
  methods: {
    search: function search() {
      var _app = this;

      _app.loading = true;
      Object(_services_regres_in_api_users__WEBPACK_IMPORTED_MODULE_0__["fetchUsers"])({
        page: _app.page
      }).then(function (data) {
        _app.$set(_app, "users", _toConsumableArray(data.data));
      })["catch"](function (err) {
        _event_bus__WEBPACK_IMPORTED_MODULE_1__["default"].$emit("platform-error", {
          message: "Lo sentimos, intente más tarde."
        });

        if (err && err.response) {}
      })["finally"](function () {
        _app.loading = false;
      });
    },
    showModalUser: function showModalUser(user) {
      this.$emit("show-user", _objectSpread({}, user));
    }
  },
  computed: {
    pages: function pages() {
      return [].concat(PAGES);
    },
    usersList: function usersList() {
      var _app = this;

      if (_app.filteredId && _app.filteredId > 0) {
        return _app.users.filter(function (row) {
          return row.id == _app.filteredId;
        });
      }

      return _toConsumableArray(_app.users);
    }
  },
  watch: {
    page: function page() {
      if (this.page > 0) {
        this.search();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/HomePage.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/HomePage.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_TheFormUser_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home/TheFormUser.vue */ "./resources/js/pages/Home/TheFormUser.vue");
/* harmony import */ var _Home_TheTableUsers_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home/TheTableUsers.vue */ "./resources/js/pages/Home/TheTableUsers.vue");
/* harmony import */ var _Home_TheSearchUser_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home/TheSearchUser.vue */ "./resources/js/pages/Home/TheSearchUser.vue");
/* harmony import */ var _components_Modal_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Modal.vue */ "./resources/js/components/Modal.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "HomePage",
  components: {
    TheFormUser: _Home_TheFormUser_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    TheTableUsers: _Home_TheTableUsers_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    TheSearchUser: _Home_TheSearchUser_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Modal: _components_Modal_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      currentUser: null,
      isModalActive: false
    };
  },
  methods: {
    goToUsersRegistered: function goToUsersRegistered() {
      this.$router.push({
        name: "profesores"
      });
    },
    showUser: function showUser(user) {
      this.$set(this, "currentUser", _objectSpread({}, user));
      this.isModalActive = true;
    },
    closeModal: function closeModal() {
      this.isModalActive = false;
      this.currentUser = null;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home/TheFormUser.vue?vue&type=template&id=dbcc7b0e&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Home/TheFormUser.vue?vue&type=template&id=dbcc7b0e& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row cols-2" }, [
    _c("div", { staticClass: "col" }, [
      !!_vm.user
        ? _c("img", {
            attrs: { src: _vm.user.avatar, alt: _vm.user.first_name }
          })
        : _vm._e()
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col" }, [
      _c(
        "form",
        {
          attrs: { action: "#", method: "POST" },
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.doRegister(_vm.user)
            }
          }
        },
        [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "first_name" } }, [
              _vm._v("Nombre(s)")
            ]),
            _vm._v(" "),
            _c("input", {
              attrs: { type: "text", readonly: "" },
              domProps: { value: _vm.user ? _vm.user.first_name : "" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "last_name" } }, [
              _vm._v("Apellido(s)")
            ]),
            _vm._v(" "),
            _c("input", {
              attrs: { type: "text", readonly: "" },
              domProps: { value: _vm.user ? _vm.user.last_name : "" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "email" } }, [
              _vm._v("Correo electrónico")
            ]),
            _vm._v(" "),
            _c("input", {
              attrs: { type: "text", readonly: "" },
              domProps: { value: _vm.user ? _vm.user.email : "" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("button", { attrs: { disabled: _vm.isProgress } }, [
              _vm._v("Registrar")
            ])
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home/TheSearchUser.vue?vue&type=template&id=10ec92dd&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Home/TheSearchUser.vue?vue&type=template&id=10ec92dd& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "form",
    {
      attrs: { action: "#", method: "POST" },
      on: {
        submit: function($event) {
          $event.preventDefault()
          return _vm.search($event)
        }
      }
    },
    [
      _c("div", { staticClass: "form-group inline" }, [
        _c("label", { attrs: { for: "" } }, [_vm._v("Buscar por id")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model.number",
              value: _vm.value,
              expression: "value",
              modifiers: { number: true }
            }
          ],
          attrs: {
            type: "number",
            min: "1",
            max: "140",
            step: "1",
            inputmode: "numeric",
            required: ""
          },
          domProps: { value: _vm.value },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.value = _vm._n($event.target.value)
            },
            blur: function($event) {
              return _vm.$forceUpdate()
            }
          }
        })
      ]),
      _vm._v(" "),
      _c(
        "button",
        { attrs: { type: "submit", disabled: _vm.isSearchLoading } },
        [_vm._v("\n        Consultar\n    ")]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home/TheTableUsers.vue?vue&type=template&id=089b78a4&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Home/TheTableUsers.vue?vue&type=template&id=089b78a4& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("table", [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "tbody",
        [
          _vm.loading
            ? _c("tr", [
                _c(
                  "td",
                  { staticClass: "text-center", attrs: { colspan: "2" } },
                  [_vm._v("Cargando...")]
                )
              ])
            : _vm.usersList.length
            ? _vm._l(_vm.usersList, function(user, key) {
                return _c(
                  "tr",
                  {
                    key: key,
                    on: {
                      click: function($event) {
                        return _vm.showModalUser(user)
                      }
                    }
                  },
                  [
                    _c("td", [_vm._v(_vm._s(user.first_name))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(user.last_name))])
                  ]
                )
              })
            : _c("tr", [
                _c(
                  "td",
                  { staticClass: "text-center", attrs: { colspan: "2" } },
                  [
                    _vm._v(
                      "\n                    Sin registros disponibles\n                "
                    )
                  ]
                )
              ])
        ],
        2
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "pagination" },
      [
        _vm._v("\n        Página:\n        "),
        _vm._l(_vm.pages, function(p) {
          return _c(
            "button",
            {
              key: p,
              class: _vm.page === p ? "active" : "",
              on: {
                click: function() {
                  _vm.page = p
                }
              }
            },
            [_vm._v("\n            " + _vm._s(p) + "\n        ")]
          )
        })
      ],
      2
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "primary" }, [
      _c("tr", [
        _c("th", [_vm._v("Nombre(s)")]),
        _vm._v(" "),
        _c("th", [_vm._v("Apellidos(s)")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/HomePage.vue?vue&type=template&id=04c29797&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/HomePage.vue?vue&type=template&id=04c29797& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("h1", [_vm._v("Usuarios desde regres.in/api/users")]),
      _vm._v(" "),
      _c("the-search-user", { on: { "user-found": _vm.showUser } }),
      _vm._v(" "),
      _c("the-table-users", { on: { "show-user": _vm.showUser } }),
      _vm._v(" "),
      _c(
        "modal",
        {
          attrs: { show: _vm.isModalActive, title: "Mostrar usuario" },
          on: { close: _vm.closeModal }
        },
        [_c("the-form-user", { attrs: { user: _vm.currentUser } })],
        1
      ),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c(
        "a",
        {
          attrs: { href: "#" },
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.goToUsersRegistered($event)
            }
          }
        },
        [_vm._v("Ir a "), _c("b", [_vm._v("Usuarios registrados")])]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Home/TheFormUser.vue":
/*!*************************************************!*\
  !*** ./resources/js/pages/Home/TheFormUser.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheFormUser_vue_vue_type_template_id_dbcc7b0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheFormUser.vue?vue&type=template&id=dbcc7b0e& */ "./resources/js/pages/Home/TheFormUser.vue?vue&type=template&id=dbcc7b0e&");
/* harmony import */ var _TheFormUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheFormUser.vue?vue&type=script&lang=js& */ "./resources/js/pages/Home/TheFormUser.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TheFormUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheFormUser_vue_vue_type_template_id_dbcc7b0e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheFormUser_vue_vue_type_template_id_dbcc7b0e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Home/TheFormUser.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Home/TheFormUser.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/Home/TheFormUser.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFormUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TheFormUser.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home/TheFormUser.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFormUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Home/TheFormUser.vue?vue&type=template&id=dbcc7b0e&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/Home/TheFormUser.vue?vue&type=template&id=dbcc7b0e& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFormUser_vue_vue_type_template_id_dbcc7b0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TheFormUser.vue?vue&type=template&id=dbcc7b0e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home/TheFormUser.vue?vue&type=template&id=dbcc7b0e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFormUser_vue_vue_type_template_id_dbcc7b0e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFormUser_vue_vue_type_template_id_dbcc7b0e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/Home/TheSearchUser.vue":
/*!***************************************************!*\
  !*** ./resources/js/pages/Home/TheSearchUser.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheSearchUser_vue_vue_type_template_id_10ec92dd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheSearchUser.vue?vue&type=template&id=10ec92dd& */ "./resources/js/pages/Home/TheSearchUser.vue?vue&type=template&id=10ec92dd&");
/* harmony import */ var _TheSearchUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheSearchUser.vue?vue&type=script&lang=js& */ "./resources/js/pages/Home/TheSearchUser.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TheSearchUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheSearchUser_vue_vue_type_template_id_10ec92dd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheSearchUser_vue_vue_type_template_id_10ec92dd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Home/TheSearchUser.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Home/TheSearchUser.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/Home/TheSearchUser.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSearchUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TheSearchUser.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home/TheSearchUser.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSearchUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Home/TheSearchUser.vue?vue&type=template&id=10ec92dd&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/Home/TheSearchUser.vue?vue&type=template&id=10ec92dd& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSearchUser_vue_vue_type_template_id_10ec92dd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TheSearchUser.vue?vue&type=template&id=10ec92dd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home/TheSearchUser.vue?vue&type=template&id=10ec92dd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSearchUser_vue_vue_type_template_id_10ec92dd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSearchUser_vue_vue_type_template_id_10ec92dd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/Home/TheTableUsers.vue":
/*!***************************************************!*\
  !*** ./resources/js/pages/Home/TheTableUsers.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheTableUsers_vue_vue_type_template_id_089b78a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheTableUsers.vue?vue&type=template&id=089b78a4& */ "./resources/js/pages/Home/TheTableUsers.vue?vue&type=template&id=089b78a4&");
/* harmony import */ var _TheTableUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheTableUsers.vue?vue&type=script&lang=js& */ "./resources/js/pages/Home/TheTableUsers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TheTableUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheTableUsers_vue_vue_type_template_id_089b78a4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheTableUsers_vue_vue_type_template_id_089b78a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Home/TheTableUsers.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Home/TheTableUsers.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/Home/TheTableUsers.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheTableUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TheTableUsers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home/TheTableUsers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheTableUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Home/TheTableUsers.vue?vue&type=template&id=089b78a4&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/Home/TheTableUsers.vue?vue&type=template&id=089b78a4& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheTableUsers_vue_vue_type_template_id_089b78a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TheTableUsers.vue?vue&type=template&id=089b78a4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home/TheTableUsers.vue?vue&type=template&id=089b78a4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheTableUsers_vue_vue_type_template_id_089b78a4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheTableUsers_vue_vue_type_template_id_089b78a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/HomePage.vue":
/*!*****************************************!*\
  !*** ./resources/js/pages/HomePage.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HomePage_vue_vue_type_template_id_04c29797___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomePage.vue?vue&type=template&id=04c29797& */ "./resources/js/pages/HomePage.vue?vue&type=template&id=04c29797&");
/* harmony import */ var _HomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomePage.vue?vue&type=script&lang=js& */ "./resources/js/pages/HomePage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HomePage_vue_vue_type_template_id_04c29797___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HomePage_vue_vue_type_template_id_04c29797___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/HomePage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/HomePage.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/pages/HomePage.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./HomePage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/HomePage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/HomePage.vue?vue&type=template&id=04c29797&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/HomePage.vue?vue&type=template&id=04c29797& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_template_id_04c29797___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./HomePage.vue?vue&type=template&id=04c29797& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/HomePage.vue?vue&type=template&id=04c29797&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_template_id_04c29797___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_template_id_04c29797___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/services/api/profesores.js":
/*!*************************************************!*\
  !*** ./resources/js/services/api/profesores.js ***!
  \*************************************************/
/*! exports provided: fetchProfesores, createProfesor, deleteProfesor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProfesores", function() { return fetchProfesores; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProfesor", function() { return createProfesor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProfesor", function() { return deleteProfesor; });
var _window = window,
    axios = _window.axios;
var API_URL = Object({"NODE_ENV":"development","VUE_APP_BASE_URL":"http://localhost:8000"}).BASE_URL || "http://localhost:8000" || "";
var fetchProfesores = function fetchProfesores(_ref) {
  var page = _ref.page;
  return axios.get(API_URL + "/api/v1/profesores", {
    params: {
      page: page
    }
  }, {
    timeout: 3000
  }).then(function (res) {
    return Promise.resolve(res.data);
  })["catch"](function (err) {
    return Promise.reject(err.response);
  });
};
var createProfesor = function createProfesor(_ref2) {
  var first_name = _ref2.first_name,
      last_name = _ref2.last_name,
      email = _ref2.email;
  return axios.post(API_URL + "/api/v1/profesores", {
    first_name: first_name,
    last_name: last_name,
    email: email
  }, {
    timeout: 3000
  }).then(function (res) {
    return Promise.resolve(res.data);
  })["catch"](function (err) {
    return Promise.reject(err.response);
  });
};
var deleteProfesor = function deleteProfesor(_ref3) {
  var id = _ref3.id;
  return axios["delete"](API_URL + "/api/v1/profesores/" + id, {}, {
    timeout: 3000
  }).then(function (res) {
    return Promise.resolve(res.data);
  })["catch"](function (err) {
    return Promise.reject(err.response);
  });
};

/***/ }),

/***/ "./resources/js/services/regres.in/api/users.js":
/*!******************************************************!*\
  !*** ./resources/js/services/regres.in/api/users.js ***!
  \******************************************************/
/*! exports provided: fetchUsers, fetchById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUsers", function() { return fetchUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchById", function() { return fetchById; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var fetchUsers = function fetchUsers(_ref) {
  var page = _ref.page;
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("https://reqres.in/api/users", {
    params: {
      page: page
    }
  }, {
    timeout: 100
  }).then(function (res) {
    return Promise.resolve(res.data);
  })["catch"](function (err) {
    return Promise.reject(err.response);
  });
};
var fetchById = function fetchById(_ref2) {
  var id = _ref2.id;
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("https://reqres.in/api/users", {
    params: {
      id: id
    }
  }, {
    timeout: 100
  }).then(function (res) {
    return Promise.resolve(res.data);
  })["catch"](function (err) {
    return Promise.reject(err.response);
  });
};

/***/ })

}]);