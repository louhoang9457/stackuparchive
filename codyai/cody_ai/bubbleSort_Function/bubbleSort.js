let array = [5,3,6,2,10,1,9,4]

//Implement a bubble sort function
function bubbleSort(array){
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length - i - 1; j++){
            if(array[j] > array[j+1]){
                let temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
            }
        }
    }
    console.log(array);
    return array;
}

bubbleSort(array); 
