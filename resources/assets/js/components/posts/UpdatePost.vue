<template>
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
                        <td>{{ user.name }}</td>
                        <td>{{ post.post_content }}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="form-group">
            <button type="button" class="btn btn-primary" @click="show()">Toggle Edit</button>
            </div>
            <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                <form v-show="!isVisible" @submit.prevent="updatePost()">
                    <input name="_method" type="hidden" value="PATCH">
                    <div class="panel panel-default">
                      <div class="panel-heading">Update form</div>
                      <div class="panel-body">
                        <div class="form-group">
                            <div v-show="successAlertShow" class="alert alert-success" role="alert">
                          Success! Submitted
                            </div>

                        </div>
                        <div class="form-group">
                            <label for="country"></label>
                            <select name="country" id="country" class="form-control" v-model="selectCountry" @change="getCountry" >
                                <option v-for="country in countries" :value="country.country" > {{ country.country }}</option>
                            </select>
                            <img :src="flag" alt="" class="img-responsive">
                        </div>
                        <div class="form-group" v-bind:class="{'has-error':postContentHasError }" >
                           <label for="post_content">Your post</label>
                           <textarea v-model="post_contentTB" class="form-control" name="post_content" id="post_content" rows="10"></textarea>
                           <span class="help-block" v-show="postContentHasError"> {{ this.validation.get('post_content') }}</span>
                        </div>
                        <div class="form-group">
                            <button class="btn btn-success" type="submit" @click="onSubmitRefreshSpinHandler">Submit <i v-show="showSpinButton" class="fa fa-refresh fa-spin fa-lg fa-fw"></i></button>
                        </div>
                      </div>
                    </div>
                </form>
            </transition>


         </div>
</template>

<script>


class UpdatePostError {
    constructor() {
        this.errors = {}
    }

    get(field) {
        if (this.errors[field]) {
            return this.errors[field][0]
        }
    }

    record(field) {
        this.errors = field;
    }
}

    export default {
          // data is passed here
            props: ['post', 'user'],

            data(){
                return {
                    isVisible: true,
                    successAlertShow: false,
                    postContentHasError: false,
                    validation: new UpdatePostError(),
                    countries: '',
                    selectCountry: '',
                    flag: '',
                    post_contentTB: '',
                    showSpinButton:''

                }

            },
            mounted(){
                this.countries = [
                    {
                        country: 'singapore',
                        flag: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/2.9.0/flags/1x1/sg.svg'
                    },
                    {
                        country: 'china',
                        flag: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/2.9.0/flags/1x1/cn.svg'
                    },
                    {
                        country: 'korea',
                        flag: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/2.9.0/flags/1x1/kr.svg'
                    },
                ];
            },
            methods: {
                getCountry(){
                    let index = this.countries.map(function (e) { // mapping the countries array object and retrieve the 'country name' property. Refer to above for countries data structure
                        return e.country;
                    }).indexOf(this.selectCountry); //getting the index of v-model=selectCountry

                    this.flag = this.countries[index].flag; // getting the flag data using the index for the array

                },
                show(){
                    this.isVisible = !this.isVisible; //for showing of update form
                },
                updatePost(){
                    let updateData = {
                        post_content: this.post_contentTB //this data is used to pass to the axios request
                    };
                    axios.patch(`/posts/${this.post.id}`, updateData)
                        .then(response => {
                            this.successAlertShow = true;
                            this.postContentHasError = false;
                            this.post_contentTB = '';
                            this.showSpinButton = false;
                            return response;

                        }).catch(error => {
                        this.successAlertShow = false;
                        this.validation.record(error.response.data.errors);
                        this.showSpinButton = false;
                        if (this.validation.get('post_content')) {
                            this.postContentHasError = true;
                        } else {
                            this.postContentHasError = false;
                        }
                    })
                },
                onSubmitRefreshSpinHandler(){
                    this.showSpinButton = true;
                }

            },
    }

</script>