(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Modal.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Modal.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  mounted: function mounted() {},
  props: {
    header: {
      type: String,
      required: false
    },
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  data: function data() {
    return {};
  },
  methods: {
    close: function close() {
      this.$emit('close');
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
/* harmony import */ var _components_Modal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Modal.vue */ "./resources/js/components/Modal.vue");
/* harmony import */ var _services_regres_in_api_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/regres.in/api/users */ "./resources/js/services/regres.in/api/users.js");
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
  name: "HomePage",
  components: {
    Modal: _components_Modal_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      users: [{
        id: 1,
        first_name: "Miguel",
        last_name: "Vázquez",
        email: "miguel@email.com",
        image: "http://test.io/image"
      }],
      page: 1,
      currentUser: null,
      isModalActive: true
    };
  },
  mounted: function mounted() {
    this.$nextTick(this.search);
  },
  methods: {
    search: function search() {
      var _this = this;

      var _app = this;

      Object(_services_regres_in_api_users__WEBPACK_IMPORTED_MODULE_1__["fetchUsers"])({
        page: _app.page
      }).then(function (data) {
        _app.$set(_app, "users", _toConsumableArray(data.data));
      })["catch"](function (err) {
        _this.$emit("platform-error", {
          message: "Lo sentimos, intente más tarde."
        });

        alert("Lo sentimos, intente más tarde.");

        if (err && err.response) {}
      }); // .finally(_app.$forceUpdate);
    },
    goToUsersRegistered: function goToUsersRegistered() {
      this.$router.push({
        name: "profesores"
      });
    },
    showModal: function showModal(user) {
      // alert(JSON.stringify({ ...user }));
      this.$set(this, "currentUser", _objectSpread({}, user));
      this.isModalActive = true;
    },
    closeModal: function closeModal() {
      this.isModalActive = false;
      this.currentUser = null;
    },
    doRegister: function doRegister() {}
  },
  computed: {
    pages: function pages() {
      return [].concat(PAGES);
    }
  },
  watch: {
    page: function page() {
      this.search();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Modal.vue?vue&type=style&index=0&id=53ab54d2&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Modal.vue?vue&type=style&index=0&id=53ab54d2&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal[data-v-53ab54d2] {\n  display: none;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  padding-top: 100px;\n  /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4);\n  /* Black w/ opacity */\n}\n.modal.active[data-v-53ab54d2] {\n  display: block !important;\n}\n\n/* Modal Content */\n.modal-content[data-v-53ab54d2] {\n  position: relative;\n  background-color: #fefefe;\n  margin: auto;\n  padding: 0;\n  border: 1px solid #888;\n  width: 80%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -webkit-animation-name: animatetop-data-v-53ab54d2;\n  -webkit-animation-duration: 0.4s;\n  animation-name: animatetop-data-v-53ab54d2;\n  animation-duration: 0.4s;\n}\n\n/* Add Animation */\n@-webkit-keyframes animatetop-data-v-53ab54d2 {\nfrom {\n    top: -300px;\n    opacity: 0;\n}\nto {\n    top: 0;\n    opacity: 1;\n}\n}\n@keyframes animatetop-data-v-53ab54d2 {\nfrom {\n    top: -300px;\n    opacity: 0;\n}\nto {\n    top: 0;\n    opacity: 1;\n}\n}\n/* The Close Button */\n.close[data-v-53ab54d2] {\n  color: black;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n.close[data-v-53ab54d2]:hover, .close[data-v-53ab54d2]:focus {\n  color: red;\n  text-decoration: none;\n  cursor: pointer;\n}\n.modal-header[data-v-53ab54d2],\n.modal-body[data-v-53ab54d2],\n.modal-footer[data-v-53ab54d2] {\n  padding: 2px 16px;\n}\n.modal-header[data-v-53ab54d2],\n.modal-footer[data-v-53ab54d2] {\n  background-color: #3490dc;\n  color: white;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Modal.vue?vue&type=style&index=0&id=53ab54d2&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Modal.vue?vue&type=style&index=0&id=53ab54d2&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Modal.vue?vue&type=style&index=0&id=53ab54d2&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Modal.vue?vue&type=style&index=0&id=53ab54d2&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Modal.vue?vue&type=template&id=53ab54d2&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Modal.vue?vue&type=template&id=53ab54d2&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { class: ["modal", _vm.isOpen ? "active" : ""] }, [
    _c("div", { staticClass: "modal-content" }, [
      _c(
        "div",
        { staticClass: "modal-header" },
        [
          _c("span", { staticClass: "close", on: { click: _vm.close } }, [
            _vm._v("×")
          ]),
          _vm._v(" "),
          _c("template", { slot: "header" }, [
            _c("h2", [_vm._v(_vm._s(_vm.header || "Modal"))])
          ])
        ],
        2
      ),
      _vm._v(" "),
      _c("div", { staticClass: "modal-body" }, [_vm._t("default")], 2),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "modal-footer" },
        [_c("template", { slot: "footer" })],
        2
      )
    ])
  ])
}
var staticRenderFns = []
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
    {
      scopedSlots: _vm._u([
        {
          key: "default",
          fn: function(user) {
            return _c(
              "Modal",
              {
                attrs: {
                  isOpen: _vm.isModalActive,
                  user: _vm.currentUser,
                  header: "Mostrar usuario"
                },
                on: { close: _vm.closeModal }
              },
              [
                _c("div", { staticClass: "col" }, [
                  _c("img", {
                    attrs: { src: user.image, alt: "user.first_name" }
                  })
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
                          return _vm.doRegister($event)
                        }
                      }
                    },
                    [
                      _c("label", { attrs: { for: "first_name" } }, [
                        _vm._v("Nombre(s)")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        attrs: { type: "text", readonly: "" },
                        domProps: { value: user.first_name }
                      }),
                      _vm._v(" "),
                      _c("label", { attrs: { for: "first_name" } }, [
                        _vm._v("Apellido(s)")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        attrs: { type: "text", readonly: "" },
                        domProps: { value: user.last_name }
                      }),
                      _vm._v(" "),
                      _c("label", { attrs: { for: "first_name" } }, [
                        _vm._v("Correo electrónico")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        attrs: { type: "text", readonly: "" },
                        domProps: { value: user.email }
                      })
                    ]
                  )
                ])
              ]
            )
          }
        }
      ])
    },
    [
      _c("h1", [_vm._v("Usuarios desde regres.in/api/users")]),
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
      ),
      _vm._v(" "),
      _c("table", [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "tbody",
          [
            _vm.users.length
              ? _vm._l(_vm.users, function(user, key) {
                  return _c(
                    "tr",
                    {
                      key: key,
                      on: {
                        click: function($event) {
                          return _vm.showModal(user)
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
                  _c("td", { attrs: { colspan: "2" } }, [
                    _vm._v("Sin registros disponibles")
                  ])
                ])
          ],
          2
        )
      ]),
      _vm._v(" "),
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
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
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

/***/ "./resources/js/components/Modal.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Modal.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modal_vue_vue_type_template_id_53ab54d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal.vue?vue&type=template&id=53ab54d2&scoped=true& */ "./resources/js/components/Modal.vue?vue&type=template&id=53ab54d2&scoped=true&");
/* harmony import */ var _Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal.vue?vue&type=script&lang=js& */ "./resources/js/components/Modal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Modal_vue_vue_type_style_index_0_id_53ab54d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal.vue?vue&type=style&index=0&id=53ab54d2&lang=scss&scoped=true& */ "./resources/js/components/Modal.vue?vue&type=style&index=0&id=53ab54d2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Modal_vue_vue_type_template_id_53ab54d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Modal_vue_vue_type_template_id_53ab54d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "53ab54d2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Modal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Modal.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/Modal.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Modal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Modal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Modal.vue?vue&type=style&index=0&id=53ab54d2&lang=scss&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/Modal.vue?vue&type=style&index=0&id=53ab54d2&lang=scss&scoped=true& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_53ab54d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Modal.vue?vue&type=style&index=0&id=53ab54d2&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Modal.vue?vue&type=style&index=0&id=53ab54d2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_53ab54d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_53ab54d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_53ab54d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_53ab54d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_53ab54d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Modal.vue?vue&type=template&id=53ab54d2&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Modal.vue?vue&type=template&id=53ab54d2&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_53ab54d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Modal.vue?vue&type=template&id=53ab54d2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Modal.vue?vue&type=template&id=53ab54d2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_53ab54d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_53ab54d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/services/regres.in/api/users.js":
/*!******************************************************!*\
  !*** ./resources/js/services/regres.in/api/users.js ***!
  \******************************************************/
/*! exports provided: fetchUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUsers", function() { return fetchUsers; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var fetchUsers = function fetchUsers(_ref) {
  var page = _ref.page;
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("https://reqres.in/api/users", {
    params: {
      page: page
    }
  }).then(function (res) {
    return Promise.resolve(res.data);
  })["catch"](function (err) {
    return Promise.reject(err.response);
  });
};

/***/ })

}]);