l = ['magical unicorns',19,'hello',98.98,'world']
def typelist(var):
    myType = ""
    myString = "String: "
    mySum = 0
    typeStr = 0
    typeNum = 0

    for x in l:
        if isinstance(x,str):
            myString = myString + x + " "
            typeStr = 1
        if isinstance(x,(int,float,complex)):
            mySum = mySum + x
            typeNum = 1

    if typeStr == 1:
        myType = "The array you enterend is of string type"
    if typeNum == 1:
        myType = "The array you enterend is of integer type"
    if typeNum == 1 and typeStr == 1:
        myType = "The array you enterend is of mixed type"

    print myType
    print myString
    print mySum

typelist(l)
