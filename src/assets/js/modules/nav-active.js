const currentLocation = location.pathname.split("/").pop();

$('.nav a[href="'+ currentLocation +'"]').parent().addClass('is-active').siblings().removeClass('is-active')