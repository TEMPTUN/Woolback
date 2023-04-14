const fs = require("fs");
const ffmpeg = require("fluent-ffmpeg");
const mic = require("mic");
const { Readable } = require("stream");
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: "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",
  });
const openai = new OpenAIApi(configuration);

ffmpeg.setFfmpegPath(ffmpegPath);

