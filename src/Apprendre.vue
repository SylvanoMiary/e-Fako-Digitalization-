<script>
    export default{
        data(){
            return{
                firstname: 'John',
                lastname: 'Doe'
            }
        },
        computed:{
            fullname: {
                //getter
                get(){
                    return this.firstname + ' ' + this.lastname
                },
                //setter
                set(newValue){
                    //Note: we are using destructuring assigment syntax here.
                    [this.firstname, this.lastname] = newValue.split(' ')
                }
            }
        },
        mounted(){
            console.log('the component is now mounted.')
        }
    }
    
</script>

<template>
    <hr>
    <a href="#/">Sortir</a>
    <p>Has published books</p>
    <span>{{fullname}}</span>
</template> 