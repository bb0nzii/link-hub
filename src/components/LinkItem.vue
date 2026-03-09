<script setup>

defineProps({
  name: String,
  icon: String,
  url: String
})

</script>


<template>

<a
  :href="url"
  target="_blank"
  class="link-item"
>

  <div class="link-item__icon">
    <v-icon :icon="icon" size="32"/>
  </div>

  <span class="text-base">
    {{ name }}
  </span>

</a>

</template>