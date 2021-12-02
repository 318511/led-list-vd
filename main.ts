input.onPinPressed(TouchPin.P0, function () {
    哈哈 = 3
})
input.onButtonPressed(Button.A, function () {
    哈哈 = 1
})
input.onButtonPressed(Button.B, function () {
    哈哈 = 2
})
input.onPinPressed(TouchPin.P1, function () {
    哈哈 = 4
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
	
})
basic.forever(function () {
    for (let B3 = 0; B3 <= 4; B3++) {
        for (let A3 = 0; A3 <= 4; A3++) {
            if (list2[B3][A3] == 1) {
                led.plotBrightness(B3, A3, light2)
                light2 += n
                if (light2 <= 0) {
                    n = 5
                } else if (light2 >= 255) {
                    n = -5
                }
            } else {
                led.unplot(B3, A3)
            }
        }
    }
})
