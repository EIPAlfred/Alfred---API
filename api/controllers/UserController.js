/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



  /**
   * `UserController.index()`
   */
  index: function (req, res) {
      User.find().exec(function(err, users) {
	  return res.json({
	      Users: users
	  });
      });
    },


  /**
   * `UserController.create()`
   */
  create: function (req, res) {
      var params = req.params.all()

      if (!params.name || !params.password)
        return res.json(401, {err: 'name and password required'});
      User.create({name: params.name,
		   email: params.email,
		   password: params.password})
		  .exec(function createCB(err,created){
		     return res.json({
           200: 'Created user with name ' + created.name
		     });
      });
  },

  /**
   * `UserController.show()`
   */
  show: function (req, res) {
    return res.json({
      todo: 'show() is not implemented yet!'
    });
  },


  /**
   * `UserController.edit()`
   */
  edit: function (req, res) {
    return res.json({
      todo: 'edit() is not implemented yet!'
    });
  },


  /**
   * `UserController.delete()`
   */
    delete: function (req, res) {
      var params = req.params.all()

      User.destroy({id: params.id}).exec(function deleteCB(err, deleted){
            return res.json({
              200: 'Delete user with id ' + deleted.id
            });
      });
    },

  connect: function (req, res) {
    var params = req.params.all();
    var passport = require("passport");

    if (!params.login || !params.password) {
      return (res.json({401: "Missing parameters"}));
    }
  }

};

