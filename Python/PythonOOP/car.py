class car(object):
    def __init__(self,price,speed,fuel,mileage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        self.tax = 0.12
        if price >= 10000:
            self.tax = 0.15

    def display_all(self):
        print "Price: ",self.price
        print "Speed: ",self.speed
        print "Fuel: ",self.fuel
        print "Mileage: ",self.mileage
        print "Tax: ",self.tax
        # return self

car1 = car.display_all(2000,"35mph","Full","15mpg")
# car2 = car.display_all(2000,"5mpg","Not Full","105mpg")
# car3 = car.display_all(2000,"15mpg","Kind of Full","95mpg")
# car4 = car.display_all(2000,"25mpg","Full","25mpg")
# car5 = car.display_all(2000,"45mpg","Empty","25mpg")
# car6 = car.display_all(2000000,"35mpg","Empty","15mpg")

car1.display_all()
# car2.display_all()
# car3.display_all()
# car4.display_all()
# car5.display_all()
# car6.display_all()
