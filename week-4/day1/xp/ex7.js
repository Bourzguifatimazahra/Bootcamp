(function(userName) {
    const navbar = document.querySelector('.navbar');
    const userDiv = document.createElement('div');
    userDiv.innerHTML = `${userName} <img src="profile.jpg" alt="Profile Picture">`;
    navbar.appendChild(userDiv);
})('John');