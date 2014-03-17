exports.getRandomUniqueId = getRandomUniqueId;
exports.clone = clone;
exports.cloneTo = cloneTo;

function getRandomUniqueId(collection, callback)
{
    var tmp = Math.round(Math.random()*9999);
    collection.findOne({id: tmp}, function(err, result){
        console.log(tmp);
        if (!result) {
            return callback(tmp);
        }
        getRandomUniqueId(collection);
    });
}
function clone(obj) {
    var copy = {};
    for (var attr in obj) {
        if (typeof(obj[attr]) == 'string'){
            copy[attr] = obj[attr];
        }
    }
    return copy;
}
function cloneTo(src, dst) {
    for (var attr in src) {
        if (typeof(src[attr]) == 'string') {
            dst[attr] = src[attr];
        }
    }
}
