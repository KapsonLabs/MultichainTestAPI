'use strict';
const chain_instance = require('./multichain')


async function getAddresses() {
    try {
        return await chain_instance.listAddresses();
    } catch (err) {
    //   throw createError('Could not get info about node', { err });
        console.log('Could not get addresses from the node', {err})
    }
}


async function createAddress() {
  try {
    return await chain_instance.getNewAddress();
  } catch (err) {
    console.log('Unable to create new address')
    return err
  }
}


module.exports = {
    getAddresses,
    createAddress
  };