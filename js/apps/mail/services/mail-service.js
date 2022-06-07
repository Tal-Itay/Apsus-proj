import { utilService } from "../../../services/util-service.js";
import { storageService } from "../../../services/async-storage-service.js";

const MAIL_KEY = 'mails';

const gMails = [
    {
        id: 'e105',
        subject: ' how you doing? miss a lot, wonder whats new and how the process is progressing with you, stay tuned',
        body: utilService.makeLorem(60),
        isRead: false,
        isStared: false,
        isTrash: false,
        isDraft: false,
        labels: [],
        sentAt: new Date(utilService.getRandomIntInclusive(1990, 2022), 9, 4),
        from: 'momo@momo.com',
        name: 'Momo'
    },
    {
        id: 'e102',
        subject: 'Love you!',
        body: utilService.makeLorem(70),
        isRead: false,
        isDraft: false,
        isStared: false,
        isTrash: false,
        labels: [],
        sentAt: new Date(utilService.getRandomIntInclusive(1990, 2022), 4, 4),
        from: 'yarden.rishoni03@gmail.com',
        name: 'Yarden',
    },
    {
        id: 'e106',
        subject: 'Regarding the continuation of our conversations about the meeting last night',
        body: utilService.makeLorem(100),
        isRead: false,
        isDraft: false,
        isStared: false,
        isTrash: false,
        labels: [],
        sentAt: new Date(utilService.getRandomIntInclusive(1990, 2022), 6, 22),
        from: 'yarden_rishoni@hotmail.com',
        name: 'Jorden',
    },
    {
        id: utilService.makeId(),
        subject: 'Rock you!',
        body: utilService.makeLorem(),
        isRead: false,
        isDraft: false,
        isStared: false,
        isTrash: false,
        labels: [],
        sentAt: new Date(utilService.getRandomIntInclusive(1990, 2022), 8, 10),
        from: 'yarden_rishoni@hotmail.com',
        name: 'Jorden',
    },
    {
        id: utilService.makeId(),
        subject: "Hi! how is it going? You've not updated me in a while",
        body: utilService.makeLorem(utilService.getRandomIntInclusive(60, 150)),
        isRead: false,
        isDraft: false,
        isStared: false,
        isTrash: false,
        labels: [],
        sentAt: new Date(utilService.getRandomIntInclusive(1990, 2022), 9, 2),
        from: 'yarden_rishoni@hotmail.com',
        name: 'Jorden',
    },
    {
        id: utilService.makeId(),
        subject: 'Regarding what we talked about earlier - moving house',
        body: utilService.makeLorem(utilService.getRandomIntInclusive(60, 150)),
        isRead: false,
        isDraft: false,
        isStared: false,
        isTrash: false,
        labels: [],
        sentAt: new Date(utilService.getRandomIntInclusive(1990, 2022), 4, 3),
        from: 'yarden_rishoni@hotmail.com',
        name: 'Jorden',
    },
    {
        id: utilService.makeId(),
        subject: 'I would be very happy if we could meet, I sent you some nice things',
        body: utilService.makeLorem(utilService.getRandomIntInclusive(60, 150)),
        isRead: false,
        isDraft: false,
        isStared: false,
        isTrash: false,
        labels: [],
        sentAt: new Date(utilService.getRandomIntInclusive(1990, 2022), 6, 9),
        from: 'yarden_rishoni@hotmail.com',
        name: 'Jorden',
    },
    {
        id: 'e101',
        subject: ' how you doing? miss a lot, wonder whats new and how the process is progressing with you, stay tuned',
        body: utilService.makeLorem(60),
        isRead: false,
        isDraft: false,
        isStared: false,
        isTrash: false,
        labels: [],
        sentAt: new Date(utilService.getRandomIntInclusive(1990, 2022), 10, 4),
        to: 'momo@momo.com',
        name: 'Momo'
    },
    {
        id: 'e108',
        subject: 'Love you!',
        body: utilService.makeLorem(70),
        isRead: false,
        isStared: true,
        isTrash: false,
        isDraft: true,
        labels: [],
        sentAt: new Date(utilService.getRandomIntInclusive(1990, 2022), 8, 8),
        to: 'momo@momo.com',
        name: 'Momo'
    },
    {
        id: 'e103',
        subject: 'Regarding the continuation of our conversations about the meeting last night',
        body: utilService.makeLorem(100),
        isRead: false,
        isStared: true,
        isTrash: false,
        isDraft: true,
        labels: [],
        sentAt: new Date(utilService.getRandomIntInclusive(1990, 2022), 2, 20),
        to: 'momo@momo.com',
        name: 'Momo'
    },
    {
        id: utilService.makeId(),
        subject: 'Rock you!',
        body: utilService.makeLorem(),
        isRead: false,
        isStared: false,
        isTrash: true,
        isDraft: false,
        labels: [],
        sentAt: new Date(utilService.getRandomIntInclusive(1990, 2022), 2, 4),
        to: 'momo@momo.com',
        name: 'Momo'
    },
    {
        id: utilService.makeId(),
        subject: "Hi! how is it going? You've not updated me in a while",
        body: utilService.makeLorem(utilService.getRandomIntInclusive(60, 150)),
        isRead: false,
        isStared: false,
        isDraft: false,
        isTrash: true,
        labels: [],
        sentAt: new Date(utilService.getRandomIntInclusive(1990, 2022), 2, 4),
        to: 'momo@momo.com',
        name: 'Momo'
    },
    {
        id: utilService.makeId(),
        subject: 'Regarding what we talked about earlier - moving house',
        body: utilService.makeLorem(utilService.getRandomIntInclusive(60, 150)),
        isRead: false,
        isDraft: false,
        isStared: true,
        isTrash: false,
        labels: [],
        sentAt: new Date(utilService.getRandomIntInclusive(1990, 2022), 2, 4),
        to: 'momo@momo.com',
        name: 'Momo'
    },
    {
        id: utilService.makeId(),
        subject: 'I would be very happy if we could meet, I sent you some nice things',
        body: utilService.makeLorem(utilService.getRandomIntInclusive(60, 150)),
        isRead: false,
        isStared: true,
        isDraft: false,
        isTrash: false,
        labels: [],
        sentAt: new Date(utilService.getRandomIntInclusive(1990, 2022), 2, 4),
        to: 'momo@momo.com',
        name: 'Momo'
    }


];

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus',
};

_createMails();

export const mailService = {
    query,
    remove,
    save,
    get,
    setNewMailtoSent,
    getUserLogIn,
};

function query() {
    return storageService.query(MAIL_KEY);
}

function save(mail) {
    if (mail.id) return storageService.put(MAIL_KEY, mail);
    else return storageService.post(MAIL_KEY, mail);
}

function get(mailId) {
    // console.log('mailId', mailId);
    return storageService.get(MAIL_KEY, mailId)
        .then(mail => {
            return _setNextPrevMailId(mail);
        });
}

function remove(mailId) {
    return storageService.remove(MAIL_KEY, mailId);
}

function _setNextPrevMailId(mail) {
    console.log('mail', mail);
    return storageService.query(MAIL_KEY)
        .then(mails => {
            console.log('mails', mails);
            const mailIdx = mails.findIndex(currMail => currMail.id === mail.id);
            console.log('mail.id', mail.id);
            mail.nextMailId = (mails[mailIdx + 1]) ? mails[mailIdx + 1].id : mails[0].id;
            mail.prevMailId = (mails[mailIdx - 1]) ? mails[mailIdx - 1].id : mails[mails.length - 1].id;
            return mail;
        });
}

function _createMails() {
    let mails = utilService.loadFromStorage(MAIL_KEY);
    if (!mails || !mails.length) {
        mails = gMails;
        utilService.saveToStorage(MAIL_KEY, mails);
    }
    return mails;
}

function setNewMailtoSent() {
    return {
        id: utilService.makeId(),
        subject: '',
        body: '',
        isRead: false,
        isStared: true,
        isTrash: false,
        labels: [],
        sentAt: new Date(),
        to: 'momo@momo.com',
        name: 'Momo'
    };

}

function getUserLogIn() {
    return loggedinUser;
}