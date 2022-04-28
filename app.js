let app = new Vue({
    el: "#app",

    data: {    
        contador: 0,
    },

    methods: {
        sumar(){
            return this.contador ++,
            console.log(this.contador)
        },

        restar(){
            return this.contador -= 1
        }
    },
});