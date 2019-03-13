require('./bootstrap');
window.Vue = require('vue');

// import axios from 'axios';
// import notification from './components/Notification.vue';

Vue.component('cupon',{
    props: ['code'], 
    template: `<input :value="code" @input="updateCode($event.target.value)" />`,
    methods: {
        updateCode() {
            console.log('Update Code . . .'); 
        }
    }
});

new Vue({
    el: '#app',
    data: {
        cupon: 'FREEBIE'
    }
})

