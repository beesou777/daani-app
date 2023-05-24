
import { createRouter, createWebHistory } from 'vue-router'

import Blog from '../view/Blog.vue';
import Post from '../components/daaniMain/daaniComponent/Posts.vue'
import singlePost from '../components/daaniMain/daaniComponent/postComponent/singlePost.vue'
import createPost from '../components/daaniMain/daaniComponent/postComponent/createPost.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        //All Blog routers
        { path: '/', 
        name: 'home', 
        component: Blog, 
        children:[
            { path: '', name: 'post', component: Post },
            { path: 'post/:slug', name: 'single-post', component: singlePost },
            { path: 'create-post/', name: 'create-post', component: createPost },
            // { path: 'category/:slug', name: 'program', component: Archive },
            // {path: 'search/:slug',name: 'search',component: Archive,props: true}, 
            // // { path: 'help', name: 'help', component: Help },
            // // { path: 'write', name: 'help', component: Write },
            // // { path: 'update', name: 'update', component: Updates },
            // { path: 'login', name: 'login', component: Login },
            // {path: 'privacypolicy', name: 'privacy-policy', component:PrivacyPolicy},
            // {path: 'contactus', name: 'contact-us', component:ContactUs}
        ] 
        },

          
    ]
})

export default router;