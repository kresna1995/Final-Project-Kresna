// read more
// function myFunction() {
//     var dots = document.getElementById("dots");
//     var moreText = document.getElementById("more");
//     var btnText = document.getElementById("myBtn");
  
//     if (dots.style.display === "none") {
//       dots.style.display = "inline";
//       btnText.innerHTML = "Read more"; 
//       moreText.style.display = "none";
//     } else {
//       dots.style.display = "none";
//       btnText.innerHTML = "Read less"; 
//       moreText.style.display = "inline";
//     }
//   }

$(document).scroll(() => {
    console.log(window.scrollY)
    if(window.scrollY >= 85) {
        $('.heading2').addClass('lessons-animasi')
    }
    if(window.scrollY >= 384) {
        $('.lessons').addClass('lessons-animasi')
    }
    if(window.scrollY >= 1300){
        $('#contact-form').removeClass('contact-none').addClass('contact-form')
    }
})
  

function testSubmit() {
        alert("Thank you for your response");
  }

  