'use strict';

var deku = require('deku');
var React = require('react');

module.exports = React.createClass({
  componentDidMount: function componentDidMount() {
    var _props = this.props,
        component = _props.component,
        props = _props.props,
        _opts = _props.opts;

    var opts = _opts || {};

    opts.props = opts.props || props || {};

    this._mountDeku({
      component: component,
      opts: opts
    });
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var component = nextProps.component,
        props = nextProps.props,
        _opts = nextProps.opts;

    var opts = _opts || {};

    opts.props = opts.props || props || {};

    this._mountDeku({
      component: component,
      opts: opts
    });
  },
  render: function render() {
    var _this = this;

    return React.createElement('div', {
      ref: function ref(node) {
        return _this.mountNode = node;
      }
    });
  },
  _mountDeku: function _mountDeku(_ref) {
    var component = _ref.component,
        opts = _ref.opts;
    var mountNode = this.mountNode;


    if (!mountNode) {
      return;
    }

    var tree = deku.tree(component.render(opts));

    deku.render(tree, mountNode);
  }
});