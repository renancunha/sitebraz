'use strict';

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip:     process.env.OPENSHIFT_NODEJS_IP ||
          process.env.IP ||
          undefined,

  // Server port
  port:   8900,

  // MongoDB connection options
  mongo: {
    uri:  'mongodb://localhost/sitebraz'
  },

  seedDB: false
};
