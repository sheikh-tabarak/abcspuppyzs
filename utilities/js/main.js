// import {
//   Ripple,
//   initTE,
// } from "tw-elements";

// initTE({ Ripple });

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */

function openNav() {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    document.getElementById("mySidenav").style.width = "100%";
  } else {
    document.getElementById("mySidenav").style.width = "50%";
  }
  document.getElementById("background-Overlay").style.width = "100%";
  document.getElementById("background-Overlay").style.height = "100%";
  // document.getElementById("background-Overlay").style.visibility="visible";
  //   document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("background-Overlay").style.width = "0%";
  document.getElementById("background-Overlay").style.height = "0%";
  //   document.getElementById("background-Overlay").style.visibility="hidden"
}



// Schedule Appointment

  function submitToAPI(e) {
    document.getElementById("conference-booking").disabled = true;
    // setTimeout('document.getElementById("conference-booking").disabled=false;', 5000);
    // e.preventDefault();
    // var URL =
    //   "https://0lonx967ta.execute-api.us-east-1.amazonaws.com/prod/v0/our-inquiry-form";
    // var source = document.getElementById("source-input").value;
    // var data = {
    //   source: {
    //     name:"Guest"
    //   },
    // };

    // Not verifing the captcha directly hitting API



    // console.log('Calendly')

    // reqwest({
    //   method: "POST",
    //   url: "https://0lonx967ta.execute-api.us-east-1.amazonaws.com/prod/v0/our-inquiry-form",
    //   dataType: "json",
    //   crossDomain: "true",
    //   contentType: "application/json; charset=utf-8",
    //   data: JSON.stringify(data),
    //   success: function verifyCaptcha(e) {
    //     // Not verifing the captcha directly hitting the calenderly
    //     return void Calendly.initPopupWidget({
    //       url: "https://calendly.com/abcspuppyzs/goldendoodle-puppy-conference?hide_landing_page_details=1&hide_gdpr_banner=1",
    //     });
    //   },
    //   error: function () {
    //     alert("Error submitting form!");
    //   },
    // });
    // } else {
    // alert("Captha is required!");
    // }
  }
