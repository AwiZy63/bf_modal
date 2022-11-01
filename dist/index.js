'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ReactDOM = require('react-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".modal-window{background-color:hsla(0,0%,100%,.25);bottom:0;left:0;opacity:0;pointer-events:none;position:fixed;right:0;top:0;transition:all .3s;visibility:hidden;z-index:999}.modal-window-visible{opacity:1;pointer-events:all;visibility:visible}.modal-window>div{background:#fff;left:50%;max-width:400px;padding:2em;position:absolute;top:50%;transform:translate(-50%,-50%);width:50%}.modal-close{background-color:transparent;border:none;cursor:pointer;height:32px;margin:0;opacity:.3;padding:0;position:absolute;right:32px;top:32px;width:32px}.modal-close:hover{opacity:1}.modal-close:after,.modal-close:before{background-color:#333;content:\" \";height:33px;left:50%;position:absolute;top:0;width:2px}.modal-close:before{transform:rotate(45deg)}.modal-close:after{transform:rotate(-45deg)}";
styleInject(css_248z);

function Modal({
  title,
  description,
  show,
  onClose
}) {
  const escapeCloseModal = event => {
    if (event.charcode === 27 || event.keyCode === 27) {
      onClose();
    }
  };
  React.useEffect(() => {
    document.body.addEventListener("keydown", escapeCloseModal);
    return () => {
      document.body.removeEventListener("keydown", escapeCloseModal);
    };
  }, []);
  return /*#__PURE__*/ReactDOM__default["default"].createPortal( /*#__PURE__*/React__default["default"].createElement("div", {
    class: `modal-window ${show ? 'modal-window-visible' : ''}`
  }, /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("button", {
    type: "button",
    onClick: () => onClose(),
    class: "modal-close"
  }), /*#__PURE__*/React__default["default"].createElement("h2", null, title || ""), /*#__PURE__*/React__default["default"].createElement("p", null, description || ""))), document.body);
}

exports.Modal = Modal;
