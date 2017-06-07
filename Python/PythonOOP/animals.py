class animals(object):
    def __init__(self, name, health):
        self.name = name
        self.health = health

    def walk(self):
        self.health -= 1
        return self

    def run(self):
        self.health -= 5
        return self

    def displayInfo(self):
        print self.name
        print self.health
        return self

class dog(animals):
    def __init__(self, name):
        super(dog, self).__init__(name, 150)
    def pet(self):
        self.health += 5

class dragon(animals):
    def __init__(self, name):
        super(dragon, self).__init__(name, 170)
    def fly(self):
        self.health -= 10
        return self
    def displayInfo(self):
        super(dragon, self).displayInfo()
        print "I am a dragon"

animal1 = animals("happy",100)
animal1.walk().walk().walk().run().run().displayInfo()
dog1 = dog("lucky")
dog1.walk().walk().walk().run().run().displayInfo()
dragon1 = dragon("bob")
dragon1.walk().fly().displayInfo()
