import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyDQMceiuJCO-q19X5LylUFbZucsn_gsVOM",
    authDomain: "myriskcluster.firebaseapp.com",
    databaseURL: "https://myriskcluster.firebaseio.com",
    projectId: "myriskcluster",
    storageBucket: "myriskcluster.appspot.com",
    messagingSenderId: "959896716657",
    appId: "1:959896716657:web:f25e83d8d7621ba07922d0"
  };
  var firebaseConfig = firebase.initializeApp(config);
  export default firebaseConfig;