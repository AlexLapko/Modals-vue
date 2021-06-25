<template>
  <Modal
    title="Modal fith form + Validate"
    @close="$emit('close')"
  >
    <div slot="body">
      <form @submit.prevent="onSubmit">
        <div class="form-item" :class="{ 'error-input' : $v.name.$error }">
          <label>Name:</label>
          <p class="error-text" v-if="!$v.name.required">Field is required!</p>
          <p class="error-text" v-if="!$v.name.minLength">Name must have at least {{ $v.name.$params.minLength.min }}</p>
          <input v-model="name" :class="{ error : $v.name.$error }" @change="$v.name.$touch()"> 
        </div>
        <div class="form-item" :class="{ 'error-input' : $v.email.$error }">
          <label>Email:</label>
          <p class="error-text" v-if="!$v.email.required">Field is required!</p>
          <p class="error-text" v-if="!$v.email.email">Email is not correct!</p>
          <input v-model="email" :class="{ error : $v.email.$error }" @change="$v.email.$touch()"> 
        </div>
        <button class="btn btnPrimary">Submit!</button>
      </form>
    </div>
  </Modal>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators'

import Modal from "./UI/Modal"

export default {
  components: { Modal },
  data() {
    return {
      name: '',
      email: '',
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    email: {
      required,
      email
    }
  },
  methods: {
    onSubmit () {
      this.$v.$touch()
      if(!this.$v.$invalid) {
        const user = {
          name: this.name,
          email: this.email
        }
        console.log(user)

        this.name = ''
        this.email = ''
        this.$v.$reset()
        this.$emit('close')
      }
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