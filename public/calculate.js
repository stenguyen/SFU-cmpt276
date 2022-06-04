//hard coded array of grades
var grades = [65.95, 56.98, 78.62, 96.1, 90.3, 72.24, 92.34, 60.00, 81.43, 86.22, 88.33, 9.03,
    49.93, 52.34, 53.11, 50.10, 88.88, 55.32, 55.69, 61.68, 70.44, 70.54, 90.0, 71.11, 80.01];

// return from largest to smallest
function desc(a,b){
    return b-a;
}
// sort the grades from largest to smallest
grades.sort(desc);

// couldn't get for loop to work for this, collect the bounds data
// everytime one is updated, update histogram again
var v1 = document.getElementById("num1")
document.getElementById("lb1").addEventListener("submit", function(event){
    event.preventDefault(); 
    document.getElementById("num1").value = v1.value;
    console.log("new input ",document.getElementById("num1").value);
    clearAll();
    printall();
})

var v2 = document.getElementById("num2");
document.getElementById("lb2").addEventListener("submit", function(event){
    event.preventDefault(); 
    document.getElementById("num2").value = v2.value;
    console.log("new input ",document.getElementById("num2").value);

    clearAll();
    printall();
})

var v3 = document.getElementById("num3");
document.getElementById("lb3").addEventListener("submit", function(event){
    event.preventDefault(); 
    document.getElementById("num3").value = v3.value;
    console.log("new input ",document.getElementById("num3").value);

    clearAll();
    printall();
})

var v4 = document.getElementById("num4");
document.getElementById("lb4").addEventListener("submit", function(event){
    event.preventDefault(); 
    document.getElementById("num4").value = v4.value;
    console.log("new input ",document.getElementById("num4").value);

    clearAll();
    printall();
})

var v5 = document.getElementById("num5");
document.getElementById("lb5").addEventListener("submit", function(event){
    event.preventDefault(); 
    document.getElementById("num5").value = v5.value;
    console.log("new input ",document.getElementById("num5").value);
    clearAll();
    printall();
})

var v6 = document.getElementById("num6");
document.getElementById("lb6").addEventListener("submit", function(event){
    event.preventDefault(); 
    document.getElementById("num6").value = v6.value;
    console.log("new input ",document.getElementById("num6").value);
    clearAll();
    printall();
})

var v7 = document.getElementById("num7");
document.getElementById("lb7").addEventListener("submit", function(event){
    event.preventDefault(); 
    document.getElementById("num7").value = v7.value;
    console.log("new input ",document.getElementById("num7").value);
    clearAll();
    printall();

})

var v8 = document.getElementById("num8");
document.getElementById("lb8").addEventListener("submit", function(event){
    event.preventDefault(); 
    document.getElementById("num8").value = v8.value;
    console.log("new input ",document.getElementById("num8").value);
    clearAll();
    printall();

})

var v9 = document.getElementById("num9");
document.getElementById("lb9").addEventListener("submit", function(event){
    event.preventDefault(); 
    document.getElementById("num9").value = v9.value;
    console.log("new input ",document.getElementById("num9").value);
    clearAll();
    printall();

})

var v10 = document.getElementById("num10");
document.getElementById("lb10").addEventListener("submit", function(event){
    event.preventDefault(); 
    document.getElementById("num10").value = v10.value;
    console.log("new input ",document.getElementById("num10").value);
    clearAll();
    printall();

})

var v11 = document.getElementById("num11");
document.getElementById("lb11").addEventListener("submit", function(event){
    event.preventDefault(); 
    document.getElementById("num11").value = v11.value;
    console.log("new input ",document.getElementById("num11").value);
    clearAll();
    printall();

})

var v12 = document.getElementById("num12");
document.getElementById("lb12").addEventListener("submit", function(event){
    event.preventDefault(); 
    document.getElementById("num12").value = v12.value;
    console.log("new input ",document.getElementById("num12").value);
    clearAll();
    printall();

})


// add grade to array
document.getElementById("myButton").onclick = function addGrade(){
    //value of the new grade
    var newGrade = document.getElementById("myGrade").value;
    //lower bounds
    var ids = ["num1", "num2", "num3", "num4", "num5", "num6", "num7", "num8", "num9", "num10", "num11", "num12"];

    //check to see if in bounds
    if(!isSorted(ids)){ 
        window.prompt("Incompatible Grade: Please Give New Bounds", "Bounds must not have the same value");
    }
    else{
        var minVal = document.getElementById("num1").value;
        var maxVal = document.getElementById("num12").value;

        // check edge cases
        if((newGrade-minVal > 0) || (maxVal-newGrade > 0) || newGrade === ''){
            window.prompt("Please give a grade from 0-100", "thanks")
            console.log("Incompatible Grade");
        }
        else{
            // to round to nearest 2 decimal places
            newGrade = Math.round(newGrade * 100) / 100

            // push to back of the array and sort
            grades.push(newGrade);
            grades.sort(desc);
            //send to console

            console.log("The number is ", newGrade);

            // test to check if its being pushed
            // for(item in grades){
            //     console.log(grades[item]);
            // }

            //print the histogram
            clearAll();
            printall();
        }
    }
}

// function to print everything in histogram
function printall(){
    var rows = document.getElementById("table2").rows.length;

    var ids = ["num1", "num2", "num3", "num4", "num5", "num6", "num7", "num8", "num9", "num10", "num11", "num12"];
    var hID = ["h1","h2","h3","h4","h5","h6","h7","h8","h9","h10","h11"];

    grades.sort(desc);

    var rowCounter = 0;
    var counter = 0;
    var fIndex = 0;
    var sIndex = 1;
    var index = 0;

    while(true){
        while(grades[index] <= document.getElementById(ids[fIndex]).value && grades[index] >= document.getElementById(ids[sIndex]).value){
            index++;
            counter++;
        }

        for(var i = 0; i < counter; i++){
            document.getElementById(hID[rowCounter]).innerHTML += "O";
        }

        ///everthing done
        fIndex++;
        sIndex++;
        counter = 0;
        if(rowCounter < rows){
            rowCounter++;
        }
        else{
            break;
        }
    }
    
}

//function to clear out the entire screen
function clearAll(){
    var rows = document.getElementById("table2").rows.length;
    var hID = ["h1","h2","h3","h4","h5","h6","h7","h8","h9","h10","h11"];

    for(var i = 0; i < rows; i++){
        document.getElementById(hID[i]).innerHTML = "";
    }

}



// print on screen
window.onload = function() {
    printall();
};




// check to see if lower bounds is sorted
function isSorted(arr){
    var index;
    for(var i = 0; i < arr.length-1; i++){
        index = i+1;
        console.log(arr[i], " ", document.getElementById(arr[i]).value)
        if(document.getElementById(arr[index]).value - document.getElementById(arr[i]).value >= 0){
            return false
        }
    }
    return true;
}




//return values of the bounds
document.getElementById("boundT").onclick = function printBoundsTest(){
    var ids = ["num1", "num2", "num3", "num4", "num5", "num6", "num7", "num8", "num9", "num10", "num11", "num12"];
    // for(var i = 0; i < ids.length; i++){
    //     console.log("Input of ", ids[i], " ", document.getElementById(ids[i]).value);
    // }
    var sort = isSorted(ids)
    console.log(sort);
}

