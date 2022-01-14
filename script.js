let app = new Vue({
    el: "#newapp",
    data: {
        corrente: 0,
        imagesArray: [
            'img/01.jpg',
            'img/02.jpg',
            'img/03.jpg',
            'img/04.jpg',
            'img/05.jpg'
        ],
    },
    methods: {
        iscorrente: function(indeximages){
            if(indeximages == this.corrente){
                return "active";
            }
            return "";
        },
        next: function () {
            this.corrente ++;
            if (this.corrente == this.imagesArray.length) {
                this.corrente = 0;
            }
        },
        prev: function () {
            this.corrente --;
            if (this.corrente < 0) {
                this.corrente = this.imagesArray.length - 1;
            }
        },
    },
});