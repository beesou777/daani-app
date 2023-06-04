
import { createRouter, createWebHistory } from 'vue-router'

import ProductPage from '../view/ProductPage.vue';
import Post from '../components/daaniMain/daaniComponent/Posts.vue'
import singlePost from '../components/daaniMain/daaniComponent/postComponent/singlePost.vue'


import DashboardMain from "../view/dashboardMain.vue";

import Home from "../components/dashboardComponent/sidenavComponent/Home.vue"
import AddProduct from '../components/dashboardComponent/sidenavComponent/AddProduct.vue';
import EditProduct from '../components/dashboardComponent/sidenavComponent/EditProduct.vue';
import ProductDetails from '../components/dashboardComponent/sidenavComponent/ProductComponent/DataTables.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        //All ProductPage routers
        {
         path: '/', 
        name: 'ProductPage', 
        component: ProductPage, 
        children:[
            { path: '/', name: 'post', component: Post },
            { path: 'post/:slug', name: 'single-post', component: singlePost },
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
         {
        path: "/dashboard",
        name: "dashboard",
        component: DashboardMain,
        children: [
      // Order Section
        // Product Section
        { path: "", name: "home", component: Home, },
        { path: "product/add", name: "product-add", component: AddProduct, },
        { path: "product/edit/:id", name: "product-edit", component: EditProduct, },
        { path: "product/details", name: "product-details", component: ProductDetails, },

          
    ]},]
})

export default router;