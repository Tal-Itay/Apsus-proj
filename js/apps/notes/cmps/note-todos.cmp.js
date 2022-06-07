export default {
  name:"todos-note",
  props: ["info", "noteId"],
  template: `
        <section :style="backgroundColor" class="todos-container">  
          <h3 contenteditable="true" class="todo-header">{{info.title}}</h3>
          <!-- <h3 @keyup="updateNote" contenteditable="true" class="todo-header">{{info.title}}</h3> -->
            <div v-for="task in info.todos" class="note-todos-container flex">  
               <input  type="checkbox" :id="task.txt" :value="task">
                    <label v-show="!isLineClicked" :for="task.txt">{{task.txt}} </label> 
                    <!-- <label v-show="!isLineClicked" :class="croessedOut" @click="togglecrossOut" :for="task.txt">{{task.txt}} </label>  -->
                    <input v-show="isLineClicked" type="text" v-model="task.txt" class="todo-input">
                    <i class="fa-solid fa-pen-to-square" @click="toggleEdit"></i>
                    <i class="fa-solid fa-trash-can" @click="removeTask"></i> 
            </div>
        </section>
          `,

  data() {
    return {
      isLineClicked: false,
      // isCrossedOut: false,
      // newNote: {
      //   newTitle: this.info.title,
      //   newTxt: this.info.txt,
      //   id: this.noteId
      //   },
      // val: "",
      // selectedTasks: [],
    };
  },
  methods: {
    // updateNote(ev) {
      // if (ev.path[0].localName === 'h3') this.newNote.newTitle = ev.currentTarget.textContent;
      // if (ev.path[0].localName === 'span') this.newNote.newTxt = ev.currentTarget.textContent;
      // this.$emit('updateNote', {...this.newNote});
      // console.log('after emit', this.newNote);
    // },
    toggleEdit() {
      this.isLineClicked = !this.isLineClicked;
    },
    togglecrossOut() {
      this.isCrossedOut = !this.isCrossedOut;
    }
  },
  computed: {
    backgroundColor() {
      return `background-color: ${this.info.style.backgroundColor}`;
    },
    // crossedOut() {
    //   return this.isCrossedOut ? "crossed" : "todo";
    // },

    // removeTask(){}
  },
  created() {
    // console.log(this.info);
    // console.log(this.info.label);
  },
};
