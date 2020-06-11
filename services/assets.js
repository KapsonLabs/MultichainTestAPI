'use strict';
const chain_instance = require('./multichain')


async function getAssets() {
    try {
        return await chain_instance.listAssets();
    } catch (err) {
    //   throw createError('Could not get info about node', { err });
        console.log('Could not get assets from the node', {err})
    }
}

async function getAssetInformation(asset) {
    try {
        return await chain_instance.getAssetInfo({asset: asset})
    } catch (error) {
        return error
    }
}

async function createNewAsset(address, asset, qty, units){
    try {
        return await chain_instance.issue({address: address, asset: asset, qty:qty, units:units})
    } catch (error) {
        return error
    }
}

async function createNewAssetFromAddress(){
    
}

module.exports = {
    getAssets,
    getAssetInformation,
    createNewAsset
}