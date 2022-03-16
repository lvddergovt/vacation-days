import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
// @ts-ignore
import { supabase } from '../supabase/init.js';
import HomeView from '../views/HomeView.vue';
import LoginPage from '../views/LoginPage.vue';
import RegisterPage from '../views/RegisterPage.vue';
import ContactPage from '../views/ContactPage.vue';
import DashboardPage from '../views/user/DashboardPage.vue';
import EmployeeOverview from '../views/user/EmployeeOverview.vue';
import ProfilePage from '../views/user/ProfilePage.vue';
import CreatePTORequest from '../views/user/CreatePTORequest.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      title: "Home",
      auth: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
    meta: {
      title: "Login",
      auth: false
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage,
    meta: {
      title: "Register",
      auth: false
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage,
    meta: {
      title: "Contact",
      auth: false
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardPage,
    meta: {
      title: "Dashboard",
      auth: true
    }
  },
  {
    path: '/overview',
    name: 'Employee-Overview',
    component: EmployeeOverview,
    meta: {
      title: "Employees",
      auth: true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfilePage,
    meta: {
      title: "Profile",
      auth: true
    }
  },
  {
    path: "/create",
    name: "Create",
    component: CreatePTORequest,
    meta: {
      title: "Create",
      auth: true
    }
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// Change document title
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Vacation Days`;
  next();
});

// Route guard for auth routes
router.beforeEach((to, from, next) => {
  const user = supabase.auth.user();
  if (to.matched.some((res) => res.meta.auth)) {
    if (user) {
      next();
      return;
    }
    next({name: ""});
  }
  next();
})

export default router
