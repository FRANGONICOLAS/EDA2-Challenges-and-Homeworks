class person{
    constructor(namePerson, timeArrived) {
        this.namePerson = namePerson,
        this.timeArrived = timeArrived
    }
}
class queue{
    constructor(){
        this.queue = [];
    }

    enqueue(namePerson){
        this.queue.push([namePerson]);
        return this.queue;
    }

    dequeue(){
        return this.queue.shift();
    }

    peek(){
        return this.queue[0];
    }

    size(){
        return this.queue.length;
    }

    isEmpty(){
        return this.queue.length === 0;
    }

    print() {
        this.queue.forEach(personArray => {
          const person = personArray[0]; // Extract the person object
          console.log(`Nombre: ${person.namePerson}, Tiempo de llegada: ${person.timeArrived}`);
        });
    }
}
const patricio = new person('Patricio Estrella', '10:11');
const patricia = new person('Patricia Maria', '10:30');

const ATMqueue = new queue();

console.log(ATMqueue.enqueue(patricio));
console.log(ATMqueue.enqueue(patricia));
ATMqueue.print();
console.log(ATMqueue.peek());
console.log(ATMqueue.dequeue());
console.log(ATMqueue.dequeue());
console.log(ATMqueue.isEmpty());
