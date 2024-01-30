<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // collect value of input field
  $user = $_POST['user'];
  if (empty($user)) {
    echo "Name is empty";
  } else {
    echo $user;
  }
}
?>