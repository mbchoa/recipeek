const nlp = require('nlp_compromise');

const htmlToNlpTerms = html => {
  try {
    return nlp.text(html).terms();
  } catch (err) {
    console.log('error running nlp', err);
    return [];
  }
};

module.exports = function(html, callback) {
//   console.log('* running process id: ', process.pid);
  callback(null, htmlToNlpTerms(html)
    .filter(term => term.tag === 'Adjective')
    .map(term => term.text));
};