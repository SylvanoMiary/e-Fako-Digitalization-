<script>
import Home from './Pages/Home.vue'
import Inscription1 from './Pages/Inscription1.vue'
import Inscription2 from './Pages/Inscription2.vue'
import NotFound from './Pages/NotFound.vue'
import Login from './Pages/Login.vue'
import Done from './Pages/Done.vue'
import Management from './Pages/Management.vue'

const routes = {
  '/': Home,
  '/inscription_step1': Inscription1,
  '/inscription_step2': Inscription2,
  '/done' : Done,
  '/admin' : Login,
  '/admin/management' : Management
}

export default{
    data() {
        return {
            currentPath: window.location.hash
        };
    },
    computed: {
        currentView() {
            return routes[this.currentPath.slice(1) || "/"] || NotFound;
        }
    },
    mounted() {
        window.addEventListener("hashchange", () => {
            this.currentPath = window.location.hash;
        });
    },
    components:{
        Management
    }
}
</script>

<template>
  <div class="Container-App">
    <component :is="currentView"/>
  </div>
</template>

<style>
    .Container-App{
        text-align: center;
    }
</style>
