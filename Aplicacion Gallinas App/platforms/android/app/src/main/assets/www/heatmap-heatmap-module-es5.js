function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["heatmap-heatmap-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/heatmap/heatmap.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/heatmap/heatmap.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeatmapHeatmapPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Mapa de calor galpon</ion-title>\n    <ion-button slot=\"start\" fill=\"clear\" (click)=\"back()\">\n      <ion-icon style=\"color:rgb(0, 0, 0); font-size: 25px\" name=\"arrow-round-back\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card style=\"background: rgb(29, 192, 102);border-radius: 3px; \">\n\n    <ion-row>\n      <ion-col >\n        <ion-card [ngStyle]=\"{'background': colorB_1}\">\n\n          <ion-card [ngStyle]=\"{'background': colorB_2}\">\n\n            <ion-card [ngStyle]=\"{'background': colorB_3}\">\n              <ion-card [ngStyle]=\"{'background': colorB_4}\">\n                <h1 text-center style=\"color: whitesmoke;\">1 EXT</h1>\n              </ion-card>\n            </ion-card>\n          </ion-card>\n\n        </ion-card>\n      </ion-col>\n      <ion-col>\n\n\n        <ion-card [ngStyle]=\"{'background': colorB_1}\">\n\n          <ion-card [ngStyle]=\"{'background': colorB_2}\">\n\n            <ion-card [ngStyle]=\"{'background': colorB_3}\">\n              <ion-card [ngStyle]=\"{'background': colorB_4}\">\n                <h1 text-center style=\"color: whitesmoke;\">2 EXT</h1>\n              </ion-card>\n            </ion-card>\n          </ion-card>\n\n        </ion-card>\n\n      </ion-col>\n    </ion-row>\n\n\n    <ion-card style=\"background: darkcyan;border-radius: 3px; \">\n      <ion-grid>\n        <ion-row>\n          <ion-col >\n            <ion-card [ngStyle]=\"{'background': colorC_1}\">\n\n              <ion-card [ngStyle]=\"{'background': colorC_2}\">\n    \n                <ion-card [ngStyle]=\"{'background': colorC_3}\">\n                  <ion-card [ngStyle]=\"{'background': colorC_4}\">\n                    <h1 text-center style=\"color: whitesmoke;\">1 INT</h1>\n                  </ion-card>\n                </ion-card>\n              </ion-card>\n    \n            </ion-card>\n          </ion-col>\n          <ion-col>\n\n\n            <ion-card [ngStyle]=\"{'background': colorC_1}\">\n\n              <ion-card [ngStyle]=\"{'background': colorC_2}\">\n    \n                <ion-card [ngStyle]=\"{'background': colorC_3}\">\n                  <ion-card [ngStyle]=\"{'background': colorC_4}\">\n                    <h1 text-center style=\"color: whitesmoke;\">2 INT</h1>\n                  </ion-card>\n                </ion-card>\n              </ion-card>\n    \n            </ion-card>\n\n\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n\n\n\n            <ion-card [ngStyle]=\"{'background': colorA_1}\">\n\n              <ion-card [ngStyle]=\"{'background': colorA_2}\">\n    \n                <ion-card [ngStyle]=\"{'background': colorA_3}\">\n                  <ion-card [ngStyle]=\"{'background': colorA_4}\">\n                    <h1 text-center style=\"color: whitesmoke;\">3 INT</h1>\n                  </ion-card>\n                </ion-card>\n              </ion-card>\n    \n            </ion-card>\n\n\n          </ion-col>\n          <ion-col>\n\n\n\n      \n            <ion-card [ngStyle]=\"{'background': colorA_1}\">\n\n              <ion-card [ngStyle]=\"{'background': colorA_2}\">\n    \n                <ion-card [ngStyle]=\"{'background': colorA_3}\">\n                  <ion-card [ngStyle]=\"{'background': colorA_4}\">\n                    <h1 text-center style=\"color: whitesmoke;\">4 INT</h1>\n                  </ion-card>\n                </ion-card>\n              </ion-card>\n    \n            </ion-card>\n\n\n          </ion-col>\n        </ion-row>\n\n\n\n        \n\n      </ion-grid>\n    </ion-card>\n\n  </ion-card>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/heatmap/heatmap-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/heatmap/heatmap-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: HeatmapPageRoutingModule */

  /***/
  function srcAppHeatmapHeatmapRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeatmapPageRoutingModule", function () {
      return HeatmapPageRoutingModule;
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


    var _heatmap_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./heatmap.page */
    "./src/app/heatmap/heatmap.page.ts");

    var routes = [{
      path: '',
      component: _heatmap_page__WEBPACK_IMPORTED_MODULE_3__["HeatmapPage"]
    }];

    var HeatmapPageRoutingModule = function HeatmapPageRoutingModule() {
      _classCallCheck(this, HeatmapPageRoutingModule);
    };

    HeatmapPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HeatmapPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/heatmap/heatmap.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/heatmap/heatmap.module.ts ***!
    \*******************************************/

  /*! exports provided: HeatmapPageModule */

  /***/
  function srcAppHeatmapHeatmapModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeatmapPageModule", function () {
      return HeatmapPageModule;
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


    var _heatmap_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./heatmap-routing.module */
    "./src/app/heatmap/heatmap-routing.module.ts");
    /* harmony import */


    var _heatmap_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./heatmap.page */
    "./src/app/heatmap/heatmap.page.ts");

    var HeatmapPageModule = function HeatmapPageModule() {
      _classCallCheck(this, HeatmapPageModule);
    };

    HeatmapPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _heatmap_routing_module__WEBPACK_IMPORTED_MODULE_5__["HeatmapPageRoutingModule"]],
      declarations: [_heatmap_page__WEBPACK_IMPORTED_MODULE_6__["HeatmapPage"]]
    })], HeatmapPageModule);
    /***/
  },

  /***/
  "./src/app/heatmap/heatmap.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/heatmap/heatmap.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeatmapHeatmapPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card {\n  border-radius: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhdG1hcC9DOlxcVXNlcnNcXDBkaWVnXFxEb2N1bWVudHNcXDBDb2RpZ29zXFxnYWxsaW5hc0FwcHYyXFxnYWxsaW5hc2FwcC9zcmNcXGFwcFxcaGVhdG1hcFxcaGVhdG1hcC5wYWdlLnNjc3MiLCJzcmMvYXBwL2hlYXRtYXAvaGVhdG1hcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvaGVhdG1hcC9oZWF0bWFwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICB9IiwiaW9uLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/heatmap/heatmap.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/heatmap/heatmap.page.ts ***!
    \*****************************************/

  /*! exports provided: HeatmapPage */

  /***/
  function srcAppHeatmapHeatmapPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeatmapPage", function () {
      return HeatmapPage;
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


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _servicios_g_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../servicios-g.service */
    "./src/app/servicios-g.service.ts");
    /* heatmap.page ***************************************************************/

    /*                                                                            */

    /*                        Pagina heatmap (funciones)                          */

    /*                                                                            */

    /******************************************************************************/

    /*******************************************************************************
    
        Notas:           Codigo de las funciones de la pagina heatmap. Esta pagina
                         obtiene los datos almacenados en el servidor de los sensores
                         de temperatura y los muestra con diferentes colores dado su
                         valor.
    
        Registro de Revisiones:
    
        FECHA      RESPONSABLE  REVISION
        -----------------------------------------------------------------------
        Mar 05/20  S.Londoño    Implementacion original
    
        Mar 05/20  D.Salazar    Implementacion original
    
    
    *******************************************************************************/


    var HeatmapPage = /*#__PURE__*/function () {
      function HeatmapPage(db, navCtrl, _Servicios, storage) {
        _classCallCheck(this, HeatmapPage);

        this.db = db;
        this.navCtrl = navCtrl;
        this._Servicios = _Servicios;
        this.storage = storage;
        /** Variables de los colores para los tres sensores */

        this.colorA_1 = "#ffffff";
        this.colorA_2 = "#ffffff";
        this.colorA_3 = "#ffffff";
        this.colorA_4 = "#ffffff";
        this.colorB_1 = "#ffffff";
        this.colorB_2 = "#ffffff";
        this.colorB_3 = "#ffffff";
        this.colorB_4 = "#ffffff";
        this.colorC_1 = "#ffffff";
        this.colorC_2 = "#ffffff";
        this.colorC_3 = "#ffffff";
        this.colorC_4 = "#ffffff";
      }

      _createClass(HeatmapPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.storage.get("_idGalpon").then(function (res) {
            _this.idGalpon = res;
            /** Obtiene el ultimo dato del sensor de temperatura 1*/

            _this._Servicios.getLastDataFromSensorRealTime("SensorTemp1", _this.idGalpon).subscribe(function (res) {
              res.subscribe(function (res) {
                /** Dado el valor obtenido modificara los colores de cada capa en el HTML */
                console.log("Valor: " + res.payload.val());

                if (res.payload.val() < 5) {
                  _this.colorA_1 = "#2E17EA";
                  _this.colorA_2 = "#1727EA";
                  _this.colorA_3 = "#174EEA";
                  _this.colorA_4 = "#1762EA";
                } else if (res.payload.val() < 10) {
                  _this.colorA_1 = "#179FEA";
                  _this.colorA_2 = "#17DAEA";
                  _this.colorA_3 = "#17EAD7";
                  _this.colorA_4 = "#17EAAC";
                } else if (res.payload.val() < 15) {
                  _this.colorA_1 = "#17EA7C";
                  _this.colorA_2 = "#17EA4B";
                  _this.colorA_3 = "#17EA1A";
                  _this.colorA_4 = "#34EA17";
                } else if (res.payload.val() < 20) {
                  _this.colorA_1 = "#65EA17";
                  _this.colorA_2 = "#75EA17";
                  _this.colorA_3 = "#96EA17";
                  _this.colorA_4 = "#CAEA17";
                } else if (res.payload.val() < 25) {
                  _this.colorA_1 = "#E0D63D";
                  _this.colorA_2 = "#E2C82A";
                  _this.colorA_3 = "#EBCE1B";
                  _this.colorA_4 = "#EBB51B";
                } else if (res.payload.val() >= 25) {
                  _this.colorA_1 = "#F0730F";
                  _this.colorA_2 = "#F0730F";
                  _this.colorA_3 = "#F0540F";
                  _this.colorA_4 = "#F0350F";
                }
              });
            });
            /** Obtiene el ultimo dato del sensor de temperatura 2*/


            _this._Servicios.getLastDataFromSensorRealTime("SensorTemp2", _this.idGalpon).subscribe(function (res) {
              res.subscribe(function (res) {
                console.log("Valor: " + res);
                /** Dado el valor obtenido modificara los colores de cada capa en el HTML */

                if (res.payload.val() < 5) {
                  _this.colorB_1 = "#2E17EA";
                  _this.colorB_2 = "#1727EA";
                  _this.colorB_3 = "#174EEA";
                  _this.colorB_4 = "#1762EA";
                } else if (res.payload.val() < 10) {
                  _this.colorB_1 = "#179FEA";
                  _this.colorB_2 = "#17DAEA";
                  _this.colorB_3 = "#17EAD7";
                  _this.colorB_4 = "#17EAAC";
                } else if (res.payload.val() < 15) {
                  _this.colorB_1 = "#17EA7C";
                  _this.colorB_2 = "#17EA4B";
                  _this.colorB_3 = "#17EA1A";
                  _this.colorB_4 = "#34EA17";
                } else if (res.payload.val() < 20) {
                  _this.colorB_1 = "#65EA17";
                  _this.colorB_2 = "#75EA17";
                  _this.colorB_3 = "#96EA17";
                  _this.colorB_4 = "#CAEA17";
                } else if (res.payload.val() < 25) {
                  _this.colorB_1 = "#E0D63D";
                  _this.colorB_2 = "#E2C82A";
                  _this.colorB_3 = "#EBCE1B";
                  _this.colorB_4 = "#EBB51B";
                } else if (res.payload.val() >= 25) {
                  _this.colorB_1 = "#F0730F";
                  _this.colorB_2 = "#F0730F";
                  _this.colorB_3 = "#F0540F";
                  _this.colorB_4 = "#F0350F";
                }
              });
            });
            /** Obtiene el ultimo dato del sensor de temperatura 3*/


            _this._Servicios.getLastDataFromSensorRealTime("SensorTemp3", _this.idGalpon).subscribe(function (res) {
              res.subscribe(function (res) {
                console.log("Valor: " + res);
                /** Dado el valor obtenido modificara los colores de cada capa en el HTML */

                if (res.payload.val() < 5) {
                  _this.colorC_1 = "#2E17EA";
                  _this.colorC_2 = "#1727EA";
                  _this.colorC_3 = "#174EEA";
                  _this.colorC_4 = "#1762EA";
                } else if (res.payload.val() < 10) {
                  _this.colorC_1 = "#179FEA";
                  _this.colorC_2 = "#17DAEA";
                  _this.colorC_3 = "#17EAD7";
                  _this.colorC_4 = "#17EAAC";
                } else if (res.payload.val() < 15) {
                  _this.colorC_1 = "#17EA7C";
                  _this.colorC_2 = "#17EA4B";
                  _this.colorC_3 = "#17EA1A";
                  _this.colorC_4 = "#34EA17";
                } else if (res.payload.val() < 20) {
                  _this.colorC_1 = "#65EA17";
                  _this.colorC_2 = "#75EA17";
                  _this.colorC_3 = "#96EA17";
                  _this.colorC_4 = "#CAEA17";
                } else if (res.payload.val() < 25) {
                  _this.colorC_1 = "#E0D63D";
                  _this.colorC_2 = "#E2C82A";
                  _this.colorC_3 = "#EBCE1B";
                  _this.colorC_4 = "#EBB51B";
                } else if (res.payload.val() >= 25) {
                  _this.colorC_1 = "#F0730F";
                  _this.colorC_2 = "#F0730F";
                  _this.colorC_3 = "#F0540F";
                  _this.colorC_4 = "#F0350F";
                }
              });
            });
          });
        }
        /*FN****************************************************************************
        *
        *   void back()
        *
        *   Retorna:         Nada
        *
        *   Proposito:       Navega a la pagina anterior.
        *
        *******************************************************************************/

      }, {
        key: "back",
        value: function back() {
          this.navCtrl.back();
        }
      }]);

      return HeatmapPage;
    }();

    HeatmapPage.ctorParameters = function () {
      return [{
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _servicios_g_service__WEBPACK_IMPORTED_MODULE_5__["ServiciosGService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }];
    };

    HeatmapPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-heatmap',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./heatmap.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/heatmap/heatmap.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./heatmap.page.scss */
      "./src/app/heatmap/heatmap.page.scss"))["default"]]
    })], HeatmapPage);
    /***/
  }
}]);
//# sourceMappingURL=heatmap-heatmap-module-es5.js.map