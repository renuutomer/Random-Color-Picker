(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    "use strict";
    
    /**
     * Uses the react-transform babel plugin
     * to rewrite modules so that all react components are
     * exported.
     *
     * This allows us to access those components and test them.
     *
     * ex:
     *
     * // component.js
     *
     * var MyComponent = React.createClass({});
     *
     * // component-test.js
     *
     * var components = require('../component.js');
     *
     * console.log(components.__ReactComponents.MyComponent);
     *
     */
    
    module.exports = function createExport(_ref) {
      var locals = _ref.locals;
    
    
      return function (ReactClass, componentId) {
    
        if (!locals[0].exports) {
          locals[0].exports = {};
        }
    
        if (!locals[0].exports.__ReactComponents) {
          locals[0].exports.__ReactComponents = [];
        }
    
        locals[0].exports.__ReactComponents.push(ReactClass);
    
        return ReactClass;
      };
    };
    
    },{}],2:[function(require,module,exports){
    'use strict';
    
    var _react2 = require('react');
    
    var _react3 = _interopRequireDefault(_react2);
    
    var _reactTransformComponentExports = require('/home/ccuser/.babelscripts/react-transform-component-exports');
    
    var _reactTransformComponentExports2 = _interopRequireDefault(_reactTransformComponentExports);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    var _components = {
        _component: {}
    };
    
    var _homeCcuserBabelscriptsReactTransformComponentExports2 = (0, _reactTransformComponentExports2.default)({
        filename: '/home/ccuser/workspace/react-101-components-interacting-random-color-2/Button.js',
        components: _components,
        locals: [module],
        imports: [_react3.default]
    });
    
    function _wrapComponent(id) {
        return function (Component) {
            return _homeCcuserBabelscriptsReactTransformComponentExports2(Component, id);
        };
    }
    
    var React = require('react');
    
    var Button = _wrapComponent('_component')(React.createClass({
        displayName: 'Button',
    
        render: function render() {
            return React.createElement(
                'button',
                {
                    className: this.props.light ? 'light-button' : 'dark-button', onClick: this.props.onClick },
                'Refresh'
            );
        }
    }));
    
    module.exports = Button;
    
    },{"/home/ccuser/.babelscripts/react-transform-component-exports":1,"react":undefined}],3:[function(require,module,exports){
    'use strict';
    
    var _react2 = require('react');
    
    var _react3 = _interopRequireDefault(_react2);
    
    var _reactTransformComponentExports = require('/home/ccuser/.babelscripts/react-transform-component-exports');
    
    var _reactTransformComponentExports2 = _interopRequireDefault(_reactTransformComponentExports);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    var _components = {
      _component: {}
    };
    
    var _homeCcuserBabelscriptsReactTransformComponentExports2 = (0, _reactTransformComponentExports2.default)({
      filename: '/home/ccuser/workspace/react-101-components-interacting-random-color-2/Random.js',
      components: _components,
      locals: [module],
      imports: [_react3.default]
    });
    
    function _wrapComponent(id) {
      return function (Component) {
        return _homeCcuserBabelscriptsReactTransformComponentExports2(Component, id);
      };
    }
    
    var React = require('react');
    var ReactDOM = require('react-dom');
    var Button = require('./Button');
    
    var Random = _wrapComponent('_component')(React.createClass({
      displayName: 'Random',
    
      getInitialState: function getInitialState() {
        return { color: [10, 120, 250] };
      },
    
      componentDidMount: function componentDidMount() {
        this.applyColor();
      },
    
      componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
        this.applyColor();
      },
    
      formatColor: function formatColor(ary) {
        return 'rgb(' + ary.join(', ') + ')';
      },
    
      isLight: function isLight() {
        var rgb = this.state.color;
        return rgb.reduce(function (a, b) {
          return a + b;
        }) < 127 * 3;
      },
    
      applyColor: function applyColor() {
        var color = this.formatColor(this.state.color);
        document.body.style.background = color;
      },
    
      chooseColor: function chooseColor() {
        for (var i = 0, random = []; i < 3; i++) {
          random.push(Math.floor(Math.random() * 256));
        }
        return random;
      },
    
      handleClick: function handleClick() {
        this.setState({ color: this.chooseColor() });
      },
    
      render: function render() {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'h1',
            { className: this.isLight() ? 'white' : 'black' },
            'Your color is ',
            this.formatColor(this.state.color)
          ),
          React.createElement(Button, { light: this.isLight(), onClick: this.handleClick })
        );
      }
    }));
    
    ReactDOM.render(React.createElement(Random, null), document.getElementById('app'));
    
    },{"./Button":2,"/home/ccuser/.babelscripts/react-transform-component-exports":1,"react":undefined,"react-dom":undefined}]},{},[3]);
    