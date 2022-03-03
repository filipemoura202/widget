<template>
   <div
      @click="() => emit('open-box')"
      class="
          fixed z-50 rounded-full shadow-xl font-regular text-xl text-brand-gray
          bottom-0 right-0 mr-4 mb-4 py-3 px-5 bg-brand-main flex items-center space-between cursor-pointer select-none
          animate__animated animate__fadeInUp animate__faster
          ">
          <Icon name="chat" class="mr-2" size="27"/>
          <span class="font-black text-white text-xl">  Deixe um feedback </span>
    </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from 'vue'
import Icon from '../../components/Icon/index.vue'

interface SetupReturn {
    emit: SetupContext['emit'];
}

export default defineComponent({
  components: { Icon },
  emits: ['open-box'],
  setup (_, { emit }: SetupContext): SetupReturn {
    return {
      emit
    }
  }
})
</script>
