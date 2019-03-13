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
    clear(field) {
        if (field) {
            delete this.errors[field];
            return;
        }
        this.errors = {};
    }
    any() {
        return Object.keys(this.errors).length > 0;
    }
}

class Form {
    constructor(data) {
        this.originalData = data;
        for (let field in data) {
            this[field] = data[field]
        }
        this.errors= new Errors();
    }

    data() {
        // Here we will determine: What data will go as payload
        // const formvalues = {name: this.name, description: this.description};
        // return formvalues;

        // Another Way.
        const data = Object.assign({}, this);
            delete data.originalData;
            delete data.errors;
        return data;
    }

    submit(requestType, url) {
        const that = this;
        const request = axios[requestType](url, this.data())
            .then(response => {
                this.onSuccess(response);
                return 'success';
            }).catch(error => {
                this.onFail(error);
                return 'failed';
        });
        return request;
    }

    onSuccess(response) {
        this.reset();
        this.errors.clear();
    }

    onFail(error) {
        this.errors.record(error.response.data.errors);
    }

    reset() {
        for (let field in this.originalData) {
            this[field] = '';
        }
    }
}


const learnfrom = new Vue({
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
            // Need to think about this. As form submit method is inside a Form class.
            // So if I want to set an animation while submitting should I go like this ???
            const request = this.form.submit('post', '/post/store');
            request.then(response => {
                console.log(response);
                this.sumittingAnimation = false;
            }).catch(error => {
                console.log(error);
                this.sumittingAnimation = false;
            })
        },
    },
    created() {
       axios.get('/posts')
           .then((response) => {
               this.allposts = response.data;
           }).catch((error) => {
               // console.log('All Post Error', error.response);
       });
    }
});