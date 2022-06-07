import { eventBus } from "../../../services/eventBus-service.js";


export default {
    props: ["mail"],
    template: `
        <section class="mail-preview" :style="isRead">
            <div >
               
                <div>
                    <h3>{{mail.name}}</h3>
                </div>
                <div>
                    <h4>{{mail.subject}}</h4>
                </div>
                <div class="preview-btn-container">
                     <button @click.stop.prevent="onDelete(mail.id)"><img src="../../icons/trash-can.png"></button>
                    <button @click.stop.prevent="onStared"><img src="../../icons/favourite.png" alt=""></button>
                </div>
            </div>
        </section>
    `,
    components: {},
    created() {

    },
    data() {
        return {
        };
    },
    methods: {
        onStared() {
            this.mail.isStared = true;
            console.log('this.mail', this.mail);
            eventBus.emit('show-msg', { txt: 'Save to Stared', type: 'success' });
        },
        onDelete(mailId) {
            this.$emit('onDelete', mailId);

        }
    },
    computed: {
        isRead() {
            if (this.mail.isRead) return 'background-color: rgba(231, 231, 231, 0.37)';
        }
    },

    unmounted() { },
};