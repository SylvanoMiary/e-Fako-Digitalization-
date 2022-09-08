<template>
    <div class="message">
        <p>Sorry, you must choose an other schedule, no time is free on the date you have chosen previously.
            Please reconnect to the application and start complete the step 1 and 2. Thank you</p>
        
        <div class="action">
            <a href="#">Link to the application</a>
            <button><font-awesome-icon icon="envelope" class="icon"/><span>Send e-mail</span></button>
        </div>
    </div>
    
</template>

<style>
.message .action{
    margin-top: 50px;
}
.message p{
    width: 300px;
    text-align: left;
}
.message button{
    margin-top: 20px;
}
</style>