/*

 Made by: FlaringPhoenix#0001

*/

// Do not change
let version = "1.0.0";
let author = ["HarsH", "Black Head", "Devil"];

// Basic options (all required)
let botName = "Playzzer-Bot";
let owners = ["518814691401924640"];

// Token
let token = "NzQyNjA5NTA4NTg4NzE2MDYy.XzIm_w.CbYf1pIaLwvPBGtA3utX9LYPt7E";

// Time format for console logging
let timeFormat = "D MMM YYYY HH:mm:ss";

// Prefix for bot dms
let dmPrefix = "?";

// Your server links
let links = {
    Discord: "https://discord.gg/6KVzPK4w3S/",
    YouTube: "https://www.youtube.com/c/mixedharsh",
}

// Your api keys
let api = {
    statcord: "", // https://statcord.com/
    pastebin: "" // https://pastebin.com/doc_scraping_api
}

// Default embed options
let embed = {
    color: "BLUE",
    footer: "Example Bot | -help"
}

// Toggle command trigger message
let deleteCommands = false;

// If a command is disabled the bot will ignore it
let disabledCommands = [];

// Toggle logging messages in console
let log = {
    commands: true,
    errors: true,
}

module.exports = {
    version,
    author,
    botName,
    owners,
    token,
    timeFormat,
    dmPrefix,
    links,
    api,
    embed,
    deleteCommands,
    disabledCommands,
    log,
}