
const deku = require('deku')
const React = require('react')

module.exports = React.createClass({
  componentDidMount () {
    const { component, props, opts: _opts } = this.props
    const opts = _opts || {}

    opts.props = opts.props || props || {}

    this._mountDeku({
      component,
      opts
    })
  },

  componentWillReceiveProps (nextProps) {
    const { component, props, opts: _opts } = nextProps
    const opts = _opts || {}

    opts.props = opts.props || props || {}

    this._mountDeku({
      component,
      opts
    })
  },

  render () {
    return React.createElement('div', {
      ref: (node) => this.mountNode = node
    })
  },

  _mountDeku ({ component, opts }) {
    const { mountNode } = this

    if (!mountNode) {
      return
    }

    const tree = deku.tree(component.render(opts))

    deku.render(tree, mountNode)
  }
})
