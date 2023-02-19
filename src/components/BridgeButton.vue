<template>
  <a-button v-if="!paramSchema || !paramSchema.length" type="outline" @click="handleBridge">
    {{ title }}
  </a-button>
  <a-popover v-else position="tl" default-popup-visible trigger="contextMenu">
    <a-button type="outline" @click="handleBridge">
      {{ title }}
    </a-button>
    <template #content>
      <a-form :model="bridgeData" :style="{ width: '300px' }" size="mini" :label-col-props="{ span: 5 }"
        :wrapper-col-props="{ span: 19 }">
        <a-form-item v-for="schema in paramSchema" :field="schema.name" :label="schema.name">
          <a-input v-model="bridgeData[schema.name]" />
        </a-form-item>
      </a-form>
    </template>
  </a-popover>
</template>

<script setup lang="ts">
import { defineProps, reactive, toRaw } from 'vue';
import { bridge } from '@infoism/core';
import { Notification } from '@arco-design/web-vue'
import { nanoid } from 'nanoid'
type paramType = 'string' | 'number' | 'object'
type schema = {
  name: string
  type: paramType
  default?: any
}
type paramSchema = schema[]
const props = defineProps<{
  channel: string
  paramSchema?: paramSchema
  callback?: () => void
  title: string
}>()

const initBridgeData = () => {
  console.log(props.paramSchema);
  if (!props.paramSchema) return {};
  const res = props.paramSchema.reduce((pre, curr) => {
    pre[curr.name] = curr.default
    return pre
  }, {} as Record<string, any>)
  console.log(res);
  return res
}
const bridgeData = reactive(initBridgeData())
const handleBridge = function () {
  const id = nanoid()
  const startTime = Date.now()

  bridge[props.channel](toRaw(bridgeData)).then((res: any) => {
    Notification.success({
      id,
      position: 'bottomRight',
      content: `执行成功${res !== undefined ? ': ' + String(res) : ''}. 执行时间: ${Date.now() - startTime} ms`,
      duration: 3000
    })
  }).catch((err: any) => {
    Notification.error({
      id,
      position: 'bottomRight',
      content: `执行失败: ${err}`,
      duration: 3000
    })
  })
  Notification.warning({
    id,
    position: 'bottomRight',
    title: `[Bridge]: ${props.channel}`,
    content: '执行中......',
    duration: 3000,
  })
}

</script>

<style scoped></style>