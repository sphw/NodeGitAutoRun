NodeGitAutoRun
==============

A barebones express.js script used to auto pull from git with the github 

## Getting Started
(Really the entire thing)
1. Install nodejs and npm. Then install express.js  
  ````sudo npm install -g express```
2.  Clone the script to the server that has your code.  
  ```git clone https://github.com/wisesascha/NodeGitAutoRun```
3. Edit highlighted area in the app.js file to be the path to your git repository on ther remote server.  
    ![exec('cd /home/xwsaw/Code/PixelMob/ && git pull',puts);](https://raw.github.com/wisesascha/NodeGitAutoRun/master/Screen%20Shot%202013-06-16%20at%2011.50.11%20AM.png "")
4. Run the server with  
    ````node app.js```
5. Go to your repositorys settings, then service hooks, and then go to webhooks urls and put the url of your server with the port 3000 in the url.  
![settings](https://raw.github.com/wisesascha/NodeGitAutoRun/master/Screen%20Shot%202013-06-16%20at%2012.28.25%20PM.png "" )  
![service hooks, and web hooks](https://raw.github.com/wisesascha/NodeGitAutoRun/master/Screen%20Shot%202013-06-16%20at%2012.31.03%20PM.png "")  
![](https://raw.github.com/wisesascha/NodeGitAutoRun/master/Screen%20Shot%202013-06-16%20at%2012.23.14%20PM.png "")  
6. Profit!
