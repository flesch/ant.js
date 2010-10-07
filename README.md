# ant.js

Using the `<antjs:property/>` task, you're able to reformat the "value" attribute of a project's property before it is set. The `ant.js` file is where you'll hook each property and define the value.

The magic happens by using the [Apache Ant](http://ant.apache.org/) API to set properties.
	
Normally in Apache Ant, you can set properties using this syntax: 
	
	<property name="environment" value="DEVELOPMENT"/>

**ant.js** adds two new attributes to the `<property/>` task: `argv` and `default`.

    <property name="environment" argv="env" default="DEV"/>

This is just a framework for setting properties. You need to define what happens in `ant.js`, but some examples are included.