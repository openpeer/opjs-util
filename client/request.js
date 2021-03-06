
const REQUEST = require("common/request");

REQUEST.setAPI_FETCH(require("./fetch"));
REQUEST.setAPI_RANDOM(require("./random"));

for (var name in REQUEST) {
  exports[name] = REQUEST[name];
}

exports.forLayer = function (layer) {
    return exports.forContext({
        getApiExplorerContext: function () {
            return layer._apiexplorer_context;
        }
    });
}

