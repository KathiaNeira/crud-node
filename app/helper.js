function encodeParams(data){
  const param = data.replace('/', '');
  return JSON.parse('{"' + param.replace(/&/g, '","').replace(/=/g,'":"') + '"}', function(key, value) { return key === ""? value:decodeURIComponent(value) })
}

module.exports = encodeParams;
