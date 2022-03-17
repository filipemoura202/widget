<template>
   <div class="flex flex-col items-center justify-center w-full my-5">
     <icon
        name="attention"
        size="42"
        :color="pallete.danger"
     />

      <p class="text-xl font-black text-center w-full mt-2">
        Obrigado! Recebemos seu feedback.
      </p>

      <div class="flex justify-center items-center w-full mt-2">
        <button
          @click="goBack"
          class="flex flex-col rounded-full text-sm font-regular
                 bg-brand-graydark focus:outline-none py-2 px-5 cursor-pointer
          ">
          Envie mais feedbacks
        </button>
      </div>
   </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import pallete from '../../../pallete'
import Icon from '../Icon/index.vue'
import { resetStore } from '../../store'

interface SetupReturn {
  goBack(): void;
  pallete: Record<string, string>;
}

export default defineComponent({
  components: { Icon },
  setup (): SetupReturn {
    function goBack (): void{
      resetStore()
    }

    return {
      goBack,
      pallete: pallete.brand
    }
  }
})
</script>
tomato
