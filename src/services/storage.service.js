const {ImageKit} = require("@imagekit/nodejs");



const imagekit = new ImageKit({
    privateKey:"private_p6mSoSTYNeTcalN47WUDywxeUfI="
})

async function uploadFile(buffer){
    const result =await imagekit.files.upload({
        file:buffer.toString("base64"),
        fileName:"image.webp"
    })
    return result;
}

module.exports= uploadFile;