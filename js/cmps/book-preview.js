export default {
    props: ['book'],
    template: `
    <section>
        
        <img :src="book.thumbnail" :alt="book.title"/>
        <h3>{{book.title}}</h3>
        <h2 :class="priceClass">{{price}}</h2>
        </div>
    </section>
    `,
    computed: {
        price() {
            const currency = this.book.listPrice.currencyCode;
            let currencyString = '';
            switch (currency) {
                case 'EUR':
                    currencyString = ' €';
                    break;
                case 'ILS':
                    currencyString = ' ₪';
                    break;
                case 'USD':
                    currencyString = ' $';
                    break;
            }
            return this.book.listPrice.amount + currencyString;
        },
        priceClass() {
            return { green: this.book.listPrice.amount <= 20, red: this.book.listPrice.amount >= 150 }
        }
    }
}