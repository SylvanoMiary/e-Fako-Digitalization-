<script>
import Headerhome from '../components/Headerhome.vue';
import Generalrules from '../components/Generalrules.vue';
import About from '../components/About.vue';
import Footerhome from '../components/Footerhome.vue';

export default{
    components:{
    Headerhome,
    Generalrules,
    About,
    Footerhome
}
}
</script>

<template>
    <Headerhome/>
    <div class="container home">
        <div class="left lhome">
            <h2>Reuse, Reduce and Recycle</h2>
            <p>Do you need someone to dispose of your waste? We are there for you each day!</p>
            <div>
               <button>Read more</button> 
            </div>
        </div>
        <div class="right rhome">
            <img src="../assets/7566.jpg" alt="waste">
        </div>
    </div>
    <Generalrules/>
    <About/>
    <Footerhome/>
</template>

<style>
.container{
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    z-index: 1;
 }  
 .lhome{
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 10%;
 }
 .left h2{
    margin-bottom: 0px;
    font-family: 'Comic Sans MS';
    font-size: 30px;
    font-weight: bold;
    line-height: 50px;
    text-align: center;
 }
  .left p{
    font-family: 'Judson';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 39px;
    text-align: center;
    margin: 30px 0;
  }
  .left button{
    font-size: 20px;
    width: 180px;
    height: 50px;
    color: black;
    background: rgba(255, 175, 5, 0.94);
    border-radius: 25px;
    cursor: pointer;
    border: none;
  }
 .right img{
    height: 450px;
 }
</style>