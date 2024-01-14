const { errorHandler } = require("../utils");
 const { readFileSync, writeFileSync } = require("fs-extra");
 const { join } = require("path")
 const pathData = join(__dirname, "cache", "gban.json");
 exports.gbancheck = async (req, res, next) => {
  
     var uid = req.query.uid;
 var dataJson = JSON.parse(readFileSync(pathData, "utf-8"));
     var userData = dataJson.find(item => item.senderID == uid) 
   if (!dataJson.some(i => i.senderID == uid) == true){
     return res.jsonp({data: "true", msg: "ARA ARA"})
   }
   else {

     var lmao = userData.senderID
     var reson = userData.reson
     return res.jsonp({data: "false", msg: `[ CHECK ] - đã bị gban với lý do ${reson}`})
}
 }