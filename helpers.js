function successfullMessage(msg) {
    return "β *KING-BOT-MD*:  ```" + msg + "```"
}

function errorMessage(msg) {
    return "π *KING-BOT-MD*:  ```" + msg + "```"
}

function infoMessage(msg) {
    return "βΊοΈ *KING-BOT-MD*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
