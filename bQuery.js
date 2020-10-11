var bQuery = {
  $: function(elem) {
    return document.querySelectorAll(elem);
  },
  ready: function(obj, func) {
    obj.onload = func;
  },
  on: function(obj, even, func) {
    if (document.addEventListiner) {
      obj.addEventLisitiner(even, func)
    } else {
      document.attachEvent("on" + even, func)
    }
  },
  html: function(elem, text) {
    elem.innerHTML = text;
    if (elem === undefined || text === undefined) {
      return elem.innerHTML;
    }
  },
  text: function(elem, text) {
    elem.innerText = text;
    if (elem === undefined || text === undefined) {
      return elem.innerText;
    }
  },
  css: function(elem, obj) {
    elem.style.setProperty(obj.name, obj.value)
  },
  $one: function(elem) {
    return document.querySelector(elem)
  },
  load: function(func) {
    this.ready(document, func)
  },
  ajax: function(xml, json, get, url, qurey) {
    var xhttp, txt;
    if (window.XMLHttpRequest) {
      xhttp = new XMLHttpRequest(); // Code for morden browsers
    } else {
      xhttp = new ActiveXObject("Microsoft.XMLHTTP"); // Code for IE8 or lower
    }
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        if (xml == true) {
          txt = this.responseXML;
        } else if (json == true) {
          txt = JSON.parse(this.responseText);
        } else {
          txt = this.responseText;
        }
      }
    }
    if (get == true) {
      xhttp.open(url);
      xhttp.send();
    } else {
      xhttp.open(url);
      xhttp.send(qurey);
    }
  }
};
export {bQuery};
