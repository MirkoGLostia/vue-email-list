

const { createApp } = Vue;

createApp ( {
    data () {
        return {
            numberOfMails : '' ,
            mailGot : [],
        }
    },

    methods : {
        getNumberOfMails : function () {

            this.mailGot = [];

            for (let i = 0; i < this.numberOfMails; i++) {
                axios
                .get ('https://flynn.boolean.careers/exercises/api/random/mail')
                .then ( resp => {
                    
                    const mail = resp.data.response;
    
                    console.log(mail);
        
                    this.mailGot.push(mail)
                    
                })
            };

        }
    },

    computed : {

    },

    mounted () {

        

    }
}).mount ("#list-container");