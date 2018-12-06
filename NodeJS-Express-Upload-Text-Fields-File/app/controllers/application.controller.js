exports.uploadForm = (req, res) => {
	var applicationform = {
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		email: req.body.email,
		phone: req.body.phone,
		file: req.file
	};
	
	// log applicationForm
	console.log(JSON.stringify(applicationform, null, 4));
	
	res.send('Uploaded Successfully!');
}