import { utilService } from '../../../services/util-service.js'
import { storageService } from '../../../services/async-storage-service.js'

const NOTES_KEY = 'notesDB'

const NOTE_TYPE = {
  TEXT: 'note-txt',
  IMG: 'note-img',
  TODO: 'note-todos',
  VIDEO: 'note-video',
}

const gNotes = [
  {
    id: 'n101',
    type: NOTE_TYPE.TEXT,
    isPinned: true,
    info: {
      title: 'Bamia recipe',
      label: 'Reminder',
      txt: 'Ask Yaron || Google it',
      style: {
        backgroundColor: '#B5EAEA',
      },
    },
  },
  {
    id: 'n102',
    type: NOTE_TYPE.IMG,
    isPinned: false,
    info: {
      title: 'British Kermit',
      label: 'Family',
      url: '../../../../img/kermit.jpeg',
      style: {
        backgroundColor: '#FFBCBC',
      },
    },
  },
  {
    id: 'n103',
    type: NOTE_TYPE.TEXT,
    isPinned: true,
    info: {
      title: 'Stuff to remember',
      label: 'Reminder',
      txt: 'Sleeping, eating, water the plants',
      style: {
        backgroundColor: '#B5EAEA',
      },
    },
  },
  {
    id: 'n104',
    type: NOTE_TYPE.TEXT,
    isPinned: true,
    info: {
      title: 'Open a locked folder on mac',
      label: 'Reminder',
      txt: 'Open termminal => paste chflags -R nouchg . => Enter => get annoyed',
      style: {
        backgroundColor: '#B5EAEA',
      },
    },
  },
  {
    id: 'n105',
    type: NOTE_TYPE.TEXT,
    isPinned: true,
    info: {
      title: 'Nothing comes to mind',
      label: 'Reminder',
      txt: 'Lorem ipsum dolor sit amet consectetur adipisicing eli, Ab neque rem eum nobis. dolor sit amet consectetur',
      style: {
        backgroundColor: '#B5EAEA',
      },
    },
  },
  {
    id: 'n106',
    type: NOTE_TYPE.VIDEO,
    isPinned: false,
    info: {
      title: 'Otis Redding - Sitting on the dock of the bay',
      label: 'Friends',
      url: 'https://www.youtube.com/embed/UCmUhYSr-e4?start=7',
      style: {
        backgroundColor: '#F38BA0',
      },
    },
  },
  {
    id: 'n107',
    type: NOTE_TYPE.TEXT,
    isPinned: true,
    info: {
      title: 'note pour moi-même:',
      label: 'Reminder',
      txt: 'apprendre React',
      style: {
        backgroundColor: '#B5EAEA',
      },
    },
  },
  {
    id: 'n108',
    type: NOTE_TYPE.VIDEO,
    isPinned: false,
    info: {
      title: 'Guilty Dogs',
      label: 'Friends',
      url: 'https://www.youtube.com/embed/_kLdO3EsECs',
      style: {
        backgroundColor: '#F38BA0',
      },
    },
  },
  {
    id: 'n109',
    type: NOTE_TYPE.TODO,
    isPinned: true,
    info: {
      title: 'Get my shit together',
      label: 'Work',
      todos: [
        { txt: 'Sprint 3', doneAt: null },
        { txt: 'Get up from chair', doneAt: null },
        { txt: 'Final sprint', doneAt: 187111111 },
        { txt: 'Get a life', doneAt: 187111111 },
      ],
      style: {
        backgroundColor: '#E6DDC6',
      },
    },
  },
  {
    id: 'n110',
    type: NOTE_TYPE.IMG,
    isPinned: false,
    info: {
      title: 'Elmodal',
      label: 'Family',
      url: '../../../../img/Elmodal.jpg',
      style: {
        backgroundColor: '#FFBCBC',
      },
    },
  },
]

_createNotes()

export const notesService = {
  query,
  get,
  save,
  remove,
  getEmptyTxtNote,
}

function query() {
  return storageService.query(NOTES_KEY)
}

//puts DB on LS
function _createNotes() {
  let notes = utilService.loadFromStorage(NOTES_KEY)
  if (!notes || !notes.length) {
    notes = gNotes
    utilService.saveToStorage(NOTES_KEY, notes)
  }
  return notes
}

function get(notId) {
  return storageService.get(NOTES_KEY, notId)
}

function save(note) {
  if (note.id) return storageService.put(NOTES_KEY, note)
  else return storageService.post(NOTES_KEY, note)
}

// function getEmptyNote() {
//   return {
//     id: "",
//     vendor,
//     maxSpeed,
//     prevOwners: [],
//   };
// }

// function _createNote() {
//   const car = getEmptyCar(vendor, maxSpeed);
//   car.id = utilService.makeId();
//   return car;
// }

function getEmptyTxtNote() {
  return {
    id: '',
    type: NOTE_TYPE.TEXT,
    isPinned: false,
    info: {
      title: '',
      label: '',
      txt: '',
      style: {
        backgroundColor: '',
      },
    },
  }
}

function remove(noteId) {
  return storageService.remove(NOTES_KEY, noteId)
}
