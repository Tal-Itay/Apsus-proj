export default {
  name: "actions-nav",
  props: ["note"],
  template: `
<section class="edit-note-container">
            <div class="actions-icon-container flex">                  
                <i class="fa-solid fa-thumbtack" title="Pin note"></i>
                <i class="fa-solid fa-palette" title="Edit color"></i>
                <i class="fa-solid fa-envelope" title="Send to mail"></i>
                <!-- <i class="fa-solid fa-pen-to-square"></i> -->
                <i class="fa-solid fa-trash-can"  @click="remove(note.id)" title="Delete"></i>
            </div>
</section>
`,
  data() {
    return {};
  },
  components: {},
  created() {
    // console.log("action nav", this.note);
  },
  methods: {
    remove(id) {
      this.$emit("remove", id);
    },
  },
  computed: {},

};
