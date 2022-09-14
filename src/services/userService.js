import {api} from '@/services/api.js';

export default {
    register (credentials) {
        console.log("register called");
        return api ('http://localhost:4200', {
            methode: 'POST',
            body: JSON.stringify(credentials)
        })
    },

    user() {
        return 'api/user';
    }
}