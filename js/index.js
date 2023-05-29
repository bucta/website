window.addEventListener('DOMContentLoaded', () => {
    const heroEl = document.getElementById("hero");
    const membersEl = document.getElementById("members");
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

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
            heroEl.setAttribute('class', 'hide-hero');
            membersEl.style.paddingTop = '185px';
        } else {
            heroEl.setAttribute('class', 'show-hero');
            membersEl.style.paddingTop = '0';
        }


        // SCROLL TO TOP
        // When the user scrolls down 20px from the top of the document, show the button
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    }


    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    scrollToTopBtn.onclick = topFunction;
})