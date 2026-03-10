<script setup>

defineProps({
  posts: Array
})

</script>


<template>

<div class="guestbook__list">

  <v-card
    v-for="post in posts"
    :key="post.id"
    class="guestbook__item"
  >

    <h3 class="guestbook__title">
      {{ post.title }}
    </h3>

    <div class="text-caption guestbook__caption">
      <span>{{ post.createdAt?.toDate().toLocaleDateString() }}</span>
      <span>|</span>
      <span>작성자 : {{ post.author }}</span>
    </div>

    <p class="text-base guestbook__content">
      {{ post.content }}
    </p>

  </v-card>

</div>

</template>