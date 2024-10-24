const LIST = [
    {
        id: 1,
        nome: 'Yoda',
        avatar: 'img/yoda.png'
    },
    {
        id: 2,
        nome: 'Luke',
        avatar: 'img/luke.png'
    },
    {
        id: 3,
        nome: 'Leia',
        avatar: 'img/leia.png'
    },
    {
        id: 4,
        nome: 'Hansolo',
        avatar: 'img/hansolo.png'
    },
    {
        id: 5,
        nome: 'Vader',
        avatar: 'img/vader.png'
    },
    {
        id: 6,
        nome: 'Chewbacca',
        avatar: 'img/chewbacca.png'
    },
    {
        id: 7,
        nome: 'R2D2',
        avatar: 'img/r2d2.png'
    },
    {
        id: 8,
        nome: 'C3pO',
        avatar: 'img/c3po.png'
    }
]

const App = new Vue({
    el: '#app',
    data: {
        title: 'Star Wars Lego',
        userName: 'Janaina',
        characters: LIST,
        searchName: ''
    },
    methods: {
        like(userName){
            alert(`O personagem ${userName} recebeu um like!`)
        },
        remove(id){
            const list = this.characters

            const result = list.filter(item => {
                return item.id !== id
            })

            this.characters = result
        },
        search(){
            if (this.searchName == ''){
                return alert('O campo de busca é obrigatório!')  
            }

            const list = this.characters = LIST

            const result = list.filter(item => {
                return item.nome === this.searchName
            })

            if (result.length <= 0){
                alert('Nenhum registro encontrado.')
            }else {
                this.characters = result
            }
        }
    }
})