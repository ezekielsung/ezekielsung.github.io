const img = document.getElementById('bouncingImage');
let imgPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
let velocity = { x: 5, y: 5 };

img.addEventListener('click', function() {
  console.log('clicked');
    img.style.display = 'none'; // Hide the bouncing image
    document.body.style.backgroundImage = 'url("dam.jpg")'; // Update background image
    document.body.style.opacity = '0.5';
    
    document.getElementById('riddleContainer').style.display = 'block'; // Show riddle container
});

function updatePosition() {
    if (imgPos.x + img.clientWidth >= window.innerWidth || imgPos.x <= 0) {
        velocity.x = -velocity.x;
    }
    if (imgPos.y + img.clientHeight >= window.innerHeight || imgPos.y <= 0) {
        velocity.y = -velocity.y;
    }

    imgPos.x += velocity.x;
    imgPos.y += velocity.y;

    img.style.left = imgPos.x + 'px';
    img.style.top = imgPos.y + 'px';

    requestAnimationFrame(updatePosition);
}

updatePosition();
