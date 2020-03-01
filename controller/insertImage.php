<?php
require_once "./connection.php";
require_once "../model/register.class.php";
require_once "../model/product.class.php";
try {
     $prod = new Product();

     $width = 2200;
     $height = 2215;
     $byte = 2000000;

     $prod->setImage("jpg|png|jpeg|bmp", $_FILES['img']);
     $img = $prod->getImage();
     $imgInfoSize = getimagesize($img['tmp_name']);

     if (($imgInfoSize[0] > $width)|| ($imgInfoSize[1] > $height) || ($img['size'] > $byte)) echo "<scrip>confirm('Tamanho do arquivo não suportado'), location.href = '../view/image.php'";

     preg_match("/\.(jpg|png|jpeg|bmp)$/", $img['name'], $ext);

     $tokenName = md5(uniqid(time())) . "." . $ext[1];

     if (move_uploaded_file($img['tmp_name'], "../src/images/$tokenName")) {

          $account->add("images", ["image"], [$tokenName]);
          $account->connectionClose();
          echo "<script>confirm('Imagem salva com sucesso'); location.href = '../view/image.php';</script>";
     }
} catch (Exception $ex) {
     die($ex->getMessage());
}
?>