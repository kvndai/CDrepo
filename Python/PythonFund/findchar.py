word_list = ['hello','world','my','name','is','Anna']
char = 'o'
newlist = []
def findchar(var):
    for i in word_list:
        for j in i:
            if j == char:
                newlist.append(i)
    print newlist

findchar(word_list)
