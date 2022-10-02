import { createApp } from 'vue'
import App from './App.vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faUser, faCheck, faAdd, faSearch, faEnvelope, faSave, faEdit} from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


library.add(faCircleUser, faUser, faKey, faArrowCircleRight, faCheck, faAdd, faSearch, faEnvelope, faSave, faEdit)


import './assets/main.css'

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
