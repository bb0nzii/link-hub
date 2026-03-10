<script setup>

import LinkItem from "@/components/LinkItem.vue"

const links = [
  {
    name: "포트폴리오 페이지 바로가기",
    icon: "mdi-web",
    url: "https://bb0nzii.github.io/bbonzi-portfolio/"
  },
  {
    name: "Github 바로가기",
    icon: "mdi-github",
    url: "https://github.com/bb0nzii"
  },
  {
    name: "Youtube 바로가기",
    icon: "mdi-youtube",
    url: "https://www.youtube.com/@660nzii"
  },
  {
    name: "Instagram 바로가기",
    icon: "mdi-instagram",
    url: "https://www.instagram.com/poplar159/"
  },
  {
    name: "Blog 바로가기(1)",
    icon: "mdi-post-outline",
    url: "https://blog.naver.com/poplar159"
  },
  {
    name: "Blog 바로가기(2)",
    icon: "mdi-post-outline",
    url: "https://blog.naver.com/ncu10086"
  }
]

</script>

<template>

<section class="linkhub__links">

  <LinkItem
    v-for="link in links"
    :key="link.name"
    :name="link.name"
    :icon="link.icon"
    :url="link.url"
  />

</section>

</template>