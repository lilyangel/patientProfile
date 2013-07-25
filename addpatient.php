<html>
    <?php
        include ('header.php');
    ?>
    <body>
    <?php
        include ('divHead.php');
        echo $_SESSION['user'];
        if(strlen($_POST['user'])>0){
            include ('questionSheet.php');
        }else{
        }
    ?>
    </body>
</html>
