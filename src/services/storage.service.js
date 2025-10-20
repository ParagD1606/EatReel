const ImageKit = require("imagekit");
    
const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URI_ENDPOINT
});

async function uploadFile(file, filename) {
    const result = await imagekit.upload({
        file: file,
        fileName: filename,
    });

    return result;
}

module.exports = {
    uploadFile,
};