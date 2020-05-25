const portname = process.env.MULTICHAIN_PORT;
const hostname = process.env.HOST;
const username = process.env.CHAIN_USER;
const password = process.env.PASS;

let multichain = require("multichain-node")({
    port: portname,
    host: hostname,
    user: username,
    pass: password
});

module.exports = multichain;