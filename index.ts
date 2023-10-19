// https://vitepress.dev/guide/custom-theme
import { Vue3Mq } from 'vue3-mq';
import Layout from './Layout.vue'
import './sass/style.scss'

import NewsImage from '@/components/modules/News/Image.vue';
import NewsVideo from '@/components/modules/News/Video.vue';

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    app.component('NewsImage', NewsImage)
    app.component('NewsVideo', NewsVideo)
    app.use(Vue3Mq, {
      defaultBreakpoint: 'lg',
      breakpoints: {
        lg: 1800,
        md: 1200,
        sm: 900,
        xs: 600,
        xxs: 0,
        page: 1280,
      }
    })
  },
}

