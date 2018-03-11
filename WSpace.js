<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Board</title>
		<style>
			#container { position: relative; }
			#whiteboard { border: 1px solid #000; }
		</style>
	</head>
	<body>
		<div id="container">
			<canvas id="whiteboard" width="720" height="480">
			</canvas>
		</div>
		<script src="https://cdn.pubnub.com/pubnub-3.15.2.min.js"></script>
		<script src="board.js"></script>
	</body>
</html>
