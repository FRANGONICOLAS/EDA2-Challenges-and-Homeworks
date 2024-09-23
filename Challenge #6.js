class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
}

class City {
    constructor(name) {
        this.name = name;
    }
}

class friendsNet {
    constructor() {
        this.nodes = [];
        this.adjList = {};
    }

    addNode(node) {
        this.nodes.push(node);
        this.adjList[node] = [];
    }

    addEdge(node1, node2) {
        this.adjList[node1].push(node2);
        this.adjList[node2].push(node1);
    }

    printGraph() {
        console.log(this.adjList);
    }

    searchNode(value){
        if (!this.nodes.length) {
            return null;
        }
        return this.nodes.find(node => node === value);
    }

    printAdjacencyList(node){
        if (this.searchNode(node)) {
            console.log(this.adjList[node]);
        } else {
            console.log('Node not found');
        }
    }

    printFriendsNet(cityName) {
        const people = this.nodes.filter(node => node instanceof Person && node.city.name === cityName);
        if (people.length > 0) {
            console.log(`${cityName}:`);
            people.forEach(person => console.log(`${person.name}, con ${person.age} años de edad, esta 3km de ti`));
        } else {
            console.log(`No hay amigos en ${cityName} cerca de ti`);
        }
    }
}

const Cali = new City('Cali');
const Medellin = new City('Medellin');

const friend_1 = new Person ('Laura', 18, Cali);
const friend_2 = new Person ('Ana', 20, Cali);
const friend_3 = new Person ('Maria', 32, Medellin);
const friend_4 = new Person ('Diana', 25, Medellin);

const lasAmiguitas = new friendsNet();

lasAmiguitas.addNode(friend_1);
lasAmiguitas.addNode(friend_2);
lasAmiguitas.addNode(friend_3);
lasAmiguitas.addNode(friend_4);
lasAmiguitas.addNode(Cali);
lasAmiguitas.addNode(Medellin);

lasAmiguitas.addEdge(friend_1, Cali);
lasAmiguitas.addEdge(friend_2, Cali);
lasAmiguitas.addEdge(friend_3, Medellin);
lasAmiguitas.addEdge(friend_4, Medellin);

lasAmiguitas.printFriendsNet('Medellin');
lasAmiguitas.printFriendsNet('Cali');