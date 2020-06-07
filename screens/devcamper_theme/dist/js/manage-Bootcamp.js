document.getElementById('logoutButton').addEventListener('click',() => {
    sessionStorage.setItem('token','')
    sessionStorage.setItem('u_id','')
    sessionStorage.setItem('role','')
  })