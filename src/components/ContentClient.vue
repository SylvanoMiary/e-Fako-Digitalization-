<template>
    <div>
        <p v-for="value in user">{{value}}</p>
    </div>
    <div class="action">
        <button>Send e-mail</button>
        <button>Save Changes</button>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                user: {
                    name: "BERNARDIN",
                    firsname: "Miary Sylvano",
                    mail: "miarysylvanobernardinv@gmail.com",
                    adress: "Lot 0170",
                    tel: "032 87 963 78"
                }
            }
        }
    }
</script>

<style>
.content-client{
    
}
.content-client p{
    padding-bottom: 20px;
}
</style>