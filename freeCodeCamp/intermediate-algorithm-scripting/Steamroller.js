/* 

Steamroller
Flatten a nested array. You must account for varying levels of nesting.

Test cases:
    steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].

    steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].

    steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].

    steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].

    Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.

*/

function steamrollArray(arr) {
    return flatting(arr, []);
}

function flatting(a, queue) {
    if (!Array.isArray(a)) return queue.push(a);

    a.forEach((e) => flatting(e, queue));
    return queue;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));

