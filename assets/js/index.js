$(function(){

    // gsap.from 
    // 전값을 실행할 수 있음 ( 전이 이렇게 생겼고 원래대로 돌릴 수 있는 )
    // 일단 확인을 위해서 to 로 

    // hero 왼쪽 글씨 animaiton 
    gsap.from('.header .inner',{
        y: -30,
        opacity : 1,
    })
    gsap.from('.sc-hero .sub-tit, .sc-hero .btn-wrap',{
        x: -170
    })
    gsap.from('.sc-hero .tit01, .sc-hero .tit04',{
        x: 100
    })
    // 오른쪽 요소 
    gsap.from('.sc-hero .elem05, .sc-hero .elem08, .sc-hero .elem09',{
        height:0
    })
    gsap.from('.sc-hero .elem04, .sc-hero .elem10, .sc-hero .elem12',{
        scale:0
    })
    gsap.from('.sc-hero .circle01.top, .sc-hero .circle01.btm',{
        rotateZ: 180
    })
    gsap.from('.sc-hero .hero-elem.elem02, .sc-hero .elem13',{
         y:-100
    })
    gsap.from('.sc-hero .tit-wrap .dash, .sc-hero .elem06, .sc-hero .elem03, .sc-hero .elem14',{
        width  : 0
    })
    gsap.from('.sc-hero .elem07 .circle-pink-top',{
        rotateZ: -180
    })
    gsap.from('.sc-hero .circle-right',{
        rotateZ: -180
    })

    // setTimeout(() => {
    //     $('.sc-hero').addClass('on');
    // }, 500 );


    // sc-visit  
    scVisit = gsap.timeline({
        scrollTrigger:{
            trigger:".sc-visit",
            start:"0% 60%", //trigger의 시작지점 / 윈도우시작지점 
            end:"100% 0%",
            // markers : true,
        },
    })
    // @ 라벨링 주는거 맞 ? 
         scVisit
        .to('.sc-visit .tit-visit',{
            x: 0, opacity : 1,
            // stagger : 0.1
        })
        .to('.sc-visit .card-list > *',{
            y: 0, opacity :1 ,
            stagger:0.1

        })


    // sc-media 
    scMedia = gsap.timeline({
        scrollTrigger:{
            trigger:".sc-media",
            start:"0% 80%",
            end : "100% 0%",
            // markers : true,
            scrub : 1
        },
    })
        scMedia
        .addLabel('a')
        .to('.sc-media .illustr-area img',{
            scale : 1
        },'a')
        .to('.sc-media .border-area',{
            opacity : 1,
        },'a')
        // .to('.sc-media .bg-area',{
        //     opacity : 1,
        // },'a')
        .to('.sc-media .desc-wrap',{
            x : 0,
            opacity : 1,
        },'a')
        .to('.sc-media .tit-wrap .tit01, .sc-media .tit-wrap .tit02, .sc-media .tit-wrap .tit03',{
            x : 0,
            opacity : 1,
        },'a')

    
    // Audio  
    scAudio = gsap.timeline({
        scrollTrigger:{
            trigger:".sc-audio",
            start:"0% 70%",
            end : "100% 0%",
            // markers : true,
            // scrub : 1
        },

    })
        scAudio 
        .addLabel('a')
        .to('.sc-audio .group-tit > * ',{
            x : 0,
            opacity : 1
        },'a')

        .to('.sc-audio .audio-list > *',{
            y : 0,
            opacity : 1,
            stagger : 0.1,
           
        },'a')

        // .sc-audio .group-more


    audioBtm = gsap.timeline({
        scrollTrigger:{
            trigger:".sc-audio",
            start:"50% 40%",
            end : "100% 0%",
            // markers : true,
        },
    })
     audioBtm
    .to('.sc-audio .group-more',{
        y : 0,
        opacity : 1,
    })
        
    
})

