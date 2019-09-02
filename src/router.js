import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/main/Home.vue'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

Vue.use(Router)
export default new Router({
  components: {Navigation, Footer},
  routes: [
    {
      path: '/',
      name: 'home',
      mark:'Accueil',
      component: Home
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      mark:'Portfolio',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/main/Portfolio.vue')
    },
    {
      path: '/services',
      name: 'services',
      mark:'Services',
      component: () => import('./views/main/Services.vue')
    },
    {
      path: '/skills',
      name: 'skills',
      mark: 'Compétences',  
      component: () => import('./views/main/Skills.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      mark: 'Contactez-moi!',  
      component: () => import('./views/main/Contact.vue')
    },
    {
      path: '/help',
      name: 'help',
      mark: 'Aide',  
      component: () => import('./views/footer/Help.vue')
    },
    {
      path: '/faq',
      name: 'faq',
      mark: 'F.A.Q',  
      component: () => import('./views/footer/Faq.vue')
    },
    {
      path: '/sitemap',
      name: 'sitemap',
      mark: 'Plan du site',  
      component: () => import('./views/footer/Sitemap.vue')
    },
    {
      path: '/author',
      name: 'author',
      mark: 'Qui suis-je?',  
      component: () => import('./views/footer/Author.vue')
    },
    {
      path: '/cgu',
      name: 'cgu',
      mark: 'Conditions générales d\'utilisation',  
      component: () => import('./views/footer/Cgu.vue')
    }
  ]
})
