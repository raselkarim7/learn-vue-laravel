
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
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
            // console.log('Response : ', response)
        })
    }
});

