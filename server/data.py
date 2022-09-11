from faker import Faker
from datetime import date
from dateutil import rrule
f = Faker()

print(f'Name: {f.name()}')

def diff_dates(last_active,current):
    return abs(current-last_active).days

#Spotfiy--------------
def Spotify_main():
    s_d1 = date(2022,6,10,)
    s_d2 = date(2022,9,10)
    s_result1 = diff_dates(s_d2, s_d1)
    print(f'''Alert! Last Activity For Spotify was {s_result1} days ago''''')
    print(f'''Last Activity Date: {s_d1}''')
Spotify_main()

print("Subscription Charge History (Past 5 Months):")
s_start_date = date(2022, 4, 10)
s_end_date = date(2022,8,10)
s_monthly_sub = rrule.rrule(rrule.MONTHLY, dtstart=s_start_date, until=s_end_date)
for dt in s_monthly_sub:
    print(dt.date())

#Netflix-------------
def Netflix_main():
    n_d1 = date(2022,8,30,)
    n_d2 = date(2022,9,10)
    n_result = diff_dates(n_d2, n_d1)
    print(f'''Last Activity for Netflix was {n_result} days ago''''')
    print(f'''Last Activity Date:{n_d1}''')
Netflix_main()

print("Subscription Charge History (Past 5 Months):")
n_start_date = date(2022, 4, 27)
n_end_date = date(2022,8,27)
n_monthly_sub = rrule.rrule(rrule.MONTHLY, dtstart=n_start_date, until=n_end_date)
for dt in n_monthly_sub:
    print(dt.date())

#AmazonPrime-----------
def AmazonPrime_main():
    ap_d1 = date(2022,5,5,)
    ap_d2 = date(2022,9,5)
    ap_result1 = diff_dates(ap_d2, ap_d1)
    print(f'''Alert! Last Activity For Amazon Prime Video was {ap_result1} days ago''''')

    print(f'''Last Activity Date: {ap_d1}''')
AmazonPrime_main()

print("Subscription Charge History (Past 5 Months):")
ap_start_date = date(2022, 4, 21)
ap_end_date = date(2022,8,21)
ap_monthly_sub = rrule.rrule(rrule.MONTHLY, dtstart=ap_start_date, until=ap_end_date)
for dt in ap_monthly_sub:
    print(dt.date())

#Hulu--------------------
def Hulu_main():
    h_d1 = date(2022,9,1,)
    h_d2 = date(2022,9,5)
    h_result1 = diff_dates(h_d2, h_d1)
    print(f'''Last Activity For Hulu was {h_result1} days ago''''')

    print(f'''Last Activity Date: {h_d1}''')
Hulu_main()

print("Subscription Charge History (Past 5 Months):")
h_start_date = date(2022, 4, 1)
h_end_date = date(2022,8,1)
h_monthly_sub = rrule.rrule(rrule.MONTHLY, dtstart=h_start_date, until=h_end_date)
for dt in h_monthly_sub:
    print(dt.date())

#Audible----------------------
def Audible_main():
    Au_d1 = date(2021,6,27,)
    Au_d2 = date(2022,10,5)
    Au_result1 = diff_dates(Au_d2, Au_d1)
    print(f'''Alert! Last Activity For Audible was {Au_result1} days ago''''')

    print(f'''Last Activity Date: {Au_d1}''')
Audible_main()

print("Subscription Charge History (Past 5 Months):")
Au_start_date = date(2022, 4, 7)
Au_end_date = date(2022,8,7)
Au_monthly_sub = rrule.rrule(rrule.MONTHLY, dtstart=Au_start_date, until=Au_end_date)
for dt in Au_monthly_sub:
    print(dt.date())