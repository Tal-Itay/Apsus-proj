import { eventBus } from "../services/eventBus-service.js";

export default {
    template: `
        <section v-if="msg" class="user-msg" :class="msg.type">
            <div>
                <button class="user-msg-btn-modal" @click="closeModal">X</button>
            </div>
            <div>
                <p>{{msg.txt}}</p>
            </div>
        </section>
    `,
    components: {},
    created() {
        this.unsubscribe = eventBus.on("show-msg", this.showMsg);
    },
    data() {
        return {
            msg: null,
            timeoutId: null,
        };
    },
    methods: {
        showMsg(msg) {
            this.msg = msg;
            this.timeoutId = setTimeout(() => {
                this.msg = null;
            }, 3000);
        },
        closeModal() {
            (this.msg = null), clearTimeout(this.timeoutId);
        },
    },
    computed: {},
    unmounted() {
        this.unsubscribe();
    },
};
