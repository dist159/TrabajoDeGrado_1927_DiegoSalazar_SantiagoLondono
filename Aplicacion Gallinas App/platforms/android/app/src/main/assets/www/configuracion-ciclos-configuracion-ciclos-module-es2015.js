(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["configuracion-ciclos-configuracion-ciclos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/configuracion-ciclos/configuracion-ciclos.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/configuracion-ciclos/configuracion-ciclos.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-button slot=\"start\" fill=\"clear\" (click)=\"back()\">\n      <ion-icon name=\"arrow-back\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"--background: #212852; height: 100%;\">\n\n\n  <form #form=\"ngForm\">\n    <ion-grid>\n      <ion-row color=\"primary\" justify-content-center class=\"ion-text-center\">\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div class=\"ion-text-center\">\n            <h3 style=\"font-family: 'moon';color: white; margin: auto;\">Crear ciclo</h3>\n          </div>\n          <div padding>\n            <ion-item>\n              <ion-label>Fecha inicial</ion-label>\n              <ion-datetime displayFormat=\"DD-MM-YYYY\" placeholder=\"Seleccionar fecha\" (ionChange)=\"onChange($event)\">\n              </ion-datetime>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\"># de pollos</ion-label>\n              <ion-input name=\"nn\" type=\"number\" ngModel required [(ngModel)]=\"numPollos\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\"># de ciclos</ion-label>\n              <ion-input name=\"nn\" type=\"number\" ngModel required [(ngModel)]=\"numCiclos\"></ion-input>\n            </ion-item>\n          </div>\n          <div padding>\n            <ion-button style=\"font-family: 'moon';color: white; margin: auto;\" size=\"large\" type=\"submit\"\n              (click)=\"confirmarCiclos()\" [disabled]=\"form.invalid\" expand=\"block\">\n              confirmar ciclos</ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-text-center\" >\n        <ion-col *ngFor=\"let item of ciclos\" class=\"ion-text-center\" align-self-center size-md=\"6\" size-lg=\"5\"\n          size-xs=\"12\">\n\n          <ion-title style=\"font-family: 'moon';color: white; margin: auto;\">\n            Ciclo: {{item.num}}\n          </ion-title>\n          <ion-item>\n            <ion-label position=\"floating\">Set point Temperatura</ion-label>\n            <ion-input name=\"x1\" type=\"number\" ngModel [(ngModel)]=\"item.setPointTEMP\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Set point Humedad (0-1)</ion-label>\n            <ion-input name=\"x2\" type=\"number\" ngModel [(ngModel)]=\"item.setPointHUM\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\"># dias</ion-label>\n            <ion-input name=\"x3\" type=\"number\" ngModel [(ngModel)]=\"item.dias\"></ion-input>\n          </ion-item>\n\n        </ion-col>\n        <ion-row padding *ngIf=\"ciclos\" class=\"ion-text-center\" style=\"width: 100%;\">\n          <ion-button style=\"font-family: 'moon';color: white;margin:auto\" class=\"ion-text-center\" size=\"large\"\n            type=\"submit\" (click)=\"crearCiclo()\" expand=\"block\">Crear ciclo</ion-button>\n        </ion-row>\n\n      </ion-row>\n    </ion-grid>\n  </form>\n  <div text-center>\n    <ion-row text-center>\n    </ion-row>\n  </div>\n\n\n\n</ion-content>");

/***/ }),

/***/ "./src/app/configuracion-ciclos/configuracion-ciclos-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/configuracion-ciclos/configuracion-ciclos-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ConfiguracionCiclosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracionCiclosPageRoutingModule", function() { return ConfiguracionCiclosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _configuracion_ciclos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configuracion-ciclos.page */ "./src/app/configuracion-ciclos/configuracion-ciclos.page.ts");




const routes = [
    {
        path: '',
        component: _configuracion_ciclos_page__WEBPACK_IMPORTED_MODULE_3__["ConfiguracionCiclosPage"]
    }
];
let ConfiguracionCiclosPageRoutingModule = class ConfiguracionCiclosPageRoutingModule {
};
ConfiguracionCiclosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConfiguracionCiclosPageRoutingModule);



/***/ }),

/***/ "./src/app/configuracion-ciclos/configuracion-ciclos.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/configuracion-ciclos/configuracion-ciclos.module.ts ***!
  \*********************************************************************/
/*! exports provided: ConfiguracionCiclosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracionCiclosPageModule", function() { return ConfiguracionCiclosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _configuracion_ciclos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./configuracion-ciclos-routing.module */ "./src/app/configuracion-ciclos/configuracion-ciclos-routing.module.ts");
/* harmony import */ var _configuracion_ciclos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./configuracion-ciclos.page */ "./src/app/configuracion-ciclos/configuracion-ciclos.page.ts");







let ConfiguracionCiclosPageModule = class ConfiguracionCiclosPageModule {
};
ConfiguracionCiclosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _configuracion_ciclos_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfiguracionCiclosPageRoutingModule"]
        ],
        declarations: [_configuracion_ciclos_page__WEBPACK_IMPORTED_MODULE_6__["ConfiguracionCiclosPage"]]
    })
], ConfiguracionCiclosPageModule);



/***/ }),

/***/ "./src/app/configuracion-ciclos/configuracion-ciclos.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/configuracion-ciclos/configuracion-ciclos.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZ3VyYWNpb24tY2ljbG9zL2NvbmZpZ3VyYWNpb24tY2ljbG9zLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/configuracion-ciclos/configuracion-ciclos.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/configuracion-ciclos/configuracion-ciclos.page.ts ***!
  \*******************************************************************/
/*! exports provided: ConfiguracionCiclosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracionCiclosPage", function() { return ConfiguracionCiclosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _servicios_g_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios-g.service */ "./src/app/servicios-g.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let ConfiguracionCiclosPage = class ConfiguracionCiclosPage {
    constructor(_Servicios, storage, navCtrl) {
        this._Servicios = _Servicios;
        this.storage = storage;
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
        this.storage.get("_idGalpon").then(res => {
            this.idGalpon = res;
        });
    }
    confirmarCiclos() {
        this.ciclos = [];
        for (let i = 0; i < this.numCiclos; i++) {
            this.ciclos.push({ num: i + 1, setPointTEMP: "", setPointHUM: "", dias: "" });
        }
    }
    onChange(event) {
        console.log("aa: " + event.detail.value);
        this.fechaInicial = event.detail.value;
        this.fechaInicial = this.fechaInicial.substring(0, 10);
    }
    crearCiclo() {
        let dias = 0;
        let diaTemp = "";
        let mesTemp = "";
        for (let item of this.ciclos) {
            dias += item.dias;
        }
        let tempDate = new Date(this.fechaInicial);
        tempDate.setDate(tempDate.getDate() + dias);
        console.log(tempDate.getUTCDate());
        if (tempDate.getUTCDate() < 10) {
            diaTemp = "0" + tempDate.getUTCDate();
        }
        else {
            diaTemp = "" + tempDate.getUTCDate();
        }
        if (tempDate.getUTCMonth() < 10) {
            mesTemp = "0" + tempDate.getUTCMonth();
        }
        else {
            mesTemp = "" + tempDate.getUTCMonth();
        }
        let fechafin = diaTemp + "-" + mesTemp + "-" + tempDate.getUTCFullYear();
        console.log(fechafin);
        const cicloNuevo = {
            fechaInicial: this.fechaInicial, numeroCiclos: this.numCiclos,
            ciclos: this.ciclos, numPollos: this.numPollos, numPollosDead: 0, diasTotales: dias, fechaFinal: fechafin
        };
        this._Servicios.CreateCicle(cicloNuevo, this.idGalpon);
    }
    back() {
        this.navCtrl.back();
    }
    addDays(date, days) {
        date.setDate(date.getDate() + days);
        console.log(date);
        return date;
    }
};
ConfiguracionCiclosPage.ctorParameters = () => [
    { type: _servicios_g_service__WEBPACK_IMPORTED_MODULE_2__["ServiciosGService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
ConfiguracionCiclosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-configuracion-ciclos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./configuracion-ciclos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/configuracion-ciclos/configuracion-ciclos.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./configuracion-ciclos.page.scss */ "./src/app/configuracion-ciclos/configuracion-ciclos.page.scss")).default]
    })
], ConfiguracionCiclosPage);



/***/ })

}]);
//# sourceMappingURL=configuracion-ciclos-configuracion-ciclos-module-es2015.js.map