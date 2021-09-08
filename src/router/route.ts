import { RouteRecordRaw } from 'vue-router'

// 使用require.context()自动获取模块
const modules: RouteRecordRaw[] = []
const moduleFiles = require.context('./modules', false, /\.ts$/)
moduleFiles.keys().forEach((key) => modules.push(moduleFiles(key).default))
modules.sort((moduleA, moduleB) => {
  const orderA = moduleA.meta!.order as number
  const orderB = moduleB.meta!.order as number
  return orderA - orderB
})

const routes: RouteRecordRaw[] = [...modules]

export default routes
