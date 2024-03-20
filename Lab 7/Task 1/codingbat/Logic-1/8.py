def alarm_clock(day, vacation):
    if vacation:
        if day == 0 or day == 6:
            return 'off'
        else:
            '10:00'
    if day == 0 or day == 6:
        return '10:00'
    else:
        '7:00'
