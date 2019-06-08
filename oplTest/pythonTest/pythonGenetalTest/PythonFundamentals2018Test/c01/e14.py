release_year = '1991'
answer = input('When was Python first released?')

if answer == release_year:
    print('Congratulations! That is correct.')
elif answer > release_year:
    print('No, that\'s too late')
elif answer < release_year:
    print('No, that\'s too early')
print('bye')
