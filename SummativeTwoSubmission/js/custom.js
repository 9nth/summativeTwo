(function() {
  'use strict';

var data = {
  accom: {
    hotel: {
      place: 'Milford Lodge',
      pricePerNight: 157,
      about: 'Right in the heart of a prehistoric feeling area of the country, stay in style, comfort and warmth.' ,
      roomType: 'Mountain View Chalet',
        },
    hotelTwo: {
      place: 'Lakefront Lodge',
      about: 'Comfortable & Convenient. Lots of stores in the area to prepare for your trip into Fiordland.' ,
      roomType: 'Studio Apartment',
        },
    hostel: {
      place: 'YHA Tekapo',
      pricePerNight: 30,
      about: 'Newly built, possibly the flashest Yha in the country!, Warm and well insulated for those cold nights. Views out over the lake to Mt Cook.',
      roomTypeOne: '4 Bed Mixed Dorm',
      roomTypeTwo: '3 Bed Female Dorm',

    },
    motel: {
      place: 'Arrowtown Motel Apartments',
      pricePerNight: 90,
      roomType: 'Studio Apartment',
      about: 'Quaint & quiet, a nice relaxing place to stay in a relaxing town',
    },
    motelTwo: {
      place: 'Settlers Cottage Motel',
      roomType: '1 Bedroom Apartment',
      about: 'Warm, cosy and vintage. Beautiful views of the trees covering the hills all around & plenty of shops nearby.',
    },
    house: {
      place: '22 Waimana Pl, Wanaka',
      pricePerNight: 240,
      roomType: '3 Bedroom House',
      about: 'Large modern home, cool in summer & warm in winter. Lots of natural light & views of the mountains.',
    },
    houseTwo: {
      place: '10 Smiths Road, Wanaka',
      roomType: '4 Bedroom House',
      about: 'Close to the lake, this modern house has plenty of room for guests. Close to town but still private.',
    }
  },
  // Above ^ Accom Ends
  meals: {
    wanakaDinnerName: 'Lamb Meatballs & Roast Veggies',
    wanakaDinnerAbout: 'A hearty dish from the mediteranian, perfect for a cosy evening.',
    wanakaDinnerInfo: 'Serves 4',
    yhaBreakfastName: 'Complimentary Breakfast',
    yhaBreakfastAbout: 'Enjoy breakfast on the house, toast & cereals, available until 10am each day.',
    yhaBreakfastInfo: 'GF & DF options available',
    arrowtownBreakfastName: 'Buffet Breakfast',
    arrowtownBreakfastAbout: 'Sausages, scrambled eggs, hash browns, bacon, toast, fried tomatoes & mushrroms.',
    arrowtownBreakfastInfo: 'Some vegan & GF alternatives available on request.',
    fiordDinnerName: 'Venison Bourguignon',
    fiordDinerAbout:'Wild fiordland venison, rich and earthly stew with fresh vegetable.',
    fiordDinnerInfo: 'Serves two, contact kitchen for a larger or smaller amounts.',
  },
  // Above ^ Meals Ends
  image: {
    // Meals
    wanakaDinner: 'img/wanakaDinner.jpg',
    yhaBreakfast: 'img/yhaBreakfast.jpg',
    fiordDinner: 'img/fiordDinner.jpg',
    arrowtownBreakfast: 'img/arrowtownBreakfast.jpg',
    // Search Results
    fiordlandOne: 'img/fiordSearchOne.jpg',
    fiordlandTwo: 'img/fiordSearchTwo.jpg',
    wanakaOne: 'img/wanakaSearchOne.png',
    wanakaTwo: 'img/wanakaSearchTwo.png',
    tekapoOne: 'img/tekapoSearchOne.png',
    tekapoTwo: 'img/tekapoSearchTwo.png',
    arrowtownOne: 'img/arrowtownSearchOne.jpg',
    arrowtownTwo: 'img/arrowtownSearchTwo.jpg',
    // Locations
    fiordland: 'img/milford.jpg',
    wanaka: 'img/wanaka.jpg',
    tekapo: 'img/tekapo.jpg',
    franz: 'img/franz.jpg',
    arrowtown: 'img/arrowtown.jpg',
  },
  facilities: {
    facilityOneA: '* Dishwasher',
    facilityOneB: '* Aircon / Heater',
    facilityOneC: '* Full Kitchen',
    facilityOneD: '* Free Wifi',
    facilityTwoA: '* Games Room',
    facilityTwoB: '* Dryer',
    facilityTwoC: '* Microwave',
    facilityTwoD: '* Heated Pool',
  },
  nearby: {
    fiordland: {
      nearbyOneA: '* Milford Sound',
      nearbyOneB: '* Lake Marian',
      nearbyOneC: '* Key Summit Track',
      nearbyOneD: '* Lake Gunn',
      nearbyTwoA: '* Lake Te Anau',
      nearbyTwoB: '* Fiordland National Park',
      nearbyTwoC: '* New World',
      nearbyTwoD: '* Laundromat',
    },
    wanaka: {
      nearbyOneA: '* Roys Peak Track',
      nearbyOneB: '* Isthmus Peak Track',
      nearbyOneC: '* New World',
      nearbyOneD: '* Lake Wanaka',
      nearbyTwoA: '* The Wanaka Tree',
      nearbyTwoB: '* Diamond Lake',
      nearbyTwoC: '* Subway',
      nearbyTwoD: '* Laundromat',
    },
    tekapo: {
      nearbyOneA: '* Tekapo Springs',
      nearbyOneB: '* Tekapo Airport',
      nearbyOneC: '* Four Square',
      nearbyOneD: '* Gym',
      nearbyTwoA: '* Dark Sky Project',
      nearbyTwoB: '* Mt John Observatory',
      nearbyTwoC: '* Golf Course',
      nearbyTwoD: '* Laundromat',
    },
    arrowtown: {
      nearbyOneA: '* Four Square',
      nearbyOneB: '* Jet Boating',
      nearbyOneC: '* Golf Course',
      nearbyOneD: '* Arrow River',
      nearbyTwoA: '* Queenstown',
      nearbyTwoB: '* Lake Hayes',
      nearbyTwoC: '* Bungee Jumping',
      nearbyTwoD: '* Laundromat',
    },
  },

  // Above ^ Img Ends
};

//----------------------- Above^ Data Ends-------------------------------
  // Button Variables
var tabOneBtn = document.getElementById('tabOneCont');
var tabTwoBtn = document.getElementById('tabTwoCont');
var tabThreeBtn = document.getElementById('tabThreeCont');
var tabFourBtn = document.getElementById('tabFourCont');
var tabFiveBtn = document.getElementById('tabFiveCont');
var mapBtn = document.querySelector('.map-btn');
var headerBtn = document.querySelector('.header-1');
// Toggle Selection on Search Results page

// "See on Map" Button scrolls down to MapBox
mapBtn.onclick = function () {
  document.querySelector('.inspo').scrollIntoView({
    behavior: 'smooth'
  });
};

// "Inspiration Button in Header Scroll down to MapBox"
headerBtn.onclick = function () {
  document.querySelector('.inspo').scrollIntoView({
    behavior: 'smooth'
  });
};

  // Date Range Picker (Everything must live inside the datepicker function in order to grab date info)
  $(function() {
    $('input[name="daterange"]').daterangepicker({
      opens: 'left',
      timePicker: true,
      timePickerIncrement: 30,
      locale: {
         format: 'MM/DD/YYYY h:mm A'
        }
    }, function(start, end, label) {
      // Date Picker Function ^ Above
      // Trip Details Tab Below
tabOneBtn.onclick = function () {
//-------------------- Variables --------------------
  // Pulling Data from User Inputs (TAB ONE)
  var guestSlt = document.querySelector('.guests').value;
  var locationSlt = document.querySelector('.location').value;
  var accomSlt = document.querySelector('.accom').value;

  // Meal Selection (Empty DIVS that are filled from DATA Vars)
  var mealName = document.querySelector('.meal-name');
  var mealInfo = document.querySelector('.meal-info');
  var extraInfo = document.querySelector('.extra-info');
  var mealImage = document.querySelector('.meal-image');

  // Pushing data to Trip Summary Page
  var summaryGuests = document.querySelector('.summary-guests');
  var summaryImage = document.querySelector('.summary-image');
  var summaryAccomName = document.querySelector('.summary-accom-name');
  var summaryMeal = document.querySelector('.summary-meal');
  var summaryTotal = document.querySelector('.summary-total');
  var summaryDates = document.querySelector('.summary-dates');
  // Pushing Data to Search Results Page
  var searchSummaryDates1 = document.querySelector('.summary-dates-1');
  var searchSummaryDates2 = document.querySelector('.summary-dates-2');
  var searchSummaryGuests1 = document.querySelector('.summary-guests-1');
  var searchSummaryGuests2 = document.querySelector('.summary-guests-2');
  var searchSummaryTotalOne = document.querySelector('.summary-total-1');
  var searchSummaryTotalTwo = document.querySelector('.summary-total-2');
  var searchImageOne = document.querySelector('.search-image-1');
  var searchImageTwo = document.querySelector('.search-image-2');
  // Names & description on Search Page
  var searchAccomNameOne = document.querySelector('.search-accom-name-1');
  var searchAccomNameTwo = document.querySelector('.search-accom-name-2');
  var searchAccomInfoOne = document.querySelector('.search-accom-info-1');
  var searchAccomInfoTwo = document.querySelector('.search-accom-info-2');
  var searchAccomRoomTypeOne = document.querySelector('.room-type-1');
  var searchAccomRoomTypeTwo = document.querySelector('.room-type-2');
  // Facilities on Search Page
  var facilitiesOneA = document.querySelector('.facility-a-1');
  var facilitiesOneB= document.querySelector('.facility-b-1');
  var facilitiesOneC = document.querySelector('.facility-c-1');
  var facilitiesOneD = document.querySelector('.facility-d-1');
  // ----
  var facilitiesTwoA = document.querySelector('.facility-a-2');
  var facilitiesTwoB = document.querySelector('.facility-b-2');
  var facilitiesTwoC = document.querySelector('.facility-c-2');
  var facilitiesTwoD = document.querySelector('.facility-d-2');
  // Nearby on Search Page
  var nearbyOneA = document.querySelector('.nearby-a-1');
  var nearbyOneB = document.querySelector('.nearby-b-1');
  var nearbyOneC = document.querySelector('.nearby-c-1');
  var nearbyOneD = document.querySelector('.nearby-d-1');
  // ----
  var nearbyTwoA = document.querySelector('.nearby-a-2');
  var nearbyTwoB = document.querySelector('.nearby-b-2');
  var nearbyTwoC = document.querySelector('.nearby-c-2');
  var nearbyTwoD = document.querySelector('.nearby-d-2');

  // Below * Grabs Date Selected on Datepicker Plugin
  var dates = start.format('DD-MM-YYYY') + ' to ' + end.format('DD-MM-YYYY');
  // Below * Gets Number of days depending on dates picked
  var diff = end.diff(start, 'days');
// ----------------------------Use Case One----------------------------------
  if (locationSlt === 'fiordland' && accomSlt === 'hotel' && guestSlt > 0) {

    // Below Pushes Data to Search Results from Trip Details
    searchSummaryGuests1.textContent = guestSlt + ' Guests';
    searchSummaryGuests2.textContent = guestSlt + ' Guests';
    searchSummaryDates1.textContent = dates;
    searchSummaryDates2.textContent = dates;
    searchSummaryTotalOne.textContent = 'Total: $' + diff * data.accom.hotel.pricePerNight;
    searchSummaryTotalTwo.textContent = 'Total: $' + diff * data.accom.hotel.pricePerNight;

    // Search Result One
    searchImageOne.src = data.image.fiordlandOne;
    searchAccomNameOne.textContent = data.accom.hotel.place;
    searchAccomInfoOne.textContent = data.accom.hotel.about;
    facilitiesOneA.textContent = data.facilities.facilityOneA;
    facilitiesOneB.textContent = data.facilities.facilityOneB;
    facilitiesOneC.textContent = data.facilities.facilityOneC;
    facilitiesOneD.textContent = data.facilities.facilityOneD;
    nearbyOneA.textContent = data.nearby.fiordland.nearbyOneA;
    nearbyOneB.textContent = data.nearby.fiordland.nearbyOneB;
    nearbyOneC.textContent = data.nearby.fiordland.nearbyOneC;
    nearbyOneD.textContent = data.nearby.fiordland.nearbyOneD;

    // Search Result Two
    searchImageTwo.src = data.image.fiordlandTwo;
    searchAccomNameTwo.textContent = data.accom.hotelTwo.place;
    searchAccomInfoTwo.textContent = data.accom.hotelTwo.about;
    facilitiesTwoA.textContent = data.facilities.facilityTwoA;
    facilitiesTwoB.textContent = data.facilities.facilityTwoB;
    facilitiesTwoC.textContent = data.facilities.facilityTwoC;
    facilitiesTwoD.textContent = data.facilities.facilityTwoD;
    nearbyTwoA.textContent = data.nearby.fiordland.nearbyTwoA;
    nearbyTwoB.textContent = data.nearby.fiordland.nearbyTwoB;
    nearbyTwoC.textContent = data.nearby.fiordland.nearbyTwoC;
    nearbyTwoD.textContent = data.nearby.fiordland.nearbyTwoD;

    // Pushes Data from Search Results to Trip Summary page
    var useCaseOneReserveA = document.querySelector('.reservation-btn-1');
    useCaseOneReserveA.onclick = function () {
      var summaryAccomName = document.querySelector('.summary-accom-name');
      var summaryImage = document.querySelector('.summary-image');
      summaryAccomName.textContent = data.accom.hotel.place;
      summaryImage.src = data.image.fiordlandOne;
    };

    var useCaseOneReserveB = document.querySelector('.reservation-btn-2');
    useCaseOneReserveB.onclick = function () {
      var summaryAccomName = document.querySelector('.summary-accom-name');
      var summaryImage = document.querySelector('.summary-image');
      summaryAccomName.textContent = data.accom.hotelTwo.place;
      summaryImage.src = data.image.fiordlandTwo;
    };

    // Below Pushes Data to Trip Summary Page from Trip Details
    summaryGuests.textContent = guestSlt + ' Guests';
    summaryDates.textContent = dates;
    summaryTotal.textContent = 'Total: $' + diff * data.accom.hotel.pricePerNight;

      // Meal Option Page
    mealImage.src = data.image.fiordDinner;
    mealName.textContent = data.meals.fiordDinnerName;
    mealInfo.textContent = data.meals.fiordDinerAbout;
    extraInfo.textContent = data.meals.fiordDinnerInfo;

    // Function to Push Meal Name to Trip Summary Page & Continue to next page
    var mealSltOne = document.querySelector('#tabFourContWithMeal');
    var noMealSltOne = document.querySelector('#tabFourCont');
    mealSltOne.onclick = function () {
      // Pushes Meal Name to Summary Page on click
      summaryMeal.textContent = data.meals.fiordDinnerName;
      $("#tabs").tabs("option", "active", 4);
    };
  }
  // Above ^ Use Case One If statement Ends
// ----------------------------Use Case Two----------------------------
if (locationSlt === 'tekapo' && accomSlt === 'hostel' && guestSlt > 0) {

  // Below Pushes Data to Search Results from Trip Details
  searchSummaryGuests1.textContent = guestSlt + ' Guests';
  searchSummaryGuests2.textContent = guestSlt + ' Guests';
  searchSummaryDates1.textContent = dates;
  searchSummaryDates2.textContent = dates;
  searchSummaryTotalOne.textContent = 'Total: $' + diff * data.accom.hostel.pricePerNight;
  searchSummaryTotalTwo.textContent = 'Total: $' + diff * data.accom.hostel.pricePerNight;

  // Search Result One
  searchImageOne.src = data.image.tekapoOne;
  searchAccomNameOne.textContent = data.accom.hostel.place;
  searchAccomInfoOne.textContent = data.accom.hostel.about;
  searchAccomRoomTypeOne.textContent = data.accom.hostel.roomTypeOne;
  facilitiesOneA.textContent = data.facilities.facilityOneA;
  facilitiesOneB.textContent = data.facilities.facilityOneB;
  facilitiesOneC.textContent = data.facilities.facilityOneC;
  facilitiesOneD.textContent = data.facilities.facilityOneD;
  nearbyOneA.textContent = data.nearby.tekapo.nearbyOneA;
  nearbyOneB.textContent = data.nearby.tekapo.nearbyOneB;
  nearbyOneC.textContent = data.nearby.tekapo.nearbyOneC;
  nearbyOneD.textContent = data.nearby.tekapo.nearbyOneD;

  // Search Result Two
  searchImageTwo.src = data.image.tekapoTwo;
  searchAccomNameTwo.textContent = data.accom.hostel.place;
  searchAccomInfoTwo.textContent = data.accom.hostel.about;
  searchAccomRoomTypeTwo.textContent = data.accom.hostel.roomTypeTwo;
  facilitiesTwoA.textContent = data.facilities.facilityTwoA;
  facilitiesTwoB.textContent = data.facilities.facilityTwoB;
  facilitiesTwoC.textContent = data.facilities.facilityTwoC;
  facilitiesTwoD.textContent = data.facilities.facilityTwoD;
  nearbyTwoA.textContent = data.nearby.tekapo.nearbyTwoA;
  nearbyTwoB.textContent = data.nearby.tekapo.nearbyTwoB;
  nearbyTwoC.textContent = data.nearby.tekapo.nearbyTwoC;
  nearbyTwoD.textContent = data.nearby.tekapo.nearbyTwoD;


  // Pushes Data from Search Results to Trip Summary page
  var useCaseTwoReserveA = document.querySelector('.reservation-btn-1');
  useCaseTwoReserveA.onclick = function () {
    var summaryAccomName = document.querySelector('.summary-accom-name');
    var summaryImage = document.querySelector('.summary-image');
    summaryAccomName.textContent = data.accom.hostel.place;
    summaryImage.src = data.image.tekapoOne;
  };

  var useCaseTwoReserveB = document.querySelector('.reservation-btn-2');
  useCaseTwoReserveB.onclick = function () {
    var summaryAccomName = document.querySelector('.summary-accom-name');
    var summaryImage = document.querySelector('.summary-image');
    summaryAccomName.textContent = data.accom.hostel.place;
    summaryImage.src = data.image.tekapoTwo;
  };

  // Below Pushes Data to Trip Summary Page from Trip Details
  summaryGuests.textContent = guestSlt + ' Guests';
  summaryDates.textContent = dates;
  summaryTotal.textContent = 'Total: $' + diff * data.accom.hostel.pricePerNight;

    // Meal Option
  mealImage.src = data.image.yhaBreakfast;
  mealName.textContent = data.meals.yhaBreakfastName;
  mealInfo.textContent = data.meals.yhaBreakfastAbout;
  extraInfo.textContent = data.meals.yhaBreakfastInfo;

  var mealSltTwo = document.querySelector('#tabFourContWithMeal');
  var noMealSltTwo = document.querySelector('#tabFourCont');
  mealSltTwo.onclick = function () {
    // Pushes Meal Name to Summary Page on click
    summaryMeal.textContent = data.meals.yhaBreakfastName;
    $("#tabs").tabs("option", "active", 4);
  };
}

// ----------------------------Use Case Three----------------------------
if (locationSlt === 'wanaka' && accomSlt === 'house' && guestSlt > 0) {
  // Below Pushes Data to Search Results from Trip Details
  searchSummaryGuests1.textContent = guestSlt + ' Guests';
  searchSummaryGuests2.textContent = guestSlt + ' Guests';
  searchSummaryDates1.textContent = dates;
  searchSummaryDates2.textContent = dates;
  searchSummaryTotalOne.textContent = 'Total: $' + diff * data.accom.house.pricePerNight;
  searchSummaryTotalTwo.textContent = 'Total: $' + diff * data.accom.house.pricePerNight;

  // Search Result One
  searchImageOne.src = data.image.wanakaOne;
  searchAccomNameOne.textContent = data.accom.house.place;
  searchAccomInfoOne.textContent = data.accom.house.about;
  searchAccomRoomTypeOne.textContent = data.accom.house.roomType;
  facilitiesOneA.textContent = data.facilities.facilityOneA;
  facilitiesOneB.textContent = data.facilities.facilityOneB;
  facilitiesOneC.textContent = data.facilities.facilityOneC;
  facilitiesOneD.textContent = data.facilities.facilityOneD;
  nearbyOneA.textContent = data.nearby.wanaka.nearbyOneA;
  nearbyOneB.textContent = data.nearby.wanaka.nearbyOneB;
  nearbyOneC.textContent = data.nearby.wanaka.nearbyOneC;
  nearbyOneD.textContent = data.nearby.wanaka.nearbyOneD;

  // Search Result Two
  searchImageTwo.src = data.image.wanakaTwo;
  searchAccomNameTwo.textContent = data.accom.houseTwo.place;
  searchAccomInfoTwo.textContent = data.accom.houseTwo.about;
  searchAccomRoomTypeTwo.textContent = data.accom.houseTwo.roomType;
  facilitiesTwoA.textContent = data.facilities.facilityTwoA;
  facilitiesTwoB.textContent = data.facilities.facilityTwoB;
  facilitiesTwoC.textContent = data.facilities.facilityTwoC;
  facilitiesTwoD.textContent = data.facilities.facilityTwoD;
  nearbyTwoA.textContent = data.nearby.wanaka.nearbyTwoA;
  nearbyTwoB.textContent = data.nearby.wanaka.nearbyTwoB;
  nearbyTwoC.textContent = data.nearby.wanaka.nearbyTwoC;
  nearbyTwoD.textContent = data.nearby.wanaka.nearbyTwoD;

  // Pushes Data from Search Results to Trip Summary page
  var useCaseThreeReserveA = document.querySelector('.reservation-btn-1');
  useCaseThreeReserveA.onclick = function () {
    var summaryAccomName = document.querySelector('.summary-accom-name');
    var summaryImage = document.querySelector('.summary-image');
    summaryAccomName.textContent = data.accom.house.place;
    summaryImage.src = data.image.wanakaOne;
  };

  var useCaseThreeReserveB = document.querySelector('.reservation-btn-2');
  useCaseThreeReserveB.onclick = function () {
    var summaryAccomName = document.querySelector('.summary-accom-name');
    var summaryImage = document.querySelector('.summary-image');
    summaryAccomName.textContent = data.accom.houseTwo.place;
    summaryImage.src = data.image.wanakaTwo;
  };

  // Below Pushes Data to Trip Summary Page from Trip Details
  summaryGuests.textContent = guestSlt + ' Guests';
  summaryDates.textContent = dates;
  summaryTotal.textContent = 'Total: $' + diff * data.accom.house.pricePerNight;

    // Meal Option
  mealImage.src = data.image.wanakaDinner;
  mealName.textContent = data.meals.wanakaDinnerName;
  mealInfo.textContent = data.meals.wanakaDinnerAbout;
  extraInfo.textContent = data.meals.wanakaDinnerInfo;

  var mealSltThree = document.querySelector('#tabFourContWithMeal');
  var noMealSltThree = document.querySelector('#tabFourCont');
  mealSltThree.onclick = function () {
    // Pushes Meal Name to Summary Page on click
    summaryMeal.textContent = data.meals.wanakaDinnerName;
    $("#tabs").tabs("option", "active", 4);
  };
}

// -----------------------------Motel Option-------------------------------
if (locationSlt === 'arrowtown' && accomSlt === 'motel' && guestSlt > 0) {
  // Below Pushes Data to Search Results from Trip Details
  searchSummaryGuests1.textContent = guestSlt + ' Guests';
  searchSummaryGuests2.textContent = guestSlt + ' Guests';
  searchSummaryDates1.textContent = dates;
  searchSummaryDates2.textContent = dates;
  searchSummaryTotalOne.textContent = 'Total: $' + diff * data.accom.motel.pricePerNight;
  searchSummaryTotalTwo.textContent = 'Total: $' + diff * data.accom.motel.pricePerNight;

  // Search Result One
  searchImageOne.src = data.image.arrowtownOne;
  searchAccomNameOne.textContent = data.accom.motel.place;
  searchAccomInfoOne.textContent = data.accom.motel.about;
  searchAccomRoomTypeOne.textContent = data.accom.motel.roomType;
  facilitiesOneA.textContent = data.facilities.facilityOneA;
  facilitiesOneB.textContent = data.facilities.facilityOneB;
  facilitiesOneC.textContent = data.facilities.facilityOneC;
  facilitiesOneD.textContent = data.facilities.facilityOneD;
  nearbyOneA.textContent = data.nearby.arrowtown.nearbyOneA;
  nearbyOneB.textContent = data.nearby.arrowtown.nearbyOneB;
  nearbyOneC.textContent = data.nearby.arrowtown.nearbyOneC;
  nearbyOneD.textContent = data.nearby.arrowtown.nearbyOneD;

  // Search Result Two
  searchImageTwo.src = data.image.arrowtownTwo;
  searchAccomNameTwo.textContent = data.accom.motelTwo.place;
  searchAccomInfoTwo.textContent = data.accom.motelTwo.about;
  searchAccomRoomTypeTwo.textContent = data.accom.motelTwo.roomType;
  facilitiesTwoA.textContent = data.facilities.facilityTwoA;
  facilitiesTwoB.textContent = data.facilities.facilityTwoB;
  facilitiesTwoC.textContent = data.facilities.facilityTwoC;
  facilitiesTwoD.textContent = data.facilities.facilityTwoD;
  nearbyTwoA.textContent = data.nearby.arrowtown.nearbyTwoA;
  nearbyTwoB.textContent = data.nearby.arrowtown.nearbyTwoB;
  nearbyTwoC.textContent = data.nearby.arrowtown.nearbyTwoC;
  nearbyTwoD.textContent = data.nearby.arrowtown.nearbyTwoD;


  // Pushes Data from Search Results to Trip Summary page
  var useCaseFourReserveA = document.querySelector('.reservation-btn-1');
  useCaseFourReserveA.onclick = function () {
    var summaryAccomName = document.querySelector('.summary-accom-name');
    var summaryImage = document.querySelector('.summary-image');
    summaryAccomName.textContent = data.accom.motel.place;
    summaryImage.src = data.image.arrowtownOne;
  };

  var useCaseFourReserveB = document.querySelector('.reservation-btn-2');
  useCaseFourReserveB.onclick = function () {
    var summaryAccomName = document.querySelector('.summary-accom-name');
    var summaryImage = document.querySelector('.summary-image');
    summaryAccomName.textContent = data.accom.motelTwo.place;
    summaryImage.src = data.image.arrowtownTwo;
  };

  // Below Pushes Data to Trip Summary Page from Trip Details
  summaryGuests.textContent = guestSlt + ' Guests';
  summaryDates.textContent = dates;
  summaryTotal.textContent = 'Total: $' + diff * data.accom.motel.pricePerNight;

    // Meal Option
  mealImage.src = data.image.arrowtownBreakfast;
  mealName.textContent = data.meals.arrowtownBreakfastName;
  mealInfo.textContent = data.meals.arrowtownBreakfastAbout;
  extraInfo.textContent = data.meals.arrowtownBreakfastInfo;

  var mealSltFour = document.querySelector('#tabFourContWithMeal');
  var noMealSltFour = document.querySelector('#tabFourCont');
    mealSltFour.onclick = function () {
    // Pushes Meal Name to Summary Page on click
      summaryMeal.textContent = data.meals.arrowtownBreakfastName;
      $("#tabs").tabs("option", "active", 4);
    };
  }
  // Above ^ If Statement Ends
};
// Above ^ Tab One Function Ends
//------------------- Below * Tab Three Begins------------------------
tabThreeBtn.onclick = function () {

  // Variables
  // Grabs user input
  var nameInput = document.querySelector('.name').value;
  var emailInput = document.querySelector('.email').value;
  var phInput = document.querySelector('.phNumber').value;
  var addressInput = document.querySelector('.address').value;

  // Vars for displaying info on Trip Summary Page
  var summaryName = document.querySelector('.summary-name');
  var summaryEmail = document.querySelector('.summary-email');
  var summaryNumber = document.querySelector('.summary-number');
  var summaryAddress = document.querySelector('.summary-address');

  // Pushes user input to summary page on click of continue button
  summaryName.textContent = nameInput;
  summaryEmail.textContent = emailInput;
  summaryNumber.textContent = phInput;
  summaryAddress.textContent = addressInput;
};
// -------------------Above ^ Tab Three Function ENDS---------------------

// Below * Gets Number of Days
}).on('apply.daterangepicker', function(ev, picker) {
                var start = moment(picker.endDate.format('YYYY-MM-DD'));
                var end   = moment(picker.startDate.format('YYYY-MM-DD'));
                var diff = start.diff(end, 'days'); // returns correct number
              });
});
// ------------------------Date Range Picker Ends---------------------

// Shows Booking Container on click of "Book  your trip!" Button
    $("#show").click(function(){
      $("#dates").val('');
      $("#bg-img").show();
      $("#booking-container").show();
      $("#intro").hide();
      $("#hide-show").hide();
      $("#scroll-down").hide();
      $(".experience").hide();
      $("#tabs").tabs("option", "active", 0);
      $('#tab1top').addClass("tabhighlight");
    });

    // Tabs Function For Booking System
      $( function() {
        $( "#tabs" ).tabs();
      } );

// Continuing to next tab + Parsley Validation Logic
  // Tab One
$('#tabOneCont').click(function() {
  var form1 = $('#tab-1').parsley();
    form1.validate();
    if (form1.validationResult === true) {
      $("#tabs").tabs("option", "active", 1);
      $('#tab1top').removeClass("tabhighlight");
      $('#tab2top').addClass("tabhighlight");
    } else {
      // Doesn't Continue
    }
});

  // Tab Two
$('#tabTwoCont').click(function() {
  var form2 = $('#tab-2').parsley();
    form2.validate();
    if (form2.validationResult === true) {
      $("#tabs").tabs("option", "active", 2);
      $('#tab2top').removeClass("tabhighlight");
      $('#tab3top').addClass("tabhighlight");
    } else {
      // Doesn't Continue
    }
});

  // Tab Three
$('#tabThreeCont').click(function() {
  $('#tab3top').removeClass("tabhighlight");
  $('#tab4top').addClass("tabhighlight");
  $("#tabs").tabs("option", "active", 3);
});

  // Tab Four
$('#tabFourCont').click(function() {
  $('#tab4top').removeClass("tabhighlight");
  $('#tab5top').addClass("tabhighlight");
  $("#tabs").tabs("option", "active", 4);
});

  // Tab Five
$('#tabFourContWithMeal').click(function() {
  $('#tab4top').removeClass("tabhighlight");
  $('#tab5top').addClass("tabhighlight");
  $("#tabs").tabs("option", "active", 4);
});

  // Tab Six
$('#tabFiveCont').click(function() {
  $('#tab5top').removeClass("tabhighlight");
  $('#tab6top').addClass("tabhighlight");
  $("#tabs").tabs("option", "active", 5);
});

  // Reservation Buttons on Search Page | Toggles Colour & Text of Buttons
$(".reservation-btn-1").click(function () {
  $( this ).toggleClass( "reserveSlt" );
    $("#reserveBtn1").toggleClass(".reserveSlt");
     $(this).text(function(i, text){
         return text === "Reserved" ? "Select" : "Reserved";
     });
  });

  $(".reservation-btn-2").click(function () {
    $( this ).toggleClass( "reserveSlt" );
      $("#reserveBtn2").toggleClass(".reserveSlt");
       $(this).text(function(i, text){
           return text === "Reserved" ? "Select" : "Reserved";
       });
    });

// MapBox
mapboxgl.accessToken = 'pk.eyJ1IjoiOW50aCIsImEiOiJja3A1eHMzdXMwZG9zMm9ud3p3MGt1NTZqIn0.cDeS2l13wdnMmMVGlDXJiw';

// Pop Ups
// Wanaka Pop Up
var wanaka = [169.113512, -44.696754];
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v10',
  // Below * Centers on Wanaka when page is loaded
  center: wanaka,
  zoom: 7
});

// The Popup itself & The Content Inside
var wanakaPopup = new mapboxgl.Popup({ offset: 25 }).setText(
  'Wanaka'
);

// Creates the DOM Element for the marker (Including Image)
var el = document.createElement('div');
el.id = 'wanakaMarker';

// Creates a Marker & Adds it to Map
new mapboxgl.Marker(el)
.setLngLat(wanaka)
.setPopup(wanakaPopup)
.addTo(map);
// Wanaka Pop Up Ends
// Queenstown Popup

// The Popup itself & The Content Inside
var queenstown = [168.659501, -45.032477];
var queenstownPopup = new mapboxgl.Popup({ offset: 25 }).setText(
  'Queenstown'
);

// Creates the DOM Element for the marker (Including Image)
var elB = document.createElement('divB');
elB.id = 'queenstownMarker';

// Creates a Marker & Adds it to Map
new mapboxgl.Marker(elB)
.setLngLat(queenstown)
.setPopup(queenstownPopup)
.addTo(map);
// Queenstown Popup Ends

// Fiordland Popup
// The Popup itself & The Content Inside
var fiordland = [167.922454, -44.670484];
var fiordlandPopup = new mapboxgl.Popup({ offset: 25 }).setText(
  'Fiordland'
);

// Creates the DOM Element for the marker (Including Image)
var elC = document.createElement('divC');
elC.id = 'fiordlandMarker';

// Creates a Marker & Adds it to Map
new mapboxgl.Marker(elC)
.setLngLat(fiordland)
.setPopup(fiordlandPopup)
.addTo(map);
// Fiordland Popup Ends

// Tekapo Popup
// The Popup itself & The Content Inside
var tekapo = [170.482217, -44.002690];
var tekapoPopup = new mapboxgl.Popup({ offset: 25 }).setText(
'hello'
);

// Creates the DOM Element for the marker (Including Image)
var elD = document.createElement('divD');
elD.id = 'tekapoMarker';

// Creates a Marker & Adds it to Map
new mapboxgl.Marker(elD)
.setLngLat(tekapo)
.setPopup(tekapoPopup)
.addTo(map);
// MapBox Code ENDS

// iife ENDS
}());
