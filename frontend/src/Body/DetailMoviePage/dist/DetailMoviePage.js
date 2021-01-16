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
        _this.state = ({ url: window.location.href });
        return _this;
    }
    DetailMoviePage.prototype.componentDidMount = function () {
        var _this = this;
        var _a, _b, _c;
        axios_1["default"].get('http://localhost:8080/tmdb/running/').then(function (res) { return res.data; }).then(function (result) {
            _this.setState({
                runningMovies: result
            });
        });
        this.setState({ lastSegment: Number((_a = this.state.url) === null || _a === void 0 ? void 0 : _a.split('/').pop()) });
        (_b = this.state.runningMovies) === null || _b === void 0 ? void 0 : _b.filter(function (movie) { return movie.id === _this.state.lastSegment; });
        this.setState({ movie: (_c = this.state.runningMovies) === null || _c === void 0 ? void 0 : _c.pop() });
    };
    DetailMoviePage.prototype.render = function () {
        var _a, _b, _c, _d, _e;
        console.log((_a = this.state.movie) === null || _a === void 0 ? void 0 : _a.title);
        console.log((_b = this.state.runningMovies) === null || _b === void 0 ? void 0 : _b.length);
        return (react_1["default"].createElement("div", null,
            react_1["default"].createElement("h1", null, this.state.lastSegment),
            react_1["default"].createElement("p", null, (_c = this.state.movie) === null || _c === void 0 ? void 0 : _c.title),
            react_1["default"].createElement("p", null, (_e = (_d = this.state.runningMovies) === null || _d === void 0 ? void 0 : _d.pop()) === null || _e === void 0 ? void 0 : _e.title)));
    };
    return DetailMoviePage;
}(react_1.Component));
exports["default"] = DetailMoviePage;
