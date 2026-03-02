const express = require("express");
const multer = require("multer");
const uploadFile = require("./services/storage.service");
const app = express();

// app.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });


app.use(express.json());

const upload=multer({strorage:multer.diskStorage({})})



app.post("/create-post", upload.single("image"), async (req, res) => {
    // 
    console.log(req.body);
    console.log(req.file);

    const result = await uploadFile(req.file.buffer);
    console.log(result);
});
module.exports = app;