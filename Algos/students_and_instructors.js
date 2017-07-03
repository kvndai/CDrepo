var students = [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
]

function returnNames(student_list){
	for(var x=0; x<students.length; x++){
		console.log(`${student_list[x].first_name} ${student_list[x].last_name}`)
	}
}

//returnNames(students)

var users = {
 'Students': [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
  ],
 'Instructors': [
     {first_name : 'Michael', last_name : 'Choi'},
     {first_name : 'Martin', last_name : 'Puryear'}
  ]
 }

 function returnNamesPartII(users){
 	for(key in users){
 		out(key, users)
 	}
 }

 function out(key, users){
 	for(var x=0; x<users[key].length; x++){
 			if(x==0){
 				console.log(`${key}`)
 			}
 			console.log(`${x} - ${users[key][x].first_name} ${users[key][x].last_name} - ${users[key][x].last_name.length + users[key][x].last_name.length} ` )
 		}
 }

 returnNamesPartII(users)