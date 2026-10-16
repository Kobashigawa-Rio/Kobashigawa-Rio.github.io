/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'display': '&#xe956;',
            'screen': '&#xe956;',
            'laptop': '&#xe957;',
            'computer': '&#xe957;',
            'mobile': '&#xe958;',
            'cell-phone': '&#xe958;',
            'mobile2': '&#xe959;',
            'cell-phone2': '&#xe959;',
            'tablet': '&#xe95a;',
            'mobile3': '&#xe95a;',
            'tv': '&#xe95b;',
            'television': '&#xe95b;',
            'floppy-disk': '&#xe962;',
            'save2': '&#xe962;',
            'users': '&#xe972;',
            'group': '&#xe972;',
            'search': '&#xe986;',
            'magnifier': '&#xe986;',
            'lock': '&#xe98f;',
            'secure': '&#xe98f;',
            'cog': '&#xe994;',
            'gear': '&#xe994;',
            'bin': '&#xe9ac;',
            'trashcan': '&#xe9ac;',
            'sphere': '&#xe9c9;',
            'globe': '&#xe9c9;',
            'plus': '&#xea0a;',
            'add': '&#xea0a;',
            'minus': '&#xea0b;',
            'subtract': '&#xea0b;',
            'play3': '&#xea1c;',
            'player8': '&#xea1c;',
            'pause2': '&#xea1d;',
            'player9': '&#xea1d;',
            'stop2': '&#xea1e;',
            'player10': '&#xea1e;',
            'backward2': '&#xea1f;',
            'player11': '&#xea1f;',
            'forward3': '&#xea20;',
            'player12': '&#xea20;',
            'volume-high': '&#xea26;',
            'volume': '&#xea26;',
            'volume-medium': '&#xea27;',
            'volume2': '&#xea27;',
            'volume-low': '&#xea28;',
            'volume3': '&#xea28;',
            'volume-mute': '&#xea29;',
            'volume4': '&#xea29;',
            'volume-mute2': '&#xea2a;',
            'volume5': '&#xea2a;',
            'volume-increase': '&#xea2b;',
            'volume6': '&#xea2b;',
            'volume-decrease': '&#xea2c;',
            'volume7': '&#xea2c;',
            'loop': '&#xea2d;',
            'repeat': '&#xea2d;',
            'loop2': '&#xea2e;',
            'repeat2': '&#xea2e;',
            'share2': '&#xea82;',
            'social': '&#xea82;',
            'mail4': '&#xea85;',
            'contact4': '&#xea85;',
            'google2': '&#xea89;',
            'brand3': '&#xea89;',
            'facebook': '&#xea90;',
            'brand10': '&#xea90;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icon-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
