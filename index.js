/**
 * @file   mofron-comp-ScreenIF/index.js
 * @brief  screen interface for mofron
 * @author simpart
 */
const mf = require('mofron');

mf.comp.ScreenIF = class extends mf.Component {
    
    /**
     * initialize component
     * 
     * @param po paramter or option
     */
    constructor (po) {
        try {
            super();
            this.name('ScreenIF');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * execute full screen mode
     */
    fullScreen () {
        try {
            let full_fnc = document.body.requestFullscreen       || // W3C
                           document.body.requestFullScreen       || // W3C
                           document.body.webkitRequestFullscreen || // Chrome等
                           document.body.webkitRequestFullScreen || // Chrome等
                           document.body.mozRequestFullscreen    || // FireFox
                           document.body.mozRequestFullScreen    || // FireFox
                           document.body.msRequestFullscreen     || // IE11
                           null;
            if (null === full_fnc) {
                return;
            }
            full_func();
            document.body.style['overflow'] = 'auto';
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * exit full screen mode
     */
    windowed () {
        try {
            let win_fnc = document.exitFullscreen         || // W3C
		          document.exitFullScreen         || // W3C
		          document.webkitExitFullscreen   || // Chrome
                          document.webkitExitFullScreen   || // Chrome
                          document.webkitCancelFullscreen || // Chrome
                          document.webkitCancelFullScreen || // Chrome
                          document.mozCancelFullscreen    || // FireFox
                          document.mozCancelFullScreen    || // FireFox
                          document.mozExitFullscreen      || // FireFox
                          document.mozExitFullScreen      || // FireFox
                          document.msExitFullscreen       || // IE11
                          null;
            if (null === win_fnc) {
                return;
            }
            win_fnc();
            /* reset scroll css config */
            document.body.style['overflow'] = null;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.comp.ScreenIF;
/* end of file */
