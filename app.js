const fs = require('fs');
const trials = './trials';
const _ = require('lodash')

exports.config = { USE_PHOTODIODE: false,  USE_EEG: false, IS_ELECTRON: true, USE_MTURK: false}



// fs.readdir(trials, (err, files) => {
//   files.forEach(file => {
//     console.log(require(trials+'/'+file));
//   });
// });
// console.log(require('./trials/showMessageChoice.js')(100,undefined));
// console.log(require('./trials/countdown.js')('text',20))
module.exports = { 
    init: function(_config){
        config = _.merge(_config, config)
    },
    countdown: require('./trials/countdown.js'),
    showMessage: require('./trials/showMessage.js'),
    showEarnings: require('./trials/showEarnings.js')
};