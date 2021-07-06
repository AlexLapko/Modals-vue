<template>
  <Modal
    title="Registration"
    @close="resetModal"
  >
    <div slot="body">
      <form @submit.prevent="onSubmit">
        <div class="form-item" :class="{ 'error-input' : $v.email.$error }">
          <label>Email:</label>
          <p class="error-text" v-if="!$v.email.required">Field is required!</p>
          <p class="error-text" v-if="!$v.email.email">Email is not correct!</p>
          <input v-model="email" :class="{ error : $v.email.$error }" @change="$v.email.$touch()"> 
        </div>
        <div class="form-item" :class="{ 'error-input' : $v.password.$error }">
          <label>Password:</label>
          <p class="error-text" v-if="!$v.password.required">Field is required!</p>
          <p class="error-text" v-if="!$v.password.minLength">Password must have at least {{ $v.password.$params.minLength.min }} letters!</p>
          <input type="password" v-model="password" :class="{ error : $v.password.$error }" @change="$v.password.$touch()"> 
        </div>
        <div class="form-item" :class="{ 'error-input' : $v.repeatPassword.$error }">
          <label>Repeat password:</label>
          <p class="error-text" v-if="!$v.repeatPassword.sameAsPassword">Passwords must be identical.</p>
          <input type="password" v-model="repeatPassword" :class="{ error : $v.repeatPassword.$error }" @change="$v.password.$touch()"> 
        </div>
        <div>
          <a class="link" @click="$emit('togglePopup')">I already have an account</a>
        </div>
        <button class="btn btnPrimary">Register!</button>
      </form>
    </div>
  </Modal>
</template>

<script>
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'
import Modal from "../UI/Modal"

export default {
  components: { Modal },
  data() {
    return {
      email: '',
      password: '',
      repeatPassword: ''
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    },
    repeatPassword: {
      sameAsPassword: sameAs('password')
    }
  },
  methods: {
    onSubmit () {
      this.$v.$touch()
      if(!this.$v.$invalid) {
        const user = {
          email: this.email,
          password: this.password
        }
        console.log(user)

        this.resetModal()
      }
    },
    resetModal() {
      this.email = ''
      this.password = ''
      this.repeatPassword = ''
      this.$v.$reset()
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
.form-item {
  & .error-text {
    display: none;
    margin-bottom: 8px;
    font-size: 13px;
    color: #de4040;
  }
  &.error-input {
    & .error-text {
      display: block;
    }
  }
}
input.error {
  border-color: #de4040;
}
</style>