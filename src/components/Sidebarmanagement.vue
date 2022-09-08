<script>
   export default{
      data(){
         return{

         }
      },
      methods:{
         submit(){
            this.$emit('submit')
         }
      }
   }
</script>

<template>
    <div class="sidebar">
            <ul>
                <li @click="$emit('clickHandler', 0)">Customer request</li>
                <li @click="$emit('clickHandler', 1)">Customer information</li>
                <li @click="$emit('clickHandler', 2)">Confirmation e-mail</li>
            </ul>
        </div>
</template>

<style>
.sidebar{
    background: rgba(217, 217, 217, 0.68);
    width: 400px;
 }
 .sidebar ul{
    margin: 0px;
    padding: 0px;
    list-style-type: none;
    display: inline-flex;
    flex-direction: column;
    font-family: 'Times New Roman';
    font-style: normal;
    font-size: 25px;
    align-items: center;
    width: 400px;
 }
  
 .sidebar ul li{
    background-color: #D3930A ;
    color: aliceblue;
    padding: 20px;
    text-align: center;
    margin: 20px 0;
    width: 300px;
    cursor: default;
 }

 .sidebar ul li:hover{
    width: 90%;
    border-radius: 0px;
 }
</style>
