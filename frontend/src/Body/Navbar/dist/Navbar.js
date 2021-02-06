"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
require("./Navbar.css");
function Navbar() {
    var _a = react_1.useState(false), click = _a[0], setClick = _a[1];
    var _b = react_1.useState(true), button = _b[0], setButton = _b[1];
    var handleClick = function () { return setClick(!click); };
    var closeMobileMenu = function () { return setClick(false); };
    var showButton = function () {
        if (window.innerWidth <= 960) {
            setButton(false);
        }
        else {
            setButton(true);
        }
    };
    react_1.useEffect(function () {
        showButton();
    }, []);
    window.addEventListener('resize', showButton);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("nav", { className: "navbar" },
            react_1["default"].createElement("div", { className: "navbar-container" },
                react_1["default"].createElement(react_router_dom_1.Link, { style: { whiteSpace: 'pre-wrap' }, to: "/", className: "navbar-logo", onClick: closeMobileMenu },
                    "CinemaPrime  ",
                    react_1["default"].createElement("i", { className: "fas fa-film" })),
                react_1["default"].createElement("div", { className: "menu-icon", onClick: handleClick },
                    react_1["default"].createElement("i", { className: click ? 'fas fa-times' : 'fas fa-bars' })),
                react_1["default"].createElement("ul", { className: click ? 'nav-menu active' : 'nav-menu' },
                    react_1["default"].createElement("li", { className: "nav-item" },
                        react_1["default"].createElement(react_router_dom_1.Link, { to: "/", className: "nav-links", onClick: closeMobileMenu }, "Home")),
                    react_1["default"].createElement("li", { className: "nav-item" },
                        react_1["default"].createElement(react_router_dom_1.Link, { to: "/programm", className: "nav-links", onClick: closeMobileMenu }, "Program")),
                    react_1["default"].createElement("li", { className: "nav-item" },
                        react_1["default"].createElement(react_router_dom_1.Link, { to: "/contact", className: "nav-links", onClick: closeMobileMenu }, "Contact")))))));
}
exports["default"] = Navbar;
