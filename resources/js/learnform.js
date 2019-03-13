import axios from 'axios';
import Form from './Form'

window.Vue = require('vue'); // aikhane aita ki lagbe?
window.axios = axios; // aitao ki lagbe??

new Vue({
    el: '#learnform',
    data() {
        return {
            intro: 'Learn Form In Vue js',
            sumittingAnimation: false,
            allposts: [],
            form: new Form({
                name: '',
                description: '',
            }),
        }
    },
    methods: {
        onSubmit() {
            this.sumittingAnimation = true;
            alert('Submitting');
            const request = this.form.postRequest('/post/store');
            request.then(response => {
                this.getAllPosts(); 
                this.sumittingAnimation = false;
            }).catch(error => {
                this.sumittingAnimation = false;
            })
        },
        getAllPosts() {
            axios.get('/posts')
                .then((response) => {
                    this.allposts = response.data;
                }).catch((error) => {
                    // console.log('All Post Error', error.response);
                });
        }
    },
    created() {
        console.log('CCC--------reated');
    },
    mounted() {
        this.getAllPosts(); 
        console.log('MMM--------ounted');

    },
    updated() {
        console.log('UUUU--------pdated');
    }
});
