<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
const user = useUserStore()
const name = ref(user.savedName)

const router = useRouter()
function go() {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}

const { t } = useI18n()
</script>

<template>
  <div>
    <div class="text-4xl">
      <div class="icon-[carbon--campsite] inline-block" />
    </div>
    <p>
      <a rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank">
        Vitesse
      </a>
    </p>
    <p>
      <em class="text-sm opacity-75">{{ t('intro.desc') }}</em>
    </p>

    <div class="py-4" />

    <TheInput
              v-model="name"
              :placeholder="t('intro.whats-your-name')"
              autocomplete="false"
              @keydown.enter="go" />

    <label class="hidden" for="input">{{ t('intro.whats-your-name') }}</label>

    <div>
      <Button size="small" class="m-3" :disabled="!name" @click="go" :label="t('button.go')" />
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
