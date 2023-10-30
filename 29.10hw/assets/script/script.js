// ? Bir funksiya yaziriq
// ? Kreditə götürdüyümüz pul və aylıq(necə ay ödəməliyəm) parametr verilir. 
// ? Pul bərabər hissələrə bölünərək hər ay verilməlidir.
// ? Məs:1000 manat götürülür, 3 ayliq. 


let mebleg = +prompt('')
let ay = +prompt('')

const arr = []

function kredithesablama(mebleg, ay) {
    const last = Math.round(mebleg / ay)

    for (let i = 1; i < ay; i++) {
        arr.push(last)
    }

    arr[arr.length] = mebleg - ((ay - 1) * last)

    return arr
}
kredithesablama(mebleg, ay)
console.log(arr);