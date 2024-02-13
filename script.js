document.querySelector('.no-button').addEventListener('mouseenter', function(e) {
    console.log('here');
    const container = document.querySelector('.container');
    e.target.style.position = 'absolute';
    e.target.style.top = Math.random() * (container.offsetHeight - e.target.offsetHeight) + 'px';
    e.target.style.left = Math.random() * (container.offsetWidth - e.target.offsetWidth) + 'px';
});