(function(undefined){

    // Make sure we're in the <antjs:property/> task. In the future,
    // we may want to define other tasks using this file.
    if (self.getTaskName() == 'antjs:property') {
            
        // Rather than set the "timestamp" property to something like "yyyy-MM-dd",
        // let's use it as a SimpleDateFormat pattern:
        // http://download.oracle.com/javase/1.4.2/docs/api/java/text/SimpleDateFormat.html
        // Let's also allow "T" to be used as the number of milliseconds since January 1, 1970, 00:00:00 GMT.
        if (attributes.get('name') == 'timestamp') {
            // If a pattern was passed in from the command line use it, or fallback to a predefined pattern.
            var format = (project.getProperty(attributes.get('argv')) || attributes.get('default')).replace('T', Number(new Date).toString());
            // Update the "value" attribute.
            attributes.put('value', (new java.text.SimpleDateFormat(format)).format(new Date));
        }
        
        // Using the Ant API, let's actually set the property now.
        // Notice we're evaluating each attribute instead of caching them above. This allows
        // you to mutate not only the value, but the attributes themselves.
        project.setProperty(attributes.get('name'), attributes.get('value') || project.getProperty(attributes.get('argv')) || attributes.get('default'));
        
    }

})();