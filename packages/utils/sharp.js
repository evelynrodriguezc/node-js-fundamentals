const sharp = require('sharp'); //IMAGES management

sharp('js-icon.png')
    .resize(80)
    .grayscale()
    .toFile('js-icon-resized.png'); //this creates a new file of the icon image resized