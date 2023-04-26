const {createApp} = Vue

createApp({
    data(){
        return{

            mails: [

            ]
            
        }
    },

    
    mounted(){

        

        for(let i=0; i<10; i++){
            this.callApi()
        }
    },


    methods: {

        callApi(){

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then( ( res ) => {
                    console.log( res.data )
                    this.mails.push( res.data.response)
                } )
        }

    }
}).mount('#app')


