/**
 * Device.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

/*
{
  "header": {
    "name": "device1",
    "village": "village"
  },
  "Infos": [
    "info1",
    "info2"
  ]
}
*/

module.exports = {
    
  attributes: {
      name : { type: 'string' },
      status: {
	  collection: 'status',
	  via: 'owner'
      }
  }
};

