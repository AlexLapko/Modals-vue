<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">

        <button class="btn btnPrimary" @click="modalFirst = true">Show first modal</button>
        <button class="btn btnPrimary" @click="modalSecond = true">Show modal with form</button>
        <button class="btn btnPrimary" @click="modalValidate = true">Show modal with form + validation</button>

        <!-- First modal -->
        <FirstModal v-show="modalFirst" @close="modalFirst = false"/>

        <!-- Second modal -->
        <Second-modal v-show="modalSecond" @close="modalSecond = false"/>

        <!-- Modal with validate -->
        <ModalValidate v-show="modalValidate" @close="modalValidate = false"/>

      </div>
    </section>
  </div>
</template>

<script>
import Modal from "../components/UI/Modal"
import FirstModal from '../components/Modals/FirstModal'
import SecondModal from '../components/Modals/SecondModal'
import ModalValidate from "../components/Modals/ModalValidate"

export default {
  components: { Modal, FirstModal, SecondModal, ModalValidate },

  data() {
    return {
      modalFirst: false,
      modalSecond: false,
      modalValidate: false,
    }
  },
}
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    justify-content: space-between;
  }
</style>