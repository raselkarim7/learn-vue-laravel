import axios from 'axios';

class Errors {
    constructor() {
        this.errors = {}
    }
    get(field) {
        if(this.errors[field]) {
            return this.errors[field][0];
        }
    }
    record(errors) {
        this.errors = errors;
    }
    clear(filed) {
        delete this.errors[filed];
    }
    any() {
        return Object.keys(this.errors).length > 0;
        console.log('Anyyyyyyyyyyyyyyy ', Object.keys(this.errors));
        // Object.keys()
    }
}
const learnfrom = new Vue({
   el: '#learnform',
   data() {
       return {
           intro: 'Learn Form In Vue js',
           name: '',
           description: '',
           errors: new Errors()
       }
   },
    methods: {
        onSubmit() {
            alert('Submitting');
            const fromvalues = {name: this.name, description: this.description};
            axios.post('/post/store', fromvalues)
                .then(response => {
                    console.log('Success Responseeee :: ', response);
                }).catch(error => {
                    this.errors.record(error.response.data.errors);
                });
        }
    }
});