const app = new Vue({
    el: "#app",
    data:{
        list:[],
    },
    created(){
        for( let i=0; i<10; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
            this.list.push(response.data.response);
        })
        }
    },
});