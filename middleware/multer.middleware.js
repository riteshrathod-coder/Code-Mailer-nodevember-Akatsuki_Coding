import multer from "multer";

const storege=multer.memoryStorage()

export const upload=multer({
    storege,
    limits:{
        fileSize:10*1024*1024
    }
})