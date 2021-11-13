export default {
    props: ['text'],
    template: `
        <section>       
            <p>{{description}}</p>
            <button v-if="expandText" @click="toggleBtn" class="readMoreLess">{{txtOnBtn}}</button>
            <button @click="closeModal" class="closeBtn">Close</button>
        </section>
    
    `,
    data() {
        return {
            expandText: null,
            btnPress: false
        }
    },
    created() {
        if (this.text.length > 100) {
            this.expandText = true;
        }
    },

    methods: {
        toggleBtn() {
            this.btnPress = !this.btnPress;
        },
        closeModal() {
            this.expandText = false;
            this.btnPress = false;
            this.$emit('closeModal');
        }
    },

    computed: {
        description() {
            this.expandText = this.text.length > 100;
            if (this.expandText && !this.btnPress) {
                return this.text.slice(0, 100);
            } else {
                return this.text;
            }

        },
        txtOnBtn() {
            return this.btnPress ? 'Less' : 'Read More';
        }
    }
};