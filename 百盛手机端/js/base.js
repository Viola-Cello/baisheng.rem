$(document).ready(function(){
// 检验手机号
    function vailPhone(){
        var phone = $('.base-ipt').val();
        var flag = false;
        var message = "";
        var myReg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
        if ( phone == '') {
            message = "手机号码不能为空！";
        }else if ( phone.length != 11 ) {
            message = "请输入有效手机号码！";
        }else if ( !myReg.test(phone)) {
            message = "请输入有效手机号码！";
        }else{
            flag = true;
        }
    }
//发送给后台
   function checkPhoneIsExist(){
     var phone = $("#phone").val();
     var flag = true;
     jQuery.ajax(
      { url: "checkPhone?t=" + (new Date()).getTime(),
        data:{phone:phone},
        dataType:"json",
           type:"GET",
           async:false,
           success:function(data) {
           var status = data.status;
           if(status == "0"){
             flag = false;
           }
         }
    });
    return flag;
   }
}