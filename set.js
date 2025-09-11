function mySet () {
    var collection = [] // this will hold all the items on the set

    this.has = function (element){
        return (collection.indexOf(element)!== -1) // this check wit the method indexOf if the element exists in the collection array
        //the indexOf return -1(false) if the element isnt found, if found it returns the index of the first character of the element in the array
    }
    // add to cset
    this.add = function(element){ 
        if (!this.has(element)){ // checks if the element is in the collection by calling the has method
            collection.push(element) // if false push element
            return true // return This true is a signal back to the caller: “Yes, the element was successfully added.”
        }
         return false // return This true is a signal back to the caller : “No, the element wasn’t added because it already exists.”
    }

    // remove from the set
    this.remove = function(element){
        if (this.has(element)) { // this calls the has method to check if the intended element exists
            index = collection.indexOf(element) // gets the postion or the index of this element in the collection 
            collection.splice(index, 1) // use the splice method to remove this element from the collection array
            return true // return This true is a signal back to the caller: “Yes, the element was successfully removed.”
        }
            return false // return This true is a signal back to the caller: “No, the element doesn't exist and nothing was removed.”
    }

    // value
    this.values = function(){
       return collection // return the contents of the collection array
    }
    // union of sets
    this.union = function (newSets){
        const unionSet = new mySet() // instantiate a new set 
        const firstSet = this.values() // call the values of the
        console.log(firstSet);
        
        const secondSet = newSets.values()

        firstSet.forEach(value => {
            unionSet.add(value)
        })
        secondSet.forEach(value=>[
            unionSet.add(value)
        ])
        return unionSet
    }

    // intersection of 2 sets
    this.intersection = function(newSets){
        const intersectionSet = new mySet() // instantiate a new instance of a set method
        const firstSet = this.values() // call the value of collection array

        // identify set
        firstSet.forEach( e => {   // loop over every element of the first set
            if(newSets.has(e)){ // compare the element and return elements in both set using the has() method
            intersectionSet.add(e) // add them in the new set 
            }
        })
        return intersectionSet
    } 

    // difference betwen 2 sets 
    this.difference = function (newSet){
        var differenceSet = new mySet()
        var firstSet = this.values()

        firstSet.forEach(e => {
            if(!newSet.has(e)){ // compare both element and return elements not in boths set using the !has() method 
                differenceSet.add(e)
            }
        })
        return differenceSet
    }
    this.subset = function(newSet){
        var subSets = new mySet()
        var firstSet = this.values()

        firstSet.every(e => {
            if (newSet.has(e)) {
                subSets.add(e)
            }
        })
        
    }

}   

var getAllSubset = function(array1){
    array1 => array1.reduce((curr, arr) => curr.concat(
        curr.map(set => [arr, ...set])
    )),
    [
        []
    ]
}

const newSet = new mySet()
newSet.add(7)
newSet.add(11)
newSet.add(12)
newSet.add(2)
newSet.add(6)
console.log(newSet.values())
newSet.intersection([67, 12, 6, 2, 99, 9])