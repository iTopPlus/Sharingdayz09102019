function test1(a) {
    for(var i = 0; i <= a.length; i++) {
        for(var j = i; j <= a.length; j++) {
            if(i != j && a[i] == a[j]) {
                return true;
            }
        }
    }
    return false;
}
var array1 = [1,1,1,1,1,5,6,7,2,3,4,5,1,1,1,1,1,1,1,1,8,9,8,7,4,10];
var array2 = [1,2,3,4,5,7,8,9];
var array_elements = ["a", "b", "c", "d", "e", "a", "b", "c", "f", "g", "h", "h", "h", "e", "a"];
var arr = ['a','b','c','d','d','e','a','b','c','f','g','h','h','h','e','a'];
var map = array_elements.reduce(function(prev, cur) {
    console.log('prev', prev);
    console.log('cur', cur);
    prev[cur] = (prev[cur] || 0) + 1;
    return prev;
  }, {});
//   var kkkk = JSON.stringify(map);
  console.log('mmmm', map);
function test2(a) {
    var counts = [];
    for(var i = 0; i <= a.length; i++) {
        if(counts[a[i]] === undefined) {
            counts[a[i]] = 1;
        } else {
            return true;
        }
    }
    return false;
}
console.log(test1(array2));