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
require("./MovieField.css");
var core_1 = require("@material-ui/core");
var react_router_dom_1 = require("react-router-dom");
var MovieField = /** @class */ (function (_super) {
    __extends(MovieField, _super);
    function MovieField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MovieField.prototype.render = function () {
        var _a;
        return (react_1["default"].createElement(core_1.Grid, { item: true, className: "view", xs: 12, sm: 6, md: 4, lg: 3 },
            react_1["default"].createElement(react_router_dom_1.Link, { className: "movieLink", to: { pathname: (this.props.movie.id !== undefined ? "/movieDetails/" + this.props.movie.id : '/'), state: { title: this.props.movie.title } } },
                react_1["default"].createElement("figure", { className: "cards__item__pic-wrap" },
                    react_1["default"].createElement("img", { className: "movieImg", src: "https://image.tmdb.org/t/p/w500" + this.props.movie.poster_path, alt: this.props.movie.title + " Movie Poster" })),
                react_1["default"].createElement("div", { className: "cards__item__info" },
                    react_1["default"].createElement("div", { className: "movieTitle" }, this.props.movie.title),
                    react_1["default"].createElement("div", { className: "overview" }, ((_a = this.props.movie.overview) === null || _a === void 0 ? void 0 : _a.split(".")[0]) + ".")))));
    };
    return MovieField;
}(react_1["default"].Component));
exports["default"] = MovieField;
