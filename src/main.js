// Import express.js module and create its variable.
const express = require('express');
const app = express();

// Import PythonShell module.
const {PythonShell} = require('python-shell');
sys = python.import('sys');
requests = python.import('requests');
python = require('python.node');
python = require('python').shell;
Block = require('./block.py'),
Transaction = require('./main.py'),
Blockchain = require('./blockchain.py');
os = python.import('os');

path = require('path');

// create genesis block
genesisBlock = new Block();
blockchain = new Blockchain(genesisBlock);

// create a transaction

class Transaction {
  constructor(from, to, amount) {
    this.from = from;
    this.to = to;
    this.amount = amount;
  }
}

module.exports = Transaction;

console.log(blockchain);

assert(os.path.basename(os.getcwd()) == path.basename(process.cwd()));

// Router to handle the incoming request.
app.get('/', (req, res, next)=>{
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

