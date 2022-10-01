<template>
    <Headermanagement />
    <div class="body-personnel">
        <h2>COLLABORATOR</h2>
        <div class="container-information">
            <div class="profil-personnel">
                <div class="profil">

                </div>
                <p>Registration number</p>
                <p>01C498</p>
            </div>
            <div class="content-information">
                <div class="information">
                    <div class="general-information">
                        <Personnelinformation title="GENERAL INFORMATION" :table="identity" />
                    </div>
                    <div class="detail">
                        <Personnelinformation title="EMPLOYEE SITUATION" :table="situation" />
                        <Personnelinformation title="PROFESSIONAL EXPERIENCES" :table="experience" />
                    </div>
                </div>
                <div class="salary">
                    <h3>SALARY</h3>
                    <table>
                        <thead>
                            <td v-for="td in table ">{{ td }}</td>
                        </thead>
                        <tbody>
                            <tr></tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <font-awesome-icon icon="add" class="icon1" />
        </div>
        <div class="search">
            <div>
                <input type="text" placeholder="Name, ID,...">
            </div>
            <div>
                <font-awesome-icon icon="search" class="icon" />
            </div>
        </div>
        <div class="tablesearch">
<<<<<<< HEAD
            <Tablemanagement :line="secondtable" :data="staffs" :st="pers"/>
=======
            <Tablemanagement :line="secondtable" />
>>>>>>> refs/remotes/origin/main
        </div>
    </div>
</template>

<style>
.tablesearch {
    margin: 50px 0 0 270px;
    padding-bottom: 50px;
}

.tablesearch thead {
    background-color: rgb(28, 205, 236);
}

.search {
    margin: 50px 0 0 380px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 25px;
    width: 450px;
    height: 50px;
    padding: 0;
    box-shadow: 0px 4px 16px 6px rgba(0, 0, 0, 0.25);
}

.search input {
    margin: 0 0 0 50px;
    border: none;
    width: 300px;
}

.search .icon {
    height: 30px;
}

.profil {
    border: 2px solid black;
    height: 200px;
    width: 200px;
    border-radius: 50%;
    margin-bottom: 50px;
    background: #FFFFFF;
    border-radius: 50%;
    box-shadow: 3px 3px 18px rgb(0 0 0 / 34%);
    border-color: #EBE9E9;
}

.profil-personnel {
    display: flex;
    flex-direction: column;
    margin: 40px 50px 0;
}

.body-personnel {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;

}

.body-personnel h2 {
    text-align: center;
    margin: 20px 0 0 0;
    color: rgb(158, 21, 21);
    font-family: 'Comic Sans MS';
    background-color: #D3930A;
}

.container-information {
    display: flex;
    border: 1px solid black;
    background-color: rgb(245, 252, 252);
    box-shadow: 0px 4px 16px 6px rgba(0, 0, 0, 0.25);
}

.container-information .icon1 {
    position: relative;
    top: 480px;
    right: 50px;
    padding: 20px;
    color: rgb(255, 255, 255);
    background-color: rgb(70, 236, 48);
    border-radius: 50%;
    height: 25px;
}

.content-information {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.information {
    display: flex;
}

.salary {
    margin: 20px 0;
}

.salary h3 {
    text-align: left;
    margin: 0;
    color: rgb(158, 21, 21);
    font-size: 25px;
    font-family: 'Comic Sans MS';
}

.salary table {
    border: 1px solid black;
}

.salary table thead {
    background-color: rgb(28, 205, 236);
}

.salary td {
    width: 180px;
}

.salary tbody {
    height: 20px;
}

p {
    font-family: 'Times New Roman';
    font-size: large;
    color: #D3930A;
}

.information td {
    font-size: 17px;
}
</style>

<script>
<<<<<<< HEAD
    import Headermanagement from '../components/Headermanagement.vue';
    import Personnelinformation from '../components/Personnelinformation.vue';
    import Tablemanagement from '../components/Tablemanagement.vue';
    import axios from 'axios';

    export default{
        components:{
            Headermanagement,
            Personnelinformation,
            Tablemanagement
        },
        data(){
            return{
                identity: [
                    {title: "Name", value:"ABDOUL"},
                    {title: "Firstname", value:"RAZAK"},
                    {title: "Date of birth", value:"dd/mm/yyyy"},
                    {title: "Place of birth", value:"Anywhere"},
                    {title: "Family situation", value:"Divorced"},
                    {title: "Address", value:"Ambohipo"},
                    {title: "ID CARD", value:"**********"},
                    {title: "Nationality", value:"Malagasy"},
                ],
                situation: [
                    {title: "Hiring Date", value:"dd/mm/yyyy"},
                    {title: "Position held", value:"Driver"},
                    {title: "Driver license", value:"AA’BD"},
                    {title: "End of service", value:"dd/mm/yyyy"},
                ],
                experience: [
                    {title: "Study level", value:""},
                    {title: "Training & diploma", value:""},
                    {title: "Expriences", value:""},
                ],
                table: ["Start Date", "End Date", "Raw wage", "Grant"],
                secondtable: ["PERSONNEL ID", "NAME", "FIRST-NAME", "ADDRESS"],

                //temporary table for personnal list
                staffs: null,
                pers: "staff"
            }
        },

        mounted() {
            axios.get("http://localhost:4200/api/staff")
                .then( response => {
                    this.staffs = response.data;
                    console.log(response.data);
                })
                .catch( error => {
                    console.log(error)
                }) 

=======
import Headermanagement from '../components/Headermanagement.vue';
import Personnelinformation from '../components/Personnelinformation.vue';
import Tablemanagement from '../components/Tablemanagement.vue';

export default {
    components: {
        Headermanagement,
        Personnelinformation,
        Tablemanagement
    },
    data() {
        return {
            identity: [
                { title: "Name", value: "ABDOUL" },
                { title: "Firstname", value: "RAZAK" },
                { title: "Date of birth", value: "dd/mm/yyyy" },
                { title: "Place of birth", value: "Anywhere" },
                { title: "Family situation", value: "Divorced" },
                { title: "Address", value: "Ambohipo" },
                { title: "ID CARD", value: "**********" },
                { title: "Nationality", value: "Malagasy" },
            ],
            situation: [
                { title: "Hiring Date", value: "dd/mm/yyyy" },
                { title: "Position held", value: "Driver" },
                { title: "Driver license", value: "AA’BD" },
                { title: "End of service", value: "dd/mm/yyyy" },
            ],
            experience: [
                { title: "Study level", value: "" },
                { title: "Training & diploma", value: "" },
                { title: "Expriences", value: "" },
            ],
            table: ["Start Date", "End Date", "Raw wage", "Grant"],
            secondtable: ["PERSONNEL ID", "NAME", "FIRST-NAME", "ADDRESS"]
>>>>>>> refs/remotes/origin/main
        }
    }
}
</script>


