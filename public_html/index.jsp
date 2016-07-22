<%-- 
    Document   : index
    Created on : 01-Mar-2012, 23:06:02
    Author     : Abdulsalam
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Typing Master Web</title>
        <link rel="stylesheet" type="text/css" title="My style" media="screen" href="css/style.css" />
        <link rel="stylesheet" type="text/css" title="My objects" media="screen" href="css/objects.css" />
        <script type="text/javascript" src="js/jquery-1.7.1.js"></script>
        <script type="text/javascript" src="js/TypingMaster.js"></script>
    </head>
    <body>
        <h1>Welcome</h1>
    <center>
        <div id="content">
            <div id="game-stage">
                <div id="car"><span id="phrase"></span></div>
                <div id="police_checkpoint"></div>
            </div>
            <div id="menu">
                <div id="left_col">
                    <p>
                        <label>Name</label>
                        <input type="text" name="name" value=""/>
                    </p>
                    <p>
                        <label>Question</label>
                        <select name="words">
                            <option value="">English Words</option>
                            <option value="">Animals</option>
                            <option value=""></option>
                        </select>
                    </p>
                    <p>
                        <label>Difficulty</label>
                        <select name="difficulty">
                            <option value="1">Level 1</option>
                            <option value="2">Level 2</option>
                            <option value="3">Level 3</option>
                        </select>
                    </p>                    
                </div>
                <div id="middle_col">
                    <p>
                        <input type="text" id="user_input" name="user_input" value=""/>
                    </p>
                    <div>
                        <input type="button" name="start" value="Start" class="button" />
                        <input type="button" name="end" value="End Game" class="button"/>
                        <input type="button" name="pause" value="Pause" class="button"/>
                    </div>                    
                </div>
                <div id="right_col">
                    <p>
                        <label>Level</label><span id="level">1</span>
                    </p>
                    <p>
                        <label>Score</label><span id="score">0</span>
                    </p>                
                </div>
            </div>
        </div>
    </center>
    </body>
</html>
