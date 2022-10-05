const fs = require('fs-extra');
    const concat = require('concat');
    
    build = async () =>{
        const files = [
            './dist/shortcodes/runtime.js',
            './dist/shortcodes/polyfills.js',
            './dist/shortcodes/main.js'
          ];
        
          await fs.ensureDir('widget');
          await concat(files, 'widget/shortcodes.js');
    }
    build();