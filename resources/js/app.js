require('./bootstrap');
window.Vue = require('vue');

// import axios from 'axios';
// import notification from './components/Notification.vue';
let store = { 
    user: {
        name: 'John Done'
    }
}

new Vue({
    el: '#one',
    data: {
        store
    }
})

new Vue({
    el: '#two',
    data: {
        store
    }
})