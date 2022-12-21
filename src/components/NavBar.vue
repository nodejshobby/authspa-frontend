<template>
  <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">AuthSpa</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a v-if="!authenticated" class="nav-link" aria-current="page" href="/login">Login</a>
          </li>
          <li class="nav-item">
            <a v-if="!authenticated" class="nav-link" href="/register">Register</a>
          </li>
          <li class="nav-item">
            <a v-if="authenticated" class="nav-link" href="/dashboard">Dashboard</a>
          </li>
          <li class="nav-item">
            <a v-if="authenticated" class="nav-link" @click.prevent="logout"  href="/logout">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import User from '../apis/User'
import { mapState, mapMutations}  from 'vuex'
export default {
  name: "NavBar",
  computed: {
    ...mapState('auth',['authenticated'])
  },
  methods: {
    ...mapMutations('auth', ['SET_AUTH','SET_USER']),
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