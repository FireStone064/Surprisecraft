function copyServerAddress() {
    var copyText = document.getElementById("server-address");
    copyText.select();

    navigator.clipboard.writeText(copyText.value).then(function() {
        alert("Server ip copied " + copyText.value);
    }).catch(function(err) {
        console.error(' Could not copy the text ', err);
    });
}

let lastScrollTop = 0;
    const header = document.querySelector('header');

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
           
            header.style.top = '-84px'; 
        } else {
            
            header.style.top = '0';
        }
        lastScrollTop = scrollTop;
    });