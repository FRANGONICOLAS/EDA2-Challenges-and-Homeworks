class Libro{
    constructor(bookName, ISBN, author, editorial){
        this.bookName=bookName,
        this.ISBN=ISBN,
        this.author=author,
        this.editorial=editorial
    }
}

class Libros{
    constructor(){
        this.stack=[];
        this.count = 0;
    }

    push(libro){
        this.stack[this.count]=libro;
        this.count++;
        return this.stack
    }

    pop(){
        this.count--;
        const libro = this.stack[this.count];
        delete this.stack[this.count];
        return libro;
    }

    peek(){
        return this.stack[this.count-1];
    }

    size(){
        return this.count;
    }

    print() {
        this.stack.forEach(libro => {
          console.log(`Título: ${libro.bookName}, ISBN: ${libro.ISBN}, Autor: ${libro.author}, editorial: ${libro.editorial}`);
        });
    }
}

const libro1 = new Libro('Si lo hubiera sabido antes', 'Carlos devis', 'ISBN123', 'Sin Fronteras');
const libro2 = new Libro('Piense y hágase rico', 'Napoleon hill', 'ISBN456', 'Globals ediciones');

const libros = new Libros();
console.log(libros.size());
console.log(libros.push(libro1));
console.log(libros.push(libro2));
libros.print();
console.log(libros.size());
console.log(libros.peek());
console.log(libros.pop());
console.log(libros.size());
libros.print();