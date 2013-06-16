var express = require('express');
var app = express();
var sys = require('sys');
var exec = require('child_process').exec;
app.get('/', function(req, res){
});
app.post('/',function(req,res){
	function puts(error, stdout, stderr) { sys.puts(stdout); res.send(stdout); }
	exec('cd /home/xwsaw/Code/PixelMob/ && git pull',puts);  // Chane the /home/xwsaw/PixelMob to be the exact path of your repositroy.
});
app.listen(3000);
