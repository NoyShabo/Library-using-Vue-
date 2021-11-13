import appHeader from './cmps/app-header.cmp.js'
import bookApp from './pages/book-app.cmp.js'
import appFooter from './cmps/app-footer.cmp.js'

const options = {
    el: '#app',
    template: `
        <section>
            <app-header />
            <book-app />
            <app-footer/>
        </section>
    
    `,

    components: {
        appHeader,
        bookApp,
        appFooter
    }
};

new Vue(options);
//   <app-footer />