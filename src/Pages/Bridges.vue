<script setup lang="ts">
import { nanoid } from 'nanoid';
import BridgeButton from '../components/BridgeButton.vue';
import { Notification } from '@arco-design/web-vue'

type paramType = 'string' | 'number' | 'object'
type schema = {
  name: string
  type: paramType
  default?: any
}
type paramSchema = schema[]
const schemaDownloadPlugin: paramSchema = [{
  name: 'repo',
  type: 'string',
  default: 'Infoism/infoism-plugin-demo'
}, {
  name: 'id',
  type: 'string',
  default: 'Demo'
}]

function callbackDownloadPlugin(percentage: number) {
  const id = nanoid()
  if (percentage === 100) {
    Notification.success({
      id,
      position: 'bottomRight',
      title: '[Bridge]: downloadPlugin',
      content: `progress -> ${percentage}%`,
      duration: 3000,
    })
  } else {
    Notification.warning({
      id,
      position: 'bottomRight',
      title: '[Bridge]: downloadPlugin',
      content: `progress -> ${percentage}%`,
      duration: 3000,
    })
  }
}

const schemaOpenPluginDir: paramSchema = [{
  name: 'id',
  type: 'string',
  default: 'Demo'
}]

</script>

<template>
  <h1>Bridges</h1>
  <h3>{{ $t('chuangKou') }}</h3>
  <a-space>
    <BridgeButton channel="maximize" :title="$t('maximize')"></BridgeButton>
    <BridgeButton channel="unmaximize" :title="$t('unmaximize')"></BridgeButton>
    <BridgeButton channel="minimize" :title="$t('minimize')"></BridgeButton>
    <BridgeButton type="primary" status="danger" channel="close" :title="$t('close')"></BridgeButton>
    <BridgeButton channel="isMaximized" :title="$t('checkIfWindowIsMaximized')"></BridgeButton>
  </a-space>
  <h3>插件</h3>
  <a-space>
    <BridgeButton :callback="callbackDownloadPlugin" :paramSchema="schemaDownloadPlugin" channel="downloadPlugin"
      :title="$t('downloadPlugin')">
    </BridgeButton>
    <BridgeButton :paramSchema="schemaOpenPluginDir" channel="openPluginDir" :title="$t('openPluginDir')">
    </BridgeButton>
  </a-space>
</template>
