var fetch = new Vue({
    el   : '#vue-app-fetch',
    delimiters: ['[[', ']]'],
    data : {
        id         : '',
        name       : '',
        mobile     : '',
    },
    methods : {
        getallcustomer : function(){ 
            if(this.name && this.mobile){
                let url = '/customer/fetchusingaxios'
                console.log(body);
                axios.post(url, body).then((response) => {
                    let data = response.data
                    console.log(data)
                })
            }
        },
    },
});
