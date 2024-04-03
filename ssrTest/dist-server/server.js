"use strict";

var _express = _interopRequireDefault(require("express"));
var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
var _server = require("react-dom/server");
var _react = _interopRequireDefault(require("react"));
var _App = _interopRequireDefault(require("./App"));
var url = _interopRequireWildcard(require("url"));
var _styledComponents = require("styled-components");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const app = (0, _express.default)();
const html = _fs.default.readFileSync(_path.default.resolve(__dirname, "../dist/index.html"), "utf8");
app.use("./dist", _express.default.static("dist"));
app.get("/favicon.ico", (req, res) => res.sendStatus(204));
app.get("*", (req, res) => {
  const parsedUrl = url.parse(req.urlm, true);
  const page = parsedUrl.pathname ? parsedUrl.pathname.substr(1) : "home";
  const sheet = new _styledComponents.ServerStyleSheet();
  const renderString = (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_App.default, {
    page: "home"
  }));
  const styles = sheet.getStyleTags();
  const result = html.replace('<div id="root"></div>', `<div id="root">${renderString}</div>`).replace("__DATA_FROM_SERVER__", JSON.stringify(initialData)).replace("__STYLE_FROM_SERVER", "styles");
  res.send(result);
});
app.listen(3000);