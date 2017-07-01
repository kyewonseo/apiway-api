var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var scheduleSchema = new Schema({
  projectId: String,
  owner: String,
  data: String,
  state: String,
  cron: String,
  schedulerId: String
});

module.exports = scheduleSchema;
