const express = require("express");
const multer = require("multer");
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
});
module.exports = app;