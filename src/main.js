import { createApp } from 'vue'
import App from './App.vue'
import router from './Index/index'
import store from './store/index'
import axios from 'axios'
const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
axios({
    url:'http://123.207.32.32:8000/home/multidata'
}).then(res =>{
    console.log(res)
})