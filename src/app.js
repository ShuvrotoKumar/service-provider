const express = require("express");
const multer = require("multer");
const uploadFile = require("./services/storage.service");
const postModel = require("./models/post.model");
const app = express();

// app.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });


app.use(express.json());

const upload=multer({strorage:multer.diskStorage({})})



app.post("/create-post", upload.single("image"), async (req, res) => {
    // 
    // console.log(req.body);
    // console.log(req.file);

    const result = await uploadFile(req.file.buffer);
   
    const post = await postModel.create({
        caption:req.body.caption,
        image:result.url
    })
    // console.log(post);
    
    res.status(201).json(
        { message:"Post created successfully",
            post:post
        }
    );
});
module.exports = app;