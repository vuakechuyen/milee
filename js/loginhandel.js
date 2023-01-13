//validate
function validate(){
        let formList=document.querySelectorAll(".form_input>input");
        let errorIcon="<i class=\"fa-solid fa-triangle-exclamation\"></i>"
        function validate(){


        }
        //hàm gốc
        function isRequire(currentElement){
            currentElement.classList.add("error_border");
            currentElement.parentElement.querySelector("span[class=msgError]").innerHTML= `${errorIcon}   Đây là trường bắt buộc !`;
        }
        function isEmail(currentElement){
            currentElement.classList.add("error_border");
            currentElement.parentElement.querySelector("span[class=msgError]").innerHTML= `${errorIcon}   Đây phải một Email !`;
        }
        function isMax(currentElement,maxNumber){
            currentElement.classList.add("error_border");
            currentElement.parentElement.querySelector("span[class=msgError]").innerHTML= `${errorIcon}   Mật khẩu không được lớn hơn ${maxNumber} ký tự !`;

        }
        function isMin(currentElement,minNumber){
            currentElement.classList.add("error_border");
            currentElement.parentElement.querySelector("span[class=msgError]").innerHTML= `${errorIcon}   Mật khẩu không được nhỏ hơn ${minNumber} ký tự !`;

        }
        function isConfirmPwd(currentElement){
            currentElement.classList.add("error_border");
            currentElement.parentElement.querySelector("span[class=msgError]").innerHTML= `${errorIcon}   Mật khẩu phải giống nhau !`;
        }

        var emailregex=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        //hàm blur
        function check(x,cb){
            x.addEventListener("blur",function(e){
                if (e.target.value!=false) {
                    if (this.name=="password"){
                        if (this.value.length<this.min){isMin(this,this.min)}
                        else
                        if (this.value.length>this.max){isMax(this,this.max)};
                        
                    };
                    if (this.name=="email"){
                        if (emailregex.test(this.value)!=true){
                        isEmail(this)};}
                    if (this.name=="cofirm_password"){
                        var pwd=document.querySelector("[name=password");
                        if (pwd.value!=this.value){isConfirmPwd(this)};
                    }
                }

                else isRequire(this);
                
            });
        }
        var registerBtn=document.querySelector("#register_btn");
        var loginBtn=document.querySelector("#login_btn");
        //hàm kiểm tra lần cuối
        function testFinally(btnFake){
                    btnFake.addEventListener("click",function(){
                        this.parentElement.parentElement.querySelectorAll("input").forEach(function(x){
                            if(x.value!=false){
                                if (x.name=="password"){
                                    if (x.value.length<x.min){isMin(x,x.min)}
                                    else
                                    if (x.value.length>x.max){isMax(x,x.max)};
                                    
                                };
                                if (x.name=="email"){
                                    if (emailregex.test(x.value)!=true){
                                        isEmail(x)};}
                                        if (x.name=="cofirm_password"){
                                            var pwd=document.querySelector("[name=password");
                                            if (pwd.value!=x.value){isConfirmPwd(x)};
                                        }
                                    }
                                    else  isRequire(x);
                                    
                                });
                                
                            });
        }
        
                
                //post data len api
                function postData(url,data){
                    let option={
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                            // 'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        body: JSON.stringify(data) // body data type must match "Content-Type" header
                    }
                    fetch(url,option)
                    .then(function(reply){
                        return reply.json();
                    })
                    .then(function(dat){
                        console.log(dat);
                    })
                }
            
            
            //chạy các hàm  
            formList.forEach(function(xxx){
                    check(xxx,function(){      
                    });
                    xxx.addEventListener("focus",function(){
                        this.parentElement.querySelector("span[class=msgError]").innerHTML="";
                        this.classList.remove("error_border");
                    });
            });
            testFinally(registerBtn);
            testFinally(loginBtn);
            //chạy kiểm tra các mục đăng ký nếu ok thì post len api
            registerBtn.addEventListener("click",function(){
                let check=true;
                this.parentElement.parentElement.querySelectorAll("input").forEach(function(x){
                    if(x.parentElement.querySelector("span[class=msgError]").textContent!=false) {check=false;
                    }
                });

                if (check==true){
                postData("https://my-json-server.typicode.com/vuakechuyen/mhl/comments",{
                    userName:document.querySelector("[name=username]").value,
                    email:document.querySelector("[name=email").value,
                    password:document.querySelector("[name=password").value
                });}
            });
            loginBtn.addEventListener("click",function(){
                let check=true;
                let emailValue=this.parentElement.parentElement.querySelector("input[name=email]").value;
                let passWordValue=this.parentElement.parentElement.querySelector("input[name=password]").value;
               
                this.parentElement.parentElement.querySelectorAll("input").forEach(function(x){
                    if(x.parentElement.querySelector("span[class=msgError]").textContent!=false) {check=false;
                    }
                });

                if (check==true){
                    fetch("https://my-json-server.typicode.com/vuakechuyen/mhl/comments")
                        .then(function(dat){
                            return dat.json();
                        })
                        .then(function(users){
                            let kt=false;
                            console.log(emailValue)
                            console.log(passWordValue)

                            users.forEach(function(user){
                                if ((user.email===emailValue)&&(passWordValue===user.password)){
                                        kt=true;
                                        alert(`Chào mừng ${user.userName} đến với trang web của chúng tôi`);
                                        return;
                                    }
                                })
                            if (kt==false){alert("đăng nhập không thanh công")}    
                            
                        })
                }
            });

}


//trans login and register
function transContainer(){

    var moveRegister=document.querySelector("#move_to_register");
    var moveLogin=document.querySelector("#move_to_login");
    var listActive=document.querySelectorAll(".form_container");
    var login__nav=document.querySelector(".login_item");
    var register__nav=document.querySelector(".register_item");
    var register__container=document.querySelector(".login_container");
    var closeBtns=document.querySelectorAll(".close_btn");
    closeBtns.forEach(function(closeBtn){
        closeBtn.addEventListener("click",function(){
        register__container.style="display:none;";
        })
    })
    login__nav.addEventListener("click",function(){
        register__container.style="display:block;";
        listActive[0].classList.remove("active");
        
        listActive[1].classList.add("active");
    })
    register__nav.addEventListener("click",function(){
        register__container.style="display:block;";
        listActive[1].classList.remove("active");
        
        listActive[0].classList.add("active");
    })


    moveRegister.addEventListener("click",function(e){

        e.preventDefault;
        listActive[1].classList.remove("active");
        
        listActive[0].classList.add("active");
        
    });
    moveLogin.addEventListener("click",function(e){
        e.preventDefault;
        listActive[0].classList.remove("active");
        
        listActive[1].classList.add("active");
    });
}


function  showPassword(){
    var eyes_show=document.querySelectorAll(".eye_current");
    var eyes_prohibit=document.querySelectorAll(".eye_prohibit");
    
    eyes_show.forEach(function(x){
        x.addEventListener("click",function(e){
            this.classList.remove("eye_current");
            this.parentElement.querySelector(".eye_prohibit").classList.add("eye_current");
            this.parentElement.querySelector("input").type="text";
        });
    });
    eyes_prohibit.forEach(function(x){
        x.addEventListener("click",function(e){
            this.classList.remove("eye_current");
            this.parentElement.querySelector(".eye_show").classList.add("eye_current");
            this.parentElement.querySelector("input").type="password";
        });
    });
}

validate();
transContainer();
showPassword();
