<script>
import HeaderComponent from '../Components/HeaderComponent.vue';
import SidebarComponent from '../Components/SidebarComponent.vue';

export default {
    data() {
        return {
            thead: ["ID", "Name"]
        }
    },
    components: {
        HeaderComponent,
        SidebarComponent,
    }
}
</script>

<template>
    <div class="component1">
        <HeaderComponent />
    </div>
    <div class="component2">
        <SidebarComponent />
        <div class="tableinformation">
            <table>
                <thead>
                    <td v-for="title in thead">{{ title }}</td>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
        <div class="formulaire">
            <fieldset>
                <legend>Icon</legend>
                <div class="info">
                    <input type="text" value="BERNARDIN">
                    <button>Edit</button>
                    <input type="text" value="Miary Sylvano">
                    <button>Edit</button>
                    <input type="mail" value="miarycoco@gmail.com">
                    <button>Edit</button>
                    <input type="text" value="khksjasygjkbe">
                    <button>Edit</button>
                    <input type="text" value="034*******">
                    <button>Edit</button>
                </div>
            </fieldset>
        </div>
    </div>
</template>

<style>
.component2 {
    display: flex;
}

.tableinformation,
.formulaire {
    display: inline-flex;
    float: right;
    margin-top: 65px;
    margin-left: 100px;
}

.tableinformation {
    overflow-y: scroll;
    width: auto;
    height: auto;
}

table,
td {
    border: 1px solid black;
    margin: 0;
    padding: 0;
}

thead {
    background-color: grey;
}

td {
    border: none;
    width: 200px;
}

tbody {
    height: 450px;
}

input {
    border: none;
    margin-top: 30px;
    margin-left: 20px;
}

.info {
    display: flex;
    flex-direction: column;
}

.info button {
    margin-left: 50px;
    margin-right: 50px;
}

fieldset {
    width: 250px;
    border: 1px solid;
}
</style>