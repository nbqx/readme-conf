var readmeConf = require('./')(__dirname+'/README.md');

readmeConf('#name',function(v){
  console.log('NAME is `'+v+'`');
});
