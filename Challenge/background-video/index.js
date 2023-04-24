var switchBtn=document.querySelector('.switch-btn');
var videoConatiner=document.querySelector('.video-container');
var preloader=document.querySelector('.preloader');
window.addEventListener('load',function(){
    preloader.classList.add('hide');
})
switchBtn.addEventListener('click',function(){
    if(!switchBtn.classList.contains('slide')){
        switchBtn.classList.add('slide');
        videoConatiner.pause();
    }
    else{
        switchBtn.classList.remove('slide');
        videoConatiner.play();
    }
})