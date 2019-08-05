let data = {
    links: [
        {
            index: 'home', 
            icon: 'fas fa-home', 
            name: 'Accueil'
        },
        {
            index: 'services', 
            icon: 'fas fa-user-tie', 
            name: 'Services'
        },
        {
            index: 'skills', 
            icon: 'fas fa-graduation-cap', 
            name: 'Compétences'
        },
        {
            index: 'portfolio', 
            icon: 'fas fa-images', 
            name: 'Portfolio'
            // },
            // {
                // index: 'forum', 
                // name: 'Forum'
            }
        ],
    footer: [
                {
                    index: 'sitemap', 
                    icon: 'fas fa-map-signs', 
                    name: 'Plan du site'
                },
                {
                    index: 'author', 
                    icon: 'fas fa-id-card', 
                    name: 'Qui suis-je?'
                },
                {
                    index: 'contact', 
                    icon: 'fas fa-address-book', 
                    name: 'Contactez-moi!'
                },
                {
                    index: 'help', 
                    icon: 'fas fa-info', 
                    name: 'Aide'
                },
                {
                    index: 'faq', 
                    icon: 'fas fa-question', 
                    name: 'Foire aux questions'
                }
                ],



    services: [
        {
            title: 'Création',
            paragraph: "Besoin d'un site web? Vous êtes au bon endroit. Tout sera fait pour répondre à vos besoins."
        },
        {
            title: 'Adaptation',
            paragraph: "Si votre site manque de réactivité ou est mal supporté par les navigateurs, alors il est urgent de le remettre au goût du jour."
        },
        {
            title: 'Optimisation',
            paragraph: "Vous avez un site web mais il ne s'affiche pas correctement sur votre smartphone ou tablette? Rendez-le responsive! De cette façon, vous l'adapterez à tous les supports numériques, fixes ou mobiles, et même pour les écrans TV!"
        },
    ],
        
    languages: [
        {
            class: 'html fab fa-html5',                
            name: 'HTML',
            version: 5,
            desc: 'Langage de balisage dédié au contenu du site'
        },
        {
            class: 'css fab fa-css3-alt',                
            name: 'CSS',
            version: 3,
            desc: 'Feuilles de style pour la mise en forme des pages'
        },
        {
            class: 'js fab fa-js-square',                
            name: 'JavaScript',
            version: '1.8 *',
            desc: 'Langage de programmation, dynamise l\'application'
        },
        {
            class: 'node fab fa-node-js',                
            name: 'Node-JS',
            version: 12,
            desc: 'Langage JavaScript pour API serveur'
        // },
        // {
        //     class: 'db fas fa-database',                
        //     name: 'MongoDB',
        //     version: 4,
        //     desc: 'Base de données pour NodeJS'
        // },
        // {
        //     class: 'php fab fa-php',                
        //     name: 'PHP',
        //     version: 7,
        //     desc: 'Langage backend'
        }
        
    ],
    frameworks: [
        {
           class: 'bs fab fa-bootstrap',                
            name: 'Bootstrap',
            version: 4,
            desc: 'Framework facilitant la mise en forme'
        },
        {
            class: 'sass fab fa-sass',                
            name: 'Sass',
            version: 1.22,
            desc: 'Framework facilitant encore plus la mise en forme'
        },
        {
            class: 'react fab fa-react',                
             name: 'React',
             version: 16,
             desc: 'Framework JS facilitant la création des sites web'
         },
         {
             class: 'vue fab fa-vuejs',                
             name: 'Vue JS',
             version: 2,
             desc: 'Semblable à React, dernière génération'
             // },
             // {
                 //     class: 'angular fab fa-angular',                
                 //     name: 'Angular',
                 //     version: 7,
                 //     desc: 'Framework semblable en TypeScript'
             }
        
    ],
    
    creations: [
        {
            url: 'voyages.fabezio.com',                
            img: 'voyage.png',
            mod: 'voyage',
            name: 'Travel Agency',
            desc: 'Premier site en HTML / CSS'
        },
        {
            url: 'snake.fabezio.com',                
            img: 'snake-maj.png',
            mod: 'snake',
            name: 'Snakey',
            desc: 'Version JS de Snake'
        },
        {
            url: 'actrices.fabezio.com',                
            img: 'actrices.png',
            mod: 'actrices',
            name: 'Top 5 Actrices',
            desc: 'Site en jQuery'
        },
        // {
        //     url: 'burger-code.fabezio.com',                
        //     img: 'burger.png',
        //     name: 'Burger Code',
        //     desc: 'Créé en PHP/SQL'
        // },
        // {
        //     url: 'burger-code.fabezio.com/admin',                
        //     img: 'burger-admin.png',
        //     name: 'Burger Code API',
        //     desc: 'Administration de BurCo (Sécurisée)'
        // },
        
    ],
    social: [
        {
            link: "#",
            logo: "fab fa-twitter-square"
        },
        {
            link: "#",
            logo: "fab fa-facebook-square"
        },
        {
            link: "#",
            logo: "fab fa-linkedin"
        },
        {
            link: "#",
            logo: "fab fa-github-square"
        // },
        // {
        //     link: "#",
        //     logo: "fab fa-google-plus-square"
        // },
        // {
        //     link: "#",
        //     logo: "fab fa-youtube-square"
        }
    ],
    isActive: true
}

// const {social} = data.social;
// const google = {
    //     link: "#", logo
    // }
    

const vm = new Vue ({
    el: "#app",
    data: data,
    computed: {
            // activeLink: function() {
            //     active: this.isActive
        }
    
})

// const {links} = data.social 
data.links.push({index: 'forum', icon: 'fas fa-comments', name: 'Forum'})

// data.social.push({link: "#", logo: "fab fa-google-plus-square"});
// data.social.push({link: "#", logo: "fab fa-youtube-square"});