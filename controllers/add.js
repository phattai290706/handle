const { errorHandler } = require("../utils");
 const { readFileSync, writeFileSync } = require("fs-extra");
 const { join } = require("path")
 const pathData = join(__dirname, "cache", "user.json");
 exports.add_user = async (req, res, next) => {
   var sender = req.query.sender;
   var cong_them = req.query.cong_them;
   if(!cong_them || isNaN(cong_them)) {
     return res.json({
       data: "false",
       msg: "[ Cảnh Báo ] - Bạn chưa nhập số lần cộng thêm hoặc số lần cộng thêm không phải là một con số"
     })
   }
    var dataJson = JSON.parse(readFileSync(pathData, "utf-8"));
     var userData = dataJson.find(item => item.senderID == sender) 
     if (dataJson.some(i => i.senderID == sender) == false) {
       return res.json({ data: "false",
       msg: "[ Cảnh Báo ] - Người Dùng Chưa Đăng Ký "})
     } else {
       
       var click = userData.request;
      userData.request = parseInt(click) + parseInt(cong_them)
       writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
  return res.json({ data: `true`,
  msg:`đã cộng thêm ${cong_them} request và còn ${parseInt(click) + parseInt(cong_them)} request`})
        }
        
     }
 