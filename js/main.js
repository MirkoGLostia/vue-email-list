

const { createApp } = Vue;

createApp ( {
    data () {
        return {
            numberOfMails : 10,
            mailGot : [],
        }
    },

    methods : {

    },

    computed : {

    },

    mounted () {

        for (let i = 0; i < this.numberOfMails; i++) {
            axios
            .get ('https://flynn.boolean.careers/exercises/api/random/mail')
            .then ( resp => {
                
                const mail = resp.data.response;

                console.log(mail);
    
                this.mailGot.push(mail)
                
            })
        }

    }
}).mount ("#list-container");