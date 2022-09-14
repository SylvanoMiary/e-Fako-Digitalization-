<template>
    <div class="container-done">
         <font-awesome-icon icon="check" class="icon-check"/>
         <div class="container_title">
            <h1>Success</h1>
            <p>We will send you a confimation mail for the appointement .</p>
        </div>
         <img class="img2" src="../assets/okey.jpg" alt="okey">
    </div>
</template>

<style>
    .container-done{
        display: flex;
        flex-direction: column;
        justify-content: center;  
        align-items: center;   
        margin-top: 25px;         
    } 
    .icon-check{
        margin: 0;
        padding: 0;
        display: inline-flex;
        height: 150px;
        width: 200px;
        color: rgb(99, 231, 46);
    }
    .img2{
        width: auto;
        height: auto;
        padding: auto;
        max-width: 400px;
        min-width: 100px;
        max-height: 800px;
        min-height: 200px;
    }

    .container_title h1, p{
        padding: 0;
        margin: 0;
    }
</style>