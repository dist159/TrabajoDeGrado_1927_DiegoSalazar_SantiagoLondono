function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inicio-inicio-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/inicio/inicio.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inicio/inicio.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInicioInicioPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<ion-content>\n\n<div   class=\"ion-text-center\" style=\"margin-top: 20%;\">\n  <h1 style=\"font-family: 'letra1'\">Gallinas App</h1>\n  <img center-text style=\"margin-top: 10%; width: 200px; \" src=\"../../assets/imagenes/gallina.png\">\n</div>\n\n<div   class=\"ion-text-center\" style=\"margin-top: 30px;\">\n  <ion-spinner color=\"primary\"style=\"width: 100px; \"name=\"crescent\"></ion-spinner>\n  <p>Cargando</p>\n</div>\n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/inicio/inicio-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/inicio/inicio-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: InicioPageRoutingModule */

  /***/
  function srcAppInicioInicioRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InicioPageRoutingModule", function () {
      return InicioPageRoutingModule;
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


    var _inicio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./inicio.page */
    "./src/app/inicio/inicio.page.ts");

    var routes = [{
      path: '',
      component: _inicio_page__WEBPACK_IMPORTED_MODULE_3__["InicioPage"]
    }];

    var InicioPageRoutingModule = function InicioPageRoutingModule() {
      _classCallCheck(this, InicioPageRoutingModule);
    };

    InicioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], InicioPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/inicio/inicio.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/inicio/inicio.module.ts ***!
    \*****************************************/

  /*! exports provided: InicioPageModule */

  /***/
  function srcAppInicioInicioModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InicioPageModule", function () {
      return InicioPageModule;
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


    var _inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./inicio-routing.module */
    "./src/app/inicio/inicio-routing.module.ts");
    /* harmony import */


    var _inicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./inicio.page */
    "./src/app/inicio/inicio.page.ts");
    /* harmony import */


    var ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-circle-progress */
    "./node_modules/ng-circle-progress/__ivy_ngcc__/fesm2015/ng-circle-progress.js");

    var InicioPageModule = function InicioPageModule() {
      _classCallCheck(this, InicioPageModule);
    };

    InicioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__["InicioPageRoutingModule"], ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__["NgCircleProgressModule"]],
      declarations: [_inicio_page__WEBPACK_IMPORTED_MODULE_6__["InicioPage"]]
    })], InicioPageModule);
    /***/
  },

  /***/
  "./src/app/inicio/inicio.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/inicio/inicio.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppInicioInicioPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luaWNpby9pbmljaW8ucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/inicio/inicio.page.ts":
  /*!***************************************!*\
    !*** ./src/app/inicio/inicio.page.ts ***!
    \***************************************/

  /*! exports provided: InicioPage */

  /***/
  function srcAppInicioInicioPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InicioPage", function () {
      return InicioPage;
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


    var _servicios_g_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../servicios-g.service */
    "./src/app/servicios-g.service.ts");
    /* inicio.page ****************************************************************/

    /*                                                                            */

    /*                        Pagina inicio (funciones)                           */

    /*                                                                            */

    /******************************************************************************/

    /*******************************************************************************
    
        Notas:           Codigo de las funciones de la pagina inicio. Esta pagina es
                         la pagina inicial y la primera que ve el usuario. Se
                         verificara si el usuario ya tiene la sesion iniciada y dado
                         el resultado lo redirigira a otra pagina.
    
        Registro de Revisiones:
    
        FECHA      RESPONSABLE  REVISION
        -----------------------------------------------------------------------
        Mar 05/20  S.Londoño    Implementacion original
    
        Mar 05/20  D.Salazar    Implementacion original
    
    
    *******************************************************************************/


    var InicioPage = /*#__PURE__*/function () {
      function InicioPage(Servicios, navCtrl) {
        _classCallCheck(this, InicioPage);

        this.Servicios = Servicios;
        this.navCtrl = navCtrl;
      }

      _createClass(InicioPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          /**  Si existe un usuario con sesion iniciada se redireccionara a la pagina mainmenu */

          /**  de lo contrario se redireccionara a la pagina iniciar-sesion. Si el usuario es  */

          /**  administrador se redireccionara a la pagina admin (aun no existe).              */
          this.Servicios.userState().subscribe(function (user) {
            if (user) {
              _this.Servicios.getUsuario(user.uid).subscribe(function (res) {
                var usuarioto = res.payload.val();

                if (usuarioto !== null) {
                  if (usuarioto.admin == true) {
                    _this.navCtrl.navigateRoot('/admin');
                  } else {
                    _this.InicioDirecto();
                  }
                }
              });
            } else {
              _this.login();
            }
          });
        }
        /*FN****************************************************************************
        *
        *   void login()
        *
        *   Retorna:         Nada
        *
        *   Proposito:       Navega a la pagina iniciar-sesion.
        *
        *******************************************************************************/

      }, {
        key: "login",
        value: function login() {
          this.navCtrl.navigateRoot('/iniciar-sesion');
        }
        /*FN****************************************************************************
        *
        *   void InicioDirecto()
        *
        *   Retorna:         Nada
        *
        *   Proposito:       Navega a la pagina mainmenu.
        *
        *******************************************************************************/

      }, {
        key: "InicioDirecto",
        value: function InicioDirecto() {
          this.navCtrl.navigateRoot('/mainmenu');
        }
        /*FN****************************************************************************
        *
        *   void signup()
        *
        *   Retorna:         Nada
        *
        *   Proposito:       Navega a la pagina crear-ususario.
        *
        *******************************************************************************/

      }, {
        key: "signup",
        value: function signup() {
          this.navCtrl.navigateRoot('/crear-ususario');
        }
      }]);

      return InicioPage;
    }();

    InicioPage.ctorParameters = function () {
      return [{
        type: _servicios_g_service__WEBPACK_IMPORTED_MODULE_3__["ServiciosGService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    InicioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inicio',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./inicio.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/inicio/inicio.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./inicio.page.scss */
      "./src/app/inicio/inicio.page.scss"))["default"]]
    })], InicioPage);
    /***/
  }
}]);
//# sourceMappingURL=inicio-inicio-module-es5.js.map