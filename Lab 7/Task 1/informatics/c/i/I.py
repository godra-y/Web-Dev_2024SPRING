x = int(input())
cnt = 0

for num in range(1, x + 1):
    if x % num == 0:
        cnt += 1

print(cnt)
