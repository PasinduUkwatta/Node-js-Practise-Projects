exports.REQUEST_TIMEOUT = 500;

function encrypt(data) {
  return "data encrypted";
}

exports.send = function send(url, data) {
  const encryptedData = encrypt(data);
  console.log(`send ${encryptedData} to url :${url}`);
};
