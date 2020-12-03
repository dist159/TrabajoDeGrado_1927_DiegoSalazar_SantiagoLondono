function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title style=\"font-family: 'moon';\">\n      Gallinas App\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"openEnd()\">\n        <ion-icon style=\"color: rgb(126, 81, 81);\" slot=\"icon-only\" name=\"menu\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<!-- -----------------------------------MENU ---------------------------------->\n<ion-menu side=\"start\" menuId=\"custom\" class=\"my-custom-menu\" type=\"overlay\">\n  <ion-header>\n    <ion-toolbar>\n      <ion-item style=\"border: 3px solid rgb(134, 83, 83)(139, 92, 92) !important;--background:black\">\n\n        <ion-grid class=\"grida\" style=\"width: 100%; flex-direction: column\">\n          <ion-row>\n            <div class=\"ion-text-center\" style=\"width: 100%; flex-direction: column\">\n              <ion-title *ngIf=\"UsuarioLocal\" style=\"color: white;\">{{UsuarioLocal.nombre}} {{UsuarioLocal.apellido}}\n              </ion-title>\n            </div>\n          </ion-row>\n\n        </ion-grid>\n      </ion-item>\n\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n\n      <ion-item (click)=\"control()\">\n        <ion-icon name=\"flash\" slot=\"start\"></ion-icon>\n        <ion-label>Control Galpon</ion-label>\n      </ion-item>\n\n      <ion-item (click)=\"openHeatMap()\">\n        <ion-icon name=\"map\" slot=\"start\"></ion-icon>\n        <ion-label>Mapa de calor</ion-label>\n      </ion-item>\n\n      <ion-item (click)=\"configurarCiclo()\">\n        <ion-icon name=\"nutrition\" slot=\"start\"></ion-icon>\n        <ion-label>Configurar Ciclo</ion-label>\n      </ion-item>\n\n      <ion-item (click)=\"alertas()\">\n        <ion-icon name=\"warning\" slot=\"start\"></ion-icon>\n        <ion-label>Alertas</ion-label>\n      </ion-item>\n\n      <ion-item (click)=\"config()\">\n        <ion-icon name=\"settings\" slot=\"start\"></ion-icon>\n        <ion-label>Configuración</ion-label>\n      </ion-item>\n\n      <ion-item (click)=\"ayuda()\">\n        <ion-icon name=\"help\" slot=\"start\"></ion-icon>\n        <ion-label>Ayuda</ion-label>\n      </ion-item>\n\n      <ion-item (click)=\"cerrar()\">\n        <ion-icon name=\"log-out\" slot=\"start\"></ion-icon>\n        <ion-label style=\"font-family: 'labase3'\">Cerrar Sesión</ion-label>\n      </ion-item>\n      <div padding style=\"background: #ffffff; margin-top: 1%;\">\n\n\n\n      </div>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n<ion-router-outlet main></ion-router-outlet>\n\n\n<ion-content style=\"--background: #212852; height: 100%;\">\n\n  <ion-grid>\n    <ion-row style=\"margin:auto\">\n\n      <ion-col>\n        <ion-card\n          style=\"border: 3px solid #3A7785; background: #212852; margin-top: 10%;margin-bottom: 0%;margin-left: auto;margin-right: auto; width: 70%;\">\n          <ion-row style=\" margin-top: 10%;margin-bottom: 0%;margin-left: auto;margin-right: auto;\"\n            class=\"ion-text-center\">\n            <h1 class=\"ion-text-center\" style=\"font-family: 'moon';color: white; margin: auto; margin-left: 25px;margin-right: 25px;\"> Estado de operacion\n            </h1>\n          </ion-row>\n          <ion-row style=\" margin: auto;\">\n            <ion-button *ngIf=\"conexion\"\n              style=\"--background: #50D2C2; margin-top: 10%;margin-bottom: 10%;margin-left: auto;margin-right: auto;\">\n              <h1 style=\"font-family: 'moon_bold';color: white;  margin: auto; \">Conectado</h1>\n            </ion-button>\n            <ion-button *ngIf=\"!conexion\"\n              style=\"--background: #db1540; margin-top: 10%;margin-bottom: 10%;margin-left: auto;margin-right: auto;\">\n              <h1 style=\"font-family: 'moon_bold';color: white;  margin: auto; \">Sin Conexion</h1>\n            </ion-button>\n          </ion-row>\n        </ion-card>\n<!--\n        <ion-row style=\"min-width: 300px;\">\n          <ion-card style=\"background: #3A7785; margin:auto;margin-top: 15px; \">\n\n            <ion-row>\n              <ion-col>\n                <ion-card\n                  style=\" background: #212852; margin-top: 10%;margin-bottom: 0%;margin-left: auto;margin-right: auto; width: 90%; height: 40px;\">\n                  <div style=\"font-family: 'moon';color: white; margin: auto;text-align: center;\"> Hum 52.5%</div>\n\n                </ion-card>\n              </ion-col>\n              <ion-col>\n                <ion-card\n                  style=\" background: #212852; margin-top: 10%;margin-bottom: 0%;margin-left: auto;margin-right: auto; width: 90%; height: 40px;\">\n\n                  <div style=\"font-family: 'moon';color: white; margin: auto;text-align: center;\"> Press 0%</div>\n                </ion-card>\n              </ion-col>\n              <ion-col>\n                <ion-card\n                  style=\" background: #212852; margin-top: 10%;margin-bottom: 0%;margin-left: auto;margin-right: auto; width: 90%; height: 40px;\">\n                  <div style=\"font-family: 'moon';color: white; margin: auto;text-align: center;\"> Co2   0.0</div>\n                </ion-card>\n              </ion-col>\n              <ion-col>\n                <ion-card\n                  style=\" background: #212852; margin-top: 10%;margin-bottom: 0%;margin-left: auto;margin-right: auto; width: 90%; height: 40px;\">\n                  <div style=\"font-family: 'moon';color: white; margin: auto; text-align: center;\"> Amo   0.0</div>\n                </ion-card>\n              </ion-col>\n            </ion-row>\n          </ion-card>\n        </ion-row>\n-->\n\n         <ion-row style=\"min-width: 300px;\">\n          <ion-card style=\"background: #3A7785; margin:auto;margin-top: 15px; \">\n\n            <ion-row>\n              <ion-col>\n                <ion-card\n                  style=\" background: #212852; margin-top: 10%;margin-bottom: 0%;margin-left: auto;margin-right: auto; width: 90%; height: 40px;\">\n                  <div style=\"font-family: 'moon';color: white; margin: auto;text-align: center;\"> Hum 52.5%</div>\n\n                </ion-card>\n              </ion-col>\n              <ion-col>\n                <ion-card\n                  style=\" background: #212852; margin-top: 10%;margin-bottom: 0%;margin-left: auto;margin-right: auto; width: 90%; height: 40px;\">\n\n                  <div style=\"font-family: 'moon';color: white; margin: auto;text-align: center;\"> Temp 29.91°C</div>\n                </ion-card>\n              </ion-col>\n             \n            </ion-row>\n          </ion-card>\n        </ion-row>\n      </ion-col>\n\n\n\n      <ion-col>\n\n\n\n        <ion-card\n          style=\"border: 3px solid #3A7785; background: #212852; margin-top: 10%;margin-bottom: 0%;margin-left: auto;margin-right: auto; width: 80%; margin-bottom: 15px;\">\n          <ion-row>\n            <ion-col>\n              <ion-text class=\"ion-text-center\" style=\"color: azure;\">\n                <h1>Flujo de aire </h1>\n              </ion-text>\n            </ion-col>\n            <ion-col *ngIf=\"FlujodeAire\">\n              <ion-text class=\"ion-text-center\" style=\"color: azure; \">\n                <h1 style=\"color: #50D2C2;margin-top: 35px;\">ACTIVO</h1>\n              </ion-text>\n            </ion-col>\n            <ion-col *ngIf=\"!FlujodeAire\">\n              <ion-text class=\"ion-text-center\" style=\"color: azure;\">\n                <h1 style=\"color: #cfdad8;margin-top: 35px;\">Desactivado</h1>\n              </ion-text>\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row style=\"margin-top: -10px;\">\n            <ion-col class=\"ion-text-center\" >\n              <img color=\"light\" style=\"margin:auto ; width: 50px; margin-top: 20px;\" src=\"../../assets/imagenes/temperature-2-xxl.png\">\n            </ion-col>\n\n            <ion-col class=\"ion-text-center\">\n              <h1 style=\"font-family: 'moon';margin:auto ;margin-top: 20%;margin-bottom: 20%;color: white;\">\n                {{TemperaturaPromedioP}}°C</h1>\n            </ion-col>\n\n            <ion-col class=\"ion-text-center\">\n              <h1 style=\"font-family: 'moon';margin:auto ;margin-top: 20%;margin-bottom: 20%;color: white;\">Vel. 1</h1>\n\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col class=\"ion-text-center\">\n              <ion-button style=\"margin:auto ;--background: #50D2C2;\">\n                <ion-input type=\"number\" style=\"width: 0px;\" (input)=\"setpointInput($event)\"></ion-input>\n                <ion-icon name=\"cog-outline\"></ion-icon>\n              </ion-button>\n            </ion-col>\n            <ion-col>\n              <h1 class=\"ion-text-center\" style=\"font-family: 'moon';margin:auto ;color: white; font-size: 18px;\">\n                Setpoint\n                T: </h1>\n            </ion-col>\n            <ion-col>\n              <h1 class=\"ion-text-center\" style=\"font-family: 'moon';margin:auto ;color: white;\"> 32°C</h1>\n            </ion-col>\n          </ion-row>\n          <ion-row style=\"margin-bottom: 15px;\">\n            <ion-col class=\"ion-text-center\">\n              <ion-button style=\"margin:auto ;--background: #50D2C2;\">\n                <ion-input type=\"number\" style=\"width: 0px;\" (input)=\"setpointInput($event)\"></ion-input>\n                <ion-icon name=\"cog-outline\"></ion-icon>\n              </ion-button>\n            </ion-col>\n            <ion-col>\n              <h1 class=\"ion-text-center\" style=\"font-family: 'moon';margin:auto ;color: white; font-size: 18px;\">\n                Setpoint\n                H: </h1>\n            </ion-col>\n            <ion-col>\n              <h1 class=\"ion-text-center\" style=\"font-family: 'moon';margin:auto ;color: white;\"> 70%</h1>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-bottom: 20px;\">\n      <h1  style=\"font-family: 'moon';margin:auto ;color: white; margin-top: 30px; letter-spacing: 4px;\"> SENSORES</h1>\n      <ion-card style=\"border: 3px solid #3A7785; background: #212852; margin-top: 10%;\n    margin-bottom: 0%;margin-left: auto;margin-right: auto; width: 80%;\">\n\n        <ion-row class=\"ion-text-center\">\n          <ion-col class=\"ion-text-center\">\n            <circle-progress  [toFixed]=\"2\" [percent]=\"temperatura\" [radius]=\"50\" [outerStrokeWidth]=\"10\" [innerStrokeWidth]=\"10\"\n              [outerStrokeColor]=\"'#1ef2b2'\" [innerStrokeColor]=\"'#3A7785'\" [animation]=\"true\" [animationDuration]=\"400\"\n              [subtitle]=\"'Temperatura S1'\" [units]=\"'°C'\" [titleColor]=\"'#ffffff'\" [outerStrokeGradient]=\"false\"\n              [space]=\"-10\" [outerStrokeLinecap]=\"'square'\" [unitsColor]=\"'#ffffff'\"></circle-progress>\n          </ion-col>\n          <ion-col class=\"ion-text-center\">\n            <circle-progress [toFixed]=\"2\" [percent]=\"humedad\" [radius]=\"50\" [outerStrokeWidth]=\"10\" [innerStrokeWidth]=\"10\"\n              [outerStrokeColor]=\"'#2abcf0'\" [innerStrokeColor]=\"'#3A7785'\" [animation]=\"true\" [animationDuration]=\"400\"\n              [subtitle]=\"'Humedad S1'\" [unitsColor]=\"'#ffffff'\" [units]=\"'%'\" [titleColor]=\"'#ffffff'\" [space]=\"-10\"\n              [outerStrokeLinecap]=\"'square'\"></circle-progress>\n          </ion-col>\n        </ion-row>\n\n        <ion-row class=\"ion-text-center\">\n          <ion-col class=\"ion-text-center\">\n            <circle-progress [toFixed]=\"2\" [percent]=\"temperatura2\" [radius]=\"50\" [outerStrokeWidth]=\"10\" [innerStrokeWidth]=\"10\"\n              [outerStrokeColor]=\"'#1ef2b2'\" [innerStrokeColor]=\"'#3A7785'\" [animation]=\"true\" [animationDuration]=\"400\"\n              [subtitle]=\"'Temperatura S2'\" [units]=\"'°C'\" [titleColor]=\"'#ffffff'\" [outerStrokeGradient]=\"false\"\n              [space]=\"-10\" [outerStrokeLinecap]=\"'square'\" [unitsColor]=\"'#ffffff'\"></circle-progress>\n          </ion-col>\n          <ion-col class=\"ion-text-center\">\n            <circle-progress [toFixed]=\"2\"[percent]=\"humedad2\" [radius]=\"50\" [outerStrokeWidth]=\"10\" [innerStrokeWidth]=\"10\"\n              [outerStrokeColor]=\"'#2abcf0'\" [innerStrokeColor]=\"'#3A7785'\" [animation]=\"true\" [animationDuration]=\"400\"\n              [subtitle]=\"'Humedad S2'\" [unitsColor]=\"'#ffffff'\" [units]=\"'%'\" [titleColor]=\"'#ffffff'\" [space]=\"-10\"\n              [outerStrokeLinecap]=\"'square'\"></circle-progress>\n          </ion-col>\n        </ion-row>\n\n        <ion-row class=\"ion-text-center\">\n          <ion-col class=\"ion-text-center\">\n            <circle-progress [toFixed]=\"2\" [percent]=\"temperatura3\" [radius]=\"50\" [outerStrokeWidth]=\"10\" [innerStrokeWidth]=\"10\"\n              [outerStrokeColor]=\"'#1ef2b2'\" [innerStrokeColor]=\"'#3A7785'\" [animation]=\"true\" [animationDuration]=\"400\"\n              [subtitle]=\"'Temperatura S3'\" [units]=\"'°C'\" [titleColor]=\"'#ffffff'\" [outerStrokeGradient]=\"false\"\n              [space]=\"-10\" [outerStrokeLinecap]=\"'square'\" [unitsColor]=\"'#ffffff'\"></circle-progress>\n          </ion-col>\n          <ion-col class=\"ion-text-center\">\n            <circle-progress [toFixed]=\"2\" [percent]=\"humedad3\" [radius]=\"50\" [outerStrokeWidth]=\"10\" [innerStrokeWidth]=\"10\"\n              [outerStrokeColor]=\"'#2abcf0'\" [innerStrokeColor]=\"'#3A7785'\" [animation]=\"true\" [animationDuration]=\"400\"\n              [subtitle]=\"'Humedad S3'\" [unitsColor]=\"'#ffffff'\" [units]=\"'%'\" [titleColor]=\"'#ffffff'\" [space]=\"-10\"\n              [outerStrokeLinecap]=\"'square'\"></circle-progress>\n          </ion-col>\n        </ion-row>\n\n      </ion-card>\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/admin/admin-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/admin/admin-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: AdminPageRoutingModule */

  /***/
  function srcAppAdminAdminRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminPageRoutingModule", function () {
      return AdminPageRoutingModule;
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


    var _admin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./admin.page */
    "./src/app/admin/admin.page.ts");

    var routes = [{
      path: '',
      component: _admin_page__WEBPACK_IMPORTED_MODULE_3__["AdminPage"]
    }];

    var AdminPageRoutingModule = function AdminPageRoutingModule() {
      _classCallCheck(this, AdminPageRoutingModule);
    };

    AdminPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AdminPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/admin/admin.module.ts":
  /*!***************************************!*\
    !*** ./src/app/admin/admin.module.ts ***!
    \***************************************/

  /*! exports provided: AdminPageModule */

  /***/
  function srcAppAdminAdminModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminPageModule", function () {
      return AdminPageModule;
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


    var _admin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./admin-routing.module */
    "./src/app/admin/admin-routing.module.ts");
    /* harmony import */


    var _admin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./admin.page */
    "./src/app/admin/admin.page.ts");
    /* harmony import */


    var ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-circle-progress */
    "./node_modules/ng-circle-progress/__ivy_ngcc__/fesm2015/ng-circle-progress.js");

    var AdminPageModule = function AdminPageModule() {
      _classCallCheck(this, AdminPageModule);
    };

    AdminPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminPageRoutingModule"], ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__["NgCircleProgressModule"]],
      declarations: [_admin_page__WEBPACK_IMPORTED_MODULE_6__["AdminPage"]]
    })], AdminPageModule);
    /***/
  },

  /***/
  "./src/app/admin/admin.page.scss":
  /*!***************************************!*\
    !*** ./src/app/admin/admin.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(https://fonts.googleapis.com/css?family=Lato:700);\n.circle {\n  position: relative;\n  width: 10vh;\n  height: 10vh;\n  background: linear-gradient(#33ccff, #ff0066);\n  border-radius: 50%;\n  -webkit-animation: animate 0.5s linear infinite;\n          animation: animate 0.5s linear infinite;\n}\n@-webkit-keyframes animate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes animate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\nion-grid {\n  --ion-grid-padding:0px;\n}\n.circle:after {\n  content: \"\";\n  position: absolute;\n  top: 10%;\n  right: 10%;\n  bottom: 10%;\n  left: 10%;\n  border-radius: 50%;\n  background-color: #212852;\n}\n.circle span:nth-child(1) {\n  -webkit-filter: blur(5px);\n          filter: blur(5px);\n}\n.circle span:nth-child(2) {\n  -webkit-filter: blur(5px);\n          filter: blur(5px);\n}\n.circle span:nth-child(3) {\n  -webkit-filter: blur(5px);\n          filter: blur(5px);\n}\n.circle span:nth-child(4) {\n  -webkit-filter: blur(5px);\n          filter: blur(5px);\n}\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\nhtml,\nbody {\n  background: #ecf0f1;\n  color: #444;\n  font-family: \"moon\";\n  font-size: 16px;\n  padding: 10px;\n}\n.set-size {\n  font-size: 10em;\n}\n.charts-container:after {\n  clear: both;\n  content: \"\";\n  display: table;\n}\n.pie-wrapper {\n  height: 10em;\n  width: 10em;\n  float: left;\n  margin: 15px;\n  position: relative;\n}\n.pie-wrapper:nth-child(3n+1) {\n  clear: both;\n}\n.pie-wrapper .pie {\n  height: 100%;\n  width: 100%;\n  clip: rect(0, 10em, 10em, 5em);\n  left: 0;\n  position: absolute;\n  top: 0;\n}\n.pie-wrapper .pie .half-circle {\n  height: 100%;\n  width: 100%;\n  border: 1em solid #3498db;\n  border-radius: 50%;\n  clip: rect(0, 5em, 10em, 0);\n  left: 0;\n  position: absolute;\n  top: 0;\n}\n.pie-wrapper .label {\n  background: #34495e;\n  border-radius: 50%;\n  bottom: 4em;\n  color: #ecf0f1;\n  cursor: default;\n  display: block;\n  font-size: 2.5em;\n  left: 4em;\n  line-height: 28em;\n  position: absolute;\n  right: 4em;\n  text-align: center;\n  top: 4em;\n}\n.pie-wrapper .label .smaller {\n  color: #bdc3c7;\n  font-size: 0.45em;\n  padding-bottom: 20px;\n  vertical-align: super;\n}\n.pie-wrapper .shadow {\n  height: 100%;\n  width: 100%;\n  border: 1em solid #bdc3c7;\n  border-radius: 50%;\n}\n.pie-wrapper.style-2 .label {\n  background: none;\n  color: #7f8c8d;\n}\n.pie-wrapper.style-2 .label .smaller {\n  color: #bdc3c7;\n}\n.pie-wrapper.progress-30 .pie .half-circle {\n  border-color: #3498db;\n}\n.pie-wrapper.progress-30 .pie .left-side {\n  transform: rotate(108deg);\n}\n.pie-wrapper.progress-30 .pie .right-side {\n  display: none;\n}\n.pie-wrapper.progress-60 .pie {\n  clip: rect(auto, auto, auto, auto);\n}\n.pie-wrapper.progress-60 .pie .half-circle {\n  border-color: #9b59b6;\n}\n.pie-wrapper.progress-60 .pie .left-side {\n  transform: rotate(216deg);\n}\n.pie-wrapper.progress-60 .pie .right-side {\n  transform: rotate(180deg);\n}\n.pie-wrapper.progress-90 .pie {\n  clip: rect(auto, auto, auto, auto);\n}\n.pie-wrapper.progress-90 .pie .half-circle {\n  border-color: #e67e22;\n}\n.pie-wrapper.progress-90 .pie .left-side {\n  transform: rotate(324deg);\n}\n.pie-wrapper.progress-90 .pie .right-side {\n  transform: rotate(180deg);\n}\n.pie-wrapper.progress-45 .pie .half-circle {\n  border-color: #1abc9c;\n}\n.pie-wrapper.progress-45 .pie .left-side {\n  transform: rotate(162deg);\n}\n.pie-wrapper.progress-45 .pie .right-side {\n  display: none;\n}\n.pie-wrapper.progress-75 .pie {\n  clip: rect(auto, auto, auto, auto);\n}\n.pie-wrapper.progress-75 .pie .half-circle {\n  border-color: #8e44ad;\n}\n.pie-wrapper.progress-75 .pie .left-side {\n  transform: rotate(270deg);\n}\n.pie-wrapper.progress-75 .pie .right-side {\n  transform: rotate(180deg);\n}\n.pie-wrapper.progress-95 .pie {\n  clip: rect(auto, auto, auto, auto);\n}\n.pie-wrapper.progress-95 .pie .half-circle {\n  border-color: #e74c3c;\n}\n.pie-wrapper.progress-95 .pie .left-side {\n  transform: rotate(342deg);\n}\n.pie-wrapper.progress-95 .pie .right-side {\n  transform: rotate(180deg);\n}\n.pie-wrapper--solid {\n  border-radius: 50%;\n  overflow: hidden;\n}\n.pie-wrapper--solid:before {\n  border-radius: 0 100% 100% 0/50%;\n  content: \"\";\n  display: block;\n  height: 100%;\n  margin-left: 50%;\n  transform-origin: left;\n}\n.pie-wrapper--solid .label {\n  background: transparent;\n}\n.pie-wrapper--solid.progress-65 {\n  background: linear-gradient(to right, #e67e22 50%, #34495e 50%);\n}\n.pie-wrapper--solid.progress-65:before {\n  background: #e67e22;\n  transform: rotate(126deg);\n}\n.pie-wrapper--solid.progress-25 {\n  background: linear-gradient(to right, #9b59b6 50%, #34495e 50%);\n}\n.pie-wrapper--solid.progress-25:before {\n  background: #34495e;\n  transform: rotate(-270deg);\n}\n.pie-wrapper--solid.progress-88 {\n  background: linear-gradient(to right, #3498db 50%, #34495e 50%);\n}\n.pie-wrapper--solid.progress-88:before {\n  background: #3498db;\n  transform: rotate(43.2deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vQzpcXFVzZXJzXFwwZGllZ1xcRG9jdW1lbnRzXFwwQ29kaWdvc1xcZ2FsbGluYXNBcHB2MlxcZ2FsbGluYXNhcHAvc3JjXFxhcHBcXGFkbWluXFxhZG1pbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2FkbWluL2FkbWluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSw2REFBQTtBQUNSO0VBQ0ksa0JBQUE7RUFDSixXQUFBO0VBQ0EsWUFBQTtFQUNBLDZDQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQ0FBQTtVQUFBLHVDQUFBO0FDQ0E7QURFQTtFQUNJO0lBQ0ksdUJBQUE7RUNDTjtFRENFO0lBQ0kseUJBQUE7RUNDTjtBQUNGO0FEUEE7RUFDSTtJQUNJLHVCQUFBO0VDQ047RURDRTtJQUNJLHlCQUFBO0VDQ047QUFDRjtBRENBO0VBQ0Usc0JBQUE7QUNDRjtBRENBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNFSjtBREFBO0VBQ0kseUJBQUE7VUFBQSxpQkFBQTtBQ0dKO0FEREE7RUFDSSx5QkFBQTtVQUFBLGlCQUFBO0FDSUo7QURGQTtFQUNJLHlCQUFBO1VBQUEsaUJBQUE7QUNLSjtBREhBO0VBQ0kseUJBQUE7VUFBQSxpQkFBQTtBQ01KO0FEeURBOzs7RUFHRSxzQkFBQTtBQ3RERjtBRHlEQTs7RUFFRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDdERGO0FEeURBO0VBQ0UsZUFBQTtBQ3RERjtBRDJERTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ3hESjtBRDREQTtFQXZFRSxZQU5hO0VBT2IsV0FQYTtFQStFYixXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDeERGO0FEMERFO0VBQ0UsV0FBQTtBQ3hESjtBRDJERTtFQWpGQSxZQWtGc0I7RUFqRnRCLFdBaUZnQjtFQUNkLDhCQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtBQ3hESjtBRDBESTtFQXhGRixZQXlGd0I7RUF4RnhCLFdBd0ZrQjtFQUNkLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7QUN2RE47QUQyREU7RUFDRSxtQkEzR087RUE0R1Asa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBL0djO0VBZ0hkLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQ3pESjtBRDJESTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUN6RE47QUQ2REU7RUExSEEsWUEySHNCO0VBMUh0QixXQTBIZ0I7RUFDZCx5QkFBQTtFQUNBLGtCQUFBO0FDMURKO0FEOERJO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FDNUROO0FEOERNO0VBQ0UsY0FBQTtBQzVEUjtBRHBFSTtFQUNFLHFCQXFJeUI7QUMvRC9CO0FEbkVJO0VBQ0UseUJBQUE7QUNxRU47QURqRU07RUFDRSxhQUFBO0FDbUVSO0FEOUVFO0VBY0ksa0NBQUE7QUNtRU47QURoRkk7RUFDRSxxQkF5SXlCO0FDdkQvQjtBRC9FSTtFQUNFLHlCQUFBO0FDaUZOO0FEdkVNO0VBQ0UseUJBQUE7QUN5RVI7QUQxRkU7RUFjSSxrQ0FBQTtBQytFTjtBRDVGSTtFQUNFLHFCQTZJeUI7QUMvQy9CO0FEM0ZJO0VBQ0UseUJBQUE7QUM2Rk47QURuRk07RUFDRSx5QkFBQTtBQ3FGUjtBRHJHSTtFQUNFLHFCQWlKeUI7QUMxQy9CO0FEcEdJO0VBQ0UseUJBQUE7QUNzR047QURsR007RUFDRSxhQUFBO0FDb0dSO0FEL0dFO0VBY0ksa0NBQUE7QUNvR047QURqSEk7RUFDRSxxQkFxSnlCO0FDbEMvQjtBRGhISTtFQUNFLHlCQUFBO0FDa0hOO0FEeEdNO0VBQ0UseUJBQUE7QUMwR1I7QUQzSEU7RUFjSSxrQ0FBQTtBQ2dITjtBRDdISTtFQUNFLHFCQXlKeUI7QUMxQi9CO0FENUhJO0VBQ0UseUJBQUE7QUM4SE47QURwSE07RUFDRSx5QkFBQTtBQ3NIUjtBRHdCQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUNyQkY7QUR1QkU7RUFDRSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNyQko7QUR3QkU7RUFDRSx1QkFBQTtBQ3RCSjtBRHlCRTtFQXhKQSwrREFBQTtBQ2tJRjtBRGhJRTtFQUtJLG1CQWtKZ0M7RUFqSmhDLHlCQUFBO0FDOEhOO0FEc0JFO0VBNUpBLCtEQUFBO0FDeUlGO0FEdklFO0VBRUksbUJBeENLO0VBeUNMLDBCQUFBO0FDd0lOO0FEbUJFO0VBaEtBLCtEQUFBO0FDZ0pGO0FEOUlFO0VBS0ksbUJBMEpnQztFQXpKaEMsMEJBQUE7QUM0SU4iLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzo3MDApO1xyXG4uY2lyY2xle1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG53aWR0aDogMTB2aDtcclxuaGVpZ2h0OiAxMHZoO1xyXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzMzY2NmZiwjZmYwMDY2KTtcclxuYm9yZGVyLXJhZGl1czogNTAlO1xyXG5hbmltYXRpb246IGFuaW1hdGUgMC41cyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYW5pbWF0ZXtcclxuICAgIGZyb217XHJcbiAgICAgICAgdHJhbnNmb3JtOnJvdGF0ZSgwZGVnKVxyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKVxyXG4gICAgfVxyXG59XHJcbmlvbi1ncmlke1xyXG4gIC0taW9uLWdyaWQtcGFkZGluZzowcHg7XHJcbn1cclxuLmNpcmNsZTphZnRlcntcclxuICAgIGNvbnRlbnQ6Jyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwJTtcclxuICAgIHJpZ2h0OiAxMCU7XHJcbiAgICBib3R0b206IDEwJTtcclxuICAgIGxlZnQ6IDEwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTI4NTI7XHJcbn1cclxuLmNpcmNsZSBzcGFuOm50aC1jaGlsZCgxKXtcclxuICAgIGZpbHRlcjpibHVyKDVweClcclxufVxyXG4uY2lyY2xlIHNwYW46bnRoLWNoaWxkKDIpe1xyXG4gICAgZmlsdGVyOmJsdXIoNXB4KVxyXG59XHJcbi5jaXJjbGUgc3BhbjpudGgtY2hpbGQoMyl7XHJcbiAgICBmaWx0ZXI6Ymx1cig1cHgpXHJcbn1cclxuLmNpcmNsZSBzcGFuOm50aC1jaGlsZCg0KXtcclxuICAgIGZpbHRlcjpibHVyKDVweClcclxufVxyXG5cclxuLmJvZHl7XHJcbiAgICBcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyAtLSB2YXJzXHJcbiRiZy1jb2xvcjogIzM0NDk1ZTtcclxuJGRlZmF1bHQtc2l6ZTogMTBlbTtcclxuJGxhYmVsLWZvbnQtc2l6ZTogJGRlZmF1bHQtc2l6ZSAvIDQ7XHJcbiRsYWJlbC1mb250LXNpemUtcmVkbzogJGRlZmF1bHQtc2l6ZSAqIDQ7XHJcblxyXG4vLyAtLSBtaXhpbnNcclxuQG1peGluIHNpemUoJHdpZHRoLCAkaGVpZ2h0KSB7XHJcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xyXG4gIHdpZHRoOiAkd2lkdGg7XHJcbn1cclxuXHJcbkBtaXhpbiBkcmF3LXByb2dyZXNzKCRwcm9ncmVzcywgJGNvbG9yKSB7XHJcbiAgLnBpZSB7XHJcbiAgICAuaGFsZi1jaXJjbGUge1xyXG4gICAgICBib3JkZXItY29sb3I6ICRjb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICAubGVmdC1zaWRlIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoJHByb2dyZXNzICogMy42ZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJHByb2dyZXNzIDw9IDUwIHtcclxuICAgICAgLnJpZ2h0LXNpZGUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH0gQGVsc2Uge1xyXG4gICAgICBjbGlwOiByZWN0KGF1dG8sIGF1dG8sIGF1dG8sIGF1dG8pO1xyXG5cclxuICAgICAgLnJpZ2h0LXNpZGUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBkcmF3LXByb2dyZXNzLS1zb2xpZCgkcHJvZ3Jlc3MsICRjb2xvciwgJGJnLWNvbG9yKSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkY29sb3IgNTAlLCAkYmctY29sb3IgNTAlKTtcclxuICBcclxuICAmOmJlZm9yZSB7XHJcbiAgICBAaWYgJHByb2dyZXNzIDw9IDUwIHtcclxuICAgICAgYmFja2dyb3VuZDogJGJnLWNvbG9yO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgoMTAwIC0gKDUwIC0gJHByb2dyZXNzKSkgLyAxMDAgKiAzNjBkZWcgKiAtMSk7XHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgYmFja2dyb3VuZDogJGNvbG9yO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgoMTAwIC0gJHByb2dyZXNzKSAvIDEwMCAqIDM2MGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyAtLSBzZWxlY3RvcnNcclxuKixcclxuKjpiZWZvcmUsXHJcbio6YWZ0ZXIge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQ6ICNlY2YwZjE7XHJcbiAgY29sb3I6ICM0NDQ7XHJcbiAgZm9udC1mYW1pbHk6ICdtb29uJztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLnNldC1zaXplIHtcclxuICBmb250LXNpemU6IDEwZW07XHJcbn1cclxuXHJcblxyXG4uY2hhcnRzLWNvbnRhaW5lciB7XHJcbiAgJjphZnRlciB7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgfVxyXG59XHJcblxyXG4ucGllLXdyYXBwZXIge1xyXG4gIEBpbmNsdWRlIHNpemUoJGRlZmF1bHQtc2l6ZSwgJGRlZmF1bHQtc2l6ZSk7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBcclxuICAmOm50aC1jaGlsZCgzbiArIDEpIHtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gIH1cclxuXHJcbiAgLnBpZSB7XHJcbiAgICBAaW5jbHVkZSBzaXplKDEwMCUsIDEwMCUpO1xyXG4gICAgY2xpcDogcmVjdCgwLCAkZGVmYXVsdC1zaXplLCAkZGVmYXVsdC1zaXplLCAkZGVmYXVsdC1zaXplIC8gMik7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG5cclxuICAgIC5oYWxmLWNpcmNsZSB7XHJcbiAgICAgIEBpbmNsdWRlIHNpemUoMTAwJSwgMTAwJSk7XHJcbiAgICAgIGJvcmRlcjogKCRkZWZhdWx0LXNpemUgLyAxMCkgc29saWQgIzM0OThkYjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBjbGlwOiByZWN0KDAsICRkZWZhdWx0LXNpemUgLyAyLCAkZGVmYXVsdC1zaXplLCAwKTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubGFiZWwge1xyXG4gICAgYmFja2dyb3VuZDogJGJnLWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm90dG9tOiAkbGFiZWwtZm9udC1zaXplLXJlZG8gLyAxMDtcclxuICAgIGNvbG9yOiAjZWNmMGYxO1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6ICRsYWJlbC1mb250LXNpemU7XHJcbiAgICBsZWZ0OiAkbGFiZWwtZm9udC1zaXplLXJlZG8gLyAxMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAkbGFiZWwtZm9udC1zaXplLXJlZG8gKiAuNzA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogJGxhYmVsLWZvbnQtc2l6ZS1yZWRvIC8gMTA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0b3A6ICRsYWJlbC1mb250LXNpemUtcmVkbyAvIDEwO1xyXG5cclxuICAgIC5zbWFsbGVyIHtcclxuICAgICAgY29sb3I6ICNiZGMzYzc7XHJcbiAgICAgIGZvbnQtc2l6ZTogLjQ1ZW07XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogc3VwZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2hhZG93IHtcclxuICAgIEBpbmNsdWRlIHNpemUoMTAwJSwgMTAwJSk7XHJcbiAgICBib3JkZXI6ICRkZWZhdWx0LXNpemUgLyAxMCBzb2xpZCAjYmRjM2M3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuXHJcbiAgJi5zdHlsZS0yIHtcclxuICAgIC5sYWJlbCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAjN2Y4YzhkO1xyXG5cclxuICAgICAgLnNtYWxsZXIge1xyXG4gICAgICAgIGNvbG9yOiAjYmRjM2M3O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLnByb2dyZXNzLTMwIHtcclxuICAgIEBpbmNsdWRlIGRyYXctcHJvZ3Jlc3MoMzAsICMzNDk4ZGIpO1xyXG4gIH1cclxuXHJcbiAgJi5wcm9ncmVzcy02MCB7XHJcbiAgICBAaW5jbHVkZSBkcmF3LXByb2dyZXNzKDYwLCAjOWI1OWI2KTtcclxuICB9XHJcblxyXG4gICYucHJvZ3Jlc3MtOTAge1xyXG4gICAgQGluY2x1ZGUgZHJhdy1wcm9ncmVzcyg5MCwgI2U2N2UyMik7XHJcbiAgfVxyXG5cclxuICAmLnByb2dyZXNzLTQ1IHtcclxuICAgIEBpbmNsdWRlIGRyYXctcHJvZ3Jlc3MoNDUsICMxYWJjOWMpO1xyXG4gIH1cclxuXHJcbiAgJi5wcm9ncmVzcy03NSB7XHJcbiAgICBAaW5jbHVkZSBkcmF3LXByb2dyZXNzKDc1LCAjOGU0NGFkKTtcclxuICB9XHJcblxyXG4gICYucHJvZ3Jlc3MtOTUge1xyXG4gICAgQGluY2x1ZGUgZHJhdy1wcm9ncmVzcyg5NSwgI2U3NGMzYyk7XHJcbiAgfVxyXG59XHJcblxyXG4ucGllLXdyYXBwZXItLXNvbGlkIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgJjpiZWZvcmUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAxMDAlIDEwMCUgMCAvIDUwJTtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcclxuICB9XHJcbiAgXHJcbiAgLmxhYmVsIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBcclxuICAmLnByb2dyZXNzLTY1IHtcclxuICAgIEBpbmNsdWRlIGRyYXctcHJvZ3Jlc3MtLXNvbGlkKDY1LCAjZTY3ZTIyLCAkYmctY29sb3IpO1xyXG4gIH1cclxuICBcclxuICAmLnByb2dyZXNzLTI1IHtcclxuICAgIEBpbmNsdWRlIGRyYXctcHJvZ3Jlc3MtLXNvbGlkKDI1LCAjOWI1OWI2LCAkYmctY29sb3IpO1xyXG4gIH1cclxuICBcclxuICAmLnByb2dyZXNzLTg4IHtcclxuICAgIEBpbmNsdWRlIGRyYXctcHJvZ3Jlc3MtLXNvbGlkKDg4LCAjMzQ5OGRiLCAkYmctY29sb3IpO1xyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzo3MDApO1xuLmNpcmNsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwdmg7XG4gIGhlaWdodDogMTB2aDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMzM2NjZmYsICNmZjAwNjYpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGFuaW1hdGlvbjogYW5pbWF0ZSAwLjVzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBhbmltYXRlIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbmlvbi1ncmlkIHtcbiAgLS1pb24tZ3JpZC1wYWRkaW5nOjBweDtcbn1cblxuLmNpcmNsZTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMCU7XG4gIHJpZ2h0OiAxMCU7XG4gIGJvdHRvbTogMTAlO1xuICBsZWZ0OiAxMCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjg1Mjtcbn1cblxuLmNpcmNsZSBzcGFuOm50aC1jaGlsZCgxKSB7XG4gIGZpbHRlcjogYmx1cig1cHgpO1xufVxuXG4uY2lyY2xlIHNwYW46bnRoLWNoaWxkKDIpIHtcbiAgZmlsdGVyOiBibHVyKDVweCk7XG59XG5cbi5jaXJjbGUgc3BhbjpudGgtY2hpbGQoMykge1xuICBmaWx0ZXI6IGJsdXIoNXB4KTtcbn1cblxuLmNpcmNsZSBzcGFuOm50aC1jaGlsZCg0KSB7XG4gIGZpbHRlcjogYmx1cig1cHgpO1xufVxuXG4qLFxuKjpiZWZvcmUsXG4qOmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjZWNmMGYxO1xuICBjb2xvcjogIzQ0NDtcbiAgZm9udC1mYW1pbHk6IFwibW9vblwiO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5zZXQtc2l6ZSB7XG4gIGZvbnQtc2l6ZTogMTBlbTtcbn1cblxuLmNoYXJ0cy1jb250YWluZXI6YWZ0ZXIge1xuICBjbGVhcjogYm90aDtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi5waWUtd3JhcHBlciB7XG4gIGhlaWdodDogMTBlbTtcbiAgd2lkdGg6IDEwZW07XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5waWUtd3JhcHBlcjpudGgtY2hpbGQoM24rMSkge1xuICBjbGVhcjogYm90aDtcbn1cbi5waWUtd3JhcHBlciAucGllIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgY2xpcDogcmVjdCgwLCAxMGVtLCAxMGVtLCA1ZW0pO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbn1cbi5waWUtd3JhcHBlciAucGllIC5oYWxmLWNpcmNsZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMWVtIHNvbGlkICMzNDk4ZGI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY2xpcDogcmVjdCgwLCA1ZW0sIDEwZW0sIDApO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbn1cbi5waWUtd3JhcHBlciAubGFiZWwge1xuICBiYWNrZ3JvdW5kOiAjMzQ0OTVlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvdHRvbTogNGVtO1xuICBjb2xvcjogI2VjZjBmMTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAyLjVlbTtcbiAgbGVmdDogNGVtO1xuICBsaW5lLWhlaWdodDogMjhlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNGVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRvcDogNGVtO1xufVxuLnBpZS13cmFwcGVyIC5sYWJlbCAuc21hbGxlciB7XG4gIGNvbG9yOiAjYmRjM2M3O1xuICBmb250LXNpemU6IDAuNDVlbTtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcbn1cbi5waWUtd3JhcHBlciAuc2hhZG93IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxZW0gc29saWQgI2JkYzNjNztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnBpZS13cmFwcGVyLnN0eWxlLTIgLmxhYmVsIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6ICM3ZjhjOGQ7XG59XG4ucGllLXdyYXBwZXIuc3R5bGUtMiAubGFiZWwgLnNtYWxsZXIge1xuICBjb2xvcjogI2JkYzNjNztcbn1cbi5waWUtd3JhcHBlci5wcm9ncmVzcy0zMCAucGllIC5oYWxmLWNpcmNsZSB7XG4gIGJvcmRlci1jb2xvcjogIzM0OThkYjtcbn1cbi5waWUtd3JhcHBlci5wcm9ncmVzcy0zMCAucGllIC5sZWZ0LXNpZGUge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMDhkZWcpO1xufVxuLnBpZS13cmFwcGVyLnByb2dyZXNzLTMwIC5waWUgLnJpZ2h0LXNpZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnBpZS13cmFwcGVyLnByb2dyZXNzLTYwIC5waWUge1xuICBjbGlwOiByZWN0KGF1dG8sIGF1dG8sIGF1dG8sIGF1dG8pO1xufVxuLnBpZS13cmFwcGVyLnByb2dyZXNzLTYwIC5waWUgLmhhbGYtY2lyY2xlIHtcbiAgYm9yZGVyLWNvbG9yOiAjOWI1OWI2O1xufVxuLnBpZS13cmFwcGVyLnByb2dyZXNzLTYwIC5waWUgLmxlZnQtc2lkZSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDIxNmRlZyk7XG59XG4ucGllLXdyYXBwZXIucHJvZ3Jlc3MtNjAgLnBpZSAucmlnaHQtc2lkZSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG4ucGllLXdyYXBwZXIucHJvZ3Jlc3MtOTAgLnBpZSB7XG4gIGNsaXA6IHJlY3QoYXV0bywgYXV0bywgYXV0bywgYXV0byk7XG59XG4ucGllLXdyYXBwZXIucHJvZ3Jlc3MtOTAgLnBpZSAuaGFsZi1jaXJjbGUge1xuICBib3JkZXItY29sb3I6ICNlNjdlMjI7XG59XG4ucGllLXdyYXBwZXIucHJvZ3Jlc3MtOTAgLnBpZSAubGVmdC1zaWRlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzI0ZGVnKTtcbn1cbi5waWUtd3JhcHBlci5wcm9ncmVzcy05MCAucGllIC5yaWdodC1zaWRlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cbi5waWUtd3JhcHBlci5wcm9ncmVzcy00NSAucGllIC5oYWxmLWNpcmNsZSB7XG4gIGJvcmRlci1jb2xvcjogIzFhYmM5Yztcbn1cbi5waWUtd3JhcHBlci5wcm9ncmVzcy00NSAucGllIC5sZWZ0LXNpZGUge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNjJkZWcpO1xufVxuLnBpZS13cmFwcGVyLnByb2dyZXNzLTQ1IC5waWUgLnJpZ2h0LXNpZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnBpZS13cmFwcGVyLnByb2dyZXNzLTc1IC5waWUge1xuICBjbGlwOiByZWN0KGF1dG8sIGF1dG8sIGF1dG8sIGF1dG8pO1xufVxuLnBpZS13cmFwcGVyLnByb2dyZXNzLTc1IC5waWUgLmhhbGYtY2lyY2xlIHtcbiAgYm9yZGVyLWNvbG9yOiAjOGU0NGFkO1xufVxuLnBpZS13cmFwcGVyLnByb2dyZXNzLTc1IC5waWUgLmxlZnQtc2lkZSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG59XG4ucGllLXdyYXBwZXIucHJvZ3Jlc3MtNzUgLnBpZSAucmlnaHQtc2lkZSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG4ucGllLXdyYXBwZXIucHJvZ3Jlc3MtOTUgLnBpZSB7XG4gIGNsaXA6IHJlY3QoYXV0bywgYXV0bywgYXV0bywgYXV0byk7XG59XG4ucGllLXdyYXBwZXIucHJvZ3Jlc3MtOTUgLnBpZSAuaGFsZi1jaXJjbGUge1xuICBib3JkZXItY29sb3I6ICNlNzRjM2M7XG59XG4ucGllLXdyYXBwZXIucHJvZ3Jlc3MtOTUgLnBpZSAubGVmdC1zaWRlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzQyZGVnKTtcbn1cbi5waWUtd3JhcHBlci5wcm9ncmVzcy05NSAucGllIC5yaWdodC1zaWRlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuLnBpZS13cmFwcGVyLS1zb2xpZCB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5waWUtd3JhcHBlci0tc29saWQ6YmVmb3JlIHtcbiAgYm9yZGVyLXJhZGl1czogMCAxMDAlIDEwMCUgMC81MCU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XG59XG4ucGllLXdyYXBwZXItLXNvbGlkIC5sYWJlbCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLnBpZS13cmFwcGVyLS1zb2xpZC5wcm9ncmVzcy02NSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2U2N2UyMiA1MCUsICMzNDQ5NWUgNTAlKTtcbn1cbi5waWUtd3JhcHBlci0tc29saWQucHJvZ3Jlc3MtNjU6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogI2U2N2UyMjtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTI2ZGVnKTtcbn1cbi5waWUtd3JhcHBlci0tc29saWQucHJvZ3Jlc3MtMjUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM5YjU5YjYgNTAlLCAjMzQ0OTVlIDUwJSk7XG59XG4ucGllLXdyYXBwZXItLXNvbGlkLnByb2dyZXNzLTI1OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICMzNDQ5NWU7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0yNzBkZWcpO1xufVxuLnBpZS13cmFwcGVyLS1zb2xpZC5wcm9ncmVzcy04OCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzM0OThkYiA1MCUsICMzNDQ5NWUgNTAlKTtcbn1cbi5waWUtd3JhcHBlci0tc29saWQucHJvZ3Jlc3MtODg6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogIzM0OThkYjtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDMuMmRlZyk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/admin/admin.page.ts":
  /*!*************************************!*\
    !*** ./src/app/admin/admin.page.ts ***!
    \*************************************/

  /*! exports provided: AdminPage */

  /***/
  function srcAppAdminAdminPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminPage", function () {
      return AdminPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _servicios_g_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../servicios-g.service */
    "./src/app/servicios-g.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var AdminPage = /*#__PURE__*/function () {
      function AdminPage(menu, navCtrl, _Servicios, storage, db, modal) {
        _classCallCheck(this, AdminPage);

        this.menu = menu;
        this.navCtrl = navCtrl;
        this._Servicios = _Servicios;
        this.storage = storage;
        this.db = db;
        this.modal = modal;
        this.TemperaturaPromedio = 0;
        this.humedad = 0;
        this.temperatura = 0;
        this.humedad2 = 0;
        this.temperatura2 = 0;
        this.humedad3 = 0;
        this.temperatura3 = 0;
        this.contador = 200;
        this.Alerta = false;
        this.conexion = false;
        this.FlujodeAire = false;
        this.setPoint = 19;
        this.setPointH = 50;
        this.fechaActual = new Date().toISOString().substring(0, 4) + "-" + new Date().toISOString().substring(5, 7) + "-" + new Date().toISOString().substring(8, 10);
      }

      _createClass(AdminPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          /** Carga directamente los datos del servidor almacenados para cada uno de los sensosres */

          /** Se obtiene el objeto de usuario y se determina el galpon */
          this._Servicios.userState().subscribe(function (user) {
            console.log(user.uid);

            var _getUsuario = _this._Servicios.getUsuario(user.uid).subscribe(function (res) {
              _this.UsuarioLocal = res.payload.val();
              _this.idGalpon = _this.UsuarioLocal.galponid;

              _this.storage.set('_idGalpon', _this.idGalpon);

              console.log(_this.idGalpon);
              /** Se obtiene el estado de conexion con el modulo */

              _this.db.object("Galpones/" + _this.idGalpon + "/fechaUltimaConexion").snapshotChanges().subscribe(function (action) {
                var fecha = action.payload.val(); //emit value in sequence every 1 second

                var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(10000); //output: 0,1,2,3,4,5....

                var subscribe = source.subscribe(function (val) {
                  _this.verificarConexion(fecha, action.payload.val());
                });
              });
              /** Determina el contador para asiganarlo como un indice y obtener el ultimo dato almacenado en el servidor */


              _this.db.object("Galpones/" + _this.idGalpon + "/" + 'contador').snapshotChanges().subscribe(function (action) {
                console.log(action.type);
                console.log(action.key);
                console.log(action.payload.val());
                _this.contador = action.payload.val();
                /** Se obtiene el ultimo dato almacenado en la base de datos para la temperatura de x galpon para el sensor 1 */

                _this.db.object("Galpones/" + _this.idGalpon + "/" + "SensorTemp1/" + (_this.contador - 1) + "/val").snapshotChanges().subscribe(function (action) {
                  console.log(action.type);
                  console.log(action.key);
                  console.log(action.payload.val());
                  _this.temperatura = action.payload.val();

                  if (action.payload.val() >= 38) {
                    _this.Alerta = true;
                  } else {
                    _this.Alerta = false;
                  }

                  _this.TemperaturaPromedio = (_this.temperatura + _this.temperatura2 + _this.temperatura3) / 3;
                  _this.TemperaturaPromedioP = Number(_this.TemperaturaPromedio).toFixed(2);
                });
                /** Se obtiene el ultimo dato almacenado en la base de datos para la humedad de x galpon para el sensor 1 */


                _this.db.object("Galpones/" + _this.idGalpon + "/" + "SensorHum1/" + (_this.contador - 1) + "/val").snapshotChanges().subscribe(function (action) {
                  console.log(action.type);
                  console.log(action.key);
                  console.log(action.payload.val());
                  _this.humedad = action.payload.val();
                });
                /** Se obtiene el ultimo dato almacenado en la base de datos para la temperatura de x galpon para el sensor 2 */


                _this.db.object("Galpones/" + _this.idGalpon + "/" + "SensorTemp2/" + (_this.contador - 1) + "/val").snapshotChanges().subscribe(function (action) {
                  console.log(action.type);
                  console.log(action.key);
                  console.log(action.payload.val());
                  _this.temperatura2 = action.payload.val();

                  if (action.payload.val() >= 38) {
                    _this.Alerta = true;
                  } else {
                    _this.Alerta = false;
                  }

                  _this.TemperaturaPromedio = (_this.temperatura + _this.temperatura2 + _this.temperatura3) / 3;
                  _this.TemperaturaPromedioP = Number(_this.TemperaturaPromedio).toFixed(2);
                });
                /** Se obtiene el ultimo dato almacenado en la base de datos para la humedad de x galpon para el sensor 2 */


                _this.db.object("Galpones/" + _this.idGalpon + "/" + "SensorHum2/" + (_this.contador - 1) + "/val").snapshotChanges().subscribe(function (action) {
                  console.log(action.type);
                  console.log(action.key);
                  console.log(action.payload.val());
                  _this.humedad2 = action.payload.val();
                });
                /** Se obtiene el ultimo dato almacenado en la base de datos para la temperatura de x galpon para el sensor 3 */


                _this.db.object("Galpones/" + _this.idGalpon + "/" + "SensorTemp3/" + (_this.contador - 1) + "/val").snapshotChanges().subscribe(function (action) {
                  console.log(action.type);
                  console.log(action.key);
                  console.log(action.payload.val());
                  _this.temperatura3 = action.payload.val();

                  if (action.payload.val() >= 38) {
                    _this.Alerta = true;
                  } else {
                    _this.Alerta = false;
                  }

                  _this.TemperaturaPromedio = (_this.temperatura + _this.temperatura2) / 2;
                  _this.TemperaturaPromedioP = Number(_this.TemperaturaPromedio).toFixed(2);
                  console.log("wwwowowow" + Number(_this.TemperaturaPromedio).toFixed(2));
                });
                /** Se obtiene el ultimo dato almacenado en la base de datos para la humedad de x galpon para el sensor 3 */


                _this.db.object("Galpones/" + _this.idGalpon + "/" + "SensorHum3/" + (_this.contador - 1) + "/val").snapshotChanges().subscribe(function (action) {
                  console.log(action.type);
                  console.log(action.key);
                  console.log(action.payload.val());
                  _this.humedad3 = action.payload.val();
                });
                /** Se obtiene el ultimo dato almacenado en la base de datos para la humedad de x galpon para el sensor 1 */


                _this.db.object("Galpones/" + _this.idGalpon + "/" + "Actuadores/Actuador1_1").snapshotChanges().subscribe(function (action) {
                  console.log(action.type);
                  console.log(action.key);
                  console.log(action.payload.val());

                  if (action.payload.val() == 1) {
                    _this.FlujodeAire = true;
                  } else {
                    _this.FlujodeAire = false;
                  }
                });
                /** Se obtiene el ultimo dato almacenado en la base de datos para la humedad de x galpon para el sensor 1 */


                _this.db.object("Galpones/" + _this.idGalpon + "/" + "Actuadores/Actuador1_2").snapshotChanges().subscribe(function (action) {
                  console.log(action.type);
                  console.log(action.key);
                  console.log(action.payload.val());

                  if (action.payload.val() == 1) {
                    _this.FlujodeAire = true;
                  } else {
                    _this.FlujodeAire = false;
                  }
                });
                /** Se obtiene el ultimo dato almacenado en la base de datos para la humedad de x galpon para el sensor 1 */


                _this.db.object("Galpones/" + _this.idGalpon + "/" + "Actuadores/Actuador1_3").snapshotChanges().subscribe(function (action) {
                  console.log(action.type);
                  console.log(action.key);
                  console.log(action.payload.val());

                  if (action.payload.val() == 1) {
                    _this.FlujodeAire = true;
                  } else {
                    _this.FlujodeAire = false;
                  }
                });
              });

              _getUsuario.unsubscribe();
            });
          });
        }
        /*FN****************************************************************************
        *
        *   void userState()
        *
        *   Retorna:         El estado de la autenticidad del ususario
        *
        *   Proposito:       Permite obtener el estado de la autenticidad del usuario
        *                    verificando si la sesion esta iniciada.
        *
        *******************************************************************************/

      }, {
        key: "control",
        value: function control() {
          this.navCtrl.navigateRoot('/home');
        }
        /*FN****************************************************************************
        *
        *   void openHeatMap()
        *
        *   Retorna:         Nada
        *
        *   Proposito:       Navega a la pagina heatmap.
        *
        *******************************************************************************/

      }, {
        key: "openHeatMap",
        value: function openHeatMap() {
          this.navCtrl.navigateRoot('/heatmap');
        }
        /*FN****************************************************************************
        *
        *   void openEnd()
        *
        *   Retorna:         Nada
        *
        *   Proposito:       Abre el menu lateral.
        *
        *******************************************************************************/

      }, {
        key: "openEnd",
        value: function openEnd() {
          this.menu.toggle('custom');
        }
        /*FN****************************************************************************
        *
        *   void cerrar()
        *
        *   Retorna:         Nada
        *
        *   Proposito:       Cierra la sesion al borrar las credenciales del usuario
        *                    y modifica la bandera de la sesion iniciada.
        *
        *******************************************************************************/

      }, {
        key: "cerrar",
        value: function cerrar() {
          this.storage.set('log', 'no');

          this._Servicios.cerrarSesion();

          this.navCtrl.navigateRoot('/iniciar-sesion');
        }
      }, {
        key: "config",
        value: function config() {}
      }, {
        key: "ayuda",
        value: function ayuda() {}
      }, {
        key: "alertas",
        value: function alertas() {}
      }, {
        key: "setpointInput",
        value: function setpointInput(event) {
          console.log("setpoint Sin: " + event.target.value);

          if (event.target.value < 40 && event.target.value > 10) {
            this.setPoint = event.target.value;
            console.log("setpoint: " + event.target.value);
            event.target.value = "";
          }

          if (event.target.value >= 40) {
            event.target.value = "";
          }
        }
      }, {
        key: "iniciarCiclo",
        value: function iniciarCiclo() {
          this.yy = new Date().toISOString().substring(0, 4) + "-" + new Date().toISOString().substring(5, 7) + "-" + new Date().toISOString().substring(8, 10);

          this._Servicios.startCicle(this.yy, this.idGalpon, 40, "normal", 60);
        }
      }, {
        key: "configurarCiclo",
        value: function configurarCiclo() {
          this.navCtrl.navigateRoot('/configuracion-ciclos');
        }
        /**Verificar conexion con el modulo */

      }, {
        key: "verificarConexion",
        value: function verificarConexion(fecha, fechaReal) {
          // 19 Sep 2020 00:05:08
          console.log("Largo es:" + fecha.length);

          if (fecha.length == 20) {
            console.log("SI Entro");
            fecha = "";

            for (var g = 0; g < fechaReal.length; g++) {
              if (g == 12) {
                fecha += "0" + fechaReal.charAt(g);
              } else {
                fecha += "" + fechaReal.charAt(g);
              }
            }

            console.log(fecha);
          }

          var day = fecha.substring(0, 2);
          var month = fecha.substring(3, 6);
          var year = fecha.substring(7, 11);
          var hour = fecha.substring(12, 14);
          var minutes = fecha.substring(15, 18);
          var seconds = fecha.substring(19, 21);
          var mes;

          switch (month) {
            case "Jan":
              mes = 0;
              break;

            case "Feb":
              mes = 1;
              break;

            case "Mar":
              mes = 2;
              break;

            case "Abr":
              mes = 3;
              break;

            case "May":
              mes = 4;
              break;

            case "Jun":
              mes = 5;
              break;

            case "Jul":
              mes = 6;
              break;

            case "Ago":
              mes = 7;
              break;

            case "Sep":
              mes = 8;
              break;

            case "Oct":
              mes = 9;
              break;

            case "Nov":
              mes = 10;
              break;

            case "Dec":
              mes = 11;
              break;
          }

          var date = new Date();

          if (date.getFullYear() == parseInt(year)) {
            console.log("Si entro1");

            if (date.getMonth() == mes) {
              console.log("Si entro2");

              if (date.getDate() == parseInt(day)) {
                console.log("Si entro3");

                if (date.getHours() == parseInt(hour)) {
                  console.log("Si entro4:: " + (date.getMinutes() - 3) + " :: " + parseInt(minutes));

                  if (date.getMinutes() - 2 <= parseInt(minutes)) {
                    this.conexion = true;
                    console.log("Si entro5");
                  } else {
                    this.conexion = false;
                  }
                } else {
                  this.conexion = false;
                }
              } else {
                this.conexion = false;
              }
            } else {
              this.conexion = false;
            }
          } else {
            this.conexion = false;
          }
        }
      }]);

      return AdminPage;
    }();

    AdminPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _servicios_g_service__WEBPACK_IMPORTED_MODULE_5__["ServiciosGService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }, {
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    AdminPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./admin.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./admin.page.scss */
      "./src/app/admin/admin.page.scss"))["default"]]
    })], AdminPage);
    /***/
  }
}]);
//# sourceMappingURL=admin-admin-module-es5.js.map