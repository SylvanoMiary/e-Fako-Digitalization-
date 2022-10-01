<template>
    <div class="content-table">
        <table>
            <thead>
                <td v-for="column in line">{{ column }}</td>
            </thead>
            <tbody>
                <tr v-if="st == 'staff'" v-for="pers in data">
                    <td>{{pers.regNumber}}</td>
                    <td>{{pers.firstName}}</td>
                    <td>{{pers.lastName}}</td>
                    <td>{{pers.address}}</td>
                </tr>
                <tr v-if="st == 'task'" v-for="task in data">
                    <td></td>
                    <td>{{task.taskOwn}}</td>
                    <td></td>
                    <td>{{task.timeRecov}}</td>
                    <td >
                        <ul>
                            <li v-for="it in task.dayRecov">{{it}}</li>
                        </ul>
                    </td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                
            }
        },

        props:['line', 'data', 'st']    
    }
</script>

<style>
.content-table table {
    border: 1px solid black;
    margin-left: 25px;
}

.content-table thead {
    background-color: #D9D9D9;
    border: none;
}

.content-table tbody tr {
    height: 400px;
}

.content-table {
    margin-right: 100px;
}

.content-table td {
    width: 150px;
    border: none;
}
</style>