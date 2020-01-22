function setAlarm(employed, vacation) {
	if (employed) {
		if(!vacation){
			return true;
		}
	}
	return false;
}

console.log(setAlarm(true, false))
