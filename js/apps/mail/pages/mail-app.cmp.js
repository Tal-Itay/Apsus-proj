import { mailService } from '../services/mail-service.js';
import mailFilter from '../cmps/mail-filter.cmp.js';
import mailFolderList from '../cmps/mail-folder-list.cmp.js';
import { eventBus } from '../../../services/eventBus-service.js';
import mailCompose from '../cmps/mail-compose.cmp.js';


export default {
    template: `
        <section class="mail-index main-container">
            <nav>
                   <button v-on:click="isShown = !isShown">Compose</button>
                   <mail-compose v-if="isShown" @closeModal="onToggleModal"/>
            </nav>
            <div  class="main-content flex">
                <mail-folder-list @onSelectedBox="settingCurrentBox"/>
                <router-view></router-view>
            </div>
        </section>
    `,
    components: {
        mailFilter,
        mailFolderList,
        mailCompose,
    },
    created() {
        mailService.query()
            .then(mails => {
                this.mails = mails;

            });
        this.unsubscribe = eventBus.on('onDelete', (mailId) => {
            this.onDelete(mailId);
        });
    },
    data() {
        return {
            mails: null,
            filterBy: null,
            mailsForDisplay: [],
            isShown: false,
        };
    },
    methods: {
        settingCurrentBox(settingMailsBy) {
            this.mailsForDisplay = [];
            this.mailsForDisplay = this.mails.filter(mail => {
                if (mail[settingMailsBy]) return mail[settingMailsBy];
            });
            eventBus.emit('selectedBox', this.mailsForDisplay);
        },
        onToggleModal() {
            this.isShown = false;
        },
    },
    computed: {
    },
    unmounted() {
        this.unsubscribe();
        console.log('bye bye');
    },
};