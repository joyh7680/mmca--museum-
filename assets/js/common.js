$(function(){










    // hamburger 
    $('.header .btn-hamburger').click(function(e){
        e.preventDefault();
        $('.accodian-menu, .header .group-hamburger .btn-close').addClass('on');
        $('.header .btn-hamburger').addClass('off');
        $('body').addClass('hidden');
    })
    $('.header .group-hamburger .btn-close').click(function(e){
        e.preventDefault();
        $('.accodian-menu, .header .group-hamburger .btn-close').removeClass('on');
        $('.header .btn-hamburger').removeClass('off');
        $('body').removeClass('hidden');
    })




    // footer 
    footerMotion = gsap.timeline({
        scrollTrigger:{
            trigger:".footer",
            start:"0% 70%",
            end : "100% 100%",
            // markers : true,
            scrub : 1
        },
    })
        footerMotion
        .addLabel('a')
            .to('.footer .flex-area > * ',{
                y : 0,
                opacity : 1,
            },'a')
            .to('.footer .group-elements .elem01, .footer .group-elements .elem02, .footer .group-elements .elem03',{
                x : 0, y:0, z:0,
                opacity : 1,
            },'a')
            .from('.footer .footer-elem01',{
               rotateZ: 150,
                // opacity : 1,
            },'a')


    // .footer .flex-area > * 


    // modal 
    $('.modal').click(function(e){
        e.preventDefault();
        $('.sc-modal').addClass('on');
        $('body').addClass('hidden');
    })
    $('.sc-modal .btn-close ').click(function(e){
        e.preventDefault();
        $('.sc-modal').removeClass('on');
        $('body').removeClass('hidden');

    })



    
    
})