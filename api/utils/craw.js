var http = require('http');
var iconv = require('iconv-lite');
var cheerio = require('cheerio')

function loadPage(url) {
  var pm = new Promise(function (resolve, reject) {
    http.get(url, function (res) {
      var html = '';
      res.on('data', function (d) {
        html += d.toString()
      });
      res.on('end', function () {
        resolve(html);
      });
    }).on('error', function (e) {
      reject(e)
    });
  });
  return pm;
}

loadPage('http://news.ifeng.com/a/20161203/50358675_0.shtml').then(function (d) {
  $ = cheerio.load(d,{decodeEntities: false});
  console.log($('div.yc_con_txt').html().trim());
});

