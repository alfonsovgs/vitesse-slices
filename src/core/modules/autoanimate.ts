import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import type { UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  app.use(autoAnimatePlugin)
}
