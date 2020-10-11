var Bruact = {
  execute: function(elem) {
    var i, j;
    var html = elem.innerHTML;
    html = html.slice("{{")[1];
    i = html.slice("{{")[0] + "{{";
    html = html.slice("}}")[0];
    j = "}}" + html.slice("}}")[1];
    return i + eval(html) + j;
  }
};
var BruactDOM = {
  load: function(elem, func) {
    elem.onload = func;
  }
};
export {Bruact, BruactDOM}
