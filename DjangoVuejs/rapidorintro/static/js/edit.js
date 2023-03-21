var edit = new Vue({
    el   : '#vue-app-edit',
    delimiters: ['[[', ']]'],
    data : {
        id         : '',
        name       : '',
        mobile     : '',
    },
    methods : {
        updatecustomer : function(){ 
            if(this.name && this.mobile){
                let url = '/customer/editusingaxios'
                let body =  {
                    'id'     : this.id,
                    'name'   : this.name,
                    'mobile' : this.mobile,
                }
                console.log(body);
                axios.post(url, body).then((response) => {
                    let data = response.data
                    console.log(data)
                })
            }
        },
        getcustomer : function(){ 
            if(this.name && this.mobile){
                let url = '/customer/fetchsingleusingaxios'
                let body =  {
                    'id'     : this.id,
                }
                axios.post(url, body).then((response) => {
                    let data = response.data
                    this.id = data.id;
                    this.name = data.name;
                    this.mobile = data.mobile;
                })
            }
        },
    },
});
