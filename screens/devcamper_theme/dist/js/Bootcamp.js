const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
console.log(urlParams)
const bootcampId = urlParams.get('bootc')
console.log(bootcampId)
 
var courses = {}
function init()
{
    var temp= document.getElementById('containerID2')
    var divi = document.getElementById('torem')
    divi.remove()
    var h10 = document.createElement('h1')
    var txt = document.createTextNode('bootcamp title')
    h10.appendChild(txt)
    var desc = document.createElement('p')
    txt = document.createTextNode('desc')
    desc.appendChild(txt)
    var avgCost = document.createElement('p')
    avgCost.setAttribute('class','lead mb-4')
    txt = document.createTextNode('Average cose :')
    avgCost.appendChild(txt)
    var sp = document.createElement('span')
    sp.setAttribute('class','text-primary')
    txt = document.createTextNode('$10,000')
    sp.appendChild(txt)
    avgCost.appendChild(sp)
    temp.appendChild(h10)
    temp.appendChild(desc)
    temp.appendChild(avgCost)

  for(var i =0;i<courses.count;i++)
  {
    var div1 = document.createElement('div')
    div1.setAttribute('class','card mb-3')
    //////////////////////////////////////////////////////////////////////////
    var h0 = document.createElement('h5')
    h0.setAttribute('class','card-header bg-primary text-white')
    var t = document.createTextNode('hey')
    h0.appendChild(t)
    /////////////////////////////////////////////////////////////////
    var div2 = document.createElement('div')
    div2.setAttribute('class','card-body')
    div1.appendChild(h0)
    div1.appendChild(div2)
    ////////////////////////////////////////////////////////////////////
    var h1 = document.createElement('h5')
    h1.setAttribute('class','card-title')
    t = document.createTextNode('hey')
    h1.appendChild(t)
    /////////////////////////////////////////////////////////////////////////////
    var p0 = document.createElement('p')
    p0.setAttribute('class','card-text')
    t = document.createTextNode('lorem ipsum')
    p0.appendChild(t)
    ///////////////////////////////////////////////////////////////
    var ul0 = document.createElement('ul')
    ul0.setAttribute('class','list-group mb-3')
    ////////////////////////////////////////////////////////////////////////////
    var li0 = document.createElement('li')
    li0.setAttribute('class','list-group-item')
    t = document.createTextNode('li0')
    li0.appendChild(t)
    ul0.appendChild(li0)
    var li1 = document.createElement('li')
    li1.setAttribute('class','list-group-item')
    t = document.createTextNode('li1')
    li1.appendChild(t)
    ul0.appendChild(li1)
    var li2 = document.createElement('li')
    li2.setAttribute('class','list-group-item')
    t = document.createTextNode('li2')
    var ii = document.createElement('i')
    ii.setAttribute('class','fas fa-times text-danger')
    t = document.createTextNode('scholarship available')
    li2.appendChild(t)
    li2.appendChild(ii)
    ul0.appendChild(li2)
    /////////////////////////////////////////////
    div2.appendChild(h1)
    div2.appendChild(p0)
    div2.appendChild(ul0)
    
    temp.appendChild(div1)
  }
  console.log(temp)
  //document.getElementById('containerID2').appendChild(temp)
  document.getElementById('bigCont').appendChild(divi)
  console.log(document.getElementById('containerID2'))
}

function initFun()
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        const response = JSON.parse(this.response)
        courses = response
        init()
      }
    };
    
    xhttp.open("GET", `http://localhost:5000/api/v1/bootcamps/${bootcampId}/courses`, true);
    xhttp.setRequestHeader('Content-Type', 'application/json')
    xhttp.send()
}