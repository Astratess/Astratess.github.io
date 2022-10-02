const currentLocation = location.pathname.substring(1);

$('nav a[href="'+ currentLocation +'"]').parent().addClass('is-active').siblings().removeClass('is-active')