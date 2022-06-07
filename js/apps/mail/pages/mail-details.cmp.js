import { mailService } from "../services/mail-service.js";
import mailFolderList from "../cmps/mail-folder-list.cmp.js";
import mailFilter from "../cmps/mail-filter.cmp.js";
import { eventBus } from '../../../services/eventBus-service.js';

export default {
    template: `
        <section class="mail-details main-container">
                <div class="details-container">
                    <mail-folder-list @onSelectedBox="onSelectBox"/>
                    <div class="content-container" v-if="mail">
                        <h2>{{mail.subject}}</h2>
                        <h3>{{mail.name}}</h3>
                        <p>{{mail.body}}</p>
                        <div>
                            <div class="btn-container">
                                <button @click="onDelete(mail.id)">Delete</button>
                            </div>
                            <div >
                                <div class="prev-next-btn flex"> 
                                    <router-link :to="'/mail/'+mail.prevMailId"><button>Previous Mail</button></router-link>
                                    <router-link :to="'/mail/'+mail.nextMailId"><button>Next Mail</button></router-link>
                                </div>
                                    <router-link to="/mail/inbox/"><button>Back to Mails</button></router-link>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    `,
    components: {
        mailFolderList,
        mailFilter,

    },
    created() {
        // const id = this.$route.params.mailId;
        // console.log('id', id);

        // mailService.get(id)
        //     .then(mail => {
        //         this.mail = mail;
        //         this.mail.isRead = true;
        //         mailService.save(this.mail);
        //     });
    },
    data() {
        return {
            mail: null,
        };
    },
    methods: {
        onDelete(mailId) {
            mailService.remove(mailId)
                .then(() => {
                    this.$router.push('/mail/inbox');
                });
        },
        goBack() {
            this.$router.go(-1);
        },

        onSelectBox(value) {
            console.log('value', value);
            this.$router.push('/mail/inbox');
        },
        loadMail() {
            mailService.get(this.mailId)
                .then(mail => {
                    console.log('mail', mail);
                    this.mail = mail;
                    this.mail.isRead = true;
                    mailService.save(this.mail);
                });
        }
    },
    watch: {
        mailId: {
            handler() {
                this.loadMail();
            },
            immediate: true,
        }
    },
    computed: {
        mailId() {
            return this.$route.params.mailId;
        },
    },
    unmounted() { },
};