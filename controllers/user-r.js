const { errorHandler } = require("../utils");
 const { readFileSync, writeFileSync } = require("fs-extra");
 const { join } = require("path")
 const pathData = join(__dirname, "cache", "user.json");
 exports.userdangky = async (req, res, next) => {
  const araXY = join(__dirname, "cache", "gban.json");
   var data = JSON.parse(readFileSync(araXY, "utf-8"));
   var dataJson = JSON.parse(readFileSync(pathData, "utf-8"));
     var uid = req.query.uid;
     var name = req.query.name;
     if(data.some(i => i.senderID == uid) == true){
       return res.json({ data: "false", 
       msg: "[ ARAXY ] - ĐÃ BỊ GBAN RỒI LÊU LÊU=))"})
     }
 var userData = dataJson.find(item => item.senderID == uid) || { senderID: uid,name: name, request: 20};
 if (!dataJson.some(i => i.senderID == uid)) {
 dataJson.push(userData);
  writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
   return res.jsonp({ 
     senderID : uid,
     name: name,
     request: 20,
     data: "true",
     msg: `[ NOTIC ] - Đăng Ký Thành Công UID: ${uid} name: ${name}`
   })}
   if (!dataJson.some(i => i.senderID == uid) == true){
     
     return res.jsonp({data: "false", msg: "[ NOTIC ] - Đăng Ký Thất Bại"})
   }
   else {
     return res.jsonp({data: "false", msg: "[ MODE ] - Đã Được Đăng Ký Từ Trước"})
}
 }