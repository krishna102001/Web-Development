const year=document.getElementById('year');
const linkContainer=document.querySelector('.link-container');
const navToggle=document.querySelector('.nav-toggle');
const link=document.querySelector('.link');
const nav=document.getElementById('nav');
//dynamicallly updating the year
year.innerText= new Date().getFullYear();
// adding height dynamically
navToggle.addEventListener('click',function(){
    // linkContainer.classList.toggle('show-link');
    const containerHeight=linkContainer.getBoundingClientRect().height;
    const linkHeight=link.getBoundingClientRect().height;
    if(containerHeight===0){
        linkContainer.style.height = `${linkHeight}px`;
    }
    else{
        linkContainer.style.height = 0;
    }
    // console.log(containerHeight);
})
window.addEventListener('scroll',function(){
    // console.log(window.pageYOffset);
    // console.log(window.scrollY);
    const topLink=document.querySelector('.top-link');
    const scrollHeight=window.scrollY;
    const navHeight=nav.getBoundingClientRect().height;
    if(scrollHeight>navHeight){
        nav.classList.add('fixed-nav');
    }
    else{
        nav.classList.remove('fixed-nav');
    }
    if(scrollHeight>500){
        topLink.classList.add('show-links');
    }
    else{
        topLink.classList.remove('show-links');
    }
    // console.log(window.height);
})
// smooth scroll 

const scrollLink=document.querySelectorAll('.scroll-link');
scrollLink.forEach(function(links){
    links.addEventListener('click',function(e){
        //prevent default
        e.preventDefault();
        //navigate to specific spot
        const id=e.currentTarget.getAttribute("href").slice(1);
        // console.log(id);
        const element=document.getElementById(id);
        const navHeight=nav.getBoundingClientRect().height;
        const linkHeight=linkContainer.getBoundingClientRect().height;
        const fixedNav=nav.classList.contains('fixed-nav');
        let position=element.offsetTop - navHeight;
        if(fixedNav){
            position=element.offsetTop - navHeight;
        }
        if(linkHeight>82){
            position= position + linkHeight;
        }
        window.scrollTo({
            left:0,
            top: position,
        })
        linkContainer.style.height=0;
    })
})