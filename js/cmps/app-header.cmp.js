export default {
    template: `
        <header>
            <h1>My Library</h1>
            <h2>{{clock}}</h2>
            <div class="flex">  
                <h3>{{date}}</h3>
                <h5>{{digitalTime}}</h5>
            </div>
        </header>
    `,
    data() {
        return {
            time: new Date()
        }
    },
    created() {
        this.interval = setInterval(() => {
            this.time = new Date();
        }, 1000);
    },
    destroyed() {
        clearInterval(this.interval);
    },
    computed: {
        date() {
            return this.time.toLocaleString().split(',')[0];
        },

        clock() {
            let clock = this.time.toLocaleString().split(',')[1].slice(0, 6);
            if (clock.split(':')[0] < 9) {
                clock = this.time.toLocaleString().split(',')[1].slice(0, 5);
            }
            return clock;
        },

        digitalTime() {
            return this.time.toLocaleString().split(',')[1];
        }

    }
}