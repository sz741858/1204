// Paste the code from Firebase 
var config = {
    apiKey: "AIzaSyAy75idAZ62YRIsQfAhKl7faL0PdNpdxec",
    authDomain: "project-801551760694725162.firebaseapp.com",
    databaseURL: "https://project-801551760694725162.firebaseio.com",
    projectId: "project-801551760694725162",
    storageBucket: "project-801551760694725162.appspot.com",
    messagingSenderId: "842756291702"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('yueispig');

$('#contactForm2').submit(function (e) {
  e.preventDefault();

  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: $('.name').val(),
    sex: $('.sex99').val(),
    email: $('.email').val(),
    product1: $('.product1').val(),
    product2: $('.product2').val(),
    product3: $('.product3').val(),
    select: $('.select99').val(),
    comment: $('.com99').val(),
	
  });

  $('.success-message').show();

  $('#contactForm2')[0].reset();
});