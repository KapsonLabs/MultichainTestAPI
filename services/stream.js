'use strict';
const chain_instance = require('./multichain')


async function listStreams() {
  try {
    return await chain_instance.listStreams();
  } catch (err) {
    console.log('Unable to list streams')
    return err
  }
}

async function listStreamItems(stream, itemsCount) {
  try {
    const rawData = await chain_instance.listStreamItems({ stream, count: itemsCount || 9999 });
    const data = [];

    /*
     * Multichain requires the data in the streams to be stored in HEX-DEC format, so we need to convert it back
     * to JSON.
     */
    for (const row of rawData) {
      data.push(JSON.parse(hexToStr(row.data)));
    }

    return { count: data.length, data };
  } catch (err) {
    console.log(err)
    return err
  }
}


async function createNewStream(name) {
  try {
    return await chain_instance.create({ type: 'stream', name, open: true });
  } catch (err) {
    console.log('Unable to create streams')
    return err
  }
}


async function subscribeToStream(stream) {
  try {
    return await chain_instance.subscribe({ stream });
  } catch (err) {
    console.log('Unable to subscribe to stream')
    return err
  }
}

/**
 * Write new data to a stream
 *
 * @param app
 * @param {string}                stream    The name of the stream to write (publish) to
 * @param {object|string|number}  inputData The data to be written. Can be text, number or JSON
 * @return {Promise<void>}
 */
async function publishDataToStream(stream, inputData) {
  const currentTimestamp = Math.floor(Date.now() / 1000);
  const key = currentTimestamp.toString();
  const data = strToHex(JSON.stringify(inputData));

  try {
    return await chain_instance.publish({ stream, key, data });
  } catch (err) {
    console.log(err)
    return err
  }
}

/**
 * Convert a string to hex-dec value
 *
 * @param {string}  input
 * @return {string|string}
 */
function strToHex(input) {
  let hex = '';

  for (let i = 0; i < input.length; i++) {
    hex += '' + input.charCodeAt(i).toString(16);
  }

  return hex;
}

/**
 * Convert a hex-dec value to string
 *
 * @param hexStr
 * @return {Buffer}
 */
function hexToStr(hexStr) {
  return new Buffer.from(hexStr, 'hex');
}

module.exports = {
  listStreams,
  listStreamItems,
  createNewStream,
  subscribeToStream,
  publishDataToStream
};
