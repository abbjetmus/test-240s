<template>
    <q-page>
        <h1>{{ todo }}</h1>
    </q-page>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import { useDatabaseObject } from 'vuefire'
import { ref as dbRef } from 'firebase/database'
import { db } from 'src/boot/vuefire'
const route = useRoute()
const id = ref(route.params.id)

const todo = useDatabaseObject(dbRef(db, 'todos/' + route.params.id))

</script>

<style lang="scss" scoped></style>