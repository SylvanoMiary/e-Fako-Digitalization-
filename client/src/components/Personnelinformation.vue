<template>
    <div class="card">
        <h3>{{title}}</h3>
        <hr>
        <table>
            <tr v-for="line in table">
                <div>
                   <td>{{line.title}}</td>
                    <td><input type="text" :placeholder="line.value"></td> 
                </div>
            </tr>
        </table>
    </div>
    
</template>

<style>
    .card{
        margin-right: 100px;
        width: 350px;
        margin-top: 20px;
    }
    .card h3{
        text-align: left;
        margin: 0;
    }
    .card table{
        width: 350px;
    }
    .card input{
        border: none;
        text-align: right;
        margin: 0;
        padding: 0;
        width: 200px;
        height: 35px;
    }
    .card div{
        border-bottom: 2px solid #7c7c7c;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>

<script>
    export default{
        props:["table", "title"]
    }
</script>