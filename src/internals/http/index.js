import Axios from 'axios';

Axios.defaults.responseType = 'document';
Axios.defaults.headers['Content-Type'] = 'application/xml';

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

export default Axios;
