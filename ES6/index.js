/*/ 
    *** Les classes ES6 ***

        Class = BluePrint / Modèle, c'est la représentation abstraite. 
        Une classe est un essemble de propriété caractérisant un certain ensemble
        d'objet. 

        Instance = Clone / Intanciation d'une classe, c'est la représentation 
        particulière. C'est à dire qu'une instance possède les même propriété que sa
        classe.

        JS OOP => non basé sur les classes mais sur les prototypes (objet). 

        Class Pattern => like JAVA C++, on essaye d'imiter ce qui se passe dans ces
        language (voir version class ES5).

        Les classes ES6 => sucre syntaxique => /!\ Toujours le même modèle d'héritage 
        C'est à dire basé sur les prototypes => objet. Depuis ES6 une syntaxe plus 
        simple à été mise en place pour mettre en place ce pattern, mais le modèle d'héritage
        est toujours basé sur le prototype. 
        
        ES6 class => Fonction particulière (déclaration avant instanciation !!)

        constructor() => Méthode pour créer nouveaux objets et initialisé avec des 
        attributs

        méthode du prototype => Ce sont les méthodes dont vont hériter les nouvelles 
        instances crées à partir de la classe. Les nouvelles instances auront donc accès
        à ces méthodes via leur prototype.

        créer une nouvelle instance => new + ClassName()

 /*/

class Restaurant {
    //On retrouve l'idée de fonction constructeur
    constructor(name, location) {
        //On initialise la nouvelle instance avec des attributs
        this.name = name;
        this.location = location;
    }

    sayHello() {
        return `Hello ! Welcole to ${this.name} - ${this.location}. May I take your order, please?`;
    }
}

//On crée une nouvelle instance de la classe
let myRestaurant = new Restaurant('Mon Restaurant', 'Paris');

/*/

    *** Héritage de classes ES6

    extends => mot clé qui nous permet de créer un nouveau modèle de classe à partir
    d'un modèle parent => class Fille extends Parent

    super() => nous permet d'appeler la méthode constructor() de la classe parente.
    Nous permet d'initialiser la novuelle instance crée à partir de la classe fille
    avec les attributs de la classe parente. 

    super.'parentMethod' => nous permet d'appeler les méthodes défini dans le
    prototype de la classe parente. 

/*/

//On crée notre classe fille qui va hériter de la classe parente

class SushiRestaurant extends Restaurant {

    constructor(name, location, lang) {
        //super() appel constructor() de Restaurant
        //Initialise la nouvelle instance avec les attributs name et location
        super(name, location);
        //Il faut appeler super() vant de pouvoir utiliser 'this'
        this.lang = lang;
    }

    makeSushi() {
        console.log('Here\'s your sushis');
    }

    sayHello() {
        //Appelle la méthode sayHello() de la classe parente
        //Ici super.sayHello() => Restaurant.prototype.sayHello.call(this) en ES5
        return `${super.sayHello()} We can speak ${this.lang} also.`
    }
}

let sushiPalace = new SushiRestaurant('Sushi Palace', 'Tokyo', 'Japanese');

sushiPalace.sayHello();

