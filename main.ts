let n = 0
let light2 = 255
let list = [
[
0,
1,
1,
0,
0
],
[
1,
1,
0,
0,
0
],
[
0,
1,
1,
0,
0
],
[
0,
0,
1,
1,
0
],
[
0,
0,
0,
1,
1
]
]
basic.forever(function () {
    for (let B = 0; B <= 4; B++) {
        for (let A = 0; A <= 4; A++) {
            if (list[B][A] == 1) {
                led.plotBrightness(B, A, light2)
                light2 += n
                if (light2 <= 0) {
                    n = 5
                } else {
                    if (light2 >= 255) {
                        n = -5
                    }
                }
            } else {
                led.unplot(B, A)
            }
        }
    }
    list.unshift(list.pop())
    basic.pause(100)
})
