var getStep1 = require('./step1.js');

function getAndPrintHTML() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var buffer = [];
  for (i = 0; i < getStep1.length; i++) {
    buffer += getStep1[i];
  }

  console.log(buffer);

}

getAndPrintHTML();