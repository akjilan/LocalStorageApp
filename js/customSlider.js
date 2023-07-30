const images = [
   '../images/headphone.png',
   '../images/tv.png',
   '../images/xbox.png'
]
let imgIndex=0;
setInterval(() => {
    if(imgIndex===images.length){
        imgIndex=0;

    }
    const imgUrl =images[imgIndex];
    // console.log(images[imgIndex]);
    let imgID = document.getElementById('myImg');
    imgID.setAttribute('src', imgUrl);
    imgIndex++;
    
}, 1100);