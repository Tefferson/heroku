var toJson = () => {
  var xml = document.getElementById('xmlArea').value;
  if(empty(xml)) return;
  var dom = parseXml(xml);
  var json = xml2json(dom," ");
  document.getElementById('jsonArea').value = json.replace('undefined','');
};

var toXml = () => {
  var json = document.getElementById('jsonArea').value;
  if(empty(json)) return;
  var xml = json2xml(JSON.parse(json), " ");
  document.getElementById('xmlArea').value = xml;
};

var dlJson = () => {
  download(document.getElementById('jsonArea').value, 'json.json', 'text/json');
};

var dlXml = () => {
  download(document.getElementById('xmlArea').value, 'xml.xml', 'text/xml');
};
