var mongoose = require('mongoose');
var friend = mongoose.model('Friend');
module.exports = {

//Route is "/friends" will show all friends
  show_all: function(req, res){
    friend.find({})
    .then(friends => {
      res.json(friends)
    })
    .catch(err => {
      res.json(err)
    })
  },

//Route is "/newfriends" add a friend to db
  create: function(req, res) {
		var new_friend = new friend();
	    new_friend.first_name = req.body.first_name;
      new_friend.last_name = req.body.last_name;
	    new_friend.save(function(err){
	      if(err){
	        console.log("errors you have errors");
	        res.json(err);
	      }
	      else{
	        console.log(new_friend)
	        return res.json(new_friend);
	      }
	    })
	},

  // Route is "/friends/show/:id" finds one friend
  	show: function(req,res){
  		friend.findOne({_id:req.params.id})
        .then(friends => { console.log("*********", req.params.id)
          res.json(friends)
        })
        .catch(err=> {
          res.json({error:err})
        })
  	},

// Route is "/updatefriend/:id" updates info
	update: function(req,res){
		friend.update({_id:req.params.id}, {first_name: req.body.first_name, last_name:req.body.last_name})
      .then(friend => {
        res.json(friend)
    })
    	.catch(err => {
        res.json(err)
      })
	},
// Route is "/friend/destory/:id" removes a document from a collection
	destroy: function(req,res){
	   friend.remove({_id:req.params.id}, function(err, result){
       return res.send(result)
    });
	}
}
