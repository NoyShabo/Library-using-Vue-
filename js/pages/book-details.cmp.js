import longText from '../cmps/long-text.cmp.js'


export default {
    props: ['book'],
    template: `
        <section class="modal-deatils">
            <img :src="book.thumbnail"/>
            <h2>{{book.title}}</h2>
            <span :class="pageCountClass">{{pageCount}}</span>
            <span :class="ageBook">{{bookNewOldTag}}</span>
            <long-text :text="book.description" @closeModal = "closed" />
        </section>
    
    `,
    data() {
        return {

        }
    },
    methods: {
        closed() {
            this.$emit('closeModal');
        }
    },

    computed: {
        pageCountClass() {
            const pageCount = this.book.pageCount;
            return {
                'long-reading': pageCount > 500,
                "decent-reading": pageCount > 200 && pageCount < 500,
                "light-reading": pageCount < 100,
                "page-tag": true
            }
        },
        pageCount() {
            const pageCount = this.book.pageCount;
            if (pageCount > 500) return "Long Reading";
            if (pageCount > 200) return "Decent Reading";
            if (pageCount < 100) return "Light Reading";
        },
        bookNewOldTag() {
            const thisYear = new Date().getFullYear();
            if ((thisYear - this.book.publishedDate) >= 10) return 'Veteran Book'
            if ((thisYear - this.book.publishedDate) <= 1) return 'New!'
        },
        ageBook() {
            const thisYear = new Date().getFullYear();
            return {
                "old": (thisYear - this.book.publishedDate) >= 10,
                "new": (thisYear - this.book.publishedDate) <= 1
            }
        }
    },
    components: {
        longText
    }
};