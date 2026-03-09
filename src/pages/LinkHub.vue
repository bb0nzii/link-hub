<script setup>
  import Links from '../components/Links.vue';
</script>

<template class="page">

<div class="linkhub">

  <div class="linkhub__container">

    <v-card class="linkhub__card">

      <!-- HEADER -->

      <section class="linkhub__header">

        <div class="logo">
          <img src="@/assets/logo.png" alt="sunflower">
        </div>

        <h1 class="text-title">
          Welcome BBONZI’s LinkHub! 🌻
        </h1>

        <p class="text-base description">
          SNS는 정말 많은데, 왜 링크를 하나밖에 걸지 못할까요?<br>
          그래서 만들었습니다 어쩌구... 나중에 더 추가<br>
          방명록에 코멘트 많이 달아주세요 :-)
        </p>

      </section>

      <!-- Links -->
      <Links/>


      <!-- TABS -->

      <section class="linkhub__tabs">

        <button
          class="tab-btn"
          :class="{ active: activeTab === 'links' }"
          @click="activeTab='links'"
        >
          Links
        </button>

        <button
          class="tab-btn"
          :class="{ active: activeTab === 'guestbook' }"
          @click="activeTab='guestbook'"
        >
          Guest Book
        </button>

      </section>


      <!-- LINKS -->

      <section
        v-if="activeTab === 'links'"
        class="linkhub__links"
      >

        <a
          v-for="link in links"
          :key="link.name"
          :href="link.url"
          target="_blank"
          class="link-item"
        >

          <div class="link-item__icon">
            <v-icon :icon="link.icon"/>
          </div>

          <span class="text-base">
            {{ link.name }}
          </span>

        </a>

      </section>


      <!-- FOOTER -->

      <footer class="linkhub__footer">

        <p class="text-caption">
          본 페이지는 뽄지의 포트폴리오로 사용될 수 있으며,<br>
          무단 외부유용을 금합니다.
        </p>

        <p class="text-caption copyright">
          © copyright 2025 BBONZI. All Right Reserved.
        </p>

      </footer>

    </v-card>

  </div>

</div>

</template>