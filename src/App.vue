<template>
  <div class="wrapper">

    <div class="wrapper-content">
      <section>
        <div class="container">

          <button class="btn btnPrimary" @click="modalFirst = true">Show first modal</button>
          <button class="btn btnPrimary" @click="modalSecond.show = true">Show modal with form</button>
          <button class="btn btnPrimary" @click="modalValidate = true">Show modal with form + validation</button>

          <!-- First modal -->
          <Modal
            title="First modal"
            v-show="modalFirst"
            @close="modalFirst = false"
          >
            <div slot="body">
              <p>Text text text</p>
              <button class="btn btnPrimary" @click="modalFirst = false">Well done!</button>
            </div>
          </Modal>

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

  </div>
</template>

<script>
import Modal from "./components/UI/Modal"
import ModalValidate from "./components/ModalValidate"

export default {
  components: { Modal, ModalValidate },

  data() {
    return {
      modalFirst: false,
      modalSecond: {
        show: false,
        name: '',
        email: ''
      },
      modalValidate: false
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
