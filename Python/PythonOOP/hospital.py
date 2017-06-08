class Patient(object):
    def __init__(self, id, name, allergies):
        self.id = id
        self.name = name
        self.allergies = allergies
        self.bednum = None

class Hospital(object):
    def __init__(self, name, capacity):
        self.name = name
        self.patients = []
        self.capacity = capacity
    def admit(self, patientInfo):
        if len(self.patients) >= self.capacity:
            print 'cannot accept anymore patients'
        else:
            self.patients.append(patientInfo)
            patientInfo.bednum = patientInfo.id
            print "accepted"
        return self
    def discharge(self, patientInfo):
        # remove patient i from array
        for i in self.patients:
            self.patients.remove(patientInfo)
            patientInfo.bednum = None
        return self
    def show(self):
        for i in range(len(self.patients)):
            print self.patients[i].name
            print self.patients[i].bednum
        return self

patient1 = Patient(1,"kevin","none")
patient2 = Patient(2,"john","peeanuts")
patient3 = Patient(3,"bob","pollen")

Hospital("kaiser",2).admit(patient2).admit(patient1).discharge(patient2).discharge(patient1).admit(patient3).show()





