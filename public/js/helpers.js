var download = (content, filename, dataType) => {
  var dl = document.createElement('a');
  dl.setAttribute('href','data:'+dataType+';charset=utf-8,' + encodeURIComponent(content));
  dl.setAttribute('download',filename);
  dl.click();
};

function parseXml(xml) {
  var dom = null;
  if (window.DOMParser) {
    try {
      dom = (new DOMParser()).parseFromString(xml, "text/xml");
    }
    catch (e) { dom = null; }
  }
  else if (window.ActiveXObject) {
    try {
      dom = new ActiveXObject('Microsoft.XMLDOM');
      dom.async = false;
      if (!dom.loadXML(xml))

      window.alert(dom.parseError.reason + dom.parseError.srcText);
    }
    catch (e) { dom = null; }
  }
  else
  alert("cannot parse xml string!");
  return dom;
};

var empty = (value) =>{return value === '';};
