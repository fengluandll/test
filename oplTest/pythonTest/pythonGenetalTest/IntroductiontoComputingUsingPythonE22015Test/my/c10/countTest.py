def countdown(n):
    print(n)
    if n > 0:
        countdown(n - 1)
    return

countdown(3)