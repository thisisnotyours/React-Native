<?php

    header('Content-type:text/plain; charset=utf-8');    //plain -그냥 문자열일때

    $name= $_GET['name'];
    $msg= $_GET['msg'];

    echo "NAME : $name \n";
    echo "MESSAGE : $msg";


?>