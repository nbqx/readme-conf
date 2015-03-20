## readme-conf

README.md based configuration (this is the **really stupid** sketch of idea) 

## Usage

```js
var readmeConf = require('./')(__dirname+'/README.md');

readmeConf('#name',function(v){
  console.log('NAME is `'+v+'`');
});
```

## THIS IS CONFIGURATION

<pre><code id="name">nbqx</code><pre>
