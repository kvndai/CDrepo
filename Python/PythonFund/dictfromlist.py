name = ["Anna", "Eli", "Pariece", "Brendan", "Amy", "Shane", "Oscar"]
favorite_animal = ["horse", "cat", "spider", "giraffe", "ticks", "dolphins", "llamas"]

def dictfromlist(list1,list2):
    name_fav = zip(list1,list2)
    print name_fav

dictfromlist(name,favorite_animal)
