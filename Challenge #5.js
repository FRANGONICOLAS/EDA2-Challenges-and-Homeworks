class Person {
    constructor(name, birthdate) {
      this.name = name;
      this.birthdate = birthdate;
      this.children = [];
    }
}

class FamilyTree {
    constructor(root) {
      this.root = root;
    }

    search (name, node = this.root){
        if (!this.root){
            return null;
        }
        
        if (this.root.name === name) {
            return this.root;
        } else {
            const children = node.children;
            const inChildren = children.find(item => item.name === name);
            if (inChildren) {
                return inChildren;
            } else {
                let hasChild;
                children.forEach(item => {
                    if (hasChild){
                        return;
                    }
                    hasChild = this.search(name, item)
                });
                return hasChild;
            }
        }
    }

    insert(value, parent){
        const newNode = new Person(name, birthdate);

        if (!parent) {
            if (!this.root) {
                this.root = newNode;
            } else {
                return null;
            }
        } else {
            const parentNode = this.search(parent);
            parentNode.children.push(newNode);
        }
    }
    
    preOrder(node = this.root) {
        if (!node) {
            return;
        }
        console.log(node.name);
        
        node.children.forEach(child => {
            this.preOrder(child);
        });
    }

    postOrder(node = this.root) {
        if (!node) {
            return;
        }
        node.children.forEach(child => {
            this.postOrder(child);
        });
        console.log(node.name);
    }

    inOrder(node = this.root) {
        if (!node) {
            return;
        }
        if (node.children.length === 0) {
            console.log(node.name);
        } else {
            if (node.children.length > 0) {
                this.inOrder(node.children[0]);
            }
            console.log(node.name);
            for (let i = 1; i < node.children.length; i++) {
                this.inOrder(node.children[i]);
            }
        }
    }
}   

// Crear personas
const bisAbuelaMaterna = new Person("Ana Grisales", "1914-04-02");
const abuelaMaterna = new Person("Maria del carmen Franco Gonzalez", "1954-08-02");
const abuelaPaterna = new Person("Maria de Yanira Osorio", "1954-10-30");
const mama = new Person("Caty Constanza Franco", "1977-07-27");
const tiaMaterna = new Person("Patricia Castñeda", "1982-07-16");
const primoJuan = new Person("Juan Esteban Mellizo", "2006-03-26");
const tioMaterno = new Person("Jefferson Castañeda", "1986-04-12");
const primaMajo = new Person("Maria Jose Castañeda", "2009-08-02");
const primaAlana = new Person("Alana Castañeda", "2013-06-04");
const papa = new Person("Francisco Gonzalez Osorio", "1976-02-20");
const tioPaterno = new Person("Andres Osorio", "1984-01-06");
const tiaPaterna = new Person("Luisa Molano", "1995-07-07");
const yo = new Person("Nicolas Gonzalez Franco", "2004-08-29");

// Crear el árbol genealógico
const familyTree = new FamilyTree(bisAbuelaMaterna);

// Establecer relaciones
bisAbuelaMaterna.children.push(abuelaMaterna);
bisAbuelaMaterna.children.push(abuelaPaterna);
abuelaMaterna.children.push(mama);
abuelaMaterna.children.push(tiaMaterna);
abuelaMaterna.children.push(tioPaterno);
abuelaPaterna.children.push(papa);
abuelaPaterna.children.push(tioPaterno);
abuelaPaterna.children.push(tiaPaterna);
tiaMaterna.children.push(primoJuan);
tioMaterno.children.push(primaMajo);
tioMaterno.children.push(primaAlana);
mama.children.push(yo);


familyTree.preOrder();
familyTree.postOrder();
familyTree.inOrder();
