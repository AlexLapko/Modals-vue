<template>
  <Modal title="log in" @close="resetModal">
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
        <div>
          <a class="link" @click="$emit('togglePopup')">I need an account</a>
        </div>
        <button class="btn btnPrimary">log in!</button>
      </form>
    </div>
  </Modal>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators'
import Modal from "../UI/Modal"

export default {
  components: { Modal },
  data() {
    return {
      email: '',
      password: '',
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

        this.email = ''
        this.password = ''
        this.$v.$reset()
        this.$emit('close')
      }
    },
    resetModal() {
      this.email = ''
      this.password = ''
      this.$v.$reset()
      this.$emit('close')
    }
  }
}
</script>
