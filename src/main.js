import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';
import AllUsers from './pages/AllUsers.vue';
import CourseGoal from './pages/CourseGoal.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AllUsers
        },
        {
            path: '/goals',
            component: CourseGoal
        }
    ]
});

const app = createApp(App);

app.component('base-modal', BaseModal);

app.use(router);

router.isReady().then(() => {
    app.mount('#app');
});



