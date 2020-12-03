(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["crear-ususario-crear-ususario-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/crear-ususario/crear-ususario.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/crear-ususario/crear-ususario.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title style=\"font-family: 'labase2';\">Crea tu cuenta</ion-title>\n    <ion-button slot=\"start\" fill=\"clear\" (click)=\"back()\">\n      <ion-icon style=\"color:rgb(0, 0, 0); font-size: 25px\" name=\"arrow-round-back\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-content  >\n    <form  #form=\"ngForm\" >\n      <ion-grid>\n        <ion-row color=\"primary\" justify-content-center>\n          <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n            \n            <div padding>\n            \n              <ion-item>\n                <ion-label position=\"floating\">Nombre</ion-label>\n                <ion-input name=\"name\" type=\"name\" ngModel required [(ngModel)]=\"nombre\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"floating\">Apellido</ion-label>\n                <ion-input name=\"name\" type=\"name\" ngModel required [(ngModel)]=\"apellido\"></ion-input>\n              </ion-item>\n              \n              <ion-item>\n                <ion-label position=\"floating\">\"tu@email.com\"</ion-label>\n                <ion-input name=\"email\" type=\"email\" ngModel required [(ngModel)]=\"email\"></ion-input>\n              </ion-item>\n              \n              <ion-item>\n                <ion-label position=\"floating\">ID Galpon</ion-label>\n                <ion-input name=\"namec\" type=\"text\" ngModel [(ngModel)]=\"idgalpon\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"floating\">Contraseña</ion-label>\n                <ion-input name=\"password\" type=\"password\" ngModel required [(ngModel)]=\"password\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"floating\">Confirma tu contraseña</ion-label>\n                <ion-input position=\"floating\" name=\"confirm\" type=\"password\" ngModel required [(ngModel)]=\"password2\"></ion-input>\n              </ion-item>\n              \n            </div>\n\n            <div padding>\n              <p>Al hacer clic en “Registrarte” estas aceptado nuestras políticas de privacidad, términos y condiciones <a\n                href=\"https://www.labasefraternidad.com/terminos/\">Ver terminos y condiciones.</a></p>\n            </div>\n            <div padding>\n              <ion-button (click)=\"CrearUsuario()\" size=\"large\" type=\"submit\" [disabled]=\"form.invalid\" expand=\"block\">\n                Registrarte</ion-button>\n             \n            </div>\n\n            \n            \n            <ion-text color=\"danger\">\n              <h4 >{{error}}</h4>\n            </ion-text>\n            \n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n  </ion-content>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/crear-ususario/crear-ususario-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/crear-ususario/crear-ususario-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: CrearUsusarioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearUsusarioPageRoutingModule", function() { return CrearUsusarioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _crear_ususario_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crear-ususario.page */ "./src/app/crear-ususario/crear-ususario.page.ts");




const routes = [
    {
        path: '',
        component: _crear_ususario_page__WEBPACK_IMPORTED_MODULE_3__["CrearUsusarioPage"]
    }
];
let CrearUsusarioPageRoutingModule = class CrearUsusarioPageRoutingModule {
};
CrearUsusarioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CrearUsusarioPageRoutingModule);



/***/ }),

/***/ "./src/app/crear-ususario/crear-ususario.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/crear-ususario/crear-ususario.module.ts ***!
  \*********************************************************/
/*! exports provided: CrearUsusarioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearUsusarioPageModule", function() { return CrearUsusarioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _crear_ususario_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./crear-ususario-routing.module */ "./src/app/crear-ususario/crear-ususario-routing.module.ts");
/* harmony import */ var _crear_ususario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./crear-ususario.page */ "./src/app/crear-ususario/crear-ususario.page.ts");







let CrearUsusarioPageModule = class CrearUsusarioPageModule {
};
CrearUsusarioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _crear_ususario_routing_module__WEBPACK_IMPORTED_MODULE_5__["CrearUsusarioPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_crear_ususario_page__WEBPACK_IMPORTED_MODULE_6__["CrearUsusarioPage"]]
    })
], CrearUsusarioPageModule);



/***/ }),

/***/ "./src/app/crear-ususario/crear-ususario.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/crear-ususario/crear-ususario.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWFyLXVzdXNhcmlvL2NyZWFyLXVzdXNhcmlvLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/crear-ususario/crear-ususario.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/crear-ususario/crear-ususario.page.ts ***!
  \*******************************************************/
/*! exports provided: CrearUsusarioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearUsusarioPage", function() { return CrearUsusarioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _servicios_g_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../servicios-g.service */ "./src/app/servicios-g.service.ts");
/* crear-ususario.page ********************************************************/
/*                                                                            */
/*                   Pagina crear-ususario (funciones)                        */
/*                                                                            */
/******************************************************************************/

/*******************************************************************************

    Notas:           Codigo de las funciones de la pagina crear-ususario. Esta
                     pagina permite crear un nuevo usuario y guardarlo en el
                     servidor.
                    

    Registro de Revisiones:

    FECHA      RESPONSABLE  REVISION
    -----------------------------------------------------------------------
    Mar 05/20  S.Londoño    Implementacion original

    Mar 05/20  D.Salazar    Implementacion original


*******************************************************************************/





let CrearUsusarioPage = class CrearUsusarioPage {
    constructor(navCtrl, Servicios, loadingController, storage) {
        this.navCtrl = navCtrl;
        this.Servicios = Servicios;
        this.loadingController = loadingController;
        this.storage = storage;
        this.error = '';
    }
    ngOnInit() {
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
    back() {
        this.navCtrl.back();
    }
    /*FN****************************************************************************
    *
    *   void CrearUsuario()
    *
    *   Retorna:         Nada
    *
    *   Proposito:       Dado los parametros ingresados por el ususario en el HTML
    *                    crea un nuevo usuario e inicia sesion. Si hay algun error
    *                    al momento de crear el usuario, se mostrara el error en
    *                    pantalla.
    *
    *******************************************************************************/
    CrearUsuario() {
        this.presentLoading();
        if (this.password === this.password2) {
            this.Servicios.crearUsuario(this.email, this.password, this.nombre, this.apellido, this.idgalpon).then(auth => {
                this.navCtrl.navigateRoot('/mainmenu');
                this.storage.set('log', 'si');
                console.log("el usuario es" + auth);
                this.loading.dismiss();
            }).catch(err => { console.log(err); this.error = 'Error al crear la cuenta: ' + err; this.loading.dismiss(); });
        }
        else {
            this.error = 'Contraseñas Diferentes! Verifique';
            this.loading.dismiss();
        }
    }
    /*FN****************************************************************************
    *
    *   async presentLoading()
    *
    *   Retorna:         Nada
    *
    *   Proposito:       Permite mostrar un dialogo en patalla mientras que se realiza
    *                    otro proceso.
    *
    *******************************************************************************/
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.password === this.password2) {
                this.loading = yield this.loadingController.create({
                    message: 'Cargando...',
                    duration: 16000
                });
                yield this.loading.present();
                const { role, data } = yield this.loading.onDidDismiss();
                console.log('Loading dismissed!');
            }
        });
    }
};
CrearUsusarioPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _servicios_g_service__WEBPACK_IMPORTED_MODULE_4__["ServiciosGService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
];
CrearUsusarioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-crear-ususario',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./crear-ususario.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/crear-ususario/crear-ususario.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./crear-ususario.page.scss */ "./src/app/crear-ususario/crear-ususario.page.scss")).default]
    })
], CrearUsusarioPage);



/***/ })

}]);
//# sourceMappingURL=crear-ususario-crear-ususario-module-es2015.js.map