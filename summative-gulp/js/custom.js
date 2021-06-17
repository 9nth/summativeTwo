(function() {
  'use strict';

var data = {
  accom: {
    hotel: {
      place: 'Milford Lodge',
      pricePerNight: 157,
        },
    hostel: {
      place: 'YHA Tekapo',
      pricePerNight: 30,
    },
    motel: {
      place: 'Blue Water Motel',
      pricePerNight: 90,
    },
    house: {
      place: 'Lake Wanaka (Private Home)',
      pricePerNight: 240,
    }
  },
  // Above ^ Accom Ends
  meals: {
    dinnerName: 'Lamb Meatballs & Roast Veggies',
    dinnerAbout: 'A hearty dish from the mediteranian, perfect for a cosy evening.',
    dinnerInfo: 'Serves 4',
    breakfastName: 'Complimentary Breakfast',
    breakfastAbout: 'Enjoy breakfast on the house, toast & cereals, available until 10am each day.',
    breakfastInfo: 'GF & DF options available',
  },
  // Above ^ Meals Ends
  image: {
    dinner: 'img/dinner.jpg',
    breakfast: 'img/breakfast.jpg',
    fiordland: 'img/lakeMarian.jpg',
    wanaka: 'img/roysPeak.jpg',
    cook: 'img/mtCook.jpg',
  },
  // Above ^ Img Ends
};
// Above^ Data Ends
// Variables
  // Buttons
var tabOneBtn = document.getElementById('tabOneCont');
var tabTwoBtn = document.getElementById('tabTwoCont');
var tabThreeBtn = document.getElementById('tabThreeCont');
var tabFourBtn = document.getElementById('tabFourCont');
  // Trip Details (PULLING)




  // Contact details (PULLING)

  // Meal Selection (PUSHING)
var mealName = document.querySelector('.meal-name').value;
var mealInfo = document.querySelector('.meal-info').value;
var extraInfo = document.querySelector('.extra-info').value;



// If Statements To Push & Pull Data
  // Use Case One

tabOneBtn.onclick = function () {
  // Pulling Data from User Inputs
  var guestSlt = document.querySelector('.guests').value;
  var locationSlt = document.querySelector('.location').value;
  var accomSlt = document.querySelector('.accom').value;


  // Pushing data to Trip Summary Page
  var summaryGuests = document.querySelector('.summary-guests');

  var summaryImage = document.querySelector('.summary-image');
  var summaryAccomName = document.querySelector('.accom-name');
  var summaryDates = document.querySelector('.summary-dates').value;
  var summaryMeal = document.querySelector('.summary-meal').value;
  var summaryTotal = document.querySelector('.summary-total').value;
  // Below * Image on meal options page
  var mealImage = document.querySelector('.meal-image');
// Tab 1
// *** Use Case One
  if (locationSlt === 'fiordland' && accomSlt === 'hotel' && guestSlt > 0) {
    summaryGuests.textContent = guestSlt;
    summaryAccomName.textContent = data.accom.hotel.place;
    summaryImage.src = data.image.fiordland;
    mealImage.src = data.image.breakfast;
  }



};
// Above ^ Tab One Function Ends
tabTwoBtn.onclick = function () {
  // Grabs user input
  var nameInput = document.querySelector('.name').value;
  var emailInput = document.querySelector('.email').value;
  var phInput = document.querySelector('.phNumber').value;
  var addressInput = document.querySelector('.address').value;
  // Vars for displaying info
  var summaryName = document.querySelector('.summary-name');
  var summaryEmail = document.querySelector('.summary-email');
  var summaryNumber = document.querySelector('.summary-number');
  var summaryAddress = document.querySelector('.summary-address');

  // Pushes user input to summary page
  summaryName.textContent = nameInput;
  summaryEmail.textContent = emailInput;
  summaryNumber.textContent = phInput;
  summaryAddress.textContent = addressInput;

};
// Above ^ Tab Two Function ENDS
tabThreeBtn.onclick = function () {
var mealBtn = document.querySelector('.mealBtn');





  console.log(mealBtn.classList.toggle("mealBtnSlt"));


};
// Above ^ Tab Three Function Ends
// Tabs Function
  $( function() {
    $( "#tabs" ).tabs();
  } );

// Continue to next tab ..
$('#tabOneCont').click(function() {
    $("#tabs").tabs("option", "active", 1);
});

$('#tabTwoCont').click(function() {
    $("#tabs").tabs("option", "active", 2);
});

$('#tabThreeCont').click(function() {
    $("#tabs").tabs("option", "active", 3);
});

$('#tabFourCont').click(function() {
    $("#tabs").tabs("option", "active", 4);
});

// Date Range Picker
$(function() {
  $('input[name="daterange"]').daterangepicker({
    opens: 'left'
  }, function(start, end, label) {

    var summaryDates = document.querySelector('.summary-dates').value;
    // Above ^ Grabs the date selector
    var dates = start.format('DD-MM-YYYY') + ' to ' + end.format('DD-MM-YYYY');
    // Above ^ Shows what dates have been picked
    console.log(dates);

  });
});










// iife ENDS
}());
