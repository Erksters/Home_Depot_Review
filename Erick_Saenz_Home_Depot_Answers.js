//Author: Erick Saenz-Gardea
//Purpose: Home_Depot_Tech_Review_Answers
//Date June 11th, 2022
//You should just be able to run $node Erick_Saenz_Home_Depot_Answers.js
//in your command window or run this on an online compiler to see the results
//I used no additional libraries so you shouldn't have to install anything either

//Q1
var nums = [1, 2, 3, 4, 5, 6, ,7, 8]
nums = Array.from({length: 50}, () => Math.floor(Math.random() * 10));

// RUNNING TIME IS **Technically** IN BIG O( N^2 ), but
// NUMBER OF COMPARISONS IS THE BINOMIAL COEFFICIENT OF THE SIZE (n) OF THE ARRAY (n choose 2). If we find a legitimate pair, then it will run even faster.
// Example where n = 5, (5 choose 2 = 10  <  5^2 = 25) 
// BEST CASE RUNNING TIME is in Omega (n), 
// SPACE COMPLXITY IS CONSTANT SPACE THETA(1) AS WE CREATE NO MORE DATA THAN THE AUXILLARY VARIABLES (pointers and storage of correct pairs)
// *** FINAL NOTES ***
// *** If the array 'nums' is SORTED then we can get this algorithm to
// *** run faster as we can take advantage of the
// *** BINARY SEARCH ALGORITHM , but until then!!!!

//Helper function to better understand indices as they can be treated as coordinates on a linear plane.
function numsCoordinates(x, y){
    this.index1 = x;
    this.index2 = y;
}

/**
 * 
 * @param {int []} nums 
 * @param {int} target 
 * @param {var} pointer1 
 * @param {var} pointer2 
 * @param {dictionary} indices 
 */
function findTarget(nums, target, pointer1, pointer2, indices){

    //is the nums array long enough to begin with?
    if(nums.length > 1){
        while(pointer1 < nums.length){
            //Are we in bound of array 'nums'?
            while(pointer1 <  pointer2){
                
                //Check pointer values
                if(nums[pointer1] + nums[pointer2] === target){
                    var AddPair = true;
                    for(coordinates in indices){
                        if(pointer1 === indices[coordinates].index1 ||
                            pointer1 === indices[coordinates].index2 ||
                            pointer2 === indices[coordinates].index1 ||
                            pointer2 === indices[coordinates].index2
                            ){
                            AddPair = false
                            break;
                        }
                    }
                    if(AddPair){
                        indices.push(new numsCoordinates(pointer1, pointer2))
                        break;
                    }
                }
                pointer2 = pointer2 - 1;
            }
            pointer2 = nums.length - 1
            pointer1 = pointer1 + 1;
        }
    }
}

var indices = new Array()
findTarget(nums, 9, 0, nums.length - 1, indices)
indices.map(output => {
    console.log("[" + output.index1 + "," + output.index2 + "]")
})


//Q2 **two solutions dependent on running time and space complexity necessities
const s = "((]]"
const s2 = "(()"
const s3 = "())"
const s4 = "(()()())(((())))"
const s5 = "{{{}}}"
const s6 = "{{}{}}"
const s7 = "{{}}{}"
const s8 = "{}{{}}"
const s9 = "{}{([])}{}"
const s10 = "((]]"

var dictionaryPairs = {
    ')':'(',
    ']':'[',
    '}':'{'
}

//RUNNING TIME OF THIS IS LINEAR
//SPACE COMPLEXITY IS LINEAR AS WE USE A STACK TO REMEMBER THE TOPMOST OPEN PARENTHESE/BRACKET

/**
 * 
 * @param {string} s 
 * @returns true if the string is balanced, false if it's not balanced
 */
function CheckString(s){

    var myStack = []
    
    for(var character of s){
        //Check to see if this character is open or closed 
        if(!dictionaryPairs[character]){
            myStack.push(character);
        }else if(myStack.pop() !== dictionaryPairs[character]){
            return false;
        }
    }
        return myStack.length === 0
    
}

//RUNNING TIME IS N^2
//SPACE COMPLEXITY IS CONSTANT O(1) AS WE CREATE NO ADDITIONAL STACKS AND ONLY USE AUXILLARY VARIABLES

/**
 * 
 * @param {string} s 
 * @returns true if the string is balanced, false if it's not balanced
 */
function CheckBalance(s){
    var findBalance = s;
    // if(s.length%2 != 0)return(false)
    var indexfrom = -1;
    //while there is still some string to go through
    while(findBalance.length){
        //Do we have any more possible brackets to eliminate?
        if((findBalance.indexOf("()") === -1) &&
            (findBalance.indexOf("[]") === -1) &&
            (findBalance.indexOf("{}") === -1) 
        ){
            //if not return false
            return false;
        }

        //eliminate all available balanced parentheses
        while(findBalance.indexOf("()" != -1)){
            indexfrom = findBalance.indexOf("()")
            if(indexfrom === -1){break;}
            var findbalance2 = findBalance.substring(0, indexfrom) + findBalance.substring(indexfrom + 2, findBalance.length)        
            findBalance = findbalance2;
        }

        //eliminate all available balanced square brackets
        while(findBalance.indexOf("[]" != -1)){
            indexfrom = findBalance.indexOf("[]")
            if(indexfrom === -1){break;}
            var findbalance2 = findBalance.substring(0, indexfrom) + findBalance.substring(indexfrom + 2, findBalance.length)        
            findBalance = findbalance2;
        }
        
        //eliminate all available balanced curly brackets
        while(findBalance.indexOf("{}" != -1)){
            indexfrom = findBalance.indexOf("{}")
            if(indexfrom === -1){break;}
            var findbalance2 = findBalance.substring(0, indexfrom) + findBalance.substring(indexfrom + 2, findBalance.length)        
            findBalance = findbalance2;
        }        
    }
    return true;
}

console.log("s",  CheckString(s), CheckBalance(s))
console.log("s2", CheckString(s2), CheckBalance(s2))
console.log("s3", CheckString(s3), CheckBalance(s3))
console.log("s4", CheckString(s4), CheckBalance(s4))
console.log("s5", CheckString(s5), CheckBalance(s5))
console.log("s6", CheckString(s6), CheckBalance(s6))
console.log("s7", CheckString(s7), CheckBalance(s7))
console.log("s8", CheckString(s8), CheckBalance(s8))
console.log("s9", CheckString(s9), CheckBalance(s9))
console.log("s10", CheckString(s10), CheckBalance(s10))



//Q3
// Definition for singly-linked list.
 function ListNode(val) {
     this.val = val;
     this.next = null;
 }

const node0 = new ListNode(1);
const node1 = new ListNode(1);
const node2 = new ListNode(1);
const node3 = new ListNode(1);
const node4 = new ListNode(1);
const node5 = new ListNode(1);
node0.next = node1;
node1.next = null;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node1;

//RUNNING TIME IS LINEAR AS IT TRAVERSES THE LIST TO THE END
//SPACE COMPLEXITY IS CONSTANT AS IT CREATES NO ADDITIONAL SPACE EXCEPT AUXILLARY POINTERS

/**
 * 
 * @param {ListNode} head to iterate through.
 * @returns true if there is a cylce, false if it is acyclic
 */
var hasCycle = function(head){
    var pointer1 = head;
    //check if we are limited to one node in linked list real quick
    if(node1.next == null){
        return false;
    }
    else{
        pointer2 = head.next;
        while(pointer2 != null && pointer2.next != null){
            //Check to see if these pointers are the same.
            //CRITICAL THAT WE USE TRIPLE === HERE, AS WE WANT TO COMPARE REFERENCE TO THE NODE.
            //If you use double ==, you may accidentally determine if the data on node1 and node2 are equal rather in lieu of identities/references.
            if(pointer1 === pointer2){ return true;}
            else{
                pointer1 = pointer1.next; //This will eventually catch up to the cycle if it's further ahead,
                pointer2 = pointer2.next.next;   //This will eventually catch up to pointer1 if a cycle exists
            }
        }
        //No cycles exist as we managed to find an undefined .next!
        return false;
    }
};

console.log("Does this linked list have a cycle?:", hasCycle(node0))