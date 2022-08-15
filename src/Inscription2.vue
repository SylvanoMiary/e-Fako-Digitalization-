<script>
    import Titleinscription from './components/Titleinscription.vue'

    export default{
        data(){
            return{
                days:["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                hours: ["05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00"]
            }
        }, 
        components:{
            Titleinscription
        }
    }
</script>

<template>
    <div class="wrapper">
        <Titleinscription title="STEP 2" intro="Choose the schedule that suits you"/>
        <div class="content-schedules">
            <div class="choose">
                <fieldset class="days">
                    <legend>Days</legend>
                    <table>
                        <tr v-for="day in days">
                            <td><input type="checkbox" name="day" :id="day"></td>
                            <td><label :for="day">{{day}}</label></td>
                        </tr>
                    </table>
                </fieldset>
                <fieldset class="hours">
                    <legend>Hours</legend>
                    <table>
                        <tr v-for="hour in hours">
                            <td><input type="checkbox" name="hour" :id="hour"></td>
                            <td><label :for="hour">{{hour}} am</label></td>
                        </tr>
                    </table>
                </fieldset>
            </div>
            <div>
                <button>SUBMIT</button>
            </div>
        </div>
    </div>
</template>

<style>
    .days, .hours{
        display: inline-block;
        margin: 10px 100px 10px 100px;
        padding: 0;
    }
    .content-schedules{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .content-schedules input, .content-schedules tr ,.content-schedules td , .content-schedules table{
        padding: 0;
        margin: 0;
    }
    .content-schedules input{
        height: 20px;
    }
    .content-schedules fieldset{
        padding: 30px;
        text-align: left;
        width: 100px;
    }
    .content-schedules button{
        width: 150px;
        height: 40px;
        cursor: pointer;
        font-size: 18px;
        border-radius: 50px;
    }
    .choose{
        margin-bottom: 30px;
    }
</style>