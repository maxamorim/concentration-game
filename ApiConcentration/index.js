var app = require('./config/custom-express')();

app.listen(3000, '0.0.0.0', function(){
    console.log('Server runing on port 3000');
});

