def func(x, y):
    return (x and not y) or (not x and y)


a = list(map(float, input().split()))
if (func(a[0], a[1])):
    print(1)
else:
    print(0)
