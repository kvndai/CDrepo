class product(object):
    def __init__(self, price, item_name, weight, brand, cost):
        self.price = price
        self.item_name = item_name
        self.weight = weight
        self.brand = brand
        self.cost = cost
        self.status = "For Sale"

    def sell(self):
        self.status = "Sold"
        # print self.status #might not need
        return self

    def add_tax(self,tax):
        self.tax = tax
        self.price = self.price * (1+self.tax)
        # print self.price #might not need
        return self

    def returns(self, reason):
        self.reason = reason
        if self.reason == "Defective":
            self.status = "Defective"
            self.price = 0
        if self.reason == "Returned in box, like new":
            self.status = "For Sale"
        if self.reason == "Open box":
            self.status = "Used"
            self.price = self.price*0.8
        return self

    def displayInfo(self):
        print self.price
        print self.item_name
        print self.weight
        print self.brand
        print self.cost
        print self.status
        # return self

item1 = product(2000, "Cardboard", "3lbs", "costco", 3)
item1.sell().add_tax(0.5).returns("Open box").displayInfo()
