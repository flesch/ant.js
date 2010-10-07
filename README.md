# ant.js

Using the `<antjs:property/>` task, you're able to reformat the "value" attribute of a project's property before it is set. The `ant.js` file is where you'll hook each property and define the value.

The magic happens by using the [Apache Ant](http://ant.apache.org/) API to set properties.
	
Normally in Apache Ant, you can set properties using this syntax: 
	
    <property name="environment" value="DEVELOPMENT"/>

**ant.js** includes two new attributes: `argv` and `default`.

    <antjs:property name="environment" argv="env" default="DEVELOPMENT"/>

  - `argv` is the name of a property set on the command line (`-Denv=DEV`).
  - `default` says that you're explicitly using `argv` (and not `value`) and to fallback if that's not set. 

This is just a framework for setting properties, *which is still a little in flux*.