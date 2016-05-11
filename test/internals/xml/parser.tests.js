import Test from 'ava';
import Xml from '../../../src/internals/xml';

import FS from 'fs';
import Path from 'path';

const readFile = (path) => {
  return new Promise((resolve, reject) => {
    FS.readFile(path, 'utf8', (err, data) => {
      if (err) return reject(err);
      return resolve(data);
    });
  });
};

const AvailabilityResponse = Path.resolve(__dirname, '../../fixtures/availability-response.xml');

Test('parses the response correctly', () => {
  return readFile(AvailabilityResponse).then(xml => {
    return Xml.parser(xml).then(result => {
      expect(result.availrateupdaters.success).to.be.true();
    });
  });
});

Test('throws and error if blank xml is passed', () => {
  expect(() => Xml.parser()).throws(/Xml is required/);
});

Test('throws and error if empty string is passed', () => {
  expect(() => Xml.parser()).throws(/Xml is required/);
});
