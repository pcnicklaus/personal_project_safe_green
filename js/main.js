// Product Constructor
function Product(name, type, thc, image) {
  this.name = name,
  this.type = type,
  this.thc = thc,
  this.image = image || "sorry.";
}

function Edible(name, type, milligrams, image) {
  this.name = name,
  this.type = type,
  this.milligrams = milligrams,
  this.image = image;
 }

// Product Methods
var marijuanaArray = [];
var $element = '';
Product.prototype.createElement = function() {
  $element = $('<div class="col-sm-2"><img src="'+this.image+'" class="img-responsive" alt=""><h4>'+ this.name +'</h4><p>'+this.type+'<br>'+this.thc+'% </p></div>');
  marijuanaArray.push($element);
  return $element;
};

Product.prototype.renderPot = function() {
  for (var i = 0; i < marijuanaArray.length; i++) {
    $('#marijuana-reco-holder').append(marijuanaArray[i]);
    }
};

var edibleArray = [];
var $edibleElement = '';
Product.prototype.createEdibleElement = function() {
  $edibleElement = $('<div class="col-sm-2"><img src="'+this.image+'" class="img-responsive" alt=""><h4>'+ this.name +'</h4><p>'+this.type+'<br>'+this.thc+'% </p></div>');
  edibleArray.push($edibleElement);
  return $element;
};
Product.prototype.renderEdible = function() {
  for (var i = 0; i < edibleArray.length; i++) {
    $('#edible-reco-holder').append(edibleArray[i]);
    }
};

// marijuana
var whiteWidow = new Product('white widow', 'sativa', 15, "images/Cataract-Kush-Marijuana-Bud.jpg");
var durbanPoison = new Product('durban poison', 'sativa', 24, "images/good_pot.jpg");
var durbanPoison2 = new Product('durban poison2', 'sativa', 243, "images/grandpurp.jpg");
var durbanPoison3 = new Product('durban poison3', 'sativa', 24, "images/33009demo11organicjackherer002.jpg");
var durbanPoison4 = new Product('durban poison4', 'sativa', 24, "images/rare_dankness_seeds_-_ghost_train_haze_nr1.jpg");
var durbanPoison5 = new Product('durban poison5', 'sativa', 24, "images/Macro_cannabis_bud.jpg");

// edibles
var whiteWidow1 = new Edible ('white widow', 'sativa', 15, "images/Cataract-Kush-MarijuanaEdible -Bud.jpg");
var whiteWidow2 = new Edible ('white widow', 'sativa', 15, "images/Cataract-Kush-MarijuanaEdible -Bud.jpg");
var durbanPoison6 = new Edible ('durban poison', 'sativa', 24, "images/good_pot.jpg");
var durbanPoison7 = new Edible ('durban poison2', 'sativa', 243, "images/grandpurp.jpg");
var durbanPoison8 = new Edible ('durban poison3', 'sativa', 24, "images/33009demo11organicjackherer002.jpg");
var durbanPoison9 = new Edible ('durban poison4', 'sativa', 24, "images/rare_dankness_seeds_-_ghost_train_haze_nr1.jpg");
var durbanPoison10 = new Edible ('durban poison5', 'sativa', 24, "images/Macro_cannabis_bud.jpg");


$(document).on('ready', function() {
  // make the modal stay up until it is completed
  $('#ageModal').modal({
    backdrop:'static',
    keyboard:false,
    show:true
  });

  whiteWidow.createElement();
  durbanPoison.createElement();
  durbanPoison2.createElement();
  durbanPoison3.createElement();
  durbanPoison4.createElement();
  durbanPoison5.createElement();
  durbanPoison5.renderPot();

  // age verification check
  function ageVerification() {
    $("#age-verification-submit").on('click', function(event){
      event.preventDefault();

      // grab the inputs from the age-verification-window inputs
      var userDay = $("#day").val() || 8;
      var userMonth = $("#month").val() || 1;
      var userYear = $("#year").val() || 2015;

      // check if user day is a valid input
      if (isNaN(userDay) || userDay < 1 || userDay > 31) {
        alert("Your day is not valid number!")
        $(".age-ver").val('');
        return false;
      }

      // check if user month is a valid input
      if (isNaN(userMonth) || userMonth < 1 || userMonth > 12) {
        alert("Your month is not valid number!")
        $(".age-ver").val('');
        return false;
      }

      // check if user year is a valid input - don't think i need the last part
      if (isNaN(userYear) || userYear < 1920 || userYear > 2015 || userYear.length < 4) {
        alert("Your year is not a valid number!");
        $(".age-ver").val('');
        return false;
      }

      // create a holder for userAge by first creating a new date object
      var userAge = new Date();
      // set the date object equal to user inputs from age-verification-window form
      userAge.setFullYear(userYear, userMonth, userDay);

      // create a new variable currentTime and set it equal to a new date object
      var currentTime = new Date();
      // create a variable that returns the month (from 0 to 11) WHY i added 1
      var currentMonth = currentTime.getMonth() + 1;
      // create a variable that returns the day of the month (from 1 to 31)
      var currentDay = currentTime.getDate();
      // rcreate a variable that returns the year (four digits)
      var currentYear = currentTime.getFullYear();
      // create a variable passYear that will result in the year being above 21;
      var passYear = currentYear - 21;

      // create a variable passAge and set it equal to a new date object
      var passAge = new Date();
      // set the passAge equal to ages above 21
      passAge.setFullYear(passYear, currentMonth, currentDay);

      // subtract user age from passAge and it isn't above 0, kick 'em out.
      if ( (userAge - passAge) >= 0 ) {
        alert("Sorry, only persons over the age of 21 may enter this site");
        // redirect them to an age appropriate website
        ageVerificationFail();
        return false;
      }
      // let them in by fading out the age-verification-window
      // else {
      //   // $("#modalContainer").html();
      // }
    });
  }
  ageVerification();

  // send them to a new page if user fails the age Verification test
  function ageVerificationFail () {
    window.location.assign("https://www.youtube.com/watch?v=l2cDkl_JRTo");
  }

  var Product = function (name, thc, kind) {
    this.name = name;
    this.thc = thc;
    this.kind = kind;
  };

  // variables
  var userThcLevel = 0;
  var userSmokingMethod = 0;
  var edibleWeight = 0;
  var edibleMetabolism = 0;
  var userTotalSmoking = 0;
  var thcArray = [];
  var bmiArray = [];
  var weightArray = [];

  $('.smoking-step-two').hide();
  $('.smoking-step-three').hide();

  // event listener for smoking submit
  $('#smoking-submit').on('click', function (event) {
    event.preventDefault();
    $('.smoking-step-two').show(500);
    userSmokingMethod = $('#smoking-method').val();
    // console.log(userSmokingMethod + "usm");
    userThcLevel = (Number($('#smoking-thc').val()) / 100);
    // console.log(userThcLevel + "l1 usrTHClevel");
    // convert total thc to milligrams
    var totalTHC = (userThcLevel * userSmokingMethod) * 1000;
    thcArray.unshift(totalTHC);
    $('#total-thc-holder').html('<div class="well"><br><h4>The total amount of THC available is ' + totalTHC.toFixed(1) + ' milligrams. </h4><br></div>');

  });

  // event listener for bmi Submit
  $('#bmi-submit').on('click', function (event) {
    event.preventDefault();
    $('.smoking-step-three').show(500);
    userBMI = $('#userBMI').val();
    userTotalSmoking = (userBMI * thcArray[0]);
    // console.log(userTotalSmoking + " lbmi usrTotalSmoking");
    // userTotalSmoking.toFixed(1);
    bmiArray.unshift(userTotalSmoking);
    $('#user-total-smoking-holder').html('<div class="well"><br><h4>The total amount of THC available considering your BMI is ' + userTotalSmoking.toFixed(1) + ' milligrams. </h4><br></div>');

  });

    $('#weight-submit').on('click', function (event) {
    event.preventDefault();;
    userWeight = Number($('#user-weight').val());
    // console.log(userWeight + " lwt userweight");
    userTotalForHigh = (userWeight * 0.0334) * userBMI;
    console.log(userBMI + " testbmi");
    // console.log(bmiArray[0] + " THC array 0");
    var holder = (userTotalForHigh / bmiArray[0]);
    // recommendation = holder.toFixed(2);
    var recommendationPercent = holder * 100;
    // console.log(recommendationPercent + "recoP")
    // console.log(recommendation + "reco");
    $('#recommendation-holder').html('<div class="well"><h4>The amount to start with is ' + userTotalForHigh.toFixed(1) + ' milligrams.</h4><h4>Which would be about ' + recommendationPercent.toFixed(1) + "% of a gram.</h4></div>");
  });

    var edibleWeightArray = [];
    var edibleBMIArray = [];
    var edibleMetabolismArray = [];

  $('.edibles-step-two').hide();
  $('.edibles-step-three').hide();
  // edible weight submit event listener
  $('#edible-weight-submit').on('click', function (event) {
    event.preventDefault();
    $('.edibles-step-two').show(500);
    edibleWeight = ($('#edible-weight').val() * 0.0334);
    edibleWeightArray.unshift(edibleWeight);
    console.log(edibleWeight + "edible weight");
    $('#edible-step-one-holder').html('<div class="well"><h4>Per your weight, we recommend starting with ' + edibleWeight.toFixed(1) + ' grams.</h4></div>');
  });


  $('#bmi-edible-submit').on('click', function (event) {
    event.preventDefault();
    $('.edibles-step-three').show(500);
    var edibleTotal = ($('#userEdibleBMI').val() * edibleWeightArray[0]);
    console.log(edibleTotal + "edible total");
    edibleBMIArray.unshift(edibleTotal);
    $('#edible-step-two-holder').html('<div class="well"><h4>Taking into account your BMI, your total should be ' + edibleTotal.toFixed(1) + ' grams.</h4></div>');
  });


  $('#metabolism-edible-submit').on('click', function (event) {
    event.preventDefault();
    var edibleFinalTotal = ($('#userEdibleMetabolism').val() * edibleBMIArray[0]);
    console.log(edibleFinalTotal + "edible final total");
   $('#edible-step-three-holder').html('<div class="well"><h4>So we recommend your first dosage should be ' + edibleFinalTotal.toFixed(1) + ' grams.</h4></div>');
  });





});
