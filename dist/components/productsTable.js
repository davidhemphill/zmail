'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('../styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = props => {
    return _react2.default.createElement(
        'table',
        { width: '100%', style: _styles2.default.table },
        _react2.default.createElement(
            'tbody',
            null,
            props.children
        )
    );
};