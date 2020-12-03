(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["iniciar-sesion-iniciar-sesion-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/iniciar-sesion/iniciar-sesion.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/iniciar-sesion/iniciar-sesion.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n  <div  class=\"ion-text-center\" text-center style=\"margin-top: 20%;\">\n    <h1 class=\"ion-text-center\"style=\"font-family: 'letra1'\">Gallinas App</h1>\n    <img class=\"ion-text-center\" text-center style=\"margin-top: 10%; width: 200px; \" src=\"../../assets/imagenes/gallina.png\">\n  </div>\n  \n  <form #form=\"ngForm\" >\n    <ion-grid>\n      <ion-row color=\"primary\" justify-content-center>\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div class=\"ion-text-center\">\n            <h3>Iniciar sesión</h3>\n          </div>\n          <div padding>\n            <ion-item>\n              <ion-input name=\"email\" type=\"email\" placeholder=\"Tu correo\" ngModel required [(ngModel)]=\"account.email\" ></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input name=\"password\" type=\"password\" placeholder=\"Contraseña\" ngModel required [(ngModel)]=\"account.password\"></ion-input>\n            </ion-item>\n          </div>\n          <div padding>\n            <ion-button size=\"large\" type=\"submit\" (click)=\"iniciarSesion()\"[disabled]=\"form.invalid\" expand=\"block\">iniciar</ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n  <div text-center>\n  <ion-row text-center>\n    <div  style=\"margin: auto;\"text-center>\n      Si no tiene una cuenta, registrese  <a routerLink='/crear-ususario'>aca</a>.\n    </div>\n</ion-row>\n</div>\n\n  \n  \n  </ion-content>\n  ");

/***/ }),

/***/ "./src/app/iniciar-sesion/iniciar-sesion-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/iniciar-sesion/iniciar-sesion-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: IniciarSesionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IniciarSesionPageRoutingModule", function() { return IniciarSesionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _iniciar_sesion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iniciar-sesion.page */ "./src/app/iniciar-sesion/iniciar-sesion.page.ts");




const routes = [
    {
        path: '',
        component: _iniciar_sesion_page__WEBPACK_IMPORTED_MODULE_3__["IniciarSesionPage"]
    }
];
let IniciarSesionPageRoutingModule = class IniciarSesionPageRoutingModule {
};
IniciarSesionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IniciarSesionPageRoutingModule);



/***/ }),

/***/ "./src/app/iniciar-sesion/iniciar-sesion.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/iniciar-sesion/iniciar-sesion.module.ts ***!
  \*********************************************************/
/*! exports provided: IniciarSesionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IniciarSesionPageModule", function() { return IniciarSesionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _iniciar_sesion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./iniciar-sesion-routing.module */ "./src/app/iniciar-sesion/iniciar-sesion-routing.module.ts");
/* harmony import */ var _iniciar_sesion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./iniciar-sesion.page */ "./src/app/iniciar-sesion/iniciar-sesion.page.ts");







let IniciarSesionPageModule = class IniciarSesionPageModule {
};
IniciarSesionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _iniciar_sesion_routing_module__WEBPACK_IMPORTED_MODULE_5__["IniciarSesionPageRoutingModule"]
        ],
        declarations: [_iniciar_sesion_page__WEBPACK_IMPORTED_MODULE_6__["IniciarSesionPage"]]
    })
], IniciarSesionPageModule);



/***/ }),

/***/ "./src/app/iniciar-sesion/iniciar-sesion.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/iniciar-sesion/iniciar-sesion.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luaWNpYXItc2VzaW9uL2luaWNpYXItc2VzaW9uLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/iniciar-sesion/iniciar-sesion.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/iniciar-sesion/iniciar-sesion.page.ts ***!
  \*******************************************************/
/*! exports provided: IniciarSesionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IniciarSesionPage", function() { return IniciarSesionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _servicios_g_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../servicios-g.service */ "./src/app/servicios-g.service.ts");
/* iniciar-sesion.page ********************************************************/
/*                                                                            */
/*                   Pagina iniciar-sesion (funciones)                        */
/*                                                                            */
/******************************************************************************/

/*******************************************************************************

    Notas:           Codigo de las funciones de la pagina iniciar-sesion. Esta
                     pagina permite iniciar sesion y navegar a otra pagina.
                    

    Registro de Revisiones:

    FECHA      RESPONSABLE  REVISION
    -----------------------------------------------------------------------
    Mar 05/20  S.Londoño    Implementacion original

    Mar 05/20  D.Salazar    Implementacion original


*******************************************************************************/




let IniciarSesionPage = class IniciarSesionPage {
    constructor(navCtrl, Servicios, loadingController, storage) {
        this.navCtrl = navCtrl;
        this.Servicios = Servicios;
        this.loadingController = loadingController;
        this.storage = storage;
        /** Variables para leer el correo y la contrasena en el HTML */
        this.account = {
            email: '',
            password: ''
        };
    }
    ngOnInit() {
    }
    /*FN****************************************************************************
    *
    *   void iniciarSesion()
    *
    *   Retorna:         Nada
    *
    *   Proposito:       Dado un cuenta de correo y una contrasena, verifica en los
    *                    servidores de google si se encuentra registrado y la informacion
    *                    concuerda. En caso de un resultado positivo, se navegara
    *                    a la pagina MainMenu. Tambien determinara si el usuario es
    *                    administrador o usuario normal.
    *
    *******************************************************************************/
    iniciarSesion() {
        this.presentLoadingA();
        this.Servicios.userState().subscribe((user) => {
            this.Servicios.iniciarsesion(this.account.email, this.account.password).then(res => {
                this.cargandoA.dismiss();
                this.Servicios.getUsuario(user.uid).subscribe(res => {
                    const UsuarioA = res.payload.val();
                    console.log(UsuarioA);
                    if (UsuarioA !== undefined) {
                        this.account.email = "";
                        this.account.password = "";
                        console.log(UsuarioA.admin);
                        if (UsuarioA.admin == true) {
                            this.navCtrl.navigateRoot('/admin');
                        }
                        else {
                            this.navCtrl.navigateRoot('/mainmenu');
                        }
                    }
                    else {
                        console.log("Error al iniciar");
                    }
                });
                this.storage.set('log', 'si');
            }).catch(err => {
                this.cargandoA.dismiss();
                console.log("Error al iniciar");
            });
        });
    }
    /*FN****************************************************************************
    *
    *   async presentLoadingA()
    *
    *   Retorna:         Nada
    *
    *   Proposito:       Permite mostrar un dialogo en patalla mientras que se realiza
    *                    otro proceso.
    *
    *******************************************************************************/
    presentLoadingA() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.cargandoA = yield this.loadingController.create({
                message: 'Verificando los datos...',
                duration: 10000
            });
            yield this.cargandoA.present();
        });
    }
};
IniciarSesionPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _servicios_g_service__WEBPACK_IMPORTED_MODULE_4__["ServiciosGService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
];
IniciarSesionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-iniciar-sesion',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./iniciar-sesion.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/iniciar-sesion/iniciar-sesion.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./iniciar-sesion.page.scss */ "./src/app/iniciar-sesion/iniciar-sesion.page.scss")).default]
    })
], IniciarSesionPage);



/***/ })

}]);
//# sourceMappingURL=iniciar-sesion-iniciar-sesion-module-es2015.js.map