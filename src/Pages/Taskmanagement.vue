<template>
    <Headermanagement />
    <div class="body-task">
        <Sidebarmanagement @click-handler='callback' :nav="sidebar"/>
        <Tablemanagement :line="changeComponent" :data="tasks" :st="task"/>
    </div>
</template>

<script>
    import axios from 'axios';
    import Headermanagement from '../components/Headermanagement.vue';
    import Sidebarmanagement from '../components/Sidebarmanagement.vue';
    import Tablemanagement from '../components/Tablemanagement.vue';
    export default{
        components:{
            Headermanagement,
            Sidebarmanagement,
            Tablemanagement
},
        data(){
            return{
                sidebar: ["Critical Task", "Next Task", "Missed Task"],
                table: [
                    ["TASK ID", "CUSTOMER ID", "ADDRESS", "HOUR", "DAY", "GROUP ID", "DONE"],
                    ["TASK ID", "CUSTOMER ID", "ADDRESS", "HOUR", "DAY", "GROUP ID"],
                    ["TASK ID", "CUSTOMER ID", "ADDRESS", "HOUR", "DAY", "GROUP ID", "DELETE/POSTPONE"]
                ],
                changeComponent: ["TASK ID", "CUSTOMER ID", "ADDRESS", "HOUR", "DAY", "GROUP ID", "DONE"],

                //temporary table for task list
                tasks : null,
                task : "task"
            }
        },

        mounted() {
            axios.get("http://localhost:4200/api/task")
                .then( response => {
                    this.tasks = response.data;
                    console.log(`tasks: ${response.data}`);
                })
                .catch( error => {
                    console.log(error)
                })
        },

        methods:{
            callback: function(n){
                this.changeComponent = this.table[n]
                this.isTrue = n
            }
        }
    }
</script>

<style>
    .body-task{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 80px;
    }
</style>