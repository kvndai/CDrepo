# declare a class and give it name User
# class User(object):
#     # the __init__ method is called every time a new object is created
#     def __init__(self, name, email):
#         # set some instance variables. just like any variable we can call these anything
#         self.name = name
#         self.email = email
#         self.logged = False
#     # this is a method we created to help a user login
#     def login(self):
#         self.logged = True
#         print self.name + " is logged in."
#         return self
# #now create an instance of the class
# new_user = User("Anna","anna@anna.com")
# print new_user.log

# class Car(object):
#     def __init__(self, price, speed, fuel, mileage):
#         self.price = price
#         self.speed = speed
#         self.fuel = fuel
#         self.mileage = mileage
#         if self.price > 10000:
#             self.tax = 0.15
#         else:
#             self.tax = 0.12
#     def display_all(self):
#         print "Price:", self.price
#         print "{} {}{}".format("Speed:", self.speed, "mph")
#         print "Fuel:", self.price
#         print "{} {}{}".format("Mileage:", self.mileage, "mpg")
#         print "Tax: ", self.tax
#
# Car1 = Car(2000,35,"Full",15)
# Car1.display_all()
#
# Car2 = Car(2000,5,"Not Full",105)
# Car2.display_all()
#
# Car3 = Car(2000,15,"Kind of Full",95)
# Car3.display_all()
#
# Car4 = Car(2000,25,"Full",25)
# Car4.display_all()
#
# Car5 = Car(2000,45,"Full",25)
# Car5.display_all()
#
# Car6 = Car(20000000,35,"Full",15)
# Car6.display_all()



# college commencement job
# most obvious important relaities are most often the hardest to talk about
#
# choosing
# natural default setting
#
# i am the center of the world
#
# think, pay attention to others
#
# you can decide
#
# aware your surroundings



# import arr
# dir(arr)
# help(arr)
# # print arr.add(5, 8)
# # print arr.subtract(10, 5)
# # print arr.multiply(12, 6)



class Vehicle(object):
    def __init__(self, wheels, capacity, make, model):
        self.wheels = wheels
        self.capacity = capacity
        self.make = make
        self.model = model
        self.mileage = 0
    def drive(self,miles):
        self.miles += miles
        return self
    def reverse(self,miles):
        self.mile -= miles
        return self
