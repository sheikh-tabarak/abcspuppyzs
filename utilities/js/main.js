

function SettheURLStructure() {
  const hostname = window.location.hostname;

  var baseHref = '/';
  console.log(hostname)
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    baseHref = '/';

  }
  if (hostname === 'sheikh-tabarak.github.io') { baseHref = '/abcspuppyzs/'; }

  console.log(baseHref)
  document.querySelector('base').setAttribute('href', baseHref);
}

// SettheURLStructure();
// Loads the elements
function loadEssesntialElements() {

  // loads Header in to all pages!
  // fetch('components/header.html')
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error(`Network response was not ok: ${response.statusText}`);
  //     }
  //     return response.text();
  //   })
  //   .then(html => {
  //     document.getElementById('header').innerHTML = html;
  //   })
  //   .catch(error => {
  //     console.error('Error fetching header:', error);
  //   });

  // loads Footer in to all pages!
  fetch('components/footer.html')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      return response.text();
    })
    .then(html => {
      document.getElementById('footer').innerHTML = html;
    })
    .catch(error => {
      console.error('Error fetching header:', error);
    });


  // loads logo section in to all pages!
  // fetch('components/logoSection.html')
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error(`Network response was not ok: ${response.statusText}`);
  //     }
  //     return response.text();
  //   })
  //   .then(html => {
  //     document.getElementById('logoSection').innerHTML = html;
  //   })
  //   .catch(error => {
  //     console.error('Error fetching header:', error);
  //   });


  // Loading Testimonals
  // fetch('components/testimonials.html')
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error(`Network response was not ok: ${response.statusText}`);
  //     }
  //     return response.text();
  //   })
  //   .then(html => {
  //     document.getElementById('testimonials').innerHTML = html;
  //   })
  //   .catch(error => {
  //     console.error('Error fetching header:', error);
  //   });
}

// loadEssesntialElements();




// Open Testimonial video Lighbox !

function LinkBoxDisplay(link) {
  // document.getElementById("videoLightBox").style.display = "flex";
  const container = document.getElementById("videoLightBox");
  container.style.display = "flex";
  // container.style.width = "100%";
  const media = document.getElementById("LinkBoxContainer");
  media.src = "https://" + link;
  media.autoplay = true;
}

// Close Testimonial video Lighbox !

function LinkBoxClose() {
  const container = document.getElementById("videoLightBox");
  container.style.display = "none";
  const media = document.getElementById("LinkBoxContainer");
  media.pause();
}






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

  const All_Details = document.querySelectorAll('details');

  // All_Details.forEach(deet => {
  //   deet.addEventListener('toggle', toggleOpenOneOnly)
  // })

  // function toggleOpenOneOnly(e) {
  if (this.open) {
    All_Details.forEach(deet => {
      if (deet != this && deet.open) deet.open = false
    });
  }
  // }
  //   document.getElementById("background-Overlay").style.visibility="hidden"
}



// Schedule Appointment

function submitToAPI(e) {
  // document.getElementById("conference-booking").disabled = true;
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



// var toTopButton = document.getElementById("to-top-button");
// var Header = document.getElementById('header-container');
// window.onscroll = function () {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     console.log('okay ')
//     toTopButton.classList.remove("hidden");
//     //   Header.classList.add("bg-[#D0E2F2]");
//   } else {
//     toTopButton.classList.add("hidden");
//     //   Header.classList.remove("bg-[#D0E2F2]");

//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function goToTop() {
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// }