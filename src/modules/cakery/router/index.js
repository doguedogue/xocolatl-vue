

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
            path: 'pasteles',
            name: 'pasteles',
            component: () => import(/* webpackChunkName: "Cakery-Pasteles" */ '@/modules/cakery/views/PastelesView'),
        },
        {
            path: 'personaliza',
            name: 'personaliza',
            component: () => import(/* webpackChunkName: "Cakery-Personaliza" */ '@/modules/cakery/views/PersonalizaView'),
        },
        {
            path: 'pedidos',
            name: 'pedidos',
            component: () => import(/* webpackChunkName: "Cakery-Pedidos" */ '@/modules/cakery/views/PedidosView'),
        },
        {
            path: 'administracion',
            name: 'administracion',
            component: () => import(/* webpackChunkName: "Cakery-Administracion" */ '@/modules/cakery/views/AdministracionView'),
        },
        {
            path: 'contacto',
            name: 'contacto',
            component: () => import(/* webpackChunkName: "Cakery-Contacto" */ '@/modules/cakery/views/ContactoView'),
        }

    ]
}
