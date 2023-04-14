const ffmpeg = require('fluent-ffmpeg');
const ffmpegLocation = require("@ffmpeg-installer/ffmpeg").path;


module.exports = {
    mpthree: (req, res) => {
        res.status(201).json("Hello World");
    }
}