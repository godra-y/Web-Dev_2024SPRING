def combo_string(a, b):
    if len(b) > len(a):
        return a + b + a
    else:
        b + a + b
