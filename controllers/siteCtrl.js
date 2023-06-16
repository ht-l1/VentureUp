const siteData = require('../data/siteData');
const inventoryArray = require('../data/contentData.js');
// add hasshing & salting authentication
const User = require('../models/userModel');
// const bcrypt = require('bcrypt');
// const saltRounds = 10;
const passport = require('passport');

module.exports = {
  index: (request, response) => {
    response.render('pages/index', {
        inventoryArray,
        name: siteData.userName,
        copyrightYear: siteData.year,
        signedIn: siteData.signedIn
    });
  },

  // so my welcome username header can work
  admin: (request, response) => {
    response.render('pages/admin', {
      name: siteData.userName,
      signedIn: siteData.signedIn
    });
  },

  // add hasshing & salting authentication: Register
  register_get:(request, response) => {
    response.render('pages/register', {
      copyrightYear: siteData.year
    });
  },
  register_post:(request, response) => {
    const {username, password} = request.body;
    User.register({username: username}, password, (error, user) => {
      if (error) {
        console.log(error);
        response.redirect('/register');
      } else {
        passport.authenticate('local')(request, response, () => {
          response.redirect('/login');
        });
      }
    }); 
  },
  login_get: (request, response) => {
    response.render('pages/login',{
      copyrightYear: siteData.year
    });
  },
  login_post: (request, response) => {
    const {username, password} = request.body;
    const user = new User({
      username: username,
      password: password
    });

    request.login(user, (error) => {
      if (error) {
        console.log(error)
        response.redirect('/login');
      } else {
        passport.authenticate('local')(request, response, () => {
          response.redirect('/admin');
        });
      }
    });
  },
  logout:(request, response) => {
    request.logout();
    response.redirect('/');
  }
}