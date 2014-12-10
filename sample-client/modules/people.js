/*
* people module
*/

var people = function () {
  
  var people = {};

  var testValue = undefined;
  
  people.vm = {
    isNull : function (obj) {
      return (typeof obj === 'null'? true; false);
    },
    isUndefined : function (obj) {
      return (typeof obj === 'undefined'? true; false);
    }
  };

  people.view = function (ctrl) {
    return [
      m("div", [
        m("input", {oninput: m.withAttr("value", people.vm.isUndefined(testValue))})
      ])
    ];
  };

  return people;

};