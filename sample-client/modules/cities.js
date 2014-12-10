/*
* cities module
*/

var cities = function () {
  
  var cities = {};

  var testValue = null;
  
  cities.vm = {
    isNull : function (obj) {
      return (typeof obj === 'null'? true; false);
    },
    isUndefined : function (obj) {
      return (typeof obj === 'undefined'? true; false);
    }
  };

  cities.view = function (ctrl) {
    return [
      m("div", [
        m("input", {oninput: m.withAttr("value", cities.vm.isNull(testValue))})
      ])
    ];
  };

  return cities;

};