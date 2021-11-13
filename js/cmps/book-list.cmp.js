import bookPreview from '../cmps/book-preview.js'

export default {
    props: ['books'],
    template: `
        <section class="book-list">
            <ul>
                <li v-for="book in books" :key="book.id" class="book-card">
                    <book-preview :book="book" @click.native="onSelect(book)"/>               
                </li>
            </ul>
        </section>
    `,
    data() {
        return {}
    },
    methods: {
        onSelect(book) {
            this.$emit('selected', book);
        }

    },
    components: {
        bookPreview
    }
};

//<button @click="deleteBook(book.id)">Delete</button>