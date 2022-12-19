
// creato array di oggetti 
const{
    createApp
} = Vue

createApp({
    data(){
        return{
            
            itemActive: 0,
            videogiochi: [
                {
                    img: "./img/01.webp",
                    titolo: "Spiderman: Miles Morales",
                    descrizione: "Il supereroe più amato di New York torna in una nuova veste"
                },
                {
                    img: "./img/02.webp",
                    titolo: "Ratchet & Clank: Rift Apart",
                    descrizione: "L'ultima avvincente avventura di Ratchet e Clank, questa volta saranno affiancati da dei nuovi alleati"
                },
                {
                    img: "./img/03.webp",
                    titolo: "Fortnite",
                    descrizione: "Beh, non c'è nemmeno bisogno di descrivere questo enorme gioco che ha portato al successo CiccioGamer"
                },
                {
                    img: "./img/04.webp",
                    titolo: "Stray",
                    descrizione: "Vesti i panni di un simpatico gattino in un mondo post-apocalittico"
                },
                {
                    img: "./img/05.webp",
                    titolo: "Marvel Avenger",
                    descrizione: "Tornano i vendicatori più forti del pianeta, una nuova minaccia imcombe"
                }
                
            ],
        }
        },
        methods: {
            next()
            {
                this.itemActive++;
                if(this.itemActive > this.videogiochi.length - 1){
                    this.itemActive = 0
                }
            },
            prev(){
                this.itemActive--;
                if(this.itemActive < 0){
                    this.itemActive = this.videogiochi.length - 1
                }
            },
            changeImage(index)
            {
                this.itemActive = index;
            },
        },
        created() {
            autoPlay = setInterval(this.next, 3000)
            }
        

}).mount('#app')

