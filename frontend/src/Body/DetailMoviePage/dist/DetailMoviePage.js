"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
require("../../App.css");
var axios_1 = require("axios");
var DetailMoviePage = /** @class */ (function (_super) {
    __extends(DetailMoviePage, _super);
    function DetailMoviePage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        _this.url = window.location.href;
        _this.lastSegment = _this.url.split('/').pop();
        return _this;
    }
    DetailMoviePage.prototype.componentDidMount = function () {
        var _this = this;
        axios_1["default"].get('http://localhost:8080/tmdb/running/').then(function (res) { return res.data; }).then(function (result) {
            _this.setState({
                runningMovies: result
            });
        });
    };
    //Movie_temp = this.runningMovies.map((i))
    DetailMoviePage.prototype.render = function () {
        return (react_1["default"].createElement("div", null,
            react_1["default"].createElement("h1", null, this.lastSegment)));
    };
    return DetailMoviePage;
}(react_1.Component));
exports["default"] = DetailMoviePage;
