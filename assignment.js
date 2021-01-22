

// 1.Kilometer to Meter conversion...!
function kilometerToMeter(kilometer){
    if(kilometer <= 0){
        console.log("Please, enter positive values. ");
        return 0;        
    }
    var meter = kilometer * 1000;
    return meter;
} 
// var result = kilometerToMeter(1.5);
// console.log(result);

//--------------------------------------------------------------------------

// 2.Creating Budget Calculator...!
function budgetCalculator(watch, phone, laptop){
    if(watch < 0 || phone < 0 || laptop < 0 ){
        console.log("Please, enter positive values. ");
        return 0;        
    }
    var watchCost, phoneCost, latopCost;
    var watchCost = watch * 50;
    var phoneCost = phone * 100;
    var laptopCost = laptop * 500;
    var totalCost = watchCost + phoneCost + laptopCost;
    return totalCost;
}
// var shoppingCost = budgetCalculator(2, 4, 2);
// console.log(shoppingCost);

//--------------------------------------------------------------------------

// 3.Evaluate hotel cost...!
function hotelCost(day){
    var cost;
    if(day <=0){
        return console.error(RangeError);
    }

    else if(day <= 10){
        cost = day * 100;
    }
    else if(day <= 20){
        var firstTenDays = 10 * 100;
        var remainingDays = day - 10;
        var secondTenDays = remainingDays * 80;
        cost = firstTenDays + secondTenDays;
    }
    else{
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remainingDays = day - 20;
        var extraDays = remainingDays * 50;
        cost = firstTenDays + secondTenDays + extraDays;
    }
    return cost;
}
// var totalCost = hotelCost(25);
// console.log(totalCost);

//--------------------------------------------------------------------------

// 4.Show largest name in an array...!
function megaFriend(arr){
    var largestName = arr[0];
    for(var i = 0; i < arr.length; i++){
        var element = arr[i];
        if(element < largestName){
            largestName = arr[i];
        }
    }
    return largestName;
}
// var arr = ["Shihab", "Sakib", "Jamal","Asadullah" ];
// var result = megaFriend(arr);
// console.log(result);

