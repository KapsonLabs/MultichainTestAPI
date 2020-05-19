let multichain = require("multichain-node")({
    port: 7760,
    host: '127.0.0.1',
    user: 'multichainrpc',
    pass: 'Fo8qqwecNucQePbZuDwrwcxybVDU7RrVHgxKj3SVDCXN'
});

async function getNodeInfo() {
    try {
      return await multichain.getInfo();
    } catch (err) {
    //   throw createError('Could not get info about node', { err });
        console.log('Could not get info about the node', {err})
    }
  }

  async function getAddresses() {
    try {
      return await multichain.listAddresses();
    } catch (err) {
    //   throw createError('Could not get info about node', { err });
        console.log('Could not get addresses from the node', {err})
    }
  }

module.exports = {
    getNodeInfo,
    getAddresses
};