const { errorHandler } = require("../utils");
 const { readFileSync, writeFileSync } = require("fs-extra");
 const { join } = require("path")
 const pathData = join(__dirname, "cache", "user.json");

 exports.checkalluser = async (req, res, next) => {
   var msg = [];
   var dataJson = JSON.parse(readFileSync(pathData, "utf-8"));
   
   if (dataJson[0] == undefined) {
     return res.json({ data: "false", msg: "[ WARN ] - Chưa Có Người Dùng"})
   } 
   
   else {
     index = 0
   for (let stt in dataJson) {
        var ulatroi = dataJson[stt].senderID;
        var reqest = dataJson[stt].request;
        var name = dataJson[stt].name;
      msg += `USER Thứ ${index += 1}: UID: ${ulatroi}\nName: ${name}\nSố Lượt Còn Lại: ${reqest}\n\n`
    }
    return res.json(dataJson)
 }
 }