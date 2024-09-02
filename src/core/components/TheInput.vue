<script setup lang="ts">
const { modelValue } = defineModels<{
  modelValue: string
}>()
</script>

<template>
  <InputText id="input" v-model="modelValue" v-bind="$attrs" />
</template>
