const offcanvas = document.getElementById('offcanvas');
function toogleNavbar() {
    offcanvas.styq.right === '0px' ? '-250px' : '0';
}

function closeNavbar() {
    offcanvas.style.right = '-250px';
}

const btnUnclock = document.getElementsByClassName('btnUnlock');

btnUnclock.addEvenlistener('click', function() {
    document.body.classList.toogle('allow-scroll');
})