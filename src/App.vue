<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router';
import { routes } from './routers'

const router = useRouter()
const pages = routes.filter((v) => (Boolean(v.component)))

</script>

<template>
  <div pl8>
    <div flex item-center justify-center>
      <a-radio-group mt4 no-drag type="button" :model-value="String(router.currentRoute.value.name)">
        <a-radio v-for="page, index in pages" :key="index" :value="page.name" @click="router.push(page.path)">{{
          page.name
        }}</a-radio>
      </a-radio-group>
    </div>
    <RouterView v-slot="{ Component }">
      <KeepAlive>
        <Component :is="Component"></Component>
      </KeepAlive>
    </RouterView>
  </div>
</template>

<style scoped></style>
