

export default {
    name: 'cakery',
    component: () => import(/* webpackChunkName: "CakeryLayout" */ '@/modules/cakery/layout/CakeryLayout'),
    children: [
        {
            path: '',
            name: 'hero',
            component: () => import(/* webpackChunkName: "Cakery-Hero" */ '@/modules/cakery/views/HeroView'),
        },
        {
            path: '/pasteles',
            name: 'pasteles',
            component: () => import(/* webpackChunkName: "Cakery-Pasteles" */ '@/modules/cakery/views/PastelesView'),
        }

    ]
}
