var normalizeUrl	= require('../normalizeUrl.js');

var url	= 'http://example.com:90/.././../bin//../slota/./../index.html?a=1&b=2#myAncher';
var nUrl= normalizeUrl(url);
console.assert(nUrl === 'http://example.com:90/index.html?a=1&b=2#myAncher');
console.log('normalizeUrl(', url, ')=', nUrl);
 
var url	= 'http://example.com/index.html';
var nUrl= normalizeUrl(url);
console.assert(nUrl === 'http://example.com/index.html');
console.log('normalizeUrl(', url, ')=', nUrl);
 
var url	= 'http://example.com/./..//../index.html';
var nUrl= normalizeUrl(url);
console.assert(nUrl === 'http://example.com/index.html');
console.log('normalizeUrl(', url, ')=', nUrl);
