<script setup>

defineProps({
  page:Number,
  pageCount:Number
})

const emit = defineEmits(["update:page"])

</script>

<template>

<div class="pagination">

  <v-pagination
    :length="pageCount"
    :model-value="page"
    @update:model-value="val => emit('update:page',val)"
    :total-visible="5"
  />

</div>

</template>



<style scoped>

.pagination{
  display:flex;
  justify-content:center;
}

</style>