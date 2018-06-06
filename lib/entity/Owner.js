"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Owner = exports.Owner = function () {
    function Owner(firstName, lastName, mail) {
        _classCallCheck(this, Owner);

        this._firstName = firstName;
        this._lastName = lastName;
        this._mail = mail;
    }

    _createClass(Owner, [{
        key: "firstName",
        set: function set(firstName) {
            this._firstName = firstName;
        },
        get: function get() {
            return this._firstName;
        }
    }, {
        key: "lastName",
        set: function set(lastName) {
            this._lastName = lastName;
        },
        get: function get() {
            return this._lastName;
        }
    }, {
        key: "mail",
        set: function set(mail) {
            this._mail = mail;
        },
        get: function get() {
            return this._mail;
        }
    }]);

    return Owner;
}();