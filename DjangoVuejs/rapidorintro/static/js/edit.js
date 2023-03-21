new Vue({
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
                axios.post(url, body).then((response) => {
                    let data = response.data
                    alert(data.message)
                })
            }
        },
    },
    mounted(){
        let urlToParse = window.location.href;
        let index = urlToParse.lastIndexOf('/')
        let param = urlToParse.slice(index+1);
        let url = '/customer/fetchsingle_using_axios/'+param
        axios.get(url).then((response) => {
            let data = response.data
            var customer = data.customers[0]
            this.id     = customer.id
            this.name   = customer.name
            this.mobile = customer.mobile
        })
    }
});
