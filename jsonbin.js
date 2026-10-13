const JSONBIN_KEY = process.env.JSONBIN_MASTER_KEY;
const JSONBIN_BIN_ID = process.env.JSONBIN_BIN_ID;
const JSONBIN_URL = `https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}`;

async function readSubmissions() {
  const response = await fetch(JSONBIN_URL, {
    method: 'GET',
    headers: {
      'X-Master-Key': JSONBIN_KEY
    }
  });
  if (!response.ok) {
    throw new Error(`JSONBin read failed: ${response.status}`);
  }
  const data = await response.json();
  return data.record || [];
}

async function writeSubmissions(submissions) {
  const response = await fetch(JSONBIN_URL, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-Master-Key': JSONBIN_KEY
    },
    body: JSON.stringify(submissions)
  });
  if (!response.ok) {
    throw new Error(`JSONBin write failed: ${response.status}`);
  }
  return response.json();
}

module.exports = { readSubmissions, writeSubmissions };