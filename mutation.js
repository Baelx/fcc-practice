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

//At this point I need to stop the loops above if anything above -1 is outputted
//I also need to make sure that if nothing above -1 is ouputted that it finishes looping to make sure
