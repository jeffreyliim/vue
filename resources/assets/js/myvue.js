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

Vue.component('test-vue', {
        data() {
            return {
                a: 1,
                change: true,
                text: 'this is a test'
            }
        },
        computed: {
            testFunction()
            {
                return this.a = 'asd';
            }
        },
        created() {

        },
        methods: {
            click(){
                this.change = !this.change;
            }
        },
        template: `
            <div>
{{ testFunction }}
<button type="button" @click="click" class="btn btn-success">submit</button>
<p v-show="change" v-text="text"></p>
</div>
        `
    }
);

Vue.component('users', {
    props: ['u'],

    data(){
        return {
            users: '',
            userID: this.u.id,
            showButton: false,
        }
    },

    created(){
        this.getInitialUserData();
        this.listenUserData();
    },

    methods: {
        getInitialUserData(){
            axios.get('/user')
                .then(response => {
                    this.users = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
            /*
             *
             *  this helps to change the data on the front-end in real time without the need of refreshing
             *  *** not the best way ***
             *  best way is to use laravel broadcast
             *
             * */
            // setTimeout(this.getUserData, 1);

        },

        listenUserData(){

            Echo.channel(`users-was-changed`)
                .listen('UsersWasChanged', data => {
                    console.log(data);
                    this.users = data.user;
                    // shows the spin button
                    this.showButton = true;

                    //hides the spin button after 3s
                    setTimeout(function () {
                        this.showButton = false;
                        console.log('refresh button is hidden');
                        this.showAlert();
                    }.bind(this), 2000)
                });
        },
        showAlert(){
            $.notify({
                // options
                icon: 'glyphicon glyphicon-warning-sign',
                title: 'Bootstrap notify',
                // this.users.slice(-1) gets the latest item in the users array
                message: this.users.slice(-1)[0].name + ' has joined the chatroom',
                url: 'https://github.com/mouse0270/bootstrap-notify',
                target: '_blank'
            },{
                // settings
                element: 'body',
                position: null,
                type: "info",
                allow_dismiss: true,
                newest_on_top: false,
                showProgressbar: false,
                placement: {
                    from: "top",
                    align: "right"
                },
                offset: 20,
                spacing: 10,
                z_index: 1031,
                delay: 10000,
                timer: 1000,
                url_target: '_blank',
                mouse_over: null,
                animate: {
                    enter: 'animated fadeInDown',
                    exit: 'animated fadeOutUp'
                },
                onShow: null,
                onShown: null,
                onClose: null,
                onClosed: null,
                icon_type: 'class',
                template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
                '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
                '<span data-notify="icon"></span> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
            });

        }

    },
    template: `
<div>
         <p v-for="user in users">{{ user.name }}</p>
         <button type="button" v-show="showButton" class="btn btn-success">Loading... <i class="fa fa-refresh fa-spin"></i></button>
        </div>
   `

});

const app = new Vue({
    el: '#app',
});
