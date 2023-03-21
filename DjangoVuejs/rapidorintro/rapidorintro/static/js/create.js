
var a = new Vue({    
    el   : '#vue-app-create',
    delimiters: ['[[', ']]'],
    data : {
        name       : '',
        mobile     : ''
    },
    methods : {
        postcustomer : function(){ 
            if(this.name && this.mobile){
            axios({
                method: 'post',
                url: '/customer/save' ,
                data: {
                    'name'   : this.name,
                    'mobile' : this.mobile,
                }
              }).then(function (response) {
                console.log(response);
                alert(response);
              })
            }else{
                bootbox.alert("Please fill required fields");
            }

        },
    }
});
