var findbyrad = document.getElementById('findbootcamp')
var radius = document.getElementById('miles')
var zip = document.getElementById('zip')
 

function manage_bootcamp()
{
  
}
function manage_reviews()
{
   
}




var reviews = {}
var bootcamps = {}
var bootcampID
function init2()
{
  
  for(var i =0;i<bootcamps.count ; i++)
  {
    if(bootcamps.data[i].user === sessionStorage.getItem('u_id'))
    {
      bootcampID = bootcamps.data[i].user 
    }
  }
   console.log(bootcampID)
  if (bootcampID) {
    document.getElementById('manage_bootcamp').setAttribute('href',`manage-bootcamp.html?bootc=${bootcampID}`)
    document.getElementById('manage_reviews').setAttribute('href',`manage-reviews.html?bootc=${bootcampID}`)
  } else {
    document.getElementById('manage_bootcamp').setAttribute('href','manage-bootcamp-none.html')
  }
}
function init(){

  var temp = document.createElement('div')
for (var i = 0; i < bootcamps.count; i++) {
  ////////////////////////////////////////////////////
   var div1 = document.createElement('div')
   var div2 = document.createElement('div')
   var div3 = document.createElement('div')
   var div4 = document.createElement('div')
   var div5 = document.createElement('div')
   var h5 = document.createElement('h5')
   ////////////////////////////////////////////////////

   div1.setAttribute('class','card mb-3')
   div2.setAttribute('class','row no-glutters')
   div3.setAttribute('class' , 'col-md-4')
   div4.setAttribute('class','col-md-8')
   div5.setAttribute('class','card-body')
   h5.setAttribute('class','card-title')

   ///////////////////////////////////////////////////////////////
   var t = document.createTextNode(`${bootcamps.data[i].name}`)
   
   var span1 = document.createElement('span')
   //////////////////////////////////////////////////////////////////
   var  reviewsById = reviews.data.filter((review) => {
      return review.bootcamp._id ===bootcamps.data[i]._id
    })
    //////////////////////////////////////////////////////////////////////////
    var avg =0;
    for(var j =0;j < reviewsById.length ; j++)
    {
      avg = avg + reviewsById[j].rating
    }
    avg = avg/reviewsById.length
   //////////////////////////////////////////////////////////////////
  t = document.createTextNode(`${avg}`)
   span1.appendChild(t)
   ///////////////////////////////////////////////////////////////
   var span2 = document.createElement('span')
   t = document.createTextNode(`${bootcamps.data[i].location.city} ${bootcamps.data[i].location.state}`)
   span2.appendChild(t)
   /////////////////////////////////////////////////////////////////
   span1.setAttribute('class','float-right badge badge-success')
   span2.setAttribute('class','badge badge-dark mb-2')
   //////////////////////////////////////////////////////
   var a = document.createElement('a')
   
    t = document.createTextNode(`${bootcamps.data[i].name}`)
    a.appendChild(t)
    a.href = `bootcamp.html?bootc=${bootcamps.data[i]._id}&bootRating=${bootcamps.data[i].averageRating}`
   ////////////////////////////////////////
   var p1 = document.createElement('p')
   p1.setAttribute('class' , 'card-text')
   t = document.createTextNode(`${bootcamps.data[i].careers[0]},${bootcamps.data[i].careers[1]},${bootcamps.data[i].careers[2]}`)
   p1.appendChild(t)
   ///////////////////////////////////////////////////////////
   var img1 = document.createElement('img')
   img1.setAttribute('class','card-img')
   img1.setAttribute('alt','...')
   img1.setAttribute('src','img/image_2.jpg')
   ////////////////////////////////////////////
   div1.appendChild(div2)
   div2.appendChild(div3)
   div3.appendChild(img1)
   div2.appendChild(div4)
   div4.appendChild(div5)
   div5.appendChild(h5)
   div5.appendChild(span2)
   h5.appendChild(a)
   div5.appendChild(p1)
   a.appendChild(span1)
   
  temp.appendChild(div1)
}
console.log(document.getElementById('containerID').appendChild(temp))
init2()

}
function initReviews()
{
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      reviews = JSON.parse(this.response)
      console.log(reviews)
      init()
    }
  
  };
  
  xhttp.open("GET", `http://localhost:5000/api/v1/reviews`, true);
  xhttp.setRequestHeader('Content-Type', 'application/json')
  xhttp.send();

}
function loadBootcamps() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         bootcamps = JSON.parse(this.response)
        console.log(bootcamps)
        initReviews()
        
      }
    };
    
    xhttp.open("GET", "http://localhost:5000/api/v1/bootcamps", true);
    xhttp.setRequestHeader('Content-Type', 'application/json')
    xhttp.send();
}

function whichBootcamp(event){
console.log(event)
}


findbyrad.addEventListener('click' , (event) => {
    event.preventDefault()
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var obj = JSON.parse(this.response)
        console.log(obj)
        
      }
    };
    
    xhttp.open("GET", `http://localhost:5000/api/v1/bootcamps/radius/${zip.value}/${radius.value}`, true);
    xhttp.setRequestHeader('Content-Type', 'application/json')
    xhttp.send();
})

