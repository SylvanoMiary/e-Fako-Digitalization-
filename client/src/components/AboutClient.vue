<template>
    <div class="client">
        <font-awesome-icon icon="circle-user" class="icon1"/>
        <div class="content-client">
            <ContentClient v-if="n == 1"/>
            <Confirmationmail v-else/>
        </div>
    </div>
</template>

<script>
import ContentClient from './ContentClient.vue';
import Confirmationmail from './Confirmationmail.vue';
    export default{
        components:{
        ContentClient,
        Confirmationmail
    },
        props:['n']
    }
</script>

<style>
.content-client{
    display: flex;
    justify-content: center;
    flex-direction: column;   
    align-items: center;
}
.client{
    border: 2px solid black;
    height: 400px;
    width: 400px;
    margin: 0 100px; 
}
.icon1{
  position: relative;
  height: 120px;
  padding: 10px;
  padding-top: 0;
  bottom: 70px;
  z-index: 1;
}
</style>