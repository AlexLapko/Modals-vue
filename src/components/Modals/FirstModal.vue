<template>
  <Modal title="First modal" @close="$emit('close')">
    <div slot="body">
      <p>Text text text</p>
      <button class="btn btnPrimary" @click="$emit('close')">Well done!</button>
    </div>
  </Modal>
</template>

<script>
import Modal from "../UI/Modal"

export default {
  components: { Modal },  
}
</script>