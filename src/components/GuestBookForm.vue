<script setup>

import { ref } from "vue"

const emit = defineEmits(["submit"])

const author = ref("")
const title = ref("")
const content = ref("")

const submit = () => {

  if(!author.value || !title.value || !content.value){
    alert("모든 항목을 입력하세요")
    return
  }

  emit("submit",{
    author: author.value,
    title: title.value,
    content: content.value
  })

  author.value=""
  title.value=""
  content.value=""
}

</script>



<template>

<v-card class="guestbook__form">

  <v-row no-gutters class="form-row">

    <v-col cols="3">
      <v-text-field
        label="작성자"
        variant="outlined"
        density="compact"
        v-model="author"
      />
    </v-col>

    <v-col cols="7">
      <v-text-field
        label="제목"
        variant="outlined"
        density="compact"
        v-model="title"
      />
    </v-col>

    <v-col cols="2">
      <v-btn
        block
        @click="submit"
        class="form-button"
      >
        등록
      </v-btn>
    </v-col>

  </v-row>


  <v-textarea
    label="방명록 등록 시 수정 및 삭제는 저만 할 수 있어요. 등록 전 꼬옥 확인하기 >.0"
    variant="outlined"
    v-model="content"
    rows="4"
    auto-grow
  />

</v-card>

</template>



<style scoped>

:deep(.v-col){
  display:flex;
  align-items:center;
}

:deep(.v-field){
  overflow: visible;
}

:deep(.v-field){
  border-radius: var(-border-radious-s);
}

:deep(.v-field__input){
    padding: var(--space-2);
}

:deep(.v-field-label){
  padding: 0 var(--space-2);
  font-size: var(--font-size-sm);
}

:deep(.v-input__details){
  display:none;
}

@media screen and (max-width: 430px) {
    :deep(.v-field-label){
      font-size: var(--font-size-xsm);
    }
}

</style>