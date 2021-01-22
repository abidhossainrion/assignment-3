function kilometerToMeter(kilometer) {
    if (kilometer > 0) {
        var meter = kilometer * 1000;
        return meter;
    } else {
        console.log('Fail!');
    }
}

var meter = kilometerToMeter(8);
console.log(meter);



function budgetCalculator(watch, mobile, laptop) {

    var watchPrice, mobilePrice, laptopPrice;
    watchPrice = watch * 50
    mobilePrice = mobile * 100;
    laptopPrice = laptop * 500;


    var totalPrice = watchPrice + mobilePrice + laptopPrice;
    return totalPrice;
}

var total = budgetCalculator(2, 4, 5);
console.log(total);



function hotelCost(day) {
    var cost = 0;
    if (day <= 10) {
        cost = day * 10;
    } else if (day <= 20) {
        var days_10 = 10 * 100;
        var remainig = day - 10;
        var days_20 = remainig * 80;
        cost = days_10 + days_20;

    } else {
        var days_10 = 10 * 100;
        var days_20 = 10 * 80;
        var remainig = day - 20;
        var days_uper = remainig * 50;
        cost = days_10 + days_20 + days_uper;
    }

    return cost;
}

var totalCost = hotelCost(11);
console.log(totalCost);








function megaFriend(friends) {
    var lgth = 0;
    var longest;

    for (var i = 0; i < friends.length; i++) {
        if (friends[i].length > lgth) {
            var lgth = friends[i].length;
            longest = friends[i];
        }
    }

    return longest;
}
var friendName = ['Abid', 'Karim', 'Shakib Al Hasan'];
var biggestFriendName = megaFriend(friendName);
console.log(biggestFriendName);