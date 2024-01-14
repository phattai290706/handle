const { errorHandler } = require("../utils");
 const { readFileSync, writeFileSync } = require("fs-extra");
 const { join } = require("path")
 const pathData = join(__dirname, "cache", "user.json");
 exports.user = async (req, res, next) => {
   var sender = req.query.sender;
    var dataJson = JSON.parse(readFileSync(pathData, "utf-8"));
    const araXY = join(__dirname, "cache", "gban.json");
   var data = JSON.parse(readFileSync(araXY, "utf-8"));
   var buh = data.find(item => item.senderID == sender)
var cc = data.some(i => i.senderID == sender)
 if (cc == true) {
   var lydo = buh.reson;
 return res.json({
data: "false",
 msg: `Bạn đã bị gban\nVới lý do: ${lydo}\n> liên hệ https://facebook.com/HoangDoGiaNguyenOwO để biết thêm chi tiết`,

 })
 }
     var userData = dataJson.find(item => item.senderID == sender) 
     if (!dataJson.some(i => i.senderID == sender) == true) {
       return res.json({ data: "false",
       msg: "[ WARNING] - Người Dùng Chưa Đăng Ký "})
     } else {
       
       var click = userData.request;
       if (click < 1){
         return res.json({data: "false",
         msg: "[ WARNING ] - Hết Lượt Request liên hệ admin để thêm lượt request"})
       }
      userData.request = parseInt(click) - parseInt(1)
       writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
  return res.json({ data: `true`,
  msg:`còn ${parseInt(click) - parseInt(1)}`})
        }
        
     }
 