const app = Vue.createApp({
    // configuramnos vue 
    // template:`
    // <h1>Hola mundo</h1>
    // <p>Desde app.js</p>`
   data(){
    return{
        author:'Lola',
        quote:'Hola Mundo'
    }
   },
   methods:{
    doSomething(){
        console.log('Hola Mundo');
        this.author = 'Monasterio';
        this.capitalize();
    },
    capitalize(){
        this.quote = this.quote.toUpperCase()
    }
}
})

app.mount('#myApp');