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

    data(){
        return {
            users: '',

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
             *  best way is to use laravel broadcast with pusher
             *
             * */
            // setTimeout(this.getInitialUserData, 1);

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
            /*
             * http://izitoast.marcelodolce.com/
             * */

            iziToast.success({
                title: this.users.slice(-1)[0].name,
                message: ' has joined the chatroom',
                position: 'topRight'
            });

        }

    },
    template: `
<div>
         <p v-for="user in users">{{ user.name }}</p>
         <button type="button" v-show="showButton" class="btn btn-success">Loading... <i class="fa fa-refresh fa-spin"></i></button>
         <button type="button" class="btn btn-info" @click="showAlert">Show izitoast alert</button>
        </div>
   `

});

class questionData {
    constructor(data) {
        return data;
    }
}


Vue.component('quiz', {
    props: ['questions_answers', 'quiz_'],

    data(){
        return {
            isDisabled1: false,
            isDisabled2: false,
            isDisabled3: false,
            isDisabled4: false,
            questions: new questionData(this.questions_answers),
            quiz: this.quiz_,
            screenLoader: false,
            qIndex: 0,
            baseURL: 'localhost',
            securityScheme: 'http://',
            userAccessToken: '',
            config: {
                grant_type: 'password',
                client_id: 1,
                client_secret: 'jHnXBdlUbWB6CnVwijqL8A4YnAjkHPVQAxY9RUsj',
                username: 'jlportfolio28858@gmail.com',
                password: '288588'
            },
            selectedAnswer: '',
        }
    },

    created(){
        axios.post(this.securityScheme + this.baseURL + '/api/oauth/token', this.config)
            .then(response => {
                let USER_TOKEN = response.data.access_token;
                let TOKEN_TYPE = response.data.token_type; //bearer
                this.userAccessToken = {
                    headers: {
                        authorization: TOKEN_TYPE + ' ' + USER_TOKEN,
                    }
                };
                console.log(this.userAccessToken);

            }).catch(error => {
            console.log(error);
        });

    },

    mounted(){
        this.createTimer();
    },

    methods: {
        createTimer(){
            let time = 10;
            let clock = $('.your-clock').FlipClock(time, {
                countdown: true,
                clockFace: 'MinuteCounter',
                callbacks: {
                    stop: function () {
                        //submit the answer
                        let request = {
                            answer_id: this.selectedAnswer
                        };
                        console.log(this.selectedAnswer);

                        axios.post(`/api/quiz/${this.quiz.id}/questions/${this.qIndex + 1}/attempt`, request, this.userAccessToken)
                            .then(response => {
                                console.log(response.data.data[0]);
                            }).catch(error => {
                            console.log('question has been attempted');
                        })
                        // clock.setTime(time + 2);
                        // clock.start();
                    }
                }
            });
        },
        answered1(answer){
            this.isDisabled2 = true;
            this.isDisabled3 = true;
            this.isDisabled4 = true;
            //answer == 1
            this.selectedAnswer = this.questions[this.qIndex].answers[0].id;
        },
        answered2(answer){
            this.isDisabled1 = true;
            this.isDisabled3 = true;
            this.isDisabled4 = true;
            //answer == 2
            this.selectedAnswer = this.questions[this.qIndex].answers[0].id;
        },
        answered3(answer){
            this.isDisabled1 = true;
            this.isDisabled2 = true;
            this.isDisabled4 = true;
            //answer == 3
            this.selectedAnswer = this.questions[this.qIndex].answers[0].id;
        },
        answered4(answer){
            this.isDisabled1 = true;
            this.isDisabled2 = true;
            this.isDisabled3 = true;
            //answer == 4
            this.selectedAnswer = this.questions[this.qIndex].answers[0].id;
        },


    },


    template: `
<div>
        
        <div class="col-sm-12 question-container">
            <div class="card card-custom">
                <div class="card-header">
                 <div class="col-sm-1">
                    <p>Q{{ qIndex + 1 }}) </p>
                 </div>
                 <p> {{ this.questions[qIndex].name}}</p>
</div>
                <div class="card-body">
                    <div class="form-group" v-for="(answer, key) in questions[qIndex].answers">
                        <div class="col-sm-1">
                            <p>{{ key + 1 }}) </p>
                        </div>
                        <p>{{ answer.name}}</p>
                    </div>

                </div>
            </div>
        </div>
    
        <div class="col-sm-6 answer-container" v-show="this.questions[qIndex].answers[0]">
            <button type="button" :disabled="isDisabled1" @click="answered1(1)" class="btn btn-primary btn-xl">1) {{ this.questions[qIndex].answers[0] ? this.questions[qIndex].answers[0].name : ''  }}</button>
        </div>
    
    
        <div class="col-sm-6 answer-container" v-show="this.questions[qIndex].answers[1]">
            <button type="button" :disabled="isDisabled2" @click="answered2(2)" class="btn btn-primary btn-xl">2) {{ this.questions[qIndex].answers[1] ? this.questions[qIndex].answers[1].name : '' }}</button>
        </div>
        
        <div class="col-sm-6 answer-container" v-show="this.questions[qIndex].answers[2]">
            <button type="button" :disabled="isDisabled3" @click="answered3(3)" class="btn btn-primary btn-xl">3) {{ this.questions[qIndex].answers[2] ? this.questions[qIndex].answers[2].name : ''}}</button>
        </div>
        
        <div class="col-sm-6 answer-container" v-show="this.questions[qIndex].answers[3]">
            <button type="button" :disabled="isDisabled4" @click="answered4(4)" class="btn btn-primary btn-xl">4) {{ this.questions[qIndex].answers[3] ? this.questions[qIndex].answers[3].name : '' }}</button>
        </div>
      </div>
      
   `
});

const app = new Vue({
    el: '#app',
});
