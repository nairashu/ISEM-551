
/**
* Function to update the Indiana v/s Notre Dame Score
*/
function updateIUNDScore() {
	var iuScore = parseInt(document.getElementById("iuscorelive").innerHTML);
	var ndScore = parseInt(document.getElementById("ndscorelive").innerHTML);

	var iuGreaterThanND = iuScore > ndScore;

	if (iuScore > 70) {
		return;
	};

		if(iuGreaterThanND) {
			ndScore += 2;
			document.getElementById("ndscorelive").innerHTML = ndScore;
		} else {
			iuScore += 3;
			document.getElementById("iuscorelive").innerHTML = iuScore;
		};
	
}

/**
* Function to update the Kansas v/s Wisconsin Score
*/
function updateKUWISScore() {
	var kuScore = parseInt(document.getElementById("kuscorelive").innerHTML);
	var wisScore = parseInt(document.getElementById("wisscorelive").innerHTML);

	var kuGreaterThanWis = kuScore >= wisScore;

	if (wisScore > 60) {
		return;
	};

		if(kuGreaterThanWis) {
			wisScore += 2;
			document.getElementById("wisscorelive").innerHTML = wisScore;
		} else {
			kuScore += 3;
			document.getElementById("kuscorelive").innerHTML = kuScore;
		};
	
}