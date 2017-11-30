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

Vue.component('example', require('./components/Example.vue'));

/**
 *  <counter></counter>
 */
Vue.component('counter', {
    data: function () {
        return {
            counter: 0
        }
    },
    methods: {
        incrementCounter: function () {
            this.counter += 1;
            this.$emit('increment')
        }
    },
    template: `
                                           <button @click="incrementCounter()">@{{ counter }}</button>
                                               `
});

/**
 * <todo-item body="aasd"></todo-item>
 */

Vue.component('todo-item', {
    props: ['body'],
    template: `
                                         <li>@{{ body }} </li>
                                    `
});

/**
 * oauth authentication for client
 * <axios></axios>
 */

Vue.component('axios', {
    data(){
        return {
            user_access_token: null
        }
    },
    methods: {
        authenticate(){
            //using the laravelapi on homestead
            const data = {
                grant_type: 'password',
                // client_id: '3',
                // client_secret: '8f9jBpui5E3TXkBl4SU83cti2FT7SawAsDaLtEET',
                client_id: 2,
                client_secret: 'umf0xMJUgUFIXWulwQe2sIeaBoqhuXIhS6vJXHXb',
                username: document.getElementById('username').value,
                password: document.getElementById('password').value,
            };

            /**
             * create user access token
             */
            let securityScheme = 'http://';
            let baseURL = 'localhost';
            axios.post(securityScheme + baseURL + '/api/oauth/token', data)
                .then(response => {
                    let USER_TOKEN = response.data.access_token;
                    let TOKEN_TYPE = response.data.token_type; //bearer

                    user_token = {
                        headers: {

                            authorization: TOKEN_TYPE + ' ' + USER_TOKEN,

                        }
                    };
                    this.user_access_token = user_token;
                    /**
                     * get user with access token
                     */
                }).catch((error) => {
                console.log('error ' + error);
            });

            console.log(this.user_access_token);

            axios.get(securityScheme + baseURL + '/api/issues', this.user_access_token).then(response => {
                // If request is good...
                console.log(response.data);
            })
                .catch((error) => {
                    console.log('error' + error);
                });

        }
    },

    template: `
<div>
<input type="text" id="username" placeholder="username">
<input type="text" id="password" placeholder="password">
<button @click="authenticate()">Login</button>
</div>
                           `
});

Vue.component('posts', {
    data(){
        return {
            postSubmitted: false,
            postNotSubmitted: false
        }
    },
    methods: {
        submitPost(){
            submitPostData = {
                post_content: document.getElementById('inputPost').value
            };
            axios.post('/api/posts', submitPostData)
                .then(response => {
                    this.postSubmitted = true;
                    this.postNotSubmitted = false;
                    console.log(response.data)
                })
                .catch(error => {
                    this.postNotSubmitted = true;
                    this.postSubmitted = false;
                    console.log(error)
                })
        }
    },
    template: `
            <div> <!--- always start with div -->
                <input id="inputPost" type="text">
                <button @click="submitPost()">Post</button>
                <div v-show="postSubmitted" class="alert alert-success" role="alert">
                     Post is submitted
                </div>
                <div v-show="postNotSubmitted" class="alert alert-danger" role="alert">
                     Something went wrong
                </div>
            </div>
           
            
            
        `
});

Vue.component('update-post', {
    props: ['post','user'],
    data(){
        return {
            isVisible: true,
        }
    },
    methods: {
        show(){
            this.isVisible = !this.isVisible;
           console.log(this.postDetails)

        }
    },
    template: `

        <div>
        
        <div class="panel panel-default">
            <div class="panel-heading">Panel heading without title</div>
            <div class="panel-body">
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Post</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>{{ this.user.name }}</td>
                        <td>{{this.post.post_content}}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
            <button type="button" class="btn btn-primary" @click="show()">Toggle Edit</button>
            <transition name="fade">
                <form v-show="!isVisible" method="submit" action="">
                    <div class="panel panel-default">
  <div class="panel-heading">Update form</div>
  <div class="panel-body">
   <div class="form-group">
   <label for="post_content">Your post</label>
   <textarea class="form-control" name="post_content" id="post_content" cols="30" rows="10"></textarea>
   
</div>
   <div class="form-group">
   <button class="btn btn-success" type="submit">Submit</button>
</div>
  </div>
  
</div>
                </form>
            </transition>

            
         </div>
   `
});
const app = new Vue({
    el: '#app',
});