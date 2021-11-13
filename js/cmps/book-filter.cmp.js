export default {
    template: `
    <section class="book-filter">
        <div class="search-container">
            <label>Search: </label>
            <form @submit.prevent="filter">
            <input type="text"  @input="filter" class="search" v-model="filterBy.byName" placeholder="Search book...">
                <input type="number" min="0" placeholder='From Price' class="price-input" v-model.number.lazy="filterBy.fromPrice" >
                <input type="number" max="1000" placeholder="To Price" class="price-input" v-model.number.lazy="filterBy.toPrice" >
                <button class="filterBtn" @click="filter">Filter Price</button>
            </form>
        </div>
    </section>
    `,
    data() {
        return {
            filterBy: {
                byName: '',
                fromPrice: 0,
                toPrice: Infinity
            }
        }
    },
    methods: {

        filter() {
            this.$emit('filtered', {...this.filterBy });
        }
    },
}