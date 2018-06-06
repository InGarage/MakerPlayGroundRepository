module.exports = function(rows) {
    jsonArray = []
    rows.forEach(function (columns) {
        var rowObject ={};
        columns.forEach(function(column) {
            rowObject[column.metadata.colName] = column.value;
        });
        jsonArray.push(rowObject)
    });
    return jsonArray;
}