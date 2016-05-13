import Axios from 'axios';
import Xml from '../xml';

Axios.defaults.responseType = 'document';
Axios.defaults.headers['Content-Type'] = 'application/xml';

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

const instance = Axios.create({
  responseType: 'document',
  headers: {
    'Content-Type': 'application/xml'
  },
  transformResponse: [
    (data) => {
      return Xml.parser(data);
    }
  ]
});

export default instance;
