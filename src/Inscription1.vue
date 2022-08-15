<script>
import Titleinscription from "./components/Titleinscription.vue";

export default{
    components: {
        Titleinscription
    }
}

</script>

<template>
    <div class="wrapper">
        <Titleinscription title="STEP 1" intro="Please enter your information"/>
        <div class="content-inscription">
            <table align="center">
                <tr>
                    <td><input type="text" placeholder="Name"></td>
                    <td><input type="text" placeholder="Number phone"></td>
                </tr>
                <tr>
                    <td><input type="text" placeholder="E-mail"></td>
                    <td><input type="text" placeholder="Adress"></td>
                </tr>
            </table>
            <a href="#/inscription_step2"><font-awesome-icon icon="arrow-circle-right" class="iconInput"/></a>
        </div>
    </div>
</template>

<style>
    .iconInput{
        height: 60px;
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
        margin: 50px;
    }
</style>