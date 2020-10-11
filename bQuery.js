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
  }
}
function noConfilct() {
  return bQuery;
}
