/**
 * DeviceController
 *
 * @description :: Server-side logic for managing Devices
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `DeviceController.index()`
   */
  index: function (req, res) {
    //Device.find().populate('status').exec(function(err, devices) {
      Device.find().exec(function(err, devices) {
	       return res.json({
	             Devices: devices
	        });
      });
  },


  /**
   * `DeviceController.create()`
   */
    create: function (req, res) {
	   var params = req.params.all()

     console.log(params);
	   if (!params.name)
	    return res.json(401, {err: 'name required'});
	   
     Device.create({name: params.name})
	    .exec(function createCB(err,created){
      	 	Status.create({
      		    owner: created.id,
      		    date: '',
      		    info: ''
      		})
      		.exec(function(err, pet) {});
  		
		return res.json({
		    200: 'Created device with name ' + created.name
		});
	});
  },


  /**
   * `DeviceController.show()`
   */
  show: function (req, res) {
    return res.json({
      todo: 'show() is not implemented yet!'
    });
  },


  /**
   * `DeviceController.edit()`
   */
  edit: function (req, res) {
    return res.json({
      todo: 'edit() is not implemented yet!'
    });
  },

  /**
   * `DeviceController.update()`
   */
  update: function (req, res) {
      var params = req.params.all()
      if (!jsonServices.validateJson(req.param('infosJson')))
      	  return res.json({
      	      error: 'Wrong json format'
      	  });

      var header = jsonServices.getHeader(req.param('infosJson'));
      var info = jsonServices.getInfo(req.param('infosJson'));
      
      Device.find({ name:header[0] })
        	  .populate('status')
        	  .exec(function(error, device){
      	      if (error)
      		  return res.json({
      		      401: 'Error device not found'
      		  });   
      	      device[0].status.add({infos: info });
      	      device[0].save(function (err){

	           });
	     });
      return res.json({
	        200: 'Device updated !'
      });      
  },
  /**
   * `DeviceController.delete()`
   */
  delete: function (req, res) {
      var params = req.params.all()
	
	  Device.destroy({id: params.id}).exec(function deleteCB(err, deleted){
	      return res.json({
		          200: 'Delete device with id ' + deleted.id
	      });
	});
  }
};

