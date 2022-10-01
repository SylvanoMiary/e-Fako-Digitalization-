<script>
import Titleinscription from "../components/Titleinscription.vue";
import nextInscription from "./Inscription2.vue";
import axios from 'axios';

export default{
    data(){
        return{
            name: "",
            tel: "",
            mail: "",
            adress: "",

            next: "0",
            user: {}
        }
    }, 
    components: {
        Titleinscription,
        nextInscription
    },
    methods:{
        async nextHandler(){
            [this.user.f_Name, this.user.phone, this.user.mail, this.user.adress] = [this.name, this.tel, this.mail, this.adress]
            console.log(this.user);
            this.next = '1';
        /*let response = await axios.post("http://localhost:4200/api/user", user)
            .then ( () => {
                console.log(`post sent`)
            }) */
        }  
    }
}

</script>

<template>
    <div v-if="next == '0'" class="wrapper-inscription1">
        <Titleinscription title="STEP 1" intro="Please enter your information"/>
        <div class="container-inscription">
            <form class="table">
                <table align="center">
                    <tr>
                        <td><input type="text" placeholder="Name" v-model="name" required></td>
                        <td><input type="tel" placeholder="Number phone" v-model="tel" required></td>
                    </tr>
                    <tr>
                        <td><input type="text" placeholder="E-mail" v-model="mail" required></td>
                        <td><input type="text" placeholder="Adress" v-model="adress" required></td>
                    </tr>
                    <tr>
                        <td colspan="2" class="button">
                            <div @click="nextHandler"><font-awesome-icon icon="arrow-circle-right" class="icon"/></div>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    </div>
    <div v-if="next == '1'">
        <nextInscription :state="user"/>
    </div>
</template>

<style>
    .icon{
        height: 75px;
        margin: 50px;
        color: rgb(46, 38, 38);
    }
    .wrapper-inscription1{
        display: flex;
        flex-direction: column;
        background-image: url(../assets/Step1.png); 
        background-size: 900px 700px;
        background-position: 10px 0px;
        background-repeat: no-repeat;
        height: 680px;
    }
    input{
        display: flex;
        border: none;
        font-size: 25px;
        background-color: transparent;
        font-family: Poppins;
        height: 50px;
        color: black;
        border-bottom: 2px solid black;
        
        margin: 10px 50px;
    }
    .container-inscription{
        display: inline-table;
        margin-top: 70px;
    }
    .container-inscription .table{
        display: flex;
        flex-direction: column;
        justify-content: center;
        backdrop-filter: blur(8px);
        z-index: 1;
    }
    .container-inscription .button{
        text-align: center;
    }
</style>