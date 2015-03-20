var fs = require('fs'),
    markdownTransform = require('markdown-transform'),
    trumpet = require('trumpet');

var tr = trumpet();

module.exports = function(path){
  return function(q,cb){
    var args = Array.prototype.slice.call(arguments);
    
    tr.select(q).createReadStream()
      .on('data',function(data){
        var val = data.toString().replace(/\r\n|\r|\n/g,'');
        cb(val);
      });

    fs.createReadStream(path)
      .pipe(markdownTransform({gfm:true}))
      .pipe(tr);
  }
};
