import axios from "axios";
import Errors from './Errors'
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

export default Form;