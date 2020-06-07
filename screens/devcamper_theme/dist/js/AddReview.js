const reviewRating  = document.getElementById('scrollRating')
const  reviewTitle = document.getElementById('reviewTitle')
const reviewText = document.getElementById('reviewText')



const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const bootcampId = urlParams.get('bootc')
console.log(bootcampId)

document.getElementById('subClicked').addEventListener('click',(e) => {
   e.preventDefault()
   var xhttp = new XMLHttpRequest();
   var cred = { title : reviewTitle.value , text : reviewText.value , rating : reviewRating.value}
   console.log(cred)
   xhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
       reviewRating.value = 8
       reviewText.value = ''
       reviewTitle.value  = ''
       alert('Review Added successfully')
     }
     if (this.readyState == 4 && this.status == 201) {
        reviewRating.value = 8
        reviewText.value = ''
        reviewTitle.value  = ''
        alert('Review Added successfully')
      }
   };
   
   xhttp.open("POST", `http://localhost:5000/api/v1/bootcamps/${bootcampId}/reviews`, true);
   xhttp.setRequestHeader('Content-Type', 'application/json')
   xhttp.setRequestHeader( "Authorization", "Bearer " + sessionStorage.getItem('token') );
   xhttp.send(JSON.stringify(cred))
})
function changeScroll()
{
    document.getElementById('ratingSpan').innerText = reviewRating.value
}