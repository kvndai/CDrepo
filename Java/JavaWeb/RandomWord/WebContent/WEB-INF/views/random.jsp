
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="java.util.Date"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
	<div style="text-align:center; padding-top:30%;">

        You have generated a word ${counter} times
        <h1>

        			${randomWord}

        </h1>
        <form method="POST" action="/random">
        			 <button type="submit">Generate!</button>
        </form>
        <hr/>
        ${date}
    </div>
</body>
</html>