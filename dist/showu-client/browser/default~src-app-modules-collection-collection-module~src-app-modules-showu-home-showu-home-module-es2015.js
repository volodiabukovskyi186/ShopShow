(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~src-app-modules-collection-collection-module~src-app-modules-showu-home-showu-home-module"],{

/***/ "./src/app/modules/collection/collection-item/collection-item.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/collection/collection-item/collection-item.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CollectionItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionItemComponent", function() { return CollectionItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





function CollectionItemComponent_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.item == null ? null : ctx_r0.item.title);
} }
function CollectionItemComponent_h6_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.item == null ? null : ctx_r1.item.subtitle);
} }
function CollectionItemComponent_div_3_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r3.routerLinksWithId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.buttonText);
} }
function CollectionItemComponent_div_3_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r4.routerLinks);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.buttonText);
} }
function CollectionItemComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CollectionItemComponent_div_3_a_1_Template, 2, 2, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CollectionItemComponent_div_3_a_2_Template, 2, 2, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.item == null ? null : ctx_r2.item.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r2.item == null ? null : ctx_r2.item.id));
} }
class CollectionItemComponent {
    constructor() {
        this.buttonText = "View";
        this.routerLinks = [];
        this.ratio = "imax";
        this.host = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].hoststatic;
    }
    ngOnInit() { }
    get routerLinksWithId() {
        return this.item.id != null
            ? [...this.routerLinks, this.item.id]
            : this.routerLinks;
    }
}
CollectionItemComponent.ɵfac = function CollectionItemComponent_Factory(t) { return new (t || CollectionItemComponent)(); };
CollectionItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CollectionItemComponent, selectors: [["app-collection-item"]], inputs: { item: "item", buttonText: "buttonText", routerLinks: "routerLinks", ratio: "ratio", host: "host" }, decls: 7, vars: 5, consts: [[1, "title"], [4, "ngIf"], ["class", "flex", 4, "ngIf"], [1, "ratio", "collection-item"], [1, "square"], [1, "contain", 3, "src", "alt"], [1, "flex"], ["class", "more", 3, "routerLink", 4, "ngIf"], [1, "more", 3, "routerLink"]], template: function CollectionItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CollectionItemComponent_h2_1_Template, 2, 1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CollectionItemComponent_h6_2_Template, 2, 1, "h6", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CollectionItemComponent_div_3_Template, 3, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item == null ? null : ctx.item.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item == null ? null : ctx.item.subtitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.routerLinks.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.host != null ? ctx.host + (ctx.item == null ? null : ctx.item.image == null ? null : ctx.item.image.src_mini) : ctx.item == null ? null : ctx.item.cover, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.item == null ? null : ctx.item.title);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["[_nghost-%COMP%] {\n  position: relative;\n  background-color: #f2f2f2;\n  box-shadow: 0 1px 3px rgba(178, 178, 178, 0.14), 0 1px 2px rgba(178, 178, 178, 0.24);\n  transition: all 0.2s ease-in-out 0s;\n  transform-origin: center bottom;\n  border-radius: 5px;\n}\n[_nghost-%COMP%]:hover {\n  box-shadow: 0 3px 6px rgba(128, 128, 128, 0.16), 0 3px 6px rgba(128, 128, 128, 0.23);\n  transform: scale(1.005);\n}\n.collection-item[_ngcontent-%COMP%] {\n  width: 60%;\n  margin: 16px;\n  margin-left: auto;\n}\n.collection-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 5px;\n}\n.title[_ngcontent-%COMP%] {\n  z-index: 100;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  left: 32px;\n  width: 50%;\n}\n.title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  font-size: 2.1rem;\n  font-weight: lighter;\n}\n.title[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  font-size: 1.05rem;\n  font-weight: bold;\n  color: #9d9d9d;\n}\n.more[_ngcontent-%COMP%] {\n  font-weight: normal;\n  padding: 4px;\n  margin-top: 48px;\n  margin-bottom: 33%;\n  border-bottom: 2px solid transparent;\n  color: #9F1941;\n  text-decoration: none;\n  transition: all 0.2s ease-in-out 0s;\n}\n.more[_ngcontent-%COMP%]:hover {\n  border-color: #9F1941;\n}\n.medium[_nghost-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n}\n.medium[_nghost-%COMP%]   .title[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.medium[_nghost-%COMP%]   .more[_ngcontent-%COMP%] {\n  margin-bottom: unset;\n}\n@media (max-width: 1440px) {\n  [_nghost-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  [_nghost-%COMP%]   .title[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  [_nghost-%COMP%]   .more[_ngcontent-%COMP%] {\n    margin-bottom: unset;\n  }\n\n  .medium[_nghost-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n  .medium[_nghost-%COMP%]   .title[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .medium[_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .more[_ngcontent-%COMP%] {\n    margin-top: 16px;\n  }\n}\n@media (max-width: 1024px) {\n  [_nghost-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n  [_nghost-%COMP%]   .title[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  [_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .more[_ngcontent-%COMP%] {\n    margin-top: 16px;\n  }\n\n  .medium[_nghost-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .medium[_nghost-%COMP%]   .title[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .medium[_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .more[_ngcontent-%COMP%] {\n    margin-top: 8px;\n  }\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  [_nghost-%COMP%]   .title[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  [_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .more[_ngcontent-%COMP%] {\n    margin-top: 8px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92b2xvZGFidWtvdnNraWovRGVza3RvcC9uZy1zaG93dS1jbGllbnQxL3NyYy9zdHlsZXMvcmFpc2lucy9fdmFyaWFibGVzLnNjc3MiLCIvVXNlcnMvdm9sb2RhYnVrb3Zza2lqL0Rlc2t0b3Avbmctc2hvd3UtY2xpZW50MS9zcmMvYXBwL21vZHVsZXMvY29sbGVjdGlvbi9jb2xsZWN0aW9uLWl0ZW0vY29sbGVjdGlvbi1pdGVtLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3ZvbG9kYWJ1a292c2tpai9EZXNrdG9wL25nLXNob3d1LWNsaWVudDEvc3JjL3N0eWxlcy9yYWlzaW5zL19tYXRlcmlhbC1zaGFkb3cubWl4aW4uc2NzcyIsIi9Vc2Vycy92b2xvZGFidWtvdnNraWovRGVza3RvcC9uZy1zaG93dS1jbGllbnQxL3NyYy9zdHlsZXMvcmFpc2lucy9fbWl4aW5zLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvY29sbGVjdGlvbi9jb2xsZWN0aW9uLWl0ZW0vY29sbGVjdGlvbi1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BLGtCQUFBO0FBOEJBLGVBQUE7QUFJQSwyQkFBQTtBQU9BLGVBQUE7QUFFQSxrQkFBQTtBQWlDQSxlQUFBO0FDL0VBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQ1dFLG9GQUFBO0VDY0YsbUNBQUE7RUZ0QkEsK0JBQUE7RUFDQSxrQkQ2Qk87QUl6QlQ7QUhIRTtFQ1VFLG9GQUFBO0VEUkEsdUJBQUE7QUdLSjtBSERBO0VBQ0UsVUFBQTtFQUNBLFlEbEJNO0VDbUJOLGlCQUFBO0FHSUY7QUhIRTtFQUdFLGtCRGVLO0FJWlQ7QUhDQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBR0VGO0FIREU7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBR0dKO0FIREU7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUdHSjtBSENBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0RkSTtFQ2VKLHFCQUFBO0VFM0JBLG1DQUFBO0FDOEJGO0FIQUU7RUFDRSxxQkRuQkU7QUlxQk47QUhLTTtFQUNFLGlCQUFBO0FHRlI7QUhJTTtFQUNFLGVBQUE7QUdGUjtBSEtJO0VBQ0Usb0JBQUE7QUdITjtBRDFERTtFRnFFSTtJQUNFLGVBQUE7RUdQTjtFSFNJO0lBQ0UsZUFBQTtFR1BOO0VIVUU7SUFDRSxvQkFBQTtFR1JKOztFSGFJO0lBQ0UsaUJBQUE7RUdWTjtFSFlJO0lBQ0UsZUFBQTtFR1ZOO0VIWUk7SUFDRSxnQkR4R0E7RUk4Rk47QUFDRjtBRGhGRTtFRmtHSTtJQUNFLGlCQUFBO0VHZk47RUhpQkk7SUFDRSxlQUFBO0VHZk47RUhpQkk7SUFDRSxnQkR4SEE7RUl5R047O0VIcUJJO0lBQ0UsaUJBQUE7RUdsQk47RUhvQkk7SUFDRSxpQkFBQTtFR2xCTjtFSG9CSTtJQUNFLGVBQUE7RUdsQk47QUFDRjtBRHJHRTtFRitISTtJQUNFLGlCQUFBO0VHdkJOO0VIeUJJO0lBQ0UsaUJBQUE7RUd2Qk47RUh5Qkk7SUFDRSxlQUFBO0VHdkJOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NvbGxlY3Rpb24vY29sbGVjdGlvbi1pdGVtL2NvbGxlY3Rpb24taXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRzcGFjZTogMTZweDtcclxuXHJcbiR0aW1lOiAuMnM7XHJcbiRtb3Rpb246IGVhc2UtaW4tb3V0O1xyXG4kZWxhc3RpYzogY3ViaWMtYmV6aWVyKC43NSwtMC41LDAsMS43NSk7XHJcblxyXG4vKiAjcmVnaW9uIENvbG9ycyovXHJcblxyXG4kd2hpdGU6IHdoaXRlICFkZWZhdWx0O1xyXG5cclxuJGdyYXkxMDA6ICNmYWZhZmEgIWRlZmF1bHQ7XHJcbiRncmF5MjAwOiAjZWNlY2VjICFkZWZhdWx0O1xyXG4kZ3JheTMwMDogI2M0YzRjNCAhZGVmYXVsdDtcclxuJGdyYXk0MDA6ICNiMmIyYjIgIWRlZmF1bHQ7XHJcbiRncmF5NTAwOiAjODA4MDgwICFkZWZhdWx0O1xyXG4kZ3JheTYwMDogIzY0NjQ2NCAhZGVmYXVsdDtcclxuJGdyYXk3MDA6ICM0ODQ4NDggIWRlZmF1bHQ7XHJcbiRncmF5ODAwOiAjMzIzMjMyICFkZWZhdWx0O1xyXG4kZ3JheTg1MDogIzI0MjQyNCAhZGVmYXVsdDtcclxuJGdyYXk5MDA6ICMxNjE2MTYgIWRlZmF1bHQ7XHJcblxyXG4kYmxhY2s6IGJsYWNrICFkZWZhdWx0O1xyXG5cclxuJGJsdWU6ICAgICMxNjY0OTYgIWRlZmF1bHQ7XHJcbiRyZWQ6ICAgICAjZDQzMjQ4ICFkZWZhdWx0O1xyXG4kZ3JlZW46ICAgIzE2YjA2NCAhZGVmYXVsdDtcclxuJHllbGxvdzogICNmYmM1MzEgIWRlZmF1bHQ7XHJcbiRvcmFuZ2U6ICAjZmY4MDE2ICFkZWZhdWx0O1xyXG4kaW5kaWdvOiAgIzY0MTZlMCAhZGVmYXVsdDtcclxuJHBpbms6ICAgICNlMDMyYjIgIWRlZmF1bHQ7XHJcbiR0ZWFsOiAgICAjMTZjNDk2ICFkZWZhdWx0O1xyXG4kdmlvbGV0OiAgIzM5NEY2QyAhZGVmYXVsdDtcclxuXHJcbiRibGVhcjogJGdyYXkyMDA7XHJcbiRzbW9rZTogJGdyYXkyMDA7XHJcblxyXG4vKiAjZW5kcmVnaW9uICovXHJcblxyXG4kcmFkaXVzOiA1cHg7XHJcblxyXG4vKiAjcmVnaW9uIENvbG9ycyBPdmVycmlkZSovXHJcblxyXG4kcmVkOiAjOUYxOTQxO1xyXG5cclxuLy8gc2V0IHByaW1hcnkgY29sb3JcclxuJHByaW1hcnk6ICRyZWQ7XHJcblxyXG4vKiAjZW5kcmVnaW9uICovXHJcblxyXG4vKiAjcmVnaW9uIEZvbnRzICovXHJcblxyXG5cclxuJGZvbnRGYW1pbHlTYW5zU2VyaWY6IFwiT3BlbiBzYW5zXCIsIFwiU2Vnb2UgVUlcIiwgQXJpYWwsIHNhbnMtc2VyaWYgIWRlZmF1bHQ7XHJcbi8vICRmb250RmFtaWx5U2Fuc1NlcmlmOiBcIk9wZW4gc2Fuc1wiLCBcIlNlZ29lIFVJXCIsIEFyaWFsLCBzYW5zLXNlcmlmLCAhZGVmYXVsdDtcclxuJGZvbnRGYW1pbHlNb25vc3BhY2U6ICBDb25zb2xhcywgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2UgIWRlZmF1bHQ7XHJcbiRmb250RmFtaWx5OiAkZm9udEZhbWlseVNhbnNTZXJpZiAhZGVmYXVsdDtcclxuXHJcblxyXG4kZm9udFNpemU6IDFyZW0gIWRlZmF1bHQ7XHJcbiRmb250U2l6ZUxhcmdlOiAoMS4yOHJlbSkgIWRlZmF1bHQ7XHJcbiRmb250U2l6ZVNtYWxsOiAoLjhyZW0pICFkZWZhdWx0O1xyXG5cclxuJGZvbnRXZWlnaHRMaWdodDogMzAwICFkZWZhdWx0O1xyXG4kZm9udFdlaWdodE5vcm1hbDogNDAwICFkZWZhdWx0O1xyXG4kZm9udFdlaWdodEJvbGQ6IDcwMCAhZGVmYXVsdDtcclxuXHJcbiRmb250V2VpZ2h0OiAkZm9udFdlaWdodE5vcm1hbCAhZGVmYXVsdDtcclxuJGxpbmVIZWlnaHQ6IDEuMTUgIWRlZmF1bHQ7XHJcblxyXG4kZm9udFNpemVIMTogMi4yOHJlbSAhZGVmYXVsdDtcclxuJGZvbnRTaXplSDI6IDEuOTZyZW0gIWRlZmF1bHQ7XHJcbiRmb250U2l6ZUgzOiAxLjY0cmVtICFkZWZhdWx0O1xyXG4kZm9udFNpemVINDogMS4zMnJlbSAhZGVmYXVsdDtcclxuJGZvbnRTaXplSDU6IDEuMTZyZW0gIWRlZmF1bHQ7XHJcbiRmb250U2l6ZUg2OiAkZm9udFNpemUgIWRlZmF1bHQ7XHJcblxyXG5cclxuJGZvbnRTaXplRDE6IDMuNTZyZW0gIWRlZmF1bHQ7XHJcbiRmb250U2l6ZUQyOiAyLjI4cmVtICFkZWZhdWx0O1xyXG4kZm9udFNpemVEMzogMS42NHJlbSAhZGVmYXVsdDtcclxuJGZvbnRTaXplRDQ6IDEuMzJyZW0gIWRlZmF1bHQ7XHJcblxyXG4vKiAjZW5kcmVnaW9uICovXHJcblxyXG4vLyBnb2xkZW4gcmF0aW9cclxuXHJcbiRncl9zaG9ydGVyOiAzOC4xOTY2O1xyXG4kZ3JfbG9uZ2VyOiA2MS44MDM0OyIsIkBpbXBvcnQgXCJ+c3JjL3N0eWxlcy9yYWlzaW5zL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIn5zcmMvc3R5bGVzL3JhaXNpbnMvbWl4aW5zXCI7XG5cbjpob3N0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICBAaW5jbHVkZSBtYXRlcmlhbC1zaGFkb3coMSwgMSwgJGdyYXk0MDApO1xuICBAaW5jbHVkZSB0cmFuc2l0aW9uKCk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XG4gIGJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG4gICY6aG92ZXIge1xuICAgIEBpbmNsdWRlIG1hdGVyaWFsLXNoYWRvdygyLCAxLCAkZ3JheTUwMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAwNSk7XG4gIH1cbn1cblxuLmNvbGxlY3Rpb24taXRlbSB7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbjogJHNwYWNlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgaW1nIHtcbiAgICAvLyBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHJhZGl1cztcbiAgICAvLyBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJHJhZGl1cztcbiAgICBib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICB9XG59XG5cbi50aXRsZSB7XG4gIHotaW5kZXg6IDEwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGxlZnQ6ICRzcGFjZSAqIDI7XG4gIHdpZHRoOiA1MCU7XG4gIGgyIHtcbiAgICBtYXJnaW46ICRzcGFjZS8yIDA7XG4gICAgZm9udC1zaXplOiAyLjFyZW07XG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIH1cbiAgaDYge1xuICAgIG1hcmdpbjogJHNwYWNlLzIgMDtcbiAgICBmb250LXNpemU6IDEuMDVyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICM5ZDlkOWQ7XG4gIH1cbn1cblxuLm1vcmUge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBwYWRkaW5nOiAkc3BhY2UvNDtcbiAgbWFyZ2luLXRvcDogJHNwYWNlICogMztcbiAgbWFyZ2luLWJvdHRvbTogMzMlO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAkcHJpbWFyeTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBAaW5jbHVkZSB0cmFuc2l0aW9uKCk7XG5cbiAgJjpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeTtcbiAgfVxufVxuXG46aG9zdCB7XG4gICYubWVkaXVtIHtcbiAgICAudGl0bGUge1xuICAgICAgaDIge1xuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICAgIH1cbiAgICAgIGg2IHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgfVxuICAgIH1cbiAgICAubW9yZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiB1bnNldDtcbiAgICB9XG4gIH1cbn1cblxuQGluY2x1ZGUgc2NyZWVuLXcoMTQ0MHB4KSB7XG4gIDpob3N0IHtcbiAgICAudGl0bGUge1xuICAgICAgaDIge1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICB9XG4gICAgICBoNiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIH1cbiAgICB9XG4gICAgLm1vcmUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogdW5zZXQ7XG4gICAgfVxuICB9XG4gIDpob3N0Lm1lZGl1bSB7XG4gICAgLnRpdGxlIHtcbiAgICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICB9XG4gICAgICBoNiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIH1cbiAgICAgIC5tb3JlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogJHNwYWNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AaW5jbHVkZSBzY3JlZW4tdygxMDI0cHgpIHtcbiAgOmhvc3Qge1xuICAgIC50aXRsZSB7XG4gICAgICBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgfVxuICAgICAgaDYge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICB9XG4gICAgICAubW9yZSB7XG4gICAgICAgIG1hcmdpbi10b3A6ICRzcGFjZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgOmhvc3QubWVkaXVtIHtcbiAgICAudGl0bGUge1xuICAgICAgaDIge1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgIH1cbiAgICAgIGg2IHtcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICB9XG4gICAgICAubW9yZSB7XG4gICAgICAgIG1hcmdpbi10b3A6ICRzcGFjZS8yO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AaW5jbHVkZSBzY3JlZW4tdyg3NjhweCkge1xuICA6aG9zdCB7XG4gICAgLnRpdGxlIHtcbiAgICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICB9XG4gICAgICBoNiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgfVxuICAgICAgLm1vcmUge1xuICAgICAgICBtYXJnaW4tdG9wOiAkc3BhY2UvMjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8vLSBNaXhpbjogTWF0ZXJpYWwgU2hhZG93XG4vLy9cbi8vLyBCb3ggc2hhZG93cyBiYXNlZCBvbiA1IE1hdGVyaWFsIERlc2lnbiBwcmVzZXRzO1xuLy8vXG4vLy8gQHBhcmFtIHt2YXJpYWJsZX0gJHotZGVwdGggWzFdIC0gc2hhZG93IGRpc3RhbmNlIG9uIHotYXhpc1xuLy8vIEBwYXJhbSB7dmFyaWFibGV9ICRzdHJlbmd0aCBbMV0gLSBtdWx0aXBsaWVyIGZvciBzaGFkb3cgc3RyZW5ndGgvZGFya25lc3Ncbi8vLyBAcGFyYW0ge3ZhcmlhYmxlfSAkY29sb3IgWzFdIC0gc2hhZG93IGNvbG9yXG4vLy8gQGdyb3VwIGxheW91dFxuLy8vIEBleGFtcGxlXG4vLy8gICBkaXYge1xuLy8vICAgICBAaW5jbHVkZSBtYXRlcmlhbC1zaGFkb3coMyk7XG4vLy8gICB9XG4vLy8gQGxpbmsgaHR0cHM6Ly9jb2RlcGVuLmlvL2Rib3gvcGVuL1Jhd0JFV1xuLy8vIEBhdXRob3IgXCJEYW5pZWwgQm94XCJcbkBtaXhpbiBtYXRlcmlhbC1zaGFkb3coJHotZGVwdGg6IDEsICRzdHJlbmd0aDogMSwgJGNvbG9yOiBibGFjaykge1xuICBAaWYgJHotZGVwdGggPT0gMSB7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoJGNvbG9yLCAkc3RyZW5ndGggKiAwLjE0KSxcbiAgICAgIDAgMXB4IDJweCByZ2JhKCRjb2xvciwgJHN0cmVuZ3RoICogMC4yNCk7XG4gIH1cbiAgQGlmICR6LWRlcHRoID09IDIge1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKCRjb2xvciwgJHN0cmVuZ3RoICogMC4xNiksXG4gICAgICAwIDNweCA2cHggcmdiYSgkY29sb3IsICRzdHJlbmd0aCAqIDAuMjMpO1xuICB9XG4gIEBpZiAkei1kZXB0aCA9PSAzIHtcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKCRjb2xvciwgJHN0cmVuZ3RoICogMC4xOSksXG4gICAgICAwIDZweCA2cHggcmdiYSgkY29sb3IsICRzdHJlbmd0aCAqIDAuMjMpO1xuICB9XG4gIEBpZiAkei1kZXB0aCA9PSA0IHtcbiAgICBib3gtc2hhZG93OiAwIDE1cHggMzBweCByZ2JhKCRjb2xvciwgJHN0cmVuZ3RoICogMC4yNSksXG4gICAgICAwIDEwcHggMTBweCByZ2JhKCRjb2xvciwgJHN0cmVuZ3RoICogMC4yMik7XG4gIH1cbiAgQGlmICR6LWRlcHRoID09IDUge1xuICAgIGJveC1zaGFkb3c6IDAgMjBweCA0MHB4IHJnYmEoJGNvbG9yLCAkc3RyZW5ndGggKiAwLjMpLFxuICAgICAgMCAxNXB4IDEycHggcmdiYSgkY29sb3IsICRzdHJlbmd0aCAqIDAuMjIpO1xuICB9XG4gIEBpZiAoJHotZGVwdGggPCAxKSBvciAoJHotZGVwdGggPiA1KSB7XG4gICAgQHdhcm4gXCIkei1kZXB0aCBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNVwiO1xuICB9XG59XG4iLCJAaW1wb3J0ICdtYXRlcmlhbC1zaGFkb3cubWl4aW4nO1xuXG5AbWl4aW4gemVybyB7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuQG1peGluIGNvbC13aWR0aCgkd2lkdGgpIHtcbiAgZmxleC1iYXNpczogJHdpZHRoO1xuICBtYXgtd2lkdGg6ICR3aWR0aDtcbn1cblxuQG1peGluIHNjcmVlbi13KCRtdykge1xuICBAbWVkaWEgKG1heC13aWR0aDogJG13KSB7XG4gICAgICBAY29udGVudFxuICB9XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9uKCRlbGVtZW50OiBhbGwsICR0OiAkdGltZSwgJGRlbGF5OiAwcykge1xuICBAaWYgJGVsZW1lbnQ9PWRlZmF1bHQge1xuICAgICAgJGVsZW1lbnQ6IGFsbDtcbiAgfVxuICBAaWYgJHQ9PWRlZmF1bHQge1xuICAgICAgJHQ6ICR0aW1lO1xuICB9XG4gIEBpZiAkZGVsYXk9PWRlZmF1bHQge1xuICAgICAgJGRlbGF5OiAwcztcbiAgfVxuICB0cmFuc2l0aW9uOiAkZWxlbWVudCAkdCAkbW90aW9uICRkZWxheTtcbn0iLCIvKiAjcmVnaW9uIENvbG9ycyovXG4vKiAjZW5kcmVnaW9uICovXG4vKiAjcmVnaW9uIENvbG9ycyBPdmVycmlkZSovXG4vKiAjZW5kcmVnaW9uICovXG4vKiAjcmVnaW9uIEZvbnRzICovXG4vKiAjZW5kcmVnaW9uICovXG46aG9zdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMTc4LCAxNzgsIDE3OCwgMC4xNCksIDAgMXB4IDJweCByZ2JhKDE3OCwgMTc4LCAxNzgsIDAuMjQpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dCAwcztcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuOmhvc3Q6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yMyk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMDUpO1xufVxuXG4uY29sbGVjdGlvbi1pdGVtIHtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luOiAxNnB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbi5jb2xsZWN0aW9uLWl0ZW0gaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4udGl0bGUge1xuICB6LWluZGV4OiAxMDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBsZWZ0OiAzMnB4O1xuICB3aWR0aDogNTAlO1xufVxuLnRpdGxlIGgyIHtcbiAgbWFyZ2luOiA4cHggMDtcbiAgZm9udC1zaXplOiAyLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuLnRpdGxlIGg2IHtcbiAgbWFyZ2luOiA4cHggMDtcbiAgZm9udC1zaXplOiAxLjA1cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM5ZDlkOWQ7XG59XG5cbi5tb3JlIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgcGFkZGluZzogNHB4O1xuICBtYXJnaW4tdG9wOiA0OHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMyU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICM5RjE5NDE7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQgMHM7XG59XG4ubW9yZTpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogIzlGMTk0MTtcbn1cblxuOmhvc3QubWVkaXVtIC50aXRsZSBoMiB7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xufVxuOmhvc3QubWVkaXVtIC50aXRsZSBoNiB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbjpob3N0Lm1lZGl1bSAubW9yZSB7XG4gIG1hcmdpbi1ib3R0b206IHVuc2V0O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gIDpob3N0IC50aXRsZSBoMiB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG4gIDpob3N0IC50aXRsZSBoNiB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG4gIDpob3N0IC5tb3JlIHtcbiAgICBtYXJnaW4tYm90dG9tOiB1bnNldDtcbiAgfVxuXG4gIDpob3N0Lm1lZGl1bSAudGl0bGUgaDIge1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICB9XG4gIDpob3N0Lm1lZGl1bSAudGl0bGUgaDYge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuICA6aG9zdC5tZWRpdW0gLnRpdGxlIC5tb3JlIHtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIDpob3N0IC50aXRsZSBoMiB7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gIH1cbiAgOmhvc3QgLnRpdGxlIGg2IHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbiAgOmhvc3QgLnRpdGxlIC5tb3JlIHtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICB9XG5cbiAgOmhvc3QubWVkaXVtIC50aXRsZSBoMiB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cbiAgOmhvc3QubWVkaXVtIC50aXRsZSBoNiB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gIH1cbiAgOmhvc3QubWVkaXVtIC50aXRsZSAubW9yZSB7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgOmhvc3QgLnRpdGxlIGgyIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxuICA6aG9zdCAudGl0bGUgaDYge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICB9XG4gIDpob3N0IC50aXRsZSAubW9yZSB7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CollectionItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-collection-item",
                templateUrl: "./collection-item.component.html",
                styleUrls: ["./collection-item.component.scss"],
            }]
    }], function () { return []; }, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], buttonText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], routerLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ratio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], host: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/modules/collection/collection-page/collection-page.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/collection/collection-page/collection-page.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CollectionPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionPageComponent", function() { return CollectionPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_modules_collection_collection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/collection/collection.service */ "./src/app/modules/collection/collection.service.ts");
/* harmony import */ var _ui_rap_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/rap/breadcrumbs/breadcrumbs.component */ "./src/app/modules/ui/rap/breadcrumbs/breadcrumbs.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _collection_item_collection_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../collection-item/collection-item.component */ "./src/app/modules/collection/collection-item/collection-item.component.ts");






const _c0 = function () { return ["/", "collections", "view"]; };
function CollectionPageComponent_app_collection_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-collection-item", 3);
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r6)("buttonText", "Shop now")("routerLinks", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
} }
// import { NgxUiLoaderService } from "ngx-ui-loader";
class CollectionPageComponent {
    constructor(
    // private ngxService: NgxUiLoaderService,
    collection) {
        this.collection = collection;
        this.breadcrumbs = [
            {
                link: "/",
                title: "Homepage",
            },
            {
                link: "collection",
                title: "Collection",
            },
        ];
        this.collectionHandler = (data) => {
            this.collection.list = data.data;
            // this.ngxService.stopAll();
        };
    }
    ngOnInit() {
        this.collection.get().subscribe(this.collectionHandler);
    }
}
CollectionPageComponent.ɵfac = function CollectionPageComponent_Factory(t) { return new (t || CollectionPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modules_collection_collection_service__WEBPACK_IMPORTED_MODULE_1__["CollectionService"])); };
CollectionPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CollectionPageComponent, selectors: [["app-collection-page"]], decls: 6, vars: 2, consts: [[3, "breadcrumbs"], [1, "collections"], ["class", "medium", 3, "item", "buttonText", "routerLinks", 4, "ngFor", "ngForOf"], [1, "medium", 3, "item", "buttonText", "routerLinks"]], template: function CollectionPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rap-breadcrumbs", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CollectionPageComponent_app_collection_item_2_Template, 1, 4, "app-collection-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("breadcrumbs", ctx.breadcrumbs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.collection.list);
    } }, directives: [_ui_rap_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _collection_item_collection_item_component__WEBPACK_IMPORTED_MODULE_4__["CollectionItemComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n}\n.collections[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.collections[_ngcontent-%COMP%]   app-collection-item[_ngcontent-%COMP%] {\n  width: calc(33% - 16px);\n  margin: 8px;\n}\n@media (max-width: 768px) {\n  .collections[_ngcontent-%COMP%]   app-collection-item[_ngcontent-%COMP%] {\n    width: calc(50% - 16px);\n    margin: 8px;\n  }\n}\n@media (max-width: 640px) {\n  .collections[_ngcontent-%COMP%]   app-collection-item[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 8px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92b2xvZGFidWtvdnNraWovRGVza3RvcC9uZy1zaG93dS1jbGllbnQxL3NyYy9zdHlsZXMvcmFpc2lucy9fdmFyaWFibGVzLnNjc3MiLCIvVXNlcnMvdm9sb2RhYnVrb3Zza2lqL0Rlc2t0b3Avbmctc2hvd3UtY2xpZW50MS9zcmMvYXBwL21vZHVsZXMvY29sbGVjdGlvbi9jb2xsZWN0aW9uLXBhZ2UvY29sbGVjdGlvbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2NvbGxlY3Rpb24vY29sbGVjdGlvbi1wYWdlL2NvbGxlY3Rpb24tcGFnZS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy92b2xvZGFidWtvdnNraWovRGVza3RvcC9uZy1zaG93dS1jbGllbnQxL3NyYy9zdHlsZXMvcmFpc2lucy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUEsa0JBQUE7QUE4QkEsZUFBQTtBQUlBLDJCQUFBO0FBT0EsZUFBQTtBQUVBLGtCQUFBO0FBaUNBLGVBQUE7QUMvRUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUNJRjtBRERBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0lGO0FERkU7RUFDRSx1QkFBQTtFQUNBLFdBQUE7QUNJSjtBQ0pFO0VGTUU7SUFDRSx1QkFBQTtJQUNBLFdBQUE7RUNFSjtBQUNGO0FDWEU7RUZlRTtJQUNFLFdBQUE7SUFDQSxXQUFBO0VDREo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29sbGVjdGlvbi9jb2xsZWN0aW9uLXBhZ2UvY29sbGVjdGlvbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHNwYWNlOiAxNnB4O1xyXG5cclxuJHRpbWU6IC4ycztcclxuJG1vdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiRlbGFzdGljOiBjdWJpYy1iZXppZXIoLjc1LC0wLjUsMCwxLjc1KTtcclxuXHJcbi8qICNyZWdpb24gQ29sb3JzKi9cclxuXHJcbiR3aGl0ZTogd2hpdGUgIWRlZmF1bHQ7XHJcblxyXG4kZ3JheTEwMDogI2ZhZmFmYSAhZGVmYXVsdDtcclxuJGdyYXkyMDA6ICNlY2VjZWMgIWRlZmF1bHQ7XHJcbiRncmF5MzAwOiAjYzRjNGM0ICFkZWZhdWx0O1xyXG4kZ3JheTQwMDogI2IyYjJiMiAhZGVmYXVsdDtcclxuJGdyYXk1MDA6ICM4MDgwODAgIWRlZmF1bHQ7XHJcbiRncmF5NjAwOiAjNjQ2NDY0ICFkZWZhdWx0O1xyXG4kZ3JheTcwMDogIzQ4NDg0OCAhZGVmYXVsdDtcclxuJGdyYXk4MDA6ICMzMjMyMzIgIWRlZmF1bHQ7XHJcbiRncmF5ODUwOiAjMjQyNDI0ICFkZWZhdWx0O1xyXG4kZ3JheTkwMDogIzE2MTYxNiAhZGVmYXVsdDtcclxuXHJcbiRibGFjazogYmxhY2sgIWRlZmF1bHQ7XHJcblxyXG4kYmx1ZTogICAgIzE2NjQ5NiAhZGVmYXVsdDtcclxuJHJlZDogICAgICNkNDMyNDggIWRlZmF1bHQ7XHJcbiRncmVlbjogICAjMTZiMDY0ICFkZWZhdWx0O1xyXG4keWVsbG93OiAgI2ZiYzUzMSAhZGVmYXVsdDtcclxuJG9yYW5nZTogICNmZjgwMTYgIWRlZmF1bHQ7XHJcbiRpbmRpZ286ICAjNjQxNmUwICFkZWZhdWx0O1xyXG4kcGluazogICAgI2UwMzJiMiAhZGVmYXVsdDtcclxuJHRlYWw6ICAgICMxNmM0OTYgIWRlZmF1bHQ7XHJcbiR2aW9sZXQ6ICAjMzk0RjZDICFkZWZhdWx0O1xyXG5cclxuJGJsZWFyOiAkZ3JheTIwMDtcclxuJHNtb2tlOiAkZ3JheTIwMDtcclxuXHJcbi8qICNlbmRyZWdpb24gKi9cclxuXHJcbiRyYWRpdXM6IDVweDtcclxuXHJcbi8qICNyZWdpb24gQ29sb3JzIE92ZXJyaWRlKi9cclxuXHJcbiRyZWQ6ICM5RjE5NDE7XHJcblxyXG4vLyBzZXQgcHJpbWFyeSBjb2xvclxyXG4kcHJpbWFyeTogJHJlZDtcclxuXHJcbi8qICNlbmRyZWdpb24gKi9cclxuXHJcbi8qICNyZWdpb24gRm9udHMgKi9cclxuXHJcblxyXG4kZm9udEZhbWlseVNhbnNTZXJpZjogXCJPcGVuIHNhbnNcIiwgXCJTZWdvZSBVSVwiLCBBcmlhbCwgc2Fucy1zZXJpZiAhZGVmYXVsdDtcclxuLy8gJGZvbnRGYW1pbHlTYW5zU2VyaWY6IFwiT3BlbiBzYW5zXCIsIFwiU2Vnb2UgVUlcIiwgQXJpYWwsIHNhbnMtc2VyaWYsICFkZWZhdWx0O1xyXG4kZm9udEZhbWlseU1vbm9zcGFjZTogIENvbnNvbGFzLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZSAhZGVmYXVsdDtcclxuJGZvbnRGYW1pbHk6ICRmb250RmFtaWx5U2Fuc1NlcmlmICFkZWZhdWx0O1xyXG5cclxuXHJcbiRmb250U2l6ZTogMXJlbSAhZGVmYXVsdDtcclxuJGZvbnRTaXplTGFyZ2U6ICgxLjI4cmVtKSAhZGVmYXVsdDtcclxuJGZvbnRTaXplU21hbGw6ICguOHJlbSkgIWRlZmF1bHQ7XHJcblxyXG4kZm9udFdlaWdodExpZ2h0OiAzMDAgIWRlZmF1bHQ7XHJcbiRmb250V2VpZ2h0Tm9ybWFsOiA0MDAgIWRlZmF1bHQ7XHJcbiRmb250V2VpZ2h0Qm9sZDogNzAwICFkZWZhdWx0O1xyXG5cclxuJGZvbnRXZWlnaHQ6ICRmb250V2VpZ2h0Tm9ybWFsICFkZWZhdWx0O1xyXG4kbGluZUhlaWdodDogMS4xNSAhZGVmYXVsdDtcclxuXHJcbiRmb250U2l6ZUgxOiAyLjI4cmVtICFkZWZhdWx0O1xyXG4kZm9udFNpemVIMjogMS45NnJlbSAhZGVmYXVsdDtcclxuJGZvbnRTaXplSDM6IDEuNjRyZW0gIWRlZmF1bHQ7XHJcbiRmb250U2l6ZUg0OiAxLjMycmVtICFkZWZhdWx0O1xyXG4kZm9udFNpemVINTogMS4xNnJlbSAhZGVmYXVsdDtcclxuJGZvbnRTaXplSDY6ICRmb250U2l6ZSAhZGVmYXVsdDtcclxuXHJcblxyXG4kZm9udFNpemVEMTogMy41NnJlbSAhZGVmYXVsdDtcclxuJGZvbnRTaXplRDI6IDIuMjhyZW0gIWRlZmF1bHQ7XHJcbiRmb250U2l6ZUQzOiAxLjY0cmVtICFkZWZhdWx0O1xyXG4kZm9udFNpemVENDogMS4zMnJlbSAhZGVmYXVsdDtcclxuXHJcbi8qICNlbmRyZWdpb24gKi9cclxuXHJcbi8vIGdvbGRlbiByYXRpb1xyXG5cclxuJGdyX3Nob3J0ZXI6IDM4LjE5NjY7XHJcbiRncl9sb25nZXI6IDYxLjgwMzQ7IiwiQGltcG9ydCBcIn5zcmMvc3R5bGVzL3JhaXNpbnMvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwifnNyYy9zdHlsZXMvcmFpc2lucy9taXhpbnNcIjtcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY29sbGVjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgYXBwLWNvbGxlY3Rpb24taXRlbSB7XG4gICAgd2lkdGg6IGNhbGMoMzMlIC0gI3skc3BhY2V9KTtcbiAgICBtYXJnaW46ICRzcGFjZS8yO1xuICB9XG59XG5cbkBpbmNsdWRlIHNjcmVlbi13KDc2OHB4KSB7XG4gIC5jb2xsZWN0aW9ucyB7XG4gICAgYXBwLWNvbGxlY3Rpb24taXRlbSB7XG4gICAgICB3aWR0aDogY2FsYyg1MCUgLSAjeyRzcGFjZX0pO1xuICAgICAgbWFyZ2luOiAkc3BhY2UvMjtcbiAgICB9XG4gIH1cbn1cblxuQGluY2x1ZGUgc2NyZWVuLXcoNjQwcHgpIHtcbiAgLmNvbGxlY3Rpb25zIHtcbiAgICBhcHAtY29sbGVjdGlvbi1pdGVtIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luOiAkc3BhY2UvMjtcbiAgICB9XG4gIH1cbn1cbiIsIi8qICNyZWdpb24gQ29sb3JzKi9cbi8qICNlbmRyZWdpb24gKi9cbi8qICNyZWdpb24gQ29sb3JzIE92ZXJyaWRlKi9cbi8qICNlbmRyZWdpb24gKi9cbi8qICNyZWdpb24gRm9udHMgKi9cbi8qICNlbmRyZWdpb24gKi9cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNvbGxlY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmNvbGxlY3Rpb25zIGFwcC1jb2xsZWN0aW9uLWl0ZW0ge1xuICB3aWR0aDogY2FsYygzMyUgLSAxNnB4KTtcbiAgbWFyZ2luOiA4cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY29sbGVjdGlvbnMgYXBwLWNvbGxlY3Rpb24taXRlbSB7XG4gICAgd2lkdGg6IGNhbGMoNTAlIC0gMTZweCk7XG4gICAgbWFyZ2luOiA4cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAuY29sbGVjdGlvbnMgYXBwLWNvbGxlY3Rpb24taXRlbSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiA4cHg7XG4gIH1cbn0iLCJAaW1wb3J0ICdtYXRlcmlhbC1zaGFkb3cubWl4aW4nO1xuXG5AbWl4aW4gemVybyB7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuQG1peGluIGNvbC13aWR0aCgkd2lkdGgpIHtcbiAgZmxleC1iYXNpczogJHdpZHRoO1xuICBtYXgtd2lkdGg6ICR3aWR0aDtcbn1cblxuQG1peGluIHNjcmVlbi13KCRtdykge1xuICBAbWVkaWEgKG1heC13aWR0aDogJG13KSB7XG4gICAgICBAY29udGVudFxuICB9XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9uKCRlbGVtZW50OiBhbGwsICR0OiAkdGltZSwgJGRlbGF5OiAwcykge1xuICBAaWYgJGVsZW1lbnQ9PWRlZmF1bHQge1xuICAgICAgJGVsZW1lbnQ6IGFsbDtcbiAgfVxuICBAaWYgJHQ9PWRlZmF1bHQge1xuICAgICAgJHQ6ICR0aW1lO1xuICB9XG4gIEBpZiAkZGVsYXk9PWRlZmF1bHQge1xuICAgICAgJGRlbGF5OiAwcztcbiAgfVxuICB0cmFuc2l0aW9uOiAkZWxlbWVudCAkdCAkbW90aW9uICRkZWxheTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CollectionPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-collection-page",
                templateUrl: "./collection-page.component.html",
                styleUrls: ["./collection-page.component.scss"],
            }]
    }], function () { return [{ type: src_app_modules_collection_collection_service__WEBPACK_IMPORTED_MODULE_1__["CollectionService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/collection/collection-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/collection/collection-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: СollectionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "СollectionRoutingModule", function() { return СollectionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _collection_page_collection_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collection-page/collection-page.component */ "./src/app/modules/collection/collection-page/collection-page.component.ts");
/* harmony import */ var _collection_view_page_collection_view_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collection-view-page/collection-view-page.component */ "./src/app/modules/collection/collection-view-page/collection-view-page.component.ts");






const routes = [
    {
        path: "",
        component: _collection_page_collection_page_component__WEBPACK_IMPORTED_MODULE_2__["CollectionPageComponent"],
    },
    {
        path: "view/:id",
        component: _collection_view_page_collection_view_page_component__WEBPACK_IMPORTED_MODULE_3__["CollectionViewPageComponent"],
    },
];
class СollectionRoutingModule {
}
СollectionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: СollectionRoutingModule });
СollectionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function СollectionRoutingModule_Factory(t) { return new (t || СollectionRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](СollectionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](СollectionRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/collection/collection-view-page/collection-view-page.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/collection/collection-view-page/collection-view-page.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: CollectionViewPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionViewPageComponent", function() { return CollectionViewPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_modules_collection_collection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/collection/collection.service */ "./src/app/modules/collection/collection.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ui_rap_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/rap/breadcrumbs/breadcrumbs.component */ "./src/app/modules/ui/rap/breadcrumbs/breadcrumbs.component.ts");
/* harmony import */ var _collection_item_collection_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../collection-item/collection-item.component */ "./src/app/modules/collection/collection-item/collection-item.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _product_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../product/product-item/product-item.component */ "./src/app/modules/product/product-item/product-item.component.ts");









function CollectionViewPageComponent_app_product_item_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-product-item", 6);
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", item_r8.product);
} }
const _c0 = function (a0, a1, a2) { return { image: a0, title: a1, subtitle: a2 }; };
class CollectionViewPageComponent {
    constructor(
    // private ngxService: NgxUiLoaderService,
    collection, route) {
        this.collection = collection;
        this.route = route;
        this.breadcrumbs = [
            {
                link: "/",
                title: "Homepage",
            },
            {
                link: "collections",
                title: "Collections",
            },
        ];
        this.id = 0;
        this.host = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].hoststatic;
        this.collectionHandler = (data) => {
            var _a;
            // this.ngxService.stopAll();
            this.collection.item = data.data;
            this.breadcrumbs.push({
                link: `collections/${this.id}`,
                title: (_a = this.collection.item.description) === null || _a === void 0 ? void 0 : _a.title,
            });
        };
    }
    ngOnInit() {
        this.route.params.subscribe((data) => {
            this.id = data["id"];
            // this.ngxService.start();
            this.collection.getBy(this.id).subscribe(this.collectionHandler);
        });
    }
}
CollectionViewPageComponent.ɵfac = function CollectionViewPageComponent_Factory(t) { return new (t || CollectionViewPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modules_collection_collection_service__WEBPACK_IMPORTED_MODULE_2__["CollectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
CollectionViewPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CollectionViewPageComponent, selectors: [["app-collection-view-page"]], decls: 10, vars: 7, consts: [[3, "breadcrumbs"], [1, "row"], [1, "col"], [1, "grid"], [1, "medium", 3, "item"], [3, "product", 4, "ngFor", "ngForOf"], [3, "product"]], template: function CollectionViewPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rap-breadcrumbs", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-collection-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CollectionViewPageComponent_app_product_item_6_Template, 1, 1, "app-product-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("breadcrumbs", ctx.breadcrumbs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](3, _c0, ctx.collection.item == null ? null : ctx.collection.item.image, ctx.collection.item == null ? null : ctx.collection.item.description == null ? null : ctx.collection.item.description.title, ctx.collection.item == null ? null : ctx.collection.item.description == null ? null : ctx.collection.item.description.subtitle));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.collection.item.products);
    } }, directives: [_ui_rap_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbsComponent"], _collection_item_collection_item_component__WEBPACK_IMPORTED_MODULE_5__["CollectionItemComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _product_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_7__["ProductItemComponent"]], styles: [".col-side[_ngcontent-%COMP%] {\n  flex-basis: 196px;\n  max-width: 196px;\n}\n.filters[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 32px;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 16px;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n}\napp-collection-item[_ngcontent-%COMP%] {\n  grid-column: 1/3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92b2xvZGFidWtvdnNraWovRGVza3RvcC9uZy1zaG93dS1jbGllbnQxL3NyYy9zdHlsZXMvcmFpc2lucy9fdmFyaWFibGVzLnNjc3MiLCIvVXNlcnMvdm9sb2RhYnVrb3Zza2lqL0Rlc2t0b3Avbmctc2hvd3UtY2xpZW50MS9zcmMvYXBwL21vZHVsZXMvY29sbGVjdGlvbi9jb2xsZWN0aW9uLXZpZXctcGFnZS9jb2xsZWN0aW9uLXZpZXctcGFnZS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy92b2xvZGFidWtvdnNraWovRGVza3RvcC9uZy1zaG93dS1jbGllbnQxL3NyYy9zdHlsZXMvcmFpc2lucy9fbWl4aW5zLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvY29sbGVjdGlvbi9jb2xsZWN0aW9uLXZpZXctcGFnZS9jb2xsZWN0aW9uLXZpZXctcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQSxrQkFBQTtBQThCQSxlQUFBO0FBSUEsMkJBQUE7QUFPQSxlQUFBO0FBRUEsa0JBQUE7QUFpQ0EsZUFBQTtBQy9FQTtFQ09FLGlCRE5tQjtFQ09uQixnQkRQbUI7QUVLckI7QUZGQTtFQUNJLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxTQUFBO0FFS0o7QUZGQTtFQUNFLGFBQUE7RUFDQSxjRGRNO0VDZU4sNERBQUE7QUVLRjtBRkZBO0VBQ0UsZ0JBQUE7QUVLRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29sbGVjdGlvbi9jb2xsZWN0aW9uLXZpZXctcGFnZS9jb2xsZWN0aW9uLXZpZXctcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRzcGFjZTogMTZweDtcclxuXHJcbiR0aW1lOiAuMnM7XHJcbiRtb3Rpb246IGVhc2UtaW4tb3V0O1xyXG4kZWxhc3RpYzogY3ViaWMtYmV6aWVyKC43NSwtMC41LDAsMS43NSk7XHJcblxyXG4vKiAjcmVnaW9uIENvbG9ycyovXHJcblxyXG4kd2hpdGU6IHdoaXRlICFkZWZhdWx0O1xyXG5cclxuJGdyYXkxMDA6ICNmYWZhZmEgIWRlZmF1bHQ7XHJcbiRncmF5MjAwOiAjZWNlY2VjICFkZWZhdWx0O1xyXG4kZ3JheTMwMDogI2M0YzRjNCAhZGVmYXVsdDtcclxuJGdyYXk0MDA6ICNiMmIyYjIgIWRlZmF1bHQ7XHJcbiRncmF5NTAwOiAjODA4MDgwICFkZWZhdWx0O1xyXG4kZ3JheTYwMDogIzY0NjQ2NCAhZGVmYXVsdDtcclxuJGdyYXk3MDA6ICM0ODQ4NDggIWRlZmF1bHQ7XHJcbiRncmF5ODAwOiAjMzIzMjMyICFkZWZhdWx0O1xyXG4kZ3JheTg1MDogIzI0MjQyNCAhZGVmYXVsdDtcclxuJGdyYXk5MDA6ICMxNjE2MTYgIWRlZmF1bHQ7XHJcblxyXG4kYmxhY2s6IGJsYWNrICFkZWZhdWx0O1xyXG5cclxuJGJsdWU6ICAgICMxNjY0OTYgIWRlZmF1bHQ7XHJcbiRyZWQ6ICAgICAjZDQzMjQ4ICFkZWZhdWx0O1xyXG4kZ3JlZW46ICAgIzE2YjA2NCAhZGVmYXVsdDtcclxuJHllbGxvdzogICNmYmM1MzEgIWRlZmF1bHQ7XHJcbiRvcmFuZ2U6ICAjZmY4MDE2ICFkZWZhdWx0O1xyXG4kaW5kaWdvOiAgIzY0MTZlMCAhZGVmYXVsdDtcclxuJHBpbms6ICAgICNlMDMyYjIgIWRlZmF1bHQ7XHJcbiR0ZWFsOiAgICAjMTZjNDk2ICFkZWZhdWx0O1xyXG4kdmlvbGV0OiAgIzM5NEY2QyAhZGVmYXVsdDtcclxuXHJcbiRibGVhcjogJGdyYXkyMDA7XHJcbiRzbW9rZTogJGdyYXkyMDA7XHJcblxyXG4vKiAjZW5kcmVnaW9uICovXHJcblxyXG4kcmFkaXVzOiA1cHg7XHJcblxyXG4vKiAjcmVnaW9uIENvbG9ycyBPdmVycmlkZSovXHJcblxyXG4kcmVkOiAjOUYxOTQxO1xyXG5cclxuLy8gc2V0IHByaW1hcnkgY29sb3JcclxuJHByaW1hcnk6ICRyZWQ7XHJcblxyXG4vKiAjZW5kcmVnaW9uICovXHJcblxyXG4vKiAjcmVnaW9uIEZvbnRzICovXHJcblxyXG5cclxuJGZvbnRGYW1pbHlTYW5zU2VyaWY6IFwiT3BlbiBzYW5zXCIsIFwiU2Vnb2UgVUlcIiwgQXJpYWwsIHNhbnMtc2VyaWYgIWRlZmF1bHQ7XHJcbi8vICRmb250RmFtaWx5U2Fuc1NlcmlmOiBcIk9wZW4gc2Fuc1wiLCBcIlNlZ29lIFVJXCIsIEFyaWFsLCBzYW5zLXNlcmlmLCAhZGVmYXVsdDtcclxuJGZvbnRGYW1pbHlNb25vc3BhY2U6ICBDb25zb2xhcywgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2UgIWRlZmF1bHQ7XHJcbiRmb250RmFtaWx5OiAkZm9udEZhbWlseVNhbnNTZXJpZiAhZGVmYXVsdDtcclxuXHJcblxyXG4kZm9udFNpemU6IDFyZW0gIWRlZmF1bHQ7XHJcbiRmb250U2l6ZUxhcmdlOiAoMS4yOHJlbSkgIWRlZmF1bHQ7XHJcbiRmb250U2l6ZVNtYWxsOiAoLjhyZW0pICFkZWZhdWx0O1xyXG5cclxuJGZvbnRXZWlnaHRMaWdodDogMzAwICFkZWZhdWx0O1xyXG4kZm9udFdlaWdodE5vcm1hbDogNDAwICFkZWZhdWx0O1xyXG4kZm9udFdlaWdodEJvbGQ6IDcwMCAhZGVmYXVsdDtcclxuXHJcbiRmb250V2VpZ2h0OiAkZm9udFdlaWdodE5vcm1hbCAhZGVmYXVsdDtcclxuJGxpbmVIZWlnaHQ6IDEuMTUgIWRlZmF1bHQ7XHJcblxyXG4kZm9udFNpemVIMTogMi4yOHJlbSAhZGVmYXVsdDtcclxuJGZvbnRTaXplSDI6IDEuOTZyZW0gIWRlZmF1bHQ7XHJcbiRmb250U2l6ZUgzOiAxLjY0cmVtICFkZWZhdWx0O1xyXG4kZm9udFNpemVINDogMS4zMnJlbSAhZGVmYXVsdDtcclxuJGZvbnRTaXplSDU6IDEuMTZyZW0gIWRlZmF1bHQ7XHJcbiRmb250U2l6ZUg2OiAkZm9udFNpemUgIWRlZmF1bHQ7XHJcblxyXG5cclxuJGZvbnRTaXplRDE6IDMuNTZyZW0gIWRlZmF1bHQ7XHJcbiRmb250U2l6ZUQyOiAyLjI4cmVtICFkZWZhdWx0O1xyXG4kZm9udFNpemVEMzogMS42NHJlbSAhZGVmYXVsdDtcclxuJGZvbnRTaXplRDQ6IDEuMzJyZW0gIWRlZmF1bHQ7XHJcblxyXG4vKiAjZW5kcmVnaW9uICovXHJcblxyXG4vLyBnb2xkZW4gcmF0aW9cclxuXHJcbiRncl9zaG9ydGVyOiAzOC4xOTY2O1xyXG4kZ3JfbG9uZ2VyOiA2MS44MDM0OyIsIkBpbXBvcnQgXCJ+c3JjL3N0eWxlcy9yYWlzaW5zL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIn5zcmMvc3R5bGVzL3JhaXNpbnMvbWl4aW5zXCI7XG5cbi5jb2wtc2lkZSB7XG4gIEBpbmNsdWRlIGNvbC13aWR0aCgxOTZweCk7XG59XG5cbi5maWx0ZXJzIHtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogJHNwYWNlKjI7XG59XG5cbi5ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1nYXA6ICRzcGFjZTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjUwcHgsIDFmcikpO1xufVxuXG5hcHAtY29sbGVjdGlvbi1pdGVtIHtcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xuICAvLyB3aWR0aDogY2FsYyg1MCUgLSAjeyRzcGFjZSAqIDJ9KTtcbiAgLy8gbWFyZ2luOiAkc3BhY2UvMjtcbn1cblxuLy8gYXBwLXByb2R1Y3QtaXRlbSB7XG4vLyAgIHdpZHRoOiBjYWxjKDI1JSAtICN7JHNwYWNlICogMn0pO1xuLy8gICBtYXJnaW46ICRzcGFjZS8yO1xuLy8gfVxuXG4vLyBAaW5jbHVkZSBzY3JlZW4tdyg4MDBweCkge1xuLy8gICBhcHAtcHJvZHVjdC1pdGVtIHtcbi8vICAgICB3aWR0aDogY2FsYygzMyUgLSAjeyRzcGFjZX0pO1xuLy8gICAgIG1hcmdpbjogJHNwYWNlLzI7XG4vLyAgIH1cbi8vIH1cblxuLy8gQGluY2x1ZGUgc2NyZWVuLXcoNDgwcHgpIHtcbi8vICAgYXBwLXByb2R1Y3QtaXRlbSB7XG4vLyAgICAgd2lkdGg6IGNhbGMoNTAlIC0gI3skc3BhY2UgfSk7XG4vLyAgICAgbWFyZ2luOiAkc3BhY2UvMjtcbi8vICAgfVxuLy8gfVxuIiwiQGltcG9ydCAnbWF0ZXJpYWwtc2hhZG93Lm1peGluJztcblxuQG1peGluIHplcm8ge1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbkBtaXhpbiBjb2wtd2lkdGgoJHdpZHRoKSB7XG4gIGZsZXgtYmFzaXM6ICR3aWR0aDtcbiAgbWF4LXdpZHRoOiAkd2lkdGg7XG59XG5cbkBtaXhpbiBzY3JlZW4tdygkbXcpIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRtdykge1xuICAgICAgQGNvbnRlbnRcbiAgfVxufVxuXG5AbWl4aW4gdHJhbnNpdGlvbigkZWxlbWVudDogYWxsLCAkdDogJHRpbWUsICRkZWxheTogMHMpIHtcbiAgQGlmICRlbGVtZW50PT1kZWZhdWx0IHtcbiAgICAgICRlbGVtZW50OiBhbGw7XG4gIH1cbiAgQGlmICR0PT1kZWZhdWx0IHtcbiAgICAgICR0OiAkdGltZTtcbiAgfVxuICBAaWYgJGRlbGF5PT1kZWZhdWx0IHtcbiAgICAgICRkZWxheTogMHM7XG4gIH1cbiAgdHJhbnNpdGlvbjogJGVsZW1lbnQgJHQgJG1vdGlvbiAkZGVsYXk7XG59IiwiLyogI3JlZ2lvbiBDb2xvcnMqL1xuLyogI2VuZHJlZ2lvbiAqL1xuLyogI3JlZ2lvbiBDb2xvcnMgT3ZlcnJpZGUqL1xuLyogI2VuZHJlZ2lvbiAqL1xuLyogI3JlZ2lvbiBGb250cyAqL1xuLyogI2VuZHJlZ2lvbiAqL1xuLmNvbC1zaWRlIHtcbiAgZmxleC1iYXNpczogMTk2cHg7XG4gIG1heC13aWR0aDogMTk2cHg7XG59XG5cbi5maWx0ZXJzIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAzMnB4O1xufVxuXG4uZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtZ2FwOiAxNnB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyNTBweCwgMWZyKSk7XG59XG5cbmFwcC1jb2xsZWN0aW9uLWl0ZW0ge1xuICBncmlkLWNvbHVtbjogMS8zO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CollectionViewPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-collection-view-page",
                templateUrl: "./collection-view-page.component.html",
                styleUrls: ["./collection-view-page.component.scss"],
            }]
    }], function () { return [{ type: src_app_modules_collection_collection_service__WEBPACK_IMPORTED_MODULE_2__["CollectionService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/collection/collection.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/collection/collection.module.ts ***!
  \*********************************************************/
/*! exports provided: CollectionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionModule", function() { return CollectionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _collection_item_collection_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collection-item/collection-item.component */ "./src/app/modules/collection/collection-item/collection-item.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _collection_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./collection-routing.module */ "./src/app/modules/collection/collection-routing.module.ts");
/* harmony import */ var _collection_page_collection_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./collection-page/collection-page.component */ "./src/app/modules/collection/collection-page/collection-page.component.ts");
/* harmony import */ var _collection_view_page_collection_view_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./collection-view-page/collection-view-page.component */ "./src/app/modules/collection/collection-view-page/collection-view-page.component.ts");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui/ui.module */ "./src/app/modules/ui/ui.module.ts");
/* harmony import */ var _product_product_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../product/product.module */ "./src/app/modules/product/product.module.ts");










class CollectionModule {
}
CollectionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CollectionModule });
CollectionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CollectionModule_Factory(t) { return new (t || CollectionModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _ui_ui_module__WEBPACK_IMPORTED_MODULE_7__["UiModule"], _collection_routing_module__WEBPACK_IMPORTED_MODULE_4__["СollectionRoutingModule"], _product_product_module__WEBPACK_IMPORTED_MODULE_8__["ProductModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CollectionModule, { declarations: [_collection_item_collection_item_component__WEBPACK_IMPORTED_MODULE_2__["CollectionItemComponent"],
        _collection_page_collection_page_component__WEBPACK_IMPORTED_MODULE_5__["CollectionPageComponent"],
        _collection_view_page_collection_view_page_component__WEBPACK_IMPORTED_MODULE_6__["CollectionViewPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _ui_ui_module__WEBPACK_IMPORTED_MODULE_7__["UiModule"], _collection_routing_module__WEBPACK_IMPORTED_MODULE_4__["СollectionRoutingModule"], _product_product_module__WEBPACK_IMPORTED_MODULE_8__["ProductModule"]], exports: [_collection_item_collection_item_component__WEBPACK_IMPORTED_MODULE_2__["CollectionItemComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CollectionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _collection_item_collection_item_component__WEBPACK_IMPORTED_MODULE_2__["CollectionItemComponent"],
                    _collection_page_collection_page_component__WEBPACK_IMPORTED_MODULE_5__["CollectionPageComponent"],
                    _collection_view_page_collection_view_page_component__WEBPACK_IMPORTED_MODULE_6__["CollectionViewPageComponent"],
                ],
                exports: [_collection_item_collection_item_component__WEBPACK_IMPORTED_MODULE_2__["CollectionItemComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _ui_ui_module__WEBPACK_IMPORTED_MODULE_7__["UiModule"], _collection_routing_module__WEBPACK_IMPORTED_MODULE_4__["СollectionRoutingModule"], _product_product_module__WEBPACK_IMPORTED_MODULE_8__["ProductModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/collection/collection.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/collection/collection.service.ts ***!
  \**********************************************************/
/*! exports provided: CollectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionService", function() { return CollectionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class CollectionService {
    constructor(http) {
        this.http = http;
        this.list = [];
        this.item = {
            created_at: null,
            description: {
                collection_id: null,
                created_at: null,
                description: null,
                id: null,
                lang_id: null,
                subtitle: null,
                title: null,
                updated_at: null,
            },
            id: null,
            image: {
                album_id: null,
                created_at: null,
                id: null,
                src: null,
                src_mini: null,
                updated_at: null,
                user_id: null,
            },
            image_id: null,
            products: [],
            status: null,
            updated_at: null,
        };
    }
    get() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].host + `client/collection?lang=en&skip=0`);
    }
    getLastThree() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].host + `client/collection?lang=en&skip=0&take=3`);
    }
    getBy(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].host + `/client/product_collection/${id}`);
    }
}
CollectionService.ɵfac = function CollectionService_Factory(t) { return new (t || CollectionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CollectionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CollectionService, factory: CollectionService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CollectionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~src-app-modules-collection-collection-module~src-app-modules-showu-home-showu-home-module-es2015.js.map