/* eslint-disable no-unused-vars */
import { MessageType } from 'element-plus/lib/el-message/src/types'

declare global {
  interface Window {
    $toast: (type: MessageType, message: string) => Promise<void>
  }
}
