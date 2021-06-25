<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">

        <button class="btn btnPrimary" @click="modalSecond.show = true">Show modal with form</button>
        <button class="btn btnPrimary" @click="modalValidate = true">Show modal with form + validation</button>

        <!-- Second modal -->
        <Modal
          title="Modal fith form"
          v-show="modalSecond.show"
          @close="modalSecond.show = false"
        >
          <div slot="body">
            <form @submit.prevent="submitSecondForm">
              <label>Name:</label>
              <input type="text" required v-model="modalSecond.name">
              <label>Email:</label>
              <input type="email" required v-model="modalSecond.email">
              <button class="btn btnPrimary">Submit!</button>
            </form>
          </div>
        </Modal>

        <!-- Modal with validate -->
        <ModalValidate v-show="modalValidate" @close="modalValidate = false"/>

      </div>
    </section>
  </div>
</template>

<script>
import Modal from "../components/UI/Modal"
import ModalValidate from "../components/Modals/ModalValidate"

export default {
  components: { Modal, ModalValidate },

  data() {
    return {
      modalSecond: {
        show: false,
        name: '',
        email: ''
      },
      modalValidate: false,
    }
  },
  methods: {
    submitSecondForm() {
      console.log({
        name: this.modalSecond.name,
        email: this.modalSecond.email,
      });
      this.modalSecond.name = ''
      this.modalSecond.email = ''
      this.modalSecond.show = false
    },
  }
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