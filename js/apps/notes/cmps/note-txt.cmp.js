export default {
  name:"text-note",
  props: ["info", "noteId"],
  template: `
          <section :style="backgroundColor" class="note-text-container">    
              <div class="note-text">    
                <h3 @keyup="updateNote" contenteditable="true">{{info.title}}</h3>    
                <p @keyup="updateNote" contenteditable="true">{{info.txt}}</p>    
              </div>
          </section>
          `,

  data() {
    return {
      newNote: {
      newTitle: this.info.title,
      newTxt: this.info.txt,
      id: this.noteId,
      url: ''
      }

    };
  },
  methods: {
    updateNote(ev) {
      // console.log('ev', ev);
      if (ev.target.nodeName === 'H3') this.newNote.newTitle = ev.currentTarget.textContent;
      if (ev.target.nodeName === 'P') this.newNote.newTxt = ev.currentTarget.textContent;
      this.$emit('updateNote', {...this.newNote});
      // console.log('after emit', ev.target.nodeName);
    },
  },
  computed: {
    backgroundColor() {
      return `background-color: ${this.info.style.backgroundColor}`;
    },
  },
  created() {},
};






// <!-- <input type="text" v-model="val" @change="reportVal" :disabled="isDisabled"/> -->
// <!-- <label>
//    {{info.label}}
//    <input type="text" v-model="val" @change="reportVal" />
// </label>   -->
// <!-- <div flex flex-column>
//    <label for="">{{info.title}}</label>
//    <textarea v-model="val" @change="reportVal" rows="5" cols="33">Enter Text...</textarea>
//    </div> -->
//    <!-- <pre>{{info}}</pre> -->