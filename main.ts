input.onButtonPressed(Button.A, function () {
    哈哈 = 1
})
input.onButtonPressed(Button.B, function () {
    哈哈 = 2
})
let n = 0
let 哈哈 = 0
let light2 = 255
let list2 = [
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
    if (哈哈 == 1) {
        let list: number[][] = []
        for (let B = 0; B <= 4; B++) {
            for (let A = 0; A <= 4; A++) {
                if (list2[B][A] == 1) {
                    led.plotBrightness(B, A, light2)
                    light2 += n
                    if (light2 <= 0) {
                        n = 5
                    } else if (light2 >= 255) {
                        n = -5
                    }
                } else {
                    led.unplot(B, A)
                }
            }
        }
        list2.unshift(list.pop())
        basic.pause(100)
    } else if (哈哈 == 2) {
        for (let B = 0; B <= 4; B++) {
            for (let A = 0; A <= 4; A++) {
                if (list2[A][B] == 1) {
                    led.plotBrightness(B, A, light2)
                    light2 += n
                    if (light2 <= 0) {
                        n = 5
                    } else if (light2 >= 255) {
                        n = -5
                    }
                } else {
                    led.unplot(B, A)
                }
            }
        }
    }
})
