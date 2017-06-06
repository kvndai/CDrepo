# def draw_stars(arr):
#     for i in range(len(arr)):
#         str = ""
#         for j in range(0,arr[i]):
#
#             str = str + "*"
#         print str
#
# x = [4,6,1,3,5,6,25]
# draw_stars(x)
#

def draw_stars2(arr):
    for x in arr:
        if isinstance(x, int):
            print "*" * x
        elif isinstance(x, str):
            length = len(x)
            letter = x[0].lower()
            print letter * length

x = [4,"Tom",1,"Lord",5,6,25]
draw_stars2(x)
