<script setup>

defineProps({
  activeTab: String
})

const emit = defineEmits(["changeTab"])

const setTab = (tab) => {
  emit("changeTab", tab)
}

</script>


<template>

<section class="linkhub__tabs">

  <button
    class="tab-btn"
    :class="{ active: activeTab === 'links' }"
    @click="setTab('links')"
  >
    Links
  </button>

  <button
    class="tab-btn"
    :class="{ active: activeTab === 'guestbook' }"
    @click="setTab('guestbook')"
  >
    Guest Book
  </button>

</section>

</template>