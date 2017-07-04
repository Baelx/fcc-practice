function mutation(arr) {
	for (var i = 0; i < arr[0].length;i++){
		for (var x = 0; x < arr[1].length;x++){
			// if (arr[1].charAt(x).toLowerCase().indexOf(arr[0].charAt(i).toLowerCase()) >= 0) 
			console.log("Index of shows " + arr[1].charAt(x).toLowerCase().indexOf(arr[0].charAt(i).toLowerCase()));
			console.log(arr[0].charAt(i).toLowerCase());
			console.log(arr[0].charAt(x).toLowerCase());
		}
	}
	// return true;
}

mutation(["helLO", "hey"]);
