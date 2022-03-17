<template>
    <div class="box animate__animated animate__fadeInUp animate__faster">
      <div
        :class="{
          'justify-between' : showCopyRightInfo,
          'justify-end' : !showCopyRightInfo
        }"
        class="relative w-full flex px-4">
        <button
          v-if="showCopyRightInfo"
          @click="back"
          :disabled="canGoBack"
          :class="{ invisible: canGoBack }"
          class="text-xl text-gray-800 focus:outline-none"
        >
          <icon name="back" size="24" :color="colors.gray['800']"/>
        </button>
        <p
          v-if="showCopyRightInfo"
          class="text-xl font-black text-brand-main">
          {{ label }}
        </p>
        <button
          v-if="showCopyRightInfo"
          @click="() => emit('close-box')"
          class="text-xl text-gray-800 focus:outline-none cursor-pointer"
        >
          <icon name="close" size="14" :color="colors.gray['800']"/>
        </button>
      </div>

      <wizard />

      <div class="text-sm text-gray-800 select-none flex" v-if="showCopyRightInfo">
        <icon name="chat" size="20" :color="brandColors.graydark" class="mr-2"/>
          Widget by
        <span class="font-black ml-1"> feedbaker </span>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext, computed, ComputedRef } from 'vue'
import useStore from '../../hooks/store'
import { brand } from '../../../pallete'
import colors from 'tailwindcss/colors'
import Icon from '../../components/Icon/index.vue'
import Wizard from '../../components/Wizard/index.vue'
import useNavigation, { Navigation } from '../../hooks/navigation'

interface SetupReturn {
  emit: SetupContext['emit'],
  label: ComputedRef<string>;
  canGoBack: ComputedRef<boolean>;
  showCopyRightInfo: ComputedRef<boolean>;
  brandColors: Record<string, string>;
  colors: Record<string, string>;
  back: Navigation['back']
}

export default defineComponent({
  components: { Icon, Wizard },
  emits: ['close-box'],
  setup (_, { emit }: SetupContext): SetupReturn {
    const store = useStore()
    const { back } = useNavigation()

    const label = computed<string>(() => {
      if (store.feedbackType === 'ISSUE') {
        return 'Reporte um problema'
      }

      if (store.feedbackType === 'IDEA') {
        return 'Nos fale sua ideia'
      }

      if (store.feedbackType === 'OTHER') {
        return 'Abra a sua mente'
      }

      return 'O que você tem em mente?'
    })

    const canGoBack = computed<boolean>(() => {
      return store.currentComponent === 'SelectFeedbackType'
    })

    const showCopyRightInfo = computed<boolean>(() => {
      return store.currentComponent !== 'Success' && store.currentComponent !== 'Error'
    })

    return {
      emit,
      label,
      canGoBack,
      showCopyRightInfo,
      brandColors: brand,
      colors,
      back
    }
  }
})
</script>

<style lang="postcss" scoped>
    .box {
        @apply fixed z-50 bottom-0 right-0 mr-4 mb-4 py-3 px-5 rounded-xl shadow-xl
            bg-white flex flex-col items-center select-none;
        width: 400px;
    }
</style>
