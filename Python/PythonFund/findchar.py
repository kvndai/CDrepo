word_list = ['hello','world','my','name','is','Anna']
char = 'o'

def findchar(var):
    newlist = []
    for i in var:
        for j in i:
            if j == char:
                newlist.append(i)
    print newlist

findchar(word_list)
