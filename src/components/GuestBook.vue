<script setup>

import { ref, onMounted, watch } from "vue"

import GuestBookForm from "@/components/GuestBookForm.vue"
import GuestBookList from "@/components/GuestBookList.vue"
import Pagination from "@/components/Pagination.vue"

import {
    collection,
    addDoc,
    query,
    orderBy,
    limit,
    getDocs,
    serverTimestamp
} from "firebase/firestore"

import { db } from "@/firebase"

const posts = ref([])

const page = ref(1)
const pageSize = 5
const pageCount = ref(1)



/* 전체 개수 계산 */

const getTotalCount = async () => {

  const snapshot = await getDocs(collection(db,"guestbook"))

  const total = snapshot.size

  pageCount.value = Math.ceil(total / pageSize)

}



/* 페이지별 데이터 */

const loadPosts = async () => {

  const q = query(
    collection(db,"guestbook"),
    orderBy("createdAt","desc"),
    limit(page.value * pageSize)
  )

  const snapshot = await getDocs(q)

  const docs = snapshot.docs
    .map(doc=>({
      id:doc.id,
      ...doc.data()
    }))

  const start = (page.value - 1) * pageSize
  const end = start + pageSize

  posts.value = docs.slice(start,end)

}



/* 글 등록 */

const submitPost = async (data)=>{

  await addDoc(collection(db,"guestbook"),{
    ...data,
    createdAt:serverTimestamp()
  })

  page.value = 1

  await getTotalCount()
  await loadPosts()

}



watch(page,loadPosts)



onMounted(async ()=>{

  await getTotalCount()
  await loadPosts()

})

</script>



<template>

<div class="guestbook">

  <GuestBookForm
    @submit="submitPost"
  />

  <GuestBookList
    :posts="posts"
  />

  <Pagination
    v-model:page="page"
    :pageCount="pageCount"
  />

</div>

</template>

<style scoped>
.guestbook {
    padding: var(--space-4) 0;
}
</style>