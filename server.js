 async function request() {
const { readdirSync, readFileSync, writeFileSync, existsSync, copySync } = require('fs-extra');
const { join, resolve } = require('path');
const pathData = join(__dirname,"controllers", "cache", "user.json");
const user = require('./controllers/cache/user.json');
	if(user[0] == undefined ) return
	while(true) {
	for (let id of user) {
	var userData = user.find(i => i.senderID == id.senderID);
	var money = userData.request;
	userData.request = 50
	writeFileSync(pathData, JSON.stringify(user, null, 2));
	}
	console.log("reset");
	await new Promise(resolve => setTimeout(resolve, 50000 * 1000))
	}
}
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const api = require("./routes/api");
const getIP = require('ipware')().get_ip;
const app = express();
app.set('json spaces', 1);
app.use(helmet());
app.use(express.json());
app.use(cors());
app.use(function(req, res, next) {
    var ipInfo = getIP(req);
  if (ipInfo.clientIp == '35.230.123.102') return;
    var color = ["\x1b[33m", "\x1b[34m", "\x1b[35m", '\x1b[36m', '\x1b[32m'];
    var more = color[Math.floor(Math.random() * color.length)];
    console.log(more+ '[ IP ] -> ' + ipInfo.clientIp);
    next();
});
app.use("/", api);
request();
app.use((error, req, res, next) => {
  res.status(error.status).json({ message: error.message });
});

(async () => {
 
  app.listen(process.env.PORT || 0);
  console.log(
    `nhìn cái lồn má mày`
    );
})();
