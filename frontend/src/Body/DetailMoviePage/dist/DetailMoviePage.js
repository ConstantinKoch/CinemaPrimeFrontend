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
require("./DetailMoviePage.css");
var core_1 = require("@material-ui/core");
var Button_1 = require("@material-ui/core/Button");
var react_select_1 = require("react-select");
var react_router_dom_1 = require("react-router-dom");
var options = [
    { value: '11_01_21', label: '11.01.21 12:00' },
    { value: '12_01_21', label: '12_01_21' },
    { value: '13_01_21', label: '13_01_21' },
    { value: '14_01_21', label: '14_01_21' }
];
var DetailMoviePage = /** @class */ (function (_super) {
    __extends(DetailMoviePage, _super);
    function DetailMoviePage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = ({ url: window.location.href });
        return _this;
    }
    DetailMoviePage.prototype.componentDidMount = function () {
        var _this = this;
        axios_1["default"].get('http://localhost:8080/tmdb/running/').then(function (res) { return res.data; })
            .then(function (result) {
            _this.setState({
                runningMovies: result
            });
        }).then(function () {
            var _a, _b;
            _this.setState({ lastSegment: Number((_a = _this.state.url) === null || _a === void 0 ? void 0 : _a.split('/').pop()) });
            _this.setState({ movie: (_b = _this.state.runningMovies) === null || _b === void 0 ? void 0 : _b.filter(function (movie) { return movie.id === _this.state.lastSegment; }).pop() });
        });
    };
    DetailMoviePage.prototype.handleChange = function (e) {
        console.log("Fruit Selected!!");
        this.setState({ selected_date: e.target.value });
    };
    DetailMoviePage.prototype.render = function () {
        var _a, _b, _c, _d, _e, _f;
        return (react_1["default"].createElement(core_1.Grid, { container: true, className: "contactform_map", justify: "center", spacing: 6, alignItems: "flex-start", direction: "row" },
            react_1["default"].createElement(core_1.Grid, { item: true, xs: 12, sm: 12, md: 6, lg: 6 },
                react_1["default"].createElement("div", { className: "movieDetails_img_div" },
                    react_1["default"].createElement("img", { className: "movieDetails_img", src: 'https://image.tmdb.org/t/p/w500' + ((_a = this.state.movie) === null || _a === void 0 ? void 0 : _a.poster_path), alt: ((_b = this.state.movie) === null || _b === void 0 ? void 0 : _b.title) + ' Movie Poster' }))),
            react_1["default"].createElement(core_1.Grid, { item: true, xs: 12, sm: 12, md: 6, lg: 6 },
                react_1["default"].createElement("div", { className: "movieDetails_info_div" },
                    react_1["default"].createElement("div", { className: "movieDetails_title" }, (_c = this.state.movie) === null || _c === void 0 ? void 0 : _c.title),
                    react_1["default"].createElement("div", { className: "movieDetails_overview" }, (_d = this.state.movie) === null || _d === void 0 ? void 0 : _d.overview)),
                react_1["default"].createElement(react_select_1["default"], { className: "movieDetails_select", classNamePrefix: "select", isDisabled: false, isLoading: false, isClearable: false, isRtl: false, defaultValue: { label: "Select Dept", value: "test" }, isSearchable: false, name: "color", options: options, onChange: this.handleChange }),
                react_1["default"].createElement("div", { className: "movieDetails_btns_div" },
                    react_1["default"].createElement(Button_1["default"], { className: "movieDetails_btn", variant: "contained" }, "Trailer"),
                    react_1["default"].createElement(react_router_dom_1.Link, { className: "movieLink_booking", to: { pathname: (((_e = this.state.movie) === null || _e === void 0 ? void 0 : _e.id) !== undefined ?
                                "/booking/" + ((_f = this.state.movie) === null || _f === void 0 ? void 0 : _f.id) + "/" + this.state.selected_date : '/') } },
                        react_1["default"].createElement(Button_1["default"], { className: "movieDetails_btn", variant: "contained" }, "Book"))))));
    };
    return DetailMoviePage;
}(react_1.Component));
exports["default"] = DetailMoviePage;
