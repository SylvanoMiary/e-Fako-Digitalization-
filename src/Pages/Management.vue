<template>
    <Headermanagement/>
    <div class="body-management">
        <Sidebarmanagement @click-handler='callback' :nav="sidebar"/>
        <Tablemanagement :line="changeComponent"/>
        <AboutClient v-show="isTrue" :n="n"/>
    </div>
</template>

<style>
    .body-management{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 80px;
    }
</style>

<script>
    import Headermanagement from '../components/Headermanagement.vue'
    import Sidebarmanagement from '../components/Sidebarmanagement.vue'
    import Tablemanagement from '../components/Tablemanagement.vue';
    import AboutClient from '../components/AboutClient.vue';
    export default{
        components:{
            Headermanagement,
            Sidebarmanagement,
            Tablemanagement,
            AboutClient
        }, 
        data(){
            return{
                table:[       
                    ["ID", "Name", "Address", "Hour", "Days", "Validate/Postpone"],
                    ["ID", "Name"],
                    ["ID", "Name"],
                ],
                changeComponent: ["ID", "Name", "Address", "Hour", "Days", "Validate/Postpone"],
                isTrue: false,
                n: "",
                sidebar : ["Customer request", "Customer information", "Reconfirmation e-mail"]
            }
        },


        methods:{
            callback: function(n){
                this.changeComponent = this.table[n]
                this.isTrue = n
                this.n = n
            }
        }
    }
</script>