

const { createApp } = Vue;

createApp ( {
    data () {
        return {
            numberOfMails : '' ,
            saveState : '',
            mailGot : [],
        }
    },

    methods : {
        getNumberOfMails : function () {

            this.mailGot = [];

            this.saveState = this.numberOfMails;

            for (let i = 0; i < this.numberOfMails; i++) {
                axios
                .get ('https://flynn.boolean.careers/exercises/api/random/mail')
                .then ( resp => {
                    
                    const mail = resp.data.response;
    
                    console.log(mail);
        
                    this.mailGot.push(mail)
                    
                })
            };

            this.numberOfMails = '';

        }
    },

    computed : {

    },

    mounted () {

        

    }
}).mount ("#list-container");