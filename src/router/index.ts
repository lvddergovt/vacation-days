import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
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
      title: "Home"
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
    meta: {
      title: "Login"
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage,
    meta: {
      title: "Register"
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage,
    meta: {
      title: "Contact"
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardPage,
    meta: {
      title: "Dashboard"
    }
  },
  {
    path: '/overview',
    name: 'Employee-Overview',
    component: EmployeeOverview,
    meta: {
      title: "Employees"
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfilePage,
    meta: {
      title: "Profile"
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

export default router
