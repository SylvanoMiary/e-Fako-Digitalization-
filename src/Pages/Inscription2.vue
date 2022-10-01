<script>
    import Titleinscription from '../components/Titleinscription.vue';
    import axios from 'axios'

    export default{
        data(){
            return{
                days:["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                hours: ["05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00"],
                user : {},
                dayChecked: [],
                timeRecov: ""
            }
        },

        components:{
            Titleinscription
        },

        props: ['state'],

        created() {
            this.taskOwn = this.state.f_Name;
            this.user = this.state;
        },

        methods: {
            
            async submitHandler(){

                let dayRecov = [...this.dayChecked];
                let sent = true;
                console.log(dayRecov);
                let taskBody= {taskOwn: this.taskOwn, dayRecov: dayRecov, timeRecov: this.timeRecov};
                console.log(taskBody)
                alert(`out`);
                
                await axios.post("http://localhost:4200/api/task", taskBody)
                    .then( () => {
                        console.log(`post sent: task`);
                    })
                    .catch(error => {
                        sent = false;
                        console.log(error);
                    });

/*                 await axios.post("http://localhost:4200/api/user", this.user)
                    .then( () => {
                        console.log(`post sent: user`);
                    })
                    .catch(error => {
                        sent = false;
                        console.log(error);
                    });    */

                sent? window.open("#/done" ,'Done'): console.log("ERROR");
                
            },

            oncheckDay(e){
                this.dayChecked.push(e.target.value);
            },

            oncheckHour(e){
                this.timeRecov = e.target.value;
            }
        }
    }
</script>

<template>
    <div class="wrapper-schedule">
        <Titleinscription title="STEP 2" intro="Choose the schedule that suits you"/>
        <div class="schedules">
            <div class="choose">
                <form action="">
                    <fieldset class="days">
                        <legend>Days</legend>
                        <table>
                            <tr v-for="day in days">
                                <td><input type="checkbox" @change="oncheckDay" :value="day" name="day" :id="day"></td>
                                <td><label :for="day">{{day}}</label></td>
                            </tr>
                        </table>
                    </fieldset>
                    <fieldset class="hours">
                        <legend>Hours</legend>
                        <table>
                            <tr v-for="hour in hours">
                                <td><input type="checkbox" @change="oncheckHour" :value="hour" name="hour" :id="hour"></td>
                                <td><label :for="hour">{{hour}} am</label></td>
                            </tr>
                        </table>
                    </fieldset>
                    <div>
                        <button @click="submitHandler">SUBMIT</button>
                    </div>
                </form>     
            </div>
        </div>
    </div>
</template>

<style>
    .wrapper-schedule{
        background-image: url("../assets/Step2_image.png");
        background-size: 1000px 800px;
        background-position: 0px -90px;
        background-repeat: no-repeat;
        height: 600px;
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
    }
    .days, .hours{
        display: inline-block;
        margin: 10px 100px 10px 100px;
        padding: 0;
    }
    .schedules{
        margin-top: 50px;
        backdrop-filter: blur(10px);
    }
    .schedules input, .schedules tr ,.schedules td , .schedules table{
        padding: 0;
        margin: 0;
    }
    .schedules input{
        height: 20px;
    }
    .schedules fieldset{
        padding: 30px;
        text-align: left;
        width: 100px;
    }
    .schedules button{
        width: 150px;
        height: 40px;
        cursor: pointer;
        font-size: 18px;
        border-radius: 50px;
        margin-top: 50px;
    }
    .choose{
        margin-bottom: 30px;
    }
</style>