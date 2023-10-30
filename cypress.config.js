const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://hudl.com/login',
   // valid_username: 'toyinm4rtins@gmail.com',
    //invalid_username: 'toyinm4rtins',
    //valid_password: '',
    // invalid_password: 'notreal123'
  },
})