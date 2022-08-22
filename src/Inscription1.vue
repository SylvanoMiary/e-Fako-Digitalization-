<script>
import Titleinscription from "./components/Titleinscription.vue";

export default{
    data(){
        return{
            name: "",
            tel: "",
            mail: "",
            adress: ""
        }
    },
    components: {
        Titleinscription
    }
}

</script>

<template>
    <div class="wrapper">
        <Titleinscription title="STEP 1" intro="Please enter your information"/>
        <div class="container step inscription">
            <table align="center">
                <tr>
                    <td><input type="text" placeholder="Name" v-model="name"></td>
                    <td><input type="tel" placeholder="Number phone" v-model="tel" @input="warningTel(tel)"></td>
                </tr>
                <tr>
                    <td><input type="text" placeholder="E-mail" v-model="mail"></td>
                    <td><input type="text" placeholder="Adress" v-model="adress"></td>
                </tr>
            </table>
            <a href="#/inscription_step2"><font-awesome-icon icon="arrow-circle-right" class="icon"/></a>
        </div>
    </div>
</template>

<style>
    .icon{
        height: 75px;
        margin: 50px;
        color: rgb(46, 38, 38);
    }
    .wrapper{
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
    input{
        border: none;
        font-size: 25px;
        background-color: transparent;
        font-family: Poppins;
        height: 50px;
        color: #FFFFFF;
        border-bottom: 2px solid #CDCDCD;
        display: flex;
        margin: 20px 50px;
    }
</style>