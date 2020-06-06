const reviewRating  = document.getElementById('scrollRating')
const  reviewTitle = document.getElementById('reviewTitle')
const reviewText = document.getElementById('reviewText')

document.getElementById('subClicked').addEventListener('click',(e) => {
   e.preventDefault()
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
       const response = JSON.parse(this.response)
       user = response
       var txt = user.data.name
       return txt
     }
   };
   
   xhttp.open("GET", `http://localhost:5000/api/v1/users/${userId}`, true);
   xhttp.setRequestHeader('Content-Type', 'application/json')
   xhttp.setRequestHeader( "Authorization", "Bearer " + sessionStorage.getItem('token') );
   xhttp.send()
})
function changeScroll()
{
    document.getElementById('ratingSpan').innerText = reviewRating.value
}