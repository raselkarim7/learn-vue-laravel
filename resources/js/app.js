require('./bootstrap');
window.Vue = require('vue');

import axios from 'axios';
import notification from './components/Notification.vue';

const app = new Vue({
    el: '#app',
    components: {
      notification
    },
    data: {
      skills: [],
    },
    mounted() {
        axios.get('skills', {
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => {
            this.skills = response.data;
        })
    }
});

