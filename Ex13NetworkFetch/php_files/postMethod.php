<?

    header('Content-Type:text/plain; charset=utf-8');

    $name= $_POST['name'];
    $msg= $_POST['msg'];

    echo "이름 : $name \n";
    echo "메세지 : $msg";



?>