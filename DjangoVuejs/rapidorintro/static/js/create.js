
let create = new Vue({    
    el   : '#vue-app-create',
    delimiters: ['[[', ']]'],
    data : {
        name       : '',
        mobile     : ''
    },
    methods : {
        postcustomer : function(){ 
            if(this.name && this.mobile){
                let url = '/customer/saveusingaxios'
                let body =  {
                    'name'   : this.name,
                    'mobile' : this.mobile,
                }
                axios.post(url, body).then((response) => {
                    let data = response.data
                    alert(data.message)
                })
            }
        },
    },
});

