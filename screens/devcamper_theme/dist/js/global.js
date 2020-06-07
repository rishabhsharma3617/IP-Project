document.getElementById('manage_reviews').setAttribute('style','display: none')
document.getElementById('logoutButton').addEventListener('click',() => {
    sessionStorage.setItem('token','')
    sessionStorage.setItem('u_id','')
    sessionStorage.setItem('role','')
  })
  if(sessionStorage.getItem('role') !== 'publisher')
  {
    console.log('heyy')
    document.getElementById('manage_bootcamp').setAttribute('style','display : none')
    document.getElementById('manage_reviews').setAttribute('style','display : none')
    // document.getElementById('manage_bootcamp').setAttribute('visibility','hidden')
    // document.getElementById('manage_reviews').setAttribute('visibility','hidden')
  }
  if(!sessionStorage.getItem('token'))
  {
    document.getElementById('navbarDropdown').setAttribute('style','display : none')
  }
  if(!sessionStorage.getItem('token'))
{
  document.getElementById('addreview').setAttribute('style','display :none')
}