const redis = require('redis');
const maniplulaLista = require('./manipula-lista');
const allowlist = redis.createClient({ prefix: 'allowlist-refresh-token:' });


module.exports = maniplulaLista(allowlist);