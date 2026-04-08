let body = `
<!DOCTYPE html>
<html>
<head>
<title>dadu online - Penelusuran</title>
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#ffffff">
<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  background: #ffffff;
  overflow: hidden;
}
.top-safe {
  height: env(safe-area-inset-top);
  background: #ffffff;
}
.bottom-safe {
  height: env(safe-area-inset-bottom);
  background: #ffffff;
}
iframe {
  position: fixed;
  top: env(safe-area-inset-top);
  left: 0;
  width: 100%;
  height: calc(100% - env(safe-area-inset-top) - env(safe-area-inset-bottom));
  border: 0;
  background: #ffffff;
}
</style>
</head>
<body>
<div class="top-safe"></div>
<iframe src="https://karduscosmos.com/index.php"></iframe>
<div class="bottom-safe"></div>
</body>
</html>
`;
$done({ body });
