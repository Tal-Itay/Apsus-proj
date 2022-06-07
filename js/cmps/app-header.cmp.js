export default {
  // props: [""],
  template: `
        <section class="app-header">
            <div class="header-container flex space-between">  
              <div class="logo">
                  <h1>AppSuss</h1>
              </div>
              <nav class="nav-container">
                  <router-link to="/">Home</router-link> |
                  <router-link to="/about">About</router-link> |
                  <router-link to="/notes">Notes</router-link> |
                  <router-link to="/mail/inbox">Mail</router-link>
              </nav>  
            </div>
      </section>
    `,
  components: {},
  created() { },
  data() {
    return {};
  },
  methods: {},
  computed: {},
  unmounted() { },
};
