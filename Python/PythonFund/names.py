students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
]

users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }

def showStudents(arr):
     for i in students:
          print i['first_name'], i['last_name']

def showUsers(val):
     for data in users:
          print data
          count = 0
          for j in users[data]:
              count += 1
              fullname = j['first_name'] + j['last_name']
              length = len(j['first_name']) + len(j['last_name'])
              print  "{} - {} - {}".format(count,fullname,length)

showStudents(students)
showUsers(users)
