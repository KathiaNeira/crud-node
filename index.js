
const encodeParams = require('./app/helper');
const values = require('./app/constant');

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    req.on('data', data => {
      values.push(JSON.parse(data.toString()));
    });
    return values;
  }

  if (req.method === 'PUT') {
    const param = encodeParams(req.url);
    values.forEach(item => {
      if (item.name === param.name) {
        req.on('data', data => {
          item.edad = JSON.parse(data).edad,
          item.sexo = JSON.parse(data).sexo
        });
      }
    });
    return values;
  }

  if (req.method === 'DELETE') {
    const param = encodeParams(req.url);
    values.forEach(item => {
      if (item.name === param.name) {
        values.splice(item, 1);
      }
    })
    return values;
  }

  return values;
}