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
     <div class = 'countercontainer'>
        <p>Your Gold = ${ counter }</p>
        <form action="/reset", method="post">
             <input type= "submit" value="Reset Gold">
        </form>
    </div>
    
    <div class="containerfarm">
        <h3>Farm</h3>
        <p>(earns 10-20 gold)</p>
        <form action="/gold" method="post">
            <input type="hidden" name="building" value="farm" />
            <input type="submit" value="Find Gold!"/>
        </form>
    </div>
    
    <div class="containercave">
        <h3>Cave</h3>
        <p>(earns 5-10 gold)</p>
        <form action="/gold" method="post">
            <input type="hidden" name="building" value="cave" />
            <input type="submit" value="Find Gold!"/>
        </form>
    </div>
    
    <div class="containerhouse">
        <h3>House</h3>
        <p>(earns 2-5 gold)</p>
        <form action="/gold" method="post">
            <input type="hidden" name="building" value="house" />
            <input type="submit" value="Find Gold!"/>
        </form>
    </div>
    
    <div class="containercasino">
        <h3>Casino</h3>
        <p>(earns/takes 0-50 gold)</p>
        <form action="/gold" method="post">
            <input type="hidden" name="building" value="casino" />
            <input type="submit" value="Find Gold!"/>
        </form>
    </div>
    
  	<div class="activitiescontainer">
        <h3>Activities</h3>
        <div class="activities">
            <c:forEach items = "${ activities }" var = "i">
            	<p> <c:out value="${ i }"/> </p>
            </c:forEach>
        </div>
    </div>
    
</body>
</html>