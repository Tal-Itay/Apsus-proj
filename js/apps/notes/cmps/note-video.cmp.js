export default {
  name: "video note",
    props: ["info"],
    template: `
          <section :style="backgroundColor" class="todos-container">  
              <div contenteditable="true">  
              <h3 @keyup="updateNote" contenteditable="true">{{info.title}}</h3>
                  <div class="video-container">   
                       <iframe width="225" height="150" :src="info.url" title="Edit note" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen controls></iframe>
                        <i @click="toggleEdit" class="fa-solid fa-pen-to-square"></i>
                        <input v-show="isVideoClicked" @keyup="updateNote" v-model="newNote.newUrl" type="text" placeholder="Enter video URL..">
                    </video>
                  </div>
              </div>
          </section>
            `,
  
  data() {
    return {
      isVideoClicked: false,
      newNote: {
        newTitle: this.info.title,
        newTxt:'',
        id: this.noteId,
        newUrl: '',
      },
    };
  },

  methods: {
    updateNote(ev) {
      // console.log('ev', ev);
      if (ev.target.nodeName === 'H3') this.newNote.newTitle = ev.currentTarget.textContent;
      console.log('video new url', this.info.url);
      this.$emit('updateNoteUrl', {...this.newNote});
      // console.log('after emit', ev.target.nodeName);
    },
    toggleEdit(){
      this.isVideoClicked = !this.isVideoClicked;
    }
  },
  computed: {
    backgroundColor() {
      return `background-color: ${this.info.style.backgroundColor}`;
    },
  },
  created() {
    this.newNote.newUrl = this.info.url
  },
};
