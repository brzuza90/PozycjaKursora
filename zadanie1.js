const h1 = document.querySelector('h1');
document.body.addEventListener('mousemove', function (e) {
    let x = e.clientX + 1;
    let y = e.clientY + 1;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let red = x / width * 100;
    let green = y / height * 100;
    let blue = (x / width + y / height) * 50;
    h1.textContent = x + ', ' + y;
    document.body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`;
    if (x < 200 || y < 200) {
        document.body.style.color = 'white';
    } else {
        document.body.style.color = 'black';
    }
    // console.log(red, green, blue);
})