'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserNav = function (_React$Component) {
  _inherits(UserNav, _React$Component);

  function UserNav(props) {
    _classCallCheck(this, UserNav);

    return _possibleConstructorReturn(this, (UserNav.__proto__ || Object.getPrototypeOf(UserNav)).call(this, props));
  }

  _createClass(UserNav, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "li",
        { "class": "nav-item" },
        React.createElement(
          "a",
          { "class": "nav-link", href: "#" },
          React.createElement("span", { "data-feather": "user" }),
          "   User 1"
        )
      );
    }
  }]);

  return UserNav;
}(React.Component);

document.querySelectorAll('.userCell').forEach(function (domContainer) {
  var commentID = parseInt(domContainer.dataset.commentid, 10);
  ReactDOM.render(React.createElement(UserNav, null), domContainer);
});