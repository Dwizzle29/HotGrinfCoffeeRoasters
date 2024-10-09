function activateMenuItem() {
  var currentUrl = window.location.href; // get the current URL
  var menuItems = document.querySelectorAll(".nav-menu a");
  //loops through until the corresponding menu item is found
  menuItems.forEach(function (menuItem) {
    if (currentUrl.includes(menuItem.getAttribute("href"))) {
      menuItem.classList.add("active");
    } else {
      menuItem.classList.remove("active");
    }
  });
}
/* write functions that define the action for each event */
function validate() {
  var sid = document.getElementById("sid").value;
  var pwd1 = document.getElementById("pwd1").value;
  var pwd2 = document.getElementById("pwd2").value;
  var uname = document.getElementById("uname").value;
  var email = document.getElementById("email").value;
  var genm = document.getElementById("genm").checked;
  var genf = document.getElementById("genf").checked;
  var genn = document.getElementById("genn").checked;

  var errMsg; /* stores the error message */
  var result = true; /* assumes no errors and can submit form*/
  var pattern =
    /^[a-zA-Z ]+$/; /* regular expression for letters and spaces only */
  // address regular expression requirements
  var addPattern = /^[a-zA-Z ]+$/;

  /* Rule 1, check if all required inputs have value */

  if (sid == "") {
    errMsg = "Username must be entered";
    document.getElementById("errorMsgSid").innerHTML = errMsg;
  } else {
    errMsg = "";
    document.getElementById("errorMsgSid").innerHTML = errMsg;
  }
  /* Rule 2, check if the email contains an @ symbol */

  if (!email.includes("@")) {
    errMsg = "Email must be a valid format eg. polly@gmail.com";
    document.getElementById("errorMsgEmail").innerHTML = errMsg;
  } else {
    errMsg = "";
    document.getElementById("errorMsgEmail").innerHTML = errMsg;
  }
  // checks password is within the appropriate parameters
  if (pwd1.length < 9 || !/[A-Z]/.test(pwd1) || !/[a-z]/.test(pwd1)) {
    errMsg =
      "Password has to be longer than 9 characters and contain an upper and lowercase value\n";
    document.getElementById("errorMsgPassword").innerHTML = errMsg;
  } else {
    errMsg = "";
    document.getElementById("errorMsgPassword").innerHTML = errMsg;
  }

  /* Rule 3, check if password and retype password are the same */

  if (pwd1 != pwd2) {
    errMsg = "Passwords do not match.\n";
    document.getElementById("errorMsgMatchPassword").innerHTML = errMsg;
  } else if (pwd1 == "" || pwd2 == "") {
    errMsg = "Passwords cannot be left empty.\n";
    document.getElementById("errorMsgMatchPassword").innerHTML = errMsg;
  } else {
    errMsg = "";
    document.getElementById("errorMsgMatchPassword").innerHTML = errMsg;
  }

  //checking radio button for gender is selected
  if (genf == "" && genm == "" && genn == "") {
    errMsg = "Select an option!";
    document.getElementById("errorMsgGender").innerHTML = errMsg;
  } else {
    errMsg = "";
    document.getElementById("errorMsgGender").innerHTML = errMsg;
  }
  //   Checking name is not empty
  if (!uname.match(pattern)) {
    errMsg = "Name can only be letters and spaces.\n";
    document.getElementById("errorMsgUname").innerHTML = errMsg;
  } else {
    errMsg = "";
    document.getElementById("errorMsgUname").innerHTML = errMsg;
  }

  /* Display error message any error(s) is/are detected */
  if (errMsg != "") {
    result = false;
  }
  return result;
}
function watchForm() {
  //Order selection of beans and quantity
  document.getElementById("beansOrder").addEventListener("change", function () {
    const beansOrder = document.getElementById("beansOrderID");

    // const
    if (
      this.value === "sunriseBurst" ||
      this.value === "dawnPatrol" ||
      this.value === "nutshellHarmony" ||
      this.value === "morningMojo"
    ) {
      beansOrder.classList.remove("hidden");
    } else {
      beansOrder.classList.add("hidden");
    }
  });

  //unhide or hide delivery address information and shows checkbox in billing information
  document.getElementById("orderType").addEventListener("change", function () {
    const deliveryAddressGroup = document.getElementById("deliveryOptionID");
    const deliveryCheckbox = document.getElementById("showBillingChoice");

    if (this.value === "delivery") {
      deliveryAddressGroup.classList.remove("hidden");
      deliveryCheckbox.classList.remove("hidden");
    } else {
      deliveryAddressGroup.classList.add("hidden");
      deliveryCheckbox.classList.add("hidden");
    }
  });
  //unhide or hide pickup in store information
  document.getElementById("orderType").addEventListener("change", function () {
    const deliveryAddressGroup = document.getElementById("pickupOptionID");

    if (this.value === "pickup") {
      deliveryAddressGroup.classList.remove("hidden");
    } else {
      deliveryAddressGroup.classList.add("hidden");
    }
  });
  //unhide or hide pay online information
  document
    .getElementById("paymentType")
    .addEventListener("change", function () {
      const paymentInfoGroup = document.getElementById("paymentInStoreID");
      if (this.value == "instore") {
        paymentInfoGroup.classList.remove("hidden");
      } else {
        paymentInfoGroup.classList.add("hidden");
      }
    });

  // unhide or hide payment in store information
  document
    .getElementById("paymentType")
    .addEventListener("change", function () {
      const paymentInfoGroup = document.getElementById("onlinePaymentID");
      if (this.value == "online") {
        paymentInfoGroup.classList.remove("hidden");
      } else {
        paymentInfoGroup.classList.add("hidden");
      }
    });
  document.getElementById("cardOption").addEventListener("change", function () {
    const paymentInfoGroup = document.getElementById("cardMasterVisaID");
    if (
      this.value === "mastercard" ||
      this.value === "visa" ||
      this.value === "americanExpress"
    ) {
      paymentInfoGroup.classList.remove("hidden");
    } else {
      paymentInfoGroup.classList.add("hidden");
    }
  });
}

function validateOrder() {
  var beansOrder = document.getElementById("beansOrder").value;
  var beansQuantity = document.getElementById("beansQuantity").value;
  var orderType = document.getElementById("orderType").value;
  var postcode = document.getElementById("postcode").value;
  var billingAddress = document.getElementById("billingAddress").value;
  var billingPostcode = document.getElementById("billingPostcode").value;
  var state = document.getElementById("state").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var email = document.getElementById("email").value;
  var paymentType = document.getElementById("paymentType").value;
  var errMsg;
  var result = true;

  //ensures beans option is selected
  if (beansOrder === "") {
    errMsg = "Select beans to be able to place an order";
    document.getElementById("errorMsgBeansOrder").innerHTML = errMsg;
    result = false;
  } else {
    errMsg = "";
    document.getElementById("errorMsgBeansOrder").innerHTML = errMsg;
  }

  //ensures beans quantity is selected
  if (beansQuantity === "") {
    errMsg = "Select a quality of bags of beans to be able to place an order";
    document.getElementById("errorMsgBeansQuantity").innerHTML = errMsg;
    result = false;
  } else {
    errMsg = "";
    document.getElementById("errorMsgBeansQuantity").innerHTML = errMsg;
  }

  // If delivery is selected delivery address is validated
  if (orderType === "") {
    errMsg = "Order Type has to be selected";
    document.getElementById("errorMsgOrderType").innerHTML = errMsg;
  } else {
    errMsg = "";
    document.getElementById("errorMsgOrderType").innerHTML = errMsg;
  }

  if (orderType === "delivery") {
    var address = document.getElementById("address").value;
    //validate address
    if (!address.trim()) {
      errMsg = "Address has to be provided";
      document.getElementById("errorMsgAddress").innerHTML = errMsg;
    } else {
      errMsg = "";
      document.getElementById("errorMsgAddress").innerHTML = errMsg;
    }
    //validate state
    if (state === "") {
      errMsg = "State has to be provided";
      document.getElementById("errorMsgState").innerHTML = errMsg;
    } else {
      errMsg = "";
      document.getElementById("errorMsgState").innerHTML = errMsg;
    }
    //Postcode of 4 digit has to be provided
    if (postcode == "" || !/^\d{4}$/.test(postcode)) {
      errMsg = "Postcode must be 4 digits";
      document.getElementById("errorMsgPostcode").innerHTML = errMsg;
    } else {
      errMsg = "";
      document.getElementById("errorMsgPostcode").innerHTML = errMsg;
    }
  }
  //biling address validation
  if (billingAddress == "") {
    errMsg = "Billing Address must be entered";
    document.getElementById("errorMsgBilling").innerHTML = errMsg;
  } else {
    errMsg = "";
    document.getElementById("errorMsgBilling").innerHTML = errMsg;
  }

  if (billingPostcode == "" || !/^\d{4}$/.test(billingPostcode)) {
    errMsg = "Billing Postcode must be 4 digits";
    document.getElementById("errorMsgBillingPostcode").innerHTML = errMsg;
  } else {
    errMsg = "";
    document.getElementById("errorMsgBillingPostcode").innerHTML = errMsg;
  }

  //Phone number validation
  if (phoneNumber == "" || !/^\d{10}$/.test(phoneNumber)) {
    errMsg = "Phone Number must be 10 digits";
    document.getElementById("errorMsgPhoneNumber").innerHTML = errMsg;
  } else {
    errMsg = "";
    document.getElementById("errorMsgPhoneNumber").innerHTML = errMsg;
  }

  //Email validation
  if (!email.includes("@")) {
    errMsg = "Email has to be valid";
    document.getElementById("errorMsgEmail").innerHTML = errMsg;
  } else {
    errMsg = "";
    document.getElementById("errorMsgEmail").innerHTML = errMsg;
  }

  //validates if payment online selected
  if (paymentType === "") {
    errMsg = "Payment Type must be selected";
    document.getElementById("errorMsgPaymentType").innerHTML = errMsg;
  } else {
    errMsg = "";
    document.getElementById("errorMsgPaymentType").innerHTML = errMsg;
  }

  if (paymentType === "online") {
    var cardNumber = document.getElementById("cardNumber").value;
    var cvccvv = document.getElementById("cvc-cvv").value;
    var expiry = document.getElementById("expiry").value;
    var cardOption = document.getElementById("cardOption").value;

    if (cardOption == "") {
      errMsg = "Card needs to be selected";
      document.getElementById("errorMsgCardOption").innerHTML = errMsg;
    } else {
      errMsg = "";
      document.getElementById("errorMsgCardOption").innerHTML = errMsg;
    }
    if (cardOption === "mastercard" || cardOption === "visa") {
      if (cardNumber === "" || !/^\d{15}$/.test(cardNumber)) {
        errMsg = "Card number needs to be 15 digits";
        document.getElementById("errorMsgCardNumber").innerHTML = errMsg;
      } else {
        errMsg = "";
        document.getElementById("errorMsgCardNumber").innerHTML = errMsg;
      }
    }

    if (cardOption === "americanExpress") {
      if (cardNumber === "" || !/^\d{16}$/.test(cardNumber)) {
        errMsg = "Card number needs to be 16 digits";
        document.getElementById("errorMsgCardNumber").innerHTML = errMsg;
      } else {
        errMsg = "";
        document.getElementById("errorMsgCardNumber").innerHTML = errMsg;
      }
    }
    //validate address

    //validate state
    if (cvccvv === "" || !/^\d{3}$/.test(cardNumber)) {
      errMsg = "CVC or CVV has to be provided";
      document.getElementById("errorMsgCVC").innerHTML = errMsg;
    } else {
      errMsg = "";
      document.getElementById("errorMsgCVC").innerHTML = errMsg;
    }
    //Postcode of 4 digit has to be provided
    if (expiry == "" || !/\d{1,2}\/\d{1,2}$/.test(expiry)) {
      errMsg = "Expiry must be MM/YY format";
      document.getElementById("errorMsgExpiry").innerHTML = errMsg;
    } else {
      errMsg = "";
      document.getElementById("errorMsgExpiry").innerHTML = errMsg;
    }
  }
  if (errMsg != "") {
    result = false;
  }
  return result;
}
// writes function for Same as delivery address check button
function copyDelivery() {
  var sameAsDelivery = document.getElementById("billingChoice");
  var deliveryAddress = document.getElementById("address").value;
  var billingAddress = document.getElementById("billingAddress").value;
  var deliveryPostcode = document.getElementById("postcode").value;
  var billingPostcode = document.getElementById("billingPostcode").value;
  //check if delivery address is checked
  if (sameAsDelivery.checked) {
    //check if address and postcode details have been entered
    if (deliveryAddress === "" || deliveryPostcode === "") {
      alert("Please enter your delivery address first");
      sameAsDelivery.checked = false;
    } else {
      billingAddress = deliveryAddress;
      billingPostcode = deliveryPostcode;
    }
  } else {
    billingAddress.value = "";
    billingPostcode = "";
  }
}

function init() {
  // Call the function to activate the menu item
  activateMenuItem();
  /* link the variables to the HTML elements */
  var regForm = document.getElementById("regform");

  /* assigns functions to corresponding events */
  if (regForm) {
    document.getElementById("regform").reset();
    regForm.onsubmit = validate;
  }
  var orderForm = document.getElementById("orderForm");

  if (orderForm) {
    watchForm();
  }
}

// Execute the initialization function once the window is loaded
window.onload = init;
