<template>
    <div class="contaner">
      <div class="row justisfy-content-center mt-5">
          <div class="col-10 col-md-8 col-lg-6 text-center bg-light mx-auto p-4">
            <h3 class="mb-3">User Details</h3>
            <p  class="text-primary"><span class="text-dark">Name: </span> {{ user.name }}  <br> <span class="text-dark">Email:</span> {{ user.email }}</p>
            <a href="/logout" v-if="authenticated" @click.prevent="logout" class="btn btn-primary"><i class="fa fa-sign-out"></i>Logout</a>
          </div>
      </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import User from '../apis/User'
export default {
    name: "DashboardView",

    computed: {
      ...mapState('auth',['user','authenticated']),
    },

    methods: {
      ...mapMutations('auth',['SET_AUTH','SET_USER']),
      logout(){
         User.logout().then(()=>{
            this.SET_USER({})
            this.SET_AUTH(false)
            this.$router.push({ name: "Login"})
        }).catch((error)=>{
        console.log(error)
      })
      }
    }
}
</script>

<style>

</style>