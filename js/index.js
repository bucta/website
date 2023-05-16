window.addEventListener('DOMContentLoaded', () => {
    const heroEl = document.getElementById("hero");
    window.onscroll = function () {
        // setTimeout(() => {
        //     console.log('>> window.pageYOffset',document.body.scrollTop,  document.documentElement.scrollTop)
        //     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        //         heroEl.style.class = 'hide-hero';
        //     } else {
        //         heroEl.style.class = 'show-hero';
        //     }
        //   }, 1000);

        // console.log('>> window.pageYOffset', document.body.scrollTop, document.documentElement.scrollTop)
        
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            heroEl.setAttribute('class','hide-hero');
        } else {
            heroEl.setAttribute('class','show-hero');
        }
    }
})