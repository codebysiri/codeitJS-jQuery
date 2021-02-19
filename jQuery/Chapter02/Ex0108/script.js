$('#btn1').on('click', blueDown);
$('#btn2').on('click', whiteDown);
$('#btn3').on('click', blueDotDown);

function blueDown() {
    $('.blue').addClass('down')
}
function whiteDown() {
    $('.white').addClass('down')
}
function blueDotDown() {
    $('.blue.dot').addClass('down')
}