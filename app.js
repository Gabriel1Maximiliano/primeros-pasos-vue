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
   }
})

app.mount('#myApp');