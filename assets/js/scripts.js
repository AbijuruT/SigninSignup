/*===== SHOW AND HIDE  FORM ======*/

const signUp = document.getElementById('sign-up'),
    signIn = document.getElementById('sign-in'),
    signin__id = document.getElementById('signin_id'),
    signup__id = document.getElementById('signup_id')

signUp.addEventListener('click', () => {
    // FIRST REMOVE CLASSES
    signin__id.classList.remove('block')
    signup__id.classList.remove('none')

    // ADD CLASSES
    signin__id.classList.add("none");
    signup__id.classList.add("block");

})


signIn.addEventListener("click", () => {
    // REMOVE CLASSES
    signin__id.classList.remove("none");
    signup__id.classList.remove("block");

    // ADD CLASSES
    signin__id.classList.add("block");
    signup__id.classList.add("none");
})