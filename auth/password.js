require("dotenv").config();
const crypto = require("crypto");

const generate = function (password) {

    const salt = crypto.randomBytes(process.env.SALT_BYTE_LENGTH).toString("hex");
    const hash = crypto.pbkdf2Sync(
        password, 
        salt, 
        process.env.PBKDF2_ITERATIONS,
        process.env.PBKDF2_BYTES,
        process.env.PBKDF2_HMAC
    ).toString("hex");

    return {salt, hash};
};

const validate = function (password, hash, salt) {
    const hashToVerify = crypto.pbkdf2Sync(
        password, 
        salt, 
        process.env.PBKDF2_ITERATIONS,
        process.env.PBKDF2_BYTES,
        process.env.PBKDF2_HMAC
    ).toString("hex");

    if (hashToVerify === hash) {
        return true;
    } else {
        return false;
    }
};

module.exports = {generate, validate};