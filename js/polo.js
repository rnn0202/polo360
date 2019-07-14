function addClass1(i) {
    let str = "#p" + i;
    $(str).addClass("active");
}
function removeClass1() {
    for (let i = 0; i < 5; i++) {
        let str = "#p" + i;
        $(str).removeClass("active");
    }
}
function is_email(email_str){
    //匹配邮箱的正则表达式
    let searchstr =  /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    return searchstr.test(email_str);
}
$(document).ready(
    function() {
        $("#send_it").click(
            function() {
                if(!is_email($("#co_email").val()))
                {
                    alert("邮箱格式有误，请重新输入");
                    $("#co_email").val("");
                }
            }
        )
        for (let i = 0; i < 5; i++) {
            let str = "#p" + i;
            $(str).click(
                function() {
                    let src = "img/banner/banner0" + (i + 1) + ".png";
                    removeClass1();
                    addClass1(i);
                    $("#image").attr("src", src);
                }
            )
        }
    }
)