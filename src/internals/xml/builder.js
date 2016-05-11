import Jxon from 'jxon';

export default (value) => {
  return new Promise((resolve) => {
    const xml = Jxon.jsToString(value);
    return resolve(`<?xml version="1.0" encoding="UTF-8"?>${xml}`);
  });
}
