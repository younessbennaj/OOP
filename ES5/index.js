/*/

Objectif => Passer une commande et obtenir un sushi

Le but de ce programme est de mettre en lumière l'utilité de l'abstraction en programmation.

Abstraction => Nous permet de nous concentrer et d'agir sur une petite partie seulement d'un système plus
complèxe. L'abstraction nous permet de cacher la compléxité. 

    e.g: Un restaurant de sushi

    explaination: Ici dans le cadre d'un restaurant, le client n'a pas besoin de savoir comment préparer
    des sushis ni de savoir maitriser les outils du maitre, il n'a pas non plus accès aux cuisines et n'a
    aucune idée de ce qu'il se passe en cuisine. On "cache" au client les détails de la préparation des
    mets délicieux.

Interface => Nous permet de communiquer avec le système plus complèxe en nous proposant un nombre limité
de requète qu'il est possible de faire et ce qu'on aura en échange. Grâce à l'interface nous n'avons pas
besoin de savoir comment le système fonctionnent pour pouvoir l'utiliser.

    e.g: Le menu du restaurant / L'employé à l'acceuil 

    explaination: Le client n'a pas besoin de savoir cuisiner son repas, il a seulement besoin d'un menu ou 
    d'un employé qui lui indique quelles requètes (commandes) il peut faire pour obtenir ce qu'il souhaite. 

*** PROCESS ***

Le client passe une commande et récupère son repas.

e.g: myRestaurant.passOrder('B2'); //On doit nous retourner notre repas en fonction de notre commande
(menu B2)

*** PROGRAMMING PARADIGM ***

    => Object-Oriented Programming

    Object-oriented programming: OOP is a common and powerful programming paradigm that heavily incorporates
    ideas of abstraction.

    Abstraction: Abstraction allows programmers to write code that shows the essential features of a piece
    of software without including the background details

*** PATTERNS ***
    
    => JS Class (ES5 et ES6)
    => Prototypal Inheritance 

    Classes: grouper les données et les fonctionnalité ensemble au sein d'unité logique séparé.

/*/

/*/
                                            *** ES5 Classes *** 

Classe = représentation abstraitre => L'enssemble des proprités caractérisant un certain ensemble d'objets

Instance = représentation particuluère => C'est l'instanciation d'une classe. Elle va posséder les même
proprités que sa classe.

/*/

function Restaurant(name, location) {
    //Les attributs de notre classe
    this.name = name;
    this.location = location;
}

/*/

*** Méthodes du prototype ¨***

On ajoute des méthodes à la proprité prototype de notre classe => les nouvelles instances vont en hériter

/*/

Restaurant.prototype.sayHello = function () {
    return (`Hello ! Welcole to ${this.name} - ${this.location}. May I take your order, please?`);
}


//new + Function Contructor => nouvelle instance de la classe

var myRestaurant = new Restaurant('Mon restaurant', 'Paris');

//Notre nouvelle instance hérite des méthodes de notre classe (elle y accède via son prototype).
//C'est un peu notre interface elle posssède de points d'entrée et donne un resultat en retour 
//Ici on dit bonjour => en retour on a un message qui nous invite à passer commande 
//Ici l'interface est le comptoire 
myRestaurant.sayHello(); // 'Bonjour ! Bienvenu à ... , puis-je prendre votre commande ?'

// Héritage de classe => Un restaurant spécialisé e.g: restaurant japonais

/*/

Mettre en place l'héritage de classe ? (ES5 classes) 

    1) Faire hériter la classe fille des attributs de le classe parente
    
    2) Faire hériter la classe fille des méthodes définie dans le prototype de la classe parente

    3) On gère le side effect du constructeur de la classe fille
/*/

//On crée la fonction constructeur de la classe fille

function sushiRestaurant(name, location, lang) {
    /*/
        => Faire hériter la classe fille des attributs de le classe parente

        On appelle la fonction constructeur de la classe parente avec la méthodes call().

        On passe this comme argument à call() pour que la nouvelle instance crée à partir de la classe
        fille puisse hériter des attributs de la classe parente.

        On passe également les paramètre nécessaire pour initialisé ces attributs
    /*/
    Restaurant.call(this, name, location);
    this.lang = lang;
}

// => Faire hériter la classe fille des méthodes définie dans le prototype de la classe parente 

sushiRestaurant.prototype = Object.create(Restaurant.prototype);

// => On gère le side effect du constructeur de la classe fille

sushiRestaurant.prototype.constructor = sushiRestaurant;

//On va ajouter une méthode au prototype de la classe fille => les nouvelles instances crée à partir de 
//la classe fille vont en hériter.
sushiRestaurant.prototype.makeSushi = function makeSushi() {
    return 'Here\'s your sushis';
}

//Ce pattern nous permet d'accéder à des fonctions définies sur l'objet parent
sushiRestaurant.prototype.sayHello = function sayHello() {
    //On appelle la fonction de l'objet parent en lien this à nouvelle instance
    //Quand cette fonction sera appelé, this aura pour valeur la nouvelle instance (un objet)
    return `${Restaurant.prototype.sayHello.call(this)} We can speak ${this.lang} also.`;
};



var sushiPalace = new sushiRestaurant('Sushi Palace', 'Tokyo', 'Japanese');

//La méthode héritée par la classe parente
sushiPalace.sayHello();

//La méthode héritée par la classe fille
sushiPalace.makeSushi();

// => Ajouter l'objet employé

