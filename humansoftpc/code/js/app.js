var main = function() {
    
    $('.dropdown-toggle').click(function(){
        $('.dropdown-menu').toggle();    
    });
    $('.arrow-next').click(function(){
        //var tempScrollTop = $(window).scrollTop();
        var currentSlide = $('.active-slide');
        var nextSlide = currentSlide.next();
        if (nextSlide.length == 0) nextSlide = $('.slide').first();
        currentSlide.fadeOut(600);
        currentSlide.removeClass('active-slide');
        nextSlide.fadeIn(600);
        nextSlide.addClass('active-slide');
        var currentDot = $('.active-dot');
        var nextDot = currentDot.next();
        if (nextDot.length == 0) nextDot = $('.dot').first();
        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');

        var currentAnswer = $('.active-answer');
        var nextAnswer = currentAnswer.next();
        if (nextAnswer.length == 0) nextAnswer = $('.slide-answer').first();
        currentAnswer.fadeOut(600);
        nextAnswer.fadeIn(600);
        currentAnswer.removeClass('active-answer');
        nextAnswer.addClass('active-answer');
      //   $(window).scrollTop(tempScrollTop);
    });
    $(document).keydown(function(event){
        if (event.which == 37) {
            var currentSlide = $('.active-slide');
            var prevSlide = currentSlide.prev();
            if (prevSlide.length == 0) prevSlide = $('.slide').last();
            currentSlide.fadeOut(600);
            currentSlide.removeClass('active-slide');
            prevSlide.fadeIn(600);
            prevSlide.addClass('active-slide');
            var currentDot = $('.active-dot');
            var prevDot = currentDot.prev();
            if (prevDot.length == 0) prevDot = $('.dot').last();
            currentDot.removeClass('active-dot');
            prevDot.addClass('active-dot');
            var currentAnswer = $('.active-answer');
            var prevAnswer = currentAnswer.prev();
            if (prevAnswer.length == 0) prevAnswer = $('.slide-answer').last();
            currentAnswer.removeClass('active-answer');
            currentAnswer.fadeOut(600);
            prevAnswer.fadeIn(600);
            prevAnswer.addClass('active-answer');  
        } else if (event.which == 39) {
            var currentSlide = $('.active-slide');
            var nextSlide = currentSlide.next();
            if (nextSlide.length == 0) nextSlide = $('.slide').first();
            currentSlide.fadeOut(600);
            currentSlide.removeClass('active-slide');
            nextSlide.fadeIn(600);
            nextSlide.addClass('active-slide');
            var currentDot = $('.active-dot');
            var nextDot = currentDot.next();
            if (nextDot.length == 0) nextDot = $('.dot').first();
            currentDot.removeClass('active-dot');
            nextDot.addClass('active-dot');

            var currentAnswer = $('.active-answer');
            var nextAnswer = currentAnswer.next();
            if (nextAnswer.length == 0) nextAnswer = $('.slide-answer').first();
            currentAnswer.fadeOut(600);
            nextAnswer.fadeIn(600);
            currentAnswer.removeClass('active-answer');
            nextAnswer.addClass('active-answer');
        }
    });
    $('.arrow-prev').click(function(){
        //var tempScrollTop = $(window).scrollTop();
        var currentSlide = $('.active-slide');
        var prevSlide = currentSlide.prev();
        if (prevSlide.length == 0) prevSlide = $('.slide').last();
        currentSlide.fadeOut(600);
        currentSlide.removeClass('active-slide');
        prevSlide.fadeIn(600);
        prevSlide.addClass('active-slide');
        var currentDot = $('.active-dot');
        var prevDot = currentDot.prev();
        if (prevDot.length == 0) prevDot = $('.dot').last();
        currentDot.removeClass('active-dot');
        prevDot.addClass('active-dot');
        var currentAnswer = $('.active-answer');
        var prevAnswer = currentAnswer.prev();
        if (prevAnswer.length == 0) prevAnswer = $('.slide-answer').last();
        currentAnswer.removeClass('active-answer');
        currentAnswer.fadeOut(600);
        prevAnswer.fadeIn(600);
        prevAnswer.addClass('active-answer');  
      //  $(window).scrollTop(tempScrollTop);
    });
}

$(document).ready(main);