import notePreview from "./note-preview.cmp.js";
import noteText from "./note-txt.cmp.js";

export default {
  props: ["notes"],
  template: `
        <section class="note-list">
        <form @submit.prevent="save">
                <!-- <div v-for="(cmp, idx) in notes.cmps"> -->
                    <component :is="note.type" v-for="note in notes" :info="note.info" @setVal="setAns"></component>
                <!-- </div> -->
                <button>Save</button>
            </form>
            <!-- <ul>
                <li v-for="note in notes" :key="note.id" class="note-list-container clean-list">
                <note-preview :note="note"/>
                <div class="actions-container">

                    <button @click="onRemoveNote(note.id)">X</button> 
                </div>
                </li>
            </ul> -->
        </section>
    `,
  components: {
    notePreview,
    noteText,
  },
  created() {
    console.log("note-list created", this.notes);
  },
  data() {
    return {
  }
  },
  methods: {

  },
  computed: {},
  mounted() {
    console.log("cmp", cmp.type);
  },
  unmounted() {},
};
