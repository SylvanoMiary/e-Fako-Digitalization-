<template>
    <div>
        <table>
            <tr v-for="value in user">
                <td style="text-align: left;
                    padding-right: 30px;">{{value}}</td>
                <td><font-awesome-icon icon="edit" class="icon"/></td>
            </tr>
        </table>
    </div>
    <div class="action">
        <button><font-awesome-icon icon="envelope" class="icon"/><span>Send e-mail</span></button>
        <button><font-awesome-icon icon="save" class="icon"/><span>Save Changes</span></button>
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
.content-client td{
    padding-bottom: 10px;
}
.action{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}
.action button{
    margin-top: 10px;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
}
.action span{
    margin-left: 10px;
}
.content-client .icon{
    height: 15px;
    margin: 0;
}
</style>