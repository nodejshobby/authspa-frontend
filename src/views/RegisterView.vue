<template>
    <div class="container">
        <div class="row justify-content-center align-items-center mt-5">
            <div class="col-10 col-md-8 col-lg-6 mx-auto bg-light rounded p-4">
                <h2 class="mb-3 text-center">Fill in this form</h2>
                <form>
                    <div class="alert alert-success" v-if="successMessage">{{ successMessage }}</div>

                    <div class="mb-3">
                        <label for="Name" class="form-label">Email address</label>
                        <input v-model="form.name" type="text" class="form-control" id="name" placeholder="Name">
                        <span class="text-danger" v-if="errors.name">{{ errors.name[0] }}</span>
                    </div>
                    <div class="mb-3">
                        <label for="Email" class="form-label">Email address</label>
                        <input v-model="form.email" type="email" class="form-control" id="email" placeholder="Email">
                        <span class="text-danger" v-if="errors.email">{{ errors.email[0] }}</span>
                    </div>
                    <div class="mb-3">
                        <label for="Password" class="form-label">Password</label>
                        <input v-model="form.password" type="password" class="form-control" id="password" placeholder="Password">
                        <span class="text-danger" v-if="errors.password">{{ errors.password[0] }}</span>
                    </div>
                     <div class="mb-3">
                        <label for="password_confirmation" class="form-label">Confirm Password</label>
                        <input v-model="form.password_confirmation" type="password" class="form-control" id="password_confirmation" placeholder="Re-enter Password">
                    </div>
                    <div class="text-center">
                        <button @click.prevent="register" type="submit" class="btn btn-primary py-3 px-4">Register</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import User from '../apis/User';
export default {
    name: "RegisterView",
    data(){
        return {
            form: {
                "name": "",
                "email": "",
                "password": "",
                "password_confirmation": ""
            },
            errors: [],
            successMessage: '',
        }
    },

    methods: {
        register(){
            User.register(this.form).then((response)=>{
                if(response.status === 201){
                    this.$router.push({name: "Login" })
                }
            }).catch((error)=>{
                if(error.response.status === 422){
                    this.errors = error.response.data.errors
                }
            })
        }
    }
}
</script>

<style>

</style>