import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _271ad062 = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages_about_index" */))
const _cac5b2ca = () => interopDefault(import('..\\pages\\cats\\index.vue' /* webpackChunkName: "pages_cats_index" */))
const _31f24301 = () => interopDefault(import('..\\pages\\dogs\\index.vue' /* webpackChunkName: "pages_dogs_index" */))
const _b73cb160 = () => interopDefault(import('..\\pages\\information\\index.vue' /* webpackChunkName: "pages_information_index" */))
const _1aadf7d0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _271ad062,
    name: "about"
  }, {
    path: "/cats",
    component: _cac5b2ca,
    name: "cats"
  }, {
    path: "/dogs",
    component: _31f24301,
    name: "dogs"
  }, {
    path: "/information",
    component: _b73cb160,
    name: "information"
  }, {
    path: "/",
    component: _1aadf7d0,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
