<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
	<form action="/process" method="post">
        <p><span id="your_name">Your Name:</span>
        <input id="name" type="text" name="name"></p>
        <p><span id="dojoLocation">Dojo Location:</span>
            <select name="location">
                <option value="San Jose">San Jose</option>
                <option value="Seattle">Seattle</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Dallas">Dallas</option>
                <option value="Washington DC">Washington DC</option>
                <option value="Chicago">Chicago</option>
            </select>
        </p>
        <p>Favorite Language:
            <select name="language">
                <option value="Python">Python</option>
                <option value="Javascript">Javascript</option>
                <option value="C/C++">C/C++</option>
                <option value="Ruby">Ruby</option>
            </select>
        </p>
        <p>Comment (optional):
        <input id="comments" type="textarea" name="comments"></p>
        <input type="submit" name="submitButton">
    </form>
</body>
</html>