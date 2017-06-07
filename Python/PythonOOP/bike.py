class bike(object):
    def __init__(self,price,max_speed):
        self.price = price
        self.max_speed = max_speed
        self.miles = 0

    def displayInfo(self):
        print self.price
        print self.max_speed
        print self.miles
        return self

    def ride(self):
        self.miles += 10
        print "Riding ~~~~~~~~~"
        return self

    def reverse(self):
        self.miles -= 10
        print "Reversing ~~~~~~~~~~~~~"
        return self


biker1 = bike(200,"25mph")
biker2 = bike(220,"35mph")
biker3 = bike(20,"10mph")
biker1.ride().ride().ride().reverse().displayInfo()
biker2.ride().ride().reverse().reverse().displayInfo()
biker3.reverse().reverse().reverse().displayInfo()
