// 数组的创建
const arr = [1, 2, 3]

// 方式：1
const arr1 = new Array();
console.log(arr1)

// 方式：2
const arr2 = new Array(7);
console.log(arr2)

arr2.fill(1)
console.log(arr2)


// 数组的访问和遍历
// 下表、for\forEach\map

// 二维数组
// 初始化 fill 的局限性
const arr3 = new Array(7).fill([]);
console.log(arr3) // [ [], [], [], [], [], [], [] ] 
arr3[0].push(1);
console.log(arr3) // [ [ 1 ], [ 1 ], [ 1 ], [ 1 ], [ 1 ], [ 1 ], [ 1 ] ] 

// 解决
const arr4 = new Array(7).fill([]).map(() => []);
console.log(arr4) // [ [], [], [], [], [], [], [] ] 
arr4[0].push(1);
console.log(arr4)

// 二维数组创建与访问：for循环与双层for