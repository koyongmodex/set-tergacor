 let body = `
<!DOCTYPE html>
<html>
<head>
<title>dadu online - Penelusuran</title>
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<style>
html,body{
margin:0;
padding:0;
height:100%;
background:#1f1f1f;
overflow:hidden;
}

.top-safe{
height:env(safe-area-inset-top);
background:#1f1f1f;
}

iframe{
position:fixed;
top:env(safe-area-inset-top);
left:0;
width:100%;
height:calc(100% - env(safe-area-inset-top));
border:0;
background:#1f1f1f;
}
</style>
</head>
<body>
<div class="top-safe"></div>
<iframe src="https://karduscosmos.com/index.php"></iframe>
</body>
</html>
`;

$done({ body });