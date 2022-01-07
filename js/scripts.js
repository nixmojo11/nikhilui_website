console.log(" Liked my works? Contact me for any UI design related work.")

function menuToggle () {
    var x = document.getElementById('myNavtoggle')
    if (x.className === 'navtoggle') {
    x.className += ' responsive'
    } else {
    x.className = 'navtoggle'
    }
}