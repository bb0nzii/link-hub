<script setup>
import { ref } from "vue"

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Tabs from "@/components/Tabs.vue";

import Links from "@/components/Links.vue";
import GuestBook from "@/components/GuestBook.vue";

const activeTab = ref("links")

const changeTab = (tab) => {
  activeTab.value = tab
}
</script>



<template>

<div class="linkhub">

  <div class="linkhub__container">

    <v-card class="linkhub__card">

      <Header/>

      <div class="tabs-container">
        <Tabs
          :activeTab="activeTab"
          @changeTab="changeTab"
        />

        <Links v-show="activeTab === 'links'" />
        <GuestBook v-show="activeTab === 'guestbook'" />

      </div>

      <Footer/>

    </v-card>

  </div>

</div>

</template>