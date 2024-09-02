<script setup lang="ts">
import { availableLocales, loadLanguageAsync } from '~/core/modules/i18n'

const { t, locale } = useI18n()

async function toggleLocales() {
  // change to some real logic
  const locales = availableLocales
  const newLocale = locales[(locales.indexOf(locale.value) + 1) % locales.length]
  await loadLanguageAsync(newLocale)
  locale.value = newLocale
}
</script>

<template>
  <nav class="flex items-center justify-center gap-4 mt-6 text-xl" >
    <RouterLink  to="/" :title="t('button.home')">
      <div v class="icon-[carbon--campsite]" />
    </RouterLink>

    <Button @click="toggleDark()" text
            icon="icon-[carbon--sun] dark:icon-[carbon--moon] size-6" />

    <Button :title="t('button.toggle_langs')" @click="toggleLocales()" icon="icon-[carbon--language] size-6" text />

    <RouterLink to="/about" :title="t('button.about')" data-test-id="about">
      <div class="icon-[carbon--dicom-overlay]" />
    </RouterLink>

    <a  rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank"
       title="GitHub">
      <div class="icon-[carbon--logo-github]" />
    </a>
  </nav>
</template>
