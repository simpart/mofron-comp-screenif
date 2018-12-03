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
            if (document.body.webkitRequestFullScreen) {
                document.body.webkitRequestFullScreen();      // chrome
            } else if (document.body.mozRequestFullScreen) {
                document.body.mozRequestFullScreen();         // firefox
            } else if (document.body.requestFullscreen) {
                document.body.requestFullscreen();            // w3c
            } else if (document.body.msRequestFullscreen) {
                document.body.msRequestFullscreen();          // IE11
            } else {
                return;
            }
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
            if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();      // chrome
            } else if (document.mozCancelFullscreen) {
                document.body.mozCancelFullscreen();  // firefox
            } else if (document.exitFullscreen) {
                document.exitFullscreen();            // w3c
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();          // IE11
            } else {
                return;
            }
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
