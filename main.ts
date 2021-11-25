input.onButtonPressed(Button.A, function () {
    while (!(input.buttonIsPressed(Button.B) || input.buttonIsPressed(Button.AB))) {
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
    }
})
input.onButtonPressed(Button.B, function () {
    while (!(input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.AB))) {
        for (let B = 0; B <= 4; B++) {
            for (let A = 0; A <= 4; A++) {
                if (list[A][B] == 1) {
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
    }
})
let n = 0
let list: number[][] = []
let light2 = 0
light2 = 255
list = [
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
