<template>
    <component :is="name" v-bind="$props"/>
</template>

<script>
import Loading from './loading.vue'
import CrevronDown from './chevron-down.vue'
import Close from './close.vue'
import Copy from './copy.vue'
import Chat from './chat.vue'
import Back from './back.vue'
import Check from './check.vue'
import Attention from './attention.vue'

export default {
  components: {
    Loading,
    Close,
    Copy,
    CrevronDown,
    Back,
    Chat,
    Check,
    Attention
  },
  props: {
    name: { type: String, require: true }
  }
}
</script>

<style>

</style>
