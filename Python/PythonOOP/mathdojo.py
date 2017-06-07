# class mathdojo(object):
#     def __init__(self):
#         self.result = 0
#
#     def add(self,*var):
#         for i in var:
#             self.result = self.result + i
#         return self
#
#     def subtract(self,*var):
#         for i in var:
#             self.result = self.result - i
#         return self
#
#     def end(self):
#         print self.result
#
# md = mathdojo()
# md.add(2).add(2, 5).subtract(3, 2).end()

class mathdojo(object):
    def __init__(self):
        self.result = 0

    def add(self,*var):
        for i in var:
            if isinstance(i,(list,float,tuple)):
                for j in i:
                    self.result = self.result + j
            else:
                self.result = self.result + i
        return self

    def subtract(self,*var):
        for i in var:
            if isinstance(i,(list,float,tuple)):
                for j in i:
                    self.result = self.result - j
            else:
                self.result = self.result - i
        return self

    def end(self):
        print self.result


md = mathdojo()
md.add([1],3,4).add([3, 5, 7, 8], [2, 4.3, 1.25]).subtract(2, [2,3], [1.1, 2.3]).end()
