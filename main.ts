let list = [
[
0,
0,
1,
0,
0
],
[
0,
1,
0,
0,
0
],
[
0,
0,
1,
0,
0
],
[
0,
0,
0,
1,
0
],
[
0,
0,
1,
0,
0
]
]
let list2 = [
[
0,
0,
1,
0,
0
],
[
0,
1,
0,
0,
0
],
[
0,
0,
1,
0,
0
],
[
0,
0,
0,
1,
0
],
[
0,
0,
1,
0,
0
]
]
basic.forever(function () {
    for (let B = 0; B <= 4; B++) {
        for (let A = 0; A <= 4; A++) {
            if (list[B][A] == 1) {
                led.plotBrightness(B, A, 255)
            } else {
                led.unplot(B, A)
            }
        }
    }
    list.unshift(list.pop())
    basic.pause(100)
})
basic.forever(function () {
	
})
