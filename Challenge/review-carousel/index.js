var currentItem=0;
var person=[{ id:'1',name:'Krishna Kant Maurya',job:'Web Developer',reviewTxt:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',img:'image/0.webp'},
{id:'2',name:'Shubham Verma',job:'Software Developer',reviewTxt:'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',img:'image/2.webp'},
{id:'3',name:'Abhinav Srivastava',job:'Full Stack Developer',reviewTxt:'vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum lectus nulla leo vel orci porta non pulvinar neque laoreet suspendisse interdum',img:'image/3.webp'},
{id:'4',name:'Jayant Singh',job:'Backened Developer',reviewTxt:'et malesuada fames ac turpis egestas sed tempus urna et pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor sit amet consectetur adipiscing elit',img:'image/4.webp'},
{id:'5',name:'Gopal Pandit',job:'Registrar Assistance',reviewTxt:'eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum  eu sem integer vitae justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique',img:'image/5.png'}
]
function setReview(name,job,txt,img){
    $('.person-img').attr('src',img);
    $('.name').text(name);
    $('.job').text(job);
    $('.review-txt').text(txt);
}
$('.prev-btn').click(function(){
    --currentItem;
    if(currentItem<0){
        currentItem=person.length-1;
    }
    var item=person[currentItem];
    setReview(item.name, item.job, item.reviewTxt, item.img);
    // console.log(currentItem);

})
$('.next-btn').click(function(){
    ++currentItem;
    if(currentItem>person.length-1){
        currentItem=0;
    }
    var item=person[currentItem];
    setReview(item.name, item.job, item.reviewTxt, item.img);
    // console.log(currentItem)
})