(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mainmenu-mainmenu-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/mainmenu/mainmenu.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mainmenu/mainmenu.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title style=\"font-family: 'letra3';\">\n      Gallinas App\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"openEnd()\">\n        <ion-icon style=\"color: rgb(126, 81, 81);\" slot=\"icon-only\" name=\"menu\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<!-- -----------------------------------MENU ---------------------------------->\n<ion-menu side=\"start\" menuId=\"custom\" class=\"my-custom-menu\" type=\"overlay\">\n  <ion-header>\n    <ion-toolbar>\n      <ion-item style=\"border: 3px solid rgb(134, 83, 83)(139, 92, 92) !important;--background:black\">\n\n        <ion-grid class=\"grida\" style=\"width: 100%; flex-direction: column\">\n          <ion-row>\n            <div class=\"ion-text-center\" style=\"width: 100%; flex-direction: column\">\n              <ion-title *ngIf=\"UsuarioLocal\" style=\"color: white;\">{{UsuarioLocal.nombre}} {{UsuarioLocal.apellido}}\n              </ion-title>\n            </div>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n\n\n      <ion-item (click)=\"ayuda()\">\n        <ion-icon name=\"help\" slot=\"start\"></ion-icon>\n        <ion-label>Ayuda</ion-label>\n      </ion-item>\n\n      <ion-item (click)=\"cerrar()\">\n        <ion-icon name=\"log-out\" slot=\"start\"></ion-icon>\n        <ion-label style=\"font-family: 'labase3'\">Cerrar Sesión</ion-label>\n      </ion-item>\n      <div padding style=\"background: #ffffff; margin-top: 1%;\">\n\n\n\n      </div>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n<ion-router-outlet main></ion-router-outlet>\n\n\n<ion-content style=\"--background: #212852; height: 100%;\">\n  <!--\n<div class=\"ion-text-center\">\n  <ion-button  class=\"ion-text-center\" style=\"width: 100px; height: 100px; margin: auto;\" (click)=\"agregarPollosMuertos()\">\n    <img style=\"width: 100px;height: 100px;\"src=\"../../assets/imagenes/chicken_line-28-512.png\">\n     <ion-text>{{deadChicken}} </ion-text>\n  </ion-button>\n</div>\n-->\n  <div class=\"ion-text-center\">\n    <h2 padding style=\"color: white;\">Sensor 1</h2>\n    <div text-center>\n      <circle-progress [percent]=\"temperatura\" [radius]=\"60\" [outerStrokeWidth]=\"10\" [innerStrokeWidth]=\"7\"\n        [outerStrokeColor]=\"'#ff7514'\" [innerStrokeColor]=\"'#C7E596'\" [animation]=\"true\" [animationDuration]=\"300\"\n        [subtitle]=\"'Temperatura'\" [units]=\"'°C'\" [unitsColor]=\"'#ffffff'\" [titleColor]=\"'#ffffff'\"></circle-progress>\n\n      <circle-progress [percent]=\"humedad\" [radius]=\"60\" [outerStrokeWidth]=\"10\" [innerStrokeWidth]=\"7\"\n        [outerStrokeColor]=\"'#256d7b'\" [innerStrokeColor]=\"'#C7E596'\" [animation]=\"true\" [animationDuration]=\"300\"\n        [subtitle]=\"'Humedad'\" [units]=\"'°C'\" [unitsColor]=\"'#ffffff'\" [titleColor]=\"'#ffffff'\"></circle-progress>\n    </div>\n\n  </div>\n\n  <div class=\"ion-text-center\">\n    <h2 padding style=\"color: white;\">Sensor 2</h2>\n    <div text-center>\n      <circle-progress [percent]=\"temperatura2\" [radius]=\"60\" [outerStrokeWidth]=\"10\" [innerStrokeWidth]=\"7\"\n        [outerStrokeColor]=\"'#ff7514'\" [innerStrokeColor]=\"'#C7E596'\" [animation]=\"true\" [animationDuration]=\"300\"\n        [subtitle]=\"'Temperatura'\" [units]=\"'°C'\"[unitsColor]=\"'#ffffff'\" [titleColor]=\"'#ffffff'\"></circle-progress>\n\n      <circle-progress [percent]=\"humedad2\" [radius]=\"60\" [outerStrokeWidth]=\"10\" [innerStrokeWidth]=\"7\"\n        [outerStrokeColor]=\"'#256d7b'\" [innerStrokeColor]=\"'#C7E596'\" [animation]=\"true\" [animationDuration]=\"300\"\n        [subtitle]=\"'Humedad'\" [units]=\"'°C'\" [unitsColor]=\"'#ffffff'\" [titleColor]=\"'#ffffff'\"></circle-progress>\n    </div>\n\n  </div>\n\n\n  <div class=\"ion-text-center\">\n    <h2 padding style=\"color: white;\">Sensor 3</h2>\n\n\n\n\n    <div text-center>\n      <circle-progress [percent]=\"temperatura3\" [radius]=\"60\" [outerStrokeWidth]=\"10\" [innerStrokeWidth]=\"7\"\n        [outerStrokeColor]=\"'#ff7514'\" [innerStrokeColor]=\"'#C7E596'\" [animation]=\"true\" [animationDuration]=\"300\"\n        [subtitle]=\"'Temperatura'\" [units]=\"'°C'\" [unitsColor]=\"'#ffffff'\" [titleColor]=\"'#ffffff'\"></circle-progress>\n\n      <circle-progress [percent]=\"humedad3\" [radius]=\"60\" [outerStrokeWidth]=\"10\" [innerStrokeWidth]=\"7\"\n        [outerStrokeColor]=\"'#256d7b'\" [innerStrokeColor]=\"'#C7E596'\" [animation]=\"true\" [animationDuration]=\"300\"\n        [subtitle]=\"'Humedad'\" [units]=\"'°C'\" [unitsColor]=\"'#ffffff'\" [titleColor]=\"'#ffffff'\"></circle-progress>\n    </div>\n\n  </div>\n\n\n\n\n\n</ion-content>");

/***/ }),

/***/ "./src/app/mainmenu/mainmenu-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/mainmenu/mainmenu-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: MainmenuPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainmenuPageRoutingModule", function() { return MainmenuPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _mainmenu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainmenu.page */ "./src/app/mainmenu/mainmenu.page.ts");




const routes = [
    {
        path: '',
        component: _mainmenu_page__WEBPACK_IMPORTED_MODULE_3__["MainmenuPage"]
    }
];
let MainmenuPageRoutingModule = class MainmenuPageRoutingModule {
};
MainmenuPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MainmenuPageRoutingModule);



/***/ }),

/***/ "./src/app/mainmenu/mainmenu.module.ts":
/*!*********************************************!*\
  !*** ./src/app/mainmenu/mainmenu.module.ts ***!
  \*********************************************/
/*! exports provided: MainmenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainmenuPageModule", function() { return MainmenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _mainmenu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mainmenu-routing.module */ "./src/app/mainmenu/mainmenu-routing.module.ts");
/* harmony import */ var _mainmenu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mainmenu.page */ "./src/app/mainmenu/mainmenu.page.ts");
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-circle-progress */ "./node_modules/ng-circle-progress/__ivy_ngcc__/fesm2015/ng-circle-progress.js");








let MainmenuPageModule = class MainmenuPageModule {
};
MainmenuPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _mainmenu_routing_module__WEBPACK_IMPORTED_MODULE_5__["MainmenuPageRoutingModule"],
            ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__["NgCircleProgressModule"]
        ],
        declarations: [_mainmenu_page__WEBPACK_IMPORTED_MODULE_6__["MainmenuPage"]]
    })
], MainmenuPageModule);



/***/ }),

/***/ "./src/app/mainmenu/mainmenu.page.scss":
/*!*********************************************!*\
  !*** ./src/app/mainmenu/mainmenu.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5tZW51L21haW5tZW51LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/mainmenu/mainmenu.page.ts":
/*!*******************************************!*\
  !*** ./src/app/mainmenu/mainmenu.page.ts ***!
  \*******************************************/
/*! exports provided: MainmenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainmenuPage", function() { return MainmenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _servicios_g_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../servicios-g.service */ "./src/app/servicios-g.service.ts");
/* mainmenu.page **************************************************************/
/*                                                                            */
/*                       Pagina mainmenu (funciones)                          */
/*                                                                            */
/******************************************************************************/

/*******************************************************************************

    Notas:           Codigo de las funciones de la pagina mainmenu. Esta pagina
                     es la pagina principal al iniciar sesion. Tiene un menu
                     lateral para acceder a otra paginas y la lectura basica
                     de los sensores de x galpon.

    Registro de Revisiones:

    FECHA      RESPONSABLE  REVISION
    -----------------------------------------------------------------------
    Mar 05/20  S.Londoño    Implementacion original

    Mar 05/20  D.Salazar    Implementacion original


*******************************************************************************/





let MainmenuPage = class MainmenuPage {
    constructor(menu, navCtrl, _Servicios, storage, db, alertCtrl) {
        this.menu = menu;
        this.navCtrl = navCtrl;
        this._Servicios = _Servicios;
        this.storage = storage;
        this.db = db;
        this.alertCtrl = alertCtrl;
        /* Variables para los sensores */
        this.humedad = 0;
        this.temperatura = 0;
        this.humedad2 = 0;
        this.temperatura2 = 0;
        this.humedad3 = 0;
        this.temperatura3 = 0;
        this.contador = 200;
        this.deadChicken = 0;
    }
    ngOnInit() {
        /** Carga directamente los datos del servidor almacenados para cada uno de los sensosres */
        /** Se obtiene el objeto de usuario y se determina el galpon */
        this._Servicios.userState().subscribe((user) => {
            const _getUsuario = this._Servicios.getUsuario(user.uid).subscribe(res => {
                this.UsuarioLocal = res.payload.val();
                this.idGalpon = this.UsuarioLocal.galponid;
                this.storage.set('_idGalpon', this.idGalpon);
                console.log(this.idGalpon);
                this._Servicios.getChickenLost(this.idGalpon).subscribe(res => {
                    //this.deadChicken=null;
                    this.deadChicken = res;
                });
                /** Determina el contador para asiganarlo como un indice y obtener el ultimo dato almacenado en el servidor */
                this.db.object("Galpones/" + this.idGalpon + "/" + 'contador').snapshotChanges().subscribe(action => {
                    console.log(action.type);
                    console.log(action.key);
                    console.log(action.payload.val());
                    // this.contador = action.payload.val() as number;
                    /** Se obtiene el ultimo dato almacenado en la base de datos para la temperatura de x galpon para el sensor 1 */
                    this.db.object("Galpones/" + this.idGalpon + "/" + "SensorTemp1/" + (this.contador - 1) + "/val").snapshotChanges().subscribe(action => {
                        console.log(action.type);
                        console.log(action.key);
                        console.log(action.payload.val());
                        this.temperatura = action.payload.val();
                    });
                    /** Se obtiene el ultimo dato almacenado en la base de datos para la humedad de x galpon para el sensor 1 */
                    this.db.object("Galpones/" + this.idGalpon + "/" + "SensorHum1/" + (this.contador - 1) + "/val").snapshotChanges().subscribe(action => {
                        console.log(action.type);
                        console.log(action.key);
                        console.log(action.payload.val());
                        this.humedad = action.payload.val();
                    });
                    /** Se obtiene el ultimo dato almacenado en la base de datos para la temperatura de x galpon para el sensor 2 */
                    this.db.object("Galpones/" + this.idGalpon + "/" + "SensorTemp2/" + (this.contador - 1) + "/val").snapshotChanges().subscribe(action => {
                        console.log(action.type);
                        console.log(action.key);
                        console.log(action.payload.val());
                        this.temperatura2 = action.payload.val();
                    });
                    /** Se obtiene el ultimo dato almacenado en la base de datos para la humedad de x galpon para el sensor 2 */
                    this.db.object("Galpones/" + this.idGalpon + "/" + "SensorHum2/" + (this.contador - 1) + "/val").snapshotChanges().subscribe(action => {
                        console.log(action.type);
                        console.log(action.key);
                        console.log(action.payload.val());
                        this.humedad2 = action.payload.val();
                    });
                    /** Se obtiene el ultimo dato almacenado en la base de datos para la temperatura de x galpon para el sensor 3 */
                    this.db.object("Galpones/" + this.idGalpon + "/" + "SensorTemp3/" + (this.contador - 1) + "/val").snapshotChanges().subscribe(action => {
                        console.log(action.type);
                        console.log(action.key);
                        console.log(action.payload.val());
                        this.temperatura3 = action.payload.val();
                    });
                    /** Se obtiene el ultimo dato almacenado en la base de datos para la humedad de x galpon para el sensor 3 */
                    this.db.object("Galpones/" + this.idGalpon + "/" + "SensorHum3/" + (this.contador - 1) + "/val").snapshotChanges().subscribe(action => {
                        console.log(action.type);
                        console.log(action.key);
                        console.log(action.payload.val());
                        this.humedad3 = action.payload.val();
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
    control() {
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
    openHeatMap() {
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
    openEnd() {
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
    cerrar() {
        this.storage.set('log', 'no');
        this._Servicios.cerrarSesion();
        this.navCtrl.navigateRoot('/iniciar-sesion');
    }
    config() {
    }
    ayuda() {
    }
    agregarPollosMuertos() {
        this.presentAlert();
    }
    //Alerta inicial
    presentAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Pollos perdido',
                message: 'ingrese la cantidad de pollos perdidod',
                inputs: [
                    {
                        name: 'muertos',
                        type: 'number',
                    },
                ],
                buttons: [{
                        text: 'Si',
                        handler: (data) => {
                            this.deadChicken += this.convertToNumber(data.muertos);
                            console.log(this.deadChicken);
                            this._Servicios.setChickenLost(this.idGalpon, (this.deadChicken));
                        }
                    }],
                translucent: true,
                backdropDismiss: false
            });
            yield alert.present();
        });
    }
    convertToNumber(event) { return +event; }
};
MainmenuPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _servicios_g_service__WEBPACK_IMPORTED_MODULE_5__["ServiciosGService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
MainmenuPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mainmenu',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mainmenu.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/mainmenu/mainmenu.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mainmenu.page.scss */ "./src/app/mainmenu/mainmenu.page.scss")).default]
    })
], MainmenuPage);



/***/ })

}]);
//# sourceMappingURL=mainmenu-mainmenu-module-es2015.js.map