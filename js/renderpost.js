
var postContainers=document.querySelectorAll(".post_container")
var x=postContainers[0].querySelector(".details_post");
//render posts
fetch("https://my-json-server.typicode.com/vuakechuyen/mhl/posts")
.then(function(x1){
    return x1.json();
})
.then(function(posts){
    let index=posts.length-1;
    postContainers.forEach(function(x){
        let imgPost=x.querySelector(".img_post")
        let detailPost=x.querySelector(".details_post")
        let titlePost=x.querySelector(".post_title")
        let namePost=x.querySelector(".post_name")
        let timePost=x.querySelector(".post_time")
        let extraPost=x.querySelector(".post_extra")
        imgPost.src=posts[index].img
        titlePost.innerText=posts[index].title.toUpperCase();
        namePost.innerText=posts[index].name
        timePost.innerText=posts[index].time
        extraPost.innerText=posts[index].extra
        index--;
    })
    return posts;
})
.then(cb)


//render slides
var slides=document.querySelectorAll(".slide")
function renderSlide(who,start,postsPackage){
    let index=start
    let slideList=who.querySelectorAll(".slide_container")
    slideList.forEach(function(x){
        x.querySelector("img").src=postsPackage[index].img
        x.querySelector(".post_title").innerText=postsPackage[index].title.toUpperCase()
        x.querySelector(".slide_name").innerText=postsPackage[index].name
        x.querySelector(".post_time").innerText=postsPackage[index].time
        index--
    })
        
}
function cb(xx){
    renderSlide(slides[0],xx.length-1,xx)
    renderSlide(slides[1],xx.length-2,xx)
    renderSlide(slides[2],xx.length-3,xx)
}


