# print "this is a sample string"

# name = "Zen";
# print "My name is " +name

# name = "Zen";
# print "My name is " + 25 #cannot concatinate str and int

# first_name = "Zen"
# last_name = "Coder"
# print "My name is {} {}".format(first_name,last_name);

# hw = "hello %s" % 'world'
# print hw
# # the output would be:
# # hello world

# str = "this is string example... wow!!!";
# sub = "is"
# print str.endswith(sub,2,7)
# count = 0
# for count in range(0,5):
#     print count

# def multiply(arr,num):
#     print arr, num
#     for x in arr:
#         x *= num
#         print x
#     return arr
# a = [2,4,10,16]
# b = multiply(a,5)
# print b


# declare a class and give it name User
class User(object):
    # the __init__ method is called every time a new object is created
    def __init__(self, name, email):
        # set some instance variables. just like any variable we can call these anything
        self.name = name
        self.email = email
        self.logged = False
    # this is a method we created to help a user login
    def login(self):
        self.logged = True
        print self.name + " is logged in."
        return self
#now create an instance of the class
new_user = User("Anna","anna@anna.com")
print new_user.login
