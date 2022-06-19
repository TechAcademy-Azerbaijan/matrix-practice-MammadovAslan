const prompt = require('prompt');
prompt.start();

prompt.get('input', function (err, result) {
  
    const n = result.input
    let string =''

    for(let i = 0;i<n;i++){
        for(let j = 0;j<n;j++){
            string += "*"
        }
        string += '\n'
    }
    console.log(string);

});




