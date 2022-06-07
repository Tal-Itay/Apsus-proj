import { eventBus } from "../../../services/eventBus-service.js";
import mailList from "./mail-list.cmp.js";
import mailFilter from "./mail-filter.cmp.js";
import { mailService } from "../services/mail-service.js";

export default {
  template: `
        <section class="mail-inbox">
             <mail-filter @filtered="setFilterBy"/>
            <mail-list v-if="mails" :mails="mailsToShow"/>
        </section>
    `,
  components: {
    mailList,
    mailFilter,
  },
  created() {
    mailService.query().then(mails => {
      this.mails = mails;
    });
    this.unsubscribe = eventBus.on('selectedBox', (currMails) => {
      this.getMails(currMails);
    });
  },
  data() {
    return {
      mails: null,
      filterBy: null,

    };
  },
  methods: {
    getMails(currMails) {
      this.mails = currMails;
      console.log('this.currMails', this.mails);
    },
    setFilterBy(filterBy) {
      this.filterBy = filterBy;
    },

  },
  computed: {
    mailsToShow() {
      if (!this.filterBy) return this.mails;
      const regex = new RegExp(this.filterBy.subject, 'i');
      const isRead = this.filterBy.isRead;
      if (isRead) {
        const mailIsRead = this.mails.filter(mail => {
          return mail.isRead === true;
        });
        if (isRead && this.filterBy.subject) {
          const mailsForShow = [];
          mailsForShow.push(...mailIsRead);
          const setAllFilterBy = mailsForShow.filter(mail => (regex.test(mail.subject)));
          return setAllFilterBy;
        }
        else {
          return mailIsRead;
        }
      } else {
        return this.mails.filter(mail => (regex.test(mail.subject)));
      }
    },
  },
  unmounted() {
    this.unsubscribe();
  },
};