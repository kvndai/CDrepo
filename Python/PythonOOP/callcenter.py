class Call(object):
    def __init__(self, id, name, phonenumber, time, reason):
        self.uniqueid = id
        self.name = name
        self.phonenumber = phonenumber
        self.time = time
        self.reason = reason
    def show(self):
        print "{} {} {} {} {}".format(self.uniqueid,self.name,self.phonenumber,self.time,self.reason)
        return self

class CallCenter(object):
    def __init__(self, calls):
        self.calls = calls
        self.queue = len(calls)
    def add(self, caller):
        self.calls.append(caller)
        return self
    def subtract(self):
        self.calls = self.calls[1:]
        return self
    def info(self):
        for i in range(self.queue):
            print self.calls[i].name, self.calls[i].phonenumber
        print self.queue

calls1 = Call(1,"1","222222222",10,"grgrg")
calls2 = Call(2,"2","223222222",20,"ggrg")
calls3 = Call(3,"3","224222222",30,"rgrg")
calls4 = Call(4,"4","225222222",40,"grgg")
calls5 = Call(5,"5","2227222222",50,"grgr")
calls6 = Call(6,"6","2222822222",60,"grgrg")

caller = [calls1,calls2,calls3,calls4]

center = CallCenter(caller)

center.add().subtract()info()
