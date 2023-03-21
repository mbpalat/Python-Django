let fetch = new Vue({
    el   : '#vue-app-fetch',
    delimiters: ['[[', ']]'],
    data : {
        id         : '',
        name       : '',
        mobile     : '',
        customers  : [],
    },
    methods : {
        getallcustomer(){ 
                let url = '/customer/fetchusingaxios'
                axios.get(url).then((response) => {
                    let data = response.data
                    console.log(data)
                    this.customers = data.customerlist
                })
        },
        deletecustomer(cid){ 
            let url = '/customer/deleteusingaxios'
            let body =  {
                'id'     : cid,
            }
            axios.post(url,body).then((response) => {
                let data = response.data
                console.log(data.customerlist)
            })
        }


    },
});
