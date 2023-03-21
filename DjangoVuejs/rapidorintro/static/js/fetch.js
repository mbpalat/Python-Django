let fetch = new Vue({
    el   : '#vue-app-fetch',
    delimiters: ['[[', ']]'],
    data : {
        id         : '',
        name       : '',
        mobile     : '',
        customers  : [],
        index      : 0,
    },
    methods : {
        deletecustomer(cid){
            let url = '/customer/deleteusingaxios/'+cid
            axios.get(url).then((response) => {
                let data = response.data
                alert(data.message)
            })
            window.location.reload()
        },
        showmodal(cid){
            $('.modal').show();
            let url = '/customer/fetchsingle_using_axios/'+cid
            axios.get(url).then((response) => {
                let data = response.data
                var customer = data.customers[0]
                this.id     = customer.id
                this.name   = customer.name
                this.mobile = customer.mobile
            })
        },
        hidemodal(){
            $('.modal').hide();
        },
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
            $('.modal').hide();
            window.location.reload()
        },
    },
    mounted() {
            let url = '/customer/fetchusingaxios'
            axios.get(url).then((response) => {
                let data = response.data
                console.log(data)
                this.customers = data.customerlist
            })
    },
    
});

