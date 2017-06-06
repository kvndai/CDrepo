import random
randomNum = random.randint(60,100)
def scores(times):
    for i in range(0,times):
        randomNum = random.randint(60,100)
        if randomNum <=69:
            print "Score: ",randomNum,"; Your grade is D"
        elif randomNum <=79 and randomNum > 69:
            print "Score: ",randomNum,"; Your grade is C"
        elif randomNum <= 89 and randomNum > 79:
            print "Score: ",randomNum,"; Your grade is B"
        elif randomNum <= 100 and randomNum >89:
            print "Score: ",randomNum,"; Your grade is A"
    print "end"

scores(10)
