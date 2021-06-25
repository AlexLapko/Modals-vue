<template>
  <Modal title="Modal fith form" @close="resetModal">
    <div slot="body">
      <form @submit.prevent="submitSecondForm">
        <label>Name:</label>
        <input type="text" required v-model="name">
        <label>Email:</label>
        <input type="email" required v-model="email">
        <button class="btn btnPrimary">Submit!</button>
      </form>
    </div>
  </Modal>
</template>

<script>
import Modal from "../UI/Modal"

export default {
  components: { Modal },
  data() {
    return {
      name: '',
      email: ''
    }
  },
  methods: {
    submitSecondForm() {
      console.log({
        name: this.name,
        email: this.email,
      });
      this.name = ''
      this.email = ''
      this.$emit('close')
    },
    resetModal() {
      this.name = ''
      this.email = ''
      this.$emit('close')
    }
  }
}
</script>