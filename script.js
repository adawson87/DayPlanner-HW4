$(document).ready(function(){
    $(".saveBtn").on("click",function(){
        let value= $(this).siblings(".description").val()
        let time= $(this).parent().attr("id")
        localStorage.setItem(time,value)
        console.log(value)
    })
})

