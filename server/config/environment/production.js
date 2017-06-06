'use strict';

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip:  '150.162.232.45',

  // Server port
  port:   8100,

  // MongoDB connection options
  mongo: {
    uri:  'mongodb://localhost/sitebraz'
  },

  seedDB: true
};
