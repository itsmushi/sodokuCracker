
//array comparison

if(Array.prototype.equals)
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});



puzzleArray=[
    [3,1,5],
    [4,9,2],
]
solnArray=[
    [3,1,5,4,8,2,9,6,7],
    [4,9,2,7,6,5,1,3,8],
    [6,7,8,1,9,3,2,4,5],
    [7,2,3,9,1,6,5,8,4],
    [9,6,4,2,5,8,7,1,3],
    [5,8,1,3,7,4,6,9,2],
    [8,5,7,6,3,1,4,2,9],
    [2,3,6,5,4,9,8,7,1],
    [1,4,9,8,2,7,3,5,6]
]

sample=[
    [3,1,5,4,8,2,9,6,7],
    [4,9,2,7,6,5,1,3,8],
    [6,7,8,1,9,3,2,4,5],
    [7,2,3,9,1,6,5,8,4],
    [9,6,4,2,5,8,7,1,3],
    [5,8,1,3,7,4,6,9,2],
    [8,5,7,6,3,1,4,2,9],
    [2,3,6,5,4,9,8,7,1],
    [1,4,9,8,2,7,3,5,6]
]

// givePossibleRow()        


//for testing functions


// givePosibleSoln()

function givePosibleSolns(){
    allPossibleRows=[];
    allPossibleSoduko=[];
    allRealSudoku=[];

    let found1=false
    
    let prod=1
    for(let i=362880;i>=362870;i--){
        prod=prod*i
        console.log(prod)
    }
    noAll=prod


    while(allPossibleSoduko.length<noAll){

        tempSud=[]
        while(tempSud.length<9){
            index=randomInteger(0,noAll-1)  //row at index selected
            //if row is not yet in temp sudoku push it
            for(let i=0;i<tempSud.length;i++){
                if(tempSud[i].equals(allPossibleRows[index])){
                    found1=true
                    break
                }
            }
            if(!found1){
                tempSud.push(allPossibleRows[index])
            }
           
        }


        found1=false  //return value to default
        //push to update allPossibleSoduko
        for(let j=0;j<allPossibleSoduko.length;j++){
            //check if this temp sudoku is not yet pushed
            if(allPossibleSoduko[j].equals(tempSud)){
                found1=true
                break
            }
        }
        if(!found1){
            allPossibleSoduko.push(tempSud)

             //check if its a real sudoku
            if(allConditionsValid(tempSud)){
                allRealSudoku.push(tempSud)

            }
        } 
    }    

    return allRealSudoku;
}



// console.log(allConditionsValid(solnArray));


// function giveArraysOfCubes(sampleSolnArray){

// }

function givePossibleRow(){
   
    // temp=[];
    // for(a=1;a<10;a++){
    //     for(b=1;b<10;b++){
    //         for(c=1;c<10;c++){
    //             for(d=1;d<10;d++){
    //                 for(e=1;e<10;e++){
    //                     for(f=1;f<10;f++){
    //                         for(g=1;g<10;g++){
    //                             for(h=1;h<10;h++){
    //                                 for(i=1;i<10;i++){
                                        
    //                                 }
    //                             }
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }

//     let  n=4
//     let m=0;
//     let k=1;
//     allRows=[]; //size is n!
// //fill allRows array fake values then edit them later

// for(i=0;i<(factr(n));i++ ){
//     allRows.push([])
// }




//     //consider 4 positions with no 1,2,3,4
//     //we will have n=4 n! rows 
//     //for each row fill number at each first position

 
//     for(let i=1; i<=factr(n);i++ ){
//         allRows[m].push(k)
//         m++;
//         if( (i%factr(n-1))==0 ){
//             k++
//         }
//     }

//     //for second position
//     m=0;
//      k=2;
//     for(let i=1;i<=factr(n);i++){
//         // k=getNextVal(allRows[m])
    
//         allRows[m].push(k)
//         m++
//         if( (i%factr(n-2))==0 ){
//             if(k==)
//             k++
//         }
//     }

    //to get n! row
    n=9
    allRows=[];
    while(allRows.length<(factr(n))){
        sample33=randomArray(n)
        if(!isRandomArrayIn(allRows,sample33)){
            allRows.push(sample33)
            console.log(allRows.length)
        }
       
    }

    return allRows;

}

// function getNextVal(arr){
//     // i=0
//     k=null
//     inside99=[1,2,3,4]
  
//     for(i=0;i<inside99.length;i++){
//         if(!arr.includes(inside99[i])){
//             k=inside99[i]
//             break;
//         }
//     }
//     return k
// }

function factr(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factr(num - 1));
    }
  }

  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function randomArray(len){
      temp=[]
      while(temp.length<len){
          sample22=randomInteger(1,len)
          if(!temp.includes(sample22)){
            temp.push(sample22)
          }
      }
      return temp;
  }

  function isRandomArrayIn(allRowss,randArr){
    //check if each row is same as random array
    for(let i=0;i<allRowss.length;i++){
        if(allRowss[i].equals(randArr)===true){
            return true
            break
        }
    }
    return false;

  }



//optional debug function
function debugColumns(sampleSolnArray){
    arr= giveAllColumnsFromSampleSoln(sampleSolnArray)
    console.log("debug for Columns")
    for(let i=0;i<=8;i++){
        console.log(i)
        console.log(isArrayOK(arr[i]));
    }
}
function debugRows(sampleSolnArray){
    for(let i=0;i<=8;i++){
        console.log(i)
        console.log(isArrayOK(sampleSolnArray[i]));
    }
}

function allConditionsValid(sampleSolnArray){//takes 9x9 matrix sampleSoln
    if(checkAllRows(sampleSolnArray) &&checkAllRows(giveAllColumnsFromSampleSoln(sampleSolnArray)) ){
        return true
    }else{
        return false;
    }
}

function checkAllRows(sampleSolnArray){
    let isOk=true
    for(let i=0;i<=8;i++){
        if(!isArrayOK(sampleSolnArray[i])){ //for each for 
            isOk=false;
            break
        }
    }
    return isOk
}



function giveAllColumnsFromSampleSoln(sampleSolnArray){
    //convert all columns as rows then use checkAllRows function
    allColumns=[];
    for(let i=0;i<=8;i++){
        allColumns.push(giveColumnFromSampleSoln(sampleSolnArray,i))    //pushing allColumns
    }
    return allColumns;  //returns multidimensional array sample soln
}


function giveColumnFromSampleSoln(sampleSolnArray,colIndex){
    resCol=[];
    for(let i=0;i<=8;i++){
        resCol.push(sampleSolnArray[i][colIndex]) //pick colIndexth element on each row
    }
    return resCol;
}



function isArrayOK(sampleArray){
    // for no 0-9 check if each no exits coz if they all exists then
    //none repeates itself
   let isOK=true;
    for(let i=1;i<=9;i++){
        if(!sampleArray.includes(i)){
            isOK=false;
            
            break
        }
    }
    return isOK;
}




