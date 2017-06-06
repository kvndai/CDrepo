# Odd/Even
# def evenodd(val):
#     for i in range(1,val+1):
#         if i % 2 == 1:
#             num = "odd"
#         else:
#             num = "even"
#         print "Number is", i,". This is an "+num+" number."
# evenodd(2000)

# Multiply
def multiply(a,b):
    for i in range(0,len(a)):
        a[i] *= b
    return a
#
# a = [2,4,10,16]
# b = multiply(a,5)
# print b

# Hacker Challenge
newarr = []
def layered_mult(arr):
    newarr = []
    for j in range(0,len(arr)):
        blankarr = []
        for i in range(arr[j]):
            blankarr.append(1)
        newarr.append(blankarr)
    return newarr
x = layered_mult(multiply([2,4,5],3))
print x
