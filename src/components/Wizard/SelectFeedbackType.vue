<template>
  <div class="flex justify-between w-full my-5">
    <button
      @click="handleSelect('ISSUE')"
      class="flex flex-col w-28 rounded-xl hover:bg-gray-200 bg-brand-gray
      items-center justify-center p-5 focus:outline-none cursor-pointer
    ">
      <div class="w-12">
        <img class="w-full" src="../../assets/images/issue.png" alt="problema">
      </div>
      <p class="text-gray-800 font-medium mt-1"> Problema </p>
    </button>

    <button
      @click="handleSelect('IDEA')"
      class="flex flex-col w-28 rounded-xl hover:bg-gray-200 bg-brand-gray
      items-center justify-center p-5 focus:outline-none cursor-pointer
    ">
      <div class="w-12">
        <img class="w-full" src="../../assets/images/lamp.png" alt="problema">
      </div>
      <p class="text-gray-800 font-medium mt-1"> Ideia </p>
    </button>

    <button
      @click="handleSelect('OTHER')"
      class="flex flex-col w-28 rounded-xl hover:bg-gray-200 bg-brand-gray
      items-center justify-center p-5 focus:outline-none cursor-pointer
    ">
      <div class="w-12">
        <img class="w-full" src="../../assets/images/fire.png" alt="problema">
      </div>
      <p class="text-gray-800 font-medium mt-1"> Outro </p>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from 'vue'

interface SetupReturn {
  handleSelect(type: string): void;
}

export default defineComponent({
  setup (_, { emit }: SetupContext):SetupReturn {
    function handleSelect (type: string): void{
      emit('select-feedback-type', type)
      emit('next')
    }

    return {
      handleSelect
    }
  }
})
</script>
