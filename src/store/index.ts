import { createStore, useStore as rawUseStore } from 'vuex'

// 使用require.context()自动获取模块
const moduleFiles = require.context('./modules', false, /\.ts$/)
const modules = moduleFiles.keys().reduce((modules: ModuleTree<RootStateProps>, modulePath) => {
  const moduleName = Utils.getFileName(modulePath, 'Module')
  const value = moduleFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

const store = createStore({ modules })

// 创建vuex-key，用于获取类型提示
export const key: InjectionKey<Store<RootStateProps>> = Symbol('vue-store')
// 导出可自动导入key的useStore方法
export const useStore = () => rawUseStore(key)
export default store
