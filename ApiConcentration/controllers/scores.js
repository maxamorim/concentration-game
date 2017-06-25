
module.exports = function(app) {

    app.get('/scoresEasy', function(req, res){

        var connection = app.db.connectionFactory();
        var scoreDao = new app.db.ScoreDao(connection);

        scoreDao.listEasy(function(error, result){
            console.log(error);
            console.log('Top score Easy:' + result);
            res.json(result);
        })
    });

    app.get('/scoresNormal', function(req, res){

        var connection = app.db.connectionFactory();
        var scoreDao = new app.db.ScoreDao(connection);

        scoreDao.listNormal(function(error, result){
            console.log(error);
            console.log('Top score Normal:' + result);
            res.json(result);
        })
    });

    app.get('/scoresHard', function(req, res){

        var connection = app.db.connectionFactory();
        var scoreDao = new app.db.ScoreDao(connection);

        scoreDao.listHard(function(error, result){
            console.log(error);
            console.log('Top score Hard:' + result);
            res.json(result);
        })
    });

    app.post('/scores/score', function(req, res){
        var score = req.body;

        console.log(score);

        score.date = new Date;

        var connection = app.db.connectionFactory();
        var scoreDao = new app.db.ScoreDao(connection);

        scoreDao.save(score, function(error, result){
            console.log(error);
            console.log('Score created:' + result);
            res.json(score);
        });

    });
}

