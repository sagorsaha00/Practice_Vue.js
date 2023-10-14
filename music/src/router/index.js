import { createRouter, createWebHashHistory } from 'vue-router'

// import Home from '../views/Home.vue'
// import About from '../views/About.vue'
// import Manage from '../views/Manage.Vue'
// import Song from '../views/Song.vue'
import useUseerStore from '../stores/user'

const Home = () => import('../views/Home.vue');
const About = () => import ('../views/About.vue');
const Manage = () => import('../views/Manage.Vue')
const Song = () => import('../views/Song.vue');
 


const routes = [
  {
    name: 'home',
    path: '/', //example.com/about
    component: Home
  },
  {
    name: 'about',
    path: '/about',
    component: About
  },
  {
    name: 'song',
    path: '/song/:id',
    component: Song
  },
  {
    name: 'manage',
    // alias:'./manage',
    path: '/manage-music',
    component: Manage,
    beforeEnter: (to, from, next) => {
      console.log('Manage Route Guarad')
      next()
    },
    meta: {
      requiresAuth: true
    }
  },
  ,
  {
    path: '/manage',
    redirect: { name: 'manage' }
  },

  {
    path: '/:catchAll(.*)*',
    redirect: { name: 'home' }
  }
]



const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'text-yello-500'
})
router.beforeEach((to, from, next) => {
  //  console.log(to, meta);

  if (!to.meta.requiresAuth) {
    next()
    return
  }
  const store = useUseerStore()
  if (store.userLoggedIn) {
    next()
  } else {
    next({ name: 'home' })
  }
})

export default router
