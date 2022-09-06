<script>
import HeaderComponent from '../Components/HeaderComponent.vue';
import SidebarComponent from '../Components/SidebarComponent.vue';
import TableComponent from '../Components/TableComponent.vue';

export default {
    data() {

    },
    components: {
        HeaderComponent,
        SidebarComponent,
        TableComponent,
    }
}
</script>


<template>
    <div class="customerWrapper">
        <div class="headerComponent">
            <HeaderComponent />
        </div>
        <div class="container">
            <SidebarComponent />
            <TableComponent />
        </div>
    </div>

</template>

<style>
.contenair {
    display: flex;
}
</style>