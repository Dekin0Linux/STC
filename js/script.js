

let prompts = document.querySelectorAll("li[id^='prompt']")

prompts.forEach(function(link){
    link.addEventListener('click',()=>{
        swal({
            title: "Page under construction",
            text: "This page is not available",
            icon: "/images/icon.png",
            imageAlt: "Image Description"
        });
    })
})
