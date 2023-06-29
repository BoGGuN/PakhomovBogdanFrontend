import { RouteRecordRaw } from "vue-router"
import page1 from '../pages/page1.vue'
import page2 from '../pages/page2.vue'
import page3 from '../pages/page3.vue'

const routes:readonly RouteRecordRaw[] = [
{path: '/', component: page1},
{path:'/tasks', component: page2},
{path:'/creator', component: page3}
]
export default routes