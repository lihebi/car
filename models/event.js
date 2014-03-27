var mongodb = require('./db');
var common = require('./common');

function Event(event) {
    common.cloneTo(event, this);
}

module.exports = Event;

Event.prototype.save = function(callback) {
    var event = common.clone(this);
    mongodb.open(function(err, db) {
        if (err) {
            return callback(err);
        }
        db.collection('events', function(err, collection) {
            if (err) {
                mongodb.close();
                return (err);
            }
            common.getRandomUniqueId(collection, function(id) {
                event.id = id;
                collection.insert(event, {
                    safe: true
                }, function(err, doc) {
                    mongodb.close();
                    if (err) {
                        return callback(err);
                    }
                    callback(null, doc[0]);
                });
            });
        });
    });
}
