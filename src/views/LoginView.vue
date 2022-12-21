<template>
  <div class="container">
    <div class="row justify-content-center align-items-center mt-5">
        <div class="col-10 col-md-8 col-lg-6 mx-auto bg-light rounded p-4">
            <h2 class="text-center mb-3">Enter your details</h2>
            <form>
                <div class="alert alert-danger" v-if="errorMessage">{{ errorMessage }}</div>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input v-model="form.email" type="email" class="form-control" id="email" placeholder="Email" aria-describedby="emailHelp">
                    <span class="text-danger" v-if="errors.email">{{errors.email[0] }}</span>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input v-model="form.password" type="password" class="form-control" id="password" placeholder="Password">
                    <span class="text-danger" v-if="errors.password">{{errors.password[0] }}</span>
                </div>
                <div class="text-center">
                    <button @click.prevent="login" type="submit" class="btn btn-primary text-center py-3 px-4">Login</button>
                </div>
            </form>
        </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import User from '../apis/User'
export default {
    name: "LoginView",

    data(){
        return {
            form: {
                "email": '',
                "password": ''
            },
            errors: [],
            errorMessage: ''
        }
    },

    computed: {
        ...mapState('auth',['user','authenticated'])
    },

    methods: {
        ...mapActions('auth', ['updateUser','setAuth']),
        login(){
            User.login(this.form).then((response)=>{
                if(response.status === 200){
                    this.setAuth(true)
                    this.updateUser()
                    this.$router.push({name: "Dashboard"})
                }
            }).catch((error)=>{
                if(error.response.status === 401){
                    this.errorMessage = "Username or password incorrect!"
                }
            })
        }
    }


}
</script>

<style>
    
</style>