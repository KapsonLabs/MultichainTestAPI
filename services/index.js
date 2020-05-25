'use strict';
const chain_instance = require('./multichain')

async function getNodeInfo() {
    try {
      return await chain_instance.getInfo();
    } catch (err) {
    //   throw createError('Could not get info about node', { err });
        console.log('Could not get info about the node', {err})
    }
  }

  async function getAddresses() {
    try {
      return await chain_instance.listAddresses();
    } catch (err) {
    //   throw createError('Could not get info about node', { err });
        console.log('Could not get addresses from the node', {err})
    }
  }

module.exports = {
    getNodeInfo,
    getAddresses
};