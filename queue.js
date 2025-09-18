var Queue = function () {
    collection = []

    this.enqueue = function(e){
        return collection.push(e)
    }

    this.dequeue = function(){
        return collection.shift()
    }

    this.front = function(){
        return collection[0]
    }

    this.print = function(){
        return collection
    }

    this.isEmpty = function(){
        return ( collection.length === 0)
    }

    this.size = function(){
        return collection.length
    }

    // this.getRear() = function(){
    //     return collection[-1]
    // }


}


    function PriorityQueue () {
    var collection = []

    this.printCollection = function(){
        console.log(collection);
}
    this.enqueue = function(e){
        if(this.isEmpty()){
            collection.push(e)
        } else {
            var added = false
            for (let i =0; i < collection.length; i++){
                if(e[1] < collection[i][1]){
                    collection.splice(i, 0, e);
                    added= true;
                    break;
                }
            }
            if (!added) {
                collection.push(e)
            }
        }
    }
    this.dequeue = function(){
        var value = collection.shift()
        return value[0]
    }

    this.front = function (){
        return collection[0]
    }

    this.print = function(){
        return collection
    }

    this.isEmpty = function(){
        return ( collection.length === 0)
    }

    this.size = function(){
        return collection.length
    }
}

var pq = new PriorityQueue()
pq.enqueue(['task a', 1])
pq.enqueue(['task b', 2])
pq.enqueue(['task c', 3])
pq.enqueue(['task important', 0])
console.log(pq.front())
console.log(pq.dequeue());

pq.printCollection()





// var coreQueue = new Queue()

// coreQueue.enqueue(4)
// coreQueue.enqueue('boy')
// coreQueue.enqueue(1)
// console.log(coreQueue.print());
// console.log(coreQueue.size());
// console.log(coreQueue.dequeue())
// console.log(coreQueue.size());
// console.log(coreQueue.print());