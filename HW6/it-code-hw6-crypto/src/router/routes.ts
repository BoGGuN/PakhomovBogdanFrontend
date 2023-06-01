import { RouteRecordRaw } from "vue-router"
import page1 from '../pages/page1.vue'
import page2 from '../pages/page2.vue'
import page3 from "../pages/page3.vue"
import page4 from "../pages/page4.vue"

const routes:readonly RouteRecordRaw[] = [
{path: '/', component: page1},
{path:'/list', component: page2},
{path:'/info', component: page3},
{path:'/creator', component: page4}
]
export default routes