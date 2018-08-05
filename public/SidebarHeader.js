'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var SidebarHeader = function (_React$Component) {
  _inherits(SidebarHeader, _React$Component);

  function SidebarHeader(props) {
    _classCallCheck(this, SidebarHeader);

    return _possibleConstructorReturn(this, (SidebarHeader.__proto__ || Object.getPrototypeOf(SidebarHeader)).call(this, props));
  }

  _createClass(SidebarHeader, [{
    key: "render",
    value: function render() {
      return React.createElement("h6", { "class": "sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted" }, React.createElement("span", null, "Messaging"), React.createElement("button", { "class": "add_button1 btn btn-light" }, React.createElement("a", { "class": "d-flex align-items-center text-muted", href: "#" }, React.createElement("span", { "data-feather": "plus-circle" }))));
    }
  }]);

  return SidebarHeader;
}(React.Component);

document.querySelectorAll('.messageSidebarHeader').forEach(function (domContainer) {
  var commentID = parseInt(domContainer.dataset.commentid, 10);
  ReactDOM.render(React.createElement(SidebarHeader, null), domContainer);
});