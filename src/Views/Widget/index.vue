<template>
    <teleport to='body'>
       <component
            @open-box="handleOpenBox"
            @close-box="handleCloseBox"
            :is='state.component'
        />
    </teleport>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import StandBy from './StandBy.vue'
import Box from './Box.vue'

type State ={
    component: string;
}

interface SetupReturn {
    state: State;
    handleOpenBox: () => void;
    handleCloseBox: () => void;
}

export default defineComponent({
  components: { StandBy, Box },
  setup (): SetupReturn {
    const state = reactive<State>({
      component: 'StandBy'
    })

    function handleOpenBox (): void {
      state.component = 'Box'
    }

    function handleCloseBox (): void {
      state.component = 'StandBy'
    }

    return {
      state,
      handleOpenBox,
      handleCloseBox
    }
  }

})
</script>
