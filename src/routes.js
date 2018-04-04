import Home from './Component/Home.vue'
import Placeanad from './Component/Placeanad.vue'
import Signup from './Component/Signup.vue'
import Login from './Component/Login.vue'
import About from './Component/About.vue'
import Contact from './Component/Contact.vue'
import Dataprotection from './Component/Dataprotection.vue'
import Admin from './Admin/Admin.vue'

export default [
  {path: '/', component: Home},
  {path: '/home', component: Home},
  {path: '/placeanad', component: Placeanad},
  {path: '/registion', component: Signup},
  {path: '/login', component: Login},
  {path: '/aboutus', component: About},
  {path: '/contact', component: Contact},
  {path: '/dataprotection', component: Dataprotection},
  {path: '/adminhome', component: Admin}
]
