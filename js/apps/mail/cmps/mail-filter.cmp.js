

export default {
    // props: [""],
    template: `
        <section class="mail-filter">
            <div class="filter-container ">
                    <label>
                            Filter by
                            <div>
                                <input v-model="filterBy.subject" type="text" placeholder="Search an email...">
                            </div>
                            <div>
                                <label for="">
                                    Filter only read
                                </label>
                                <input type="checkbox" v-model="filterBy.isRead" >
                            </div>
                    </label>
            </div>
        </section>
    `,
    components: {},
    created() { },
    data() {
        return {
            filterBy: {
                subject: '',
                isRead: false,
            }
        };
    },
    methods: {
        setFilter() {
            this.$emit('filtered', this.filterBy);
        }
    },
    watch: {
        filterBy: {
            handler() {
                this.setFilter();
            },
            deep: true
        }
    },
    computed: {},
    unmounted() { },
};