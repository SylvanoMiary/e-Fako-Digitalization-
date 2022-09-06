<script>
export default {
    data() {
        return {
            thead: ["Id", "Name", "Address", "Hour", "Days", "Validate/Postpone"]
        }
    }
}
</script>

<template>
    <div class="content-table">
        <table>
            <thead>
                <td v-for="title in thead">
                    {{ title }}
                </td>
            </thead>
            <div class="tbContent">
                <tbody>

                </tbody>
            </div>
        </table>
    </div>

</template>

<style>
.content-table {
    margin: 0;
    display: inline-flex;
    margin-right: 100px;
    margin-top: 60px;
    float: right;
}

.content-table {
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

table td {
    width: 140px;
    border: none;
}

thead {
    background-color: gray;
}

tbody {
    height: 400px;
}
</style>