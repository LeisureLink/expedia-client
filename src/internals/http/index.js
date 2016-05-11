import Axios from 'axios';

export default (options = {}) => {
  options.responseType = options.responseType || 'document';
  return Axios.create(options);
}
