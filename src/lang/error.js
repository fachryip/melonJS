/**
 * MelonJS Game Engine
 * Copyright (C) 2011 - 2019 Olivier Biot
 * http://www.melonjs.org
 */

/**
 * melonJS base class for exception handling.
 * @class
 * @extends me.Object
 * @memberOf me
 * @constructor
 * @param {String} msg Error message.
 */
me.Error = me.Object.extend.bind(Error)({
    /**
     * @ignore
     */
    init : function (msg) {
        this.name = "me.Error";
        this.message = msg;
    }
});
