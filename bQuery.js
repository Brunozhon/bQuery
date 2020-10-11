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
  }
}
function noConfilct() {
  if (bQuery !== undefined) {
    var copy = bQuery;
    delete bQuery; // Deletes bQuery varible
    return copy;
  }
}
