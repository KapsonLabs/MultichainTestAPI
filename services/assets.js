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

module.exports = {
    getAssets
}