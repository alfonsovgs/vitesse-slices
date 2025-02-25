import type { UserModule } from '~/types'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

export const install: UserModule = ({ app }) => {
  app.use(autoAnimatePlugin)
}
