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
        deletecustomer(cid){ 
            let url = '/customer/deleteusingaxios/'+cid
            axios.get(url).then((response) => {
                let data = response.data
                alert(data.message)
            })
            window.location.reload()
        }
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
