import { createApp } from 'vue'
import { router } from './router'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import '../src/plugins/flexible'
import directives from './plugins/ditectives.ts'

const app = createApp(App)

app.directive('moveable', directives.moveable)

app.use(router).use(ElementPlus).mount('#app')
