import { bookService } from '../services/book-service.js'
import bookList from '../cmps/book-list.cmp.js'
import bookDetails from '../pages/book-details.cmp.js'
import bookFilter from '../cmps/book-filter.cmp.js'

export default {
    template: `
        <section class="book-app">
            <book-filter @filtered="setFilterBooks"/>
            <book-list :books="booksToShow"  @selected="changeSelected"/>
            <book-details v-if="selectedBook" @closeModal="unSelected" :book="selectedBook"/>
        </section>
    `,
    data() {
        return {
            books: bookService.query(),
            filterBy: null,
            selectedBook: null
        }
    },

    methods: {
        changeSelected(book) {
            this.selectedBook = book;
        },
        unSelected() {
            this.selectedBook = null;
        },
        setFilterBooks(filter) {
            this.filterBy = filter;
        }
    },

    computed: {
        booksToShow() {
            if (!this.filterBy) {
                return this.books;
            }
            const searchStr = this.filterBy.byName.toLowerCase();
            return this.books.filter(book => {
                return ((book.title.toLowerCase().includes(searchStr) &&
                    book.listPrice.amount >= this.filterBy.fromPrice &&
                    book.listPrice.amount <= this.filterBy.toPrice)) || !this.filterBy.toPrice;
            });
        }
    },
    components: {
        bookService,
        bookList,
        bookDetails,
        bookFilter
    }

}