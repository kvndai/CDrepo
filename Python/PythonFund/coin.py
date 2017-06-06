import random
def cointoss(var):
    # print randNum
    countH = 0
    countT = 0
    for i in range(1,var+1):

        randNum= random.randint(0,1)
        if randNum == 0:
            countH += 1
            print "Attempt #",i," Throwing a coin... It's a head! ... Got ",countH,"head(s) so far and ",countT,"tail(s) so far"
        else:
            countT += 1
            print "Attempt #",i," Throwing a coin... It's a tail! ... Got ",countH,"head(s) so far and ",countT,"tail(s) so far"

cointoss(10)
