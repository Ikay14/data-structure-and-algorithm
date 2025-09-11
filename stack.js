/* Stack
 They are first in last out
*/

// function: push, pop, peek, length

var letters = []

var words = 'ekitike'

var reverseword = ''

for (let i= 0; i < words.length; i++) {
    letters.push(words[i])
}

for (let i = 0 ; i < words.length; i++){
    reverseword += letters.pop()
}

if(words === reverseword) {
    console.log(words + ' is a palindrome');
} else {
    console.log(words + ' is a not a palindrome');
}
 

function Stack () {
    this.storage = {}
    this.count = 0 // index in the storage. i.e operation are done sequentially eith pop or push 


this.push = function (value){
    this.storage[this.count] = value // this.storage[this.count] means the current count index in the storage or current num of items in storage this.storage[0] = 10 sequentially. will add 10 in thw storage at index 0 and so on 
    this.count++
}

this.peek = function(){
    return this.storage[this.count-1] // return the last index value parsed 
}
// this.peekLastPosition = function(){
//     return this.storage[this.count] // return the count index by the value parsed 
// }

this.pop = function(){
   if( this.count === 0){ // if the count has finished, i.e at index 0 return undefined, i.e no item left in the stack
    return undefined
} 
    this.count-- // pop the an item index
    var result = this.storage[this.count] // remove from this particular index from the storage
    delete this.storage[this.count] // delete this count from the storage 
    return result // return the  result after the itemis removed 
}

this.size = function(){
    return this.count
} 

}

var myStack = new Stack()
myStack.push(10)
myStack.push(20)
console.log('peek 1', myStack.peek());
console.log('show me the last item on the stack', myStack.peekLastPosition())
console.log('pop', myStack.pop())
console.log('peek 2', myStack.peek());
console.log('size 1', myStack.size());
myStack.push('my data structure class')
console.log('size 2', myStack.size());
console.log('peek 3', myStack.peek());
console.log('pop', myStack.pop());
console.log('size 3', myStack.size());


