const multer = require('multer')

const storage = multer.diskStorage({
    destination : function(req,file,cb){
        const allowed = ['image/png','image/jpg']
        if(!allowed.includes(file.mimetype)){
            cb(new Error("this is not supported"))
            return
        }
        cb(null,'./storage')//(error,success)
    },
    filename : function(req,file,cb){
        cb(null,Date.now()+ "_"+file.originalname)
    }
}) 
module.exports = {
    storage,
    multer
}