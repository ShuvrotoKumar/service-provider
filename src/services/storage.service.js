const imagekit = require("@imagekit/nodejs");



const imagekit = new imagekit({
    privateKey:"private_p6mSoSTYNeTcalN47WUDywxeUfI="
})

async function uploadFile(buffer){
    const result =await imagekit.client.upload({
        file:buffer,
        fileName:"image.webp"
    })
    return result;
}

module.exports={uploadFile}