<script>
import Home from './Home .vue'
import Inscription1 from './Inscription1.vue'
import Inscription2 from './Inscription2.vue'
import Apprendre from './Apprendre.vue'
import NotFound from './NotFound.vue'

const routes = {
  '/': Home,
  '/inscription_step1': Inscription1,
  '/inscription_step2': Inscription2,
  '/apprendre' : Apprendre
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
    }
}
</script>

<template>
  <div class="Container-App">
    <component :is="currentView"/>
  </div>
</template>
