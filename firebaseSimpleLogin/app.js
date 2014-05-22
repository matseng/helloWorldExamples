/*
* Secure registration & storage of a new user in Firebase is not clear from docs or stackoverflow.
* No good registration example from https://github.com/firebase/firefeed/blob/master/www/js/firefeed.js
* Current security rule: ".write": "(!data.exists() && auth.id != null) || $userid == auth.id" 
*/


var chatRef = new Firebase('https://simplelogintest.firebaseio.com');
var auth = new FirebaseSimpleLogin(chatRef, function(error, user) {
  if (error) {
    // an error occurred while attempting login
    console.log(error);
  } else if (user) {
    // user successfully authenticated with Firebase
    console.log('User ID: ' + user.uid + ', Provider: ' + user.provider);
    addUser(user);
  } else {
    // user is logged out
  }
});

(function initializeFacebookLoginButton() {
  document.getElementById('loginFacebook').addEventListener('click', loginFacebook);
  function loginFacebook() {
    auth.login('facebook', {
      // scope: "public_profile, email, user_likes"
      scope: "email, user_likes"
    });
  };
})();

(function initializeLogoutButton() {
  document.getElementById('logoutFacebook').addEventListener('click', function() {auth.logout()});
})();

function addUser(user) {
  var userRef = chatRef.child('users').child(user.uid);
  userRef.once('value', function(userSnapshot) {
    var info = {};
    var val = userSnapshot.val();
    //New user not yet in database:
    if (!val) {
      console.log(user);
      info = {thirdPartyUserData: user.thirdPartyUserData};
      userRef.set(info);
    }
  })
};
