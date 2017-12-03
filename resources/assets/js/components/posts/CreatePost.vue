
<template>
<div>
         <div class="panel panel-default">
                     <div class="panel-heading">Submit a Post</div>
                     <div class="panel-body">
                     <div class="alert alert-success" v-show="successAlertShow">
                     Success! Post has been submitted
         </div>
                         <form method="post" @submit.prevent="createPost()">
                          <div class="form-group" v-bind:class="{'has-error': countryHasError }">
                                 <label for="exampleInputEmail1">Add Country</label>
                                 <select name="country" v-model="country_dd" class="form-control">
                         <option selected value="Singapore">Singapore</option>
         </select>
                                 <small id="post" v-show="countryHasError" class="form-text text-muted text-danger">{{validation.get('country')}}
                                 </small>
                             </div>

                             <div class="form-group" v-bind:class="{'has-error': postContentHasError }">
                                 <label for="exampleInputEmail1">Add post</label>
                                 <textarea v-model="post_tb" class="form-control" name="post_content" id="post" cols="30" rows="10"></textarea>
                                 <small id="post" v-show="postContentHasError" class="form-text text-muted text-danger" >{{validation.get('post_content')}}
                                 </small>
                             </div>
                             <button type="submit" class="btn btn-primary" @click="onSubmitRefreshSpinHandler()">Submit <i v-show="showSpinButton" class="fa fa-refresh fa-spin fa-lg fa-fw"></i></button>
                         </form>
                     </div>
                 </div>
</div>
</template>

<script>

/**
 *  create post
 */
class createPostErrors {
    constructor() {
        this.errors = {} // {} accepts keys and values its a definition of an object
    }

    get(field) {
        if (this.errors[field]) {
            return this.errors[field][0];
        }
    }


    record(errors) {
        this.errors = errors
    }
}
    export default {

            data(){
                   return {
                       successAlertShow: false,
                       showSpinButton: false,
                       validation: new createPostErrors(), //create object to avoid explicitly using the validation data object in the template e.g. this.validation.errors.post_content[0]
                       countryHasError: false,
                       postContentHasError: false,
                       post_tb: '',
                       country_dd: ''
                   }
               },
               methods: {
                   createPost(){
                       let postData = {
                           post_content: this.post_tb,
                           country: this.country_dd
                       };
                       axios.post('/posts', postData)
                           .then(response => {
                               this.successAlertShow = true;
                               this.showSpinButton = false;
                               this.country_dd = '';
                               this.post_tb = '';
                               this.countryHasError = false;
                               this.postContentHasError = false;
                               return response.data

                           }).catch(error => {
                           this.successAlertShow = false;
                           this.showSpinButton = false;
                           this.validation.record(error.response.data.errors);
                           //check if validation country is activated
                           if (this.validation.get('country')) {
                               this.countryHasError = true;
                           } else {
                               this.countryHasError = false;
                           }
                           //check if validation post content is activated
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
               }
    }
</script>