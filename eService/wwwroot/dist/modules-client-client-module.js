(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-client-client-module"],{

/***/ "./node_modules/@agm/snazzy-info-window/directives/snazzy-info-window.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@agm/snazzy-info-window/directives/snazzy-info-window.js ***!
  \*******************************************************************************/
/*! exports provided: AgmSnazzyInfoWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmSnazzyInfoWindow", function() { return AgmSnazzyInfoWindow; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AgmSnazzyInfoWindow = /** @class */ (function () {
    function AgmSnazzyInfoWindow(_marker, _wrapper, _manager, _loader) {
        this._marker = _marker;
        this._wrapper = _wrapper;
        this._manager = _manager;
        this._loader = _loader;
        /**
         * Changes the open status of the snazzy info window.
         */
        this.isOpen = false;
        /**
         * Emits when the open status changes.
         */
        this.isOpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Choose where you want the info window to be displayed, relative to the marker.
         */
        this.placement = 'top';
        /**
         * The max width in pixels of the info window.
         */
        this.maxWidth = 200;
        /**
         * The max height in pixels of the info window.
         */
        this.maxHeight = 200;
        /**
         * Determines if the info window will open when the marker is clicked.
         * An internal listener is added to the Google Maps click event which calls the open() method.
         */
        this.openOnMarkerClick = true;
        /**
         * Determines if the info window will close when the map is clicked. An internal listener is added to the Google Maps click event which calls the close() method.
         * This will not activate on the Google Maps drag event when the user is panning the map.
         */
        this.closeOnMapClick = true;
        /**
         * Determines if the info window will close when any other Snazzy Info Window is opened.
         */
        this.closeWhenOthersOpen = false;
        /**
         * Determines if the info window will show a close button.
         */
        this.showCloseButton = true;
        /**
         * Determines if the info window will be panned into view when opened.
         */
        this.panOnOpen = true;
        /**
         * Emits before the info window opens.
         */
        this.beforeOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits before the info window closes.
         */
        this.afterClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._snazzyInfoWindowInitialized = null;
    }
    /**
     * @internal
     */
    AgmSnazzyInfoWindow.prototype.ngOnChanges = function (changes) {
        if (this._nativeSnazzyInfoWindow == null) {
            return;
        }
        if ('isOpen' in changes && this.isOpen) {
            this._openInfoWindow();
        }
        else if ('isOpen' in changes && !this.isOpen) {
            this._closeInfoWindow();
        }
        if (('latitude' in changes || 'longitude' in changes) && this._marker == null) {
            this._updatePosition();
        }
    };
    /**
     * @internal
     */
    AgmSnazzyInfoWindow.prototype.ngAfterViewInit = function () {
        var _this = this;
        var m = this._manager != null ? this._manager.getNativeMarker(this._marker) : null;
        this._snazzyInfoWindowInitialized = this._loader.load()
            .then(function () { return __webpack_require__(/*! snazzy-info-window */ "./node_modules/snazzy-info-window/dist/snazzy-info-window.min.js"); })
            .then(function (module) { return Promise.all([module, m, _this._wrapper.getNativeMap()]); })
            .then(function (elems) {
            var options = {
                map: elems[2],
                content: '',
                placement: _this.placement,
                maxWidth: _this.maxWidth,
                maxHeight: _this.maxHeight,
                backgroundColor: _this.backgroundColor,
                padding: _this.padding,
                border: _this.border,
                borderRadius: _this.borderRadius,
                fontColor: _this.fontColor,
                pointer: _this.pointer,
                shadow: _this.shadow,
                closeOnMapClick: _this.closeOnMapClick,
                openOnMarkerClick: _this.openOnMarkerClick,
                closeWhenOthersOpen: _this.closeWhenOthersOpen,
                showCloseButton: _this.showCloseButton,
                panOnOpen: _this.panOnOpen,
                wrapperClass: _this.wrapperClass,
                callbacks: {
                    beforeOpen: function () {
                        _this._createViewContent();
                        _this.beforeOpen.emit();
                    },
                    afterOpen: function () {
                        _this.isOpenChange.emit(_this.openStatus());
                    },
                    afterClose: function () {
                        _this.afterClose.emit();
                        _this.isOpenChange.emit(_this.openStatus());
                    }
                }
            };
            if (elems[1] != null) {
                options.marker = elems[1];
            }
            else {
                options.position = {
                    lat: _this.latitude,
                    lng: _this.longitude
                };
            }
            _this._nativeSnazzyInfoWindow = new elems[0](options);
        });
        this._snazzyInfoWindowInitialized.then(function () {
            if (_this.isOpen) {
                _this._openInfoWindow();
            }
        });
    };
    AgmSnazzyInfoWindow.prototype._openInfoWindow = function () {
        var _this = this;
        this._snazzyInfoWindowInitialized.then(function () {
            _this._createViewContent();
            _this._nativeSnazzyInfoWindow.open();
        });
    };
    AgmSnazzyInfoWindow.prototype._closeInfoWindow = function () {
        var _this = this;
        this._snazzyInfoWindowInitialized.then(function () {
            _this._nativeSnazzyInfoWindow.close();
        });
    };
    AgmSnazzyInfoWindow.prototype._createViewContent = function () {
        if (this._viewContainerRef.length === 1) {
            return;
        }
        var evr = this._viewContainerRef.createEmbeddedView(this._templateRef);
        this._nativeSnazzyInfoWindow.setContent(this._outerWrapper.nativeElement);
        // we have to run this in a separate cycle.
        setTimeout(function () {
            evr.detectChanges();
        });
    };
    AgmSnazzyInfoWindow.prototype._updatePosition = function () {
        this._nativeSnazzyInfoWindow.setPosition({
            lat: this.latitude,
            lng: this.longitude
        });
    };
    /**
     * Returns true when the Snazzy Info Window is initialized and open.
     */
    AgmSnazzyInfoWindow.prototype.openStatus = function () {
        return this._nativeSnazzyInfoWindow && this._nativeSnazzyInfoWindow.isOpen();
    };
    /**
     * @internal
     */
    AgmSnazzyInfoWindow.prototype.ngOnDestroy = function () {
        if (this._nativeSnazzyInfoWindow) {
            this._nativeSnazzyInfoWindow.destroy();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AgmSnazzyInfoWindow.prototype, "latitude", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AgmSnazzyInfoWindow.prototype, "longitude", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AgmSnazzyInfoWindow.prototype, "isOpen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmSnazzyInfoWindow.prototype, "isOpenChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AgmSnazzyInfoWindow.prototype, "placement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AgmSnazzyInfoWindow.prototype, "maxWidth", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AgmSnazzyInfoWindow.prototype, "maxHeight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AgmSnazzyInfoWindow.prototype, "backgroundColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AgmSnazzyInfoWindow.prototype, "padding", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AgmSnazzyInfoWindow.prototype, "border", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AgmSnazzyInfoWindow.prototype, "borderRadius", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AgmSnazzyInfoWindow.prototype, "fontColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AgmSnazzyInfoWindow.prototype, "fontSize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AgmSnazzyInfoWindow.prototype, "pointer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AgmSnazzyInfoWindow.prototype, "shadow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AgmSnazzyInfoWindow.prototype, "openOnMarkerClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AgmSnazzyInfoWindow.prototype, "closeOnMapClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AgmSnazzyInfoWindow.prototype, "wrapperClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AgmSnazzyInfoWindow.prototype, "closeWhenOthersOpen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AgmSnazzyInfoWindow.prototype, "showCloseButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AgmSnazzyInfoWindow.prototype, "panOnOpen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmSnazzyInfoWindow.prototype, "beforeOpen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmSnazzyInfoWindow.prototype, "afterClose", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('outerWrapper', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AgmSnazzyInfoWindow.prototype, "_outerWrapper", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('viewContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], AgmSnazzyInfoWindow.prototype, "_viewContainerRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], AgmSnazzyInfoWindow.prototype, "_templateRef", void 0);
    AgmSnazzyInfoWindow = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'agm-snazzy-info-window',
            template: '<div #outerWrapper><div #viewContainer></div></div><ng-content></ng-content>'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [_agm_core__WEBPACK_IMPORTED_MODULE_1__["AgmMarker"],
            _agm_core__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsAPIWrapper"],
            _agm_core__WEBPACK_IMPORTED_MODULE_1__["MarkerManager"],
            _agm_core__WEBPACK_IMPORTED_MODULE_1__["MapsAPILoader"]])
    ], AgmSnazzyInfoWindow);
    return AgmSnazzyInfoWindow;
}());

//# sourceMappingURL=snazzy-info-window.js.map

/***/ }),

/***/ "./node_modules/@agm/snazzy-info-window/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@agm/snazzy-info-window/index.js ***!
  \*******************************************************/
/*! exports provided: AgmSnazzyInfoWindowModule, AgmSnazzyInfoWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _snazzy_info_window_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snazzy-info-window.module */ "./node_modules/@agm/snazzy-info-window/snazzy-info-window.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmSnazzyInfoWindowModule", function() { return _snazzy_info_window_module__WEBPACK_IMPORTED_MODULE_0__["AgmSnazzyInfoWindowModule"]; });

/* harmony import */ var _directives_snazzy_info_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives/snazzy-info-window */ "./node_modules/@agm/snazzy-info-window/directives/snazzy-info-window.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmSnazzyInfoWindow", function() { return _directives_snazzy_info_window__WEBPACK_IMPORTED_MODULE_1__["AgmSnazzyInfoWindow"]; });

// public API


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@agm/snazzy-info-window/snazzy-info-window.module.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@agm/snazzy-info-window/snazzy-info-window.module.js ***!
  \***************************************************************************/
/*! exports provided: AgmSnazzyInfoWindowModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmSnazzyInfoWindowModule", function() { return AgmSnazzyInfoWindowModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _directives_snazzy_info_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives/snazzy-info-window */ "./node_modules/@agm/snazzy-info-window/directives/snazzy-info-window.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AgmSnazzyInfoWindowModule = /** @class */ (function () {
    function AgmSnazzyInfoWindowModule() {
    }
    AgmSnazzyInfoWindowModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_directives_snazzy_info_window__WEBPACK_IMPORTED_MODULE_1__["AgmSnazzyInfoWindow"]],
            exports: [_directives_snazzy_info_window__WEBPACK_IMPORTED_MODULE_1__["AgmSnazzyInfoWindow"]]
        })
    ], AgmSnazzyInfoWindowModule);
    return AgmSnazzyInfoWindowModule;
}());

//# sourceMappingURL=snazzy-info-window.module.js.map

/***/ }),

/***/ "./node_modules/ng-pipes/esm5/ng-pipes.js":
/*!************************************************!*\
  !*** ./node_modules/ng-pipes/esm5/ng-pipes.js ***!
  \************************************************/
/*! exports provided: NgPipesModule, BooleanPipesModule, IsArrayPipe, IsDefinedPipe, IsEqualToPipe, IsFunctionPipe, IsGreaterThanOrEqualToPipe, IsGreaterThanPipe, IsIdenticalToPipe, IsLessThanOrEqualToPipe, IsLessThanPipe, IsNilPipe, IsNotEqualToPipe, IsNotIdenticalToPipe, IsNullPipe, IsNumberPipe, IsObjectPipe, IsStringPipe, IsUndefinedPipe, CollectionPipesModule, AfterWherePipe, AfterPipe, BeforeWherePipe, BeforePipe, ChunkByPipe, ConcatPipe, ContainsPipe, CountByPipe, DefaultsPipe, EveryPipe, FilterByPipe, FirstPipe, FlattenPipe, FuzzyByPipe, FuzzyPipe, GroupByPipe, IsEmptyPipe, JoinPipe, LastPipe, MapPipe, MeanPipe, OmitPipe, OrderByPipe, PickPipe, RangePipe, RemoveWithPipe, RemovePipe, ReversePipe, SearchFieldPipe, ToArrayPipe, UniqPipe, WherePipe, XORPipe, MathPipesModule, AbsPipe, ByteFmtPipe, CeilPipe, DegreesPipe, FloorPipe, KBFmtPipe, MaxPipe, MinPipe, PercentPipe, PowPipe, RadiansPipe, RadixPipe, RoundPipe, ShortFmtPipe, SqrtPipe, SumPipe, ObjectPipesModule, InvertPipe, KeysPipe, ValuesPipe, StringPipesModule, CamelizePipe, CenterPadPipe, EndsWithPipe, LatinizePipe, LeftPadPipe, LeftTrimPipe, MatchPipe, PhonePipe, RepeatPipe, RightPadPipe, RightTrimPipe, SlugifyPipe, SplitPipe, StartsWithPipe, StringularPipe, StripTagsPipe, TestPipe, TitleizePipe, TrimPipe, TruncatePipe, UcfirstPipe, UnderscorePipe, UriComponentEncodePipe, UriEncodePipe, WrapPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgPipesModule", function() { return NgPipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooleanPipesModule", function() { return BooleanPipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsArrayPipe", function() { return IsArrayPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsDefinedPipe", function() { return IsDefinedPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsEqualToPipe", function() { return IsEqualToPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsFunctionPipe", function() { return IsFunctionPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsGreaterThanOrEqualToPipe", function() { return IsGreaterThanOrEqualToPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsGreaterThanPipe", function() { return IsGreaterThanPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsIdenticalToPipe", function() { return IsIdenticalToPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsLessThanOrEqualToPipe", function() { return IsLessThanOrEqualToPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsLessThanPipe", function() { return IsLessThanPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsNilPipe", function() { return IsNilPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsNotEqualToPipe", function() { return IsNotEqualToPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsNotIdenticalToPipe", function() { return IsNotIdenticalToPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsNullPipe", function() { return IsNullPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsNumberPipe", function() { return IsNumberPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsObjectPipe", function() { return IsObjectPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsStringPipe", function() { return IsStringPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsUndefinedPipe", function() { return IsUndefinedPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionPipesModule", function() { return CollectionPipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfterWherePipe", function() { return AfterWherePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfterPipe", function() { return AfterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeforeWherePipe", function() { return BeforeWherePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeforePipe", function() { return BeforePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChunkByPipe", function() { return ChunkByPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConcatPipe", function() { return ConcatPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainsPipe", function() { return ContainsPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountByPipe", function() { return CountByPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultsPipe", function() { return DefaultsPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EveryPipe", function() { return EveryPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterByPipe", function() { return FilterByPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstPipe", function() { return FirstPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlattenPipe", function() { return FlattenPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuzzyByPipe", function() { return FuzzyByPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuzzyPipe", function() { return FuzzyPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupByPipe", function() { return GroupByPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsEmptyPipe", function() { return IsEmptyPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinPipe", function() { return JoinPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LastPipe", function() { return LastPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPipe", function() { return MapPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeanPipe", function() { return MeanPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OmitPipe", function() { return OmitPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderByPipe", function() { return OrderByPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickPipe", function() { return PickPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangePipe", function() { return RangePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveWithPipe", function() { return RemoveWithPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemovePipe", function() { return RemovePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReversePipe", function() { return ReversePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFieldPipe", function() { return SearchFieldPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToArrayPipe", function() { return ToArrayPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqPipe", function() { return UniqPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WherePipe", function() { return WherePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XORPipe", function() { return XORPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MathPipesModule", function() { return MathPipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbsPipe", function() { return AbsPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ByteFmtPipe", function() { return ByteFmtPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CeilPipe", function() { return CeilPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DegreesPipe", function() { return DegreesPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloorPipe", function() { return FloorPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KBFmtPipe", function() { return KBFmtPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxPipe", function() { return MaxPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinPipe", function() { return MinPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PercentPipe", function() { return PercentPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PowPipe", function() { return PowPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadiansPipe", function() { return RadiansPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadixPipe", function() { return RadixPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundPipe", function() { return RoundPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortFmtPipe", function() { return ShortFmtPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SqrtPipe", function() { return SqrtPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SumPipe", function() { return SumPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectPipesModule", function() { return ObjectPipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvertPipe", function() { return InvertPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeysPipe", function() { return KeysPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValuesPipe", function() { return ValuesPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringPipesModule", function() { return StringPipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CamelizePipe", function() { return CamelizePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CenterPadPipe", function() { return CenterPadPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndsWithPipe", function() { return EndsWithPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatinizePipe", function() { return LatinizePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftPadPipe", function() { return LeftPadPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftTrimPipe", function() { return LeftTrimPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchPipe", function() { return MatchPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonePipe", function() { return PhonePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepeatPipe", function() { return RepeatPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightPadPipe", function() { return RightPadPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightTrimPipe", function() { return RightTrimPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlugifyPipe", function() { return SlugifyPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitPipe", function() { return SplitPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartsWithPipe", function() { return StartsWithPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringularPipe", function() { return StringularPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripTagsPipe", function() { return StripTagsPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPipe", function() { return TestPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleizePipe", function() { return TitleizePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrimPipe", function() { return TrimPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatePipe", function() { return TruncatePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UcfirstPipe", function() { return UcfirstPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnderscorePipe", function() { return UnderscorePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UriComponentEncodePipe", function() { return UriComponentEncodePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UriEncodePipe", function() { return UriEncodePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapPipe", function() { return WrapPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var isArray = function (value) { return Array.isArray(value); };
var isFunction = function (value) { return typeof value === 'function'; };
var isNil = function (value) { return value === null || typeof value === 'undefined'; };
var isNull = function (value) { return value === null; };
var isNumber = function (value) { return typeof value === 'number'; };
var isObject = function (value) { return typeof value === 'object'; };
var isString = function (value) { return typeof value === 'string'; };
var isUndefined = function (value) { return typeof value === 'undefined'; };
function toArray(object) {
    return isArray(object) ? object : Object.keys(object).map(function (key) { return object[key]; });
}
var getPhone = function (locale) {
    var phones = {
        'en-US': {
            'countryCode': '+1',
            'minLength': 10,
            'pattern': /^(\+?1[-\s]?)?(\(?\d{3}\)?)[-\s]?(\d{3})[-\s]?(\d{4})$/
        },
        'pt-BR': {
            'countryCode': '+55',
            'minLength': 11,
            'pattern': /^(\+?55[-\s]?)?(\([1-9][1-9]\)|[1-9][1-9])[-\s]?(9[1-9]\d{3})[-\s]?(\d{4})$/
        }
    };
    return phones[locale];
};
var pad = function (requiredLength, padChar) {
    if (padChar === void 0) { padChar = ' '; }
    return padChar.repeat(requiredLength).slice(0, requiredLength);
};
function equals(a, b) {
    if (a === b) {
        return true;
    }
    if (!isObject(a) || !isObject(b)) {
        return a === b;
    }
    var keysA = Object.keys(a);
    var keysB = Object.keys(b);
    if (keysA.length !== keysB.length) {
        return false;
    }
    var hasOwn = Object.prototype.hasOwnProperty;
    try {
        for (var keysA_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(keysA), keysA_1_1 = keysA_1.next(); !keysA_1_1.done; keysA_1_1 = keysA_1.next()) {
            var key = keysA_1_1.value;
            if (!hasOwn.call(b, key) || !equals(a[key], b[key])) {
                return false;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (keysA_1_1 && !keysA_1_1.done && (_a = keysA_1.return)) _a.call(keysA_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return true;
    var e_1, _a;
}
function objectContains(partial, object) {
    return Object.keys(partial).every(function (key) { return key in object && object[key] === partial[key]; });
}
function deepKeys(obj, stack, parent, intermediate) {
    if (stack === void 0) { stack = []; }
    if (parent === void 0) { parent = null; }
    if (intermediate === void 0) { intermediate = false; }
    Object.keys(obj).forEach(function (el) {
        var escaped = el.replace(/\./g, '\\\.');
        if (isObject(obj[el]) && !isArray(obj[el])) {
            var p = parent ? parent + '.' + el : parent;
            if (intermediate)
                stack.push(parent ? p : escaped);
            deepKeys(obj[el], stack, p || escaped, intermediate);
        }
        else {
            var key = parent ? parent + '.' + escaped : escaped;
            stack.push(key);
        }
    });
    return stack;
}
function getFirstMatches(array, n, getter) {
    var count = 0;
    return array.filter(function (elm) {
        var rest = !isUndefined(getter) ? count < n && getter(elm) : count < n;
        count = rest ? count + 1 : count;
        return rest;
    });
}
function hasApproxPattern(word, pattern) {
    var p = 0;
    for (var i = 0; i <= pattern.length; i++) {
        var index = indexOf(word, p, pattern.charAt(i));
        if (index === -1)
            return false;
        p += index + 1;
    }
    return true;
}
function indexOf(word, p, c) {
    var j = 0;
    while ((p + j) <= word.length) {
        if (word.charAt(p + j) === c)
            return j;
        j++;
    }
    return -1;
}
var convertToDecimal = function (num, decimal) {
    return Math.round(num * Math.pow(10, decimal)) / (Math.pow(10, decimal));
};
var IsArrayPipe = /** @class */ (function () {
    function IsArrayPipe() {
    }
    IsArrayPipe.prototype.transform = function (input) {
        return isArray(input);
    };
    return IsArrayPipe;
}());
IsArrayPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'isArray' },] },
];
IsArrayPipe.ctorParameters = function () { return []; };
var IsDefinedPipe = /** @class */ (function () {
    function IsDefinedPipe() {
    }
    IsDefinedPipe.prototype.transform = function (input) {
        return !isUndefined(input);
    };
    return IsDefinedPipe;
}());
IsDefinedPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'isDefined' },] },
];
IsDefinedPipe.ctorParameters = function () { return []; };
var IsEqualToPipe = /** @class */ (function () {
    function IsEqualToPipe() {
    }
    IsEqualToPipe.prototype.transform = function (input, check) {
        input += '';
        check += '';
        return input === check;
    };
    return IsEqualToPipe;
}());
IsEqualToPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'isEqualTo' },] },
];
IsEqualToPipe.ctorParameters = function () { return []; };
var IsFunctionPipe = /** @class */ (function () {
    function IsFunctionPipe() {
    }
    IsFunctionPipe.prototype.transform = function (input) {
        return isFunction(input);
    };
    return IsFunctionPipe;
}());
IsFunctionPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'isFunction' },] },
];
IsFunctionPipe.ctorParameters = function () { return []; };
var IsGreaterThanOrEqualToPipe = /** @class */ (function () {
    function IsGreaterThanOrEqualToPipe() {
    }
    IsGreaterThanOrEqualToPipe.prototype.transform = function (input, check) {
        return input >= check;
    };
    return IsGreaterThanOrEqualToPipe;
}());
IsGreaterThanOrEqualToPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'isGreaterThanOrEqualTo' },] },
];
IsGreaterThanOrEqualToPipe.ctorParameters = function () { return []; };
var IsGreaterThanPipe = /** @class */ (function () {
    function IsGreaterThanPipe() {
    }
    IsGreaterThanPipe.prototype.transform = function (input, check) {
        return input > check;
    };
    return IsGreaterThanPipe;
}());
IsGreaterThanPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'isGreaterThan' },] },
];
IsGreaterThanPipe.ctorParameters = function () { return []; };
var IsIdenticalToPipe = /** @class */ (function () {
    function IsIdenticalToPipe() {
    }
    IsIdenticalToPipe.prototype.transform = function (input, check) {
        return equals(input, check);
    };
    return IsIdenticalToPipe;
}());
IsIdenticalToPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'isIdenticalTo' },] },
];
IsIdenticalToPipe.ctorParameters = function () { return []; };
var IsLessThanOrEqualToPipe = /** @class */ (function () {
    function IsLessThanOrEqualToPipe() {
    }
    IsLessThanOrEqualToPipe.prototype.transform = function (input, check) {
        return input <= check;
    };
    return IsLessThanOrEqualToPipe;
}());
IsLessThanOrEqualToPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'isLessThanOrEqualTo' },] },
];
IsLessThanOrEqualToPipe.ctorParameters = function () { return []; };
var IsLessThanPipe = /** @class */ (function () {
    function IsLessThanPipe() {
    }
    IsLessThanPipe.prototype.transform = function (input, check) {
        return input < check;
    };
    return IsLessThanPipe;
}());
IsLessThanPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'isLessThan' },] },
];
IsLessThanPipe.ctorParameters = function () { return []; };
var IsNilPipe = /** @class */ (function () {
    function IsNilPipe() {
    }
    IsNilPipe.prototype.transform = function (input) {
        return isNil(input);
    };
    return IsNilPipe;
}());
IsNilPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'isNil' },] },
];
IsNilPipe.ctorParameters = function () { return []; };
var IsNotEqualToPipe = /** @class */ (function () {
    function IsNotEqualToPipe() {
    }
    IsNotEqualToPipe.prototype.transform = function (input, check) {
        input += '';
        check += '';
        return input !== check;
    };
    return IsNotEqualToPipe;
}());
IsNotEqualToPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'isNotEqualTo' },] },
];
IsNotEqualToPipe.ctorParameters = function () { return []; };
var IsNotIdenticalToPipe = /** @class */ (function () {
    function IsNotIdenticalToPipe() {
    }
    IsNotIdenticalToPipe.prototype.transform = function (input, check) {
        return !equals(input, check);
    };
    return IsNotIdenticalToPipe;
}());
IsNotIdenticalToPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'isNotIdenticalTo' },] },
];
IsNotIdenticalToPipe.ctorParameters = function () { return []; };
var IsNullPipe = /** @class */ (function () {
    function IsNullPipe() {
    }
    IsNullPipe.prototype.transform = function (input) {
        return isNull(input);
    };
    return IsNullPipe;
}());
IsNullPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'isNull' },] },
];
IsNullPipe.ctorParameters = function () { return []; };
var IsNumberPipe = /** @class */ (function () {
    function IsNumberPipe() {
    }
    IsNumberPipe.prototype.transform = function (input) {
        return isNumber(input);
    };
    return IsNumberPipe;
}());
IsNumberPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'isNumber' },] },
];
IsNumberPipe.ctorParameters = function () { return []; };
var IsObjectPipe = /** @class */ (function () {
    function IsObjectPipe() {
    }
    IsObjectPipe.prototype.transform = function (input) {
        return isObject(input);
    };
    return IsObjectPipe;
}());
IsObjectPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'isObject' },] },
];
IsObjectPipe.ctorParameters = function () { return []; };
var IsStringPipe = /** @class */ (function () {
    function IsStringPipe() {
    }
    IsStringPipe.prototype.transform = function (input) {
        return isString(input);
    };
    return IsStringPipe;
}());
IsStringPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'isString' },] },
];
IsStringPipe.ctorParameters = function () { return []; };
var IsUndefinedPipe = /** @class */ (function () {
    function IsUndefinedPipe() {
    }
    IsUndefinedPipe.prototype.transform = function (input) {
        return isUndefined(input);
    };
    return IsUndefinedPipe;
}());
IsUndefinedPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'isUndefined' },] },
];
IsUndefinedPipe.ctorParameters = function () { return []; };
var BooleanPipesModule = /** @class */ (function () {
    function BooleanPipesModule() {
    }
    return BooleanPipesModule;
}());
BooleanPipesModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                declarations: [
                    IsArrayPipe, IsDefinedPipe, IsEqualToPipe, IsFunctionPipe, IsGreaterThanOrEqualToPipe,
                    IsGreaterThanPipe, IsIdenticalToPipe, IsLessThanOrEqualToPipe, IsLessThanPipe, IsNilPipe,
                    IsNotEqualToPipe, IsNotIdenticalToPipe, IsNullPipe, IsNumberPipe, IsObjectPipe, IsStringPipe,
                    IsUndefinedPipe
                ],
                exports: [
                    IsArrayPipe, IsDefinedPipe, IsEqualToPipe, IsFunctionPipe, IsGreaterThanOrEqualToPipe,
                    IsGreaterThanPipe, IsIdenticalToPipe, IsLessThanOrEqualToPipe, IsLessThanPipe, IsNilPipe,
                    IsNotEqualToPipe, IsNotIdenticalToPipe, IsNullPipe, IsNumberPipe, IsObjectPipe, IsStringPipe,
                    IsUndefinedPipe
                ]
            },] },
];
BooleanPipesModule.ctorParameters = function () { return []; };
var AfterWherePipe = /** @class */ (function () {
    function AfterWherePipe() {
    }
    AfterWherePipe.prototype.transform = function (collection, object) {
        if (!isArray(collection)) {
            collection = toArray(collection);
        }
        if (!isArray(collection)) {
            return collection;
        }
        var index = collection.map(function (e) { return objectContains(object, e); }).indexOf(true);
        return collection.slice(index === -1 ? 0 : index);
    };
    return AfterWherePipe;
}());
AfterWherePipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'afterWhere' },] },
];
AfterWherePipe.ctorParameters = function () { return []; };
var AfterPipe = /** @class */ (function () {
    function AfterPipe() {
    }
    AfterPipe.prototype.transform = function (collection, count) {
        if (count === void 0) { count = 0; }
        if (!isArray(collection)) {
            collection = toArray(collection);
        }
        if (!isArray(collection)) {
            return collection;
        }
        return collection.slice(count);
    };
    return AfterPipe;
}());
AfterPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'after' },] },
];
AfterPipe.ctorParameters = function () { return []; };
var BeforeWherePipe = /** @class */ (function () {
    function BeforeWherePipe() {
    }
    BeforeWherePipe.prototype.transform = function (collection, object) {
        if (!isArray(collection)) {
            collection = toArray(collection);
        }
        if (!isArray(collection)) {
            return collection;
        }
        var index = collection.map(function (e) { return objectContains(object, e); }).indexOf(true);
        return collection.slice(0, index === -1 ? collection.length : index + 1);
    };
    return BeforeWherePipe;
}());
BeforeWherePipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'beforeWhere' },] },
];
BeforeWherePipe.ctorParameters = function () { return []; };
var BeforePipe = /** @class */ (function () {
    function BeforePipe() {
    }
    BeforePipe.prototype.transform = function (collection, count) {
        if (count === void 0) { count = 1; }
        if (!isArray(collection)) {
            collection = toArray(collection);
        }
        if (!isArray(collection)) {
            return collection;
        }
        return collection.slice(0, count - 1);
    };
    return BeforePipe;
}());
BeforePipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'before' },] },
];
BeforePipe.ctorParameters = function () { return []; };
var ChunkByPipe = /** @class */ (function () {
    function ChunkByPipe() {
    }
    ChunkByPipe.prototype.transform = function (array, chunkSize, fillVal) {
        var _this = this;
        return array
            .map(function (el, i, self) {
            i = i * chunkSize;
            el = self.slice(i, i + chunkSize);
            return !isUndefined(fillVal) && el.length < chunkSize ?
                el.concat(_this.fill(chunkSize - el.length, fillVal)) :
                el;
        })
            .slice(0, Math.ceil(array.length / chunkSize));
    };
    ChunkByPipe.prototype.fill = function (chunkSize, val) {
        var ret = [];
        while (chunkSize--)
            ret[chunkSize] = val;
        return ret;
    };
    return ChunkByPipe;
}());
ChunkByPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'chunkBy' },] },
];
ChunkByPipe.ctorParameters = function () { return []; };
var ConcatPipe = /** @class */ (function () {
    function ConcatPipe() {
    }
    ConcatPipe.prototype.transform = function (collection, joined) {
        if (!isArray(collection)) {
            collection = toArray(collection);
        }
        if (!isArray(joined)) {
            joined = toArray(joined);
        }
        return collection.concat(joined);
    };
    return ConcatPipe;
}());
ConcatPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'concat' },] },
];
ConcatPipe.ctorParameters = function () { return []; };
function createGetterFn(pathKeys) {
    var fn = null;
    for (var i = pathKeys.length - 1; i >= 0; i--) {
        if (fn === null) {
            fn = finalFn(pathKeys[i]);
        }
        else {
            fn = stepFn(pathKeys[i], fn);
        }
    }
    return fn;
    function finalFn(key) {
        return function (scope, local) {
            if (local && local.hasOwnProperty(key))
                return local[key];
            if (scope)
                return scope[key];
        };
    }
    function stepFn(key, next) {
        return function (scope, local) {
            return next(scope && scope[key], local && local[key]);
        };
    }
}
function setterFn(scope, path, value) {
    var s = scope;
    var i = 0;
    for (; i < path.length - 1; i++) {
        if (isUndefined(s[path[i]]) && i < path.length - 1) {
            s[path[i]] = {};
        }
        s = s[path[i]];
    }
    s[path[i]] = value;
    return scope;
}
function Parse() {
    var cache = {};
    return function (exp) {
        var fn = function () { };
        if (isString(exp)) {
            var cacheKey = exp.trim();
            if (cacheKey in cache) {
                return cache[cacheKey];
            }
            var pathKeys_1 = exp.split('.');
            fn = cache[cacheKey] = createGetterFn(pathKeys_1);
            fn.assign = function (scope, value) {
                return setterFn(scope, pathKeys_1, value);
            };
        }
        else if (isFunction(exp)) {
            fn = function (scope, local) {
                return exp(scope, local);
            };
        }
        return fn;
    };
}
var ContainsPipe = /** @class */ (function () {
    function ContainsPipe() {
        this.$parse = Parse();
    }
    ContainsPipe.prototype.transform = function (collection, predicate) {
        var _this = this;
        if (!isArray(collection)) {
            collection = toArray(collection);
        }
        return collection.some(function (e) { return isFunction(predicate) || (isString(predicate) && isObject(e)) ?
            _this.$parse(predicate)(e) :
            e === predicate; });
    };
    return ContainsPipe;
}());
ContainsPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'contains' },] },
];
ContainsPipe.ctorParameters = function () { return []; };
var CountByPipe = /** @class */ (function () {
    function CountByPipe() {
        this.$parse = Parse();
    }
    CountByPipe.prototype.transform = function (collection, predicate) {
        var result = {}, getter = this.$parse(predicate);
        if (!isArray(collection)) {
            collection = toArray(collection);
        }
        collection.forEach(function (elm) {
            var prop = getter(elm);
            if (!(prop in result))
                result[prop] = 0;
            result[prop]++;
        });
        return result;
    };
    return CountByPipe;
}());
CountByPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'countBy' },] },
];
CountByPipe.ctorParameters = function () { return []; };
var DefaultsPipe = /** @class */ (function () {
    function DefaultsPipe() {
        this.$parse = Parse();
    }
    DefaultsPipe.prototype.transform = function (collection, defaults) {
        var _this = this;
        if (!isArray(collection)) {
            collection = toArray(collection);
        }
        if (!isArray(collection)) {
            return collection;
        }
        var getters = deepKeys(defaults).map(function (key) { return _this.$parse(key); });
        collection.forEach(function (elm) {
            getters.forEach(function (getter) {
                if (isUndefined(getter(elm))) {
                    getter.assign(elm, getter(defaults));
                }
            });
        });
        return collection;
    };
    return DefaultsPipe;
}());
DefaultsPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'defaults' },] },
];
DefaultsPipe.ctorParameters = function () { return []; };
var EveryPipe = /** @class */ (function () {
    function EveryPipe() {
        this.$parse = Parse();
    }
    EveryPipe.prototype.transform = function (collection, predicate) {
        var _this = this;
        if (!isArray(collection)) {
            collection = toArray(collection);
        }
        return collection.every(function (e) { return isFunction(predicate) || (isString(predicate) && isObject(e)) ?
            _this.$parse(predicate)(e) :
            e === predicate; });
    };
    return EveryPipe;
}());
EveryPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'every' },] },
];
EveryPipe.ctorParameters = function () { return []; };
var FilterByPipe = /** @class */ (function () {
    function FilterByPipe() {
        this.$parse = Parse();
    }
    FilterByPipe.prototype.transform = function (collection, properties, search, strict) {
        var _this = this;
        if (strict === void 0) { strict = false; }
        if (!isArray(collection)) {
            collection = toArray(collection);
        }
        search = isString(search) || isNumber(search) ? String(search).toLowerCase() : undefined;
        if (!isArray(collection) || isUndefined(search)) {
            return collection;
        }
        if (isString(search) || isNumber(search)) {
            search = String(search).toLowerCase();
        }
        return collection.filter(function (elm) {
            return properties.some(function (prop) {
                var comparator;
                if (!~prop.indexOf('+')) {
                    comparator = _this.$parse(prop)(elm);
                }
                else {
                    var propList = prop.replace(/\s+/g, '').split('+');
                    comparator = propList.map(function (p) { return _this.$parse(p)(elm); }).join(' ');
                }
                if (!isString(comparator) && !isNumber(comparator)) {
                    return false;
                }
                comparator = String(comparator).toLowerCase();
                return strict ? comparator === search : comparator.indexOf(search) !== -1;
            });
        });
    };
    return FilterByPipe;
}());
FilterByPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'filterBy' },] },
];
FilterByPipe.ctorParameters = function () { return []; };
var FirstPipe = /** @class */ (function () {
    function FirstPipe() {
        this.$parse = Parse();
    }
    FirstPipe.prototype.transform = function (collection) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!isArray(collection)) {
            collection = toArray(collection);
        }
        var n = isNumber(args[0]) ? args[0] : 1, getter = !isNumber(args[0]) ? args[0] : !isNumber(args[1]) ? args[1] : undefined;
        return args.length ? getFirstMatches(collection, n, getter ? this.$parse(getter) : getter) :
            collection[0];
    };
    return FirstPipe;
}());
FirstPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'first' },] },
];
FirstPipe.ctorParameters = function () { return []; };
var FlattenPipe = /** @class */ (function () {
    function FlattenPipe() {
    }
    FlattenPipe.prototype.transform = function (collection, shallow) {
        if (shallow === void 0) { shallow = false; }
        if (!isArray(collection)) {
            collection = toArray(collection);
        }
        if (!isArray(collection)) {
            return collection;
        }
        return shallow ? [].concat.apply([], collection) : this.flatten(collection);
    };
    FlattenPipe.prototype.flatten = function (array) {
        var _this = this;
        return array.reduce(function (arr, elm) { return elm instanceof Array ? arr.concat(_this.flatten(elm)) : arr.concat(elm); }, []);
    };
    return FlattenPipe;
}());
FlattenPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'flatten' },] },
];
FlattenPipe.ctorParameters = function () { return []; };
var FuzzyByPipe = /** @class */ (function () {
    function FuzzyByPipe() {
        this.$parse = Parse();
    }
    FuzzyByPipe.prototype.transform = function (collection, property, search, csensitive) {
        if (csensitive === void 0) { csensitive = false; }
        if (!isArray(collection)) {
            collection = toArray(collection);
        }
        if (!isArray(collection) || isUndefined(search)) {
            return collection;
        }
        var getter = this.$parse(property);
        return collection.filter(function (elm) {
            var prop = getter(elm);
            if (!isString(prop)) {
                return false;
            }
            if (!csensitive) {
                prop = prop.toLowerCase();
                search = search.toLowerCase();
            }
            return hasApproxPattern(prop, search) !== false;
        });
    };
    return FuzzyByPipe;
}());
FuzzyByPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'fuzzyBy' },] },
];
FuzzyByPipe.ctorParameters = function () { return []; };
var FuzzyPipe = /** @class */ (function () {
    function FuzzyPipe() {
    }
    FuzzyPipe.prototype.transform = function (collection, search, csensitive) {
        var _this = this;
        if (csensitive === void 0) { csensitive = false; }
        if (!isArray(collection)) {
            collection = toArray(collection);
        }
        if (!isArray(collection) || isUndefined(search)) {
            return collection;
        }
        if (!csensitive) {
            search = search.toLowerCase();
        }
        return collection.filter(function (elm) {
            if (isString(elm)) {
                if (!csensitive) {
                    elm = elm.toLowerCase();
                }
                return hasApproxPattern(elm, search);
            }
            return isObject(elm) ? _this.hasApproximateKey(elm, search, csensitive) : false;
        });
    };
    FuzzyPipe.prototype.hasApproximateKey = function (object, search, csensitive) {
        if (csensitive === void 0) { csensitive = false; }
        return Object.keys(object).some(function (elm) {
            var prop = object[elm];
            if (!isString(prop)) {
                return false;
            }
            if (!csensitive) {
                prop = prop.toLowerCase();
            }
            return hasApproxPattern(prop, search);
        });
    };
    return FuzzyPipe;
}());
FuzzyPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'fuzzy' },] },
];
FuzzyPipe.ctorParameters = function () { return []; };
var GroupByPipe = /** @class */ (function () {
    function GroupByPipe() {
        this.$parse = Parse();
    }
    GroupByPipe.prototype.transform = function (collection, property) {
        if (!isArray(collection)) {
            collection = toArray(collection);
        }
        var result = {}, getter = this.$parse(property);
        collection.forEach(function (elm) {
            var prop = getter(elm);
            if (isUndefined(result[prop])) {
                result[prop] = [];
            }
            result[prop].push(elm);
        });
        return result;
    };
    return GroupByPipe;
}());
GroupByPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'groupBy' },] },
];
GroupByPipe.ctorParameters = function () { return []; };
var IsEmptyPipe = /** @class */ (function () {
    function IsEmptyPipe() {
    }
    IsEmptyPipe.prototype.transform = function (collection) {
        if (!isArray(collection)) {
            collection = toArray(collection);
        }
        return isArray(collection) ? collection.length : 0;
    };
    return IsEmptyPipe;
}());
IsEmptyPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'isEmpty' },] },
];
IsEmptyPipe.ctorParameters = function () { return []; };
var JoinPipe = /** @class */ (function () {
    function JoinPipe() {
    }
    JoinPipe.prototype.transform = function (collection, delimiter) {
        if (delimiter === void 0) { delimiter = ' '; }
        if (!isArray(collection)) {
            collection = toArray(collection);
        }
        return collection.join(String(delimiter));
    };
    return JoinPipe;
}());
JoinPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'join' },] },
];
JoinPipe.ctorParameters = function () { return []; };
var LastPipe = /** @class */ (function () {
    function LastPipe() {
        this.$parse = Parse();
    }
    LastPipe.prototype.transform = function (collection) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!isArray(collection)) {
            collection = toArray(collection);
        }
        if (!isArray(collection)) {
            return collection;
        }
        collection = collection.slice().reverse();
        var n = isNumber(args[0]) ? args[0] : 1, getter = !isNumber(args[0]) ? args[0] : !isNumber(args[1]) ? args[1] : undefined;
        return args.length
            ?
                getFirstMatches(collection, n, getter ? this.$parse(getter) : getter).reverse() :
            collection[0];
    };
    return LastPipe;
}());
LastPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'last' },] },
];
LastPipe.ctorParameters = function () { return []; };
var MapPipe = /** @class */ (function () {
    function MapPipe() {
        this.$parse = Parse();
    }
    MapPipe.prototype.transform = function (collection, predicate) {
        var _this = this;
        if (!isArray(collection)) {
            collection = toArray(collection);
        }
        if (!isArray(collection)) {
            return collection;
        }
        return collection.map(function (e) { return _this.$parse(predicate)(e); });
    };
    return MapPipe;
}());
MapPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'map' },] },
];
MapPipe.ctorParameters = function () { return []; };
var MeanPipe = /** @class */ (function () {
    function MeanPipe() {
    }
    MeanPipe.prototype.transform = function (collection) {
        if (isNil(collection))
            return collection;
        var arr = collection;
        if (!isArray(collection)) {
            arr = toArray(collection);
        }
        if (!isArray(arr) || arr.length === 0)
            return undefined;
        var reduce = arr.reduce(function (prev, curr) { return prev + curr; }, 0);
        return isNumber(reduce) ? reduce / arr.length : 0;
    };
    return MeanPipe;
}());
MeanPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'mean' },] },
];
MeanPipe.ctorParameters = function () { return []; };
var OmitPipe = /** @class */ (function () {
    function OmitPipe() {
        this.$parse = Parse();
    }
    OmitPipe.prototype.transform = function (collection, predicate) {
        var _this = this;
        if (!isArray(collection)) {
            collection = toArray(collection);
        }
        if (!isArray(collection)) {
            return collection;
        }
        return collection.filter(function (e) { return !_this.$parse(predicate)(e); });
    };
    return OmitPipe;
}());
OmitPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'omit' },] },
];
OmitPipe.ctorParameters = function () { return []; };
var OrderByPipe = /** @class */ (function () {
    function OrderByPipe() {
        this.$parse = Parse();
    }
    OrderByPipe.prototype.transform = function (array) {
        var _this = this;
        var attrs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            attrs[_i - 1] = arguments[_i];
        }
        var predicates = attrs.map(function (pred) {
            var descending = pred.charAt(0) === '-' ? -1 : 1;
            pred = pred.replace(/^-/, '');
            return { getter: function (o) { return _this.$parse(pred)(o); }, descend: descending };
        });
        return array
            .map(function (item) {
            return { src: item, compareValues: predicates.map(function (predicate) { return predicate.getter(item); }) };
        })
            .sort(function (o1, o2) {
            var i = -1;
            var result = 0;
            while (++i < predicates.length) {
                if (o1.compareValues[i] < o2.compareValues[i]) {
                    result = -1;
                }
                if (o1.compareValues[i] > o2.compareValues[i]) {
                    result = 1;
                }
                result *= predicates[i].descend;
                if (result) {
                    break;
                }
            }
            return result;
        })
            .map(function (item) { return item.src; });
    };
    return OrderByPipe;
}());
OrderByPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'orderBy' },] },
];
OrderByPipe.ctorParameters = function () { return []; };
var PickPipe = /** @class */ (function () {
    function PickPipe() {
        this.$parse = Parse();
    }
    PickPipe.prototype.transform = function (collection, predicate) {
        var _this = this;
        if (!isArray(collection)) {
            collection = toArray(collection);
        }
        if (!isArray(collection)) {
            return collection;
        }
        return collection.filter(function (e) { return _this.$parse(predicate)(e); });
    };
    return PickPipe;
}());
PickPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'pick' },] },
];
PickPipe.ctorParameters = function () { return []; };
var RangePipe = /** @class */ (function () {
    function RangePipe() {
    }
    RangePipe.prototype.transform = function (input, total, start, increment, cb) {
        if (total === void 0) { total = 0; }
        if (start === void 0) { start = 0; }
        if (increment === void 0) { increment = 1; }
        for (var i = 0; i < total; i++) {
            var j = start + i * increment;
            input.push(isFunction(cb) ? cb(j) : j);
        }
        return input;
    };
    return RangePipe;
}());
RangePipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'range' },] },
];
RangePipe.ctorParameters = function () { return []; };
var RemoveWithPipe = /** @class */ (function () {
    function RemoveWithPipe() {
    }
    RemoveWithPipe.prototype.transform = function (collection, object) {
        if (!isArray(collection)) {
            collection = toArray(collection);
        }
        if (!isArray(collection) || isUndefined(object)) {
            return collection;
        }
        return collection.filter(function (e) { return !objectContains(object, e); });
    };
    return RemoveWithPipe;
}());
RemoveWithPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'removeWith' },] },
];
RemoveWithPipe.ctorParameters = function () { return []; };
var RemovePipe = /** @class */ (function () {
    function RemovePipe() {
    }
    RemovePipe.prototype.transform = function (collection) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!isArray(collection)) {
            collection = toArray(collection);
        }
        return collection.filter(function (e) {
            return !args.some(function (c) { return equals(c, e); });
        });
    };
    return RemovePipe;
}());
RemovePipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'remove' },] },
];
RemovePipe.ctorParameters = function () { return []; };
var ReversePipe = /** @class */ (function () {
    function ReversePipe() {
    }
    ReversePipe.prototype.transform = function (input) {
        if (isString(input)) {
            return Array.from(input).reverse().join('');
        }
        return isArray(input) ? input.reverse() : input;
    };
    return ReversePipe;
}());
ReversePipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'reverse' },] },
];
ReversePipe.ctorParameters = function () { return []; };
var SearchFieldPipe = /** @class */ (function () {
    function SearchFieldPipe() {
        this.$parse = Parse();
    }
    SearchFieldPipe.prototype.transform = function (collection) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!isArray(collection) || !args.length) {
            return collection;
        }
        return collection.map(function (member) {
            var field = args.map(function (arg) { return _this.$parse(arg)(member); }).join(' ');
            member.searchField = field;
            return member;
        });
    };
    return SearchFieldPipe;
}());
SearchFieldPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'searchField' },] },
];
SearchFieldPipe.ctorParameters = function () { return []; };
var ToArrayPipe = /** @class */ (function () {
    function ToArrayPipe() {
    }
    ToArrayPipe.prototype.transform = function (collection, addKey) {
        if (addKey === void 0) { addKey = false; }
        if (!isObject(collection)) {
            return collection;
        }
        return addKey ? Object.keys(collection).map(function (key) {
            var o = collection[key];
            o.$key = key;
            return o;
        }) :
            toArray(collection);
    };
    return ToArrayPipe;
}());
ToArrayPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'toArray' },] },
];
ToArrayPipe.ctorParameters = function () { return []; };
var UniqPipe = /** @class */ (function () {
    function UniqPipe() {
        this.$parse = Parse();
    }
    UniqPipe.prototype.transform = function (collection, predicate) {
        if (!isArray(collection)) {
            collection = toArray(collection);
        }
        if (isUndefined(predicate)) {
            return collection.filter(function (e, i, self) { return self.indexOf(e) === i; });
        }
        var getter = this.$parse(predicate), uniqueItems = [];
        return collection.filter(function (e) {
            var v = getter(e);
            if (!isUndefined(v) && uniqueItems.some(function (ue) { return ue === v; })) {
                return false;
            }
            uniqueItems.push(v);
            return true;
        });
    };
    return UniqPipe;
}());
UniqPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'uniq' },] },
];
UniqPipe.ctorParameters = function () { return []; };
var WherePipe = /** @class */ (function () {
    function WherePipe() {
    }
    WherePipe.prototype.transform = function (collection, object) {
        if (!isArray(collection)) {
            collection = toArray(collection);
        }
        if (!isArray(collection) || isUndefined(object)) {
            return collection;
        }
        return collection.filter(function (e) { return objectContains(object, e); });
    };
    return WherePipe;
}());
WherePipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'where' },] },
];
WherePipe.ctorParameters = function () { return []; };
var XORPipe = /** @class */ (function () {
    function XORPipe() {
        this.$parse = Parse();
    }
    XORPipe.prototype.transform = function (col1, col2, predicate) {
        var _this = this;
        col1 = !isArray(col1) ? toArray(col1) : col1;
        col2 = !isArray(col2) ? toArray(col2) : col2;
        if (!isArray(col1) || !isArray(col2)) {
            return col1;
        }
        return col1.concat(col2).filter(function (elm) {
            return !(_this.some(elm, col1, predicate) && _this.some(elm, col2, predicate));
        });
    };
    XORPipe.prototype.some = function (el, col, predicate) {
        var getter = this.$parse(predicate);
        return col.some(function (dElm) {
            if (isUndefined(predicate)) {
                return dElm === el;
            }
            return getter(dElm) === getter(el);
        });
    };
    return XORPipe;
}());
XORPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'xor' },] },
];
XORPipe.ctorParameters = function () { return []; };
var CollectionPipesModule = /** @class */ (function () {
    function CollectionPipesModule() {
    }
    return CollectionPipesModule;
}());
CollectionPipesModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                declarations: [
                    AfterWherePipe, BeforeWherePipe, AfterPipe, BeforePipe, ChunkByPipe, ConcatPipe,
                    ContainsPipe, CountByPipe, DefaultsPipe, EveryPipe, FilterByPipe, FirstPipe,
                    FlattenPipe, FuzzyByPipe, FuzzyPipe, GroupByPipe, IsEmptyPipe, JoinPipe,
                    LastPipe, MapPipe, MeanPipe, OmitPipe, PickPipe, RangePipe,
                    RemoveWithPipe, ReversePipe, SearchFieldPipe, RemovePipe, ToArrayPipe, UniqPipe,
                    WherePipe, XORPipe, OrderByPipe
                ],
                exports: [
                    AfterWherePipe, BeforeWherePipe, AfterPipe, BeforePipe, ChunkByPipe, ConcatPipe,
                    ContainsPipe, CountByPipe, DefaultsPipe, EveryPipe, FilterByPipe, FirstPipe,
                    FlattenPipe, FuzzyByPipe, FuzzyPipe, GroupByPipe, IsEmptyPipe, JoinPipe,
                    LastPipe, MapPipe, MeanPipe, OmitPipe, PickPipe, RangePipe,
                    RemoveWithPipe, ReversePipe, SearchFieldPipe, RemovePipe, ToArrayPipe, UniqPipe,
                    WherePipe, XORPipe, OrderByPipe
                ]
            },] },
];
CollectionPipesModule.ctorParameters = function () { return []; };
var AbsPipe = /** @class */ (function () {
    function AbsPipe() {
    }
    AbsPipe.prototype.transform = function (input) {
        return Math.abs(Number(input));
    };
    return AbsPipe;
}());
AbsPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'abs' },] },
];
AbsPipe.ctorParameters = function () { return []; };
var ByteFmtPipe = /** @class */ (function () {
    function ByteFmtPipe() {
        var _this = this;
        this.compared = [{ str: 'B', val: 1024 }];
        ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'].forEach(function (el, i) {
            _this.compared.push({ str: el, val: _this.compared[i].val * 1024 });
        });
    }
    ByteFmtPipe.prototype.transform = function (bytes, decimal) {
        if (isNumber(decimal) && isFinite(decimal) && decimal % 1 === 0 && decimal >= 0 &&
            isNumber(bytes) && isFinite(bytes)) {
            var i = 0;
            while (i < this.compared.length - 1 && bytes >= this.compared[i].val)
                i++;
            bytes /= i > 0 ? this.compared[i - 1].val : 1;
            return convertToDecimal(bytes, decimal) + ' ' + this.compared[i].str;
        }
        return 'NaN';
    };
    return ByteFmtPipe;
}());
ByteFmtPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'byteFmt' },] },
];
ByteFmtPipe.ctorParameters = function () { return []; };
var CeilPipe = /** @class */ (function () {
    function CeilPipe() {
    }
    CeilPipe.prototype.transform = function (input, precision) {
        if (precision === void 0) { precision = 0; }
        var num = parseFloat(input);
        var prec = parseInt(precision, 10);
        if (isNaN(num))
            return input;
        if (isNaN(prec) || prec <= 0) {
            return Math.ceil(num);
        }
        else {
            var pow = Math.pow(10, precision);
            return Math.ceil(num * pow) / pow;
        }
    };
    return CeilPipe;
}());
CeilPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'ceil' },] },
];
CeilPipe.ctorParameters = function () { return []; };
var DegreesPipe = /** @class */ (function () {
    function DegreesPipe() {
    }
    DegreesPipe.prototype.transform = function (radians, decimal) {
        if (isNumber(decimal) && isFinite(decimal) && decimal % 1 === 0 && decimal >= 0 &&
            isNumber(radians) && isFinite(radians)) {
            var degrees = (radians * 180) / Math.PI;
            return Math.round(degrees * Math.pow(10, decimal)) / (Math.pow(10, decimal));
        }
        else {
            return NaN;
        }
    };
    return DegreesPipe;
}());
DegreesPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'degrees' },] },
];
DegreesPipe.ctorParameters = function () { return []; };
var FloorPipe = /** @class */ (function () {
    function FloorPipe() {
    }
    FloorPipe.prototype.transform = function (input, precision) {
        if (precision === void 0) { precision = 0; }
        var num = parseFloat(input);
        var prec = parseInt(precision, 10);
        if (isNaN(num))
            return input;
        if (isNaN(prec) || prec <= 0) {
            return Math.floor(num);
        }
        else {
            var pow = Math.pow(10, precision);
            return Math.floor(num * pow) / pow;
        }
    };
    return FloorPipe;
}());
FloorPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'floor' },] },
];
FloorPipe.ctorParameters = function () { return []; };
var KBFmtPipe = /** @class */ (function () {
    function KBFmtPipe() {
        var _this = this;
        this.compared = [{ str: 'KB', val: 1024 }];
        ['MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'].forEach(function (el, i) {
            _this.compared.push({ str: el, val: _this.compared[i].val * 1024 });
        });
    }
    KBFmtPipe.prototype.transform = function (bytes, decimal) {
        if (isNumber(decimal) && isFinite(decimal) && decimal % 1 === 0 && decimal >= 0 &&
            isNumber(bytes) && isFinite(bytes)) {
            var i = 0;
            while (i < this.compared.length - 1 && bytes >= this.compared[i].val)
                i++;
            bytes /= i > 0 ? this.compared[i - 1].val : 1;
            return convertToDecimal(bytes, decimal) + ' ' + this.compared[i].str;
        }
        return 'NaN';
    };
    return KBFmtPipe;
}());
KBFmtPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'kbFmt' },] },
];
KBFmtPipe.ctorParameters = function () { return []; };
var MaxPipe = /** @class */ (function () {
    function MaxPipe() {
        this.$parse = Parse();
    }
    MaxPipe.prototype.transform = function (input, predicate) {
        return isUndefined(predicate) ? Math.max.apply(Math, input) :
            input[this.index(input, this.$parse(predicate))];
    };
    MaxPipe.prototype.index = function (input, fn) {
        var mappedArray = input.map(function (elm) { return fn(elm) || -Infinity; });
        return mappedArray.indexOf(Math.max.apply(Math, mappedArray));
    };
    return MaxPipe;
}());
MaxPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'max' },] },
];
MaxPipe.ctorParameters = function () { return []; };
var MinPipe = /** @class */ (function () {
    function MinPipe() {
        this.$parse = Parse();
    }
    MinPipe.prototype.transform = function (input, predicate) {
        return isUndefined(predicate) ? Math.min.apply(Math, input) :
            input[this.index(input, this.$parse(predicate))];
    };
    MinPipe.prototype.index = function (input, fn) {
        var mappedArray = input.map(function (elm) { return fn(elm) || Infinity; });
        return mappedArray.indexOf(Math.min.apply(Math, mappedArray));
    };
    return MinPipe;
}());
MinPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'min' },] },
];
MinPipe.ctorParameters = function () { return []; };
var PercentPipe = /** @class */ (function () {
    function PercentPipe() {
    }
    PercentPipe.prototype.transform = function (input, divided, round) {
        if (divided === void 0) { divided = 100; }
        if (round === void 0) { round = false; }
        var divider = input;
        if (isString(input)) {
            divider = Number(input);
        }
        if (!isNumber(divider) || isNaN(divider)) {
            return input;
        }
        return round ? Math.round((divider / divided) * 100) : (divider / divided) * 100;
    };
    return PercentPipe;
}());
PercentPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'percent' },] },
];
PercentPipe.ctorParameters = function () { return []; };
var PowPipe = /** @class */ (function () {
    function PowPipe() {
    }
    PowPipe.prototype.transform = function (input, power) {
        if (power === void 0) { power = 2; }
        var num = parseFloat(input);
        var parsed = parseInt(power, 10);
        if (isNaN(num))
            return input;
        return Math.pow(num, (isNaN(parsed)) ? 2 : parsed);
    };
    return PowPipe;
}());
PowPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'pow' },] },
];
PowPipe.ctorParameters = function () { return []; };
var RadiansPipe = /** @class */ (function () {
    function RadiansPipe() {
    }
    RadiansPipe.prototype.transform = function (degrees, decimal) {
        if (isNumber(decimal) && isFinite(decimal) && decimal % 1 === 0 && decimal >= 0 &&
            isNumber(degrees) && isFinite(degrees)) {
            var radians = (degrees * 3.14159265359) / 180;
            return Math.round(radians * Math.pow(10, decimal)) / (Math.pow(10, decimal));
        }
        return NaN;
    };
    return RadiansPipe;
}());
RadiansPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'radians' },] },
];
RadiansPipe.ctorParameters = function () { return []; };
var RadixPipe = /** @class */ (function () {
    function RadixPipe() {
    }
    RadixPipe.prototype.transform = function (input, radix) {
        var RANGE = /^[2-9]$|^[1-2]\d$|^3[0-6]$/;
        if (!isNumber(input) || !RANGE.test(radix.toString())) {
            return input.toString();
        }
        return input.toString(radix).toUpperCase();
    };
    return RadixPipe;
}());
RadixPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'radix' },] },
];
RadixPipe.ctorParameters = function () { return []; };
var RoundPipe = /** @class */ (function () {
    function RoundPipe() {
    }
    RoundPipe.prototype.transform = function (input, precision) {
        if (precision === void 0) { precision = 0; }
        var num = parseFloat(input);
        var prec = parseInt(precision, 10);
        if (isNaN(num))
            return input;
        if (isNaN(prec) || prec <= 0) {
            return Math.round(num);
        }
        else {
            var pow = Math.pow(10, precision);
            return Math.round(num * pow) / pow;
        }
    };
    return RoundPipe;
}());
RoundPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'round' },] },
];
RoundPipe.ctorParameters = function () { return []; };
var ShortFmtPipe = /** @class */ (function () {
    function ShortFmtPipe() {
    }
    ShortFmtPipe.prototype.transform = function (number, decimal) {
        if (isNumber(decimal) && isFinite(decimal) && decimal % 1 === 0 && decimal >= 0 &&
            isNumber(number) && isFinite(number)) {
            if (number < 1e3) {
                return '' + number;
            }
            else if (number < 1e6) {
                return convertToDecimal((number / 1e3), decimal) + ' K';
            }
            else if (number < 1e9) {
                return convertToDecimal((number / 1e6), decimal) + ' M';
            }
            else {
                return convertToDecimal((number / 1e9), decimal) + ' B';
            }
        }
        return 'NaN';
    };
    return ShortFmtPipe;
}());
ShortFmtPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'shortFmt' },] },
];
ShortFmtPipe.ctorParameters = function () { return []; };
var SqrtPipe = /** @class */ (function () {
    function SqrtPipe() {
    }
    SqrtPipe.prototype.transform = function (input) {
        var num = parseInt(input, 10);
        return isNaN(num) ? input : Math.sqrt(num);
    };
    return SqrtPipe;
}());
SqrtPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'sqrt' },] },
];
SqrtPipe.ctorParameters = function () { return []; };
var SumPipe = /** @class */ (function () {
    function SumPipe() {
    }
    SumPipe.prototype.transform = function (array, initial) {
        if (initial === void 0) { initial = 0; }
        if (!isArray(array)) {
            return array;
        }
        return array.reduce(function (prev, curr) {
            return prev + curr;
        }, initial);
    };
    return SumPipe;
}());
SumPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'sum' },] },
];
SumPipe.ctorParameters = function () { return []; };
var MathPipesModule = /** @class */ (function () {
    function MathPipesModule() {
    }
    return MathPipesModule;
}());
MathPipesModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                declarations: [
                    AbsPipe, ByteFmtPipe, CeilPipe, KBFmtPipe, DegreesPipe, FloorPipe, MaxPipe, MinPipe,
                    PercentPipe, PowPipe, RadiansPipe, RadixPipe, RoundPipe, ShortFmtPipe, SumPipe, SqrtPipe
                ],
                exports: [
                    AbsPipe, ByteFmtPipe, CeilPipe, KBFmtPipe, DegreesPipe, FloorPipe, MaxPipe, MinPipe,
                    PercentPipe, PowPipe, RadiansPipe, RadixPipe, RoundPipe, ShortFmtPipe, SumPipe, SqrtPipe
                ]
            },] },
];
MathPipesModule.ctorParameters = function () { return []; };
var InvertPipe = /** @class */ (function () {
    function InvertPipe() {
    }
    InvertPipe.prototype.transform = function (input) {
        if (isNil(input) || isArray(input) || !isObject(input))
            return input;
        var newObj = {};
        for (var obj in input) {
            if (!!!newObj[input[obj]]) {
                newObj[input[obj]] = [];
            }
            newObj[input[obj]].push(obj);
        }
        return newObj;
    };
    return InvertPipe;
}());
InvertPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'invert' },] },
];
InvertPipe.ctorParameters = function () { return []; };
var KeysPipe = /** @class */ (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (input) {
        return isNil(input) || isArray(input) || !isObject(input) ? input : Object.keys(input);
    };
    return KeysPipe;
}());
KeysPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'keys' },] },
];
KeysPipe.ctorParameters = function () { return []; };
var ValuesPipe = /** @class */ (function () {
    function ValuesPipe() {
    }
    ValuesPipe.prototype.transform = function (input) {
        return isNil(input) || isArray(input) || !isObject(input) ?
            input :
            Object.keys(input).map(function (v) { return input[v]; });
    };
    return ValuesPipe;
}());
ValuesPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'values' },] },
];
ValuesPipe.ctorParameters = function () { return []; };
var ObjectPipesModule = /** @class */ (function () {
    function ObjectPipesModule() {
    }
    return ObjectPipesModule;
}());
ObjectPipesModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{ declarations: [InvertPipe, KeysPipe, ValuesPipe], exports: [InvertPipe, KeysPipe, ValuesPipe] },] },
];
ObjectPipesModule.ctorParameters = function () { return []; };
var CamelizePipe = /** @class */ (function () {
    function CamelizePipe() {
    }
    CamelizePipe.prototype.transform = function (input, upperFirst) {
        if (upperFirst === void 0) { upperFirst = false; }
        if (!isString(input))
            return input;
        return input.toLowerCase()
            .split(/[-_\s]+/g)
            .filter(function (value) { return value !== ''; })
            .map(function (value, index) { return index === 0 && !!!upperFirst ?
            value :
            "" + (value.substring(0, 1).toUpperCase() + value.substring(1)); })
            .join('');
    };
    return CamelizePipe;
}());
CamelizePipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'camelize' },] },
];
CamelizePipe.ctorParameters = function () { return []; };
var CenterPadPipe = /** @class */ (function () {
    function CenterPadPipe() {
    }
    CenterPadPipe.prototype.transform = function (input, requiredLength, padChar) {
        if (padChar === void 0) { padChar = ' '; }
        if (!isString(input) || input.length >= requiredLength)
            return input;
        var diff = requiredLength - input.length;
        var left = Math.ceil(diff / 2);
        var right = Math.floor(diff / 2);
        return "" + pad(left, padChar) + input + pad(right, padChar);
    };
    return CenterPadPipe;
}());
CenterPadPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'centerPad' },] },
];
CenterPadPipe.ctorParameters = function () { return []; };
var EndsWithPipe = /** @class */ (function () {
    function EndsWithPipe() {
    }
    EndsWithPipe.prototype.transform = function (input, ends, csensitive) {
        if (csensitive === void 0) { csensitive = false; }
        if (ends === '') {
            return true;
        }
        if (!csensitive) {
            input = input.toLowerCase();
            ends = ends.toLowerCase();
        }
        return input.substring(input.length - ends.length) === ends;
    };
    return EndsWithPipe;
}());
EndsWithPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'endsWith' },] },
];
EndsWithPipe.ctorParameters = function () { return []; };
var LatinizePipe = /** @class */ (function () {
    function LatinizePipe() {
        var defaultDiacriticsRemovalap = [
            {
                'base': 'A',
                'letters': [
                    '\u0041', '\u24B6', '\uFF21', '\u00C0', '\u00C1', '\u00C2', '\u1EA6', '\u1EA4', '\u1EAA',
                    '\u1EA8', '\u00C3', '\u0100', '\u0102', '\u1EB0', '\u1EAE', '\u1EB4', '\u1EB2', '\u0226',
                    '\u01E0', '\u00C4', '\u01DE', '\u1EA2', '\u00C5', '\u01FA', '\u01CD', '\u0200', '\u0202',
                    '\u1EA0', '\u1EAC', '\u1EB6', '\u1E00', '\u0104', '\u023A', '\u2C6F'
                ]
            },
            { 'base': 'AA', 'letters': ['\uA732'] },
            { 'base': 'AE', 'letters': ['\u00C6', '\u01FC', '\u01E2'] },
            { 'base': 'AO', 'letters': ['\uA734'] },
            { 'base': 'AU', 'letters': ['\uA736'] },
            { 'base': 'AV', 'letters': ['\uA738', '\uA73A'] },
            { 'base': 'AY', 'letters': ['\uA73C'] },
            {
                'base': 'B',
                'letters': [
                    '\u0042', '\u24B7', '\uFF22', '\u1E02', '\u1E04', '\u1E06', '\u0243', '\u0182', '\u0181'
                ]
            },
            {
                'base': 'C',
                'letters': [
                    '\u0043', '\u24B8', '\uFF23', '\u0106', '\u0108', '\u010A', '\u010C', '\u00C7', '\u1E08',
                    '\u0187', '\u023B', '\uA73E'
                ]
            },
            {
                'base': 'D',
                'letters': [
                    '\u0044', '\u24B9', '\uFF24', '\u1E0A', '\u010E', '\u1E0C', '\u1E10', '\u1E12', '\u1E0E',
                    '\u0110', '\u018B', '\u018A', '\u0189', '\uA779'
                ]
            },
            { 'base': 'DZ', 'letters': ['\u01F1', '\u01C4'] },
            { 'base': 'Dz', 'letters': ['\u01F2', '\u01C5'] },
            {
                'base': 'E',
                'letters': [
                    '\u0045', '\u24BA', '\uFF25', '\u00C8', '\u00C9', '\u00CA', '\u1EC0', '\u1EBE',
                    '\u1EC4', '\u1EC2', '\u1EBC', '\u0112', '\u1E14', '\u1E16', '\u0114', '\u0116',
                    '\u00CB', '\u1EBA', '\u011A', '\u0204', '\u0206', '\u1EB8', '\u1EC6', '\u0228',
                    '\u1E1C', '\u0118', '\u1E18', '\u1E1A', '\u0190', '\u018E'
                ]
            },
            { 'base': 'F', 'letters': ['\u0046', '\u24BB', '\uFF26', '\u1E1E', '\u0191', '\uA77B'] },
            {
                'base': 'G',
                'letters': [
                    '\u0047', '\u24BC', '\uFF27', '\u01F4', '\u011C', '\u1E20', '\u011E', '\u0120', '\u01E6',
                    '\u0122', '\u01E4', '\u0193', '\uA7A0', '\uA77D', '\uA77E'
                ]
            },
            {
                'base': 'H',
                'letters': [
                    '\u0048', '\u24BD', '\uFF28', '\u0124', '\u1E22', '\u1E26', '\u021E', '\u1E24', '\u1E28',
                    '\u1E2A', '\u0126', '\u2C67', '\u2C75', '\uA78D'
                ]
            },
            {
                'base': 'I',
                'letters': [
                    '\u0049', '\u24BE', '\uFF29', '\u00CC', '\u00CD', '\u00CE', '\u0128',
                    '\u012A', '\u012C', '\u0130', '\u00CF', '\u1E2E', '\u1EC8', '\u01CF',
                    '\u0208', '\u020A', '\u1ECA', '\u012E', '\u1E2C', '\u0197'
                ]
            },
            { 'base': 'J', 'letters': ['\u004A', '\u24BF', '\uFF2A', '\u0134', '\u0248'] },
            {
                'base': 'K',
                'letters': [
                    '\u004B', '\u24C0', '\uFF2B', '\u1E30', '\u01E8', '\u1E32', '\u0136', '\u1E34', '\u0198',
                    '\u2C69', '\uA740', '\uA742', '\uA744', '\uA7A2'
                ]
            },
            {
                'base': 'L',
                'letters': [
                    '\u004C', '\u24C1', '\uFF2C', '\u013F', '\u0139', '\u013D', '\u1E36', '\u1E38', '\u013B',
                    '\u1E3C', '\u1E3A', '\u0141', '\u023D', '\u2C62', '\u2C60', '\uA748', '\uA746', '\uA780'
                ]
            },
            { 'base': 'LJ', 'letters': ['\u01C7'] },
            { 'base': 'Lj', 'letters': ['\u01C8'] },
            {
                'base': 'M',
                'letters': ['\u004D', '\u24C2', '\uFF2D', '\u1E3E', '\u1E40', '\u1E42', '\u2C6E', '\u019C']
            },
            {
                'base': 'N',
                'letters': [
                    '\u004E', '\u24C3', '\uFF2E', '\u01F8', '\u0143', '\u00D1', '\u1E44', '\u0147', '\u1E46',
                    '\u0145', '\u1E4A', '\u1E48', '\u0220', '\u019D', '\uA790', '\uA7A4'
                ]
            },
            { 'base': 'NJ', 'letters': ['\u01CA'] },
            { 'base': 'Nj', 'letters': ['\u01CB'] },
            {
                'base': 'O',
                'letters': [
                    '\u004F', '\u24C4', '\uFF2F', '\u00D2', '\u00D3', '\u00D4', '\u1ED2', '\u1ED0', '\u1ED6',
                    '\u1ED4', '\u00D5', '\u1E4C', '\u022C', '\u1E4E', '\u014C', '\u1E50', '\u1E52', '\u014E',
                    '\u022E', '\u0230', '\u00D6', '\u022A', '\u1ECE', '\u0150', '\u01D1', '\u020C', '\u020E',
                    '\u01A0', '\u1EDC', '\u1EDA', '\u1EE0', '\u1EDE', '\u1EE2', '\u1ECC', '\u1ED8', '\u01EA',
                    '\u01EC', '\u00D8', '\u01FE', '\u0186', '\u019F', '\uA74A', '\uA74C'
                ]
            },
            { 'base': 'OI', 'letters': ['\u01A2'] },
            { 'base': 'OO', 'letters': ['\uA74E'] },
            { 'base': 'OU', 'letters': ['\u0222'] },
            { 'base': 'OE', 'letters': ['\u008C', '\u0152'] },
            { 'base': 'oe', 'letters': ['\u009C', '\u0153'] },
            {
                'base': 'P',
                'letters': [
                    '\u0050', '\u24C5', '\uFF30', '\u1E54', '\u1E56', '\u01A4', '\u2C63', '\uA750', '\uA752',
                    '\uA754'
                ]
            },
            { 'base': 'Q', 'letters': ['\u0051', '\u24C6', '\uFF31', '\uA756', '\uA758', '\u024A'] },
            {
                'base': 'R',
                'letters': [
                    '\u0052', '\u24C7', '\uFF32', '\u0154', '\u1E58', '\u0158', '\u0210', '\u0212', '\u1E5A',
                    '\u1E5C', '\u0156', '\u1E5E', '\u024C', '\u2C64', '\uA75A', '\uA7A6', '\uA782'
                ]
            },
            {
                'base': 'S',
                'letters': [
                    '\u0053', '\u24C8', '\uFF33', '\u1E9E', '\u015A', '\u1E64', '\u015C', '\u1E60', '\u0160',
                    '\u1E66', '\u1E62', '\u1E68', '\u0218', '\u015E', '\u2C7E', '\uA7A8', '\uA784'
                ]
            },
            {
                'base': 'T',
                'letters': [
                    '\u0054', '\u24C9', '\uFF34', '\u1E6A', '\u0164', '\u1E6C', '\u021A', '\u0162', '\u1E70',
                    '\u1E6E', '\u0166', '\u01AC', '\u01AE', '\u023E', '\uA786'
                ]
            },
            { 'base': 'TZ', 'letters': ['\uA728'] },
            {
                'base': 'U',
                'letters': [
                    '\u0055', '\u24CA', '\uFF35', '\u00D9', '\u00DA', '\u00DB', '\u0168', '\u1E78', '\u016A',
                    '\u1E7A', '\u016C', '\u00DC', '\u01DB', '\u01D7', '\u01D5', '\u01D9', '\u1EE6', '\u016E',
                    '\u0170', '\u01D3', '\u0214', '\u0216', '\u01AF', '\u1EEA', '\u1EE8', '\u1EEE', '\u1EEC',
                    '\u1EF0', '\u1EE4', '\u1E72', '\u0172', '\u1E76', '\u1E74', '\u0244'
                ]
            },
            {
                'base': 'V',
                'letters': ['\u0056', '\u24CB', '\uFF36', '\u1E7C', '\u1E7E', '\u01B2', '\uA75E', '\u0245']
            },
            { 'base': 'VY', 'letters': ['\uA760'] },
            {
                'base': 'W',
                'letters': [
                    '\u0057', '\u24CC', '\uFF37', '\u1E80', '\u1E82', '\u0174', '\u1E86', '\u1E84', '\u1E88',
                    '\u2C72'
                ]
            },
            { 'base': 'X', 'letters': ['\u0058', '\u24CD', '\uFF38', '\u1E8A', '\u1E8C'] },
            {
                'base': 'Y',
                'letters': [
                    '\u0059', '\u24CE', '\uFF39', '\u1EF2', '\u00DD', '\u0176', '\u1EF8', '\u0232', '\u1E8E',
                    '\u0178', '\u1EF6', '\u1EF4', '\u01B3', '\u024E', '\u1EFE'
                ]
            },
            {
                'base': 'Z',
                'letters': [
                    '\u005A', '\u24CF', '\uFF3A', '\u0179', '\u1E90', '\u017B', '\u017D', '\u1E92', '\u1E94',
                    '\u01B5', '\u0224', '\u2C7F', '\u2C6B', '\uA762'
                ]
            },
            {
                'base': 'a',
                'letters': [
                    '\u0061', '\u24D0', '\uFF41', '\u1E9A', '\u00E0', '\u00E1', '\u00E2', '\u1EA7', '\u1EA5',
                    '\u1EAB', '\u1EA9', '\u00E3', '\u0101', '\u0103', '\u1EB1', '\u1EAF', '\u1EB5', '\u1EB3',
                    '\u0227', '\u01E1', '\u00E4', '\u01DF', '\u1EA3', '\u00E5', '\u01FB', '\u01CE', '\u0201',
                    '\u0203', '\u1EA1', '\u1EAD', '\u1EB7', '\u1E01', '\u0105', '\u2C65', '\u0250'
                ]
            },
            { 'base': 'aa', 'letters': ['\uA733'] },
            { 'base': 'ae', 'letters': ['\u00E6', '\u01FD', '\u01E3'] },
            { 'base': 'ao', 'letters': ['\uA735'] },
            { 'base': 'au', 'letters': ['\uA737'] },
            { 'base': 'av', 'letters': ['\uA739', '\uA73B'] },
            { 'base': 'ay', 'letters': ['\uA73D'] },
            {
                'base': 'b',
                'letters': [
                    '\u0062', '\u24D1', '\uFF42', '\u1E03', '\u1E05', '\u1E07', '\u0180', '\u0183', '\u0253'
                ]
            },
            {
                'base': 'c',
                'letters': [
                    '\u0063', '\u24D2', '\uFF43', '\u0107', '\u0109', '\u010B', '\u010D', '\u00E7', '\u1E09',
                    '\u0188', '\u023C', '\uA73F', '\u2184'
                ]
            },
            {
                'base': 'd',
                'letters': [
                    '\u0064', '\u24D3', '\uFF44', '\u1E0B', '\u010F', '\u1E0D', '\u1E11', '\u1E13', '\u1E0F',
                    '\u0111', '\u018C', '\u0256', '\u0257', '\uA77A'
                ]
            },
            { 'base': 'dz', 'letters': ['\u01F3', '\u01C6'] },
            {
                'base': 'e',
                'letters': [
                    '\u0065', '\u24D4', '\uFF45', '\u00E8', '\u00E9', '\u00EA', '\u1EC1', '\u1EBF',
                    '\u1EC5', '\u1EC3', '\u1EBD', '\u0113', '\u1E15', '\u1E17', '\u0115', '\u0117',
                    '\u00EB', '\u1EBB', '\u011B', '\u0205', '\u0207', '\u1EB9', '\u1EC7', '\u0229',
                    '\u1E1D', '\u0119', '\u1E19', '\u1E1B', '\u0247', '\u025B', '\u01DD'
                ]
            },
            { 'base': 'f', 'letters': ['\u0066', '\u24D5', '\uFF46', '\u1E1F', '\u0192', '\uA77C'] },
            {
                'base': 'g',
                'letters': [
                    '\u0067', '\u24D6', '\uFF47', '\u01F5', '\u011D', '\u1E21', '\u011F', '\u0121', '\u01E7',
                    '\u0123', '\u01E5', '\u0260', '\uA7A1', '\u1D79', '\uA77F'
                ]
            },
            {
                'base': 'h',
                'letters': [
                    '\u0068', '\u24D7', '\uFF48', '\u0125', '\u1E23', '\u1E27', '\u021F', '\u1E25', '\u1E29',
                    '\u1E2B', '\u1E96', '\u0127', '\u2C68', '\u2C76', '\u0265'
                ]
            },
            { 'base': 'hv', 'letters': ['\u0195'] },
            {
                'base': 'i',
                'letters': [
                    '\u0069', '\u24D8', '\uFF49', '\u00EC', '\u00ED', '\u00EE', '\u0129',
                    '\u012B', '\u012D', '\u00EF', '\u1E2F', '\u1EC9', '\u01D0', '\u0209',
                    '\u020B', '\u1ECB', '\u012F', '\u1E2D', '\u0268', '\u0131'
                ]
            },
            { 'base': 'j', 'letters': ['\u006A', '\u24D9', '\uFF4A', '\u0135', '\u01F0', '\u0249'] },
            {
                'base': 'k',
                'letters': [
                    '\u006B', '\u24DA', '\uFF4B', '\u1E31', '\u01E9', '\u1E33', '\u0137', '\u1E35', '\u0199',
                    '\u2C6A', '\uA741', '\uA743', '\uA745', '\uA7A3'
                ]
            },
            {
                'base': 'l',
                'letters': [
                    '\u006C', '\u24DB', '\uFF4C', '\u0140', '\u013A', '\u013E', '\u1E37', '\u1E39', '\u013C',
                    '\u1E3D', '\u1E3B', '\u017F', '\u0142', '\u019A', '\u026B', '\u2C61', '\uA749', '\uA781',
                    '\uA747'
                ]
            },
            { 'base': 'lj', 'letters': ['\u01C9'] },
            {
                'base': 'm',
                'letters': ['\u006D', '\u24DC', '\uFF4D', '\u1E3F', '\u1E41', '\u1E43', '\u0271', '\u026F']
            },
            {
                'base': 'n',
                'letters': [
                    '\u006E', '\u24DD', '\uFF4E', '\u01F9', '\u0144', '\u00F1', '\u1E45', '\u0148', '\u1E47',
                    '\u0146', '\u1E4B', '\u1E49', '\u019E', '\u0272', '\u0149', '\uA791', '\uA7A5'
                ]
            },
            { 'base': 'nj', 'letters': ['\u01CC'] },
            {
                'base': 'o',
                'letters': [
                    '\u006F', '\u24DE', '\uFF4F', '\u00F2', '\u00F3', '\u00F4', '\u1ED3', '\u1ED1', '\u1ED7',
                    '\u1ED5', '\u00F5', '\u1E4D', '\u022D', '\u1E4F', '\u014D', '\u1E51', '\u1E53', '\u014F',
                    '\u022F', '\u0231', '\u00F6', '\u022B', '\u1ECF', '\u0151', '\u01D2', '\u020D', '\u020F',
                    '\u01A1', '\u1EDD', '\u1EDB', '\u1EE1', '\u1EDF', '\u1EE3', '\u1ECD', '\u1ED9', '\u01EB',
                    '\u01ED', '\u00F8', '\u01FF', '\u0254', '\uA74B', '\uA74D', '\u0275'
                ]
            },
            { 'base': 'oi', 'letters': ['\u01A3'] },
            { 'base': 'ou', 'letters': ['\u0223'] },
            { 'base': 'oo', 'letters': ['\uA74F'] },
            {
                'base': 'p',
                'letters': [
                    '\u0070', '\u24DF', '\uFF50', '\u1E55', '\u1E57', '\u01A5', '\u1D7D', '\uA751', '\uA753',
                    '\uA755'
                ]
            },
            { 'base': 'q', 'letters': ['\u0071', '\u24E0', '\uFF51', '\u024B', '\uA757', '\uA759'] },
            {
                'base': 'r',
                'letters': [
                    '\u0072', '\u24E1', '\uFF52', '\u0155', '\u1E59', '\u0159', '\u0211', '\u0213', '\u1E5B',
                    '\u1E5D', '\u0157', '\u1E5F', '\u024D', '\u027D', '\uA75B', '\uA7A7', '\uA783'
                ]
            },
            {
                'base': 's',
                'letters': [
                    '\u0073', '\u24E2', '\uFF53', '\u00DF', '\u015B', '\u1E65', '\u015D', '\u1E61', '\u0161',
                    '\u1E67', '\u1E63', '\u1E69', '\u0219', '\u015F', '\u023F', '\uA7A9', '\uA785', '\u1E9B'
                ]
            },
            {
                'base': 't',
                'letters': [
                    '\u0074', '\u24E3', '\uFF54', '\u1E6B', '\u1E97', '\u0165', '\u1E6D', '\u021B', '\u0163',
                    '\u1E71', '\u1E6F', '\u0167', '\u01AD', '\u0288', '\u2C66', '\uA787'
                ]
            },
            { 'base': 'tz', 'letters': ['\uA729'] },
            {
                'base': 'u',
                'letters': [
                    '\u0075', '\u24E4', '\uFF55', '\u00F9', '\u00FA', '\u00FB', '\u0169', '\u1E79', '\u016B',
                    '\u1E7B', '\u016D', '\u00FC', '\u01DC', '\u01D8', '\u01D6', '\u01DA', '\u1EE7', '\u016F',
                    '\u0171', '\u01D4', '\u0215', '\u0217', '\u01B0', '\u1EEB', '\u1EE9', '\u1EEF', '\u1EED',
                    '\u1EF1', '\u1EE5', '\u1E73', '\u0173', '\u1E77', '\u1E75', '\u0289'
                ]
            },
            {
                'base': 'v',
                'letters': ['\u0076', '\u24E5', '\uFF56', '\u1E7D', '\u1E7F', '\u028B', '\uA75F', '\u028C']
            },
            { 'base': 'vy', 'letters': ['\uA761'] },
            {
                'base': 'w',
                'letters': [
                    '\u0077', '\u24E6', '\uFF57', '\u1E81', '\u1E83', '\u0175', '\u1E87', '\u1E85', '\u1E98',
                    '\u1E89', '\u2C73'
                ]
            },
            { 'base': 'x', 'letters': ['\u0078', '\u24E7', '\uFF58', '\u1E8B', '\u1E8D'] },
            {
                'base': 'y',
                'letters': [
                    '\u0079', '\u24E8', '\uFF59', '\u1EF3', '\u00FD', '\u0177', '\u1EF9', '\u0233', '\u1E8F',
                    '\u00FF', '\u1EF7', '\u1E99', '\u1EF5', '\u01B4', '\u024F', '\u1EFF'
                ]
            },
            {
                'base': 'z',
                'letters': [
                    '\u007A', '\u24E9', '\uFF5A', '\u017A', '\u1E91', '\u017C', '\u017E', '\u1E93', '\u1E95',
                    '\u01B6', '\u0225', '\u0240', '\u2C6C', '\uA763'
                ]
            }
        ];
        this.diacriticsMap = {};
        for (var i = 0; i < defaultDiacriticsRemovalap.length; i += 1) {
            var letters = defaultDiacriticsRemovalap[i].letters;
            for (var j = 0; j < letters.length; j += 1) {
                this.diacriticsMap[letters[j]] = defaultDiacriticsRemovalap[i].base;
            }
        }
    }
    LatinizePipe.prototype.transform = function (input) {
        var _this = this;
        return input.replace(/[^','\u0000-','\u007E]/g, function (a) { return _this.diacriticsMap[a] || a; });
    };
    return LatinizePipe;
}());
LatinizePipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'latinize' },] },
];
LatinizePipe.ctorParameters = function () { return []; };
var LeftPadPipe = /** @class */ (function () {
    function LeftPadPipe() {
    }
    LeftPadPipe.prototype.transform = function (input, requiredLength, padChar) {
        if (padChar === void 0) { padChar = ' '; }
        if (!isString(input) || input.length >= requiredLength)
            return input;
        var diff = requiredLength - input.length;
        return "" + pad(diff, padChar) + input;
    };
    return LeftPadPipe;
}());
LeftPadPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'leftPad' },] },
];
LeftPadPipe.ctorParameters = function () { return []; };
var LeftTrimPipe = /** @class */ (function () {
    function LeftTrimPipe() {
    }
    LeftTrimPipe.prototype.transform = function (input, chars) {
        if (chars === void 0) { chars = '\\s'; }
        return input.replace(new RegExp('^' + chars + '+'), '');
    };
    return LeftTrimPipe;
}());
LeftTrimPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'ltrim' },] },
];
LeftTrimPipe.ctorParameters = function () { return []; };
var MatchPipe = /** @class */ (function () {
    function MatchPipe() {
    }
    MatchPipe.prototype.transform = function (input, pattern, flag) {
        return input.match(new RegExp(pattern, flag));
    };
    return MatchPipe;
}());
MatchPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'match' },] },
];
MatchPipe.ctorParameters = function () { return []; };
var PhonePipe = /** @class */ (function () {
    function PhonePipe() {
    }
    PhonePipe.prototype.transform = function (input, locale, showCountryCode) {
        if (locale === void 0) { locale = 'en-US'; }
        if (showCountryCode === void 0) { showCountryCode = false; }
        if (isNil(input) || !/^[a-zA-Z]{2}-[a-zA-Z]{2}$/.test(locale))
            return input;
        var strInput = input.replace(/[^0-9]/g, '');
        var splittedLocale = locale.split('-');
        var formattedLocale = splittedLocale[0].toLowerCase() + "-" + splittedLocale[1].toUpperCase();
        var phoneObj = getPhone(formattedLocale);
        if (isNil(phoneObj) || strInput.length < phoneObj.minLength)
            return input;
        var pattern = phoneObj.pattern;
        var matches = strInput.match(pattern);
        var formattedPhone = '';
        switch (formattedLocale) {
            case 'en-US':
            case 'pt-BR':
                formattedPhone = "(" + matches[2] + ") " + matches[3] + "-" + matches[4];
                break;
            default:
                break;
        }
        if (showCountryCode) {
            formattedPhone = phoneObj.countryCode + " " + formattedPhone;
        }
        return formattedPhone;
    };
    return PhonePipe;
}());
PhonePipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'phone' },] },
];
PhonePipe.ctorParameters = function () { return []; };
var RepeatPipe = /** @class */ (function () {
    function RepeatPipe() {
    }
    RepeatPipe.prototype.transform = function (input, times, separator) {
        if (times === void 0) { times = 1; }
        if (separator === void 0) { separator = ''; }
        var ret = input;
        while (--times) {
            ret += separator + input;
        }
        return ret;
    };
    return RepeatPipe;
}());
RepeatPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'repeat' },] },
];
RepeatPipe.ctorParameters = function () { return []; };
var RightPadPipe = /** @class */ (function () {
    function RightPadPipe() {
    }
    RightPadPipe.prototype.transform = function (input, requiredLength, padChar) {
        if (padChar === void 0) { padChar = ' '; }
        if (!isString(input) || input.length >= requiredLength)
            return input;
        var diff = requiredLength - input.length;
        return "" + input + pad(diff, padChar);
    };
    return RightPadPipe;
}());
RightPadPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'rightPad' },] },
];
RightPadPipe.ctorParameters = function () { return []; };
var RightTrimPipe = /** @class */ (function () {
    function RightTrimPipe() {
    }
    RightTrimPipe.prototype.transform = function (input, chars) {
        if (chars === void 0) { chars = '\\s'; }
        return input.replace(new RegExp(chars + '+$'), '');
    };
    return RightTrimPipe;
}());
RightTrimPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'rtrim' },] },
];
RightTrimPipe.ctorParameters = function () { return []; };
var SlugifyPipe = /** @class */ (function () {
    function SlugifyPipe() {
    }
    SlugifyPipe.prototype.transform = function (input, sub) {
        if (sub === void 0) { sub = '-'; }
        return input.toLowerCase().replace(/\s+/g, sub);
    };
    return SlugifyPipe;
}());
SlugifyPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'slugify' },] },
];
SlugifyPipe.ctorParameters = function () { return []; };
var SplitPipe = /** @class */ (function () {
    function SplitPipe() {
    }
    SplitPipe.prototype.transform = function (input, separator, limit) {
        if (separator === void 0) { separator = ' '; }
        return !isString(input) ? input : input.split(separator, limit);
    };
    return SplitPipe;
}());
SplitPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'split' },] },
];
SplitPipe.ctorParameters = function () { return []; };
var StartsWithPipe = /** @class */ (function () {
    function StartsWithPipe() {
    }
    StartsWithPipe.prototype.transform = function (input, ends, csensitive) {
        if (csensitive === void 0) { csensitive = false; }
        if (ends === '') {
            return true;
        }
        if (!csensitive) {
            input = input.toLowerCase();
            ends = ends.toLowerCase();
        }
        return input.substring(0, ends.length) === ends;
    };
    return StartsWithPipe;
}());
StartsWithPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'startsWith' },] },
];
StartsWithPipe.ctorParameters = function () { return []; };
var StringularPipe = /** @class */ (function () {
    function StringularPipe() {
    }
    StringularPipe.prototype.transform = function (template) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return template.replace(/{(\d+)}/g, function (match, number) {
            return isUndefined(args[number]) ? match : args[number];
        });
    };
    return StringularPipe;
}());
StringularPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'stringular' },] },
];
StringularPipe.ctorParameters = function () { return []; };
var StripTagsPipe = /** @class */ (function () {
    function StripTagsPipe() {
    }
    StripTagsPipe.prototype.transform = function (input) {
        return input.replace(/<\S[^><]*>/g, '');
    };
    return StripTagsPipe;
}());
StripTagsPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'stripTags' },] },
];
StripTagsPipe.ctorParameters = function () { return []; };
var TestPipe = /** @class */ (function () {
    function TestPipe() {
    }
    TestPipe.prototype.transform = function (input, pattern, flag) {
        return new RegExp(pattern, flag).test(input);
    };
    return TestPipe;
}());
TestPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'test' },] },
];
TestPipe.ctorParameters = function () { return []; };
var TitleizePipe = /** @class */ (function () {
    function TitleizePipe() {
    }
    TitleizePipe.prototype.transform = function (input) {
        return input.split(' ')
            .map(function (w) { return w.charAt(0).toUpperCase() + w.substring(1).toLowerCase(); })
            .join(' ');
    };
    return TitleizePipe;
}());
TitleizePipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'titleize' },] },
];
TitleizePipe.ctorParameters = function () { return []; };
var TrimPipe = /** @class */ (function () {
    function TrimPipe() {
    }
    TrimPipe.prototype.transform = function (input, chars) {
        if (chars === void 0) { chars = '\\s'; }
        return input.replace(new RegExp('^' + chars + '+|' + chars + '+$', 'g'), '');
    };
    return TrimPipe;
}());
TrimPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'trim' },] },
];
TrimPipe.ctorParameters = function () { return []; };
var TruncatePipe = /** @class */ (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (input, length, suffix, preserve) {
        if (suffix === void 0) { suffix = ''; }
        if (preserve === void 0) { preserve = false; }
        if (isUndefined(length) || length >= input.length) {
            return input;
        }
        return input.substring(0, preserve ?
            (input.indexOf(' ', length) === -1 ? input.length : input.indexOf(' ', length)) :
            length) +
            suffix;
    };
    return TruncatePipe;
}());
TruncatePipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'truncate' },] },
];
TruncatePipe.ctorParameters = function () { return []; };
var UcfirstPipe = /** @class */ (function () {
    function UcfirstPipe() {
    }
    UcfirstPipe.prototype.transform = function (input) {
        return input.substring(0, 1).toUpperCase() + input.substring(1);
    };
    return UcfirstPipe;
}());
UcfirstPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'ucfirst' },] },
];
UcfirstPipe.ctorParameters = function () { return []; };
var UnderscorePipe = /** @class */ (function () {
    function UnderscorePipe() {
    }
    UnderscorePipe.prototype.transform = function (input) {
        if (!isString(input))
            return input;
        return input.replace(/\W/g, '').replace(/[A-Z]/g, function (value, index) { return index === 0 ? value.toLowerCase() : "_" + value.toLowerCase(); });
    };
    return UnderscorePipe;
}());
UnderscorePipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'underscore' },] },
];
UnderscorePipe.ctorParameters = function () { return []; };
var UriComponentEncodePipe = /** @class */ (function () {
    function UriComponentEncodePipe() {
    }
    UriComponentEncodePipe.prototype.transform = function (input) {
        return encodeURIComponent(input);
    };
    return UriComponentEncodePipe;
}());
UriComponentEncodePipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'uriComponentEncode' },] },
];
UriComponentEncodePipe.ctorParameters = function () { return []; };
var UriEncodePipe = /** @class */ (function () {
    function UriEncodePipe() {
    }
    UriEncodePipe.prototype.transform = function (input) {
        return encodeURI(input);
    };
    return UriEncodePipe;
}());
UriEncodePipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'uriEncode' },] },
];
UriEncodePipe.ctorParameters = function () { return []; };
var WrapPipe = /** @class */ (function () {
    function WrapPipe() {
    }
    WrapPipe.prototype.transform = function (input, wrap, ends) {
        if (wrap === void 0) { wrap = ''; }
        if (ends === void 0) { ends = ''; }
        return '' + wrap + input + (ends || wrap);
    };
    return WrapPipe;
}());
WrapPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'wrap' },] },
];
WrapPipe.ctorParameters = function () { return []; };
var StringPipesModule = /** @class */ (function () {
    function StringPipesModule() {
    }
    return StringPipesModule;
}());
StringPipesModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                declarations: [
                    CamelizePipe,
                    CenterPadPipe,
                    EndsWithPipe,
                    LatinizePipe,
                    LeftPadPipe,
                    LeftTrimPipe,
                    MatchPipe,
                    PhonePipe,
                    RepeatPipe,
                    RightPadPipe,
                    RightTrimPipe,
                    SlugifyPipe,
                    SplitPipe,
                    StartsWithPipe,
                    StringularPipe,
                    StripTagsPipe,
                    TestPipe,
                    TitleizePipe,
                    TrimPipe,
                    TruncatePipe,
                    UcfirstPipe,
                    UnderscorePipe,
                    UriComponentEncodePipe,
                    UriEncodePipe,
                    WrapPipe
                ],
                exports: [
                    CamelizePipe,
                    CenterPadPipe,
                    EndsWithPipe,
                    LatinizePipe,
                    LeftPadPipe,
                    LeftTrimPipe,
                    MatchPipe,
                    PhonePipe,
                    RepeatPipe,
                    RightPadPipe,
                    RightTrimPipe,
                    SlugifyPipe,
                    SplitPipe,
                    StartsWithPipe,
                    StringularPipe,
                    StripTagsPipe,
                    TestPipe,
                    TitleizePipe,
                    TrimPipe,
                    TruncatePipe,
                    UcfirstPipe,
                    UnderscorePipe,
                    UriComponentEncodePipe,
                    UriEncodePipe,
                    WrapPipe
                ]
            },] },
];
StringPipesModule.ctorParameters = function () { return []; };
var NgPipesModule = /** @class */ (function () {
    function NgPipesModule() {
    }
    return NgPipesModule;
}());
NgPipesModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                exports: [
                    BooleanPipesModule, CollectionPipesModule, MathPipesModule, ObjectPipesModule, StringPipesModule
                ]
            },] },
];
NgPipesModule.ctorParameters = function () { return []; };


//# sourceMappingURL=ng-pipes.js.map


/***/ }),

/***/ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js":
/*!***********************************************************!*\
  !*** ./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js ***!
  \***********************************************************/
/*! exports provided: ClipboardService, ClipboardDirective, ClipboardModule, ClipboardIfSupportedDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardService", function() { return ClipboardService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardDirective", function() { return ClipboardDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardModule", function() { return ClipboardModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardIfSupportedDirective", function() { return ClipboardIfSupportedDirective; });
/* harmony import */ var ngx_window_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-window-token */ "./node_modules/ngx-window-token/fesm5/ngx-window-token.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// The following code is heavily copy from https://github.com/zenorocha/clipboard.js
var ClipboardService = /** @class */ (function () {
    function ClipboardService(document, window) {
        this.document = document;
        this.window = window;
        this.copySubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.copyResponse$ = this.copySubject.asObservable();
    }
    Object.defineProperty(ClipboardService.prototype, "isSupported", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.document.queryCommandSupported && !!this.document.queryCommandSupported('copy') && !!this.window;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} element
     * @return {?}
     */
    ClipboardService.prototype.isTargetValid = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
            if (element.hasAttribute('disabled')) {
                throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
            }
            return true;
        }
        throw new Error('Target should be input or textarea');
    };
    /**
     * copyFromInputElement
     */
    /**
     * copyFromInputElement
     * @param {?} targetElm
     * @return {?}
     */
    ClipboardService.prototype.copyFromInputElement = /**
     * copyFromInputElement
     * @param {?} targetElm
     * @return {?}
     */
    function (targetElm) {
        try {
            this.selectTarget(targetElm);
            /** @type {?} */
            var re = this.copyText();
            this.clearSelection(targetElm, this.window);
            return re && this.isCopySuccessInIE11();
        }
        catch (error) {
            return false;
        }
    };
    // this is for IE11 return true even if copy fail
    // this is for IE11 return true even if copy fail
    /**
     * @return {?}
     */
    ClipboardService.prototype.isCopySuccessInIE11 = 
    // this is for IE11 return true even if copy fail
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var clipboardData = this.window['clipboardData'];
        if (clipboardData && clipboardData.getData) {
            if (!clipboardData.getData('Text')) {
                return false;
            }
        }
        return true;
    };
    /**
     * Creates a fake textarea element, sets its value from `text` property,
     * and makes a selection on it.
     */
    /**
     * Creates a fake textarea element, sets its value from `text` property,
     * and makes a selection on it.
     * @param {?} content
     * @param {?=} container
     * @return {?}
     */
    ClipboardService.prototype.copyFromContent = /**
     * Creates a fake textarea element, sets its value from `text` property,
     * and makes a selection on it.
     * @param {?} content
     * @param {?=} container
     * @return {?}
     */
    function (content, container) {
        if (container === void 0) { container = this.window.document.body; }
        // check if the temp textarea still belongs to the current container.
        // In case we have multiple places using ngx-clipboard, one is in a modal using container but the other one is not.
        if (this.tempTextArea && !container.contains(this.tempTextArea)) {
            this.destroy(this.tempTextArea.parentElement);
        }
        if (!this.tempTextArea) {
            this.tempTextArea = this.createTempTextArea(this.document, this.window);
            try {
                container.appendChild(this.tempTextArea);
            }
            catch (error) {
                throw new Error('Container should be a Dom element');
            }
        }
        this.tempTextArea.value = content;
        return this.copyFromInputElement(this.tempTextArea);
    };
    // remove temporary textarea if any
    // remove temporary textarea if any
    /**
     * @param {?=} container
     * @return {?}
     */
    ClipboardService.prototype.destroy = 
    // remove temporary textarea if any
    /**
     * @param {?=} container
     * @return {?}
     */
    function (container) {
        if (container === void 0) { container = this.window.document.body; }
        if (this.tempTextArea) {
            container.removeChild(this.tempTextArea);
            // removeChild doesn't remove the reference from memory
            this.tempTextArea = undefined;
        }
    };
    // select the target html input element
    // select the target html input element
    /**
     * @private
     * @param {?} inputElement
     * @return {?}
     */
    ClipboardService.prototype.selectTarget = 
    // select the target html input element
    /**
     * @private
     * @param {?} inputElement
     * @return {?}
     */
    function (inputElement) {
        inputElement.select();
        inputElement.setSelectionRange(0, inputElement.value.length);
        return inputElement.value.length;
    };
    /**
     * @private
     * @return {?}
     */
    ClipboardService.prototype.copyText = /**
     * @private
     * @return {?}
     */
    function () {
        return this.document.execCommand('copy');
    };
    // Moves focus away from `target` and back to the trigger, removes current selection.
    // Moves focus away from `target` and back to the trigger, removes current selection.
    /**
     * @private
     * @param {?} inputElement
     * @param {?} window
     * @return {?}
     */
    ClipboardService.prototype.clearSelection = 
    // Moves focus away from `target` and back to the trigger, removes current selection.
    /**
     * @private
     * @param {?} inputElement
     * @param {?} window
     * @return {?}
     */
    function (inputElement, window) {
        // tslint:disable-next-line:no-unused-expression
        inputElement && inputElement.focus();
        window.getSelection().removeAllRanges();
    };
    // create a fake textarea for copy command
    // create a fake textarea for copy command
    /**
     * @private
     * @param {?} doc
     * @param {?} window
     * @return {?}
     */
    ClipboardService.prototype.createTempTextArea = 
    // create a fake textarea for copy command
    /**
     * @private
     * @param {?} doc
     * @param {?} window
     * @return {?}
     */
    function (doc, window) {
        /** @type {?} */
        var isRTL = doc.documentElement.getAttribute('dir') === 'rtl';
        /** @type {?} */
        var ta;
        ta = doc.createElement('textarea');
        // Prevent zooming on iOS
        ta.style.fontSize = '12pt';
        // Reset box model
        ta.style.border = '0';
        ta.style.padding = '0';
        ta.style.margin = '0';
        // Move element out of screen horizontally
        ta.style.position = 'absolute';
        ta.style[isRTL ? 'right' : 'left'] = '-9999px';
        // Move element to the same position vertically
        /** @type {?} */
        var yPosition = window.pageYOffset || doc.documentElement.scrollTop;
        ta.style.top = yPosition + 'px';
        ta.setAttribute('readonly', '');
        return ta;
    };
    /**
     * Pushes copy operation response to copySubject, to provide global access
     * to the response.
     */
    /**
     * Pushes copy operation response to copySubject, to provide global access
     * to the response.
     * @param {?} response
     * @return {?}
     */
    ClipboardService.prototype.pushCopyReponse = /**
     * Pushes copy operation response to copySubject, to provide global access
     * to the response.
     * @param {?} response
     * @return {?}
     */
    function (response) {
        this.copySubject.next(response);
    };
    ClipboardService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ClipboardService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [ngx_window_token__WEBPACK_IMPORTED_MODULE_0__["WINDOW"],] }] }
    ]; };
    /** @nocollapse */ ClipboardService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function ClipboardService_Factory() { return new ClipboardService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ngx_window_token__WEBPACK_IMPORTED_MODULE_0__["WINDOW"], 8)); }, token: ClipboardService, providedIn: "root" });
    return ClipboardService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ClipboardDirective = /** @class */ (function () {
    function ClipboardDirective(clipboardSrv) {
        this.clipboardSrv = clipboardSrv;
        this.cbOnSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.cbOnError = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    // tslint:disable-next-line:no-empty
    // tslint:disable-next-line:no-empty
    /**
     * @return {?}
     */
    ClipboardDirective.prototype.ngOnInit = 
    // tslint:disable-next-line:no-empty
    /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    ClipboardDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.clipboardSrv.destroy(this.container);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ClipboardDirective.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.clipboardSrv.isSupported) {
            this.handleResult(false, undefined, event);
        }
        else if (this.targetElm && this.clipboardSrv.isTargetValid(this.targetElm)) {
            this.handleResult(this.clipboardSrv.copyFromInputElement(this.targetElm), this.targetElm.value, event);
        }
        else if (this.cbContent) {
            this.handleResult(this.clipboardSrv.copyFromContent(this.cbContent, this.container), this.cbContent, event);
        }
    };
    /**
     * Fires an event based on the copy operation result.
     * @param succeeded
     */
    /**
     * Fires an event based on the copy operation result.
     * @private
     * @param {?} succeeded
     * @param {?} copiedContent
     * @param {?} event
     * @return {?}
     */
    ClipboardDirective.prototype.handleResult = /**
     * Fires an event based on the copy operation result.
     * @private
     * @param {?} succeeded
     * @param {?} copiedContent
     * @param {?} event
     * @return {?}
     */
    function (succeeded, copiedContent, event) {
        /** @type {?} */
        var response = {
            isSuccess: succeeded,
            event: event
        };
        if (succeeded) {
            response = Object.assign(response, {
                content: copiedContent,
                successMessage: this.cbSuccessMsg
            });
            this.cbOnSuccess.emit(response);
        }
        else {
            this.cbOnError.emit(response);
        }
        this.clipboardSrv.pushCopyReponse(response);
    };
    ClipboardDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: '[ngxClipboard]'
                },] }
    ];
    /** @nocollapse */
    ClipboardDirective.ctorParameters = function () { return [
        { type: ClipboardService }
    ]; };
    ClipboardDirective.propDecorators = {
        targetElm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['ngxClipboard',] }],
        container: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        cbContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        cbSuccessMsg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        cbOnSuccess: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        cbOnError: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['click', ['$event.target'],] }]
    };
    return ClipboardDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ClipboardIfSupportedDirective = /** @class */ (function () {
    function ClipboardIfSupportedDirective(_clipboardService, _viewContainerRef, _templateRef) {
        this._clipboardService = _clipboardService;
        this._viewContainerRef = _viewContainerRef;
        this._templateRef = _templateRef;
    }
    /**
     * @return {?}
     */
    ClipboardIfSupportedDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this._clipboardService.isSupported) {
            this._viewContainerRef.createEmbeddedView(this._templateRef);
        }
    };
    ClipboardIfSupportedDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: '[ngxClipboardIfSupported]'
                },] }
    ];
    /** @nocollapse */
    ClipboardIfSupportedDirective.ctorParameters = function () { return [
        { type: ClipboardService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }
    ]; };
    return ClipboardIfSupportedDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ClipboardModule = /** @class */ (function () {
    function ClipboardModule() {
    }
    ClipboardModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                    declarations: [ClipboardDirective, ClipboardIfSupportedDirective],
                    exports: [ClipboardDirective, ClipboardIfSupportedDirective]
                },] }
    ];
    return ClipboardModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-clipboard.js.map

/***/ }),

/***/ "./node_modules/ngx-window-token/fesm5/ngx-window-token.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ngx-window-token/fesm5/ngx-window-token.js ***!
  \*****************************************************************/
/*! exports provided: WINDOW */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW", function() { return WINDOW; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('WindowToken', typeof window !== 'undefined' && window.document ? { providedIn: 'root', factory: (/**
     * @return {?}
     */
    function () { return window; }) } : undefined);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-window-token.js.map

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/client/client-layout/client-layout.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/client/client-layout/client-layout.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/client/search-page/search-page.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/client/search-page/search-page.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-page-wrapper\">\r\n  <div  fxLayout=\"column\">\r\n    <section class=\"header-section\" fxLayout=\"column\">\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n        <div fxFlex=\"5\">\r\n\r\n        </div>\r\n        <div fxFlex fxLayoutAlign=\"center center\">\r\n          <img class=\"logo-image\" src=\"/images/Logo/Logo-transparent-white.png\" />\r\n        </div>\r\n        <div fxFlex=\"5\" fxLayoutAlign=\"center center\">\r\n          <span [matMenuTriggerFor]=\"appMenuSettings\">\r\n            <i class=\"fas fa-cog fa-2x header-settings\"></i>\r\n          </span>\r\n          <mat-menu #appMenuSettings=\"matMenu\">\r\n            <a mat-menu-item href=\"/Identity/Account/LoginAdmin\">Detii un service?</a>\r\n            <a mat-menu-item *ngIf=\"user!=null\" href=\"/Identity/Account/Logout\">Delogare</a>\r\n            <a mat-menu-item *ngIf=\"user==null\" href=\"/Identity/Account/Login\">Autentifica-te</a>\r\n          </mat-menu>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"header-content\" fxLayout=\"column\" fxLayoutGap=\"20px\">\r\n        <div fxLayoutAlign=\"center center\" class=\"header-slogan\" fxLayout=\"column\">\r\n          <h1>Alege cel mai bun service</h1>\r\n          <h4>Service-urile auto sunt pretutindeni</h4>\r\n        </div>\r\n\r\n        <div fxLayout=\"row\">\r\n          <div fxFlex=\"20\"></div>\r\n          <div fxFlex=\"60\" fxLayout=\"row\" class=\"header-search\">\r\n            <div class=\"header-search-city\" fxFlex=\"30\">\r\n              <mat-form-field class=\"w-100\">\r\n                <input matInput placeholder=\"Oras\" aria-label=\"Oras\" [matAutocomplete]=\"auto\" [formControl]=\"cityCtrl\">\r\n                <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\" (optionSelected)=\"CitySelected($event.option.value)\">\r\n                  <mat-option *ngFor=\"let state of filteredCities | async\" [value]=\"state\">\r\n                    <span>{{state.name}}</span> |\r\n                    <small>Judet: {{state.judet}}</small>\r\n                  </mat-option>\r\n                </mat-autocomplete>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"header-search-city\" fxFlex=\"30\" style=\"padding-left: 20px;\">\r\n              <mat-form-field class=\"w-100\">\r\n                <input matInput placeholder=\"Tip serviciu\" aria-label=\"Tip serviciu\" [matAutocomplete]=\"autoa\" [formControl]=\"typeCtrl\">\r\n                <mat-autocomplete #autoa=\"matAutocomplete\" [displayWith]=\"displayFn\" (optionSelected)=\"TypeSelected($event.option.value)\">\r\n                  <mat-option *ngFor=\"let type of filteredTypes | async\" [value]=\"type\">\r\n                    <img class=\"mr-3\" aria-hidden [src]=\"'/images/Operations/' + type.icon\" height=\"25\">\r\n                    <span>{{type.name}}</span>\r\n                  </mat-option>\r\n                </mat-autocomplete>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"header-search-city\" fxFlex=\"30\" style=\"padding-left: 20px;\">\r\n              <mat-form-field class=\"w-100\">\r\n                <input matInput placeholder=\"Brand masina\" aria-label=\"Brand masina\" [matAutocomplete]=\"autob\" [formControl]=\"brandCtrl\">\r\n                <mat-autocomplete #autob=\"matAutocomplete\" [displayWith]=\"displayFn\" (optionSelected)=\"BrandSelected($event.option.value)\">\r\n                  <mat-option *ngFor=\"let bd of filteredBrands | async\" [value]=\"bd\">\r\n                    <img class=\"mr-3\" aria-hidden [src]=\"'/images/CarLogos/' + bd.icon\" height=\"25\">\r\n                    <span>{{bd.name}}</span>\r\n                  </mat-option>\r\n                </mat-autocomplete>\r\n              </mat-form-field>\r\n            </div>\r\n            <div fxFlex=\"10\" style=\"padding-left: 20px; padding-top: 10px;\">\r\n              <a mat-button color=\"primary\" class=\"w-100\"\r\n                 (click)=\"GoToServices()\">\r\n                Cauta\r\n              </a>\r\n            </div>\r\n          </div>\r\n\r\n          <div fxFlex=\"20\"></div>\r\n        </div>\r\n      </div>\r\n\r\n    </section>\r\n    <section class=\"counter-section\" fxLayout=\"row\">\r\n      <div fxFlex=\"20\">\r\n\r\n      </div>\r\n      <div fxFlex=\"60\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n        <div fxFlex fxLayoutAlign=\"start center\">\r\n          <div class=\"counter-container\">\r\n            <div class=\"counter-header\" fxLayoutAlign=\"center center\">\r\n              <img class=\"mr-3\" aria-hidden src=\"/images/Operations/repair.png\" height=\"55px\">\r\n              Service-uri\r\n            </div>\r\n            <div class=\"counter-body\" fxLayoutAlign=\"center center\">\r\n              <div>\r\n                <div class=\"counter-body-numbers text-center\">\r\n                  {{serviceCount}}\r\n                </div>\r\n                <div class=\"counter-body-label text-center text-muted\">\r\n                  ASTFEL DE STATII\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div fxFlex fxLayoutAlign=\"center center\">\r\n          <div class=\"counter-container\">\r\n            <div class=\"counter-header\" fxLayoutAlign=\"center center\">\r\n              <img class=\"mr-3\" aria-hidden src=\"/images/Operations/wheels.png\" height=\"55px\">\r\n              Vulcanizari\r\n            </div>\r\n            <div class=\"counter-body\" fxLayoutAlign=\"center center\">\r\n              <div>\r\n                <div class=\"counter-body-numbers text-center\">\r\n                  {{vulcanizareCount}}\r\n                </div>\r\n                <div class=\"counter-body-label text-center text-muted\">\r\n                  ASTFEL DE STATII\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div fxFlex fxLayoutAlign=\"end center\">\r\n          <div class=\"counter-container\">\r\n            <div class=\"counter-header\" fxLayoutAlign=\"center center\">\r\n              <img class=\"mr-3\" aria-hidden src=\"/images/Operations/car-wash.png\" height=\"55px\">\r\n              Spalatorii\r\n            </div>\r\n            <div class=\"counter-body\" fxLayoutAlign=\"center center\">\r\n              <div>\r\n                <div class=\"counter-body-numbers text-center\">\r\n                  {{spalatoriiCount}}\r\n                </div>\r\n                <div class=\"counter-body-label text-center text-muted\">\r\n                  ASTFEL DE STATII\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div fxFlex=\"20\">\r\n      </div>\r\n    </section>\r\n    <section class=\"service-categories after-counter\" fxLayout=\"row\">\r\n      <div fxFlex=\"20\">\r\n\r\n      </div>\r\n      <div fxFlex=\"60\">\r\n        <h2 class=\"section-title\">\r\n          Categorii de servicii\r\n        </h2>\r\n        <div class=\"service-categories-types\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n          <button mat-button *ngFor=\"let type of opTypes\" fxLayoutAlign=\"center center\" matTooltip=\"{{type.name}}\" (click)=\"SelectType(type)\">\r\n            <img aria-hidden [src]=\"'/images/Operations/' + type.icon\" height=\"50\">\r\n          </button>\r\n        </div>\r\n        <div>\r\n          <h3 class=\"service-categories-types-selected\">\r\n            Categorie servicii <span>{{displayFn(selectedType)}}</span>\r\n          </h3>\r\n        </div>\r\n        <div fxLayout=\"row wrap\" class=\"service-categories-items\" fxLayoutGap=\"10px\"> \r\n          <span fxFlex=\"0 1 calc(25%-10px)\" *ngFor=\"let op of filteredOperations\" fxLayoutAlign=\"center center\">\r\n            {{op.name}}\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div fxFlex=\"20\">\r\n      </div>\r\n    </section>\r\n\r\n    <section class=\"partners-section last-section\" > \r\n\r\n    </section>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/client/service/appointment/appointment.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/client/service/appointment/appointment.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-title fxLayout=\"row\" style=\"margin-bottom: 0;\">\r\n  <div fxFlex=\"20\">\r\n    <img [src]=\"GetLogoSrc()\" height=\"50\" />\r\n  </div>\r\n  <div fxFlex=\"60\" fxLayoutAlign=\"center center\">\r\n    Inregistrare programare - {{data.details.serviceInfo.nume}}\r\n  </div>\r\n  <div fxFlex=\"20\">\r\n    <button class=\"float-right\" mat-mini-fab (click)=\"CloseDialog()\">\r\n      <i class=\"fas fa-times\"></i>\r\n    </button>\r\n  </div>\r\n</div>\r\n<div mat-dialog-content fxLayout=\"column\" class=\"appointment-body\">\r\n  \r\n  <div fxLayout=\"column\" style=\"padding: 15px;\" fxLayoutGap=\"15px\">\r\n    <div fxFlex>\r\n      <h4 class=\"header-apointment\">\r\n        <i class=\"fas fa-car\" style=\"color: #4a5dc4\"></i>\r\n        Date despre masina\r\n      </h4>\r\n    </div>\r\n    <div fxFlex fxLayout=\"row\" fxLayoutGap=\"25px\">\r\n      <div fxFlex>\r\n        <mat-form-field fxFlex>\r\n          <input type=\"text\" placeholder=\"Anul\" aria-label=\"Number\" matInput [formControl]=\"yearFormControl\" [matAutocomplete]=\"autoYear\" [(ngModel)]=\"addAppointment.carYear\">\r\n          <mat-autocomplete #autoYear=\"matAutocomplete\">\r\n            <mat-option *ngFor=\"let option of filteredYears | async\" [value]=\"option\">\r\n              {{option}}\r\n            </mat-option>\r\n          </mat-autocomplete>\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxFlex>\r\n        <mat-form-field fxFlex>\r\n          <input matInput placeholder=\"Brand masina\" aria-label=\"Brand masina\" [matAutocomplete]=\"autob\" [formControl]=\"brandCtrl\">\r\n          <mat-autocomplete #autob=\"matAutocomplete\" [displayWith]=\"displayFnType\" (optionSelected)=\"BrandSelected($event.option.value)\">\r\n            <mat-option *ngFor=\"let bd of filteredBrands | async\" [value]=\"bd\">\r\n              <img class=\"mr-3\" aria-hidden [src]=\"'/images/CarLogos/' + bd.icon\" height=\"25\">\r\n              <span>{{bd.name}}</span>\r\n            </mat-option>\r\n          </mat-autocomplete>\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxFlex>\r\n        <mat-form-field fxFlex>\r\n          <input type=\"text\" name=\"model-masina\" matInput [(ngModel)]=\"addAppointment.carModel\" placeholder=\"Model masina\">\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n    <div>\r\n      <h4 class=\"header-apointment\">\r\n        <i class=\"fas fa-calendar\" style=\"color: #4a5dc4\"></i>\r\n        Alege timpul potrivit\r\n      </h4>\r\n    </div>\r\n    <div fxFlex fxLayout=\"row\" fxLayoutGap=\"25px\">\r\n      <div fxFlex>\r\n        <mat-form-field fxFlex>\r\n          <mat-label>Luna</mat-label>\r\n          <mat-select [(value)]=\"selectedMonth\" (selectionChange)=\"SelectMonth($event.value)\">\r\n            <mat-option *ngFor=\"let mth of months\" [value]=\"mth\">\r\n              {{mth}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxFlex>\r\n        <mat-form-field fxFlex>\r\n          <mat-label>Ziua</mat-label>\r\n          <mat-select [(value)]=\"selectedDay\" (selectionChange)=\"SelectDay($event.value)\">\r\n            <mat-option *ngFor=\"let day of days\" [value]=\"day\">\r\n              {{day}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxFlex>\r\n        <mat-form-field fxFlex>\r\n          <mat-label>Ora</mat-label>\r\n          <mat-select [(value)]=\"selectedHour\">\r\n            <mat-option *ngFor=\"let hr of hours\" [value]=\"hr\">\r\n              {{hr}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n    <div>\r\n      <h4 class=\"header-apointment\">\r\n        <i class=\"fas fa-tools\" style=\"color: #4a5dc4\"></i>\r\n        Alege serviciul dorit\r\n      </h4>\r\n    </div>\r\n    <div fxFlex fxLayout=\"row\" fxLayoutGap=\"25px\">\r\n\r\n      <div fxFlex>\r\n        <mat-form-field fxFlex>\r\n          <input matInput placeholder=\"Tip serviciu\" aria-label=\"Tip serviciu\" [matAutocomplete]=\"autoTipS\" [(ngModel)]=\"selectedOpType\"\r\n                 [formControl]=\"typeOpControl\"\r\n                 [disabled]=\"data.type=='edit'\">\r\n          <mat-autocomplete #autoTipS=\"matAutocomplete\" (optionSelected)=\"OnTypeSelected($event.option.value)\" [displayWith] = \"displayFnType\">\r\n            <mat-option *ngFor=\"let type of filteredOptionsOpType | async\" [value]=\"type\">\r\n              <img class=\"mr-3\" aria-hidden [src]=\"'/images/Operations/' + type.icon\" height=\"25\">\r\n              <span>{{type.name}}</span>\r\n            </mat-option>\r\n          </mat-autocomplete>\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxFlex>\r\n        <mat-form-field fxFlex>\r\n          <input matInput placeholder=\"Serviciu\" aria-label=\"Serviciu\" [matAutocomplete]=\"autoServiciu\" \r\n                 [formControl]=\"opControl\"\r\n                 [disabled]=\"data.type=='edit'\">\r\n          <mat-autocomplete #autoServiciu=\"matAutocomplete\" (optionSelected)=\"OnOperationSelected($event.option.value)\" [displayWith] = \"displayFn\">\r\n            <mat-option *ngFor=\"let op of filteredOptionsOp | async\" [value]=\"op\">\r\n              <span>{{op.description.name}}</span>\r\n            </mat-option>\r\n          </mat-autocomplete>\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxFlex>\r\n\r\n      </div>\r\n    </div>\r\n    <div>\r\n      <h4 class=\"header-apointment\">\r\n        <i class=\"fas fa-phone\" style=\"color: #4a5dc4\"></i>\r\n        Date de contact\r\n      </h4>\r\n    </div>\r\n    <div fxFlex fxLayout=\"row\" fxLayoutGap=\"25px\">\r\n\r\n      <div fxFlex>\r\n        <mat-form-field fxFlex>\r\n          <input type=\"text\" name=\"numar-telefon\" matInput [(ngModel)]=\"addAppointment.phone\" placeholder=\"Numar de telefon\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxFlex>\r\n        <mat-form-field fxFlex>\r\n          <input type=\"email\" name=\"email\" matInput [(ngModel)]=\"addAppointment.email\" placeholder=\"Email\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxFlex></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div mat-dialog-actions fxLayout=\"row\" fxLayoutAlign=\"end center\" (click)=\"AddAppointment()\">\r\n  <button mat-button color=\"primary\">\r\n    <i class=\"fas fa-plus\"></i> Salveaza\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/client/service/image-viewer-client/image-viewer-client.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/client/service/image-viewer-client/image-viewer-client.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>\r\n  Imagini service\r\n  <button class=\"float-right\" mat-mini-fab (click)=\"CloseDialog()\">\r\n    <i class=\"fas fa-times\"></i>\r\n  </button>\r\n</h1>\r\n<div mat-dialog-content class=\"image-viewer-container\" fxLayout=\"row\">\r\n  <div fxFlex=\"5\" fxLayoutAlign=\"center center\">\r\n    <span class=\"arrow-wrapper\" style=\"font-size: 20px;\" (click)=\"MoveLeft()\">\r\n      <i class=\"fas fa-angle-left fa-2x\"></i>\r\n    </span>\r\n  </div>\r\n  <div fxFlex=\"90\" fxLayoutAlign=\"center center\">\r\n    <img [src]=\"GetSrc(data.selected)\" alt=\"LogoImage\" />\r\n  </div>\r\n  <div fxFlex=\"5\" fxLayoutAlign=\"center center\">\r\n    <span class=\"arrow-wrapper\" style=\"font-size: 20px;\" (click)=\"MoveRight()\">\r\n      <i class=\"fas fa-angle-right fa-2x\"></i>\r\n    </span>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/client/service/service.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/client/service/service.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-page-wrapper\">\r\n  <div fxLayout=\"column\" *ngIf=\"details\">\r\n    <section  id=\"go-top\" class=\"header-section\" fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n        <div fxFlex=\"5\">\r\n\r\n        </div>\r\n        <div fxFlex fxLayoutAlign=\"center center\">\r\n          <img class=\"logo-image\" src=\"/images/Logo/Logo-transparent-white.png\" />\r\n        </div>\r\n        <div fxFlex=\"5\" fxLayoutAlign=\"center center\">\r\n          <span [matMenuTriggerFor]=\"appMenuSettings\">\r\n            <i class=\"fas fa-cog fa-2x header-settings\"></i>\r\n          </span>\r\n          <mat-menu #appMenuSettings=\"matMenu\">\r\n            <a mat-menu-item *ngIf=\"user!=null\" href=\"/Identity/Account/Login\">Delogare</a>\r\n            <a mat-menu-item *ngIf=\"user==null\">Autentifica-te</a>\r\n          </mat-menu>\r\n        </div>\r\n      </div>\r\n\r\n      <!--<div class=\"header-content\" fxLayout=\"column\" fxLayoutGap=\"20px\">\r\n      <div fxLayoutAlign=\"center center\" class=\"header-slogan\" fxLayout=\"column\">\r\n        <h1>Alege cel mai bun service</h1>\r\n        <h4>Service-urile auto sunt pretutindeni</h4>\r\n      </div>\r\n\r\n      <div fxLayout=\"row\">\r\n        <div fxFlex=\"20\"></div>\r\n        <div fxFlex=\"60\" fxLayout=\"row\" class=\"header-search\">\r\n          <div class=\"header-search-city\" fxFlex=\"30\">\r\n            <mat-form-field class=\"w-100\">\r\n              <input matInput placeholder=\"Oras\" aria-label=\"Oras\" [matAutocomplete]=\"auto\" [formControl]=\"cityCtrl\">\r\n              <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\" (optionSelected)=\"CitySelected($event.option.value)\">\r\n                <mat-option *ngFor=\"let state of filteredCities | async\" [value]=\"state\">\r\n                  <span>{{state.name}}</span> |\r\n                  <small>Judet: {{state.judet}}</small>\r\n                </mat-option>\r\n              </mat-autocomplete>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"header-search-city\" fxFlex=\"30\" style=\"padding-left: 20px;\">\r\n            <mat-form-field class=\"w-100\">\r\n              <input matInput placeholder=\"Tip serviciu\" aria-label=\"Tip serviciu\" [matAutocomplete]=\"autoa\" [formControl]=\"typeCtrl\">\r\n              <mat-autocomplete #autoa=\"matAutocomplete\" [displayWith]=\"displayFn\" (optionSelected)=\"TypeSelected($event.option.value)\">\r\n                <mat-option *ngFor=\"let type of filteredTypes | async\" [value]=\"type\">\r\n                  <img class=\"mr-3\" aria-hidden [src]=\"'/images/Operations/' + type.icon\" height=\"25\">\r\n                  <span>{{type.name}}</span>\r\n                </mat-option>\r\n              </mat-autocomplete>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"header-search-city\" fxFlex=\"30\" style=\"padding-left: 20px;\">\r\n            <mat-form-field class=\"w-100\">\r\n              <input matInput placeholder=\"Brand masina\" aria-label=\"Brand masina\" [matAutocomplete]=\"autob\" [formControl]=\"brandCtrl\">\r\n              <mat-autocomplete #autob=\"matAutocomplete\" [displayWith]=\"displayFn\" (optionSelected)=\"BrandSelected($event.option.value)\">\r\n                <mat-option *ngFor=\"let bd of filteredBrands | async\" [value]=\"bd\">\r\n                  <img class=\"mr-3\" aria-hidden [src]=\"'/images/CarLogos/' + bd.icon\" height=\"25\">\r\n                  <span>{{bd.name}}</span>\r\n                </mat-option>\r\n              </mat-autocomplete>\r\n            </mat-form-field>\r\n          </div>\r\n          <div fxFlex=\"10\" style=\"padding-left: 20px; padding-top: 10px;\">\r\n            <a mat-button color=\"primary\" class=\"w-100\"\r\n               (click)=\"GoToServices()\">\r\n              Cauta\r\n            </a>\r\n          </div>\r\n        </div>\r\n\r\n        <div fxFlex=\"20\"></div>\r\n      </div>\r\n    </div>-->\r\n\r\n    </section>\r\n    <section class=\"basic-info\" fxLayout=\"row\">\r\n      <div fxFlex=\"20\">\r\n\r\n      </div>\r\n      <div fxFlex=\"60\" fxLayout=\"row\">\r\n        <div fxFlex=\"30\" fxLayoutAlign=\"start center\">\r\n          <div class=\"basic-info-container\" fxLayout=\"column\" fxLayoutAlign=\"space-around\">\r\n            <div class=\"basic-info-logo\" fxLayoutAlign=\"center center\">\r\n              <img [src]=\"GetLogoSrc()\" />\r\n            </div>\r\n            <div class=\"p-2\">\r\n              <button fxFlex mat-raised-button color=\"primary\" (click)=\"RegisterAppointment()\">\r\n                <span style=\"font-size: 16px;\">Inregistrati o programare</span>\r\n              </button>\r\n            </div>\r\n            <div class=\"p-2\" fxLayout=\"column\" fxLayoutAlign=\"space-around\" fxLayoutGap=\"10px\">\r\n              <button fxFlex mat-stroked-button color=\"primary\" *ngIf=\"!showPhone\" (click)=\"TogglePhone()\">\r\n                <span>Afisati numarul de telefon</span>\r\n              </button>\r\n\r\n              <button fxFlex mat-stroked-button color=\"primary\" *ngIf=\"showPhone\" (click)=\"CopyToClipboard()\">\r\n                <span>{{GetPhoneNumber()}}</span>\r\n              </button>\r\n\r\n              <a fxFlex mat-stroked-button color=\"primary\" [ngx-scroll-to]=\"'address-section'\" [ngx-scroll-to-offset]=\"-50\">\r\n                <span>Afisati adresa</span>\r\n              </a>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <div fxFlex=\"70\" class=\"basic-info-nav-container\">\r\n          <div class=\"basic-info-navigate\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\" fxLayoutGap=\"10px;\">\r\n            <div fxFlex>\r\n              <a mat-button class=\"w-100\" [ngx-scroll-to]=\"'servicii-section'\" [ngx-scroll-to-offset]=\"-50\">Servicii</a>\r\n            </div>\r\n            <div fxFlex>\r\n              <a mat-button class=\"w-100\" [ngx-scroll-to]=\"'photos-section'\" [ngx-scroll-to-offset]=\"-50\">Fotografii</a>\r\n            </div>\r\n            <div fxFlex>\r\n              <a mat-button class=\"w-100\" [ngx-scroll-to]=\"'reviews-section'\" [ngx-scroll-to-offset]=\"-50\">Review-uri</a>\r\n            </div>\r\n            <div fxFlex>\r\n              <a mat-button class=\"w-100\" [ngx-scroll-to]=\"'description-section'\" [ngx-scroll-to-offset]=\"-50\">Descriere</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div fxFlex=\"20\">\r\n      </div>\r\n    </section>\r\n    <section class=\"name-section\">\r\n      <div fxFlex=\"20\">\r\n\r\n      </div>\r\n      <div fxFlex=\"60\" class=\"name-section-body\">\r\n        <div fxLayout=\"row\" fxLayoutGap=\"15px\">\r\n          <div fxFlex=\"60\" fxLayout=\"column\" fxLayoutGap=\"25px\">\r\n            <h1 id=\"service-name\">{{details.serviceInfo.nume}}</h1>\r\n            <div fxFlex class=\"car-manufacturers-section\" fxLayout=\"row\" fxLayoutGap=\"10px\">\r\n              <div fxFlex=\"20\" fxLayoutAlign=\"center center\">\r\n                <span class=\"fa-stack fa-2x\">\r\n                  <i class=\"far fa-circle fa-stack-2x\" style=\"width:1em;\"></i>\r\n                  <i class=\"fas fa-tools fa-stack-1x\" style=\"\"></i>\r\n                </span>\r\n              </div>\r\n              <div fxFlex=\"80\" class=\"brand-service-list\">\r\n                <h4 class=\"text-muted\">\r\n                  Brand-uri masini acceptate:\r\n                </h4>\r\n                <div class=\"\">\r\n                  <span *ngFor=\"let brand of details.serviceManufacturers\" style=\"font-weight: 600\">\r\n                    {{GetCarBrandName(brand)}}<span *ngIf=\"NotLastBrand(brand)\">,</span>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"service-program-div\" fxFlex=\"40\" fxLayout=\"row\" fxLayoutGap=\"10px\">\r\n            <div fxFlex=\"30\" fxLayoutAlign=\"center center\">\r\n              <i id=\"program-clock\" class=\"far fa-clock fa-5x\"></i>\r\n            </div>\r\n            <div fxFlex=\"70\" fxLayout=\"column\" fxLayoutGap=\"5px\">\r\n              <div *ngFor=\"let program of details.serviceProgram\" fxLayout=\"row\">\r\n                <div class=\"program-label\">{{GetWeekDay(program)}}:</div>\r\n                <div class=\"example-spacer\"></div>\r\n                <div>{{GetProgramHours(program)}}</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div fxFlex=\"20\">\r\n\r\n      </div>\r\n    </section>\r\n\r\n    <section class=\"facilities-section\" fxLayout=\"row\" fxLayoutGap=\"10px\">\r\n      <div fxFlex=\"20\"></div>\r\n      <div fxFlex=\"80\" fxLayout=\"column\">\r\n        <div>\r\n          <h3>\r\n            <i class=\"fas fa-hand-holding-usd\" style=\"color: #4a5dc4\"></i>\r\n            Facilitati in aceasta locatie\r\n\r\n          </h3>\r\n        </div>\r\n        <div>\r\n          <hr style=\"border-top:2px solid rgba(0, 0, 0, 0.1); margin-left:30px;margin-right: 30px;\" />\r\n        </div>\r\n        <div fxLayout=\"row\" fxLayoutGap=\"10px\">\r\n          <div fxFlex=\"0 1 calc(14.2%-10px)\" *ngFor=\"let op of details.serviceFacilities\" fxLayout=\"column\" fxLayoutAlign=\"start center\" fxLayoutGap=\"5px\">\r\n            <div class=\"facility-icon\">\r\n              <i class=\"fas\" [class]=\"GetFacilityIcon(op)\"></i>\r\n            </div>\r\n            <div class=\"text-center\">\r\n              <span class=\"facility-name\">\r\n                {{GetFacilityName(op)}}\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div fxFlex=\"20\">\r\n      </div>\r\n    </section>\r\n    <section class=\"servicii-section\" id=\"servicii-section\" fxLayout=\"row\">\r\n      <div fxFlex=\"20\">\r\n\r\n      </div>\r\n      <div fxFlex=\"80\" fxLayout=\"column\">\r\n        <div>\r\n          <h3>\r\n            <i class=\"fas fa-toolbox\" style=\"color: #4a5dc4\"></i>\r\n            Servicii\r\n          </h3>\r\n        </div>\r\n\r\n        <div>\r\n          <hr style=\"border-top:2px solid rgba(0, 0, 0, 0.1); margin-left:30px;margin-right: 30px;\" />\r\n        </div>\r\n        <div class=\"servicii-container\" fxLayout=\"row\">\r\n          <div fxFlex=\"30\" class=\"servicii-types\">\r\n            <mat-list>\r\n              <mat-list-item *ngFor=\"let type of shownTypes\" [class]=\"GetServiciiActiveClass(type)\" (click)=\"SelectServiciiType(type)\">\r\n                <img class=\"mr-3\" [src]=\"'/images/Operations/' + type.icon\" height=\"25\">\r\n                {{type.name}}\r\n              </mat-list-item>\r\n\r\n            </mat-list>\r\n          </div>\r\n          <div fxFlex=\"70\" class=\"servicii-operations\">\r\n            <mat-list>\r\n              <mat-list-item *ngFor=\"let op of selectedShownOperations\">\r\n                <div class=\"container-fluid\" fxLayout=\"row\">\r\n                  <div fxFlex=\"70\" class=\"servicii-operations-name\" fxLayoutAlign=\"start center\">\r\n                    {{op.description.name}}\r\n                  </div>\r\n\r\n                  <div fxFlex=\"30\" fxLayout=\"column\" class=\"servicii-operations-values text-muted\">\r\n                    <div fxLayoutAlign=\"end center\">\r\n                      <div> De la &ensp;<b style=\"color: #4a5dc4\">{{op.values.price}}</b>&ensp; de LEI</div>\r\n                    </div>\r\n                    <div fxLayoutAlign=\"end center\">\r\n                      <div> In maxim &ensp;<b style=\"color: #4a5dc4\">{{op.values.time}}</b>&ensp; minute</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </mat-list-item>\r\n            </mat-list>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div fxFlex=\"20\">\r\n\r\n      </div>\r\n    </section>\r\n    <section fxLayout=\"row\" id=\"photos-section\" class=\"photos-section\" fxLayoutGap=\"10px\">\r\n      <div fxFlex=\"20\">\r\n\r\n      </div>\r\n      <div fxFlex=\"80\" fxLayout=\"column\">\r\n        <div>\r\n          <h3>\r\n            <i class=\"fas fa-camera\" style=\"color: #4a5dc4\"></i>\r\n            Fotografii\r\n          </h3>\r\n        </div>\r\n\r\n        <div>\r\n          <hr style=\"border-top:2px solid rgba(0, 0, 0, 0.1); margin-left:30px;margin-right: 30px;\" />\r\n        </div>\r\n        <div fxLayout=\"row wrap\" fxLayoutGap=\"25px;\">\r\n          <div class=\"img-flex mat-elevation-z3\" fxFlex=\"calc(25% - 25px)\" *ngFor=\"let photo of details.servicePhotos\" fxLayoutAlign=\"center center\">\r\n            <img [src]=\"GetSrcForPhoto(photo)\" />\r\n            <div class=\"overlay-picture\"></div>\r\n            <button type=\"button\" mat-mini-fab color=\"\" matTooltip=\"Vizualizeaza imaginea!\" (click)=\"OpenImage(photo)\">\r\n              <i class=\"far fa-eye\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div fxFlex=\"20\">\r\n\r\n      </div>\r\n    </section>\r\n    <section fxLayout=\"row\" id=\"reviews-section\" class=\"reviews-section\" fxLayoutGap=\"10px\">\r\n      <div fxFlex=\"20\">\r\n\r\n      </div>\r\n      <div fxFlex=\"80\" fxLayout=\"column\">\r\n        <div>\r\n          <h3>\r\n            <i class=\"fas fa-comment\" style=\"color: #4a5dc4\"></i>\r\n            Review-uri\r\n            <!--<button mat-button color=\"primary\" class=\"float-right\">\r\n              <i class=\"fas fa-plus\"></i> Aduga review\r\n            </button>-->\r\n          </h3>\r\n\r\n        </div>\r\n\r\n        <div>\r\n          <hr style=\"border-top:2px solid rgba(0, 0, 0, 0.1); margin-left:30px;margin-right: 30px;\" />\r\n        </div>\r\n        <div class=\"review-container\" fxLayout=\"column\">\r\n          <div fxFlex *ngIf=\"!details || details.serviceReviews.length == 0\" fxLayoutAlign=\"center center\" class=\"no-review-class\">\r\n            Momentan nu exista review-uri pentru acest service, fii primul!\r\n          </div>\r\n          <div fxFlex *ngIf=\"details\" fxLayout=\"row wrap\" fxLayoutGap=\"20px\">\r\n            <div fxFlex=\"calc(50% - 20px)\" class=\"review-tile\" *ngFor=\"let rev of details.serviceReviews\" fxLayout=\"column\">\r\n              <div fxLayout=\"row\" class=\"text-muted\" style=\"margin-top: 5px;\">\r\n                <div fxFlex fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                  <div>\r\n                    {{rev.user.userName}}\r\n                  </div>\r\n                  <div style=\"font-size: 13px;\">\r\n                    {{rev.dateTime | date:'dd/MMM/yyyy HH:mm:ss'}}\r\n                  </div>\r\n\r\n                </div>\r\n                <div fxFlex fxLayoutAlign=\"end end\">\r\n                  <bar-rating class=\"d-inline-block\" [(rate)]=\"rev.rate\" [max]=\"5\" [readOnly]=\"true\"></bar-rating> {{rev.rate}}\r\n                </div>\r\n              </div>\r\n              <hr style=\"border-top:2px solid rgba(0, 0, 0, 0.1); margin-left:20px;margin-right: 20px;\" />\r\n              <div fxLayoutAlign=\"center center\" fxLayout=\"column\">\r\n                <div *ngIf=\"rev.toggle==false\">\r\n                  {{rev.review | truncate:50: '...': true}}\r\n                </div>\r\n                <div *ngIf=\"rev.toggle==true\">\r\n                  {{rev.review}}\r\n                </div>\r\n                <div *ngIf=\"rev.review.length>50\" class=\"text-center\">\r\n                  <button *ngIf=\"rev.toggle==false\" mat-button color=\"primary\" (click)=\"rev.toggle=true\">\r\n                    Afiseaza tot comentariul\r\n                  </button>\r\n                  <button *ngIf=\"rev.toggle==true\" mat-button color=\"accent\" (click)=\"rev.toggle=false\">\r\n                    Ascunde tot comentariul\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div fxFlex=\"20\">\r\n\r\n      </div>\r\n    </section>\r\n\r\n\r\n\r\n    <section id=\"address-section\" class=\"address-section\">\r\n      <div fxFlex=\"20\">\r\n\r\n      </div>\r\n      <div fxFlex=\"80\" fxLayout=\"column\">\r\n        <div>\r\n          <h3>\r\n            <i class=\"fas fa-map\" style=\"color: #4a5dc4\"></i>\r\n            Adresa\r\n          </h3>\r\n        </div>\r\n\r\n        <div>\r\n          <hr style=\"border-top:2px solid rgba(0, 0, 0, 0.1); margin-left:30px;margin-right: 30px;\" />\r\n        </div>\r\n        <div fxFlex fxLayout=\"row\" fxLayoutGap=\"20px\" class=\"address-container\">\r\n          <div fxFlex=\"70\">\r\n            <agm-map [latitude]=\"details.serviceLocation.latitude\" [longitude]=\"details.serviceLocation.longitude\" [zoom]=\"15\">\r\n              <agm-marker [latitude]=\"details.serviceLocation.latitude\" [longitude]=\"details.serviceLocation.longitude\">\r\n              </agm-marker>\r\n            </agm-map>\r\n          </div>\r\n          <div fxFlex=\"30\" fxLayout=\"column\" fxLayoutGap=\"10px\">\r\n            <h4>\r\n              Adresa:\r\n            </h4>\r\n            <div class=\"text-muted\">\r\n              {{details.serviceLocation.city.judet}}, {{details.serviceLocation.city.name}}\r\n            </div>\r\n            <div class=\"text-muted\">\r\n              {{details.serviceLocation.address}}\r\n            </div>\r\n            <div>\r\n              <button mat-button color=\"primary\" (click)=\"OpenGoogleMaps()\">\r\n                Deschide in Google Maps\r\n              </button>\r\n            </div>\r\n            <div>\r\n              <hr style=\"border-top:2px solid rgba(0, 0, 0, 0.1); margin-right: 20px;\" />\r\n            </div>\r\n            <h4>\r\n              Contact:\r\n            </h4>\r\n            <div *ngFor=\"let contact of details.serviceContacts\">\r\n              <i class=\"fas\" [class]=\"GetTypeForContact(contact)\"></i> {{contact.value}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div fxFlex=\"20\">\r\n\r\n      </div>\r\n    </section>\r\n\r\n    <section id=\"description-section\" class=\"description-section last-section\">\r\n      <div fxFlex=\"20\">\r\n\r\n      </div>\r\n      <div fxFlex=\"80\" fxLayout=\"column\">\r\n        <div>\r\n          <h3>\r\n            <i class=\"fas fa-file-alt\" style=\"color: #4a5dc4\"></i>\r\n            Descriere\r\n          </h3>\r\n        </div>\r\n\r\n        <div>\r\n          <hr style=\"border-top:2px solid rgba(0, 0, 0, 0.1); margin-left:30px;margin-right: 30px;\" />\r\n        </div>\r\n        <div fxFlex fxLayout=\"row\" fxLayoutGap=\"20px\" class=\"description-container\">\r\n          <pre> {{details.serviceInfo.descriere}}</pre>\r\n        </div>\r\n      </div>\r\n      <div fxFlex=\"20\">\r\n\r\n      </div>\r\n    </section>\r\n\r\n  </div>\r\n  <button mat-fab id=\"go-top-button\" [ngx-scroll-to]=\"'go-top'\">\r\n    <i class=\"fas fa-angle-up fa-2x\"></i>\r\n  </button>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/client/services/services.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/client/services/services.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"services-wrapper\">\r\n  <div fxLayout=\"column\" fxLayoutGap=\"25px\">\r\n    <mat-toolbar class=\"services-toolbar mat-elevation-z5\" color=\"\" fxLayout=\"row\">\r\n      <mat-toolbar-row class=\"admin-toolbar\" fxLayout=\"row wrap\" fxFlex=\"72\" fxFlexOffset=\"14\" fxLayoutGap=\"10px\">\r\n\r\n        <img class=\"img-fluid\" src=\"/images/Logo/Logo.jpg\" style=\"height: inherit\" alt=\"Logo\" />\r\n\r\n        <div class=\"example-spacer\" fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\">\r\n          <div fxFlex>\r\n            <mat-form-field class=\"w-100\" style=\"font-size: 14px; margin-top: 15px;\">\r\n              <input matInput placeholder=\"Oras\" aria-label=\"Oras\" [matAutocomplete]=\"auto\" [formControl]=\"cityCtrl\">\r\n              <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\" (optionSelected)=\"CitySelected($event.option.value)\">\r\n                <mat-option *ngFor=\"let state of filteredCities | async\" [value]=\"state\">\r\n                  <span>{{state.name}}</span> |\r\n                  <small>Judet: {{state.judet}}</small>\r\n                </mat-option>\r\n              </mat-autocomplete>\r\n            </mat-form-field>\r\n          </div>\r\n          <div fxFlex>\r\n            <mat-form-field class=\"w-100\" style=\"font-size: 14px; margin-top: 15px;\">\r\n              <input matInput placeholder=\"Tip serviciu\" aria-label=\"Tip serviciu\" [matAutocomplete]=\"autoa\" [formControl]=\"typeCtrl\">\r\n              <mat-autocomplete #autoa=\"matAutocomplete\" [displayWith]=\"displayFn\" (optionSelected)=\"TypeSelected($event.option.value)\">\r\n                <mat-option *ngFor=\"let type of filteredTypes | async\" [value]=\"type\">\r\n                  <img class=\"mr-3\" aria-hidden [src]=\"'/images/Operations/' + type.icon\" height=\"25\">\r\n                  <span>{{type.name}}</span>\r\n                </mat-option>\r\n              </mat-autocomplete>\r\n            </mat-form-field>\r\n          </div>\r\n          <div fxFlex>\r\n            <mat-form-field class=\"w-100\" style=\"font-size: 14px; margin-top: 15px;\">\r\n              <input matInput placeholder=\"Brand masina\" aria-label=\"Brand masina\" [matAutocomplete]=\"autob\" [formControl]=\"brandCtrl\">\r\n              <mat-autocomplete #autob=\"matAutocomplete\" [displayWith]=\"displayFn\" (optionSelected)=\"BrandSelected($event.option.value)\">\r\n                <mat-option *ngFor=\"let bd of filteredBrands | async\" [value]=\"bd\">\r\n                  <img class=\"mr-3\" aria-hidden [src]=\"'/images/CarLogos/' + bd.icon\" height=\"25\">\r\n                  <span>{{bd.name}}</span>\r\n                </mat-option>\r\n              </mat-autocomplete>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n\r\n        <!--<button mat-button [matMenuTriggerFor]=\"menu\">\r\n          Service-ul meu\r\n        </button>\r\n\r\n        <mat-menu #menu=\"matMenu\">\r\n          <button mat-menu-item (click)=\"GoToGeneralInfo()\">\r\n            <i class=\"fas fa-info-circle\"></i>\r\n            Informatii generale\r\n          </button>\r\n          <button mat-menu-item *ngFor=\"let item of locations\" (click)=\"GoToLocation(item)\">\r\n            <i class=\"fas fa-warehouse\"></i> {{item.name}}\r\n          </button>\r\n          <button mat-menu-item [disabled]=\"!generalInfoCompleted\" (click)=\"AddNewLocation()\">\r\n            <i class=\"fas fa-plus\"></i> Adauga locatie noua\r\n          </button>\r\n        </mat-menu>-->\r\n        <a mat-button href=\"/Identity/Account/LogoutAdmin\">Sign out</a>\r\n      </mat-toolbar-row>\r\n    </mat-toolbar>\r\n    <div fxLayout=\"row\" fxLayoutGap=\"15px\">\r\n      <div fxFlex=\"15\">\r\n        <div class=\"search-container mat-elevation-z3\" fxLayout=\"column\">\r\n          <div>\r\n            <h5 class=\"search-container-title\">\r\n              Filtreaza\r\n            </h5>\r\n          </div>\r\n          <!--<div>\r\n            <mat-form-field class=\"w-100\">\r\n              <input matInput placeholder=\"Tip serviciu\" aria-label=\"Tip serviciu\" [matAutocomplete]=\"autoa\" [formControl]=\"typeCtrl\">\r\n              <mat-autocomplete #autoa=\"matAutocomplete\" [displayWith]=\"displayFn\" (optionSelected)=\"TypeSelected($event.option.value)\">\r\n                <mat-option *ngFor=\"let type of filteredTypes | async\" [value]=\"type\">\r\n                  <img class=\"mr-3\" aria-hidden [src]=\"'/images/Operations/' + type.icon\" height=\"25\">\r\n                  <span>{{type.name}}</span>\r\n                </mat-option>\r\n              </mat-autocomplete>\r\n            </mat-form-field>\r\n          </div>-->\r\n          <div>\r\n            <mat-form-field class=\"example-chip-list\" fxFlex>\r\n              <mat-chip-list #chipListOp>\r\n                <mat-chip *ngFor=\"let op of selectedOperations\"\r\n                          [selectable]=\"selectable\"\r\n                          [removable]=\"removable\"\r\n                          (removed)=\"removeOperation(op)\">\r\n                  <span matTooltip=\"{{op.name}}\"\r\n                        [matTooltipPosition]=\"'right'\">\r\n                    {{ (op.name.length>6)? (op.name | slice:0:6)+'..':(op.name)}}\r\n                  </span>\r\n                  <mat-icon matChipRemove (click)=\"removeOperation(op)\">cancel</mat-icon>\r\n                </mat-chip>\r\n                <input placeholder=\"Servicii...\"\r\n                       #facilityInput\r\n                       [formControl]=\"operationCtrl\"\r\n                       [matAutocomplete]=\"autoop\"\r\n                       [matChipInputFor]=\"chipListOp\"\r\n                       [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n                       [matChipInputAddOnBlur]=\"addOnBlur\">\r\n              </mat-chip-list>\r\n              <mat-autocomplete #autoop=\"matAutocomplete\" (optionSelected)=\"selectedOperation($event.option.value)\">\r\n                <mat-option *ngFor=\"let op of filteredOperations\" [value]=\"op\">\r\n                  <div matTooltip=\"{{op.name}}\" [matTooltipPosition]=\"'right'\">\r\n                    {{op.name}}\r\n                  </div>\r\n                </mat-option>\r\n              </mat-autocomplete>\r\n            </mat-form-field>\r\n          </div>\r\n          <div>\r\n            <mat-form-field class=\"example-chip-list\" fxFlex>\r\n              <mat-chip-list #chipListFac>\r\n                <mat-chip *ngFor=\"let facility of selectedFacilities\"\r\n                          [selectable]=\"selectable\"\r\n                          [removable]=\"removable\"\r\n                          (removed)=\"removeFacility(facility)\">\r\n                  <span matTooltip=\"{{facility.name}}\"><i [ngClass]=\"facility.icon\"></i></span>\r\n                  <mat-icon matChipRemove (click)=\"removeFacility(facility)\">cancel</mat-icon>\r\n                </mat-chip>\r\n                <input placeholder=\"Facilitati...\"\r\n                       #facilityInput\r\n                       [formControl]=\"facilityCtrl\"\r\n                       [matAutocomplete]=\"autofac\"\r\n                       [matChipInputFor]=\"chipListFac\"\r\n                       [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n                       [matChipInputAddOnBlur]=\"addOnBlur\">\r\n              </mat-chip-list>\r\n              <mat-autocomplete #autofac=\"matAutocomplete\" (optionSelected)=\"selectedFacility($event.option.value)\">\r\n                <mat-option *ngFor=\"let facility of facilities\" [value]=\"facility\">\r\n                  <i [ngClass]=\"facility.icon\"></i>\r\n                  {{facility.name}}\r\n                </mat-option>\r\n              </mat-autocomplete>\r\n            </mat-form-field>\r\n          </div>\r\n          <div>\r\n            <mat-form-field class=\"w-100\">\r\n              <mat-label>Distanta</mat-label>\r\n              <mat-select [(ngModel)]=\"selectedDistance\">\r\n                <mat-option *ngFor=\"let dist of distances\" [value]=\"dist\">\r\n                  {{dist}} km\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div>\r\n            <button class=\"w-100\" mat-button color=\"primary\" (click)=\"GetServices()\">\r\n              <mat-icon>search</mat-icon> Cauta\r\n            </button>\r\n            <button class=\"w-100\" mat-button color=\"accent\" (click)=\"showMap=!showMap\">\r\n              <i class=\"fas fa-map\"></i> Cauta pe harta\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div fxFlex=\"25\" *ngIf=\"showMap\">\r\n        <agm-map [latitude]=\"selectedCity.latitude\" [longitude]=\"selectedCity.longitude\" [zoom]=\"12\">\r\n          <agm-marker *ngFor=\"let service of services\" [latitude]=\"service.latitude\" [longitude]=\"service.longitude\">\r\n            <agm-snazzy-info-window [closeWhenOthersOpen]=\"true\" [closeWhenOthersOpen]=\"true\">\r\n              <ng-template>\r\n                <div fxLayout=\"column\" fxLayoutGap=\"5px\">\r\n                  <div fxLayout=\"row\" fxLayoutGap=\"10px\">\r\n                    <div fxFlex=\"40\" fxLayoutAlign=\"center center\">\r\n                      <img [src]=\"GetSrcForService(service)\" width=\"100%\" />\r\n                    </div>\r\n                    <div fxFlex=\"60\" fxLayout=\"column\" fxLayoutGap=\"5px\">\r\n                      <h4>\r\n                        {{service.name}}\r\n                      </h4>\r\n                    </div>\r\n                  </div>\r\n                  <div>\r\n                    <a class=\"w-100\" mat-raised-button color=\"primary\"\r\n                        [routerLink]=\"['/client/service', service.locationId]\">\r\n                      Vezi detalii\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n              </ng-template>\r\n            </agm-snazzy-info-window>\r\n          </agm-marker>\r\n        </agm-map>\r\n      </div>\r\n      <div fxFlex=\"{{showMap==true ? 50 : 65}}\" fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\r\n        <div class=\"service-tile mat-elevation-z4\" fxFlex=\"0 1 calc({{showMap==true ? '50%' : '33%'}}-25px)\" *ngFor=\"let service of services\" fxLayout=\"row\">\r\n          <div class=\"service-tile-image\" fxFlex=\"50\" fxLayoutALign=\"center center\">\r\n            <img [src]=\"GetSrcForService(service)\" />\r\n            <div class=\"service-tile-image-helper text-center\">\r\n              <i class=\"fas fa-camera\"></i> {{service.noImages}} imagini\r\n            </div>\r\n          </div>\r\n          <div class=\"service-tile-body\" fxFlex=\"50\" fxLayout=\"column\" fxLayoutGap=\"5px\">\r\n            <div style=\"font-size: 16px;\">\r\n              {{service.name}}\r\n            </div>\r\n            <div class=\"text-muted\">\r\n              {{service.distance | number:'1.1-1'}} km, {{service.address}}\r\n            </div>\r\n            <div class=\"example-spacer\"></div>\r\n            <div class=\"ml-2\" fxLayoutAlign=\"start end\">\r\n              <span class=\"rating-number mr-2\">\r\n                <i class=\"fas fa-check\"></i> {{service.reviewAvg}}\r\n              </span>\r\n              <bar-rating class=\"d-inline-block\" [(rate)]=\"service.reviewAvg\" [max]=\"5\" [readOnly]=\"true\"></bar-rating>\r\n            </div>\r\n            <div class=\"ml-2\" fxLayoutAlign=\"start end\">\r\n              <span class=\"rating-number mr-2\">\r\n                <i class=\"fas fa-envelope\"></i> {{service.comments}}\r\n              </span>\r\n              Comentarii\r\n            </div>\r\n            <div class=\"example-spacer\"></div>\r\n            <div>\r\n              <a class=\"w-100\" mat-raised-button color=\"primary\"\r\n                 [routerLink]=\"['/client/service', service.locationId]\">\r\n                Cititi mai multe\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n     \r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/snazzy-info-window/dist/snazzy-info-window.min.js":
/*!************************************************************************!*\
  !*** ./node_modules/snazzy-info-window/dist/snazzy-info-window.min.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(t,e){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module,exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var o; }}(this,function(t,e){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function r(t,e){t&&e&&Object.keys(e).forEach(function(o){t[o]=e[o]})}function n(t){var e={};return r(e,f),r(e,t),Object.keys(f).forEach(function(t){var o=f[t];if("object"===(void 0===o?"undefined":d(o))){var i={};r(i,o),r(i,e[t]),e[t]=i}}),e}function h(t,e){var o=/^(-{0,1}\.{0,1}\d+(\.\d+)?)[\s|\.]*(\w*)$/;if(t&&o.test(t)){var i=o.exec(t);return{value:1*i[1],units:i[3]||"px",original:t}}return e?h(e):{original:e}}function p(t,e){if(t){for(;t.firstChild;)t.removeChild(t.firstChild);e&&("string"==typeof e?t.innerHTML=e:t.appendChild(e))}}function a(t){return"top"===t?"bottom":"bottom"===t?"top":"left"===t?"right":"right"===t?"left":t}function l(t){return t.charAt(0).toUpperCase()+t.slice(1)}function c(t){if(void 0!==t&&null!==t&&google){if(t instanceof google.maps.LatLng)return t;if(void 0!==t.lat&&void 0!==t.lng)return new google.maps.LatLng(t)}return null}Object.defineProperty(e,"__esModule",{value:!0});var _=function(){function t(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,o,i){return o&&t(e.prototype,o),i&&t(e,i),e}}(),d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u={h:"0px",v:"3px",blur:"6px",spread:"0px",color:"#000"},f={placement:"top",pointer:!0,openOnMarkerClick:!0,closeOnMapClick:!0,closeWhenOthersOpen:!1,showCloseButton:!0,panOnOpen:!0,edgeOffset:{top:20,right:20,bottom:20,left:20}},m=function(t){function e(t){o(this,e);var s=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));s._html=null,s._opts=n(t),s._callbacks=s._opts.callbacks||{},s._marker=s._opts.marker,s._map=s._opts.map,s._position=c(s._opts.position),s._isOpen=!1,s._listeners=[],google&&s._marker&&s._opts.openOnMarkerClick&&s.trackListener(google.maps.event.addListener(s._marker,"click",function(){s.getMap()||s.open()}),!0),s._position&&!s._opts.offset&&(s._opts.offset={top:"0px",left:"0px"});var r=t.placement||s._opts.position;return("string"==typeof r||r instanceof String)&&(r=r.toLowerCase()),s._opts.placement="top"!==r&&"bottom"!==r&&"left"!==r&&"right"!==r?f.placement:r,r=s._opts.position,void 0===r||null===r||"string"==typeof r||r instanceof String||(s._opts.position=r),void 0!==s._opts.border&&s._opts.border!==!0||(s._opts.border={}),void 0===s._opts.pointer&&(s._opts.pointer=f.pointer),void 0!==s._opts.shadow&&s._opts.shadow!==!0||(s._opts.shadow={}),s}return s(e,t),_(e,[{key:"activateCallback",value:function(t){var e=this._callbacks[t];return e?e.apply(this):void 0}},{key:"trackListener",value:function(t,e){this._listeners.push({listener:t,persistent:e})}},{key:"clearListeners",value:function(t){google&&this._listeners&&(this._listeners.forEach(function(e){!t&&e.persistent||(google.maps.event.removeListener(e.listener),e.listener=null)}),this._listeners=this._listeners.filter(function(t){return null!=t.listener}))}},{key:"isOpen",value:function(){return this._isOpen}},{key:"open",value:function(){var t=this.activateCallback("beforeOpen");(void 0===t||t)&&(this._marker?this.setMap(this._marker.getMap()):this._map&&this._position&&this.setMap(this._map))}},{key:"close",value:function(){var t=this.activateCallback("beforeClose");(void 0===t||t)&&(this.clearListeners(),this.setMap(null))}},{key:"destroy",value:function(){this.getMap()&&this.setMap(null),this.clearListeners(!0)}},{key:"setContent",value:function(t){this._opts.content=t,this._html&&this._html.content&&p(this._html.content,t)}},{key:"setPosition",value:function(t){this._position=c(t),this._isOpen&&this._position&&(this.draw(),this.resize(),this.reposition())}},{key:"getWrapper",value:function(){return this._html?this._html.wrapper:null}},{key:"draw",value:function(){if(this.getMap()&&this._html&&(this._marker||this._position)){var t=this._opts.offset;t&&(t.left&&(this._html.wrapper.style.marginLeft=t.left),t.top&&(this._html.wrapper.style.marginTop=t.top));var e=this._opts.backgroundColor;if(e&&(this._html.contentWrapper.style.backgroundColor=e,this._opts.pointer&&(this._html.pointerBg.style["border"+l(this._opts.placement)+"Color"]=e)),this._opts.padding&&(this._html.contentWrapper.style.padding=this._opts.padding,this._opts.shadow&&(this._html.shadowFrame.style.padding=this._opts.padding)),this._opts.borderRadius&&(this._html.contentWrapper.style.borderRadius=this._opts.borderRadius,this._opts.shadow&&(this._html.shadowFrame.style.borderRadius=this._opts.borderRadius)),this._opts.fontSize&&(this._html.wrapper.style.fontSize=this._opts.fontSize),this._opts.fontColor&&(this._html.contentWrapper.style.color=this._opts.fontColor),this._opts.pointer&&this._opts.pointer!==!0&&(this._opts.shadow&&(this._html.shadowPointer.style.width=this._opts.pointer,this._html.shadowPointer.style.height=this._opts.pointer),this._html.pointerBorder&&(this._html.pointerBorder.style.borderWidth=this._opts.pointer),this._html.pointerBg.style.borderWidth=this._opts.pointer),this._opts.border){var o=0;if(void 0!==this._opts.border.width&&(o=h(this._opts.border.width,"0px"),this._html.contentWrapper.style.borderWidth=o.value+o.units),o=Math.round((this._html.contentWrapper.offsetWidth-this._html.contentWrapper.clientWidth)/2),o=h(o+"px","0px"),this._opts.pointer){var i=Math.min(this._html.pointerBorder.offsetHeight,this._html.pointerBorder.offsetWidth);i=h(i+"px","0px");var s=Math.round(o.value*(1.41421356237-1));s=Math.min(s,i.value),this._html.pointerBg.style.borderWidth=i.value-s+i.units;var r=l(a(this._opts.placement));this._html.pointerBg.style["margin"+r]=s+o.units,this._html.pointerBg.style[this._opts.placement]=-o.value+o.units}var n=this._opts.border.color;n&&(this._html.contentWrapper.style.borderColor=n,this._html.pointerBorder&&(this._html.pointerBorder.style["border"+l(this._opts.placement)+"Color"]=n))}if(this._opts.shadow){var p=this._opts.shadow,c=function(t){var e=p[t];return void 0!==e&&null!=e};if(c("h")||c("v")||c("blur")||c("spread")||c("color")){var _=h(p.h,u.h),d=h(p.v,u.v),f=h(p.blur,u.blur),m=h(p.spread,u.spread),g=p.color||u.color,v=function(t,e){return t+" "+e+" "+f.original+" "+m.original+" "+g};this._html.shadowFrame.style.boxShadow=v(_.original,d.original);var b=.7071067811865474*(_.value-d.value)+_.units,y=.7071067811865474*(_.value+d.value)+d.units;this._html.shadowPointerInner.style.boxShadow=v(b,y)}this._opts.shadow.opacity&&(this._html.shadowWrapper.style.opacity=this._opts.shadow.opacity)}var w=this.getProjection().fromLatLngToDivPixel(this._position||this._marker.position);w&&(this._html.floatWrapper.style.top=Math.floor(w.y)+"px",this._html.floatWrapper.style.left=Math.floor(w.x)+"px"),this._isOpen||(this._isOpen=!0,this.resize(),this.reposition(),this.activateCallback("afterOpen"),google&&google.maps.event.trigger(this.getMap(),"snazzy-info-window-opened",this))}}},{key:"onAdd",value:function(){var t=this;if(!this._html){var e=function(t,e){if(t&&e)for(var o=0;o<e.length;o++){var i=e[o];i&&(t.className&&(t.className+=" "),t.className+="si-"+i)}},o=function(){for(var t=arguments.length,o=Array(t),i=0;i<t;i++)o[i]=arguments[i];var s=document.createElement("div");return e(s,o),s};if(this._html={},this._html.wrapper=o("wrapper-"+this._opts.placement),this._opts.wrapperClass&&(this._html.wrapper.className+=" "+this._opts.wrapperClass),this._opts.border&&e(this._html.wrapper,["has-border"]),this._opts.shadow&&(this._html.shadowWrapper=o("shadow-wrapper-"+this._opts.placement),this._html.shadowFrame=o("frame","shadow-frame"),this._html.shadowWrapper.appendChild(this._html.shadowFrame),this._opts.pointer&&(this._html.shadowPointer=o("shadow-pointer-"+this._opts.placement),this._html.shadowPointerInner=o("shadow-inner-pointer-"+this._opts.placement),this._html.shadowPointer.appendChild(this._html.shadowPointerInner),this._html.shadowWrapper.appendChild(this._html.shadowPointer)),this._html.wrapper.appendChild(this._html.shadowWrapper)),this._html.contentWrapper=o("frame","content-wrapper"),this._html.content=o("content"),this._opts.content&&p(this._html.content,this._opts.content),this._opts.showCloseButton){if(this._opts.closeButtonMarkup){var i=document.createElement("div");p(i,this._opts.closeButtonMarkup),this._html.closeButton=i.firstChild}else this._html.closeButton=document.createElement("button"),this._html.closeButton.setAttribute("type","button"),this._html.closeButton.innerHTML="&#215;",e(this._html.closeButton,["close-button"]);this._html.contentWrapper.appendChild(this._html.closeButton)}this._html.contentWrapper.appendChild(this._html.content),this._html.wrapper.appendChild(this._html.contentWrapper),this._opts.pointer&&(this._opts.border&&(this._html.pointerBorder=o("pointer-"+this._opts.placement,"pointer-border-"+this._opts.placement),this._html.wrapper.appendChild(this._html.pointerBorder)),this._html.pointerBg=o("pointer-"+this._opts.placement,"pointer-bg-"+this._opts.placement),this._html.wrapper.appendChild(this._html.pointerBg)),this._html.floatWrapper=o("float-wrapper"),this._html.floatWrapper.appendChild(this._html.wrapper),this.getPanes().floatPane.appendChild(this._html.floatWrapper);var s=this.getMap();if(this.clearListeners(),this._opts.closeOnMapClick&&this.trackListener(google.maps.event.addListener(s,"click",function(){t.close()})),this._opts.closeWhenOthersOpen&&this.trackListener(google.maps.event.addListener(s,"snazzy-info-window-opened",function(e){t!==e&&t.close()})),google){this._previousWidth=null,this._previousHeight=null,this.trackListener(google.maps.event.addListener(s,"bounds_changed",function(){var e=s.getDiv(),o=e.offsetWidth,i=e.offsetHeight,r=t._previousWidth,n=t._previousHeight;null!==r&&null!==n&&r===o&&n===i||(t._previousWidth=o,t._previousHeight=i,t.resize())})),this._marker&&this.trackListener(google.maps.event.addListener(this._marker,"position_changed",function(){t.draw()})),this._opts.showCloseButton&&!this._opts.closeButtonMarkup&&this.trackListener(google.maps.event.addDomListener(this._html.closeButton,"click",function(e){e.cancelBubble=!0,e.stopPropagation&&e.stopPropagation(),t.close()}));["click","dblclick","rightclick","contextmenu","drag","dragend","dragstart","mousedown","mouseout","mouseover","mouseup","touchstart","touchend","touchmove","wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"].forEach(function(e){t.trackListener(google.maps.event.addDomListener(t._html.wrapper,e,function(t){t.cancelBubble=!0,t.stopPropagation&&t.stopPropagation()}))})}this.activateCallback("open")}}},{key:"onRemove",value:function(){if(this.activateCallback("close"),this._html){var t=this._html.floatWrapper.parentElement;t&&t.removeChild(this._html.floatWrapper),this._html=null}this._isOpen=!1,this.activateCallback("afterClose")}},{key:"getMapInnerBounds",value:function(){var t=this.getMap().getDiv().getBoundingClientRect(),e={top:t.top+this._opts.edgeOffset.top,right:t.right-this._opts.edgeOffset.right,bottom:t.bottom-this._opts.edgeOffset.bottom,left:t.left+this._opts.edgeOffset.left};return e.width=e.right-e.left,e.height=e.bottom-e.top,e}},{key:"reposition",value:function(){if(this._opts.panOnOpen&&this._html){var t=this.getMapInnerBounds(),e=this._html.wrapper.getBoundingClientRect(),o=0,i=0;t.left>=e.left?o=e.left-t.left:t.right<=e.right&&(o=e.left-(t.right-e.width)),t.top>=e.top?i=e.top-t.top:t.bottom<=e.bottom&&(i=e.top-(t.bottom-e.height)),0===o&&0===i||this.getMap().panBy(o,i)}}},{key:"resize",value:function(){if(this._html){var t=this.getMapInnerBounds(),e=t.width;void 0!==this._opts.maxWidth&&(e=Math.min(e,this._opts.maxWidth)),e-=this._html.wrapper.offsetWidth-this._html.content.offsetWidth,this._html.content.style.maxWidth=e+"px";var o=t.height;void 0!==this._opts.maxHeight&&(o=Math.min(o,this._opts.maxHeight)),o-=this._html.wrapper.offsetHeight-this._html.content.offsetHeight,this._html.content.style.maxHeight=o+"px"}}}]),e}(google.maps.OverlayView);e.default=m,t.exports=e.default});
//# sourceMappingURL=snazzy-info-window.min.js.map


/***/ }),

/***/ "./src/app/core/models/appointment.ts":
/*!********************************************!*\
  !*** ./src/app/core/models/appointment.ts ***!
  \********************************************/
/*! exports provided: Appointment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Appointment", function() { return Appointment; });
var Appointment = /** @class */ (function () {
    function Appointment() {
    }
    return Appointment;
}());



/***/ }),

/***/ "./src/app/core/models/months.ts":
/*!***************************************!*\
  !*** ./src/app/core/models/months.ts ***!
  \***************************************/
/*! exports provided: Months */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Months", function() { return Months; });
var Months;
(function (Months) {
    Months[Months["Ianuarie"] = 1] = "Ianuarie";
    Months[Months["Februarie"] = 2] = "Februarie";
    Months[Months["Martie"] = 3] = "Martie";
    Months[Months["Aprilie"] = 4] = "Aprilie";
    Months[Months["Mai"] = 5] = "Mai";
    Months[Months["Iunie"] = 6] = "Iunie";
    Months[Months["Iulie"] = 7] = "Iulie";
    Months[Months["August"] = 8] = "August";
    Months[Months["Septembrie"] = 9] = "Septembrie";
    Months[Months["Octombrie"] = 10] = "Octombrie";
    Months[Months["Noiembrie"] = 11] = "Noiembrie";
    Months[Months["Decembrie"] = 12] = "Decembrie";
})(Months || (Months = {}));


/***/ }),

/***/ "./src/app/modules/client/client-layout/client-layout.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/modules/client/client-layout/client-layout.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".client-layout {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jbGllbnQvY2xpZW50LWxheW91dC9DOlxcVXNlcnNcXGFuZHJlaS5mdW5hcnVcXERlc2t0b3BcXExpY2VudGFcXGVTZXJ2aWNlXFxlU2VydmljZVxcQ2xpZW50QXBwL3NyY1xcYXBwXFxtb2R1bGVzXFxjbGllbnRcXGNsaWVudC1sYXlvdXRcXGNsaWVudC1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvY2xpZW50L2NsaWVudC1sYXlvdXQvY2xpZW50LWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLFlBQUE7RUFDQSxXQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NsaWVudC9jbGllbnQtbGF5b3V0L2NsaWVudC1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xpZW50LWxheW91dFxyXG57XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgd2lkdGg6MTAwJTtcclxufVxyXG4iLCIuY2xpZW50LWxheW91dCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/client/client-layout/client-layout.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/client/client-layout/client-layout.component.ts ***!
  \*************************************************************************/
/*! exports provided: ClientLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientLayoutComponent", function() { return ClientLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ClientLayoutComponent = /** @class */ (function () {
    function ClientLayoutComponent() {
    }
    ClientLayoutComponent.prototype.ngOnInit = function () {
    };
    ClientLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-client-layout',
            template: __webpack_require__(/*! raw-loader!./client-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/client/client-layout/client-layout.component.html"),
            styles: [__webpack_require__(/*! ./client-layout.component.scss */ "./src/app/modules/client/client-layout/client-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ClientLayoutComponent);
    return ClientLayoutComponent;
}());



/***/ }),

/***/ "./src/app/modules/client/client-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/client/client-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ClientRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientRoutingModule", function() { return ClientRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _client_layout_client_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client-layout/client-layout.component */ "./src/app/modules/client/client-layout/client-layout.component.ts");
/* harmony import */ var _search_page_search_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-page/search-page.component */ "./src/app/modules/client/search-page/search-page.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/services.component */ "./src/app/modules/client/services/services.component.ts");
/* harmony import */ var _service_service_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/service.component */ "./src/app/modules/client/service/service.component.ts");







var routes = [
    {
        path: "",
        component: _client_layout_client_layout_component__WEBPACK_IMPORTED_MODULE_3__["ClientLayoutComponent"],
        children: [
            {
                path: "",
                pathMatch: "full",
                component: _search_page_search_page_component__WEBPACK_IMPORTED_MODULE_4__["SearchPageComponent"]
            }, {
                path: "services",
                component: _services_services_component__WEBPACK_IMPORTED_MODULE_5__["ServicesComponent"]
            },
            {
                path: "service/:id",
                component: _service_service_component__WEBPACK_IMPORTED_MODULE_6__["ServiceComponent"]
            }
        ]
    }
];
var ClientRoutingModule = /** @class */ (function () {
    function ClientRoutingModule() {
    }
    ClientRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ClientRoutingModule);
    return ClientRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/client/client.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/client/client.module.ts ***!
  \*************************************************/
/*! exports provided: ClientModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientModule", function() { return ClientModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _client_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client-routing.module */ "./src/app/modules/client/client-routing.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var src_app_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_izitoast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-izitoast */ "./node_modules/ng2-izitoast/ng2-izitoast.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm5/nicky-lenaers-ngx-scroll-to.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-material-timepicker */ "./node_modules/ngx-material-timepicker/fesm5/ngx-material-timepicker.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_core_date_format__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/date-format */ "./src/app/core/date-format.ts");
/* harmony import */ var _client_layout_client_layout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./client-layout/client-layout.component */ "./src/app/modules/client/client-layout/client-layout.component.ts");
/* harmony import */ var _search_page_search_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./search-page/search-page.component */ "./src/app/modules/client/search-page/search-page.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/services.component */ "./src/app/modules/client/services/services.component.ts");
/* harmony import */ var ngx_bar_rating__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bar-rating */ "./node_modules/ngx-bar-rating/index.js");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js");
/* harmony import */ var _service_service_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./service/service.component */ "./src/app/modules/client/service/service.component.ts");
/* harmony import */ var _agm_snazzy_info_window__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @agm/snazzy-info-window */ "./node_modules/@agm/snazzy-info-window/index.js");
/* harmony import */ var _service_appointment_appointment_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./service/appointment/appointment.component */ "./src/app/modules/client/service/appointment/appointment.component.ts");
/* harmony import */ var ng_pipes__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-pipes */ "./node_modules/ng-pipes/esm5/ng-pipes.js");
/* harmony import */ var _service_image_viewer_client_image_viewer_client_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./service/image-viewer-client/image-viewer-client.component */ "./src/app/modules/client/service/image-viewer-client/image-viewer-client.component.ts");
























var ClientModule = /** @class */ (function () {
    function ClientModule() {
    }
    ClientModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_client_layout_client_layout_component__WEBPACK_IMPORTED_MODULE_14__["ClientLayoutComponent"], _search_page_search_page_component__WEBPACK_IMPORTED_MODULE_15__["SearchPageComponent"],
                _services_services_component__WEBPACK_IMPORTED_MODULE_16__["ServicesComponent"], _service_service_component__WEBPACK_IMPORTED_MODULE_19__["ServiceComponent"], _service_appointment_appointment_component__WEBPACK_IMPORTED_MODULE_21__["AppointmentComponent"], _service_image_viewer_client_image_viewer_client_component__WEBPACK_IMPORTED_MODULE_23__["ImageViewerClientComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _client_routing_module__WEBPACK_IMPORTED_MODULE_3__["ClientRoutingModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], src_app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["DemoMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                ng2_izitoast__WEBPACK_IMPORTED_MODULE_7__["Ng2IziToastModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_9__["ScrollToModule"].forRoot(),
                _agm_core__WEBPACK_IMPORTED_MODULE_10__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyAU2yqZKf_fmbeMaRMzFUpkJf_ofXmX9Eg'
                }), ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_11__["NgxMaterialTimepickerModule"],
                ngx_bar_rating__WEBPACK_IMPORTED_MODULE_17__["BarRatingModule"], _agm_snazzy_info_window__WEBPACK_IMPORTED_MODULE_20__["AgmSnazzyInfoWindowModule"],
                ngx_clipboard__WEBPACK_IMPORTED_MODULE_18__["ClipboardModule"], ng_pipes__WEBPACK_IMPORTED_MODULE_22__["NgPipesModule"]
            ],
            providers: [
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_12__["DateAdapter"], useClass: src_app_core_date_format__WEBPACK_IMPORTED_MODULE_13__["AppDateAdapter"]
                },
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_12__["MAT_DATE_FORMATS"], useValue: src_app_core_date_format__WEBPACK_IMPORTED_MODULE_13__["APP_DATE_FORMATS"]
                }
            ],
            entryComponents: [
                _service_appointment_appointment_component__WEBPACK_IMPORTED_MODULE_21__["AppointmentComponent"],
                _service_image_viewer_client_image_viewer_client_component__WEBPACK_IMPORTED_MODULE_23__["ImageViewerClientComponent"]
            ]
        })
    ], ClientModule);
    return ClientModule;
}());



/***/ }),

/***/ "./src/app/modules/client/search-page/search-page.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/modules/client/search-page/search-page.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-page-wrapper {\n  height: 100%;\n  width: 100%;\n  overflow-y: scroll;\n  background-color: #f2f3f6;\n}\n\n.header-section {\n  height: 750px !important;\n  background-image: url(\"/images/Backgrounds/road-side1.jpg\");\n  background-position: bottom;\n  background-size: cover;\n  position: relative;\n}\n\n.header-section div {\n  z-index: 2;\n}\n\n.header-section .header-settings {\n  color: white;\n  cursor: pointer;\n}\n\n.header-section .header-content {\n  margin-top: 200px;\n}\n\n.header-section .header-search {\n  background: white;\n  border-radius: 10px;\n  padding: 10px 20px 0 20px;\n}\n\n.header-section .header-search .header-search-city {\n  position: relative;\n  padding-right: 20px;\n}\n\n.header-section .header-search .header-search-city::before {\n  content: \"\";\n  border: 1px solid #cbcddb;\n  position: absolute;\n  top: 20%;\n  height: 100%;\n  bottom: 30%;\n  height: 50%;\n  right: 0;\n}\n\n.header-section .header-slogan {\n  color: white;\n}\n\n.header-section::before {\n  content: \"\";\n  bottom: 0;\n  left: 50%;\n  width: 78.4%;\n  height: 83.2%;\n  position: absolute;\n  -webkit-transform: translate3d(-50%, 0, 0);\n  transform: translate3d(-50%, 0, 0);\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA5YAAAJrAgMAAADmHuSeAAAACVBMVEVMaXH////////OZTV/AAAAA3RSTlMAZjToZfxKAAAHQElEQVR42u3dS5aqMBhFYWDZSNMhZCjoyKBGfgWv5dsCFUnw24tV1Si1EXbF8+dFUeDDbFbrTfdTSyAXYi/tevdTWyB9V+vd71Wn6/6qtQrS72AvLq2C9KPsxRW0ClJmfUNatRhSZkVaZBMJtiGSFtMSdi7Ft3St9SESNEVsb0sbtTfeWijtTHv+08rbll5emh3vLpSeH0odKG2t4fFuaZ8dSo2bYdIaqsW7q/vu2r7xX0CsxYSB9uz6ed+/wPXVaH2M1bWIzd/f5uP6w2qMtGItnuhj63fbVZIW8wWD5+wa/pmWH2DCMn+MYO3gz3QDMGlPeyZteM8/gioM00r7PyR0OaE8SnstnkCLaWlHSxv3O7yqw0qYS/HCmA90AzB9T3s6PrZ/+/aFnlYhhmkLsf0E2VkZdbu3JC2SigdnUSEcpd32waAmLaanfEHa7XEtd/ezPazrlmmRrLS/GxCa8wnfMe+NbgFG8wZpL+cLWtJiWmaVVqZFAtJuxsWDLp+4B5hZ2idGIfrOuXYrkI+0pnQxFtKCtE+HYWAg5UpCQG6QFrmxJS0yI25IC4WYWgxfU4iRFvlJaykChlGlI61jlpGftNHtAGkh08q0MOQl02I8kbTIiYR0fShtcOoXkpX2tpylGV4kWIKdLj+4eJZZUKMhzTR7fC5JeXZ0bRR3kXI26HvUeLriq1KjIe1scNblhm79TEtapJ0NHh+h4J59O2GdgbSWiOOEapWftP9Pbw7R7ftO2gyl3SeEsh/LrdzCryNLY/cJoerHbFv3UKDN5fodqTPXYIQ2m+sk2HRRwb0UaLO6QmHw9nvYLENag7eqsFXG1RkE2vyqMyyacnnShn1Qd28F2pyuprCiRqAVEkBa0oK0zkwg7QKu6O6SNsNyDEYPzDIgBaKeFnpa6xCgp1WIwZAX8mZlcgGkTWyvLmRa0mJuY+uljh64t7pZ0woQaPW0eIpqwdJ2K8BNLiyQcsnSmhFbJhvSgrTmcGHowAPIcMais4HbS9oMpeWtoYPcpI2kXR7twqW1bcHQgQUzIK1aDKow0pKWtDB6YH4BpCXt9yEegLT2L4C0jkXCFQufFLM6US12+2FzCjFklBBi/+UbSYsMpM1l6MxZXrw9XGXIZbzX3V2wtKMqsuvqJhqnxUcJ3c2tXjOhJS0+2tMWP3t1X9CgXq1bmRaf62kP4g3wdnv/Q0rSIsmirL7/1oq0mIf145zw4J1NX6ClstHGqoPvIrYh3hkQiI+zcRLDX27gF1Neptn4xLtsZsQc0sZR76pIi9mLsneXchbQYtJw+5QD66YgLWbjWQcsoMVstOF52wVaZJcrrOkCaaVZTB2GSQvSCrSYElUYSEtaLFNamRakxRfh4YzIjmAlLfKjVYghN0qZFmItaUFa4JL4WW9j6/mMyKezrYtIV+RVizEWn5G2NKeA9KjsVkBuPJ5faEiLBAl/nLX1FmMr7YxPjR7UBmaRW6atQ3TEAfKKB5vX19w6exYT8FDaaCEicou1xYvB4Efz4sOd7QvbzK2bxSzSbguDBshJ2vbpQqwrvszb4vPSFk8XYtoTuUmrOTGTtEU/HXb8UzTGhYSljU2IuzKq2f/tf1Wl/kJSxEfWhaIa8/RzrYkJWd2S9uTvP8ftBrIBkqBd3YoHJy8o+xzbPxeyMKGABLrZrsxvwu7bvMsD5c2uMuyuvo8ddoDS1kYwTC1t3382vbTHtV5XLxy+Tazo+2Rgyp72t/J6FEqVYEhQ2gfiVSMWgfdxAvi4tBeh9I80e6J0rUkxNWHoV/ydeNANiG1CsT2ZurV7ERMzeD/X/U002341V72KZf9CnS3mkPb2S8urTeXtqpvkbfe966q/gkIMc2Ta4qG0Yd/B7nJsrA4hdiftdtVdwCzSbh90y+HU4bgf5t17u+ufS9JiJmmHh9LqsOC273gNduETVK/NDlSXMThqUqRThf3VUcd+9lYVhoSqsHv8qt50tpMWSVVhf/XV3YkcZsTwcWlHWteGs7MRZFpMzdVqw1iOsa66Pg5095maFRMSr85FHNdPtjYsYNZssA0jT+MMdxYtmF/Ap7LBduTT6B4cCqptMRGXibQY8+Xu8GQkEA/qMT3kw603HsiIj/W0w/ljx40BBCQnbfhzN+654WFtLwNep92fOvvU7G07eDdueRJCtDle5IXliENO+IyHAYqjtIIuXqS88aSwYZ3hsHMPmot/DS2Ot0rb97Fx4HRYOeyQzyqcRd9ai+ONVVj4tTEOfmMcEGvPXkNavIOrNV0DFx6EPp16wA1mSgjb31O+i2LsmgHSYg7iWX20Gu08aZFrKnYwOPLpqB+P2RYn0xCN1kJKwfjRQ8T2JzZrJmQkrXO9kFGy1TRIFifYYyHSahckTJANkH9PGyJpkVMh1i+/abQLEqY0XYu8pdUeyExaZyIhO2llA2QnrfoL2Y0eaA1kQDB1i+wwC4b8+FGFIdvOVkMgI2QD3OUfn4Oe2Z28hH8AAAAASUVORK5CYII=);\n  background-size: contain;\n}\n\n.header-section::after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  opacity: 0.25;\n  position: absolute;\n  background: linear-gradient(0deg, #282d47, #333a5a);\n}\n\n.logo-image {\n  height: 100px;\n}\n\n.counter-section {\n  position: relative;\n}\n\n.counter-section .counter-container {\n  position: absolute;\n  width: 300px;\n  top: -150px;\n  background-color: white;\n  height: 300px;\n  z-index: 3;\n  border-radius: 10px;\n}\n\n.counter-section .counter-container .counter-header {\n  height: 150px;\n  background: #5d6fd3;\n  border-radius: 10px;\n  padding: 0px 5px 0 5px;\n  color: white;\n  font-size: 40px;\n}\n\n.counter-section .counter-container .counter-body {\n  position: relative;\n  height: 150px;\n}\n\n.counter-section .counter-container .counter-body .counter-body-numbers {\n  font-size: 40px;\n  color: #5263c3;\n}\n\n.counter-section .counter-container .counter-body .counter-body-label {\n  font-size: 30px;\n  font-weight: 600;\n}\n\n.counter-section .counter-container .counter-body::before {\n  content: \"\";\n  top: -40px;\n  width: 0;\n  height: 0;\n  position: absolute;\n  left: 0;\n  border-left: 150px solid #fff;\n  border-top: 40px solid transparent;\n  border-bottom: 0 solid transparent;\n}\n\n.counter-section .counter-container .counter-body::after {\n  content: \"\";\n  top: -40px;\n  width: 0;\n  height: 0;\n  position: absolute;\n  right: 0;\n  border-right: 150px solid #fff;\n  border-top: 40px solid transparent;\n  border-bottom: 0 solid transparent;\n}\n\n.after-counter {\n  margin-top: 200px;\n}\n\n.section-title {\n  position: relative;\n  padding: 25px 0;\n  margin-bottom: 30px;\n}\n\n.section-title::before {\n  content: \"\";\n  width: 80px;\n  height: 4px;\n  left: 0;\n  bottom: 0;\n  position: absolute;\n  background: linear-gradient(90deg, #5d6fd3 0, #4a5dc4);\n}\n\n.last-section {\n  margin-bottom: 50px;\n}\n\n.service-categories-types {\n  padding: 10px;\n  margin-bottom: 25px;\n  border: 1px solid darkgrey;\n  border-radius: 10px;\n}\n\n.service-categories-types-selected {\n  margin-bottom: 25px;\n}\n\n.service-categories-types-selected span {\n  color: #5263c3;\n}\n\n.service-categories-items span {\n  text-align: center;\n  padding: 10px;\n  height: 60px;\n  background: #e4e6ec;\n  border-radius: 5px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jbGllbnQvc2VhcmNoLXBhZ2UvQzpcXFVzZXJzXFxhbmRyZWkuZnVuYXJ1XFxEZXNrdG9wXFxMaWNlbnRhXFxlU2VydmljZVxcZVNlcnZpY2VcXENsaWVudEFwcC9zcmNcXGFwcFxcbW9kdWxlc1xcY2xpZW50XFxzZWFyY2gtcGFnZVxcc2VhcmNoLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvY2xpZW50L3NlYXJjaC1wYWdlL3NlYXJjaC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDQUY7O0FERUE7RUFLRSx3QkFBQTtFQUNBLDJEQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDSEY7O0FETEU7RUFDRSxVQUFBO0FDT0o7O0FERUU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREdFO0VBQ0UsaUJBQUE7QUNESjs7QURJRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ0ZKOztBREtJO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQ0hOOztBRE1JO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBQ0pOOztBRFFFO0VBQ0UsWUFBQTtBQ05KOztBRGFBO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0NBQUE7RUFDQSxxbEZBQUE7RUFFQSx3QkFBQTtBQ1ZGOztBRGFBO0VBQ0UsV0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBSUEsbURBQUE7QUNWRjs7QURhQTtFQUNFLGFBQUE7QUNWRjs7QURhQTtFQUNFLGtCQUFBO0FDVkY7O0FEWUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDVko7O0FEWUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNWTjs7QURhSTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQ1hOOztBRGFNO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNYUjs7QURjTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ1pSOztBRGdCSTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSw2QkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7QUNkTjs7QURpQkk7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtDQUFBO0FDZk47O0FEb0JBO0VBQ0UsaUJBQUE7QUNqQkY7O0FEb0JBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNqQkY7O0FEb0JBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUlBLHNEQUFBO0FDakJGOztBRG9CQTtFQUNFLG1CQUFBO0FDakJGOztBRHdCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7QUNyQkY7O0FEd0JBO0VBQ0UsbUJBQUE7QUNyQkY7O0FEdUJFO0VBQ0UsY0FBQTtBQ3JCSjs7QUQwQkE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDdkJGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jbGllbnQvc2VhcmNoLXBhZ2Uvc2VhcmNoLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnNlYXJjaC1wYWdlLXdyYXBwZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjNmNjtcclxufVxyXG4uaGVhZGVyLXNlY3Rpb24ge1xyXG4gIGRpdiB7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuXHJcbiAgaGVpZ2h0OiA3NTBweCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9pbWFnZXMvQmFja2dyb3VuZHMvcm9hZC1zaWRlMS5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAuaGVhZGVyLXNldHRpbmdzIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC5oZWFkZXItY29udGVudCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMDBweDtcclxuICB9XHJcblxyXG4gIC5oZWFkZXItc2VhcmNoIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweCAwIDIwcHg7XHJcblxyXG5cclxuICAgIC5oZWFkZXItc2VhcmNoLWNpdHkge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6MjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuaGVhZGVyLXNlYXJjaC1jaXR5OjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2JjZGRiO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMjAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJvdHRvbTogMzAlO1xyXG4gICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyLXNsb2dhbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG59XHJcblxyXG4gXHJcblxyXG5cclxuLmhlYWRlci1zZWN0aW9uOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB3aWR0aDogNzguNCU7XHJcbiAgaGVpZ2h0OiA4My4yJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsMCwwKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsMCwwKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUE1WUFBQUpyQWdNQUFBRG1IdVNlQUFBQUNWQk1WRVZNYVhILy8vLy8vLy9PWlRWL0FBQUFBM1JTVGxNQVpqVG9aZnhLQUFBSFFFbEVRVlI0MnUzZFM1YXFNQmhGWVdEWlNOTWhaQ2pveUtCR2ZnV3Y1ZHNDRlVudzI0dFYxU2kxRVhiRjgrZEZVZUREYkZiclRmZFRTeUFYWWkvdGV2ZFRXeUI5Vit2ZDcxV242LzZxdFFyUzcyQXZMcTJDOUtQc3hSVzBDbEptZlVOYXRSaFNaa1ZhWkJNSnRpR1NGdE1TZGk3RnQzU3Q5U0VTTkVWc2Iwc2J0VGZlV2lqdFRIdiswOHJibGw1ZW1oM3ZMcFNlSDBvZEtHMnQ0ZkZ1YVo4ZFNvMmJZZElhcXNXN3EvdnUycjd4WDBDc3hZU0I5dXo2ZWQrL3dQWFZhSDJNMWJXSXpkL2Y1dVA2dzJxTXRHSXRudWhqNjNmYlZaSVc4d1dENSt3YS9wbVdIMkRDTW4rTVlPM2d6M1FETUdsUGV5WnRlTTgvZ2lvTTAwcjdQeVIwT2FFOFNuc3Rua0NMYVdsSFN4djNPN3lxdzBxWVMvSENtQTkwQXpCOVQzczZQclovKy9hRm5sWWhobWtMc2YwRTJWa1pkYnUzSkMyU2lnZG5VU0VjcGQzMndhQW1MYWFuZkVIYTdYRXRkL2V6UGF6cmxtbVJyTFMvR3hDYTh3bmZNZStOYmdGRzh3WnBMK2NMV3RKaVdtYVZWcVpGQXRKdXhzV0RMcCs0QjVoWjJpZEdJZnJPdVhZcmtJKzBwblF4RnRLQ3RFK0hZV0FnNVVwQ1FHNlFGcm14SlMweUkyNUlDNFdZV2d4ZlU0aVJGdmxKYXlrQ2hsR2xJNjFqbHBHZnROSHRBR2toMDhxME1PUWwwMkk4a2JUSWlZUjBmU2h0Y09vWGtwWDJ0cHlsR1Y0a1dJS2RMais0ZUpaWlVLTWh6VFI3ZkM1SmVYWjBiUlIza1hJMjZIdlVlTHJpcTFLakllMXNjTmJsaG03OVRFdGFwSjBOSGgraDRKNTlPMkdkZ2JTV2lPT0VhcFdmdFA5UGJ3N1I3ZnRPMmd5bDNTZUVzaC9McmR6Q3J5TkxZL2NKb2VySGJGdjNVS0RONWZvZHFUUFhZSVEybStzazJIUlJ3YjBVYUxPNlFtSHc5bnZZTEVOYWc3ZXFzRlhHMVJrRTJ2eXFNeXlhY25uU2huMVFkMjhGMnB5dXByQ2lScUFWRWtCYTBvSzB6a3dnN1FLdTZPNlNOc055REVZUHpESWdCYUtlRm5wYTZ4Q2dwMVdJd1pBWDhtWmxjZ0drVFd5dkxtUmEwbUp1WSt1bGpoNjR0N3BaMHdvUWFQVzBlSXBxd2RKMks4Qk5MaXlRY3NuU21oRmJKaHZTZ3JUbWNHSG93QVBJY01haXM0SGJTOW9NcGVXdG9ZUGNwSTJrWFI3dHdxVzFiY0hRZ1FVeklLMWFES293MHBLV3REQjZZSDRCcENYdDl5RWVnTFQyTDRDMGprWENGUXVmRkxNNlVTMTIrMkZ6Q2pGa2xCQmkvK1ViU1lzTXBNMWw2TXhaWHJ3OVhHWElaYnpYM1Yyd3RLTXFzdXZxSmhxbnhVY0ozYzJ0WGpPaEpTMCsydE1XUDN0MVg5Q2dYcTFibVJhZjYya1A0ZzN3ZG52L1EwclNJc21pckw3LzFvcTBtSWYxNDV6dzRKMU5YNkNsc3RIR3FvUHZJclloM2hrUWlJK3pjUkxEWDI3Z0YxTmVwdG40eEx0c1pzUWMwc1pSNzZwSWk5bUxzbmVYY2hiUVl0SncrNVFENjZZZ0xXYmpXUWNzb01Wc3RPRjUyd1ZhWkpjcnJPa0NhYVZaVEIyR1NRdlNDclNZRWxVWVNFdGFMRk5hbVJha3hSZmg0WXpJam1BbExmS2pWWWdoTjBxWkZtSXRhVUZhNEpMNFdXOWo2L21NeUtlenJZdElWK1JWaXpFV241RzJOS2VBOUtqc1ZrQnVQSjVmYUVpTEJBbC9uTFgxRm1NcjdZeFBqUjdVQm1hUlc2YXRRM1RFQWZLS0I1dlgxOXc2ZXhZVDhGRGFhQ0VpY291MXhZdkI0RWZ6NHNPZDdRdmJ6SzJieFN6U2JndURCc2hKMnZicFFxd3J2c3piNHZQU0ZrOFhZdG9UdVVtck9UR1R0RVUvSFhiOFV6VEdoWVNsalUySXV6S3EyZi90ZjFXbC9rSlN4RWZXaGFJYTgvUnpyWWtKV2QyUzl1VHZQOGZ0QnJJQmtxQmQzWW9ISnk4byt4emJQeGV5TUtHQUJMclpyc3h2d3U3YnZNc0Q1YzJ1TXV5dXZvOGRkb0RTMWtZd1RDMXQzMzgydmJUSHRWNVhMeHkrVGF6bysyUmd5cDcydC9KNkZFcVZZRWhRMmdmaVZTTVdnZmR4QXZpNHRCZWg5STgwZTZKMHJVa3hOV0hvVi95ZGVOQU5pRzFDc1QyWnVyVjdFUk16ZUQvWC9VMDAyMzQxVjcyS1pmOUNuUzNta1BiMlM4dXJUZVh0cXB2a2JmZTk2NnEvZ2tJTWMyVGE0cUcwWWQvQjduSnNyQTRoZGlmdGR0VmR3Q3pTYmg5MHkrSFU0YmdmNXQxN3UrdWZTOUppSm1tSGg5THFzT0MyNzNnTmR1RVRWSy9ORGxTWE1UaHFVcVJUaGYzVlVjZCs5bFlWaG9TcXNIdjhxdDUwdHBNV1NWVmhmL1hWM1lrY1pzVHdjV2xIV3RlR3M3TVJaRnBNemRWcXcxaU9zYTY2UGc1MDk1bWFGUk1Tcjg1RkhOZFB0allzWU5ac3NBMGpUK01NZHhZdG1GL0FwN0xCZHVUVDZCNGNDcXB0TVJHWGliUVk4K1h1OEdRa0VBL3FNVDNrdzYwM0hzaUlqL1cwdy9sang0MEJCQ1FuYmZoek4rNjU0V0Z0THdOZXA5MmZPdnZVN0cwN2VEZHVlUkpDdERsZTVJWGxpRU5PK0l5SEFZcWp0SUl1WHFTODhhU3dZWjNoc0hNUG1vdC9EUzJPdDByYjk3Rng0SFJZT2V5UXp5cWNSZDlhaStPTlZWajR0VEVPZm1NY0VHdlBYa05hdklPck5WMERGeDZFUHAxNndBMW1TZ2piMzFPK2kyTHNtZ0hTWWc3aVdYMjBHdTA4YVpGcktuWXdPUExwcUIrUDJSWW4weENOMWtKS3dmalJROFQySnpackptUWtyWE85a0ZHeTFUUklGaWZZWXlIU2FoY2tUSkFOa0g5UEd5SnBrVk1oMWkrL2FiUUxFcVkwWFl1OHBkVWV5RXhhWnlJaE8ybGxBMlFucmZvTDJZMGVhQTFrUURCMWkrd3dDNGI4K0ZHRklkdk9Wa01nSTJRRDNPVWZuNE9lMloyOGhIOEFBQUFBU1VWT1JLNUNZSUk9KTtcclxuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbn1cclxuXHJcbi5oZWFkZXItc2VjdGlvbjo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3BhY2l0eTogLjI1O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhcixsZWZ0IGJvdHRvbSxsZWZ0IHRvcCxmcm9tKCMyODJkNDcpLHRvKCMzMzNhNWEpKTtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChib3R0b20sIzI4MmQ0NywjMzMzYTVhKTtcclxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoYm90dG9tLCMyODJkNDcgMCwjMzMzYTVhIDEwMCUpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCMyODJkNDcsIzMzM2E1YSk7XHJcbn1cclxuXHJcbi5sb2dvLWltYWdle1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbi5jb3VudGVyLXNlY3Rpb24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgLmNvdW50ZXItY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIHRvcDogLTE1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgei1pbmRleDogMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gICAgLmNvdW50ZXItaGVhZGVyIHtcclxuICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgYmFja2dyb3VuZDogIzVkNmZkMztcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgcGFkZGluZzogMHB4IDVweCAwIDVweDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvdW50ZXItYm9keSB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgaGVpZ2h0OjE1MHB4O1xyXG5cclxuICAgICAgLmNvdW50ZXItYm9keS1udW1iZXJzIHtcclxuICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgY29sb3I6ICM1MjYzYzM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb3VudGVyLWJvZHktbGFiZWx7XHJcbiAgICAgICAgZm9udC1zaXplOjMwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvdW50ZXItYm9keTo6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgdG9wOiAtNDBweDtcclxuICAgICAgd2lkdGg6IDA7XHJcbiAgICAgIGhlaWdodDogMDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBib3JkZXItbGVmdDogMTUwcHggc29saWQgI2ZmZjtcclxuICAgICAgYm9yZGVyLXRvcDogNDBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuXHJcbiAgICAuY291bnRlci1ib2R5OjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIHRvcDogLTQwcHg7XHJcbiAgICAgIHdpZHRoOiAwO1xyXG4gICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGJvcmRlci1yaWdodDogMTUwcHggc29saWQgI2ZmZjtcclxuICAgICAgYm9yZGVyLXRvcDogNDBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5hZnRlci1jb3VudGVye1xyXG4gIG1hcmdpbi10b3A6IDIwMHB4O1xyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZXtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICBwYWRkaW5nOiAyNXB4IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTozMHB4O1xyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGhlaWdodDogNHB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhcixsZWZ0IHRvcCxyaWdodCB0b3AsZnJvbSgjNWQ2ZmQzKSx0bygjNGE1ZGM0KSk7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwjNWQ2ZmQzLCM0YTVkYzQpO1xyXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCM1ZDZmZDMgMCwjNGE1ZGM0IDEwMCUpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywjNWQ2ZmQzIDAsIzRhNWRjNCk7XHJcbn1cclxuXHJcbi5sYXN0LXNlY3Rpb257XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLnNlcnZpY2UtY2F0ZWdvcmllcyB7XHJcblxyXG59XHJcblxyXG4uc2VydmljZS1jYXRlZ29yaWVzLXR5cGVze1xyXG4gIHBhZGRpbmc6MTBweDtcclxuICBtYXJnaW4tYm90dG9tOjI1cHg7XHJcbiAgYm9yZGVyOjFweCBzb2xpZCBkYXJrZ3JleTtcclxuICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbn1cclxuXHJcbi5zZXJ2aWNlLWNhdGVnb3JpZXMtdHlwZXMtc2VsZWN0ZWQge1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgY29sb3I6ICM1MjYzYzM7XHJcbiAgICBcclxuICB9XHJcbn1cclxuXHJcbi5zZXJ2aWNlLWNhdGVnb3JpZXMtaXRlbXMgc3BhbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGJhY2tncm91bmQ6ICNlNGU2ZWM7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuIiwiLnNlYXJjaC1wYWdlLXdyYXBwZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYzZjY7XG59XG5cbi5oZWFkZXItc2VjdGlvbiB7XG4gIGhlaWdodDogNzUwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2ltYWdlcy9CYWNrZ3JvdW5kcy9yb2FkLXNpZGUxLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaGVhZGVyLXNlY3Rpb24gZGl2IHtcbiAgei1pbmRleDogMjtcbn1cbi5oZWFkZXItc2VjdGlvbiAuaGVhZGVyLXNldHRpbmdzIHtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaGVhZGVyLXNlY3Rpb24gLmhlYWRlci1jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMjAwcHg7XG59XG4uaGVhZGVyLXNlY3Rpb24gLmhlYWRlci1zZWFyY2gge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMTBweCAyMHB4IDAgMjBweDtcbn1cbi5oZWFkZXItc2VjdGlvbiAuaGVhZGVyLXNlYXJjaCAuaGVhZGVyLXNlYXJjaC1jaXR5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuLmhlYWRlci1zZWN0aW9uIC5oZWFkZXItc2VhcmNoIC5oZWFkZXItc2VhcmNoLWNpdHk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYmNkZGI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm90dG9tOiAzMCU7XG4gIGhlaWdodDogNTAlO1xuICByaWdodDogMDtcbn1cbi5oZWFkZXItc2VjdGlvbiAuaGVhZGVyLXNsb2dhbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmhlYWRlci1zZWN0aW9uOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDc4LjQlO1xuICBoZWlnaHQ6IDgzLjIlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAwLCAwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAwLCAwKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBNVlBQUFKckFnTUFBQURtSHVTZUFBQUFDVkJNVkVWTWFYSC8vLy8vLy8vT1pUVi9BQUFBQTNSU1RsTUFaalRvWmZ4S0FBQUhRRWxFUVZSNDJ1M2RTNWFxTUJoRllXRFpTTk1oWkNqb3lLQkdmZ1d2NWRzQ0ZVbncyNHRWMVNpMUVYYkY4K2RGVWVERGJGYnJUZmRUU3lBWFlpL3RldmRUV3lCOVYrdmQ3MVduNi82cXRRclM3MkF2THEyQzlLUHN4UlcwQ2xKbWZVTmF0UmhTWmtWYVpCTUp0aUdTRnRNU2RpN0Z0M1N0OVNFU05FVnNiMHNidFRmZVdpanRUSHYrMDhyYmxsNWVtaDN2THBTZUgwb2RLRzJ0NGZGdWFaOGRTbzJiWWRJYXFzVzdxL3Z1MnI3eFgwQ3N4WVNCOXV6NmVkKy93UFhWYUgyTTFiV0l6ZC9mNXVQNncycU10R0l0bnVoajYzZmJWWklXOHdXRDUrd2EvcG1XSDJEQ01uK01ZTzNnejNRRE1HbFBleVp0ZU04L2dpb00wMHI3UHlSME9hRThTbnN0bmtDTGFXbEhTeHYzTzd5cXcwcVlTL0hDbUE5MEF6QjlUM3M2UHJaLysvYUZubFloaG1rTHNmMEUyVmtaZGJ1M0pDMlNpZ2RuVVNFY3BkMzJ3YUFtTGFhbmZFSGE3WEV0ZC9lelBhenJsbW1SckxTL0d4Q2E4d25mTWUrTmJnRkc4d1pwTCtjTFd0SmlXbWFWVnFaRkF0SnV4c1dETHArNEI1aFoyaWRHSWZyT3VYWXJrSSswcG5ReEZ0S0N0RStIWVdBZzVVcENRRzZRRnJteEpTMHlJMjVJQzRXWVdneGZVNGlSRnZsSmF5a0NobEdsSTYxamxwR2Z0Tkh0QUdraDA4cTBNT1FsMDJJOGtiVElpWVIwZlNodGNPb1hrcFgydHB5bEdWNGtXSUtkTGorNGVKWlpVS01oelRSN2ZDNUplWFowYlJSM2tYSTI2SHZVZUxyaXExS2pJZTFzY05ibGhtNzlURXRhcEowTkhoK2g0SjU5TzJHZGdiU1dpT09FYXBXZnRQOVBidzdSN2Z0TzJneWwzU2VFc2gvTHJkekNyeU5MWS9jSm9lckhiRnYzVUtETjVmb2RxVFBYWUlRMm0rc2sySFJSd2IwVWFMTzZRbUh3OW52WUxFTmFnN2Vxc0ZYRzFSa0UydnlxTXl5YWNublNobjFRZDI4RjJweXVwckNpUnFBVkVrQmEwb0swemt3ZzdRS3U2TzZTTnNOeURFWVB6RElnQmFLZUZucGE2eENncDFXSXdaQVg4bVpsY2dHa1RXeXZMbVJhMG1KdVkrdWxqaDY0dDdwWjB3b1FhUFcwZUlwcXdkSjJLOEJOTGl5UWNzblNtaEZiSmh2U2dyVG1jR0hvd0FQSWNNYWlzNEhiUzlvTXBlV3RvWVBjcEkya1hSN3R3cVcxYmNIUWdRVXpJSzFhREtvdzBwS1d0REI2WUg0QnBDWHQ5eUVlZ0xUMkw0QzBqa1hDRlF1ZkZMTTZVUzEyKzJGekNqRmtsQkJpLytVYlNZc01wTTFsNk14WlhydzlYR1hJWmJ6WDNWMnd0S01xc3V2cUpocW54VWNKM2MydFhqT2hKUzArMnRNV1AzdDFYOUNnWHExYm1SYWY2MmtQNGczd2Rudi9RMHJTSXNtaXJMNy8xb3EwbUlmMTQ1enc0SjFOWDZDbHN0SEdxb1B2SXJZaDNoa1FpSSt6Y1JMRFgyN2dGMU5lcHRuNHhMdHNac1FjMHNaUjc2cElpOW1Mc25lWGNoYlFZdEp3KzVRRDY2WWdMV2JqV1Fjc29NVnN0T0Y1MndWYVpKY3JyT2tDYWFWWlRCMkdTUXZTQ3JTWUVsVVlTRXRhTEZOYW1SYWt4UmZoNFl6SWptQWxMZktqVllnaE4wcVpGbUl0YVVGYTRKTDRXVzlqNi9tTXlLZXpyWXRJVitSVml6RVduNUcyTktlQTlLanNWa0J1UEo1ZmFFaUxCQWwvbkxYMUZtTXI3WXhQalI3VUJtYVJXNmF0UTNURUFmS0tCNXZYMTl3NmV4WVQ4RkRhYUNFaWNvdTF4WXZCNEVmejRzT2Q3UXZieksyYnhTelNiZ3VEQnNoSjJ2YnBRcXdydnN6YjR2UFNGazhYWXRvVHVVbXJPVEdUdEVVL0hYYjhVelRHaFlTbGpVMkl1ektxMmYvdGYxV2wva0pTeEVmV2hhSWE4L1J6cllrSldkMlM5dVR2UDhmdEJySUJrcUJkM1lvSEp5OG8reHpiUHhleU1LR0FCTHJacnN4dnd1N2J2TXNENWMydU11eXV2bzhkZG9EUzFrWXdUQzF0MzM4MnZiVEh0VjVYTHh5K1Rhem8rMlJneXA3MnQvSjZGRXFWWUVoUTJnZmlWU01XZ2ZkeEF2aTR0QmVoOUk4MGU2SjByVWt4TldIb1YveWRlTkFOaUcxQ3NUMlp1clY3RVJNemVEL1gvVTAwMjM0MVY3MktaZjlDblMzbWtQYjJTOHVyVGVYdHFwdmtiZmU5NjZxL2drSU1jMlRhNHFHMFlkL0I3bkpzckE0aGRpZnRkdFZkd0N6U2JoOTB5K0hVNGJnZjV0MTd1K3VmUzlKaUptbUhoOUxxc09DMjczZ05kdUVUVksvTkRsU1hNVGhxVXFSVGhmM1ZVY2QrOWxZVmhvU3FzSHY4cXQ1MHRwTVdTVlZoZi9YVjNZa2Nac1R3Y1dsSFd0ZUdzN01SWkZwTXpkVnF3MWlPc2E2NlBnNTA5NW1hRlJNU3I4NUZITmRQdGpZc1lOWnNzQTBqVCtNTWR4WXRtRi9BcDdMQmR1VFQ2QjRjQ3FwdE1SR1hpYlFZOCtYdThHUWtFQS9xTVQza3c2MDNIc2lJai9XMHcvbGp4NDBCQkNRbmJmaHpOKzY1NFdGdEx3TmVwOTJmT3Z2VTdHMDdlRGR1ZVJKQ3REbGU1SVhsaUVOTytJeUhBWXFqdElJdVhxUzg4YVN3WVozaHNITVBtb3QvRFMyT3QwcmI5N0Z4NEhSWU9leVF6eXFjUmQ5YWkrT05WVmo0dFRFT2ZtTWNFR3ZQWGtOYXZJT3JOVjBERng2RVBwMTZ3QTFtU2dqYjMxTytpMkxzbWdIU1lnN2lXWDIwR3UwOGFaRnJLbll3T1BMcHFCK1AyUlluMHhDTjFrSkt3ZmpSUThUMkp6WnJKbVFrclhPOWtGR3kxVFJJRmlmWVl5SFNhaGNrVEpBTmtIOVBHeUpwa1ZNaDFpKy9hYlFMRXFZMFhZdThwZFVleUV4YVp5SWhPMmxsQTJRbnJmb0wyWTBlYUExa1FEQjFpK3d3QzRiOCtGR0ZJZHZPVmtNZ0kyUUQzT1VmbjRPZTJaMjhoSDhBQUFBQVNVVk9SSzVDWUlJPSk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG5cbi5oZWFkZXItc2VjdGlvbjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9wYWNpdHk6IDAuMjU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCBsZWZ0IHRvcCwgZnJvbSgjMjgyZDQ3KSwgdG8oIzMzM2E1YSkpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChib3R0b20sICMyODJkNDcsICMzMzNhNWEpO1xuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoYm90dG9tLCAjMjgyZDQ3IDAsICMzMzNhNWEgMTAwJSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjMjgyZDQ3LCAjMzMzYTVhKTtcbn1cblxuLmxvZ28taW1hZ2Uge1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4uY291bnRlci1zZWN0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNvdW50ZXItc2VjdGlvbiAuY291bnRlci1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzMDBweDtcbiAgdG9wOiAtMTUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDMwMHB4O1xuICB6LWluZGV4OiAzO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmNvdW50ZXItc2VjdGlvbiAuY291bnRlci1jb250YWluZXIgLmNvdW50ZXItaGVhZGVyIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYmFja2dyb3VuZDogIzVkNmZkMztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMHB4IDVweCAwIDVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDQwcHg7XG59XG4uY291bnRlci1zZWN0aW9uIC5jb3VudGVyLWNvbnRhaW5lciAuY291bnRlci1ib2R5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuLmNvdW50ZXItc2VjdGlvbiAuY291bnRlci1jb250YWluZXIgLmNvdW50ZXItYm9keSAuY291bnRlci1ib2R5LW51bWJlcnMge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiAjNTI2M2MzO1xufVxuLmNvdW50ZXItc2VjdGlvbiAuY291bnRlci1jb250YWluZXIgLmNvdW50ZXItYm9keSAuY291bnRlci1ib2R5LWxhYmVsIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmNvdW50ZXItc2VjdGlvbiAuY291bnRlci1jb250YWluZXIgLmNvdW50ZXItYm9keTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgdG9wOiAtNDBweDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3JkZXItbGVmdDogMTUwcHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXRvcDogNDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi5jb3VudGVyLXNlY3Rpb24gLmNvdW50ZXItY29udGFpbmVyIC5jb3VudGVyLWJvZHk6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgdG9wOiAtNDBweDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm9yZGVyLXJpZ2h0OiAxNTBweCBzb2xpZCAjZmZmO1xuICBib3JkZXItdG9wOiA0MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAwIHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4uYWZ0ZXItY291bnRlciB7XG4gIG1hcmdpbi10b3A6IDIwMHB4O1xufVxuXG4uc2VjdGlvbi10aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMjVweCAwO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uc2VjdGlvbi10aXRsZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogNHB4O1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGZyb20oIzVkNmZkMyksIHRvKCM0YTVkYzQpKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgIzVkNmZkMywgIzRhNWRjNCk7XG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjNWQ2ZmQzIDAsICM0YTVkYzQgMTAwJSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzVkNmZkMyAwLCAjNGE1ZGM0KTtcbn1cblxuLmxhc3Qtc2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi5zZXJ2aWNlLWNhdGVnb3JpZXMtdHlwZXMge1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZ3JleTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnNlcnZpY2UtY2F0ZWdvcmllcy10eXBlcy1zZWxlY3RlZCB7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4uc2VydmljZS1jYXRlZ29yaWVzLXR5cGVzLXNlbGVjdGVkIHNwYW4ge1xuICBjb2xvcjogIzUyNjNjMztcbn1cblxuLnNlcnZpY2UtY2F0ZWdvcmllcy1pdGVtcyBzcGFuIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQ6ICNlNGU2ZWM7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/client/search-page/search-page.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/client/search-page/search-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: SearchPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageComponent", function() { return SearchPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_nomenclatoare_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/nomenclatoare.service */ "./src/app/core/nomenclatoare.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _search_page_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-page.service */ "./src/app/modules/client/search-page/search-page.service.ts");
/* harmony import */ var src_app_core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_izitoast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-izitoast */ "./node_modules/ng2-izitoast/ng2-izitoast.es5.js");









var SearchPageComponent = /** @class */ (function () {
    function SearchPageComponent(nomenclatoareService, searchPageService, auth, router, iziToast) {
        this.nomenclatoareService = nomenclatoareService;
        this.searchPageService = searchPageService;
        this.auth = auth;
        this.router = router;
        this.iziToast = iziToast;
        this.user = null;
        this.serviceCount = 0;
        this.vulcanizareCount = 0;
        this.spalatoriiCount = 0;
        this.cityCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.typeCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.brandCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.selectedCity = null;
    }
    SearchPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (window.navigator.geolocation) {
            var x = void 0;
            window.navigator.geolocation.getCurrentPosition(function (e) {
                _this.longitude = e.coords.longitude;
                _this.latitude = e.coords.latitude;
                _this.selectedCity = {
                    cityId: -1,
                    judet: "Locatie actuala",
                    name: "Locatie actuala",
                    judetAuto: "",
                    latitude: e.coords.latitude,
                    longitude: e.coords.longitude
                };
            });
        }
        ;
        this.GetUser();
        this.GetJudete();
        this.GetOperationTypes();
        this.GetCarManufacturers();
        this.GetOperations();
        this.GetCounters();
        this.filteredCities = this.cityCtrl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (query) { return query && query.length > 1; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (state) { return state ? _this._filter(state) : _this.cities.slice(); }));
    };
    SearchPageComponent.prototype.GoToServices = function () {
        if (!this.longitude || !this.latitude) {
            this.iziToast.warning({
                message: "Trebuie sa selectezi un oras pentru a cauta!",
                position: "bottomCenter"
            });
            return;
        }
        var x = {
            longitude: this.longitude,
            latitude: this.latitude
        };
        if (this.typeSelected) {
            x["type"] = this.typeSelected.serviceOperationTypeId;
        }
        if (this.brandSelected) {
            x["brand"] = this.brandSelected.carManufacturerId;
        }
        this.router.navigate(["client/services"], { queryParams: x });
    };
    SearchPageComponent.prototype.ngOnChanges = function () {
    };
    SearchPageComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.cities.filter(function (state) { return state.name.toLowerCase().indexOf(filterValue) === 0; });
    };
    SearchPageComponent.prototype._filterOp = function (value) {
        var filterValue = value.toLowerCase();
        return this.opTypes.filter(function (state) { return state.name.toLowerCase().indexOf(filterValue) === 0; });
    };
    SearchPageComponent.prototype._filterBrand = function (value) {
        var filterValue = value.toLowerCase();
        return this.brands.filter(function (state) { return state.name.toLowerCase().indexOf(filterValue) === 0; });
    };
    SearchPageComponent.prototype.CitySelected = function (item) {
        this.latitude = item.latitude;
        this.longitude = item.longitude;
    };
    SearchPageComponent.prototype.TypeSelected = function (item) {
        this.typeSelected = item;
    };
    SearchPageComponent.prototype.BrandSelected = function (item) {
        this.brandSelected = item;
    };
    SearchPageComponent.prototype.displayFn = function (entity) {
        return entity ? entity.name : null;
    };
    SearchPageComponent.prototype.GetUser = function () {
        var _this = this;
        this.auth.GetUser().subscribe(function (e) {
            if (e) {
                _this.user = e;
            }
        });
    };
    SearchPageComponent.prototype.GetOperations = function () {
        var _this = this;
        this.nomenclatoareService.GetServiceOperations().subscribe(function (response) {
            _this.operations = response;
            _this.filteredOperations = _this.operations.filter(function (e) { return e.serviceOperationType.serviceOperationTypeId == 1; });
        });
    };
    SearchPageComponent.prototype.GetJudete = function () {
        var _this = this;
        this.nomenclatoareService.GetCities().subscribe(function (e) {
            _this.cities = e;
            if (_this.selectedCity) {
                _this.cityCtrl.setValue(_this.selectedCity);
                _this.cities.unshift(_this.selectedCity);
            }
            _this.judete = e.filter(function (z) { return z.name.indexOf(z.judet) >= 0; });
        });
    };
    SearchPageComponent.prototype.SelectType = function (type) {
        this.selectedType = type;
        this.filteredOperations = this.operations.filter(function (e) { return e.serviceOperationType.serviceOperationTypeId == type.serviceOperationTypeId; });
    };
    SearchPageComponent.prototype.GetOperationTypes = function () {
        var _this = this;
        this.nomenclatoareService.GetServiceOperationTypes().subscribe(function (e) {
            _this.opTypes = e;
            _this.selectedType = _this.opTypes[0];
            _this.filteredTypes = _this.typeCtrl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (value) { return typeof value === 'string' ? value : value.name; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (name) { return name ? _this._filterOp(name) : _this.opTypes.slice(); }));
        });
    };
    SearchPageComponent.prototype.GetCarManufacturers = function () {
        var _this = this;
        this.nomenclatoareService.GetCarManufacturers().subscribe(function (e) {
            _this.brands = e;
            _this.filteredBrands = _this.brandCtrl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (value) { return typeof value === 'string' ? value : value.name; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (name) { return name ? _this._filterBrand(name) : _this.brands.slice(); }));
        });
    };
    SearchPageComponent.prototype.GetCounters = function () {
        var _this = this;
        this.searchPageService.GetCountersStats().subscribe(function (response) {
            _this.serviceCount = response.filter(function (e) { return e.id == 1; })[0].count;
            _this.spalatoriiCount = response.filter(function (e) { return e.id == 3; })[0].count;
            _this.vulcanizareCount = response.filter(function (e) { return e.id == 2; })[0].count;
        });
    };
    SearchPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-page',
            template: __webpack_require__(/*! raw-loader!./search-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/client/search-page/search-page.component.html"),
            styles: [__webpack_require__(/*! ./search-page.component.scss */ "./src/app/modules/client/search-page/search-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_nomenclatoare_service__WEBPACK_IMPORTED_MODULE_2__["NomenclatoareService"],
            _search_page_service__WEBPACK_IMPORTED_MODULE_4__["SearchPageService"],
            src_app_core_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            ng2_izitoast__WEBPACK_IMPORTED_MODULE_8__["Ng2IzitoastService"]])
    ], SearchPageComponent);
    return SearchPageComponent;
}());



/***/ }),

/***/ "./src/app/modules/client/search-page/search-page.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/client/search-page/search-page.service.ts ***!
  \*******************************************************************/
/*! exports provided: SearchPageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageService", function() { return SearchPageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SearchPageService = /** @class */ (function () {
    function SearchPageService(http) {
        this.http = http;
        this.baseUrl = "/api/SearchPage/";
    }
    SearchPageService.prototype.GetCountersStats = function () {
        return this.http.get(this.baseUrl + "GetSearchCounters");
    };
    SearchPageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SearchPageService);
    return SearchPageService;
}());



/***/ }),

/***/ "./src/app/modules/client/service/appointment/appointment.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/client/service/appointment/appointment.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".appointment-body {\n  padding: 15px;\n}\n.appointment-body .header-apointment {\n  position: relative;\n  padding-bottom: 15px;\n}\n.appointment-body .header-apointment::before {\n  content: \"\";\n  width: 80px;\n  height: 4px;\n  left: 0;\n  bottom: 0;\n  position: absolute;\n  background: linear-gradient(90deg, #5d6fd3 0, #4a5dc4);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jbGllbnQvc2VydmljZS9hcHBvaW50bWVudC9DOlxcVXNlcnNcXGFuZHJlaS5mdW5hcnVcXERlc2t0b3BcXExpY2VudGFcXGVTZXJ2aWNlXFxlU2VydmljZVxcQ2xpZW50QXBwL3NyY1xcYXBwXFxtb2R1bGVzXFxjbGllbnRcXHNlcnZpY2VcXGFwcG9pbnRtZW50XFxhcHBvaW50bWVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9jbGllbnQvc2VydmljZS9hcHBvaW50bWVudC9hcHBvaW50bWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjtBRENFO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtBQ0NKO0FERUU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBSUEsc0RBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2xpZW50L3NlcnZpY2UvYXBwb2ludG1lbnQvYXBwb2ludG1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwb2ludG1lbnQtYm9keSB7XHJcbiAgcGFkZGluZzogMTVweDtcclxuXHJcbiAgLmhlYWRlci1hcG9pbnRtZW50IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlci1hcG9pbnRtZW50OjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsbGVmdCB0b3AscmlnaHQgdG9wLGZyb20oIzVkNmZkMyksdG8oIzRhNWRjNCkpO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwjNWQ2ZmQzLCM0YTVkYzQpO1xyXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsIzVkNmZkMyAwLCM0YTVkYzQgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIzVkNmZkMyAwLCM0YTVkYzQpO1xyXG4gIH1cclxufVxyXG4iLCIuYXBwb2ludG1lbnQtYm9keSB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4uYXBwb2ludG1lbnQtYm9keSAuaGVhZGVyLWFwb2ludG1lbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuLmFwcG9pbnRtZW50LWJvZHkgLmhlYWRlci1hcG9pbnRtZW50OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA0cHg7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgZnJvbSgjNWQ2ZmQzKSwgdG8oIzRhNWRjNCkpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjNWQ2ZmQzLCAjNGE1ZGM0KTtcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsICM1ZDZmZDMgMCwgIzRhNWRjNCAxMDAlKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNWQ2ZmQzIDAsICM0YTVkYzQpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/client/service/appointment/appointment.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/client/service/appointment/appointment.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AppointmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentComponent", function() { return AppointmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_models_months__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/models/months */ "./src/app/core/models/months.ts");
/* harmony import */ var src_app_core_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var src_app_core_loader_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/loader/loader.service */ "./src/app/core/loader/loader.service.ts");
/* harmony import */ var src_app_core_models_appointment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/models/appointment */ "./src/app/core/models/appointment.ts");
/* harmony import */ var ng2_izitoast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-izitoast */ "./node_modules/ng2-izitoast/ng2-izitoast.es5.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../service.service */ "./src/app/modules/client/service/service.service.ts");












var AppointmentComponent = /** @class */ (function () {
    function AppointmentComponent(dialogRef, data, authService, loaderService, iziToast, service) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this.authService = authService;
        this.loaderService = loaderService;
        this.iziToast = iziToast;
        this.service = service;
        this.typeOpControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.opControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.shownOp = [];
        this.today = new Date();
        this.yearSelected = (new Date()).getFullYear();
        this.yearFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.brandCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.months = [];
        this.selectedMonth = _core_models_months__WEBPACK_IMPORTED_MODULE_6__["Months"][this.today.getMonth() + 1];
        this.days = [];
        this.hours = [];
        this.addAppointment = new src_app_core_models_appointment__WEBPACK_IMPORTED_MODULE_9__["Appointment"]();
        console.log(data);
        this.years = lodash__WEBPACK_IMPORTED_MODULE_3__["reverse"](lodash__WEBPACK_IMPORTED_MODULE_3__["range"](1970, this.yearSelected));
        this.yearFormControl.setValue(this.yearSelected);
        this.addAppointment.serviceLocation = this.data.details.serviceLocation;
        this.authService.GetUser().subscribe(function (e) {
            _this.user = e;
            if (_this.user) {
                _this.addAppointment.user = _this.user;
                if (_this.user.email) {
                    _this.addAppointment.email = _this.user.email;
                }
                if (_this.user.phoneNumber) {
                    _this.addAppointment.phone = _this.user.phoneNumber;
                }
            }
        });
        for (var member in _core_models_months__WEBPACK_IMPORTED_MODULE_6__["Months"]) {
            if (parseInt(_core_models_months__WEBPACK_IMPORTED_MODULE_6__["Months"][member]) >= this.today.getMonth() + 1) {
                this.months.push(member);
            }
        }
        this.SelectMonth(_core_models_months__WEBPACK_IMPORTED_MODULE_6__["Months"][this.today.getMonth() + 1]);
        this.filteredOptionsOpType = this.typeOpControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (value) { return typeof value === 'string' ? value : value.name; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (name) { return name ? _this._filter(name) : _this.data.opTypes.slice(); }));
        this.filteredOptionsOp = this.opControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (value) { return typeof value === 'string' ? value : value.name; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (name) { return name ? _this._filterOp(name) : _this.shownOp.slice(); }));
        this.selectedOpType = this.data.opTypes[0];
        this.shownOp = this.data.op.filter(function (e) { return e.description.serviceOperationType.serviceOperationTypeId == _this.selectedOpType.serviceOperationTypeId; });
    }
    AppointmentComponent.prototype.PopulateHours = function (day) {
        this.hours = [];
        var dayOfWeek = new Date(this.today.getFullYear(), _core_models_months__WEBPACK_IMPORTED_MODULE_6__["Months"][this.selectedMonth] - 1, day).getDay();
        var program = this.data.details.serviceProgram.filter(function (e) { return e.weekDay == dayOfWeek; })[0];
        var startHour;
        var startMinute;
        if (this.today.getDate() == day) {
            startHour = this.today.getHours() + 1;
            startMinute = 0;
        }
        else {
            startHour = program.openHour;
            startMinute = program.openMinute;
        }
        for (var i = startHour; i < program.closeHour; i++) {
            for (var j = startMinute; j < 60; j = j + 30) {
                this.hours.push(i + ":" + j.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }));
            }
            startMinute = 0;
        }
        this.selectedHour = this.hours[0];
    };
    AppointmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredYears = this.yearFormControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (value) { return _this._filterYear(value); }));
        this.filteredBrands = this.brandCtrl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (value) { return typeof value === 'string' ? value : value.name; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (name) { return name ? _this._filterBrand(name) : _this.data.brands.slice(); }));
    };
    AppointmentComponent.prototype.AddAppointment = function () {
        var _this = this;
        if (!this.addAppointment.carYear) {
            this.iziToast.warning({
                message: "Selecteaza anul de productie al masinii!",
                position: "bottomCenter"
            });
            return;
        }
        if (!this.addAppointment.carManufacturer) {
            this.iziToast.warning({
                message: "Selecteaza brand-ul masinii!",
                position: "bottomCenter"
            });
            return;
        }
        if (!this.addAppointment.carModel) {
            this.iziToast.warning({
                message: "Selecteaza modelul masinii!",
                position: "bottomCenter"
            });
            return;
        }
        if (!this.selectedMonth || !this.selectedDay || !this.selectedHour) {
            this.iziToast.warning({
                message: "Selecteaza timpul pentru programare!",
                position: "bottomCenter"
            });
        }
        if (!this.addAppointment.serviceLocationOperation) {
            this.iziToast.warning({
                message: "Selecteaza un serviciu!",
                position: "bottomCenter"
            });
            return;
        }
        if (!this.addAppointment.email) {
            this.iziToast.warning({
                message: "Completeaza email-ul!",
                position: "bottomCenter"
            });
            return;
        }
        if (!this.addAppointment.phone) {
            this.iziToast.warning({
                message: "Completeaza numarul de telefon!",
                position: "bottomCenter"
            });
            return;
        }
        this.addAppointment.appointmentTime = new Date(this.today.getFullYear(), _core_models_months__WEBPACK_IMPORTED_MODULE_6__["Months"][this.selectedMonth] - 1, this.selectedDay, parseInt(this.selectedHour.split(":")[0]) + 3, parseInt(this.selectedHour.split(":")[1]));
        this.loaderService.show();
        this.service.AddAppointment(this.addAppointment).subscribe(function (e) {
            _this.loaderService.hide();
            if (e == true) {
                _this.iziToast.success({
                    message: "Programarea a fost realizata cu succes, vei fi contactat in cel mai scurt timp de un reprezentat al service-ului!",
                    position: "bottomCenter"
                });
                _this.dialogRef.close("success");
            }
            else {
                _this.iziToast.error({
                    message: "A aparut o eroare la adaugarea programarii, incercati din nou!",
                    position: "bottomCenter"
                });
            }
        });
    };
    AppointmentComponent.prototype.BrandSelected = function (item) {
        this.addAppointment.carManufacturer = item;
    };
    AppointmentComponent.prototype.GetLogoSrc = function () {
        return "https://eservice.blob.core.windows.net/serviceslogo/" + this.data.details.serviceInfo.serviceInfoId + "/" + this.data.details.serviceInfo.logo;
    };
    AppointmentComponent.prototype.CloseDialog = function () {
        this.dialogRef.close();
    };
    AppointmentComponent.prototype.OnTypeSelected = function (event) {
        this.shownOp = this.data.op.filter(function (e) { return e.description.serviceOperationType.serviceOperationTypeId == event.serviceOperationTypeId; });
        this.opControl.setValue("");
        this.selectedOp = null;
    };
    AppointmentComponent.prototype.displayFnType = function (item) {
        if (item)
            return item.name;
    };
    AppointmentComponent.prototype.displayFn = function (item) {
        if (item)
            return item.description.name;
    };
    AppointmentComponent.prototype.SelectMonth = function (value) {
        if (value == _core_models_months__WEBPACK_IMPORTED_MODULE_6__["Months"][this.today.getMonth() + 1]) {
            this.selectedDay = this.today.getDate();
            this.days = lodash__WEBPACK_IMPORTED_MODULE_3__["range"](this.selectedDay, this.LastDayOfMonth(this.today.getMonth()));
        }
        else {
            this.selectedDay = 1;
            this.days = lodash__WEBPACK_IMPORTED_MODULE_3__["range"](this.selectedDay, this.LastDayOfMonth(parseInt(_core_models_months__WEBPACK_IMPORTED_MODULE_6__["Months"][value]) - 1));
        }
        this.PopulateHours(this.selectedDay);
    };
    AppointmentComponent.prototype.SelectDay = function (value) {
        this.PopulateHours(value);
    };
    AppointmentComponent.prototype._filterYear = function (value) {
        var filterValue = value.toString().toLowerCase();
        return this.years.filter(function (option) { return option.toString().toLowerCase().includes(filterValue); });
    };
    AppointmentComponent.prototype._filterBrand = function (value) {
        var filterValue = value.toLowerCase();
        return this.data.brands.filter(function (state) { return state.name.toLowerCase().indexOf(filterValue) === 0; });
    };
    AppointmentComponent.prototype._filter = function (name) {
        var filterValue = name.toLowerCase();
        return this.data.opTypes.filter(function (option) { return option.name.toLowerCase().indexOf(filterValue) === 0; });
    };
    AppointmentComponent.prototype._filterOp = function (name) {
        var filterValue = name.toLowerCase();
        return this.shownOp.filter(function (option) { return option.description.name.toLowerCase().indexOf(filterValue) === 0; });
    };
    AppointmentComponent.prototype.LastDayOfMonth = function (month) {
        return new Date(this.today.getFullYear(), month + 1, 0).getDate() + 1;
    };
    AppointmentComponent.prototype.OnOperationSelected = function (value) {
        this.addAppointment.serviceLocationOperation = value.values;
    };
    AppointmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-appointment',
            template: __webpack_require__(/*! raw-loader!./appointment.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/client/service/appointment/appointment.component.html"),
            styles: [__webpack_require__(/*! ./appointment.component.scss */ "./src/app/modules/client/service/appointment/appointment.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, src_app_core_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            src_app_core_loader_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"],
            ng2_izitoast__WEBPACK_IMPORTED_MODULE_10__["Ng2IzitoastService"],
            _service_service__WEBPACK_IMPORTED_MODULE_11__["ServiceService"]])
    ], AppointmentComponent);
    return AppointmentComponent;
}());



/***/ }),

/***/ "./src/app/modules/client/service/image-viewer-client/image-viewer-client.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/client/service/image-viewer-client/image-viewer-client.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.image-viewer-container {\n  height: 75vh;\n  width: 80vw;\n}\n\n.arrow-wrapper:hover .arrow-wrapper {\n  color: darkblue;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jbGllbnQvc2VydmljZS9pbWFnZS12aWV3ZXItY2xpZW50L0M6XFxVc2Vyc1xcYW5kcmVpLmZ1bmFydVxcRGVza3RvcFxcTGljZW50YVxcZVNlcnZpY2VcXGVTZXJ2aWNlXFxDbGllbnRBcHAvc3JjXFxhcHBcXG1vZHVsZXNcXGNsaWVudFxcc2VydmljZVxcaW1hZ2Utdmlld2VyLWNsaWVudFxcaW1hZ2Utdmlld2VyLWNsaWVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9jbGllbnQvc2VydmljZS9pbWFnZS12aWV3ZXItY2xpZW50L2ltYWdlLXZpZXdlci1jbGllbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jbGllbnQvc2VydmljZS9pbWFnZS12aWV3ZXItY2xpZW50L2ltYWdlLXZpZXdlci1jbGllbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uaW1hZ2Utdmlld2VyLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiA3NXZoO1xyXG4gIHdpZHRoOiA4MHZ3O1xyXG59XHJcblxyXG4uYXJyb3ctd3JhcHBlcjpob3ZlciAuYXJyb3ctd3JhcHBlciB7XHJcbiAgY29sb3I6IGRhcmtibHVlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iLCJpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbi5pbWFnZS12aWV3ZXItY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA3NXZoO1xuICB3aWR0aDogODB2dztcbn1cblxuLmFycm93LXdyYXBwZXI6aG92ZXIgLmFycm93LXdyYXBwZXIge1xuICBjb2xvcjogZGFya2JsdWU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/client/service/image-viewer-client/image-viewer-client.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/client/service/image-viewer-client/image-viewer-client.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ImageViewerClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageViewerClientComponent", function() { return ImageViewerClientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var ImageViewerClientComponent = /** @class */ (function () {
    function ImageViewerClientComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        console.log(data);
    }
    ImageViewerClientComponent.prototype.GetSrc = function (photo) {
        return "https://eservice.blob.core.windows.net/serviceimages/" + this.data.locationId + "/" + photo.link;
    };
    ImageViewerClientComponent.prototype.MoveLeft = function () {
        var idx = this.data.allPhotos.map(function (e) { return e.serviceLocationPhotoId; }).indexOf(this.data.selected.serviceLocationPhotoId);
        if (idx == 0) {
            this.data.selected = this.data.allPhotos[this.data.allPhotos.length - 1];
        }
        else {
            this.data.selected = this.data.allPhotos[idx - 1];
        }
    };
    ImageViewerClientComponent.prototype.MoveRight = function () {
        var idx = this.data.allPhotos.map(function (e) { return e.serviceLocationPhotoId; }).indexOf(this.data.selected.serviceLocationPhotoId);
        if (idx == this.data.allPhotos.length - 1) {
            this.data.selected = this.data.allPhotos[0];
        }
        else {
            this.data.selected = this.data.allPhotos[idx + 1];
        }
    };
    ImageViewerClientComponent.prototype.CloseDialog = function () {
        this.dialogRef.close();
    };
    ImageViewerClientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image-viewer-client',
            template: __webpack_require__(/*! raw-loader!./image-viewer-client.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/client/service/image-viewer-client/image-viewer-client.component.html"),
            styles: [__webpack_require__(/*! ./image-viewer-client.component.scss */ "./src/app/modules/client/service/image-viewer-client/image-viewer-client.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], ImageViewerClientComponent);
    return ImageViewerClientComponent;
}());



/***/ }),

/***/ "./src/app/modules/client/service/service.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/modules/client/service/service.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#go-top-button {\n  position: fixed;\n  bottom: 20px;\n  right: 30px;\n}\n\n.show-min-fab {\n  display: initial !important;\n}\n\n.example-spacer {\n  flex: 1 1 auto;\n}\n\n.search-page-wrapper {\n  height: 100%;\n  width: 100%;\n  overflow-y: scroll;\n  background-color: #f2f3f6;\n  position: relative;\n}\n\n.header-section {\n  height: 360px !important;\n  background-image: url(\"/images/Backgrounds/1443120007.jpg\");\n  background-position: center;\n  background-size: cover;\n  position: relative;\n}\n\n.header-section div {\n  z-index: 2;\n}\n\n.header-section .header-settings {\n  color: white;\n  cursor: pointer;\n}\n\n.header-section .header-content {\n  margin-top: 200px;\n}\n\n.header-section .header-search {\n  background: white;\n  border-radius: 10px;\n  padding: 10px 20px 0 20px;\n}\n\n.header-section .header-search .header-search-city {\n  position: relative;\n  padding-right: 20px;\n}\n\n.header-section .header-search .header-search-city::before {\n  content: \"\";\n  border: 1px solid #cbcddb;\n  position: absolute;\n  top: 20%;\n  height: 100%;\n  bottom: 30%;\n  height: 50%;\n  right: 0;\n}\n\n.header-section .header-slogan {\n  color: white;\n}\n\n.header-section::before {\n  content: \"\";\n  bottom: 0;\n  left: 50%;\n  width: 78.4%;\n  height: 83.2%;\n  position: absolute;\n  -webkit-transform: translate3d(-50%, 0, 0);\n  transform: translate3d(-50%, 0, 0);\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA5YAAAJrAgMAAADmHuSeAAAACVBMVEVMaXH////////OZTV/AAAAA3RSTlMAZjToZfxKAAAHQElEQVR42u3dS5aqMBhFYWDZSNMhZCjoyKBGfgWv5dsCFUnw24tV1Si1EXbF8+dFUeDDbFbrTfdTSyAXYi/tevdTWyB9V+vd71Wn6/6qtQrS72AvLq2C9KPsxRW0ClJmfUNatRhSZkVaZBMJtiGSFtMSdi7Ft3St9SESNEVsb0sbtTfeWijtTHv+08rbll5emh3vLpSeH0odKG2t4fFuaZ8dSo2bYdIaqsW7q/vu2r7xX0CsxYSB9uz6ed+/wPXVaH2M1bWIzd/f5uP6w2qMtGItnuhj63fbVZIW8wWD5+wa/pmWH2DCMn+MYO3gz3QDMGlPeyZteM8/gioM00r7PyR0OaE8SnstnkCLaWlHSxv3O7yqw0qYS/HCmA90AzB9T3s6PrZ/+/aFnlYhhmkLsf0E2VkZdbu3JC2SigdnUSEcpd32waAmLaanfEHa7XEtd/ezPazrlmmRrLS/GxCa8wnfMe+NbgFG8wZpL+cLWtJiWmaVVqZFAtJuxsWDLp+4B5hZ2idGIfrOuXYrkI+0pnQxFtKCtE+HYWAg5UpCQG6QFrmxJS0yI25IC4WYWgxfU4iRFvlJaykChlGlI61jlpGftNHtAGkh08q0MOQl02I8kbTIiYR0fShtcOoXkpX2tpylGV4kWIKdLj+4eJZZUKMhzTR7fC5JeXZ0bRR3kXI26HvUeLriq1KjIe1scNblhm79TEtapJ0NHh+h4J59O2GdgbSWiOOEapWftP9Pbw7R7ftO2gyl3SeEsh/LrdzCryNLY/cJoerHbFv3UKDN5fodqTPXYIQ2m+sk2HRRwb0UaLO6QmHw9nvYLENag7eqsFXG1RkE2vyqMyyacnnShn1Qd28F2pyuprCiRqAVEkBa0oK0zkwg7QKu6O6SNsNyDEYPzDIgBaKeFnpa6xCgp1WIwZAX8mZlcgGkTWyvLmRa0mJuY+uljh64t7pZ0woQaPW0eIpqwdJ2K8BNLiyQcsnSmhFbJhvSgrTmcGHowAPIcMais4HbS9oMpeWtoYPcpI2kXR7twqW1bcHQgQUzIK1aDKow0pKWtDB6YH4BpCXt9yEegLT2L4C0jkXCFQufFLM6US12+2FzCjFklBBi/+UbSYsMpM1l6MxZXrw9XGXIZbzX3V2wtKMqsuvqJhqnxUcJ3c2tXjOhJS0+2tMWP3t1X9CgXq1bmRaf62kP4g3wdnv/Q0rSIsmirL7/1oq0mIf145zw4J1NX6ClstHGqoPvIrYh3hkQiI+zcRLDX27gF1Neptn4xLtsZsQc0sZR76pIi9mLsneXchbQYtJw+5QD66YgLWbjWQcsoMVstOF52wVaZJcrrOkCaaVZTB2GSQvSCrSYElUYSEtaLFNamRakxRfh4YzIjmAlLfKjVYghN0qZFmItaUFa4JL4WW9j6/mMyKezrYtIV+RVizEWn5G2NKeA9KjsVkBuPJ5faEiLBAl/nLX1FmMr7YxPjR7UBmaRW6atQ3TEAfKKB5vX19w6exYT8FDaaCEicou1xYvB4Efz4sOd7QvbzK2bxSzSbguDBshJ2vbpQqwrvszb4vPSFk8XYtoTuUmrOTGTtEU/HXb8UzTGhYSljU2IuzKq2f/tf1Wl/kJSxEfWhaIa8/RzrYkJWd2S9uTvP8ftBrIBkqBd3YoHJy8o+xzbPxeyMKGABLrZrsxvwu7bvMsD5c2uMuyuvo8ddoDS1kYwTC1t3382vbTHtV5XLxy+Tazo+2Rgyp72t/J6FEqVYEhQ2gfiVSMWgfdxAvi4tBeh9I80e6J0rUkxNWHoV/ydeNANiG1CsT2ZurV7ERMzeD/X/U002341V72KZf9CnS3mkPb2S8urTeXtqpvkbfe966q/gkIMc2Ta4qG0Yd/B7nJsrA4hdiftdtVdwCzSbh90y+HU4bgf5t17u+ufS9JiJmmHh9LqsOC273gNduETVK/NDlSXMThqUqRThf3VUcd+9lYVhoSqsHv8qt50tpMWSVVhf/XV3YkcZsTwcWlHWteGs7MRZFpMzdVqw1iOsa66Pg5095maFRMSr85FHNdPtjYsYNZssA0jT+MMdxYtmF/Ap7LBduTT6B4cCqptMRGXibQY8+Xu8GQkEA/qMT3kw603HsiIj/W0w/ljx40BBCQnbfhzN+654WFtLwNep92fOvvU7G07eDdueRJCtDle5IXliENO+IyHAYqjtIIuXqS88aSwYZ3hsHMPmot/DS2Ot0rb97Fx4HRYOeyQzyqcRd9ai+ONVVj4tTEOfmMcEGvPXkNavIOrNV0DFx6EPp16wA1mSgjb31O+i2LsmgHSYg7iWX20Gu08aZFrKnYwOPLpqB+P2RYn0xCN1kJKwfjRQ8T2JzZrJmQkrXO9kFGy1TRIFifYYyHSahckTJANkH9PGyJpkVMh1i+/abQLEqY0XYu8pdUeyExaZyIhO2llA2QnrfoL2Y0eaA1kQDB1i+wwC4b8+FGFIdvOVkMgI2QD3OUfn4Oe2Z28hH8AAAAASUVORK5CYII=);\n  background-size: contain;\n}\n\n.header-section::after {\n  content: \"\";\n  top: 0;\n  left: 0;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  opacity: 0.25;\n  position: absolute;\n  background: linear-gradient(0deg, #282d47, #333a5a);\n}\n\n.logo-image {\n  height: 125px;\n}\n\n.basic-info {\n  position: relative;\n}\n\n.basic-info .basic-info-nav-container {\n  position: relative;\n}\n\n.basic-info .basic-info-nav-container .basic-info-navigate {\n  padding: 0 10px;\n  position: absolute;\n  width: 100%;\n  height: 50px;\n  top: -25px;\n  background-color: white;\n  z-index: 3;\n  border-radius: 15px;\n}\n\n.basic-info .basic-info-nav-container .basic-info-navigate a {\n  font-weight: 600;\n  text-decoration: none;\n}\n\n.basic-info .basic-info-container {\n  position: absolute;\n  width: 250px;\n  top: -75px;\n  background-color: white;\n  height: 300px;\n  z-index: 3;\n  border-radius: 10px;\n}\n\n.basic-info .basic-info-container .basic-info-logo img {\n  max-width: 100%;\n  border-radius: 5px;\n}\n\n.basic-info .basic-info-container .counter-header {\n  height: 150px;\n  background: #5d6fd3;\n  border-radius: 10px;\n  padding: 0px 5px 0 5px;\n  color: white;\n  font-size: 40px;\n}\n\n.basic-info .basic-info-container .counter-body {\n  position: relative;\n  height: 150px;\n}\n\n.basic-info .basic-info-container .counter-body .counter-body-numbers {\n  font-size: 40px;\n  color: #5263c3;\n}\n\n.basic-info .basic-info-container .counter-body .counter-body-label {\n  font-size: 30px;\n  font-weight: 600;\n}\n\n.basic-info .basic-info-container .counter-body::before {\n  content: \"\";\n  top: -40px;\n  width: 0;\n  height: 0;\n  position: absolute;\n  left: 0;\n  border-left: 150px solid #fff;\n  border-top: 40px solid transparent;\n  border-bottom: 0 solid transparent;\n}\n\n.basic-info .basic-info-container .counter-body::after {\n  content: \"\";\n  top: -40px;\n  width: 0;\n  height: 0;\n  position: absolute;\n  right: 0;\n  border-right: 150px solid #fff;\n  border-top: 40px solid transparent;\n  border-bottom: 0 solid transparent;\n}\n\n.name-section {\n  margin-top: 40px;\n}\n\n.name-section .name-section-body {\n  margin-left: 275px;\n}\n\n.name-section #service-name {\n  position: relative;\n  padding-bottom: 20px;\n}\n\n.name-section #service-name::before {\n  content: \"\";\n  width: 80px;\n  height: 4px;\n  left: 0;\n  bottom: 0;\n  position: absolute;\n  background: linear-gradient(90deg, #5d6fd3 0, #4a5dc4);\n}\n\n.service-program-div {\n  margin-top: 25px;\n}\n\n.program-label {\n  font-weight: 600;\n}\n\n.car-manufacturers-section {\n  background-color: white;\n  border-radius: 10px;\n}\n\n.brand-service-list {\n  padding: 10px;\n}\n\n.facilities-section {\n  margin-top: 85px;\n}\n\n.facilities-section .facility-icon {\n  font-size: 40px;\n  height: 50px;\n  color: #9496a1;\n}\n\n.facilities-section .facility-name {\n  font-size: 14px;\n  color: #9496a1;\n  text-align: center;\n}\n\n.servicii-section {\n  margin-top: 40px;\n  padding-bottom: 50px;\n  padding-top: 50px;\n  background-color: #fff;\n  box-shadow: 0 3px 30px 0 rgba(163, 169, 186, 0.15);\n}\n\n.servicii-section .servicii-container {\n  margin-top: 15px;\n  border: 1px solid #eee;\n  min-height: 350px;\n}\n\n.servicii-section .servicii-container .servicii-types {\n  background-color: #f9f9f9;\n  padding-top: 0;\n}\n\n.servicii-section .servicii-container .servicii-types .mat-list {\n  padding-top: 0;\n}\n\n.servicii-section .servicii-container .servicii-types mat-list-item {\n  border-bottom: 1px solid #eee;\n  border-right: 1px solid #eee;\n  cursor: pointer;\n}\n\n.servicii-section .servicii-container .servicii-types mat-list-item .mat-list-item-content {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.servicii-section .servicii-container .servicii-types .selected-type-active {\n  background-color: #fff;\n  box-shadow: 0 3px 30px 0 rgba(163, 169, 186, 0.15);\n  border-right: 0px !important;\n}\n\n.servicii-section .servicii-container .servicii-operations .mat-list {\n  padding-top: 0px;\n  background-color: #fff !important;\n}\n\n.servicii-section .servicii-container .servicii-operations mat-list-item {\n  border-bottom: 1px solid #eee;\n  background-color: #fff !important;\n}\n\n.servicii-section .servicii-container .servicii-operations mat-list-item .servicii-operations-name {\n  color: #4a5dc4;\n  font-size: 16px;\n}\n\n.servicii-section .servicii-container .servicii-operations mat-list-item .servicii-operations-values {\n  font-size: 13px;\n}\n\n.photos-section {\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n\n.photos-section .img-flex {\n  height: 200px;\n  overflow: hidden;\n  margin: 10px;\n  width: calc(25% - 25px);\n  max-width: calc(25% - 25px);\n  position: relative;\n}\n\n.photos-section .img-flex .mat-mini-fab {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-left: -20px;\n  margin-top: -20px;\n  display: none;\n  background-color: white;\n}\n\n.photos-section .overlay-picture {\n  position: absolute;\n  background-color: blue;\n  top: 0;\n  left: 0;\n  opacity: 0.2;\n  width: 100%;\n  height: 100%;\n  display: none;\n}\n\n.photos-section .img-flex:hover .mat-mini-fab {\n  display: block;\n}\n\n.photos-section .img-flex:hover .overlay-picture {\n  display: block;\n}\n\n.reviews-section {\n  background-color: #fff;\n  box-shadow: 0 3px 30px 0 rgba(163, 169, 186, 0.15);\n  padding-bottom: 50px;\n  padding-top: 50px;\n}\n\n.reviews-section .review-container {\n  padding: 15px;\n}\n\n.reviews-section .review-container .no-review-class {\n  font-size: 18px;\n  font-weight: 600;\n  color: #4a5dc4;\n}\n\n.reviews-section .review-container .review-tile {\n  background-color: #f2f3f6;\n  border-radius: 10px;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-bottom: 15px;\n  padding-top: 0;\n  margin-top: 20px;\n  max-width: calc(50% - 20px);\n}\n\n.address-section {\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n\n.address-section .address-container {\n  padding: 10px;\n}\n\n.address-section agm-map {\n  height: 500px;\n}\n\n.description-section {\n  background-color: #fff;\n  box-shadow: 0 3px 30px 0 rgba(163, 169, 186, 0.15);\n  padding-bottom: 50px;\n  padding-top: 50px;\n}\n\n.description-section .description-container {\n  padding: 15px;\n}\n\n.description-section .description-container pre {\n  white-space: pre-wrap;\n  /* Since CSS 2.1 */\n  white-space: -moz-pre-wrap;\n  /* Mozilla, since 1999 */\n  white-space: -pre-wrap;\n  /* Opera 4-6 */\n  white-space: -o-pre-wrap;\n  /* Opera 7 */\n  word-wrap: break-word;\n  /* Internet Explorer 5.5+ */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jbGllbnQvc2VydmljZS9DOlxcVXNlcnNcXGFuZHJlaS5mdW5hcnVcXERlc2t0b3BcXExpY2VudGFcXGVTZXJ2aWNlXFxlU2VydmljZVxcQ2xpZW50QXBwL3NyY1xcYXBwXFxtb2R1bGVzXFxjbGllbnRcXHNlcnZpY2VcXHNlcnZpY2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvY2xpZW50L3NlcnZpY2Uvc2VydmljZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0FGOztBREdBO0VBQ0UsMkJBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDQUY7O0FER0E7RUFLRSx3QkFBQTtFQUNBLDJEQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDSkY7O0FESkU7RUFDRSxVQUFBO0FDTUo7O0FER0U7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ0RKOztBRElFO0VBQ0UsaUJBQUE7QUNGSjs7QURLRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ0hKOztBRE1JO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQ0pOOztBRE9JO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBQ0xOOztBRFNFO0VBQ0UsWUFBQTtBQ1BKOztBRGNBO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0NBQUE7RUFDQSxxbEZBQUE7RUFFQSx3QkFBQTtBQ1hGOztBRGNBO0VBQ0UsV0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBSUEsbURBQUE7QUNYRjs7QURjQTtFQUNFLGFBQUE7QUNYRjs7QURlQTtFQUNFLGtCQUFBO0FDWkY7O0FEY0U7RUFDRSxrQkFBQTtBQ1pKOztBRGNJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUNaTjs7QURjTTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7QUNaUjs7QURtQkU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDakJKOztBRG9CTTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ2xCUjs7QURzQkk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNwQk47O0FEdUJJO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FDckJOOztBRHVCTTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDckJSOztBRHdCTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ3RCUjs7QUQwQkk7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtDQUFBO0FDeEJOOztBRDJCSTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7QUN6Qk47O0FEOEJBO0VBQ0UsZ0JBQUE7QUMzQkY7O0FENkJFO0VBQ0Usa0JBQUE7QUMzQko7O0FEOEJFO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtBQzVCSjs7QUQrQkU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBSUEsc0RBQUE7QUM3Qko7O0FEaUNBO0VBQ0UsZ0JBQUE7QUM5QkY7O0FEaUNBO0VBQ0UsZ0JBQUE7QUM5QkY7O0FEaUNBO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtBQzlCRjs7QURpQ0E7RUFDRSxhQUFBO0FDOUJGOztBRGlDQTtFQUNFLGdCQUFBO0FDOUJGOztBRGdDRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQzlCSjs7QURpQ0U7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDL0JKOztBRG1DQTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0RBQUE7QUNoQ0Y7O0FEa0NFO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FDaENKOztBRGtDSTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQ2hDTjs7QURrQ007RUFDRSxjQUFBO0FDaENSOztBRG1DTTtFQUNFLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0FDakNSOztBRG1DUTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ2pDVjs7QURxQ007RUFDRSxzQkFBQTtFQUNBLGtEQUFBO0VBQ0EsNEJBQUE7QUNuQ1I7O0FEeUNNO0VBQ0UsZ0JBQUE7RUFDQSxpQ0FBQTtBQ3ZDUjs7QUQwQ007RUFDRSw2QkFBQTtFQUNBLGlDQUFBO0FDeENSOztBRDBDUTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDeENWOztBRDJDUTtFQUNFLGVBQUE7QUN6Q1Y7O0FEZ0RBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQzdDRjs7QUQrQ0U7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FDN0NKOztBRCtDSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDN0NOOztBRGtERTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNoREo7O0FEbURFO0VBQ0UsY0FBQTtBQ2pESjs7QURvREU7RUFDRSxjQUFBO0FDbERKOztBRHNEQTtFQUNFLHNCQUFBO0VBQ0Esa0RBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FDbkRGOztBRHFERTtFQUNFLGFBQUE7QUNuREo7O0FEcURJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ25ETjs7QURzREk7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7QUNwRE47O0FEeURBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ3RERjs7QUR3REU7RUFDRSxhQUFBO0FDdERKOztBRHdERTtFQUNFLGFBQUE7QUN0REo7O0FEMERBO0VBQ0Usc0JBQUE7RUFDQSxrREFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUN2REY7O0FEeURFO0VBQ0UsYUFBQTtBQ3ZESjs7QUR5REk7RUFDRSxxQkFBQTtFQUF1QixrQkFBQTtFQUN2QiwwQkFBQTtFQUE0Qix3QkFBQTtFQUM1QixzQkFBQTtFQUF3QixjQUFBO0VBQ3hCLHdCQUFBO0VBQTBCLFlBQUE7RUFDMUIscUJBQUE7RUFBdUIsMkJBQUE7QUNsRDdCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jbGllbnQvc2VydmljZS9zZXJ2aWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiNnby10b3AtYnV0dG9ue1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDIwcHg7XHJcbiAgcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5zaG93LW1pbi1mYWJ7XHJcbiAgZGlzcGxheTogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZXhhbXBsZS1zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4uc2VhcmNoLXBhZ2Utd3JhcHBlciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmM2Y2O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmhlYWRlci1zZWN0aW9uIHtcclxuICBkaXYge1xyXG4gICAgei1pbmRleDogMjtcclxuICB9XHJcblxyXG4gIGhlaWdodDogMzYwcHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvaW1hZ2VzL0JhY2tncm91bmRzLzE0NDMxMjAwMDcuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgLmhlYWRlci1zZXR0aW5ncyB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogMjAwcHg7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyLXNlYXJjaCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMCAyMHB4O1xyXG5cclxuXHJcbiAgICAuaGVhZGVyLXNlYXJjaC1jaXR5IHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5oZWFkZXItc2VhcmNoLWNpdHk6OmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYmNkZGI7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAyMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgYm90dG9tOiAzMCU7XHJcbiAgICAgIGhlaWdodDogNTAlO1xyXG4gICAgICByaWdodDogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5oZWFkZXItc2xvZ2FuIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5oZWFkZXItc2VjdGlvbjo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgd2lkdGg6IDc4LjQlO1xyXG4gIGhlaWdodDogODMuMiU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLDAsMCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLDAsMCk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBNVlBQUFKckFnTUFBQURtSHVTZUFBQUFDVkJNVkVWTWFYSC8vLy8vLy8vT1pUVi9BQUFBQTNSU1RsTUFaalRvWmZ4S0FBQUhRRWxFUVZSNDJ1M2RTNWFxTUJoRllXRFpTTk1oWkNqb3lLQkdmZ1d2NWRzQ0ZVbncyNHRWMVNpMUVYYkY4K2RGVWVERGJGYnJUZmRUU3lBWFlpL3RldmRUV3lCOVYrdmQ3MVduNi82cXRRclM3MkF2THEyQzlLUHN4UlcwQ2xKbWZVTmF0UmhTWmtWYVpCTUp0aUdTRnRNU2RpN0Z0M1N0OVNFU05FVnNiMHNidFRmZVdpanRUSHYrMDhyYmxsNWVtaDN2THBTZUgwb2RLRzJ0NGZGdWFaOGRTbzJiWWRJYXFzVzdxL3Z1MnI3eFgwQ3N4WVNCOXV6NmVkKy93UFhWYUgyTTFiV0l6ZC9mNXVQNncycU10R0l0bnVoajYzZmJWWklXOHdXRDUrd2EvcG1XSDJEQ01uK01ZTzNnejNRRE1HbFBleVp0ZU04L2dpb00wMHI3UHlSME9hRThTbnN0bmtDTGFXbEhTeHYzTzd5cXcwcVlTL0hDbUE5MEF6QjlUM3M2UHJaLysvYUZubFloaG1rTHNmMEUyVmtaZGJ1M0pDMlNpZ2RuVVNFY3BkMzJ3YUFtTGFhbmZFSGE3WEV0ZC9lelBhenJsbW1SckxTL0d4Q2E4d25mTWUrTmJnRkc4d1pwTCtjTFd0SmlXbWFWVnFaRkF0SnV4c1dETHArNEI1aFoyaWRHSWZyT3VYWXJrSSswcG5ReEZ0S0N0RStIWVdBZzVVcENRRzZRRnJteEpTMHlJMjVJQzRXWVdneGZVNGlSRnZsSmF5a0NobEdsSTYxamxwR2Z0Tkh0QUdraDA4cTBNT1FsMDJJOGtiVElpWVIwZlNodGNPb1hrcFgydHB5bEdWNGtXSUtkTGorNGVKWlpVS01oelRSN2ZDNUplWFowYlJSM2tYSTI2SHZVZUxyaXExS2pJZTFzY05ibGhtNzlURXRhcEowTkhoK2g0SjU5TzJHZGdiU1dpT09FYXBXZnRQOVBidzdSN2Z0TzJneWwzU2VFc2gvTHJkekNyeU5MWS9jSm9lckhiRnYzVUtETjVmb2RxVFBYWUlRMm0rc2sySFJSd2IwVWFMTzZRbUh3OW52WUxFTmFnN2Vxc0ZYRzFSa0UydnlxTXl5YWNublNobjFRZDI4RjJweXVwckNpUnFBVkVrQmEwb0swemt3ZzdRS3U2TzZTTnNOeURFWVB6RElnQmFLZUZucGE2eENncDFXSXdaQVg4bVpsY2dHa1RXeXZMbVJhMG1KdVkrdWxqaDY0dDdwWjB3b1FhUFcwZUlwcXdkSjJLOEJOTGl5UWNzblNtaEZiSmh2U2dyVG1jR0hvd0FQSWNNYWlzNEhiUzlvTXBlV3RvWVBjcEkya1hSN3R3cVcxYmNIUWdRVXpJSzFhREtvdzBwS1d0REI2WUg0QnBDWHQ5eUVlZ0xUMkw0QzBqa1hDRlF1ZkZMTTZVUzEyKzJGekNqRmtsQkJpLytVYlNZc01wTTFsNk14WlhydzlYR1hJWmJ6WDNWMnd0S01xc3V2cUpocW54VWNKM2MydFhqT2hKUzArMnRNV1AzdDFYOUNnWHExYm1SYWY2MmtQNGczd2Rudi9RMHJTSXNtaXJMNy8xb3EwbUlmMTQ1enc0SjFOWDZDbHN0SEdxb1B2SXJZaDNoa1FpSSt6Y1JMRFgyN2dGMU5lcHRuNHhMdHNac1FjMHNaUjc2cElpOW1Mc25lWGNoYlFZdEp3KzVRRDY2WWdMV2JqV1Fjc29NVnN0T0Y1MndWYVpKY3JyT2tDYWFWWlRCMkdTUXZTQ3JTWUVsVVlTRXRhTEZOYW1SYWt4UmZoNFl6SWptQWxMZktqVllnaE4wcVpGbUl0YVVGYTRKTDRXVzlqNi9tTXlLZXpyWXRJVitSVml6RVduNUcyTktlQTlLanNWa0J1UEo1ZmFFaUxCQWwvbkxYMUZtTXI3WXhQalI3VUJtYVJXNmF0UTNURUFmS0tCNXZYMTl3NmV4WVQ4RkRhYUNFaWNvdTF4WXZCNEVmejRzT2Q3UXZieksyYnhTelNiZ3VEQnNoSjJ2YnBRcXdydnN6YjR2UFNGazhYWXRvVHVVbXJPVEdUdEVVL0hYYjhVelRHaFlTbGpVMkl1ektxMmYvdGYxV2wva0pTeEVmV2hhSWE4L1J6cllrSldkMlM5dVR2UDhmdEJySUJrcUJkM1lvSEp5OG8reHpiUHhleU1LR0FCTHJacnN4dnd1N2J2TXNENWMydU11eXV2bzhkZG9EUzFrWXdUQzF0MzM4MnZiVEh0VjVYTHh5K1Rhem8rMlJneXA3MnQvSjZGRXFWWUVoUTJnZmlWU01XZ2ZkeEF2aTR0QmVoOUk4MGU2SjByVWt4TldIb1YveWRlTkFOaUcxQ3NUMlp1clY3RVJNemVEL1gvVTAwMjM0MVY3MktaZjlDblMzbWtQYjJTOHVyVGVYdHFwdmtiZmU5NjZxL2drSU1jMlRhNHFHMFlkL0I3bkpzckE0aGRpZnRkdFZkd0N6U2JoOTB5K0hVNGJnZjV0MTd1K3VmUzlKaUptbUhoOUxxc09DMjczZ05kdUVUVksvTkRsU1hNVGhxVXFSVGhmM1ZVY2QrOWxZVmhvU3FzSHY4cXQ1MHRwTVdTVlZoZi9YVjNZa2Nac1R3Y1dsSFd0ZUdzN01SWkZwTXpkVnF3MWlPc2E2NlBnNTA5NW1hRlJNU3I4NUZITmRQdGpZc1lOWnNzQTBqVCtNTWR4WXRtRi9BcDdMQmR1VFQ2QjRjQ3FwdE1SR1hpYlFZOCtYdThHUWtFQS9xTVQza3c2MDNIc2lJai9XMHcvbGp4NDBCQkNRbmJmaHpOKzY1NFdGdEx3TmVwOTJmT3Z2VTdHMDdlRGR1ZVJKQ3REbGU1SVhsaUVOTytJeUhBWXFqdElJdVhxUzg4YVN3WVozaHNITVBtb3QvRFMyT3QwcmI5N0Z4NEhSWU9leVF6eXFjUmQ5YWkrT05WVmo0dFRFT2ZtTWNFR3ZQWGtOYXZJT3JOVjBERng2RVBwMTZ3QTFtU2dqYjMxTytpMkxzbWdIU1lnN2lXWDIwR3UwOGFaRnJLbll3T1BMcHFCK1AyUlluMHhDTjFrSkt3ZmpSUThUMkp6WnJKbVFrclhPOWtGR3kxVFJJRmlmWVl5SFNhaGNrVEpBTmtIOVBHeUpwa1ZNaDFpKy9hYlFMRXFZMFhZdThwZFVleUV4YVp5SWhPMmxsQTJRbnJmb0wyWTBlYUExa1FEQjFpK3d3QzRiOCtGR0ZJZHZPVmtNZ0kyUUQzT1VmbjRPZTJaMjhoSDhBQUFBQVNVVk9SSzVDWUlJPSk7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG59XHJcblxyXG4uaGVhZGVyLXNlY3Rpb246OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG9wYWNpdHk6IC4yNTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsbGVmdCBib3R0b20sbGVmdCB0b3AsZnJvbSgjMjgyZDQ3KSx0bygjMzMzYTVhKSk7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoYm90dG9tLCMyODJkNDcsIzMzM2E1YSk7XHJcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KGJvdHRvbSwjMjgyZDQ3IDAsIzMzM2E1YSAxMDAlKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywjMjgyZDQ3LCMzMzNhNWEpO1xyXG59XHJcblxyXG4ubG9nby1pbWFnZSB7XHJcbiAgaGVpZ2h0OiAxMjVweDtcclxufVxyXG5cclxuXHJcbi5iYXNpYy1pbmZvIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIC5iYXNpYy1pbmZvLW5hdi1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIC5iYXNpYy1pbmZvLW5hdmlnYXRlIHtcclxuICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIHRvcDogLTI1cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICB6LWluZGV4OiAzO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG5cclxuICAgICAgYSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuXHJcbiAgLmJhc2ljLWluZm8tY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIHRvcDogLTc1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgICAuYmFzaWMtaW5mby1sb2dvIHtcclxuICAgICAgaW1nIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvdW50ZXItaGVhZGVyIHtcclxuICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgYmFja2dyb3VuZDogIzVkNmZkMztcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgcGFkZGluZzogMHB4IDVweCAwIDVweDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvdW50ZXItYm9keSB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgaGVpZ2h0OiAxNTBweDtcclxuXHJcbiAgICAgIC5jb3VudGVyLWJvZHktbnVtYmVycyB7XHJcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgIGNvbG9yOiAjNTI2M2MzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY291bnRlci1ib2R5LWxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb3VudGVyLWJvZHk6OmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIHRvcDogLTQwcHg7XHJcbiAgICAgIHdpZHRoOiAwO1xyXG4gICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgYm9yZGVyLWxlZnQ6IDE1MHB4IHNvbGlkICNmZmY7XHJcbiAgICAgIGJvcmRlci10b3A6IDQwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDAgc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvdW50ZXItYm9keTo6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICB0b3A6IC00MHB4O1xyXG4gICAgICB3aWR0aDogMDtcclxuICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDE1MHB4IHNvbGlkICNmZmY7XHJcbiAgICAgIGJvcmRlci10b3A6IDQwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDAgc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubmFtZS1zZWN0aW9uIHtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG5cclxuICAubmFtZS1zZWN0aW9uLWJvZHkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI3NXB4O1xyXG4gIH1cclxuXHJcbiAgI3NlcnZpY2UtbmFtZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICB9XHJcblxyXG4gICNzZXJ2aWNlLW5hbWU6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhcixsZWZ0IHRvcCxyaWdodCB0b3AsZnJvbSgjNWQ2ZmQzKSx0bygjNGE1ZGM0KSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCM1ZDZmZDMsIzRhNWRjNCk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwjNWQ2ZmQzIDAsIzRhNWRjNCAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywjNWQ2ZmQzIDAsIzRhNWRjNCk7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VydmljZS1wcm9ncmFtLWRpdiB7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuLnByb2dyYW0tbGFiZWwge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5jYXItbWFudWZhY3R1cmVycy1zZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uYnJhbmQtc2VydmljZS1saXN0IHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uZmFjaWxpdGllcy1zZWN0aW9uIHtcclxuICBtYXJnaW4tdG9wOiA4NXB4O1xyXG5cclxuICAuZmFjaWxpdHktaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBjb2xvcjogIzk0OTZhMTtcclxuICB9XHJcblxyXG4gIC5mYWNpbGl0eS1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjOTQ5NmExO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuLnNlcnZpY2lpLXNlY3Rpb24ge1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3gtc2hhZG93OiAwIDNweCAzMHB4IDAgcmdiYSgxNjMsMTY5LDE4NiwuMTUpO1xyXG5cclxuICAuc2VydmljaWktY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgbWluLWhlaWdodDogMzUwcHg7XHJcblxyXG4gICAgLnNlcnZpY2lpLXR5cGVzIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICAgICAgcGFkZGluZy10b3A6IDA7XHJcblxyXG4gICAgICAubWF0LWxpc3Qge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBtYXQtbGlzdC1pdGVtIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgLm1hdC1saXN0LWl0ZW0tY29udGVudCB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2VsZWN0ZWQtdHlwZS1hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAzcHggMzBweCAwIHJnYmEoMTYzLDE2OSwxODYsLjE1KTtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNlcnZpY2lpLW9wZXJhdGlvbnMge1xyXG5cclxuICAgICAgLm1hdC1saXN0IHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgbWF0LWxpc3QtaXRlbSB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAuc2VydmljaWktb3BlcmF0aW9ucy1uYW1lIHtcclxuICAgICAgICAgIGNvbG9yOiAjNGE1ZGM0O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNlcnZpY2lpLW9wZXJhdGlvbnMtdmFsdWVzIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5waG90b3Mtc2VjdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG5cclxuICAuaW1nLWZsZXgge1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB3aWR0aDogY2FsYygyNSUgLSAyNXB4KTtcclxuICAgIG1heC13aWR0aDogY2FsYygyNSUgLSAyNXB4KTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAubWF0LW1pbmktZmFiIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgbGVmdDogNTAlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTIwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAub3ZlcmxheS1waWN0dXJlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgb3BhY2l0eTogLjI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuaW1nLWZsZXg6aG92ZXIgLm1hdC1taW5pLWZhYiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC5pbWctZmxleDpob3ZlciAub3ZlcmxheS1waWN0dXJlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuLnJldmlld3Mtc2VjdGlvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3gtc2hhZG93OiAwIDNweCAzMHB4IDAgcmdiYSgxNjMsMTY5LDE4NiwuMTUpO1xyXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG5cclxuICAucmV2aWV3LWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG5cclxuICAgIC5uby1yZXZpZXctY2xhc3Mge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGNvbG9yOiAjNGE1ZGM0O1xyXG4gICAgfVxyXG5cclxuICAgIC5yZXZpZXctdGlsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYzZjY7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICBtYXgtd2lkdGg6IGNhbGMoNTAlIC0gMjBweCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYWRkcmVzcy1zZWN0aW9uIHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcblxyXG4gIC5hZGRyZXNzLWNvbnRhaW5lcntcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIGFnbS1tYXAge1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbi1zZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDMwcHggMCByZ2JhKDE2MywxNjksMTg2LC4xNSk7XHJcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcblxyXG4gIC5kZXNjcmlwdGlvbi1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuXHJcbiAgICBwcmUge1xyXG4gICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7IC8qIFNpbmNlIENTUyAyLjEgKi9cclxuICAgICAgd2hpdGUtc3BhY2U6IC1tb3otcHJlLXdyYXA7IC8qIE1vemlsbGEsIHNpbmNlIDE5OTkgKi9cclxuICAgICAgd2hpdGUtc3BhY2U6IC1wcmUtd3JhcDsgLyogT3BlcmEgNC02ICovXHJcbiAgICAgIHdoaXRlLXNwYWNlOiAtby1wcmUtd3JhcDsgLyogT3BlcmEgNyAqL1xyXG4gICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7IC8qIEludGVybmV0IEV4cGxvcmVyIDUuNSsgKi9cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiI2dvLXRvcC1idXR0b24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMjBweDtcbiAgcmlnaHQ6IDMwcHg7XG59XG5cbi5zaG93LW1pbi1mYWIge1xuICBkaXNwbGF5OiBpbml0aWFsICFpbXBvcnRhbnQ7XG59XG5cbi5leGFtcGxlLXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4uc2VhcmNoLXBhZ2Utd3JhcHBlciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjNmNjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaGVhZGVyLXNlY3Rpb24ge1xuICBoZWlnaHQ6IDM2MHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9pbWFnZXMvQmFja2dyb3VuZHMvMTQ0MzEyMDAwNy5qcGdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmhlYWRlci1zZWN0aW9uIGRpdiB7XG4gIHotaW5kZXg6IDI7XG59XG4uaGVhZGVyLXNlY3Rpb24gLmhlYWRlci1zZXR0aW5ncyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmhlYWRlci1zZWN0aW9uIC5oZWFkZXItY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDIwMHB4O1xufVxuLmhlYWRlci1zZWN0aW9uIC5oZWFkZXItc2VhcmNoIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHggMjBweCAwIDIwcHg7XG59XG4uaGVhZGVyLXNlY3Rpb24gLmhlYWRlci1zZWFyY2ggLmhlYWRlci1zZWFyY2gtY2l0eSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cbi5oZWFkZXItc2VjdGlvbiAuaGVhZGVyLXNlYXJjaCAuaGVhZGVyLXNlYXJjaC1jaXR5OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2JjZGRiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvdHRvbTogMzAlO1xuICBoZWlnaHQ6IDUwJTtcbiAgcmlnaHQ6IDA7XG59XG4uaGVhZGVyLXNlY3Rpb24gLmhlYWRlci1zbG9nYW4ge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5oZWFkZXItc2VjdGlvbjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiA3OC40JTtcbiAgaGVpZ2h0OiA4My4yJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgMCwgMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgMCwgMCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQTVZQUFBSnJBZ01BQUFEbUh1U2VBQUFBQ1ZCTVZFVk1hWEgvLy8vLy8vL09aVFYvQUFBQUEzUlNUbE1BWmpUb1pmeEtBQUFIUUVsRVFWUjQydTNkUzVhcU1CaEZZV0RaU05NaFpDam95S0JHZmdXdjVkc0NGVW53MjR0VjFTaTFFWGJGOCtkRlVlRERiRmJyVGZkVFN5QVhZaS90ZXZkVFd5QjlWK3ZkNzFXbjYvNnF0UXJTNzJBdkxxMkM5S1BzeFJXMENsSm1mVU5hdFJoU1prVmFaQk1KdGlHU0Z0TVNkaTdGdDNTdDlTRVNORVZzYjBzYnRUZmVXaWp0VEh2KzA4cmJsbDVlbWgzdkxwU2VIMG9kS0cydDRmRnVhWjhkU28yYllkSWFxc1c3cS92dTJyN3hYMENzeFlTQjl1ejZlZCsvd1BYVmFIMk0xYldJemQvZjV1UDZ3MnFNdEdJdG51aGo2M2ZiVlpJVzh3V0Q1K3dhL3BtV0gyRENNbitNWU8zZ3ozUURNR2xQZXladGVNOC9naW9NMDByN1B5UjBPYUU4U25zdG5rQ0xhV2xIU3h2M083eXF3MHFZUy9IQ21BOTBBekI5VDNzNlByWi8rL2FGbmxZaGhta0xzZjBFMlZrWmRidTNKQzJTaWdkblVTRWNwZDMyd2FBbUxhYW5mRUhhN1hFdGQvZXpQYXpybG1tUnJMUy9HeENhOHduZk1lK05iZ0ZHOHdacEwrY0xXdEppV21hVlZxWkZBdEp1eHNXRExwKzRCNWhaMmlkR0lmck91WFlya0krMHBuUXhGdEtDdEUrSFlXQWc1VXBDUUc2UUZybXhKUzB5STI1SUM0V1lXZ3hmVTRpUkZ2bEpheWtDaGxHbEk2MWpscEdmdE5IdEFHa2gwOHEwTU9RbDAySThrYlRJaVlSMGZTaHRjT29Ya3BYMnRweWxHVjRrV0lLZExqKzRlSlpaVUtNaHpUUjdmQzVKZVhaMGJSUjNrWEkyNkh2VWVMcmlxMUtqSWUxc2NOYmxobTc5VEV0YXBKME5IaCtoNEo1OU8yR2RnYlNXaU9PRWFwV2Z0UDlQYnc3UjdmdE8yZ3lsM1NlRXNoL0xyZHpDcnlOTFkvY0pvZXJIYkZ2M1VLRE41Zm9kcVRQWFlJUTJtK3NrMkhSUndiMFVhTE82UW1IdzludllMRU5hZzdlcXNGWEcxUmtFMnZ5cU15eWFjbm5TaG4xUWQyOEYycHl1cHJDaVJxQVZFa0JhMG9LMHprd2c3UUt1Nk82U05zTnlERVlQekRJZ0JhS2VGbnBhNnhDZ3AxV0l3WkFYOG1abGNnR2tUV3l2TG1SYTBtSnVZK3Vsamg2NHQ3cFowd29RYVBXMGVJcHF3ZEoySzhCTkxpeVFjc25TbWhGYkpodlNnclRtY0dIb3dBUEljTWFpczRIYlM5b01wZVd0b1lQY3BJMmtYUjd0d3FXMWJjSFFnUVV6SUsxYURLb3cwcEtXdERCNllINEJwQ1h0OXlFZWdMVDJMNEMwamtYQ0ZRdWZGTE02VVMxMisyRnpDakZrbEJCaS8rVWJTWXNNcE0xbDZNeFpYcnc5WEdYSVpielgzVjJ3dEtNcXN1dnFKaHFueFVjSjNjMnRYak9oSlMwKzJ0TVdQM3QxWDlDZ1hxMWJtUmFmNjJrUDRnM3dkbnYvUTByU0lzbWlyTDcvMW9xMG1JZjE0NXp3NEoxTlg2Q2xzdEhHcW9QdklyWWgzaGtRaUkremNSTERYMjdnRjFOZXB0bjR4THRzWnNRYzBzWlI3NnBJaTltTHNuZVhjaGJRWXRKdys1UUQ2NllnTFdialdRY3NvTVZzdE9GNTJ3VmFaSmNyck9rQ2FhVlpUQjJHU1F2U0NyU1lFbFVZU0V0YUxGTmFtUmFreFJmaDRZeklqbUFsTGZLalZZZ2hOMHFaRm1JdGFVRmE0Skw0V1c5ajYvbU15S2V6cll0SVYrUlZpekVXbjVHMk5LZUE5S2pzVmtCdVBKNWZhRWlMQkFsL25MWDFGbU1yN1l4UGpSN1VCbWFSVzZhdFEzVEVBZktLQjV2WDE5dzZleFlUOEZEYWFDRWljb3UxeFl2QjRFZno0c09kN1F2YnpLMmJ4U3pTYmd1REJzaEoydmJwUXF3cnZzemI0dlBTRms4WFl0b1R1VW1yT1RHVHRFVS9IWGI4VXpUR2hZU2xqVTJJdXpLcTJmL3RmMVdsL2tKU3hFZldoYUlhOC9SenJZa0pXZDJTOXVUdlA4ZnRCcklCa3FCZDNZb0hKeThvK3h6YlB4ZXlNS0dBQkxyWnJzeHZ3dTdidk1zRDVjMnVNdXl1dm84ZGRvRFMxa1l3VEMxdDMzODJ2YlRIdFY1WEx4eStUYXpvKzJSZ3lwNzJ0L0o2RkVxVllFaFEyZ2ZpVlNNV2dmZHhBdmk0dEJlaDlJODBlNkowclVreE5XSG9WL3lkZU5BTmlHMUNzVDJadXJWN0VSTXplRC9YL1UwMDIzNDFWNzJLWmY5Q25TM21rUGIyUzh1clRlWHRxcHZrYmZlOTY2cS9na0lNYzJUYTRxRzBZZC9CN25Kc3JBNGhkaWZ0ZHRWZHdDelNiaDkweStIVTRiZ2Y1dDE3dSt1ZlM5SmlKbW1IaDlMcXNPQzI3M2dOZHVFVFZLL05EbFNYTVRocVVxUlRoZjNWVWNkKzlsWVZob1Nxc0h2OHF0NTB0cE1XU1ZWaGYvWFYzWWtjWnNUd2NXbEhXdGVHczdNUlpGcE16ZFZxdzFpT3NhNjZQZzUwOTVtYUZSTVNyODVGSE5kUHRqWXNZTlpzc0EwalQrTU1keFl0bUYvQXA3TEJkdVRUNkI0Y0NxcHRNUkdYaWJRWTgrWHU4R1FrRUEvcU1UM2t3NjAzSHNpSWovVzB3L2xqeDQwQkJDUW5iZmh6Tis2NTRXRnRMd05lcDkyZk92dlU3RzA3ZURkdWVSSkN0RGxlNUlYbGlFTk8rSXlIQVlxanRJSXVYcVM4OGFTd1laM2hzSE1QbW90L0RTMk90MHJiOTdGeDRIUllPZXlRenlxY1JkOWFpK09OVlZqNHRURU9mbU1jRUd2UFhrTmF2SU9yTlYwREZ4NkVQcDE2d0ExbVNnamIzMU8raTJMc21nSFNZZzdpV1gyMEd1MDhhWkZyS25Zd09QTHBxQitQMlJZbjB4Q04xa0pLd2ZqUlE4VDJKelpySm1Ra3JYTzlrRkd5MVRSSUZpZllZeUhTYWhja1RKQU5rSDlQR3lKcGtWTWgxaSsvYWJRTEVxWTBYWXU4cGRVZXlFeGFaeUloTzJsbEEyUW5yZm9MMlkwZWFBMWtRREIxaSt3d0M0YjgrRkdGSWR2T1ZrTWdJMlFEM09VZm40T2UyWjI4aEg4QUFBQUFTVVZPUks1Q1lJST0pO1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuXG4uaGVhZGVyLXNlY3Rpb246OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvcGFjaXR5OiAwLjI1O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IGJvdHRvbSwgbGVmdCB0b3AsIGZyb20oIzI4MmQ0NyksIHRvKCMzMzNhNWEpKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoYm90dG9tLCAjMjgyZDQ3LCAjMzMzYTVhKTtcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KGJvdHRvbSwgIzI4MmQ0NyAwLCAjMzMzYTVhIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzI4MmQ0NywgIzMzM2E1YSk7XG59XG5cbi5sb2dvLWltYWdlIHtcbiAgaGVpZ2h0OiAxMjVweDtcbn1cblxuLmJhc2ljLWluZm8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYmFzaWMtaW5mbyAuYmFzaWMtaW5mby1uYXYtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJhc2ljLWluZm8gLmJhc2ljLWluZm8tbmF2LWNvbnRhaW5lciAuYmFzaWMtaW5mby1uYXZpZ2F0ZSB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0b3A6IC0yNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogMztcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cbi5iYXNpYy1pbmZvIC5iYXNpYy1pbmZvLW5hdi1jb250YWluZXIgLmJhc2ljLWluZm8tbmF2aWdhdGUgYSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5iYXNpYy1pbmZvIC5iYXNpYy1pbmZvLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI1MHB4O1xuICB0b3A6IC03NXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgei1pbmRleDogMztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5iYXNpYy1pbmZvIC5iYXNpYy1pbmZvLWNvbnRhaW5lciAuYmFzaWMtaW5mby1sb2dvIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmJhc2ljLWluZm8gLmJhc2ljLWluZm8tY29udGFpbmVyIC5jb3VudGVyLWhlYWRlciB7XG4gIGhlaWdodDogMTUwcHg7XG4gIGJhY2tncm91bmQ6ICM1ZDZmZDM7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDBweCA1cHggMCA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuLmJhc2ljLWluZm8gLmJhc2ljLWluZm8tY29udGFpbmVyIC5jb3VudGVyLWJvZHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTUwcHg7XG59XG4uYmFzaWMtaW5mbyAuYmFzaWMtaW5mby1jb250YWluZXIgLmNvdW50ZXItYm9keSAuY291bnRlci1ib2R5LW51bWJlcnMge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiAjNTI2M2MzO1xufVxuLmJhc2ljLWluZm8gLmJhc2ljLWluZm8tY29udGFpbmVyIC5jb3VudGVyLWJvZHkgLmNvdW50ZXItYm9keS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5iYXNpYy1pbmZvIC5iYXNpYy1pbmZvLWNvbnRhaW5lciAuY291bnRlci1ib2R5OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB0b3A6IC00MHB4O1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvcmRlci1sZWZ0OiAxNTBweCBzb2xpZCAjZmZmO1xuICBib3JkZXItdG9wOiA0MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAwIHNvbGlkIHRyYW5zcGFyZW50O1xufVxuLmJhc2ljLWluZm8gLmJhc2ljLWluZm8tY29udGFpbmVyIC5jb3VudGVyLWJvZHk6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgdG9wOiAtNDBweDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm9yZGVyLXJpZ2h0OiAxNTBweCBzb2xpZCAjZmZmO1xuICBib3JkZXItdG9wOiA0MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAwIHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4ubmFtZS1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cbi5uYW1lLXNlY3Rpb24gLm5hbWUtc2VjdGlvbi1ib2R5IHtcbiAgbWFyZ2luLWxlZnQ6IDI3NXB4O1xufVxuLm5hbWUtc2VjdGlvbiAjc2VydmljZS1uYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbi5uYW1lLXNlY3Rpb24gI3NlcnZpY2UtbmFtZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogNHB4O1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGZyb20oIzVkNmZkMyksIHRvKCM0YTVkYzQpKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgIzVkNmZkMywgIzRhNWRjNCk7XG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjNWQ2ZmQzIDAsICM0YTVkYzQgMTAwJSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzVkNmZkMyAwLCAjNGE1ZGM0KTtcbn1cblxuLnNlcnZpY2UtcHJvZ3JhbS1kaXYge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4ucHJvZ3JhbS1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5jYXItbWFudWZhY3R1cmVycy1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5icmFuZC1zZXJ2aWNlLWxpc3Qge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uZmFjaWxpdGllcy1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogODVweDtcbn1cbi5mYWNpbGl0aWVzLXNlY3Rpb24gLmZhY2lsaXR5LWljb24ge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgY29sb3I6ICM5NDk2YTE7XG59XG4uZmFjaWxpdGllcy1zZWN0aW9uIC5mYWNpbGl0eS1uYW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzk0OTZhMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2VydmljaWktc2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAzcHggMzBweCAwIHJnYmEoMTYzLCAxNjksIDE4NiwgMC4xNSk7XG59XG4uc2VydmljaWktc2VjdGlvbiAuc2VydmljaWktY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgbWluLWhlaWdodDogMzUwcHg7XG59XG4uc2VydmljaWktc2VjdGlvbiAuc2VydmljaWktY29udGFpbmVyIC5zZXJ2aWNpaS10eXBlcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuLnNlcnZpY2lpLXNlY3Rpb24gLnNlcnZpY2lpLWNvbnRhaW5lciAuc2VydmljaWktdHlwZXMgLm1hdC1saXN0IHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG4uc2VydmljaWktc2VjdGlvbiAuc2VydmljaWktY29udGFpbmVyIC5zZXJ2aWNpaS10eXBlcyBtYXQtbGlzdC1pdGVtIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlZWU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zZXJ2aWNpaS1zZWN0aW9uIC5zZXJ2aWNpaS1jb250YWluZXIgLnNlcnZpY2lpLXR5cGVzIG1hdC1saXN0LWl0ZW0gLm1hdC1saXN0LWl0ZW0tY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLnNlcnZpY2lpLXNlY3Rpb24gLnNlcnZpY2lpLWNvbnRhaW5lciAuc2VydmljaWktdHlwZXMgLnNlbGVjdGVkLXR5cGUtYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAzcHggMzBweCAwIHJnYmEoMTYzLCAxNjksIDE4NiwgMC4xNSk7XG4gIGJvcmRlci1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG59XG4uc2VydmljaWktc2VjdGlvbiAuc2VydmljaWktY29udGFpbmVyIC5zZXJ2aWNpaS1vcGVyYXRpb25zIC5tYXQtbGlzdCB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbi5zZXJ2aWNpaS1zZWN0aW9uIC5zZXJ2aWNpaS1jb250YWluZXIgLnNlcnZpY2lpLW9wZXJhdGlvbnMgbWF0LWxpc3QtaXRlbSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4uc2VydmljaWktc2VjdGlvbiAuc2VydmljaWktY29udGFpbmVyIC5zZXJ2aWNpaS1vcGVyYXRpb25zIG1hdC1saXN0LWl0ZW0gLnNlcnZpY2lpLW9wZXJhdGlvbnMtbmFtZSB7XG4gIGNvbG9yOiAjNGE1ZGM0O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uc2VydmljaWktc2VjdGlvbiAuc2VydmljaWktY29udGFpbmVyIC5zZXJ2aWNpaS1vcGVyYXRpb25zIG1hdC1saXN0LWl0ZW0gLnNlcnZpY2lpLW9wZXJhdGlvbnMtdmFsdWVzIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ucGhvdG9zLXNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuLnBob3Rvcy1zZWN0aW9uIC5pbWctZmxleCB7XG4gIGhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMTBweDtcbiAgd2lkdGg6IGNhbGMoMjUlIC0gMjVweCk7XG4gIG1heC13aWR0aDogY2FsYygyNSUgLSAyNXB4KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnBob3Rvcy1zZWN0aW9uIC5pbWctZmxleCAubWF0LW1pbmktZmFiIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xuICBkaXNwbGF5OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5waG90b3Mtc2VjdGlvbiAub3ZlcmxheS1waWN0dXJlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG9wYWNpdHk6IDAuMjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5waG90b3Mtc2VjdGlvbiAuaW1nLWZsZXg6aG92ZXIgLm1hdC1taW5pLWZhYiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnBob3Rvcy1zZWN0aW9uIC5pbWctZmxleDpob3ZlciAub3ZlcmxheS1waWN0dXJlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5yZXZpZXdzLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDNweCAzMHB4IDAgcmdiYSgxNjMsIDE2OSwgMTg2LCAwLjE1KTtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuLnJldmlld3Mtc2VjdGlvbiAucmV2aWV3LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4ucmV2aWV3cy1zZWN0aW9uIC5yZXZpZXctY29udGFpbmVyIC5uby1yZXZpZXctY2xhc3Mge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjNGE1ZGM0O1xufVxuLnJldmlld3Mtc2VjdGlvbiAucmV2aWV3LWNvbnRhaW5lciAucmV2aWV3LXRpbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmM2Y2O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBwYWRkaW5nLXRvcDogMDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWF4LXdpZHRoOiBjYWxjKDUwJSAtIDIwcHgpO1xufVxuXG4uYWRkcmVzcy1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbi5hZGRyZXNzLXNlY3Rpb24gLmFkZHJlc3MtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5hZGRyZXNzLXNlY3Rpb24gYWdtLW1hcCB7XG4gIGhlaWdodDogNTAwcHg7XG59XG5cbi5kZXNjcmlwdGlvbi1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAzcHggMzBweCAwIHJnYmEoMTYzLCAxNjksIDE4NiwgMC4xNSk7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cbi5kZXNjcmlwdGlvbi1zZWN0aW9uIC5kZXNjcmlwdGlvbi1jb250YWluZXIge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuLmRlc2NyaXB0aW9uLXNlY3Rpb24gLmRlc2NyaXB0aW9uLWNvbnRhaW5lciBwcmUge1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIC8qIFNpbmNlIENTUyAyLjEgKi9cbiAgd2hpdGUtc3BhY2U6IC1tb3otcHJlLXdyYXA7XG4gIC8qIE1vemlsbGEsIHNpbmNlIDE5OTkgKi9cbiAgd2hpdGUtc3BhY2U6IC1wcmUtd3JhcDtcbiAgLyogT3BlcmEgNC02ICovXG4gIHdoaXRlLXNwYWNlOiAtby1wcmUtd3JhcDtcbiAgLyogT3BlcmEgNyAqL1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIC8qIEludGVybmV0IEV4cGxvcmVyIDUuNSsgKi9cbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/client/service/service.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/client/service/service.component.ts ***!
  \*************************************************************/
/*! exports provided: ServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceComponent", function() { return ServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service.service */ "./src/app/modules/client/service/service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_nomenclatoare_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/nomenclatoare.service */ "./src/app/core/nomenclatoare.service.ts");
/* harmony import */ var src_app_core_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/loader/loader.service */ "./src/app/core/loader/loader.service.ts");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./appointment/appointment.component */ "./src/app/modules/client/service/appointment/appointment.component.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _image_viewer_client_image_viewer_client_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./image-viewer-client/image-viewer-client.component */ "./src/app/modules/client/service/image-viewer-client/image-viewer-client.component.ts");












var Days;
(function (Days) {
    Days[Days["Luni"] = 1] = "Luni";
    Days[Days["Marti"] = 2] = "Marti";
    Days[Days["Miercuri"] = 3] = "Miercuri";
    Days[Days["Joi"] = 4] = "Joi";
    Days[Days["Vineri"] = 5] = "Vineri";
    Days[Days["Sambata"] = 6] = "Sambata";
    Days[Days["Duminica"] = 7] = "Duminica";
})(Days || (Days = {}));
var ServiceComponent = /** @class */ (function () {
    function ServiceComponent(route, nomenclatoareService, loaderService, serviceService, _clipboardService, _snackBar, dialog) {
        var _this = this;
        this.route = route;
        this.nomenclatoareService = nomenclatoareService;
        this.loaderService = loaderService;
        this.serviceService = serviceService;
        this._clipboardService = _clipboardService;
        this._snackBar = _snackBar;
        this.dialog = dialog;
        this.showPhone = false;
        this.locationId = 0;
        this.brands = [];
        this.facilities = [];
        this.operations = [];
        this.types = [];
        this.shownTypes = [];
        this.shownOperations = [];
        this.selectedShownOperations = [];
        this.contactTypes = [];
        this.scrollHeight = 0;
        route.params.subscribe(function (val) {
            _this.locationId = parseInt(_this.route.snapshot.paramMap.get('id'));
            if (_this.locationId > 0) {
                _this.GetLocationData();
                _this.GetManufacturers();
                _this.GetFacilities();
                _this.GetOperations();
                _this.GetContactTypes();
                _this.GetOperationsTypes();
            }
        });
    }
    ServiceComponent.prototype.onWindowScroll = function () {
        this.scrollHeight = window.pageYOffset
            || document.documentElement.scrollTop
            || document.body.scrollTop || 0;
    };
    ServiceComponent.prototype.GetLocationData = function () {
        var _this = this;
        this.loaderService.show();
        this.serviceService.GetServices(this.locationId).subscribe(function (response) {
            _this.loaderService.hide();
            _this.details = response;
            lodash__WEBPACK_IMPORTED_MODULE_9__["forEach"](lodash__WEBPACK_IMPORTED_MODULE_9__["range"](1, 8), function (e) {
                if (!lodash__WEBPACK_IMPORTED_MODULE_9__["find"](_this.details.serviceProgram, function (z) { return z.weekDay == e; })) {
                    _this.details.serviceProgram.unshift({
                        weekDay: e,
                        serviceProgramId: null
                    });
                }
            });
            _this.details.serviceProgram = lodash__WEBPACK_IMPORTED_MODULE_9__["sortBy"](_this.details.serviceProgram, function (e) { return e.weekDay; });
            if (_this.operations.length > 0) {
                _this.PopulateOperations();
            }
            _this.details.serviceReviews.forEach(function (e) {
                e.toggle = false;
            });
            console.log(_this.details);
        });
    };
    ServiceComponent.prototype.GetManufacturers = function () {
        var _this = this;
        this.nomenclatoareService.GetCarManufacturers().subscribe(function (e) {
            _this.brands = e;
        });
    };
    ServiceComponent.prototype.GetFacilities = function () {
        var _this = this;
        this.nomenclatoareService.GetServiceFacilities().subscribe(function (e) {
            _this.facilities = e;
        });
    };
    ServiceComponent.prototype.GetOperations = function () {
        var _this = this;
        this.nomenclatoareService.GetServiceOperations().subscribe(function (e) {
            _this.operations = e;
            if (_this.details) {
                _this.PopulateOperations();
            }
        });
    };
    ServiceComponent.prototype.GetOperationsTypes = function () {
        var _this = this;
        this.nomenclatoareService.GetServiceOperationTypes().subscribe(function (e) {
            _this.types = e;
        });
    };
    ServiceComponent.prototype.GetContactTypes = function () {
        var _this = this;
        this.nomenclatoareService.GetContactTypes().subscribe(function (e) {
            _this.contactTypes = e;
        });
    };
    ServiceComponent.prototype.PopulateOperations = function () {
        var _this = this;
        this.details.serviceOperations.forEach(function (e) {
            _this.shownOperations.push({
                description: _this.operations.filter(function (z) { return z.serviceOperationId == e.serviceOperationId; })[0],
                values: e
            });
        });
        this.shownTypes = lodash__WEBPACK_IMPORTED_MODULE_9__["uniqBy"](this.shownOperations.map(function (e) { return e.description.serviceOperationType; }), function (e) { return e.serviceOperationTypeId; });
        this.selectedShownType = this.shownTypes[0];
        this.selectedShownOperations = this.shownOperations.filter(function (z) { return z.description.serviceOperationType.serviceOperationTypeId == _this.selectedShownType.serviceOperationTypeId; });
    };
    ServiceComponent.prototype.ngOnInit = function () {
        this.GetNomenclatoareData();
    };
    ServiceComponent.prototype.GetNomenclatoareData = function () { };
    ServiceComponent.prototype.GetLogoSrc = function () {
        return "https://eservice.blob.core.windows.net/serviceslogo/" + this.details.serviceInfo.serviceInfoId + "/" + this.details.serviceInfo.logo;
    };
    ServiceComponent.prototype.GetPhoneNumber = function () {
        return this.details.serviceContacts.filter(function (e) { return e.contactTypeId == 1; })[0].value;
    };
    ServiceComponent.prototype.TogglePhone = function () {
        this.showPhone = !this.showPhone;
        this._clipboardService.copyFromContent(this.details.serviceContacts.filter(function (e) { return e.contactTypeId == 1; })[0].value);
        this._snackBar.open("Numarul de telefon a fost copiat in clipboard!", null, {
            duration: 3000
        });
    };
    ServiceComponent.prototype.RegisterAppointment = function () {
        var dialogRef = this.dialog.open(_appointment_appointment_component__WEBPACK_IMPORTED_MODULE_8__["AppointmentComponent"], {
            width: '70vw',
            data: {
                details: this.details,
                brands: this.brands,
                opTypes: this.shownTypes,
                op: this.shownOperations
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != undefined && result != null) {
            }
        });
    };
    ServiceComponent.prototype.GetWeekDay = function (program) {
        switch (program.weekDay) {
            case Days.Luni:
                return "Luni";
            case Days.Marti:
                return "Marti";
            case Days.Miercuri:
                return "Miercuri";
            case Days.Joi:
                return "Joi";
            case Days.Vineri:
                return "Vineri";
            case Days.Sambata:
                return "Sambata";
            case Days.Duminica:
                return "Duminica";
        }
    };
    ServiceComponent.prototype.GetProgramHours = function (program) {
        if (program.serviceProgramId == null) {
            return "Inchis";
        }
        return program.openHour.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }) + ":" + program.openMinute.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }) + " - " + program.closeHour.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }) + ":" + program.closeMinute.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
    };
    ServiceComponent.prototype.GetCarBrandName = function (brand) {
        if (this.brands.length > 0) {
            return this.brands.filter(function (e) { return e.carManufacturerId == brand.carManufacturerId; })[0].name;
        }
    };
    ServiceComponent.prototype.NotLastBrand = function (brand) {
        return !(this.details.serviceManufacturers.map(function (e) { return e.carManufacturerId; }).indexOf(brand.carManufacturerId) == this.details.serviceManufacturers.length - 1);
    };
    ServiceComponent.prototype.GetFacilityName = function (op) {
        if (this.facilities.length > 0) {
            return this.facilities.filter(function (e) { return e.serviceFacilityId == op.serviceFacilityId; })[0].name;
        }
    };
    ServiceComponent.prototype.GetFacilityIcon = function (op) {
        if (this.facilities.length > 0) {
            return this.facilities.filter(function (e) { return e.serviceFacilityId == op.serviceFacilityId; })[0].icon;
        }
    };
    ServiceComponent.prototype.GetServiciiActiveClass = function (type) {
        if (this.selectedShownType == type)
            return "mat-list-item selected-type-active";
        return "mat-list-item";
    };
    ServiceComponent.prototype.SelectServiciiType = function (type) {
        this.selectedShownType = type;
        this.selectedShownOperations = this.shownOperations.filter(function (z) { return z.description.serviceOperationType.serviceOperationTypeId == type.serviceOperationTypeId; });
    };
    ServiceComponent.prototype.GetSrcForPhoto = function (photo) {
        return "https://eservice.blob.core.windows.net/serviceimagesthumbnails/" + photo.serviceLocationId + "/" + photo.link;
    };
    ServiceComponent.prototype.OpenImage = function (photo) {
        var dialogRef = this.dialog.open(_image_viewer_client_image_viewer_client_component__WEBPACK_IMPORTED_MODULE_10__["ImageViewerClientComponent"], {
            data: {
                selected: Object.assign({}, photo),
                allPhotos: Object.assign([], this.details.servicePhotos),
                locationId: this.locationId
            }
        });
    };
    ServiceComponent.prototype.GetTypeForContact = function (contact) {
        if (this.details && this.contactTypes.length > 0)
            return this.contactTypes.filter(function (e) { return e.contactTypeId == contact.contactTypeId; })[0].icon;
        return "";
    };
    ServiceComponent.prototype.OpenGoogleMaps = function () {
        window.open("https://maps.google.com/?ll=" + this.details.serviceLocation.latitude + "," + this.details.serviceLocation.longitude, '_blank');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:scroll", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ServiceComponent.prototype, "onWindowScroll", null);
    ServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-service',
            template: __webpack_require__(/*! raw-loader!./service.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/client/service/service.component.html"),
            styles: [__webpack_require__(/*! ./service.component.scss */ "./src/app/modules/client/service/service.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_core_nomenclatoare_service__WEBPACK_IMPORTED_MODULE_4__["NomenclatoareService"],
            src_app_core_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
            _service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"],
            ngx_clipboard__WEBPACK_IMPORTED_MODULE_6__["ClipboardService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]])
    ], ServiceComponent);
    return ServiceComponent;
}());



/***/ }),

/***/ "./src/app/modules/client/service/service.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/client/service/service.service.ts ***!
  \***********************************************************/
/*! exports provided: ServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceService", function() { return ServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ServiceService = /** @class */ (function () {
    function ServiceService(http) {
        this.http = http;
        this.baseUrl = "/api/ServicesClient/";
    }
    ServiceService.prototype.GetServices = function (id) {
        return this.http.get(this.baseUrl + id);
    };
    ServiceService.prototype.AddAppointment = function (app) {
        return this.http.post("/api/Appointment", app);
    };
    ServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ServiceService);
    return ServiceService;
}());



/***/ }),

/***/ "./src/app/modules/client/services/services.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/modules/client/services/services.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-spacer {\n  flex: 1 1 auto;\n}\n.example-spacer .mat-form-field-wrapper {\n  font-size: 15px;\n}\n.services-wrapper {\n  background: #f2f3f6;\n  width: 100%;\n  height: 100%;\n}\nmat-toolbar {\n  position: sticky;\n  position: -webkit-sticky;\n  /* For macOS/iOS Safari */\n  top: 0;\n  /* Sets the sticky toolbar to be on top */\n  z-index: 1000;\n  /* Ensure that your app's content doesn't overlap the toolbar */\n  min-height: 74px;\n}\nmat-toolbar .mat-toolbar-row {\n  min-height: 74px;\n}\n.services-toolbar {\n  background-color: white;\n}\n.search-container {\n  background-color: white;\n  border-radius: 5px;\n  margin: 15px;\n  margin-top: 0px;\n  padding: 15px;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 95px;\n}\n.search-container mat-form-field {\n  font-size: 13px;\n}\n.search-container-title {\n  position: relative;\n  padding: 10px 0;\n}\n.search-container-title::before {\n  content: \"\";\n  width: 40px;\n  height: 4px;\n  left: 0;\n  bottom: 0;\n  position: absolute;\n  background: linear-gradient(90deg, #5d6fd3 0, #4a5dc4);\n}\n.service-tile {\n  height: 250px;\n  background: white;\n  border-radius: 5px;\n  margin-bottom: 25px;\n}\n.service-tile .service-tile-image {\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n}\n.service-tile .service-tile-image img {\n  height: 100%;\n  border-bottom-left-radius: 5px;\n  border-top-left-radius: 5px;\n  position: absolute;\n}\n.service-tile .service-tile-image .service-tile-image-helper {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  color: white;\n  background: rgba(0, 0, 0, 0.5);\n}\n.service-tile .service-tile-body {\n  padding: 10px;\n}\n.service-tile .rating-number {\n  color: #5d6fd3;\n  font-weight: 550;\n}\nagm-map {\n  min-height: 400px;\n  height: 500px;\n  max-height: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jbGllbnQvc2VydmljZXMvQzpcXFVzZXJzXFxhbmRyZWkuZnVuYXJ1XFxEZXNrdG9wXFxMaWNlbnRhXFxlU2VydmljZVxcZVNlcnZpY2VcXENsaWVudEFwcC9zcmNcXGFwcFxcbW9kdWxlc1xcY2xpZW50XFxzZXJ2aWNlc1xcc2VydmljZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvY2xpZW50L3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsY0FBQTtBQ0FGO0FEQ0U7RUFDRSxlQUFBO0FDQ0o7QURJQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNERjtBRElBO0VBQ0UsZ0JBQUE7RUFDQSx3QkFBQTtFQUEwQix5QkFBQTtFQUMxQixNQUFBO0VBQVEseUNBQUE7RUFDUixhQUFBO0VBQWUsK0RBQUE7RUFDZixnQkFBQTtBQ0VGO0FEREU7RUFDRSxnQkFBQTtBQ0dKO0FEQ0E7RUFDRSx1QkFBQTtBQ0VGO0FEQ0E7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLFNBQUE7QUNFRjtBRERFO0VBQ0UsZUFBQTtBQ0dKO0FEQ0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUNFRjtBRENBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUlBLHNEQUFBO0FDRUY7QURDQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNFRjtBREFFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNFSjtBREFJO0VBQ0UsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQ0VOO0FEQ0k7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0FDQ047QURHRTtFQUNFLGFBQUE7QUNESjtBRElFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDRko7QURNQTtFQUVFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NsaWVudC9zZXJ2aWNlcy9zZXJ2aWNlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZXhhbXBsZS1zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG4gIC5tYXQtZm9ybS1maWVsZC13cmFwcGVye1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5zZXJ2aWNlcy13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZjJmM2Y2O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxubWF0LXRvb2xiYXIge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5OyAvKiBGb3IgbWFjT1MvaU9TIFNhZmFyaSAqL1xyXG4gIHRvcDogMDsgLyogU2V0cyB0aGUgc3RpY2t5IHRvb2xiYXIgdG8gYmUgb24gdG9wICovXHJcbiAgei1pbmRleDogMTAwMDsgLyogRW5zdXJlIHRoYXQgeW91ciBhcHAncyBjb250ZW50IGRvZXNuJ3Qgb3ZlcmxhcCB0aGUgdG9vbGJhciAqL1xyXG4gIG1pbi1oZWlnaHQ6IDc0cHg7XHJcbiAgLm1hdC10b29sYmFyLXJvd3tcclxuICAgIG1pbi1oZWlnaHQ6IDc0cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VydmljZXMtdG9vbGJhcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNlYXJjaC1jb250YWluZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbjogMTVweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogOTVweDtcclxuICBtYXQtZm9ybS1maWVsZHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcbn1cclxuXHJcbi5zZWFyY2gtY29udGFpbmVyLXRpdGxle1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxufVxyXG5cclxuLnNlYXJjaC1jb250YWluZXItdGl0bGU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDRweDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsbGVmdCB0b3AscmlnaHQgdG9wLGZyb20oIzVkNmZkMyksdG8oIzRhNWRjNCkpO1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsIzVkNmZkMywjNGE1ZGM0KTtcclxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwjNWQ2ZmQzIDAsIzRhNWRjNCAxMDAlKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIzVkNmZkMyAwLCM0YTVkYzQpO1xyXG59XHJcblxyXG4uc2VydmljZS10aWxlIHtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG5cclxuICAuc2VydmljZS10aWxlLWltYWdlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZXJ2aWNlLXRpbGUtaW1hZ2UtaGVscGVyIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsIDAuNSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2VydmljZS10aWxlLWJvZHkge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcblxyXG4gIC5yYXRpbmctbnVtYmVyIHtcclxuICAgIGNvbG9yOiAjNWQ2ZmQzO1xyXG4gICAgZm9udC13ZWlnaHQ6IDU1MDtcclxuICB9XHJcbn1cclxuXHJcbmFnbS1tYXAge1xyXG4gLy8gaGVpZ2h0OiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgbWF4LWhlaWdodDogNjAwcHg7XHJcbn1cclxuIiwiLmV4YW1wbGUtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG4uZXhhbXBsZS1zcGFjZXIgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5zZXJ2aWNlcy13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogI2YyZjNmNjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxubWF0LXRvb2xiYXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIC8qIEZvciBtYWNPUy9pT1MgU2FmYXJpICovXG4gIHRvcDogMDtcbiAgLyogU2V0cyB0aGUgc3RpY2t5IHRvb2xiYXIgdG8gYmUgb24gdG9wICovXG4gIHotaW5kZXg6IDEwMDA7XG4gIC8qIEVuc3VyZSB0aGF0IHlvdXIgYXBwJ3MgY29udGVudCBkb2Vzbid0IG92ZXJsYXAgdGhlIHRvb2xiYXIgKi9cbiAgbWluLWhlaWdodDogNzRweDtcbn1cbm1hdC10b29sYmFyIC5tYXQtdG9vbGJhci1yb3cge1xuICBtaW4taGVpZ2h0OiA3NHB4O1xufVxuXG4uc2VydmljZXMtdG9vbGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uc2VhcmNoLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogMTVweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDk1cHg7XG59XG4uc2VhcmNoLWNvbnRhaW5lciBtYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnNlYXJjaC1jb250YWluZXItdGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cblxuLnNlYXJjaC1jb250YWluZXItdGl0bGU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDRweDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBmcm9tKCM1ZDZmZDMpLCB0bygjNGE1ZGM0KSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICM1ZDZmZDMsICM0YTVkYzQpO1xuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgIzVkNmZkMyAwLCAjNGE1ZGM0IDEwMCUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM1ZDZmZDMgMCwgIzRhNWRjNCk7XG59XG5cbi5zZXJ2aWNlLXRpbGUge1xuICBoZWlnaHQ6IDI1MHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLnNlcnZpY2UtdGlsZSAuc2VydmljZS10aWxlLWltYWdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uc2VydmljZS10aWxlIC5zZXJ2aWNlLXRpbGUtaW1hZ2UgaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLnNlcnZpY2UtdGlsZSAuc2VydmljZS10aWxlLWltYWdlIC5zZXJ2aWNlLXRpbGUtaW1hZ2UtaGVscGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbi5zZXJ2aWNlLXRpbGUgLnNlcnZpY2UtdGlsZS1ib2R5IHtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5zZXJ2aWNlLXRpbGUgLnJhdGluZy1udW1iZXIge1xuICBjb2xvcjogIzVkNmZkMztcbiAgZm9udC13ZWlnaHQ6IDU1MDtcbn1cblxuYWdtLW1hcCB7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICBtYXgtaGVpZ2h0OiA2MDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/client/services/services.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/client/services/services.component.ts ***!
  \***************************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_core_nomenclatoare_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/nomenclatoare.service */ "./src/app/core/nomenclatoare.service.ts");
/* harmony import */ var src_app_core_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/loader/loader.service */ "./src/app/core/loader/loader.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services.service */ "./src/app/modules/client/services/services.service.ts");









var ParamsObject = /** @class */ (function () {
    function ParamsObject() {
    }
    return ParamsObject;
}());
var ServicesComponent = /** @class */ (function () {
    function ServicesComponent(route, nomenclatoareService, loaderService, servicesService) {
        this.route = route;
        this.nomenclatoareService = nomenclatoareService;
        this.loaderService = loaderService;
        this.servicesService = servicesService;
        this.cityCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.typeCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.brandCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.facilities = [];
        this.facilityCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.selectedFacilities = [];
        this.distances = [5, 10, 15, 20, 25, 30];
        this.selectedDistance = 25;
        this.operationCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.selectedOperations = [];
        this.queryUrl = new ParamsObject();
        this.showMap = false;
        this.GetNomenclatoare();
    }
    ServicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParamMap.subscribe(function (params) {
            var orderObj = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, params).params;
            if (orderObj.latitude) {
                _this.queryUrl.latitude = parseFloat(orderObj.latitude);
            }
            if (orderObj.longitude) {
                _this.queryUrl.longitude = parseFloat(orderObj.longitude);
            }
            if (orderObj.type) {
                _this.queryUrl.type = orderObj.type;
            }
            if (orderObj.brand) {
                _this.queryUrl.brand = orderObj.brand;
            }
            if (window.navigator.geolocation) {
                var x = void 0;
                window.navigator.geolocation.getCurrentPosition(function (e) {
                    var m = {
                        cityId: -1,
                        judet: "Locatie actuala",
                        name: "Locatie actuala",
                        judetAuto: "",
                        latitude: e.coords.latitude,
                        longitude: e.coords.longitude
                    };
                    if (_this.queryUrl.latitude == e.coords.latitude && _this.queryUrl.longitude == e.coords.longitude) {
                        _this.selectedCity = m;
                        _this.cityCtrl.setValue(_this.selectedCity);
                    }
                });
            }
            _this.GetServices();
        });
    };
    ServicesComponent.prototype.GetServices = function () {
        var _this = this;
        this.loaderService.show();
        var x = {
            longitude: this.queryUrl.longitude,
            latitude: this.queryUrl.latitude,
            carManId: this.selectedBrand ? this.selectedBrand.carManufacturerId : null,
            distance: this.selectedDistance,
            opTypeId: this.selectedType ? this.selectedType.serviceOperationTypeId : null,
            facilites: this.selectedFacilities.map(function (e) { return e.serviceFacilityId; }),
            operations: this.selectedOperations.map(function (e) { return e.serviceOperationId; })
        };
        this.services = [];
        this.servicesService.GetServices(x).subscribe(function (response) {
            _this.loaderService.hide();
            _this.services = response;
        });
    };
    ServicesComponent.prototype.GetSrcForService = function (service) {
        return "https://eservice.blob.core.windows.net/serviceimagesthumbnails/" + service.locationId + "/" + service.image;
    };
    ServicesComponent.prototype.GetNomenclatoare = function () {
        this.GetCities();
        this.GetOperationTypes();
        this.GetCarManufacturers();
        this.GetFacilities();
        this.GetOperations();
    };
    ServicesComponent.prototype.CitySelected = function (item) {
        this.queryUrl.latitude = item.latitude;
        this.queryUrl.longitude = item.longitude;
    };
    ServicesComponent.prototype.GetOperations = function () {
        var _this = this;
        this.loaderService.show();
        this.nomenclatoareService.GetServiceOperations().subscribe(function (e) {
            _this.loaderService.hide();
            _this.operations = e;
            _this.filteredOperations = e;
            if (_this.selectedType) {
                _this.filteredOperations = _this.operations.filter(function (z) { return z.serviceOperationType.serviceOperationTypeId == _this.selectedType.serviceOperationTypeId; });
            }
        });
    };
    ServicesComponent.prototype.selectedOperation = function (item) {
        this.selectedOperations.unshift(item);
        lodash__WEBPACK_IMPORTED_MODULE_7__["remove"](this.filteredOperations, item);
    };
    ServicesComponent.prototype.removeOperation = function (item) {
        this.filteredOperations.unshift(item);
        lodash__WEBPACK_IMPORTED_MODULE_7__["remove"](this.selectedOperations, item);
    };
    ServicesComponent.prototype.GetFacilities = function () {
        var _this = this;
        this.loaderService.show();
        this.nomenclatoareService.GetServiceFacilities().subscribe(function (e) {
            _this.loaderService.hide();
            _this.facilities = e;
        });
    };
    ServicesComponent.prototype.selectedFacility = function (item) {
        if (!lodash__WEBPACK_IMPORTED_MODULE_7__["includes"](this.selectedFacilities, item)) {
            this.selectedFacilities.unshift(item);
        }
    };
    ServicesComponent.prototype.removeFacility = function (facility) {
        lodash__WEBPACK_IMPORTED_MODULE_7__["remove"](this.selectedFacilities, facility);
    };
    ServicesComponent.prototype.GetCities = function () {
        var _this = this;
        this.loaderService.show();
        this.nomenclatoareService.GetCities().subscribe(function (response) {
            _this.loaderService.hide();
            _this.cities = response;
            if (_this.queryUrl.latitude && _this.queryUrl.longitude) {
                if (!_this.selectedCity) {
                    _this.selectedCity = _this.cities.filter(function (z) { return z.longitude == _this.queryUrl.longitude && z.latitude == _this.queryUrl.latitude; })[0];
                    _this.cityCtrl.setValue(_this.selectedCity);
                }
            }
            _this.filteredCities = _this.cityCtrl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (query) { return query && query.length > 2; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (state) { return state ? _this._filter(state) : _this.cities.slice(); }));
        });
    };
    ServicesComponent.prototype.GetOperationTypes = function () {
        var _this = this;
        this.nomenclatoareService.GetServiceOperationTypes().subscribe(function (e) {
            _this.operationTypes = e;
            if (_this.queryUrl.type) {
                _this.selectedType = _this.operationTypes.filter(function (z) { return z.serviceOperationTypeId == _this.queryUrl.type; })[0];
                _this.typeCtrl.setValue(_this.selectedType);
            }
            _this.filteredTypes = _this.typeCtrl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return typeof value === 'string' ? value : value.name; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (name) { return name ? _this._filterOp(name) : _this.operationTypes.slice(); }));
        });
    };
    ServicesComponent.prototype.GetCarManufacturers = function () {
        var _this = this;
        this.nomenclatoareService.GetCarManufacturers().subscribe(function (e) {
            _this.brands = e;
            if (_this.queryUrl.brand) {
                _this.selectedBrand = _this.brands.filter(function (z) { return z.carManufacturerId == _this.queryUrl.brand; })[0];
                _this.brandCtrl.setValue(_this.selectedBrand);
            }
            _this.filteredBrands = _this.brandCtrl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return typeof value === 'string' ? value : value.name; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (name) { return name ? _this._filterBrand(name) : _this.brands.slice(); }));
        });
    };
    ServicesComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.cities.filter(function (state) { return state.name.toLowerCase().indexOf(filterValue) === 0; });
    };
    ServicesComponent.prototype._filterOp = function (value) {
        var filterValue = value.toLowerCase();
        return this.operationTypes.filter(function (state) { return state.name.toLowerCase().indexOf(filterValue) === 0; });
    };
    ServicesComponent.prototype._filterBrand = function (value) {
        var filterValue = value.toLowerCase();
        return this.brands.filter(function (state) { return state.name.toLowerCase().indexOf(filterValue) === 0; });
    };
    ServicesComponent.prototype.displayFn = function (entity) {
        return entity ? entity.name : null;
    };
    ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! raw-loader!./services.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/client/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.scss */ "./src/app/modules/client/services/services.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_core_nomenclatoare_service__WEBPACK_IMPORTED_MODULE_4__["NomenclatoareService"],
            src_app_core_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
            _services_service__WEBPACK_IMPORTED_MODULE_8__["ServicesService"]])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/modules/client/services/services.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/client/services/services.service.ts ***!
  \*************************************************************/
/*! exports provided: ServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesService", function() { return ServicesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ServicesService = /** @class */ (function () {
    function ServicesService(http) {
        this.http = http;
        this.baseUrl = "/api/ServicesClient";
    }
    ServicesService.prototype.GetServices = function (request) {
        return this.http.post(this.baseUrl, request);
    };
    ServicesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ServicesService);
    return ServicesService;
}());



/***/ })

}]);
//# sourceMappingURL=modules-client-client-module.js.map