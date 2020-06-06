const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
console.log(urlParams)
const bootcampId = urlParams.get('bootc')
const bootcampTitle = urlParams.get('title')
console.log(bootcampId)
 
document.getElementById('bootBack').setAttribute('href',`bootcamp.html?bootc=${bootcampId}`)
document.getElementById('bootcampName').innerText = bootcampTitle
document.getElementById('addReview').setAttribute('href',`add-review?bootc=${bootcampId}`)

var reviews = {}
var user = {}
function init0(userId)
{
  
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
}
function init1()
{
    var temp = document.getElementById('reviewsContainer')
    var torem = document.getElementById('torem')
    
    // var torem = document.getElementById('torem')
    // document.getElementById('torem').remove()
   for(var i =0;i<reviews.count;i++)
   {
       /////////////////////////////////////////
      
       
       var div0 = document.createElement('div')
        div0.setAttribute('class','card mb-3')
        /////////////////////////////////////////
        var h50 = document.createElement('h5')
        h50.setAttribute('class','card-header bg-dark text-white')
        var t = document.createTextNode(`${reviews.data[i].title}`)
        h50.appendChild(t)
        /////////////////////////////////////////
        var div1 = document.createElement('div')
        div1.setAttribute('class','card-body')
        var h51 = document.createElement('h5')
        h51.setAttribute('class','card-title')
        t = document.createTextNode('Rating : ')
        h51.appendChild(t)
        var span0 = document.createElement('span')
        span0.setAttribute('class','text-success')
        t=document.createTextNode(`${reviews.data[i].rating}`)
        span0.appendChild(t)
        h51.appendChild(span0)
        var p0 = document.createElement('p')
        p0.setAttribute('class','card-text')
        t = document.createTextNode(`${reviews.data[i].text}`)
        p0.appendChild(t)
        var p1 = document.createElement('p')
        p1.setAttribute('class','text-muted')
        t = document.createTextNode(`hh`)
        p1.appendChild(t)
        div1.appendChild(h51)
        div1.appendChild(p0)
        div1.appendChild(p1)
        div0.appendChild(h50)
        div0.appendChild(div1)
        temp.appendChild(div0)

   }
   document.getElementById('torem').remove()
   document.getElementById('bigC').appendChild(torem)
  // document.getElementById('reviewsContainer').appendChild(temp)
   
}
function init()
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        const response = JSON.parse(this.response)
        reviews = response
        init1()
        console.log(reviews)
        var rating=0
        for(var i =0;i<reviews.count;i++)
        {
          rating = rating + reviews.data[i].rating
        }
        rating = rating/reviews.count
        var t = document.createTextNode(`${rating}`)
        document.getElementById('rating').appendChild(t)
      }
    };
    
    xhttp.open("GET", `http://localhost:5000/api/v1/bootcamps/${bootcampId}/reviews`, true);
    xhttp.setRequestHeader('Content-Type', 'application/json')
    xhttp.send()
}