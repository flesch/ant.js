(function(self, project, attributes, undefined){

	// TIMESTAMP
	if (attributes.get('name') == 'timestamp') {
		// We're expecting the SimpleDateFormat format: http://download.oracle.com/javase/1.4.2/docs/api/java/text/SimpleDateFormat.html
		// But have customized T to map to the number of milliseconds since January 1, 1970, 00:00:00 GMT.
		// Get either the "argv" value ("time" in this case), or the "default".
		var format = (project.getProperty(attributes.get('argv')) || attributes.get('default')).replace('T', Number(new Date).toString());
		// Instead of just setting "timestamp" to "time", we're using that as a SimpleDateFormat (java) pattern.
		attributes.put('value', (new java.text.SimpleDateFormat(format)).format(new Date));
	}
	
	// INPUT
	if (attributes.get('name') == 'username') {
		// Using the Ant API, we'll dynamically create an <input/> task.
		// <input message="Please enter your username:" addproperty="username"/>
		var input = project.createTask('input');
		input.setMessage('Enter your username:');
		input.setAddproperty('bee.temp.username');
		input.execute();
		
		// We'd decided you need to enter a full e-mail address, but can optionally just enter your name.
		// If that happens, this completes it for you.
		var user = project.getProperty('bee.temp.username');		
		attributes.put('value', !/@/.test(user) ? user+'@fles.ch' : user);
	}
	
	// Set the PROPERTY. If we have a VALUE, we'll use that. Otherwise, evalaute ARGV or fallback to the default.
	project.setProperty(attributes.get('name'), attributes.get('value') || project.getProperty(attributes.get('argv')) || attributes.get('default'));
	
})(self, self.project, attributes);