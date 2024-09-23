class Tasks {
    constructor(title, description, next = null) {
      this.title = title;
      this.description = description;
      this.next = next;
    }
  }
  
class Lista {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    append(title, description) {
      const newTask = new Tasks(title, description);
      if (!this.head) {
        this.head = newTask;
      } else {
        this.tail.next = newTask;
      }
      this.tail = newTask;
    }
  
    peek(title, current = this.head) {
      if (this.head === null) {
        return false;
      }
      if (current.title === title) {
        return current;
      }
      return this.peek(title, current.next);
    }
  
    size(current = this.head, count = 0) {
      if (!current) {
          return count
      }
      return this.size(current.next, count + 1)
    }
  
    remove(title, current = this.head, prev = null) {
      if (current === null) {
        return false;
      }
      if (current.title === title) {
        if (prev === null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        if (current.next === null) {
          this.tail = prev; 
        }
        return true;
      }
      return this.remove(title, current.next, current);
    }
  
    print() {
      let task = this.head;
      while (task != null) {
        console.log(
          `Task: ${task.title} | Description: ${task.description} | Next ${
            task.next ? task.next.title : 'null' 
          }`
        );
        task = task.next;
      }
    }
  }
  
  const TODO = new LinkedList();
  TODO.append("Task 1", "Tarea EDA");
  TODO.append("Task 2", "Tarea Ing.Soft");
  TODO.append("Task 3", "Tarea Redes de datos");
  TODO.print();
