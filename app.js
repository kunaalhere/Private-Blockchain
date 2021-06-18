/* eslint-disable max-len */
// ------
// app.js
// ------
sys = python.import(sys)
requests = python.import(requests)
os = python.import(os)

// Import express.js module and create its variable.
const express = require('express');
const app=express();

// Import PythonShell module.
const {PythonShell} = require('python-shell');

// Router to handle the incoming request.
app.get('/main.js', (_req, res, _next)=>{
  const options = {
    mode: 'text',
    pythonOptions: ['-u'], // get print results in real-time
    scriptPath: './package.json',

    args: [], // An argument which can be accessed in the script using sys.argv[1]
  };


  PythonShell.run('main.py', options, function(err, result) {
    if (err) throw err;
    // result is an array consisting of messages collected
    // during execution of script.
    console.log('result: ', result.toString());
    res.send(result.toString());
  });
});

const port=6868;
app.listen(port, ()=>console.log(`Server connected to ${port}`));

// a callback to handle the response
const mycallback = function(err, data) {
  if (err) {
    console.error(err);
  } else {
    console.log('Callback function got : ' + data);
  }
};

// to test, read and execute commands from stdin
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(chunk) {
  python(chunk, mycallback);
});
