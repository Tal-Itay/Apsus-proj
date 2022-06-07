import { notesService } from "../services/note-service.js";
import { showErrorMsg, showSuccessMsg } from "../../../services/eventBus-service.js";
// import { eventBus } from "../services/eventBus-service.js";
// import notesList from "../cmps/note-list.cmp.js";
import noteTxt from "../cmps/note-txt.cmp.js";
import noteTodos from "../cmps/note-todos.cmp.js";
import noteImg from "../cmps/note-img.cmp.js";
import noteVideo from "../cmps/note-video.cmp.js";
import actionNav from "../cmps/action-nav.cmp.js";
import addNote from "../cmps/add-note.cmp.js";

export default {
  name: "note-app",
  template: `
        <section class="notes-index main-container flex flex-column">
			<add-note @newNote="saveNote" />
        	<div class="notes-container">
				<div v-for="(note, idx) in notes" :key="note.id" class="note-nav-container">
					<div class="note-box" title="Click to Edit" :style="backgroundColor">    
                        <component :is="note.type" :info="note.info" :noteId="note.id" @noteTitleEdited="saveNote" @updateNote="editNote" @updateNoteUrl="editNote"></component>
                    </div>
                  	<action-nav v-if="note" :note="note" @remove="removeNote"/>
            	</div>
            </div>
              

           <!-- <pre>{{answers}}</pre>
          <div class="note-list-container">
              <notes-list v-if="notes" :notes="notesForDisplay" @selected="selectNote" />
          </div>  -->
          
        </section>
    `,
  components: {
    // notesList,
    noteTxt,
    noteTodos,
    addNote,
    actionNav,
    noteImg,
    noteVideo,
  },

  data() {
    return {
      notes: null,
      
      // answers: []
      // notes: null,
      //   filterBy: null,
    };
  },
  created() {
    notesService
      .query()
      .then((notes) => {
        // console.log("notes-index notes", notes);
        this.notes = notes;
      })
      .catch((error) => console.log("error", error));
    //   .catch('error, try again later')
    // console.log("notes app");
    // console.log("created this.notes", this.notes);
  },
  methods: {
    removeNote(id) {
      notesService
      .remove(id)
      .then(() => {
        const idx = this.notes.findIndex((note) => note.id === id);
        this.notes.splice(idx, 1);
        showSuccessMsg("Deleted succesfully");
      })
      .catch((err) => {
        console.error(err);
        showErrorMsg("Error - please try again later");
      });
    },
    saveNote(noteToAdd){
      notesService.save(noteToAdd)
      .then((note) => {
        this.notes.push(note);
        
      })
    },
    editNote({newTitle, newTxt, id, newUrl}){
      // console.log('edit title', newTitle);
      // console.log('edit text', newTxt);
      console.log('edit url', newUrl);
      notesService.get(id).then(note => {
        note.info.title = newTitle;
        note.info.txt = newTxt
        note.info.url = newUrl
       notesService.save(note)
      //  console.log(this.);
      //  .then(note => {
      //    this.notes.find(note => {
      //      if (note.id === 
      //    })
      //  })
      })
    },

    // addNote() {
    //   const newNote = notesService.getEmptyTxtNote();
    // },
  },
  computed: {
    notesForDisplay() {
      return this.notes;
      //   if (!this.filterBy) return this.notes;
      //   console.log("this.notes", this.notes);
  
    
      //   const regex = new RegExp(this.filterBy.title, "i");
      //   return this.notes.filter((notes) => {
      //     return regex.test(notes.title) && min < notes.listPrice.amount && max > notes.listPrice.amount;
      //   });
    },
    computed: {
      backgroundColor() {
        return `background-color: ${this.note.info.style.backgroundColor}`;
      },
  },
},
  mounted() {
    // console.log("mounted this.notes", this.notes);
  },
};
