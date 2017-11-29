webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__password_restore_password_restore_component__ = __webpack_require__("../../../../../src/app/password-restore/password-restore.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'password/restore', component: __WEBPACK_IMPORTED_MODULE_3__password_restore_password_restore_component__["a" /* PasswordRestoreComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */] },
    { path: '**', redirectTo: 'home' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forRoot(routes)
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__password_restore_password_restore_component__ = __webpack_require__("../../../../../src/app/password-restore/password-restore.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_home_module__ = __webpack_require__("../../../../../src/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng_socket_io__ = __webpack_require__("../../../../ng-socket-io/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var config = { url: 'http://localhost:3000', options: {} };
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_16_ng_socket_io__["SocketIoModule"].forRoot(config),
            __WEBPACK_IMPORTED_MODULE_15__angular_router__["RouterModule"],
            __WEBPACK_IMPORTED_MODULE_11__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["PanelModule"],
            __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_14__home_home_module__["a" /* HomeModule */],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["InputTextModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ButtonModule"],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["AutoCompleteModule"],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__password_restore_password_restore_component__["a" /* PasswordRestoreComponent */],
            __WEBPACK_IMPORTED_MODULE_10__register_register_component__["a" /* RegisterComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_12__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_18__services_session_service__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["a" /* HttpClient */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/constants/constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LS_CURRENT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LS_CURRENT_USER_OBJECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SYS_ORIGIN; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");


/* текущий залогиненый пользователь */
var LS_CURRENT_USER = 'currentUser';
var LS_CURRENT_USER_OBJECT = 'currentUserObject';
/* определение хоста для запросов */
var SYS_PROTOCOL = 'http';
var SYS_HOST = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].rest_host;
var SYS_PORT = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].rest_port;
var SYS_ORIGIN = SYS_PROTOCOL + '://' + SYS_HOST + ':' + SYS_PORT;
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = (function () {
    function AuthGuard(router, route, authService, session) {
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.session = session;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var loginExpr = /login/;
        var homeExpr = /home/;
        if (loginExpr.test(state.url.toString())) {
            console.log(!this.session.isActive);
            if (!this.session.isActive) {
                return true;
            }
            else {
                this.router.navigate(['/home']);
                return false;
            }
        }
        else {
            if (this.session.isActive) {
                return true;
            }
            else {
                this.router.navigate(['/login']);
                return false;
            }
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_session_service__["a" /* SessionService */]) === "function" && _d || Object])
], AuthGuard);

var _a, _b, _c, _d;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/home/chat/chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li {\r\n  list-style: none;\r\n}\r\n.mes {\r\n  display: inline-block;\r\n  padding: 10px;\r\n  border: solid 1px;\r\n  margin: 10px;\r\n  border-radius: 5px;\r\n  max-width: 400px;\r\n  word-wrap: break-word;\r\n}\r\n.chat {\r\n  height: 400px;\r\n  overflow-y: scroll;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  <p *ngIf=\"user==null\">loading</p>\r\n  <h3 *ngIf=\"user!=null\">Your interlocutor {{user.firstname}} {{user.lastname}}</h3>\r\n  <div ngClass=\"chat\">\r\n<li *ngFor=\"let message of messgs\" >\r\n  <div *ngIf=\"message.student_send==myId\" style=\"text-align: right; width: 100%;\"><div ngClass=\"mes\"  style=\"background-color: lightgreen;\">{{message.content}}</div></div>\r\n  <div *ngIf=\"message.student_send!=myId\" style=\"text-align: left; width: 100%;\"><div ngClass=\"mes\"  style=\"background-color: lightblue;\">{{message.content}}</div></div>\r\n</li>\r\n  </div>\r\n<input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"messageText\">\r\n<button pButton type=\"button\" (click)=\"onclick(messageText)\" label=\"Send\"></button>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_socket_io__ = __webpack_require__("../../../../ng-socket-io/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__("../../../../axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_constants__ = __webpack_require__("../../../../../src/app/constants/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_student_service__ = __webpack_require__("../../../../../src/app/home/services/student.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChatComponent = (function () {
    function ChatComponent(socket, route, studentService) {
        this.socket = socket;
        this.route = route;
        this.studentService = studentService;
        this.user = {};
        this.messgs = [];
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dialogeId = this.route.snapshot.paramMap.get('dialogid');
        this.studentService.getStudentByDialogId(this.dialogeId).subscribe(function (res) { return _this.user = res; });
        var outerThis = this;
        this.socket.emit("join chat", outerThis.dialogeId);
        __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get(__WEBPACK_IMPORTED_MODULE_4__constants_constants__["c" /* SYS_ORIGIN */] + '/api/auth/checksession').then(function (res) {
            outerThis.myId = res.data.id;
        });
        this.socket.on("msgs_history", function (data) {
            outerThis.messgs = data;
        });
        this.socket.on("newMsg", function (data) {
            console.log(data);
            if (data.chats_id === outerThis.dialogeId) {
                var mess = { content: data.content, student_send: data.student_send };
                outerThis.messgs.push(mess);
                console.log(typeof data.student_send);
                console.log(typeof outerThis.myId);
            }
        });
    };
    ChatComponent.prototype.onclick = function (messageText) {
        var outerThis = this;
        console.log(this.messgs);
        this.socket.emit("msg", { chats_id: outerThis.dialogeId, content: messageText });
        this.messageText = '';
    };
    return ChatComponent;
}());
ChatComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chat',
        template: __webpack_require__("../../../../../src/app/home/chat/chat.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/chat/chat.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng_socket_io__["Socket"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng_socket_io__["Socket"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_student_service__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_student_service__["a" /* StudentService */]) === "function" && _c || Object])
], ChatComponent);

var _a, _b, _c;
//# sourceMappingURL=chat.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/comment/comment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li {\r\n  list-style: none;\r\n}\r\n.date {\r\n  text-align: right;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/comment/comment.component.html":
/***/ (function(module, exports) {

module.exports = "<p>{{post.content}}</p>\r\n<li *ngFor=\"let comment of postComments\">\r\n  <p-panel header=\"{{comment.firstname}} {{comment.lastname}}\" [toggleable]=\"true\">\r\n    <p>{{comment.content}}</p>\r\n    <br/>\r\n    <p ngClass=\"date\">{{ comment.date | date:'medium'}}</p>\r\n  </p-panel>\r\n  <br/>\r\n  <br/>\r\n</li>\r\n<p-footer>\r\n  <textarea pInputTextarea [(ngModel)]=\"comment.content\"></textarea>\r\n  <br/>\r\n  <button pButton type=\"button\" (click)=\"addComment(comment.content)\" icon=\"fa-plus\" label=\"Leave comment\" class=\"ui-button-success\"></button>\r\n</p-footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/comment/comment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_comment_service__ = __webpack_require__("../../../../../src/app/home/services/comment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_post_service__ = __webpack_require__("../../../../../src/app/home/services/post.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CommentComponent = (function () {
    function CommentComponent(commentService, route, postService, sessionService) {
        this.commentService = commentService;
        this.route = route;
        this.postService = postService;
        this.sessionService = sessionService;
        this.comment = {};
        this.post = {};
    }
    CommentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postId = this.route.snapshot.paramMap.get('id');
        this.postService.getPostInfoById(this.postId).subscribe(function (res) { return _this.post = res; });
        this.commentService.getPostCommentsById(this.postId).subscribe(function (res) {
            _this.postComments = res;
        });
    };
    CommentComponent.prototype.addComment = function (content) {
        var _this = this;
        this.commentService.addComment(content, this.postId).subscribe(function (res) { return null; }, function (err) { return null; }, function () {
            _this.commentService.getPostCommentsById(_this.postId).subscribe(function (res) {
                _this.postComments = res;
            });
        });
        this.comment.content = '';
    };
    return CommentComponent;
}());
CommentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-comment',
        template: __webpack_require__("../../../../../src/app/home/comment/comment.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/comment/comment.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_comment_service__["a" /* CommentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_comment_service__["a" /* CommentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_post_service__["a" /* PostService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_session_service__["a" /* SessionService */]) === "function" && _d || Object])
], CommentComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=comment.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/course-page/course-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".date {\r\n  text-align: right;\r\n}\r\nli {\r\n  list-style: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/course-page/course-page.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{course.course_title}}</h1>\r\n<br/>\r\n<br/>\r\n<p-footer>\r\n  <textarea pInputTextarea [(ngModel)]=\"post.content\"></textarea>\r\n  <br/>\r\n  <button pButton type=\"button\" (click)=\"addPost(post.content)\" icon=\"fa-plus\" label=\"Suggest post\" class=\"ui-button-success\"></button>\r\n</p-footer>\r\n<br/>\r\n<br/>\r\n<li *ngFor=\"let post of coursePosts\">\r\n  <p-panel header=\"{{post.firstname}}   {{post.lastname}}\" [toggleable]=\"true\">\r\n    <p>{{post.content}}</p>\r\n    <br/>\r\n    <p ngClass=\"date\">{{ post.date | date:'medium'}}</p>\r\n  </p-panel>\r\n  <p-footer>\r\n    <button pButton type=\"button\" (click)=\"goToPostCommentsPage(post.id)\" icon=\"fa-comment\" label=\"Comments\" class=\"ui-button-success\"></button>\r\n  </p-footer>\r\n  <br/>\r\n  <br/>\r\n</li>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/home/course-page/course-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_post_service__ = __webpack_require__("../../../../../src/app/home/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_courses_service__ = __webpack_require__("../../../../../src/app/home/services/courses.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CoursePageComponent = (function () {
    function CoursePageComponent(_route, _postService, _router, _courseService) {
        this._route = _route;
        this._postService = _postService;
        this._router = _router;
        this._courseService = _courseService;
        this.course = {};
        this.post = {};
    }
    CoursePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this._route.snapshot.paramMap.get('id');
        this._courseService.getCourseNameByID(this.id).subscribe(function (res) { return _this.course = res; });
        this._postService.getCoursePostsById(this.id).subscribe(function (res) { return _this.coursePosts = res; });
    };
    CoursePageComponent.prototype.goToPostCommentsPage = function (postId) {
        this._router.navigate(['/home/comment/' + postId]);
    };
    CoursePageComponent.prototype.addPost = function (content) {
        var _this = this;
        this._postService.addPost(content, this.id).subscribe(function (r) { return null; }, function (err) { return null; }, function () { return _this._postService.getCoursePostsById(_this.id).subscribe(function (res) { return _this.coursePosts = res; }); });
        console.log(content);
        this.post.content = '';
    };
    return CoursePageComponent;
}());
CoursePageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-course-page',
        template: __webpack_require__("../../../../../src/app/home/course-page/course-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/course-page/course-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_courses_service__["a" /* CoursesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_courses_service__["a" /* CoursesService */]) === "function" && _d || Object])
], CoursePageComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=course-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/courses/courses.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li {\r\n  list-style: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/courses/courses.component.html":
/***/ (function(module, exports) {

module.exports = "<p-tabView>\r\n  <p-tabPanel header=\"Available courses\">\r\n    <p-autoComplete [(ngModel)]=\"course\" [suggestions]=\"filteredCourses\" (completeMethod)=\"getCourseByAbbr($event)\" field=\"abbr\" [size]=\"30\"\r\n                    placeholder=\"Abbreviation\" [minLength]=\"1\" (keyup)=\"handleLastDelAbbr($event)\" (onSelect)=\"selectHandle()\"></p-autoComplete>\r\n    <p-autoComplete [(ngModel)]=\"course\" [suggestions]=\"filteredCourses\" (completeMethod)=\"getCourseTitle($event)\" field=\"course_title\" [size]=\"30\"\r\n                    placeholder=\"Course title\" [minLength]=\"1\" (keyup)=\"handleLastDelTitle($event)\" (onSelect)=\"selectHandle()\"></p-autoComplete>\r\n    <br/>\r\n    <br/>\r\n    <br/>\r\n    <!--p-dataScroller [value]=\"filteredCourses\" [rows]=\"10\">\r\n      <ng-template let-course pTemplate=\"item\">\r\n        <div class=\"ui-grid ui-grid-responsive ui-fluid\" style=\"font-size:16px;padding:20px;border-bottom:1px solid #D5D5D5;\">\r\n          <div class=\"ui-grid-row\">\r\n            <div class=\"ui-grid-col-1\">\r\n              <p>{{course.abbr}}</p>\r\n            </div>\r\n            <div class=\"ui-grid-col-1\">\r\n              <p>        </p>\r\n            </div>\r\n            <div class=\"ui-grid-col-1\">\r\n              <p>{{course.course_title}}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </p-dataScroller-->\r\n    <li *ngFor=\"let course of filteredCourses\">\r\n      <div class=\"ui-grid ui-grid-responsive ui-fluid\" style=\"font-size:16px;padding:20px;border-bottom:1px solid #D5D5D5;\">\r\n        <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-1\">\r\n            <p>{{course.abbr}}</p>\r\n          </div>\r\n          <div class=\"ui-grid-col-1\">\r\n            <p>        </p>\r\n          </div>\r\n          <div class=\"ui-grid-col-2\">\r\n            <p>{{course.course_title}}</p>\r\n          </div>\r\n          <div class=\"ui-grid-col-1\">\r\n            <p>        </p>\r\n          </div>\r\n          <div class=\"ui-grid-col-1\">\r\n            <a *ngIf=\"!getIsInMyCourses(course.id)\" href=\"javascript:void(0)\" (click)=\"addCourse(course)\"><span class=\"fa fa-icon fa-plus\" style=\"font-size: 1.1em;\"></span></a>\r\n            <a *ngIf=\"getIsInMyCourses(course.id)\" href=\"javascript:void(0)\" (click)=\"unSelectCourse(course)\"><span class=\"fa fa-icon fa-check\" style=\"font-size: 1.1em;\"></span></a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </li>\r\n\r\n  </p-tabPanel>\r\n  <p-tabPanel header=\"My courses\">\r\n    <li *ngFor=\"let course of myCourses\">\r\n      <div class=\"ui-grid ui-grid-responsive ui-fluid\" style=\"font-size:16px;padding:20px;border-bottom:1px solid #D5D5D5;\">\r\n        <div class=\"ui-grid-row\">\r\n\r\n          <div class=\"ui-grid-col-5\">\r\n            <a href=\"javascript:void(0)\" (click)=\"goToCoursePage(course.id)\">\r\n              <div class=\"ui-grid-row\">\r\n                <div class=\"ui-grid-col-1\">\r\n                  <p>{{course.abbr}}</p>\r\n                </div>\r\n                <div class=\"ui-grid-col-2\">\r\n                  <p>        </p>\r\n                </div>\r\n                <div class=\"ui-grid-col-2\">\r\n                  <p>{{course.course_title}}</p>\r\n                </div>\r\n              </div>\r\n\r\n            </a>\r\n          </div>\r\n\r\n          <div class=\"ui-grid-col-1\">\r\n            <p>        </p>\r\n          </div>\r\n          <div class=\"ui-grid-col-1\">\r\n            <a *ngIf=\"getIsInMyCourses(course.id)\" href=\"javascript:void(0)\" (click)=\"unSelectCourse(course)\"><span class=\"fa fa-icon fa-check\" style=\"font-size: 1.1em;\"></span></a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </li>\r\n\r\n    <!--p-dataScroller [value]=\"myCourses\" [rows]=\"10\">\r\n      <ng-template let-course pTemplate=\"item\">\r\n        <div class=\"ui-grid ui-grid-responsive ui-fluid\" style=\"font-size:16px;padding:20px;border-bottom:1px solid #D5D5D5;\">\r\n          <div class=\"ui-grid-row\">\r\n            <div class=\"ui-grid-col-1\">\r\n              <p>{{course.abbr}}</p>\r\n            </div>\r\n            <div class=\"ui-grid-col-1\">\r\n              <p>        </p>\r\n            </div>\r\n            <div class=\"ui-grid-col-1\">\r\n              <p>{{course.course_title}}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </p-dataScroller-->\r\n  </p-tabPanel>\r\n</p-tabView>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/courses/courses.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_courses_service__ = __webpack_require__("../../../../../src/app/home/services/courses.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CoursesComponent = (function () {
    function CoursesComponent(courseService, router, sessionService) {
        this.courseService = courseService;
        this.router = router;
        this.sessionService = sessionService;
        this.selectedCourses = [];
        this.course = {};
        this.courseAbbr = '';
        this.courseTitle = '';
    }
    CoursesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.courseService.getMyCourses().subscribe(function (data) {
            _this.myCourses = data;
        }, function (err) { return console.log('something is wrong on loading mycourses'); }, function () {
            _this.courseService.getAllCourses().subscribe(function (courses) { _this.allCourses = courses; _this.filteredCourses = _this.allCourses; });
        });
    };
    CoursesComponent.prototype.findIndex = function (Course) {
        var index = -1;
        for (var i = 0; i < this.allCourses.length; i++) {
            if (Course.id === this.allCourses[i].id) {
                index = i;
                break;
            }
        }
        return index;
    };
    CoursesComponent.prototype.getCourseByAbbr = function (event) {
        var query = event.query;
        this.filteredCourses = this.filterCourseAbbr(query, this.allCourses);
    };
    CoursesComponent.prototype.getCourseTitle = function (event) {
        var query = event.query;
        this.filteredCourses = this.filterCourseTitle(query, this.allCourses);
    };
    CoursesComponent.prototype.filterCourseAbbr = function (query, courses) {
        var filtered = [];
        for (var i = 0; i < courses.length; i++) {
            var course = courses[i];
            if (course.abbr.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                filtered.push(course);
            }
        }
        return filtered;
    };
    CoursesComponent.prototype.filterCourseTitle = function (query, courses) {
        var filtered = [];
        for (var i = 0; i < courses.length; i++) {
            var course = courses[i];
            if (course.course_title.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                filtered.push(course);
            }
        }
        return filtered;
    };
    CoursesComponent.prototype.addCourse = function (course) {
        course.student_id = this.sessionService.user.id;
        this.myCourses.push(course);
        this.courseService.addCourse(course);
    };
    CoursesComponent.prototype.unSelectCourse = function (course) {
        for (var i = 0; i < this.myCourses.length; i++) {
            if (this.myCourses[i].id === course.id) {
                console.log(i);
                this.myCourses.splice(i, 1);
            }
        }
        this.courseService.deleteCourse(course.id);
    };
    CoursesComponent.prototype.goToCoursePage = function (courseId) {
        this.router.navigate(['/home/course-page/' + courseId]);
    };
    CoursesComponent.prototype.getIsInMyCourses = function (course_id) {
        for (var i = 0; i < this.myCourses.length; i++) {
            if (this.myCourses[i].id === course_id) {
                return true;
            }
        }
        return false;
    };
    CoursesComponent.prototype.handleLastDelAbbr = function (event) {
        if (event.keyCode === 8) {
            this.filteredCourses = this.filterCourseAbbr(this.courseAbbr, this.allCourses);
        }
    };
    CoursesComponent.prototype.handleLastDelTitle = function (event) {
        if (event.keyCode === 8) {
            this.filteredCourses = this.filterCourseTitle(this.courseTitle, this.allCourses);
        }
    };
    CoursesComponent.prototype.selectHandle = function () {
        this.filteredCourses = this.filterCourseAbbr(this.course.abbr, this.allCourses);
    };
    return CoursesComponent;
}());
CoursesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-courses',
        template: __webpack_require__("../../../../../src/app/home/courses/courses.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/courses/courses.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_courses_service__["a" /* CoursesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_courses_service__["a" /* CoursesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_session_service__["a" /* SessionService */]) === "function" && _c || Object])
], CoursesComponent);

var _a, _b, _c;
//# sourceMappingURL=courses.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/friends/friends.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li {\r\n  list-style: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/friends/friends.component.html":
/***/ (function(module, exports) {

module.exports = "<p-tabView>\r\n  <p-tabPanel header=\"All students\">\r\n    <p-autoComplete [(ngModel)]=\"studenname\" [suggestions]=\"filteredStudents\" (completeMethod)=\"getStudentByName($event)\" field=\"firstname\" [size]=\"30\"\r\n                    placeholder=\"Firstname\" [minLength]=\"1\" (keyup)=\"handleEnter($event)\" (onSelect) = \"selectHandle()\"></p-autoComplete>\r\n              <br/>\r\n              <br/>\r\n              <br/>\r\n    <li *ngFor=\"let student of filteredStudents\">\r\n      <div class=\"ui-grid ui-grid-responsive ui-fluid\" style=\"font-size:16px;padding:20px;border-bottom:1px solid #D5D5D5;\">\r\n        <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-1\">\r\n            <p>{{student.firstname}}</p>\r\n          </div>\r\n          <div class=\"ui-grid-col-1\">\r\n            <p>        </p>\r\n          </div>\r\n          <div class=\"ui-grid-col-2\">\r\n            <p>{{student.lastname}}</p>\r\n          </div>\r\n          <div class=\"ui-grid-col-1\">\r\n            <p>        </p>\r\n          </div>\r\n          <div class=\"ui-grid-col-1\">\r\n            <a *ngIf=\"student.status==null\" href=\"javascript:void(0)\" (click)=\"addFriend(student)\"><span class=\"fa fa-icon fa-plus\" style=\"font-size: 1.1em;\"></span></a>\r\n            <a *ngIf=\"(student.status==0)&&(student.active_stud_id==getCurrStudentId(student))\" href=\"javascript:void(0)\" (click)=\"deleteFriend(student)\"><span  style=\"font-size: 1.1em;\">Requested</span></a>\r\n            <a *ngIf=\"(student.status==0)&&(student.active_stud_id!==getCurrStudentId(student))\" href=\"javascript:void(0)\" (click)=\"confirmStudent(student)\"><span  style=\"font-size: 1.1em;\">Confirm</span></a>\r\n            <a *ngIf=\"(student.status==0)&&(student.active_stud_id!==getCurrStudentId(student))\" href=\"javascript:void(0)\" (click)=\"deleteFriend(student)\"><span  style=\"font-size: 1.1em;\">Reject</span></a>\r\n            <a *ngIf=\"student.status==1\" href=\"javascript:void(0)\" (click)=\"deleteFriend(student)\"><span class=\"fa fa-icon fa-trash\" style=\"font-size: 1.1em;\"></span></a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </li>\r\n  </p-tabPanel>\r\n  <p-tabPanel header=\"My friends\">\r\n    <li *ngFor=\"let student of myFriends\">\r\n      <div class=\"ui-grid ui-grid-responsive ui-fluid\" style=\"font-size:16px;padding:20px;border-bottom:1px solid #D5D5D5;\">\r\n        <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-1\">\r\n            <p>{{student.firstname}}</p>\r\n          </div>\r\n          <div class=\"ui-grid-col-1\">\r\n            <p>        </p>\r\n          </div>\r\n          <div class=\"ui-grid-col-2\">\r\n            <p>{{student.lastname}}</p>\r\n          </div>\r\n          <div class=\"ui-grid-col-1\">\r\n            <p>        </p>\r\n          </div>\r\n          <div class=\"ui-grid-col-2\">\r\n            <a href=\"javascript:void(0)\" (click)=\"goToStudentProfile(student.chats_id)\">\r\n              <span class=\"fa fa-icon fa-wechat\"></span>\r\n            </a>\r\n          </div>\r\n          <div class=\"ui-grid-col-1\">\r\n            <a  href=\"javascript:void(0)\" (click)=\"deleteFriend(student)\"><span class=\"fa fa-icon fa-trash\" style=\"font-size: 1.1em;\"></span></a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </li>\r\n  </p-tabPanel>\r\n  <p-tabPanel header=\"Requested\">\r\n    <p-tabView>\r\n      <p-tabPanel header=\"In\">\r\n        <li *ngFor=\"let student of reqIn\">\r\n          <!--a href=\"javascript:void(0)\" (click)=\"goToStudentProfile(student.chats_id)\"-->\r\n            <div class=\"ui-grid ui-grid-responsive ui-fluid\" style=\"font-size:16px;padding:20px;border-bottom:1px solid #D5D5D5;\">\r\n              <div class=\"ui-grid-row\">\r\n                <div class=\"ui-grid-col-1\">\r\n                  <p>{{student.firstname}}</p>\r\n                </div>\r\n                <div class=\"ui-grid-col-1\">\r\n                  <p>        </p>\r\n                </div>\r\n                <div class=\"ui-grid-col-2\">\r\n                  <p>{{student.lastname}}</p>\r\n                </div>\r\n                <div class=\"ui-grid-col-1\">\r\n                  <p>        </p>\r\n                </div>\r\n                <div class=\"ui-grid-col-1\">\r\n                  <a href=\"javascript:void(0)\" (click)=\"confirmStudent(student)\"><span  style=\"font-size: 1.1em;\">Confirm</span></a>\r\n                  <a href=\"javascript:void(0)\" (click)=\"deleteFriend(student)\"><span  style=\"font-size: 1.1em;\">Reject</span></a>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n          <!--/a-->\r\n        </li>\r\n      </p-tabPanel>\r\n      <p-tabPanel header=\"Out\">\r\n        <li *ngFor=\"let student of reqOut\">\r\n        <div class=\"ui-grid ui-grid-responsive ui-fluid\" style=\"font-size:16px;padding:20px;border-bottom:1px solid #D5D5D5;\">\r\n          <div class=\"ui-grid-row\">\r\n            <div class=\"ui-grid-col-1\">\r\n              <p>{{student.firstname}}</p>\r\n            </div>\r\n            <div class=\"ui-grid-col-1\">\r\n              <p>        </p>\r\n            </div>\r\n            <div class=\"ui-grid-col-2\">\r\n              <p>{{student.lastname}}</p>\r\n            </div>\r\n            <div class=\"ui-grid-col-1\">\r\n              <p>        </p>\r\n            </div>\r\n            <div class=\"ui-grid-col-1\">\r\n              <a  href=\"javascript:void(0)\" (click)=\"deleteFriend(student)\"><span  style=\"font-size: 1.1em;\">Cancel</span></a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        </li>\r\n      </p-tabPanel>\r\n    </p-tabView>\r\n  </p-tabPanel>\r\n</p-tabView>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/friends/friends.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_student_service__ = __webpack_require__("../../../../../src/app/home/services/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FriendsComponent = (function () {
    function FriendsComponent(studentService, router, sessionService) {
        this.studentService = studentService;
        this.router = router;
        this.sessionService = sessionService;
        this.studenname = {};
        this.myFriends = [];
        this.reqIn = [];
        this.reqOut = [];
    }
    FriendsComponent.prototype.ngOnInit = function () {
        this.student = this.sessionService.user;
        this.updateAllStudents();
    };
    FriendsComponent.prototype.getStudentByName = function (event) {
        var query = event.query;
        this.filteredStudents = this.filterStudentName(query, this.allStudents);
    };
    FriendsComponent.prototype.filterStudentName = function (query, students) {
        var filtered = [];
        for (var i = 0; i < students.length; i++) {
            var student = students[i];
            if (student.firstname.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                filtered.push(student);
            }
        }
        return filtered;
    };
    FriendsComponent.prototype.goToStudentProfile = function (dialogId) {
        console.log(dialogId);
        this.router.navigate(['/home/chat/' + dialogId]);
    };
    FriendsComponent.prototype.getIsInMyFirends = function (studentId) {
        for (var i = 0; i < this.myFriends.length; i++) {
            if (this.myFriends[i].id === studentId) {
                return true;
            }
        }
        return false;
    };
    FriendsComponent.prototype.addFriend = function (student) {
        var _this = this;
        this.studentService.addFriend(student.id).subscribe(function (r) { return null; }, function (err) { return null; }, function () { return _this.updateAllStudents(); });
    };
    FriendsComponent.prototype.deleteFriend = function (student) {
        var _this = this;
        this.studentService.deleteFriend(student.id).subscribe(function (r) { return null; }, function (err) { return null; }, function () { return _this.updateAllStudents(); });
    };
    FriendsComponent.prototype.getCurrStudentId = function (student) {
        return this.sessionService.user.id;
    };
    FriendsComponent.prototype.confirmStudent = function (student) {
        var _this = this;
        this.studentService.confirmFriend(student.id).subscribe(function (r) { return null; }, function (err) { return null; }, function () { return _this.updateAllStudents(); });
    };
    FriendsComponent.prototype.updateAllStudents = function () {
        var _this = this;
        this.studentService.getAllStudents().subscribe(function (data) { _this.allStudents = data; _this.filteredStudents = _this.allStudents; }, function (err) { return null; }, function () { return _this.studentService.getMyFriends().subscribe(function (data) { _this.myFriends = data; }, function (err) { return null; }, function () { return _this.studentService.getRequestedInStudents().subscribe(function (data) { _this.reqIn = data; }, function (err) { return null; }, function () { return _this.studentService.getRequestedOutStudents().subscribe(function (data) { _this.reqOut = data; }, function (error2) { return null; }, function () { return console.log('completed'); }); }); }); });
    };
    FriendsComponent.prototype.handleEnter = function (event) {
        if (event.keyCode === 8) {
            this.filteredStudents = this.filterStudentName(this.studenname.firstname, this.allStudents);
        }
    };
    FriendsComponent.prototype.selectHandle = function () {
        this.filteredStudents = this.filterStudentName(this.studenname.firstname, this.allStudents);
    };
    return FriendsComponent;
}());
FriendsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-friends',
        template: __webpack_require__("../../../../../src/app/home/friends/friends.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/friends/friends.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_student_service__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_student_service__["a" /* StudentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_session_service__["a" /* SessionService */]) === "function" && _c || Object])
], FriendsComponent);

var _a, _b, _c;
//# sourceMappingURL=friends.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__friends_friends_component__ = __webpack_require__("../../../../../src/app/home/friends/friends.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__courses_courses_component__ = __webpack_require__("../../../../../src/app/home/courses/courses.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__recent_posts_recent_posts_component__ = __webpack_require__("../../../../../src/app/home/recent-posts/recent-posts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__messages_messages_component__ = __webpack_require__("../../../../../src/app/home/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__course_page_course_page_component__ = __webpack_require__("../../../../../src/app/home/course-page/course-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__chat_chat_component__ = __webpack_require__("../../../../../src/app/home/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__comment_comment_component__ = __webpack_require__("../../../../../src/app/home/comment/comment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__my_profile_my_profile_component__ = __webpack_require__("../../../../../src/app/home/my-profile/my-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_3__home_component__["a" /* HomeComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */]],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_6__recent_posts_recent_posts_component__["a" /* RecentPostsComponent */] },
            { path: 'messages', component: __WEBPACK_IMPORTED_MODULE_7__messages_messages_component__["a" /* MessagesComponent */] },
            { path: 'friends', component: __WEBPACK_IMPORTED_MODULE_4__friends_friends_component__["a" /* FriendsComponent */] },
            { path: 'my-profile', component: __WEBPACK_IMPORTED_MODULE_11__my_profile_my_profile_component__["a" /* MyProfileComponent */] },
            { path: 'courses', component: __WEBPACK_IMPORTED_MODULE_5__courses_courses_component__["a" /* CoursesComponent */] },
            { path: 'comment/:id', component: __WEBPACK_IMPORTED_MODULE_10__comment_comment_component__["a" /* CommentComponent */] },
            { path: 'chat/:dialogid', component: __WEBPACK_IMPORTED_MODULE_9__chat_chat_component__["a" /* ChatComponent */] },
            { path: 'course-page/:id', component: __WEBPACK_IMPORTED_MODULE_8__course_page_course_page_component__["a" /* CoursePageComponent */] },
            { path: '**', component: __WEBPACK_IMPORTED_MODULE_6__recent_posts_recent_posts_component__["a" /* RecentPostsComponent */] }
        ]
    },
];
var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    return HomeRoutingModule;
}());
HomeRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(routes)
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]]
    })
], HomeRoutingModule);

//# sourceMappingURL=home-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul.sidenav {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  background-color: #f1f1f1;\r\n  #overflow: hidden;\r\n  width: 100%;\r\n  height: 72px;\r\n  position: fixed;\r\n  top: 0;\r\n  z-index:901;\r\n  border-bottom: 1px solid rgb(199, 199, 199);\r\n}\r\n\r\nul.sidenav li a {\r\n  display: block;\r\n  color: #000;\r\n  padding: 8px 16px;\r\n  text-decoration: none;\r\n}\r\n\r\nul.sidenav li a.active {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n}\r\n\r\nul.sidenav li a:hover:not(.active) {\r\n  background-color: #555;\r\n  color: white;\r\n}\r\n\r\ndiv.content {\r\n  margin-top: 72px;\r\n  padding: 10px;\r\n  font-size: 14px;\r\n}\r\n\r\n.btn_exit {\r\n  float: none;\r\n}\r\n\r\nul.sidenav li a {\r\n  float: left;\r\n  padding: 27px 15px;\r\n}\r\n\r\n.btn_exit {\r\n  float: right;\r\n}\r\n\r\n@media screen and (max-width: 400px) {\r\n\r\n  ul.sidenav li a, .btn_exit {\r\n    text-align: center;\r\n    float: none;\r\n  }\r\n  ul.sidenav li a {padding:10px;}\r\n  ul.sidenav {\r\n    height: auto;\r\n  }\r\n  ul.left_menu { margin-top: 111px !important; }\r\n}\r\n\r\n.logo {\r\n  width: 48px;\r\n  height: 48px;\r\n  padding: 10px;\r\n}\r\n\r\na.logo_link {\r\n  padding: 0 !important;\r\n}\r\na.logo_link:hover {\r\n  color: inherit !important;\r\n  background: inherit !important;\r\n}\r\n\r\nul.left_menu {\r\n  background-color: #f1f1f1;\r\n  width: 200px;\r\n  height: 100%;\r\n  position: fixed;\r\n  z-index: 900;\r\n  padding: 0;\r\n  margin: 0;\r\n  font-family: sans-serif;\r\n  overflow: auto;\r\n  box-shadow: 2px 0 10px 0 rgba(199,199,199,1);\r\n  font-size: 0.9em;\r\n}\r\nul.left_menu>li.group {\r\n  margin: 4px;\r\n  padding: 10px;\r\n  background-color: palegreen;\r\n  color: green;\r\n  text-align: center;\r\n  border-bottom: rgb(199, 199, 199) solid 1px;\r\n}\r\nul.left_menu li a {\r\n  display: block;\r\n  color: navy;\r\n  padding: 10px 10px;\r\n  text-decoration: none;\r\n  border-radius: 3px;\r\n  margin: 4px;\r\n}\r\nul.left_menu li a:hover {\r\n  color: ghostwhite;\r\n  background: steelblue;\r\n  border-radius: 3px;\r\n  margin: 4px;\r\n}\r\nul.left_menu>li>a>span {\r\n  padding-right: 7px;\r\n}\r\n\r\n/* dropdown */\r\nli a, .dropbtn {\r\n  display: inline-block;\r\n  color: white;\r\n  #text-align: center;\r\n  padding: 8px 16px;\r\n  text-decoration: none;\r\n}\r\n\r\nli a:hover, .dropdown:hover .dropbtn {\r\n  #background-color: red;\r\n}\r\n\r\nli.dropdown {\r\n  display: inline-block;\r\n}\r\n\r\n.dropdown-content {\r\n  display: none;\r\n  position: absolute;\r\n  background-color: #f9f9f9;\r\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n  z-index: 1;\r\n}\r\n\r\n.dropdown-content a {\r\n  color: black;\r\n  #padding: 12px 16px;\r\n  text-decoration: none;\r\n  display: block;\r\n  text-align: left;\r\n}\r\n\r\n.dropdown-content a:hover {background-color: #f1f1f1}\r\n\r\n.dropdown:hover .dropdown-content {\r\n  display: -ms-grid;\r\n  display: grid;\r\n}\r\n\r\nli.dropdown.btn_exit > div >a {\r\n  padding: 0 10px 0 10px;\r\n  margin: 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"sidenav\">\r\n  <li><a href=\"javascript:void(0)\" (click)=\"menuClick()\"><span class=\"fa fa-icon fa-bars\" style=\"font-size: 1.1em;\"></span></a></li>\r\n  <li>\r\n    <a class=\"logo_link\" routerLink=\"/\">\r\n      <div>\r\n        <div style=\"padding:30px;font-family: sans-serif;font-size: 0.9em;\">Home</div>\r\n      </div>\r\n    </a>\r\n\r\n  </li>\r\n  <li>\r\n    <a class=\"logo_link\">\r\n      <div>\r\n        <div style=\"width: 200px;padding:30px;font-family: sans-serif;font-size: 0.9em\">Welcome {{curUser.firstname}} {{curUser.lastname}}</div>\r\n      </div>\r\n    </a>\r\n  </li>\r\n  <li class=\"btn_exit\"><a href=\"javascript:void(0)\" (click)=\"doLogout()\">Logout</a></li>\r\n  <!--li class=\"btn_exit\" routerLink=\"/home/messages\"><span class=\"fa fa-icon fa-envelope-o\" style=\"font-size: 4.0em;\"></span> </li-->\r\n  <li class=\"btn_exit\"><a routerLink=\"/home/my-profile\">My profile</a></li>\r\n\r\n</ul>\r\n<ul class=\"left_menu\" [@slideInOutAnimation]=\"state\">\r\n  <li >\r\n    <a routerLink=\"friends\" (click)=\"menuClick()\">\r\n      <span class=\"fa fa-icon fa-user\"></span>Friends\r\n    </a>\r\n  </li>\r\n  <li >\r\n    <a routerLink=\"courses\" (click)=\"menuClick()\">\r\n      <span class=\"fa fa-icon fa-university\"></span>Courses\r\n    </a>\r\n  </li>\r\n  <!--li >\r\n    <a routerLink=\"messages\" (click)=\"menuClick()\">\r\n      <span class=\"fa fa-icon fa-envelope\"></span>Messages\r\n    </a>\r\n  </li-->\r\n</ul>\r\n<div #content class=\"content ui-widget\" style=\"height: 100%;\">\r\n  <router-outlet></router-outlet >\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = (function () {
    function HomeComponent(route, authService, sessionService) {
        this.route = route;
        this.authService = authService;
        this.sessionService = sessionService;
        this.state = 'small';
        this.curUser = {};
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.curUser = this.sessionService.user;
    };
    HomeComponent.prototype.menuClick = function () {
        this.state = (this.state === 'small' ? 'large' : 'small');
        if (this.state === 'small') {
            var contentElem = this.content.nativeElement;
            contentElem.style.marginLeft = '0px';
        }
        else {
            var contentElem = this.content.nativeElement;
            contentElem.style.marginLeft = '200px';
        }
    };
    // public get sessionIsActive() {
    //   return true; // we have to check whether the session is active or not
    // }
    HomeComponent.prototype.doLogout = function () {
        this.authService.doLogout();
    };
    return HomeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('content'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], HomeComponent.prototype, "content", void 0);
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('slideInOutAnimation', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('small', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                    left: '-250px',
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('large', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({})),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('small <=> large', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('120ms ease-in')),
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_session_service__["a" /* SessionService */]) === "function" && _d || Object])
], HomeComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_routing_module__ = __webpack_require__("../../../../../src/app/home/home-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messages_messages_component__ = __webpack_require__("../../../../../src/app/home/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__friends_friends_component__ = __webpack_require__("../../../../../src/app/home/friends/friends.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__courses_courses_component__ = __webpack_require__("../../../../../src/app/home/courses/courses.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__recent_posts_recent_posts_component__ = __webpack_require__("../../../../../src/app/home/recent-posts/recent-posts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__course_page_course_page_component__ = __webpack_require__("../../../../../src/app/home/course-page/course-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_post_service__ = __webpack_require__("../../../../../src/app/home/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__chat_chat_component__ = __webpack_require__("../../../../../src/app/home/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__comment_comment_component__ = __webpack_require__("../../../../../src/app/home/comment/comment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_comment_service__ = __webpack_require__("../../../../../src/app/home/services/comment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_courses_service__ = __webpack_require__("../../../../../src/app/home/services/courses.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_student_service__ = __webpack_require__("../../../../../src/app/home/services/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__my_profile_my_profile_component__ = __webpack_require__("../../../../../src/app/home/my-profile/my-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_18__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__home_routing_module__["a" /* HomeRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["TabViewModule"],
            __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["DataScrollerModule"],
            __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["DragDropModule"],
            __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["ButtonModule"],
            __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["AutoCompleteModule"],
            __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["PanelModule"],
            __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["FieldsetModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__messages_messages_component__["a" /* MessagesComponent */], __WEBPACK_IMPORTED_MODULE_4__friends_friends_component__["a" /* FriendsComponent */], __WEBPACK_IMPORTED_MODULE_5__courses_courses_component__["a" /* CoursesComponent */],
            __WEBPACK_IMPORTED_MODULE_6__recent_posts_recent_posts_component__["a" /* RecentPostsComponent */], __WEBPACK_IMPORTED_MODULE_10__course_page_course_page_component__["a" /* CoursePageComponent */], __WEBPACK_IMPORTED_MODULE_12__chat_chat_component__["a" /* ChatComponent */], __WEBPACK_IMPORTED_MODULE_13__comment_comment_component__["a" /* CommentComponent */], __WEBPACK_IMPORTED_MODULE_17__my_profile_my_profile_component__["a" /* MyProfileComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_15__services_courses_service__["a" /* CoursesService */], __WEBPACK_IMPORTED_MODULE_11__services_post_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_14__services_comment_service__["a" /* CommentService */], __WEBPACK_IMPORTED_MODULE_16__services_student_service__["a" /* StudentService */]]
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/messages/messages.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  messages works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessagesComponent = (function () {
    function MessagesComponent() {
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    return MessagesComponent;
}());
MessagesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-messages',
        template: __webpack_require__("../../../../../src/app/home/messages/messages.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/messages/messages.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MessagesComponent);

//# sourceMappingURL=messages.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/my-profile/my-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/my-profile/my-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  my-profile works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/my-profile/my-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyProfileComponent = (function () {
    function MyProfileComponent() {
    }
    MyProfileComponent.prototype.ngOnInit = function () {
    };
    return MyProfileComponent;
}());
MyProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-my-profile',
        template: __webpack_require__("../../../../../src/app/home/my-profile/my-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/my-profile/my-profile.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MyProfileComponent);

//# sourceMappingURL=my-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/recent-posts/recent-posts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".date {\r\n  text-align: right;\r\n}\r\nli {\r\n  list-style: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/recent-posts/recent-posts.component.html":
/***/ (function(module, exports) {

module.exports = "<li *ngFor=\"let post of recentPosts\">\r\n  <p-panel header=\"{{post.firstname}} {{post.lastname}} wrote post on {{post.course_title}}\" [toggleable]=\"true\">\r\n    <p>{{post.content}}</p>\r\n    <br/>\r\n    <p ngClass=\"date\">{{ post.date | date:'medium'}}</p>\r\n  </p-panel>\r\n  <p-footer>\r\n    <button pButton type=\"button\" (click)=\"goToPostCommentsPage(post.id)\" icon=\"fa-comment\" label=\"Comments\" class=\"ui-button-success\"></button>\r\n  </p-footer>\r\n  <br/>\r\n  <br/>\r\n</li>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/recent-posts/recent-posts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecentPostsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_post_service__ = __webpack_require__("../../../../../src/app/home/services/post.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecentPostsComponent = (function () {
    function RecentPostsComponent(_postService, _router) {
        this._postService = _postService;
        this._router = _router;
    }
    RecentPostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._postService.getRecentPosts().subscribe(function (res) { return _this.recentPosts = res; });
    };
    RecentPostsComponent.prototype.goToPostCommentsPage = function (postId) {
        this._router.navigate(['/home/comment/' + postId]);
    };
    return RecentPostsComponent;
}());
RecentPostsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-recent-posts',
        template: __webpack_require__("../../../../../src/app/home/recent-posts/recent-posts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/recent-posts/recent-posts.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object])
], RecentPostsComponent);

var _a, _b;
//# sourceMappingURL=recent-posts.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/services/comment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_constants__ = __webpack_require__("../../../../../src/app/constants/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CommentService = (function () {
    function CommentService(httpClient, http, sessionService) {
        this.httpClient = httpClient;
        this.http = http;
        this.sessionService = sessionService;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["c" /* SYS_ORIGIN */] + '/api';
        this.postCommentsByUrl = this.baseUrl + '/posts/getcomments/';
        this.addCommentUrl = this.baseUrl + '/users/addcomment';
    }
    CommentService.prototype.getPostCommentsById = function (post_id) {
        return this.httpClient.get(this.postCommentsByUrl + post_id);
    };
    CommentService.prototype.addComment = function (content, postsId) {
        console.log(this.addCommentUrl);
        var httpBody = { content: content, posts_id: postsId };
        return this.httpClient.post(this.addCommentUrl, httpBody).pipe();
    };
    return CommentService;
}());
CommentService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_session_service__["a" /* SessionService */]) === "function" && _c || Object])
], CommentService);

var _a, _b, _c;
//# sourceMappingURL=comment.service.js.map

/***/ }),

/***/ "../../../../../src/app/home/services/courses.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_constants__ = __webpack_require__("../../../../../src/app/constants/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CoursesService = (function () {
    function CoursesService(http, httpClient) {
        this.http = http;
        this.httpClient = httpClient;
        this.myCourses = [];
        this.baseUsersUrl = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["c" /* SYS_ORIGIN */] + '/api/users';
        this.allCoursesUrl = this.baseUsersUrl + '/getcourses';
        this.myCoursesUrl = this.baseUsersUrl + '/mycourses';
        this.addCourseUrl = this.baseUsersUrl + '/selectcourse';
        this.deleteCourseUrl = this.baseUsersUrl + '/unselectcourse';
        this.getCourseInfoByIdUrl = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["c" /* SYS_ORIGIN */] + '/api/courses/getInfo/';
    }
    CoursesService.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.allCoursesUrl).subscribe(function (r) {
            _this.allCourses = r.json();
            console.log(r.json());
        });
    };
    CoursesService.prototype.getAllCourses = function () {
        // return of(this.allCourses);
        return this.httpClient.get(this.allCoursesUrl);
    };
    CoursesService.prototype.getMyCourses = function () {
        return this.httpClient.get(this.myCoursesUrl);
    };
    CoursesService.prototype.addCourse = function (course) {
        var httpBody = { courses_id: course.id };
        this.http.post(this.addCourseUrl, httpBody).subscribe(function (r) { return null; });
    };
    CoursesService.prototype.deleteCourse = function (courseId) {
        var httpBody = { courses_id: courseId };
        this.http.post(this.deleteCourseUrl, httpBody).subscribe(function (r) { return null; });
    };
    CoursesService.prototype.getCourseNameByID = function (id) {
        return this.httpClient.get(this.getCourseInfoByIdUrl + id);
    };
    return CoursesService;
}());
CoursesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object])
], CoursesService);

var _a, _b;
//# sourceMappingURL=courses.service.js.map

/***/ }),

/***/ "../../../../../src/app/home/services/post.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_constants__ = __webpack_require__("../../../../../src/app/constants/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostService = (function () {
    function PostService(http, httpClient) {
        this.http = http;
        this.httpClient = httpClient;
        this.baseUsersUrl = __WEBPACK_IMPORTED_MODULE_1__constants_constants__["c" /* SYS_ORIGIN */] + '/api/courses';
        this.coursePostUrl = this.baseUsersUrl + '/getposts/';
        this.newPostsUrl = __WEBPACK_IMPORTED_MODULE_1__constants_constants__["c" /* SYS_ORIGIN */] + '/api/users' + '/newposts/';
        this.addPostUrl = __WEBPACK_IMPORTED_MODULE_1__constants_constants__["c" /* SYS_ORIGIN */] + '/api/users' + '/addpost';
        this.postInfoByIdUrl = __WEBPACK_IMPORTED_MODULE_1__constants_constants__["c" /* SYS_ORIGIN */] + '/api/posts/getinfo/';
    }
    PostService.prototype.getCoursePostsById = function (id) {
        var url = this.coursePostUrl + id.toString();
        return this.httpClient.get(url);
    };
    PostService.prototype.getRecentPosts = function () {
        return this.httpClient.get(this.newPostsUrl);
    };
    PostService.prototype.addPost = function (content, courses_id) {
        var httpBody = { content: content, courses_id: courses_id };
        return this.httpClient.post(this.addPostUrl, httpBody).pipe();
    };
    PostService.prototype.getPostInfoById = function (posts_id) {
        return this.httpClient.get(this.postInfoByIdUrl + posts_id);
    };
    return PostService;
}());
PostService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object])
], PostService);

var _a, _b;
//# sourceMappingURL=post.service.js.map

/***/ }),

/***/ "../../../../../src/app/home/services/student.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_constants__ = __webpack_require__("../../../../../src/app/constants/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StudentService = (function () {
    function StudentService(httpClient, http) {
        this.httpClient = httpClient;
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_1__constants_constants__["c" /* SYS_ORIGIN */] + '/api';
        this.allStudentsByUrl = this.baseUrl + '/users/getstudents';
        this.myFriendByUrl = this.baseUrl + '/users/myfriends';
        this.addFriendByUrl = this.baseUrl + '/users/addfriend';
        this.deleteFriendByUrl = this.baseUrl + '/users/deletefriend';
        this.confirmFriendByUrl = this.baseUrl + '/users/confirmfriend';
        this.studIdByUrl = this.baseUrl + '/users/getchatinfo/';
        this.requestedInStudentsUrl = this.baseUrl + '/users/requestsin';
        this.requestedOutStudentsUrl = this.baseUrl + '/users/requestsout';
    }
    StudentService.prototype.getAllStudents = function () {
        return this.httpClient.get(this.allStudentsByUrl);
    };
    StudentService.prototype.getMyFriends = function () {
        return this.httpClient.get(this.myFriendByUrl);
    };
    StudentService.prototype.addFriend = function (studentId) {
        var httpBody = { friend_id: studentId };
        return this.httpClient.post(this.addFriendByUrl, httpBody).pipe();
    };
    StudentService.prototype.deleteFriend = function (studentId) {
        var httpBody = { friend_id: studentId };
        return this.httpClient.post(this.deleteFriendByUrl, httpBody).pipe();
    };
    StudentService.prototype.confirmFriend = function (studentId) {
        var httpBody = { friend_id: studentId };
        return this.httpClient.post(this.confirmFriendByUrl, httpBody).pipe();
    };
    StudentService.prototype.getStudentByDialogId = function (chatId) {
        return this.httpClient.get(this.studIdByUrl + chatId);
    };
    StudentService.prototype.getRequestedInStudents = function () {
        return this.httpClient.get(this.requestedInStudentsUrl);
    };
    StudentService.prototype.getRequestedOutStudents = function () {
        return this.httpClient.get(this.requestedOutStudentsUrl);
    };
    return StudentService;
}());
StudentService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _b || Object])
], StudentService);

var _a, _b;
//# sourceMappingURL=student.service.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.centered {\r\n  width: 300px;\r\n  margin: 0 auto;\r\n}\r\ninput.width100 {\r\n  width: 100%;\r\n}\r\ndiv.padding100 {\r\n  padding: 100px 0 0 0;\r\n}\r\ndiv.loginButtonTop {\r\n  padding: 10px 0 0 0;\r\n}\r\n.small-font-size {\r\n  min-height: 13px;\r\n  font-size: 0.786em;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"loginForm\" (ngSubmit)=\"doLoginClick()\">\r\n  <div ngClass=\"width100 padding100\">\r\n    <div ngClass=\"centered\">\r\n      <p-panel header=\"Authorization\" [toggleable]=\"false\">\r\n        <table>\r\n          <colgroup>\r\n            <col width=\"80\">\r\n            <col width=\"186\">\r\n          </colgroup>\r\n          <tr>\r\n            <td>Login</td>\r\n            <td>\r\n              <input formControlName=\"login\" type=\"text\" pInputText placeholder=\"login\" ngClass=\"width100\"/>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>Password</td>\r\n            <td>\r\n              <input formControlName=\"password\" type=\"password\" pInputText placeholder=\"password\" ngClass=\"width100\"\r\n                     (keyup)=\"handleEnter($event)\"/>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>\r\n              <div ngClass=\"loginButtonTop\">\r\n                <button pButton label=\"Signin\" type=\"button\" (click)=\"doLoginClick()\"\r\n                        style=\"white-space: nowrap\"></button>\r\n              </div>\r\n            </td>\r\n            <td>\r\n              <div ngClass=\"loginButtonTop\">\r\n                <button pButton label=\"Register\" type=\"button\" (click)=\"gotoRegister()\">\r\n                </button>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </p-panel>\r\n    </div>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(_fb, _route, _router, _auth) {
        this._fb = _fb;
        this._route = _route;
        this._router = _router;
        this._auth = _auth;
        this.loginForm = this._fb.group({
            login: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.doLoginClick = function () {
        this._auth.checkSessionThenAuthenticate(this.loginForm.value.login, this.loginForm.value.password);
    };
    LoginComponent.prototype.gotoRegister = function () {
        this._router.navigate(['/register']);
    };
    LoginComponent.prototype.handleEnter = function (event) {
        if (event.keyCode === 13) {
            this.doLoginClick();
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/password-restore/password-restore.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/password-restore/password-restore.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  password-restore works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/password-restore/password-restore.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordRestoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PasswordRestoreComponent = (function () {
    function PasswordRestoreComponent() {
    }
    PasswordRestoreComponent.prototype.ngOnInit = function () {
    };
    return PasswordRestoreComponent;
}());
PasswordRestoreComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-password-restore',
        template: __webpack_require__("../../../../../src/app/password-restore/password-restore.component.html"),
        styles: [__webpack_require__("../../../../../src/app/password-restore/password-restore.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PasswordRestoreComponent);

//# sourceMappingURL=password-restore.component.js.map

/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.centered {\r\n  width: 300px;\r\n  margin: 0 auto;\r\n}\r\ninput.width100 {\r\n  width: 100%;\r\n}\r\ndiv.padding100 {\r\n  padding: 100px 0 0 0;\r\n}\r\ndiv.loginButtonTop {\r\n  padding: 10px 0 0 0;\r\n}\r\n.small-font-size {\r\n  min-height: 13px;\r\n  font-size: 0.786em;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"registerForm\" (ngSubmit)=\"doLoginClick()\">\r\n  <div ngClass=\"width100 padding100\">\r\n    <div ngClass=\"centered\">\r\n      <p-panel header=\"Registration\" [toggleable]=\"false\">\r\n        <table>\r\n          <colgroup>\r\n            <col width=\"80\">\r\n            <col width=\"186\">\r\n          </colgroup>\r\n          <tr>\r\n            <td>Student Id</td>\r\n            <td>\r\n              <input formControlName=\"id\" type=\"text\" pInputText placeholder=\"student id\" ngClass=\"width100\"/>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>Email</td>\r\n            <td>\r\n              <input formControlName=\"email\" type=\"text\" pInputText placeholder=\"email\" ngClass=\"width100\"/>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>Firstname</td>\r\n            <td>\r\n              <input formControlName=\"firstname\" type=\"text\" pInputText placeholder=\"firsntame\" ngClass=\"width100\" />\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>lastname</td>\r\n            <td>\r\n              <input formControlName=\"lastname\" type=\"text\" pInputText placeholder=\"lastname\" ngClass=\"width100\" />\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>password</td>\r\n            <td>\r\n              <input formControlName=\"password\" type=\"password\" pInputText placeholder=\"password\" ngClass=\"width100\" />\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>passwordMatch</td>\r\n            <td>\r\n              <input formControlName=\"passwordMatch\" type=\"password\" pInputText placeholder=\"passwordMatch\" ngClass=\"width100\" />\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>\r\n              <div ngClass=\"loginButtonTop\">\r\n                <button pButton label=\"Register\" type=\"button\" (click)=\"registerClick()\"\r\n                        style=\"white-space: nowrap\"></button>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </p-panel>\r\n    </div>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(_fb, _route, _router, _auth) {
        this._fb = _fb;
        this._route = _route;
        this._router = _router;
        this._auth = _auth;
        this.newStudent = {};
        this.registerForm = this._fb.group({
            id: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            firstname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            lastname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            passwordMatch: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.registerClick = function () {
        this.newStudent.firstname = this.registerForm.value.firstname;
        this.newStudent.lastname = this.registerForm.value.lastname;
        this.newStudent.email = this.registerForm.value.email;
        this.newStudent.id = this.registerForm.value.id;
        this._auth.doRegister(this.newStudent, this.registerForm.value.password, this.registerForm.value.passwordMatch);
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_constants__ = __webpack_require__("../../../../../src/app/constants/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = (function () {
    function AuthService(http, router, httpService, sessionService) {
        this.http = http;
        this.router = router;
        this.httpService = httpService;
        this.sessionService = sessionService;
        this.baseAuthUrl = __WEBPACK_IMPORTED_MODULE_1__constants_constants__["c" /* SYS_ORIGIN */] + '/api/auth';
        this.signInUrl = this.baseAuthUrl + '/login';
        this.logoutUrl = this.baseAuthUrl + '/logout';
        this.checkSessionUrl = this.baseAuthUrl + '/checksession';
        this.registerUrl = this.baseAuthUrl + '/register';
    }
    AuthService.prototype.authenticate = function (login, key) {
        var _this = this;
        var httpBody = { username: login, password: key };
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var student;
        this.http.post(this.signInUrl, httpBody, options).subscribe(function (r) {
            return student = r.json() || {};
        }, function (err) { return console.log('something went wrong during the authorization'); }, function () {
            if (student.email !== '' && !Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(student.email)) {
                _this.sessionService.createSession(student);
                _this.router.navigate(['/home']);
            }
            else {
                _this.router.navigate(['/login']);
            }
        });
    };
    AuthService.prototype.checkSessionThenAuthenticate = function (login, key) {
        var _this = this;
        this.http.get(this.checkSessionUrl).subscribe(function (r) {
            if (r.json() === false) {
                _this.authenticate(login, key);
            }
            else if (r.json().email === login) {
                _this.router.navigate(['/home']);
            }
            else {
                console.log('something worng with login process');
            }
        }, function (err) { return console.log('something went wrong checking the session'); });
    };
    AuthService.prototype.doLogout = function () {
        var _this = this;
        this.http.get(this.logoutUrl).subscribe(function (r) { return null; }, function (err) { return console.log('something went wrong during the logout'); }, function () {
            _this.sessionService.invalidate();
            _this.router.navigate(['/login']);
        });
    };
    AuthService.prototype.doRegister = function (student, password, passwordMatch) {
        var _this = this;
        var httpBody = { id: student.id, email: student.email, firstname: student.firstname, lastname: student.lastname, password: password, passwordMatch: passwordMatch };
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(this.registerUrl, httpBody, options).subscribe(function (r) {
            student = r.json() || {};
            console.log(r.json());
        }, function (err) { return console.log('something went wrong during the registratio'); }, function () {
            console.log(student);
            if (student.email !== '' && student.email != null) {
                _this.sessionService.createSession(student);
                _this.router.navigate(['/home']);
            }
            else {
                _this.router.navigate(['/login']);
            }
        });
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__session_service__["a" /* SessionService */]) === "function" && _d || Object])
], AuthService);

var _a, _b, _c, _d;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/session.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_constants__ = __webpack_require__("../../../../../src/app/constants/constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SessionService = (function () {
    function SessionService(router) {
        this.router = router;
    }
    SessionService.prototype.createSession = function (user) {
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_2__constants_constants__["b" /* LS_CURRENT_USER_OBJECT */], JSON.stringify(user));
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* LS_CURRENT_USER */], user.email);
        this._user = user;
    };
    Object.defineProperty(SessionService.prototype, "user", {
        get: function () {
            if (this._user == null) {
                var userAsJsonText = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_2__constants_constants__["b" /* LS_CURRENT_USER_OBJECT */]);
                if (userAsJsonText != null && userAsJsonText !== '') {
                    this._user = JSON.parse(userAsJsonText);
                }
            }
            return this._user;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionService.prototype, "isActive", {
        get: function () {
            return this.user != null;
        },
        enumerable: true,
        configurable: true
    });
    SessionService.prototype.invalidate = function () {
        if (this._user != null) {
            localStorage.removeItem(__WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* LS_CURRENT_USER */]);
            localStorage.removeItem(__WEBPACK_IMPORTED_MODULE_2__constants_constants__["b" /* LS_CURRENT_USER_OBJECT */]);
            this._user = null;
        }
        if (this.router.url !== '/login') {
            this.router.navigate(['/login']);
        }
    };
    return SessionService;
}());
SessionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object])
], SessionService);

var _a;
//# sourceMappingURL=session.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    rest_host: 'localhost',
    rest_port: '3000',
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map