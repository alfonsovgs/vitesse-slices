import type { UserModule } from '~/types'
import { VueQueryPlugin } from '@tanstack/vue-query'

export const install: UserModule = ({ app }) => {
  VueQueryPlugin.install(app, { queryClient })
}
