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

Test('parses the response correctly', (t) => {
  return readFile(AvailabilityResponse).then(xml => {
    const result = Xml.parser(xml);
    t.truthy(result.availrateupdaters.success);
  });
});

Test('throws and error if blank xml is passed', (t) => {
  t.throws(() => Xml.parser());
});

Test('throws and error if empty string is passed', (t) => {
  t.throws(() => Xml.parser(''));
});
