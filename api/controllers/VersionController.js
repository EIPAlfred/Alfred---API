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
  pull: function (req, res) {
      var sys = require('sys')
      var exec = require('child_process').exec;
      function puts(error, stdout, stderr) {

	  return res.json ({
	      ok: stdout
	  });
      }
      exec("git pull origin master", puts);
  }
};

