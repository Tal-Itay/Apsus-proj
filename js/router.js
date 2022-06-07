import appAbout from './pages/app-about.cmp.js';
import appHome from './pages/app-home.cmp.js';
import notesApp from './apps/notes/pages/notes-app.cmp.js';
import mailApp from './apps/mail/pages/mail-app.cmp.js';
import mailDetails from './apps/mail/pages/mail-details.cmp.js';
import mailTrash from './apps/mail/cmps/mail-trash.cmp.js';
import mailSent from './apps/mail/cmps/mail-sent.cmp.js';
import mailDraft from './apps/mail/cmps/mail-draft.cmp.js';
import mailInbox from './apps/mail/cmps/mail-inbox.cmp.js';
import mailStared from './apps/mail/cmps/mail-stared.cmp.js';

const routes = [
    {
        path: '/',
        component: appHome,
    },
    {
        path: '/about',
        component: appAbout,
    },
    {
        path: '/notes',
        component: notesApp,
    },
    // {
    //     path: '/notes/:noteId',
    //     component: noteDetails,
    // },
    {
        path: '/mail',
        component: mailApp,
        children: [
            {
                path: 'trash',
                component: mailTrash,

            },
            {
                path: 'sent',
                component: mailSent,
            },
            {
                path: 'draft',
                component: mailDraft,
            },
            {
                path: 'inbox',
                component: mailInbox,
            },
            {
                path: 'stared',
                component: mailStared,
            },

        ]
    },
    {
        path: '/mail/:mailId?',
        component: mailDetails,
    },
    // {
    //     path: '/mail/:mailId?',
    //     component: mailDetails,
    // },


];

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
});