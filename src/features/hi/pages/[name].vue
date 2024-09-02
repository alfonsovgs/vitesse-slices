<script setup lang="ts">
const router = useRouter()
const route = useRoute('/hi/[name]')
const user = useUserStore()
const { t } = useI18n()

watchEffect(() => {
  user.setNewName(route.params.name)
})
</script>

<template>
  <div>
    <div class="text-4xl">
      <div class="icon-[carbon--pedestrian] inline-block" />
    </div>
    <p>
      {{ t('intro.hi', { name: user.savedName }) }}
    </p>

    <p class="text-sm opacity-75">
      <em>{{ t('intro.dynamic-route') }}</em>
    </p>

    <template v-if="user.otherNames.length">
      <p class="mt-4 text-sm">
        <span class="opacity-75">{{ t('intro.aka') }}:</span>
      <ul>
        <li v-for="otherName in user.otherNames" :key="otherName">
          <RouterLink :to="`/hi/${otherName}`" replace>
            {{ otherName }}
          </RouterLink>
        </li>
      </ul>
      </p>
    </template>

    <div>
      <Button class="m-3 mt-6 text-sm"  @click="router.back()">
        {{ t('button.back') }}
      </Button>
    </div>
  </div>
</template>
