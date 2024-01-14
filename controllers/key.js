const { errorHandler } = require("../utils");
 exports.key = async (req, res, next) => {
   var key = req.query.key;
   var key_true = "jutsuprocoder";
   if( key == key_true){
     return res.json({ data : "true"})
   } else {
     return res.json({data: "false"})
   }
 }