<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">

        <button class="btn btnPrimary" @click="auth.login = true">Login</button>
        <button class="btn btnPrimary" @click="auth.registration = true">Registration</button>

        <!-- Authorization modal -->
        <Login 
          v-show="auth.login" 
          @close="auth.login = false" 
          @togglePopup="auth.login = false, auth.registration = true"
        />

        <!-- Registration modal -->
        <Registration 
          v-show="auth.registration" 
          @close="auth.registration = false" 
          @togglePopup="auth.login = true, auth.registration = false"
        />

      </div>
    </section>
  </div>
</template>

<script>
import Modal from "../components/UI/Modal"
import Login from '../components/AuthModals/Login'
import Registration from "../components/AuthModals/Registration"

export default {
  components: { Modal, Login, Registration },

  data() {
    return {
      auth: {
        login:false, 
        registration: false
      }
      // authorization: false,
      // registration: false,
    }
  },
}
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    justify-content: flex-end;
    & .btn {
      margin-left: 20px;
    }
  }
</style>