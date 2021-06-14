(function() {
  'use strict';

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
    console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
  });
});

// Input Validation
var tab1 = $('#tab-1').parsley();

// Parent div find the buttons and setup click event
$('#tab-1').find('#tabOneCont').click(function () {
  // Validate all internal parsley elements
    form.validate();
});








// iife ENDS
}());
