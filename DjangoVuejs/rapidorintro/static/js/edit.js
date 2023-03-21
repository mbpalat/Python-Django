new Vue({
    el   : '#vue-app-edit',
    delimiters: ['[[', ']]'],
    data : {
        id         : '',
        name       : '{{ customer.name }}',
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
                axios.post(url, body).then((response) => {
                    let data = response.data
                    alert(data.message)
                })
            }
        },
    },
});
