<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>Create your pet</h1>
	<h3>Make a dog</h3>
	<form action="dogs" method="post">
		Name: <input type="text" name="name" >
		Breed: <input type="text" name="breed">
		Weight: <input type="text" name="weight">
		<input type="submit" value="Submit">
	</form>
</body>
</html>