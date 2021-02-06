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
exports.MapContainer = void 0;
var google_maps_react_1 = require("google-maps-react");
var react_1 = require("react");
require("./MapContainer.css");
var mapStyles = {
    width: '400px',
    height: '400px',
    overflowY: 'hidden',
    overflowX: 'hidden'
};
var MapContainer = /** @class */ (function (_super) {
    __extends(MapContainer, _super);
    function MapContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        };
        _this.onMarkerClick = function (props, marker) {
            return _this.setState({
                selectedPlace: props,
                activeMarker: marker,
                showingInfoWindow: true
            });
        };
        _this.onMapClicked = function () {
            if (_this.state.showingInfoWindow) {
                _this.setState({
                    showingInfoWindow: false,
                    activeMarker: null
                });
            }
        };
        return _this;
    }
    MapContainer.prototype.render = function () {
        return (react_1["default"].createElement("div", { className: "map" },
            react_1["default"].createElement(google_maps_react_1.Map, { resetBoundsOnResize: true, style: mapStyles, google: this.props.google, initialCenter: {
                    lat: 49.4742736,
                    lng: 8.5323109
                }, zoom: 14, onClick: this.onMapClicked },
                react_1["default"].createElement(google_maps_react_1.Marker, { onClick: this.onMarkerClick }),
                react_1["default"].createElement(google_maps_react_1.InfoWindow, { onClose: this.onInfoWindowClose, marker: this.state.activeMarker, visible: this.state.showingInfoWindow },
                    react_1["default"].createElement("h2", null,
                        "CinemaPrime ",
                        react_1["default"].createElement("br", null),
                        "Coblitzallee 1-9",
                        react_1["default"].createElement("br", null),
                        "68163 Mannheim")))));
    };
    return MapContainer;
}(react_1.Component));
exports.MapContainer = MapContainer;
exports["default"] = google_maps_react_1.GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(MapContainer);
