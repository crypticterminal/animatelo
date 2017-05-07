/*! Animatelo | The MIT License (MIT) | Copyright (c) 2017 GibboK */
; (function (animatelo) {
    'use strict';
    animatelo.rotateInDownRight = function (selector, options) {
        var keyframeset = [
            {
                "transformOrigin": "right bottom",
                "transform": "rotate3d(0, 0, 1, 45deg)",
                "opacity": "0",
                "offset": "0",
                "easing": "ease"
            },
            {
                "transformOrigin": "right bottom",
                "transform": "none",
                "opacity": "1",
                "offset": "1",
                "easing": "ease"
            }
        ];
        return animatelo._animate(selector, keyframeset, options);
    }
})(window.animatelo = window.animatelo || {});
