var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');
var friends = require('../controllers/friends.js');
module.exports = function(app) {

//Finds and Sends the collection of friends
  app.get('/friends', function(req, res){
    friends.show_all(req,res)
  })
// creates a new document/friend
  app.post('/newfriends', function(req,res){
    console.log(req.body)
    friends.create(req,res)
  })
//shows a specific friend and his attirbutes
  app.get('/friend/show/:id', function(req, res) {
    friends.show(req,res)
  })
//Updates the infomation for a specific friend
  app.post('/updatefriend/:id', function(req,res){
    friends.update(req,res)
  })
//removes a specific document/friend
  app.get('/friend/destroy/:id', function(req, res) {
    console.log(req.params.id)
    friends.destroy(req,res)
  })
//catch all, if none of the routes work, it will go back to your index.html
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('public/dist/index.html'));
})
}
