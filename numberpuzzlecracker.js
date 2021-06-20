
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


givePosibleSoln()

function givePosibleSoln(){
    
    allPossible=[];
    row=[];




    // sample=[
    //     [3,1,5,4,8,2,9,6,7],
    //     [4,9,2,7,6,5,1,3,8],
    //     [6,7,8,1,9,3,2,4,5],
    //     [7,2,3,9,1,6,5,8,4],
    //     [9,6,4,2,5,8,7,1,3],
    //     [5,8,1,3,7,4,6,9,2],
    //     [8,5,7,6,3,1,4,2,9],
    //     [2,3,6,5,4,9,8,7,1],
    //     [1,4,9,8,2,7,3,5,6]
    // ]
    // allPossible=[]


    // for(k=1;k<=9;k++){
        
    //     for(j=0;j<=8;j++){
    //         for(i=0;i<=8;i++){
    //             sample[i][j]=k;     //sample array with same values

    //         }
    //     }
    //     // console.log(k)
    //     allPossible.push(sample);
    //     console.log(allPossible);

    // }

  

}

// console.log(allConditionsValid(solnArray));


// function giveArraysOfCubes(sampleSolnArray){

// }

function givePossibleRow(){
    allRows=[];
    temp=[];
    for(a=1;a<10;a++){
        for(b=1;b<10;b++){
            for(c=1;c<10;c++){
                for(d=1;d<10;d++){
                    for(e=1;e<10;e++){
                        for(f=1;f<10;f++){
                            for(g=1;g<10;g++){
                                for(h=1;h<10;h++){
                                    for(i=1;i<10;i++){
                                        
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
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

