import { mailService } from '../services/mail-service.js';
import { eventBus } from '../../../services/eventBus-service.js';


export default {
    // props: [""],
    template: `
    <section class="mail-compose">
        <div class="compose-container flex">
            <div class="tools-container">
                <label>New message</label>
                <button @click="closeModal">X</button>
            </div>
            <div class="content-container flex">
              <div>
                  <form @submit.prevent="addNewMail">
                      <div>
                          <div>
                              <input type="email" placeholder="To" v-model="newMail.to">
                          </div>
                          <div>
                              <input v-model="newMail.subject" type="text" placeholder="Subject">
                          </div>
                          <div>
                              <textarea v-model="newMail.body" cols="30" rows="10" placeholder="Write a text..."></textarea>
                          </div>
                      </div>
                      <div>
                          <button><img src="../../icons/sent.png" alt=""></button>
                      </div>
                </form>
                  </div>
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            newMail: mailService.setNewMailtoSent(),
            logInUser: mailService.getUserLogIn()
        };
    },
    components: {},
    created() {
    },
    methods: {
        addNewMail() {
            mailService.save(this.newMail)
                .then(() => {
                    this.newMail = mailService.setNewMailtoSent();
                    eventBus.emit('show-msg', { txt: 'Sent...', type: 'success' });
                    this.$router.push('/mail/inbox');
                });
        },
        closeModal() {
            this.$emit('closeModal');
        }
    },
    computed: {},
    unmounted() { },
};