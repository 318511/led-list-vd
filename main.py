def on_pin_pressed_p0():
    global 哈哈
    哈哈 = 3
input.on_pin_pressed(TouchPin.P0, on_pin_pressed_p0)

def on_button_pressed_a():
    global 哈哈
    哈哈 = 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global 哈哈
    哈哈 = 2
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_pin_pressed_p1():
    global 哈哈
    哈哈 = 4
input.on_pin_pressed(TouchPin.P1, on_pin_pressed_p1)

n = 0
哈哈 = 0
light2 = 255
list2 = [[0, 1, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 0, 1, 1]]

def on_forever():
    pass
basic.forever(on_forever)

def on_forever2():
    global light2, n
    for B3 in range(5):
        for A3 in range(5):
            if list2[B3][A3] == 1:
                led.plot_brightness(B3, A3, light2)
                light2 += n
                if light2 <= 0:
                    n = 5
                elif light2 >= 255:
                    n = -5
            else:
                led.unplot(B3, A3)
basic.forever(on_forever2)
