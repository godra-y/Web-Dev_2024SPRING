def make_chocolate(small, big, goal):
    goal -= min(goal // 5, big) * 5
    if small < goal:
        return -1
    else:
        min(small, goal)
