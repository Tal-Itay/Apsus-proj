export default {
  name: 'img note',
  props: ['info', 'noteId'],
  template: `
          <section :style="backgroundColor" class="todos-container">  
              <div>  
              <h3 @keyup="updateNote" contenteditable="true">{{info.title}}</h3>
                  <div class="img-container">    
                     <img @click="toggleEdit" :src="info.url" class="note-img" title="Edit Image" alt="Picture"> 
                     <input v-show="isImgClicked" @keyup="updateNote" v-model="newNote.newUrl" type="text" placeholder="Enter img URL..">
                  </div>
              </div>
            
          </section>
            `,

  data() {
    return {
      isImgClicked: false,
      newNote: {
        newTitle: this.info.title,
        newTxt: '',
        id: this.noteId,
        newUrl: '',
      },
    }
  },
  methods: {
    updateNote(ev) {
      // console.log('ev', ev);
      if (ev.target.nodeName === 'H3') this.newNote.newTitle = ev.currentTarget.textContent
      console.log('img new url', this.info.url)
      this.$emit('updateNoteUrl', { ...this.newNote })
      // console.log('after emit', ev.target.nodeName);
    },
    toggleEdit() {
      this.isImgClicked = !this.isImgClicked
    },
  },
  computed: {
    backgroundColor() {
      return `background-color: ${this.info.style.backgroundColor}`
    },
  },
  created() {
    this.newNote.newUrl = this.info.url
    //   console.log(this.info);
    //   console.log(this.info.label);
  },
}
