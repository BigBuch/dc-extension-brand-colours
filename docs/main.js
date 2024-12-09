"use strict";
(self["webpackChunkdc_extension_brand_colours"] = self["webpackChunkdc_extension_brand_colours"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_brand_color_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/brand-color.service */ 1224);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _chosen_color_summary_chosen_color_summary_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chosen-color-summary/chosen-color-summary.component */ 5560);
/* harmony import */ var _color_list_color_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color-list/color-list.component */ 8657);






function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.title);
} }
class AppComponent {
    constructor(colorSource) {
        this.colorSource = colorSource;
        this.colors = { name: '', compact: false, perRow: 0, colors: [], groups: [] };
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.colorSource.initialize();
            this.colors = this.colorSource.colors;
            this.selectedColor = this.colorSource.selected;
            this.title = this.colorSource.params.title;
        });
    }
    selectColor(color) {
        this.colorSource.selectColor(color);
        this.selectedColor = this.colorSource.selected;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_brand_color_service__WEBPACK_IMPORTED_MODULE_0__.BrandColorService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["amp-root"]], decls: 3, vars: 4, consts: [["class", "amp-root__title", 4, "ngIf"], [3, "color", "clear"], [3, "colors", "selectedColor", "selection"], [1, "amp-root__title"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AppComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "amp-chosen-color-summary", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("clear", function AppComponent_Template_amp_chosen_color_summary_clear_1_listener() { return ctx.selectColor(null); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "amp-color-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selection", function AppComponent_Template_amp_color_list_selection_2_listener($event) { return ctx.selectColor($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", ctx.selectedColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("colors", ctx.colors)("selectedColor", ctx.selectedColor);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _chosen_color_summary_chosen_color_summary_component__WEBPACK_IMPORTED_MODULE_1__.ChosenColorSummaryComponent, _color_list_color_list_component__WEBPACK_IMPORTED_MODULE_2__.ColorListComponent], styles: [".amp-root__title[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBQUoiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFtcC1yb290IHtcclxuICAmX190aXRsZSB7XHJcbiAgICBjb2xvcjogIzY2NjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ 89);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _chosen_color_summary_chosen_color_summary_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chosen-color-summary/chosen-color-summary.component */ 5560);
/* harmony import */ var _color_list_color_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color-list/color-list.component */ 8657);
/* harmony import */ var _color_preview_color_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color-preview/color-preview.component */ 7696);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _icons_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons.module */ 5852);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);













class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__.MatTooltipModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatRippleModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule,
            _icons_module__WEBPACK_IMPORTED_MODULE_4__.IconsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _chosen_color_summary_chosen_color_summary_component__WEBPACK_IMPORTED_MODULE_1__.ChosenColorSummaryComponent,
        _color_list_color_list_component__WEBPACK_IMPORTED_MODULE_2__.ColorListComponent,
        _color_preview_color_preview_component__WEBPACK_IMPORTED_MODULE_3__.ColorPreviewComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__.MatTooltipModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatRippleModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule,
        _icons_module__WEBPACK_IMPORTED_MODULE_4__.IconsModule] }); })();


/***/ }),

/***/ 5560:
/*!************************************************************************!*\
  !*** ./src/app/chosen-color-summary/chosen-color-summary.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChosenColorSummaryComponent": () => (/* binding */ ChosenColorSummaryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _color_preview_color_preview_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../color-preview/color-preview.component */ 7696);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 5590);






const _c0 = function (a0) { return { "amp-chosen-color-summary__delete--hidden": a0 }; };
class ChosenColorSummaryComponent {
    constructor() {
        this.clear = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() {
    }
    ngOnChanges() {
        this.animation = null;
        setTimeout(() => {
            this.animation = 'pulse';
        }, 1);
    }
    signalDelete() {
        this.clear.emit(true);
    }
}
ChosenColorSummaryComponent.ɵfac = function ChosenColorSummaryComponent_Factory(t) { return new (t || ChosenColorSummaryComponent)(); };
ChosenColorSummaryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChosenColorSummaryComponent, selectors: [["amp-chosen-color-summary"]], inputs: { color: "color" }, outputs: { clear: "clear", toggle: "toggle" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 9, consts: [[1, "amp-chosen-color-summary__color", 3, "color"], [1, "amp-chosen-color-summary__name"], ["mat-icon-button", "", "aria-label", "Remove Colour", 1, "amp-chosen-color-summary__delete", 3, "ngClass", "click"], ["svgIcon", "delete"]], template: function ChosenColorSummaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "amp-color-preview", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChosenColorSummaryComponent_Template_button_click_3_listener() { return ctx.signalDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("animation-name", ctx.animation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx.color == null ? null : ctx.color.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("animation-name", ctx.animation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.color == null ? "No Colour Selected" : ctx.color.name, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, ctx.color == null));
    } }, directives: [_color_preview_color_preview_component__WEBPACK_IMPORTED_MODULE_0__.ColorPreviewComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  height: 50px;\n  align-items: center;\n}\n\n@-webkit-keyframes pulse {\n  from {\n    border-color: #449adf;\n    color: #449adf;\n  }\n  to {\n    border-color: #747980;\n    color: black;\n  }\n}\n\n@keyframes pulse {\n  from {\n    border-color: #449adf;\n    color: #449adf;\n  }\n  to {\n    border-color: #747980;\n    color: black;\n  }\n}\n\n.amp-chosen-color-summary__color[_ngcontent-%COMP%] {\n  margin: 6px;\n  -webkit-animation-duration: 1.5s;\n          animation-duration: 1.5s;\n}\n\n.amp-chosen-color-summary__name[_ngcontent-%COMP%] {\n  padding: 6px;\n  font-size: 16px;\n  flex: 1;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  -webkit-animation-duration: 1.5s;\n          animation-duration: 1.5s;\n}\n\n.amp-chosen-color-summary__delete[_ngcontent-%COMP%] {\n  transition: opacity 0.5s;\n}\n\n.amp-chosen-color-summary__delete--hidden[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNob3Nlbi1jb2xvci1zdW1tYXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSxxQkFBQTtJQUNBLGNBQUE7RUFDRjtFQUNBO0lBQ0UscUJBQUE7SUFDQSxZQUFBO0VBQ0Y7QUFDRjs7QUFUQTtFQUNFO0lBQ0UscUJBQUE7SUFDQSxjQUFBO0VBQ0Y7RUFDQTtJQUNFLHFCQUFBO0lBQ0EsWUFBQTtFQUNGO0FBQ0Y7O0FBR0U7RUFDRSxXQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtBQURKOztBQUlFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtBQUZKOztBQUtFO0VBQ0Usd0JBQUE7QUFISjs7QUFLSTtFQUNFLFVBQUE7QUFITiIsImZpbGUiOiJjaG9zZW4tY29sb3Itc3VtbWFyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcclxuICBmcm9tIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzQ0OWFkZjtcclxuICAgIGNvbG9yOiAjNDQ5YWRmO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICBib3JkZXItY29sb3I6ICM3NDc5ODA7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG59XHJcblxyXG4uYW1wLWNob3Nlbi1jb2xvci1zdW1tYXJ5IHtcclxuICAmX19jb2xvciB7XHJcbiAgICBtYXJnaW46IDZweDtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcclxuICB9XHJcblxyXG4gICZfX25hbWUge1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZmxleDogMTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xyXG4gIH1cclxuXHJcbiAgJl9fZGVsZXRlIHtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cztcclxuXHJcbiAgICAmLS1oaWRkZW4ge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 8657:
/*!****************************************************!*\
  !*** ./src/app/color-list/color-list.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorListComponent": () => (/* binding */ ColorListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _color_preview_color_preview_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../color-preview/color-preview.component */ 7696);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ 89);







const _c0 = ["list"];
const _c1 = function (a0) { return { "amp-color-list__item--highlight": a0 }; };
const _c2 = function (a0, a1) { return { "amp-color-list__color--highlight": a0, "amp-color-list__color--selected": a1 }; };
function ColorListComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function ColorListComponent_div_7_Template_div_mouseenter_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const color_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.setHover(color_r2); })("mouseleave", function ColorListComponent_div_7_Template_div_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.setHover(null); })("click", function ColorListComponent_div_7_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const color_r2 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.selectColor(color_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "amp-color-preview", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const color_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c1, ctx_r1.isHover(color_r2)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", color_r2.color)("matTooltip", color_r2.name)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](7, _c2, ctx_r1.isHover(color_r2), ctx_r1.isSelected(color_r2)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](color_r2.name);
} }
const _c3 = function (a0, a1) { return { "amp-color-list__title--expanded": a0, "amp-color-list__title--failed": a1 }; };
const _c4 = function (a0) { return { "amp-color-list__list--compact": a0 }; };
class ColorListComponent {
    constructor() {
        this.expanded = false;
        this.selection = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.containerHeight = '0px';
    }
    ngOnInit() {
        this.listener = this.windowResized.bind(this);
        window.addEventListener('resize', this.listener);
        this.updateExpanded();
    }
    ngOnChanges() {
        setTimeout(() => {
            this.updateExpanded();
        }, 1);
    }
    ngOnDestroy() {
        window.removeEventListener('resize', this.listener);
    }
    windowResized(event) {
        this.updateExpanded();
    }
    setHover(color) {
        this.hoverColor = color;
    }
    isHover(color) {
        return color === this.hoverColor || color === this.selectedColor;
    }
    isSelected(color) {
        return color === this.selectedColor;
    }
    selectColor(color) {
        this.selection.emit(color);
    }
    toggleExpand() {
        this.expanded = !this.expanded;
        this.updateExpanded();
    }
    updateExpanded() {
        this.containerHeight = (this.expanded ? this.list.nativeElement.clientHeight : 0) + 'px';
    }
    calculateMaxWidth() {
        if (!this.colors.perRow) {
            return null;
        }
        return this.colors.perRow * (this.colors.compact ? 38 : 50) + 'px';
    }
}
ColorListComponent.ɵfac = function ColorListComponent_Factory(t) { return new (t || ColorListComponent)(); };
ColorListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ColorListComponent, selectors: [["amp-color-list"]], viewQuery: function ColorListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.list = _t.first);
    } }, inputs: { expanded: "expanded", colors: "colors", selectedColor: "selectedColor" }, outputs: { selection: "selection" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 8, vars: 13, consts: [[1, "amp-color-list__title", 3, "ngClass", "click"], [1, "amp-color-list__container"], [1, "amp-color-list__list", 3, "ngClass"], ["list", ""], ["class", "amp-color-list__item", 3, "ngClass", "mouseenter", "mouseleave", "click", 4, "ngFor", "ngForOf"], [1, "amp-color-list__item", 3, "ngClass", "mouseenter", "mouseleave", "click"], ["matRipple", "", 3, "color", "matTooltip", "ngClass"], [1, "amp-color-list__caption"]], template: function ColorListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ColorListComponent_Template_div_click_0_listener() { return ctx.toggleExpand(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "keyboard_arrow_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1)(5, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ColorListComponent_div_7_Template, 4, 10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](8, _c3, ctx.expanded, ctx.colors.failure));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.colors.name, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx.containerHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("max-width", ctx.calculateMaxWidth());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c4, ctx.colors.compact));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.colors.colors);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _color_preview_color_preview_component__WEBPACK_IMPORTED_MODULE_0__.ColorPreviewComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRipple, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__.MatTooltip], styles: [".amp-color-list__title[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #808080;\n  border-bottom: 1px solid #808080;\n  padding: 4px 0px;\n  width: 100%;\n  margin-bottom: 5px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.amp-color-list__title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  height: 20px;\n  width: 20px;\n  margin: -5px 0;\n  line-height: 20px;\n  vertical-align: middle;\n  transform: rotate(-90deg);\n  transition: transform 0.25s;\n}\n.amp-color-list__title--expanded[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  transform: rotate(0deg);\n}\n.amp-color-list__title--failed[_ngcontent-%COMP%] {\n  color: darkred;\n}\n.amp-color-list__container[_ngcontent-%COMP%] {\n  transition: height 0.5s;\n  height: 0px;\n  overflow: hidden;\n}\n.amp-color-list__list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.amp-color-list__list--compact[_ngcontent-%COMP%]   .amp-color-list__item[_ngcontent-%COMP%] {\n  padding: 1px;\n  width: 36px;\n  height: 36px;\n}\n.amp-color-list__list--compact[_ngcontent-%COMP%]   .amp-color-list__caption[_ngcontent-%COMP%] {\n  display: none;\n}\n.amp-color-list__item[_ngcontent-%COMP%] {\n  padding: 7px 2px;\n  padding-bottom: 0;\n  width: 46px;\n  height: 66px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: black;\n  transition: color 0.5s;\n  flex-shrink: 0;\n}\n.amp-color-list__item--highlight[_ngcontent-%COMP%] {\n  color: #449adf;\n}\n.amp-color-list__color--highlight[_ngcontent-%COMP%] {\n  border-color: #449adf;\n}\n.amp-color-list__color--selected[_ngcontent-%COMP%] {\n  border-color: #449adf;\n  border-width: 2px;\n  margin: -1px;\n}\n.amp-color-list__caption[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 11px;\n  margin-top: 5px;\n  text-align: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbG9yLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7QUFGSjtBQUlJO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUVBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0FBSE47QUFPTTtFQUNFLHVCQUFBO0FBTFI7QUFTSTtFQUNFLGNBQUE7QUFQTjtBQVdFO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFUSjtBQVlFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFWSjtBQWFNO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBWFI7QUFjTTtFQUNFLGFBQUE7QUFaUjtBQWlCRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQWZKO0FBaUJJO0VBQ0UsY0FBQTtBQWZOO0FBb0JJO0VBQ0UscUJBQUE7QUFsQk47QUFxQkk7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQW5CTjtBQXVCRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBRUEsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtFQUNBLE9BQUE7QUF0QkoiLCJmaWxlIjoiY29sb3ItbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmFtcC1jb2xvci1saXN0IHtcclxuICAmX190aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBjb2xvcjogIzgwODA4MDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjODA4MDgwO1xyXG4gICAgcGFkZGluZzogNHB4IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gICAgbWF0LWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgIG1hcmdpbjogLTVweCAwO1xyXG5cclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cztcclxuICAgIH1cclxuXHJcbiAgICAmLS1leHBhbmRlZCB7XHJcbiAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYtLWZhaWxlZCB7XHJcbiAgICAgIGNvbG9yOiBkYXJrcmVkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fY29udGFpbmVyIHtcclxuICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjVzO1xyXG4gICAgaGVpZ2h0OiAwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgJl9fbGlzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgICYtLWNvbXBhY3Qge1xyXG4gICAgICAuYW1wLWNvbG9yLWxpc3RfX2l0ZW0ge1xyXG4gICAgICAgIHBhZGRpbmc6IDFweDtcclxuICAgICAgICB3aWR0aDogMzZweDtcclxuICAgICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hbXAtY29sb3ItbGlzdF9fY2FwdGlvbiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9faXRlbSB7XHJcbiAgICBwYWRkaW5nOiA3cHggMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICB3aWR0aDogNDZweDtcclxuICAgIGhlaWdodDogNjZweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuNXM7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuXHJcbiAgICAmLS1oaWdobGlnaHQge1xyXG4gICAgICBjb2xvcjogIzQ0OWFkZjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2NvbG9yIHtcclxuICAgICYtLWhpZ2hsaWdodCB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogIzQ0OWFkZjtcclxuICAgIH1cclxuXHJcbiAgICAmLS1zZWxlY3RlZCB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogIzQ0OWFkZjtcclxuICAgICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICAgIG1hcmdpbjogLTFweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2NhcHRpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblxyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 7696:
/*!**********************************************************!*\
  !*** ./src/app/color-preview/color-preview.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorPreviewComponent": () => (/* binding */ ColorPreviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ColorPreviewComponent {
    constructor() { }
    ngOnChanges() {
    }
    ngOnInit() {
    }
}
ColorPreviewComponent.ɵfac = function ColorPreviewComponent_Factory(t) { return new (t || ColorPreviewComponent)(); };
ColorPreviewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ColorPreviewComponent, selectors: [["amp-color-preview"]], inputs: { color: "color" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 2, consts: [[1, "amp-color-preview__color"]], template: function ColorPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.color);
    } }, styles: ["[_nghost-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 1px solid #747980;\n  transition: border-color 0.5s;\n  display: inline-block;\n  background-image: linear-gradient(45deg, #ccc 25%, transparent 0, transparent 75%, #ccc 0, #ccc), linear-gradient(45deg, #ccc 25%, transparent 0, transparent 75%, #ccc 0, #ccc);\n  background-size: 13px 13px;\n  background-position: 0 0, 6.5px 6.5px;\n}\n\n.amp-color-preview__color[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border: 2px solid white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbG9yLXByZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLGdMQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQ0FBQTtBQUNGOztBQUdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQUFKIiwiZmlsZSI6ImNvbG9yLXByZXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgd2lkdGg6IDMycHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3NDc5ODA7XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuNXM7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywjY2NjIDI1JSx0cmFuc3BhcmVudCAwLHRyYW5zcGFyZW50IDc1JSwjY2NjIDAsI2NjYyksbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCNjY2MgMjUlLHRyYW5zcGFyZW50IDAsdHJhbnNwYXJlbnQgNzUlLCNjY2MgMCwjY2NjKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEzcHggMTNweDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDAsIDYuNXB4IDYuNXB4O1xyXG59XHJcblxyXG4uYW1wLWNvbG9yLXByZXZpZXcge1xyXG4gICZfX2NvbG9yIHtcclxuICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 5852:
/*!*********************************!*\
  !*** ./src/app/icons.module.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconsModule": () => (/* binding */ IconsModule)
/* harmony export */ });
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 318);





class IconsModule {
    constructor(icons, sanitizer) {
        this.icons = icons;
        this.sanitizer = sanitizer;
        icons.addSvgIcon('delete', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/ic-asset-delete.svg'));
    }
}
IconsModule.ɵfac = function IconsModule_Factory(t) { return new (t || IconsModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer)); };
IconsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IconsModule });
IconsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClientModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IconsModule, { imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClientModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule] }); })();


/***/ }),

/***/ 1224:
/*!*************************************************!*\
  !*** ./src/app/services/brand-color.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrandColorService": () => (/* binding */ BrandColorService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var dc_delivery_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dc-delivery-sdk-js */ 6291);
/* harmony import */ var dc_delivery_sdk_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dc_delivery_sdk_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



class BrandColorService {
    constructor() {
        this.colors = {
            name: 'Loading...',
            groups: [],
            colors: []
        };
    }
    initialize() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                // See index.html for sdk init.
                // tslint:disable-next-line: no-string-literal
                const sdk = yield window['extensionsSdkInstance'];
                sdk.frame.startAutoResizer();
                this.activeColor = yield sdk.field.getValue();
                this.selected = (this.activeColor == null) ? null : { name: this.activeColor, color: this.activeColor };
                this.params = Object.assign(Object.assign({}, sdk.params.installation), sdk.params.instance);
                const client = new dc_delivery_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ContentClient({
                    account: this.params.account || 'dummy',
                    stagingEnvironment: sdk.stagingEnvironment
                });
                this.colors = (yield client.getContentItem(this.params.contentID)).body;
                this.sdk = sdk;
                this.prepareColors();
                this.selected = this.findExistingColor(this.activeColor);
                requestAnimationFrame(this.checkHeight.bind(this));
            }
            catch (e) {
                this.colors = {
                    failure: true,
                    name: '(Failed to load colours: ' + e.toString() + ')',
                    groups: [],
                    colors: []
                };
            }
        });
    }
    prepareColors() {
        this.colors.colors = this.combineColorGroups(this.params.groups);
        if (this.params.groups != null && this.params.groups.length > 0) {
            this.colors.name += ` (${this.params.groups.join(', ')})`;
        }
    }
    combineColorGroups(groups) {
        if (groups == null) {
            groups = this.colors.groups.map(group => group.name); // When missing, select all groups.
        }
        const groupObjs = groups.map(groupName => this.colors.groups.find(group => group.name.toLowerCase() === groupName.toLowerCase()))
            .filter(group => group != null)
            .map(group => group.colors);
        return [].concat.apply([], groupObjs);
    }
    getColorKey(color) {
        return this.params.useNames ? color.name : color.color;
    }
    selectColor(color) {
        this.activeColor = color == null ? null : this.getColorKey(color);
        this.sdk.field.setValue(this.activeColor);
        this.selected = color;
    }
    findExistingColor(color) {
        let bColor = color == null ? null : this.colors.colors.find(c => this.getColorKey(c).toLowerCase() === color.toLowerCase());
        if (bColor == null && color != null) {
            bColor = { color, name: color };
        }
        return bColor;
    }
    checkHeight() {
        if (window.document.body.clientHeight !== this.lastHeight) {
            this.lastHeight = window.document.body.clientHeight;
            this.sdk.frame.setHeight(this.lastHeight);
        }
        requestAnimationFrame(this.checkHeight.bind(this));
    }
}
BrandColorService.ɵfac = function BrandColorService_Factory(t) { return new (t || BrandColorService)(); };
BrandColorService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: BrandColorService, factory: BrandColorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map