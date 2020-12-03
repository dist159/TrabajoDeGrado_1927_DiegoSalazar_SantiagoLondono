function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["configuracion-ciclos-configuracion-ciclos-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/configuracion-ciclos/configuracion-ciclos.page.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/configuracion-ciclos/configuracion-ciclos.page.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppConfiguracionCiclosConfiguracionCiclosPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-button slot=\"start\" fill=\"clear\" (click)=\"back()\">\n      <ion-icon name=\"arrow-back\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"--background: #212852; height: 100%;\">\n\n\n  <form #form=\"ngForm\">\n    <ion-grid>\n      <ion-row color=\"primary\" justify-content-center class=\"ion-text-center\">\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div class=\"ion-text-center\">\n            <h3 style=\"font-family: 'moon';color: white; margin: auto;\">Crear ciclo</h3>\n          </div>\n          <div padding>\n            <ion-item>\n              <ion-label>Fecha inicial</ion-label>\n              <ion-datetime displayFormat=\"DD-MM-YYYY\" placeholder=\"Seleccionar fecha\" (ionChange)=\"onChange($event)\">\n              </ion-datetime>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\"># de pollos</ion-label>\n              <ion-input name=\"nn\" type=\"number\" ngModel required [(ngModel)]=\"numPollos\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\"># de ciclos</ion-label>\n              <ion-input name=\"nn\" type=\"number\" ngModel required [(ngModel)]=\"numCiclos\"></ion-input>\n            </ion-item>\n          </div>\n          <div padding>\n            <ion-button style=\"font-family: 'moon';color: white; margin: auto;\" size=\"large\" type=\"submit\"\n              (click)=\"confirmarCiclos()\" [disabled]=\"form.invalid\" expand=\"block\">\n              confirmar ciclos</ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-text-center\" >\n        <ion-col *ngFor=\"let item of ciclos\" class=\"ion-text-center\" align-self-center size-md=\"6\" size-lg=\"5\"\n          size-xs=\"12\">\n\n          <ion-title style=\"font-family: 'moon';color: white; margin: auto;\">\n            Ciclo: {{item.num}}\n          </ion-title>\n          <ion-item>\n            <ion-label position=\"floating\">Set point Temperatura</ion-label>\n            <ion-input name=\"x1\" type=\"number\" ngModel [(ngModel)]=\"item.setPointTEMP\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Set point Humedad (0-1)</ion-label>\n            <ion-input name=\"x2\" type=\"number\" ngModel [(ngModel)]=\"item.setPointHUM\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\"># dias</ion-label>\n            <ion-input name=\"x3\" type=\"number\" ngModel [(ngModel)]=\"item.dias\"></ion-input>\n          </ion-item>\n\n        </ion-col>\n        <ion-row padding *ngIf=\"ciclos\" class=\"ion-text-center\" style=\"width: 100%;\">\n          <ion-button style=\"font-family: 'moon';color: white;margin:auto\" class=\"ion-text-center\" size=\"large\"\n            type=\"submit\" (click)=\"crearCiclo()\" expand=\"block\">Crear ciclo</ion-button>\n        </ion-row>\n\n      </ion-row>\n    </ion-grid>\n  </form>\n  <div text-center>\n    <ion-row text-center>\n    </ion-row>\n  </div>\n\n\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/configuracion-ciclos/configuracion-ciclos-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/configuracion-ciclos/configuracion-ciclos-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: ConfiguracionCiclosPageRoutingModule */

  /***/
  function srcAppConfiguracionCiclosConfiguracionCiclosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfiguracionCiclosPageRoutingModule", function () {
      return ConfiguracionCiclosPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _configuracion_ciclos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./configuracion-ciclos.page */
    "./src/app/configuracion-ciclos/configuracion-ciclos.page.ts");

    var routes = [{
      path: '',
      component: _configuracion_ciclos_page__WEBPACK_IMPORTED_MODULE_3__["ConfiguracionCiclosPage"]
    }];

    var ConfiguracionCiclosPageRoutingModule = function ConfiguracionCiclosPageRoutingModule() {
      _classCallCheck(this, ConfiguracionCiclosPageRoutingModule);
    };

    ConfiguracionCiclosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ConfiguracionCiclosPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/configuracion-ciclos/configuracion-ciclos.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/configuracion-ciclos/configuracion-ciclos.module.ts ***!
    \*********************************************************************/

  /*! exports provided: ConfiguracionCiclosPageModule */

  /***/
  function srcAppConfiguracionCiclosConfiguracionCiclosModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfiguracionCiclosPageModule", function () {
      return ConfiguracionCiclosPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _configuracion_ciclos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./configuracion-ciclos-routing.module */
    "./src/app/configuracion-ciclos/configuracion-ciclos-routing.module.ts");
    /* harmony import */


    var _configuracion_ciclos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./configuracion-ciclos.page */
    "./src/app/configuracion-ciclos/configuracion-ciclos.page.ts");

    var ConfiguracionCiclosPageModule = function ConfiguracionCiclosPageModule() {
      _classCallCheck(this, ConfiguracionCiclosPageModule);
    };

    ConfiguracionCiclosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _configuracion_ciclos_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfiguracionCiclosPageRoutingModule"]],
      declarations: [_configuracion_ciclos_page__WEBPACK_IMPORTED_MODULE_6__["ConfiguracionCiclosPage"]]
    })], ConfiguracionCiclosPageModule);
    /***/
  },

  /***/
  "./src/app/configuracion-ciclos/configuracion-ciclos.page.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/configuracion-ciclos/configuracion-ciclos.page.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppConfiguracionCiclosConfiguracionCiclosPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZ3VyYWNpb24tY2ljbG9zL2NvbmZpZ3VyYWNpb24tY2ljbG9zLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/configuracion-ciclos/configuracion-ciclos.page.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/configuracion-ciclos/configuracion-ciclos.page.ts ***!
    \*******************************************************************/

  /*! exports provided: ConfiguracionCiclosPage */

  /***/
  function srcAppConfiguracionCiclosConfiguracionCiclosPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfiguracionCiclosPage", function () {
      return ConfiguracionCiclosPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _servicios_g_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../servicios-g.service */
    "./src/app/servicios-g.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var ConfiguracionCiclosPage = /*#__PURE__*/function () {
      function ConfiguracionCiclosPage(_Servicios, storage, navCtrl) {
        _classCallCheck(this, ConfiguracionCiclosPage);

        this._Servicios = _Servicios;
        this.storage = storage;
        this.navCtrl = navCtrl;
      }

      _createClass(ConfiguracionCiclosPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.storage.get("_idGalpon").then(function (res) {
            _this.idGalpon = res;
          });
        }
      }, {
        key: "confirmarCiclos",
        value: function confirmarCiclos() {
          this.ciclos = [];

          for (var i = 0; i < this.numCiclos; i++) {
            this.ciclos.push({
              num: i + 1,
              setPointTEMP: "",
              setPointHUM: "",
              dias: ""
            });
          }
        }
      }, {
        key: "onChange",
        value: function onChange(event) {
          console.log("aa: " + event.detail.value);
          this.fechaInicial = event.detail.value;
          this.fechaInicial = this.fechaInicial.substring(0, 10);
        }
      }, {
        key: "crearCiclo",
        value: function crearCiclo() {
          var dias = 0;
          var diaTemp = "";
          var mesTemp = "";

          var _iterator = _createForOfIteratorHelper(this.ciclos),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var item = _step.value;
              dias += item.dias;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          var tempDate = new Date(this.fechaInicial);
          tempDate.setDate(tempDate.getDate() + dias);
          console.log(tempDate.getUTCDate());

          if (tempDate.getUTCDate() < 10) {
            diaTemp = "0" + tempDate.getUTCDate();
          } else {
            diaTemp = "" + tempDate.getUTCDate();
          }

          if (tempDate.getUTCMonth() < 10) {
            mesTemp = "0" + tempDate.getUTCMonth();
          } else {
            mesTemp = "" + tempDate.getUTCMonth();
          }

          var fechafin = diaTemp + "-" + mesTemp + "-" + tempDate.getUTCFullYear();
          console.log(fechafin);
          var cicloNuevo = {
            fechaInicial: this.fechaInicial,
            numeroCiclos: this.numCiclos,
            ciclos: this.ciclos,
            numPollos: this.numPollos,
            numPollosDead: 0,
            diasTotales: dias,
            fechaFinal: fechafin
          };

          this._Servicios.CreateCicle(cicloNuevo, this.idGalpon);
        }
      }, {
        key: "back",
        value: function back() {
          this.navCtrl.back();
        }
      }, {
        key: "addDays",
        value: function addDays(date, days) {
          date.setDate(date.getDate() + days);
          console.log(date);
          return date;
        }
      }]);

      return ConfiguracionCiclosPage;
    }();

    ConfiguracionCiclosPage.ctorParameters = function () {
      return [{
        type: _servicios_g_service__WEBPACK_IMPORTED_MODULE_2__["ServiciosGService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }];
    };

    ConfiguracionCiclosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-configuracion-ciclos',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./configuracion-ciclos.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/configuracion-ciclos/configuracion-ciclos.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./configuracion-ciclos.page.scss */
      "./src/app/configuracion-ciclos/configuracion-ciclos.page.scss"))["default"]]
    })], ConfiguracionCiclosPage);
    /***/
  }
}]);
//# sourceMappingURL=configuracion-ciclos-configuracion-ciclos-module-es5.js.map