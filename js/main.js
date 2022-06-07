import { router } from './router.js';
import userMsg from './cmps/user-msg.cmp.js';
import appHeader from './cmps/app-header.cmp.js';
import appFooter from './cmps/app-footer.cmp.js';

const options = {


    // props: [""],
    template: `
        <section class="main">
            <app-header />
            <user-msg />
            <router-view />
            <app-footer />
        </section>
        `,
    components: {
        userMsg,
        appHeader,
        appFooter,
    },
    created() { },
    data() {
        return {};
    },
    methods: {},
    computed: {},
    unmounted() { },
};


const app = Vue.createApp(options);
app.use(router);
app.mount('#app');