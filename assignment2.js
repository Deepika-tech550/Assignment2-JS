1.
const clothes = ['jacket', 't-shirt'];
clothes.length = 0;
console.log(clothes[0]);

RESULT:
    undefined
    clothes[0] cant access because length of the clothes changed into "0" so we cant access 0th position
    
    
2. find sum of array

var a = [1, 2, 3, 4, 5,6];
var sum=0;
for (i = 0; i < a.length; i++) {
sum=sum+a[i];


}
console.log("sum of array =",sum)


RESULT:
sum of array = 21
    
    
