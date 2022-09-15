<template>
    <div class="content-table">
        <table>
            <thead>
                <td v-for="column in line">{{ column }}</td>
            </thead>
            <tbody>
                <tr>

                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: ['line']
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