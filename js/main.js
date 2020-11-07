
Vue.component('app-header', {
    props:['message','heading','h1'],
    template: `
        <header>
            <app-logo></app-logo>
        </header>
    `
})

Vue.component('app-message', {
    props:['message'],
    template: `<span>{{ message }}</span>`
})

Vue.component('app-logo', {
    template: `<img src="https://picsum.photos/id/237/200/300" alt="">`
})

const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello VUE'
    }
});






Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
    }
})