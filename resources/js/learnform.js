import axios from 'axios';

class Errors {
    constructor() {
        this.errors = {}
    }
    get(field) {
        if (this.errors[field]) {
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
        this.errors = new Errors();
    }

    data() {
        // Here we will determine: What data will go as payload in request

        // const formvalues = {name: this.name, description: this.description};
        // return formvalues;

        // Another Way.
        // const data = Object.assign({}, this);
        //     delete data.originalData;
        //     delete data.errors;

        // Another Way
        let data = {};
        for (let property in this.originalData) {
            data[property] = this[property];
        }

        return data;
    }

    submit(requestType, url) {
        // This has been done to return response back onSubmit method. 
        return new Promise((resolve, reject) => {
            axios[requestType](url, this.data())
                .then(response => {
                    this.onSuccess(response);
                    resolve(response);
                }).catch(error => {
                    this.onFail(error);
                    reject(error);
                });
        });
    }

    postRequest(url) {
      return this.submit('post', url);
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
            const request = this.form.postRequest('/post/store');
            request.then(response => {
                console.log(response);
                this.sumittingAnimation = false;
            }).catch(error => {
                console.log(error.response);
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
