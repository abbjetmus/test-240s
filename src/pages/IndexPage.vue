<template>
  <q-page>
    <div class="row justify-center">
      <q-card class="my-card col">
        <img src="https://cdn.quasar.dev/img/mountains.jpg">

        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>
      </q-card>
      <q-card class="my-card col">
        <img src="https://cdn.quasar.dev/img/mountains.jpg">

        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>
      </q-card>
      <q-card class="my-card col">
        <img src="https://cdn.quasar.dev/img/mountains.jpg">

        <q-card-section>
          <div class="text-h6 text-weight-thin">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>
      </q-card>
    </div>

    <div>
      <ul>
        <li v-for="todo in todos" :key="todo.id">
          <q-btn color="green" :to="`/todo-details/${todo.id}`">{{ todo.text }}</q-btn>
        </li>
      </ul>
    </div>

    <div>
      {{ person }}
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useDatabaseList, useDatabaseObject } from 'vuefire'
import { ref as dbRef } from 'firebase/database'
import { db } from 'src/boot/vuefire'
const router = useRouter()

const todos = useDatabaseList(dbRef(db, 'todos'))
const person = useDatabaseObject(dbRef(db, 'person'))

const name = ref("Kalle Kula")
const h1 = ref()
function goToSecond() {
  console.log("Du kom hit!")
  router.push('second')
}
</script>


<style>
.my-card {
  max-width: 250px;
  width: 100%;
}
</style>