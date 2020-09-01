import { createApp } from 'vue'
import App from './App.vue'
import router from './Index/index'
const app = createApp(App);

app.use(router);
app.mount('#app');
