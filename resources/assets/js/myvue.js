/**
 * Created by Jeffrey on 22/11/17.
 */
let axios = require('../../../bower_components/axios/dist/axios');

Vue.component(
    'passport-clients',
    require('./components/passport/Clients.vue')
);

Vue.component(
    'passport-authorized-clients',
    require('./components/passport/AuthorizedClients.vue')
);

Vue.component(
    'passport-personal-access-tokens',
    require('./components/passport/PersonalAccessTokens.vue')
);

/**
 * oauth authentication for client
 * <axios></axios>
 */

Vue.component('axios', {
    data(){
        return {
            userAccessToken: '',
            usernameTB: '',
            passwordTB: '',
            securityScheme: 'http://',
            baseURL: 'localhost'
        }
    },
    methods: {
        getUser(){
            axios.get(this.securityScheme + this.baseURL + '/api/user', this.userAccessToken).then(response => {
                // If request is good...
                console.log(response.data)
            })
                .catch((error) => {
                    console.log('error' + error);
                });
        },
        authenticate(){
            //using the laravelapi on homestead
            const data = {
                grant_type: 'password',
                client_id: 3, //default laravel passport password client
                client_secret: 'MbZuMKglyVtxdHFO5VgXJdb7ozqoXxF4rLbQeRHW',
                username: this.usernameTB,
                password: this.passwordTB,
            };
            /**
             * create user access token
             */
            axios.post(this.securityScheme + this.baseURL + '/api/oauth/token', data)
                .then(response => {
                    let USER_TOKEN = response.data.access_token;
                    let TOKEN_TYPE = response.data.token_type; //bearer
                    this.userAccessToken = {
                        headers: {

                            authorization: TOKEN_TYPE + ' ' + USER_TOKEN,

                        }
                    };
                    /**
                     * get user with access token
                     */
                    this.getUser();

                }).catch(error => {
                console.log(error);
            });

        },

    },

    template: `
<div>
<form method="post" @submit.prevent="authenticate()">
<input type="text" v-model="usernameTB" placeholder="username">
<input type="text" v-model="passwordTB" placeholder="password">
<button type="submit">Login</button>
</form>
</div>
                           `
});

Vue.component('issues', {
    data(){
        return {
            issueSubmitted: false,
            issueNotSubmitted: false,
            inputIssue: '',
            securityScheme: 'http://',
            baseURL: 'laravelapi.dev'
        }
    },
    methods: {
        submitIssues(){
            submitIssueData = {
                issue: this.inputIssue,
                user_id: 1
            };
            axios.post(this.securityScheme + this.baseURL + '/api/issues', submitIssueData)
                .then(response => {
                    this.issueSubmitted = true;
                    this.issueNotSubmitted = false;
                    console.log(response)
                })
                .catch(error => {
                    this.issueNotSubmitted = true;
                    this.issueSubmitted = false;
                    console.log(error)
                });
        }
    },
    template: `
            <div> <!--- always start with div -->
                <input v-model="inputIssue" type="text">
                <button @click="submitIssues()">Post</button>
                <div v-show="issueSubmitted" class="alert alert-success" role="alert">
                     Post is submitted
                </div>
                <div v-show="issueNotSubmitted" class="alert alert-danger" role="alert">
                     Something went wrong
                </div>
            </div>
           
            
            
        `
});


Vue.component('update-post', require('./components/posts/UpdatePost.vue'));


Vue.component('create-post', require('./components/posts/CreatePost.vue'));

const app = new Vue({
    el: '#app',
});