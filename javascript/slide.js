
    let visualSlide = new Swiper('.swiper-container', {
        speed: 500,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.vs-pager',
            clickable: true,
        },
    });

    let startVsBtn = document.querySelector('.vs-auto-start');
    let stopVsBtn = document.querySelector('.vs-auto-stop');
    
    startVsBtn.addEventListener('click', function() {
        visualSlide.autoplay.start();
    });
    stopVsBtn.addEventListener('click', function(){
        visualSlide.autoplay.stop();
    });

    


    let bannerSlide = new Swiper ('.banner-container', {
        speed: 500,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: '.bn-next-btn',
            prevEl: '.bn-prev-btn',
        },
    });

    let stopBnBtn = document.querySelector('.bn-stop-btn');
    let active = document.querySelector('.active');

    document.querySelector('.bn-next-btn').addEventListener('click', function() {
        bannerSlide.autoplay.stop();
        stopBnBtn.classList.add('active');
    });
    document.querySelector('.bn-prev-btn').addEventListener('click', function() {
        bannerSlide.autoplay.stop();
        stopBnBtn.classList.add('active');
    });
    stopBnBtn.addEventListener('click', function() {
        stopBnBtn.classList.toggle('active');
        if( stopBnBtn.classList.contains("active")  === true ) {
            bannerSlide.autoplay.stop();
        } else { bannerSlide.autoplay.start();}
    });
    


    
    let partnerSlide = new Swiper ('.partner-container', {
        slidesPerView: 6,
        speed: 500,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: '.pt-next-btn',
            prevEl: '.pt-prev-btn',
        },
    });

    let stopPtBtn = document.querySelector('.pt-stop-btn');
    let on = document.querySelector('.on');

    document.querySelector('.pt-next-btn').addEventListener('click', function() {
        partnerSlide.autoplay.stop();
        stopPtBtn.classList.add('on');
    });
    document.querySelector('.pt-prev-btn').addEventListener('click', function() {
        partnerSlide.autoplay.stop();
        stopPtBtn.classList.add('on');
    });
    stopPtBtn.addEventListener('click', function() {
        stopPtBtn.classList.toggle('on');
        if( stopPtBtn.classList.contains("on")  === true ) {
            partnerSlide.autoplay.stop();
        } else { partnerSlide.autoplay.start();}
    });
    