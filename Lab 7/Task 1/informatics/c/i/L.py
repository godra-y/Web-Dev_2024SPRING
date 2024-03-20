binary_number = input()
decimal_number = 0

for num in range(len(binary_number)):
    weight = 2 ** num
    digit = int(binary_number[-num - 1])
    decimal_number += digit * weight

print(decimal_number)
