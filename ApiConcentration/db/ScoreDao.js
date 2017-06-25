function ScoreDao(connection) {
    this._connection = connection;
}

ScoreDao.prototype.save = function(score,callback) {
    this._connection.query('INSERT INTO scores SET ?', score, callback);
}

ScoreDao.prototype.listEasy = function(callback) {
    this._connection.query('SELECT * FROM scores WHERE level = "easy" ORDER BY score, time DESC LIMIT 3', callback);
}

ScoreDao.prototype.listNormal = function(callback) {
    this._connection.query('SELECT * FROM scores WHERE level = "normal" ORDER BY score, time DESC LIMIT 3', callback);
}

ScoreDao.prototype.listHard = function(callback) {
    this._connection.query('SELECT * FROM scores WHERE level = "hard" ORDER BY score, time DESC LIMIT 3', callback);
}

ScoreDao.prototype.searchId = function(id,callback) {
    this._connection.query('SELECT * FROM scores WHERE id = ', id, callback)
}

 module.exports = function(){
      return ScoreDao;
  };