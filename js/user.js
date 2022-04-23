const AlertServerUnderMaintenance = () => {
  Swal.fire({
    title:  `Server is down`,
    text: 'The calculators and the local browser logbook are still available if needed.',
    icon: 'error',
    confirmButtonText: 'Ok'
  })
}

function setSignLog(){
    let userForm = document.getElementById('loginZone')
    if (signUpLink.innerText == "Already have an account? Log in here"){
        userForm.innerHTML = `<form class="d-flex flex-column"> 
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="floatingInput" placeholder="Username">
          <label for="floatingInput">Username</label>
        </div>
        <div class="form-floating mb-3">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
          <label for="floatingPassword">Password</label>
        </div>
        <div class="mb-2 form-check">
          <input type="checkbox" class="form-check-input" id="keepLogin">
          <label class="form-check-label" for="keepLogin">Keep me logged in</label>
        </div>
        <p class="main__loginChange" id="loginChange">Don't have a user? Sign up here</p>
        <button type="button" class="btn btn-primary justify-self-center w-80">Log in</button>
      </form>`
    } else {
        userForm.innerHTML = `<form class="d-flex flex-column">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="floatingInput" placeholder="Username">
          <label for="floatingInput">Username</label>
        </div>
        <div class="form-floating mb-3">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
          <label for="floatingPassword">Password</label>
        </div>
        <div class="form-floating mb-3">
          <input type="password" class="form-control" id="floatingPasswordConfirm" placeholder="Confirm Password">
          <label for="floatingPassword">Confirm Password</label>
        </div>
        <p class="main__loginChange" id="loginChange">Already have an account? Log in here</p>
        <button type="button" class="btn btn-primary justify-self-center w-80" id="user_button">Sign up</button>
        </form>`
        
    }
    signUpLink = document.getElementById('loginChange')
    signUpLink.addEventListener('click', setSignLog)
    let user_button = document.getElementById("user_button")
    user_button.addEventListener('click', AlertServerUnderMaintenance)
}