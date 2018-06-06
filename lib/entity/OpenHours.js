"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OpenHours = exports.OpenHours = function () {
    function OpenHours(start, end) {
        _classCallCheck(this, OpenHours);

        this._start = start;
        this._end = end;
    }

    _createClass(OpenHours, [{
        key: "start",
        set: function set(start) {
            this._start = start;
        },
        get: function get() {
            return this._start;
        }
    }, {
        key: "end",
        set: function set(end) {
            this._end = end;
        },
        get: function get() {
            return this._end;
        }
    }]);

    return OpenHours;
}();