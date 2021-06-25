<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">

        <button class="btn btnPrimary" @click="authorization = true">Authorization</button>
        <button class="btn btnPrimary" @click="registration = true">Registration</button>

        <!-- Authorization modal -->
        <AuthorizationModal 
          v-show="authorization" 
          @close="authorization = false" 
          @togglePopup="authorization = false, registration = true"
        />

        <!-- Registration modal -->
        <RegistrationModal 
          v-show="registration" 
          @close="registration = false" 
          @togglePopup="authorization = true, registration = false"
        />

      </div>
    </section>
  </div>
</template>

<script>
import Modal from "../components/UI/Modal"
import AuthorizationModal from '../components/AuthModals/AuthorizationModal'
import RegistrationModal from "../components/AuthModals/RegistrationModal"

export default {
  components: { Modal, AuthorizationModal, RegistrationModal },

  data() {
    return {
      authorization: false,
      registration: false,
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