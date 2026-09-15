const form = document.getElementById('loginForm');
const errorBox = document.getElementById('error');
const createAccountBtn = document.getElementById('createAccountBtn');
const spinner = document.querySelector('.spinner'); 
form.addEventListener('submit', function (e) {
  e.preventDefault();
spinner.style.display = 'block';
document.querySelector('.btn-primary span').style.display = 'none';
  const identifier = document.getElementById('identifier').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!identifier || !password) {
    errorBox.textContent = 'Please fill in both fields.';
    errorBox.classList.add('show');
    return;
  }

  // Placeholder: replace this with a real authentication request to your backend.
  errorBox.classList.remove('show');
  alert//('Login submitted for: ' + identifier);
  //spinner.style.display = 'none';
});

createAccountBtn.addEventListener('click', function () {
  alert('Create account flow goes here');
});
