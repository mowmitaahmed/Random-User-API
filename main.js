function whoAmI() {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => {
        const user = data.results[0];
        const name = user.name;
        const location = user.location;
        const picture = user.picture;
        const userName = `${name.title} ${name.first} ${name.last}`;
        document.getElementById('user-name').innerText = userName;
        document.getElementById('gender').innerText = user.gender;
        document.getElementById('address').innerText = `${location.city}, ${location.postcode}, ${location.state}`;
        document.getElementById('coordinates').innerText = `Latitude : ${location.coordinates.latitude} | Longitude : ${location.coordinates.longitude}`;
        document.getElementById('email').innerText = user.email;
        document.getElementById('phone').innerText = user.phone;
        document.getElementById('cell').innerText = user.cell;
        document.getElementById('picture').src = picture.large;

    });
}
// function changeBG() {
//     var i =0;
//     const bgColors = ["#CCE5FF", "#E2E3E5","D4EDDA"];
        
//     while (true) {
//         document.body.style.backgroundColor = bgColors[i];
//         i++; 
//     }
// }
// function functionC() {
//     whoAmI();
//     // changeBG();
//  }
whoAmI();
setInterval(whoAmI, 2000);