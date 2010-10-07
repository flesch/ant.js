# ant.js

This is a loose framework using `<scriptdef>` to extend [Apache Ant](http://ant.apache.org/).

`ant.js` provides the `<antjs:property/>` task, where you're able to reformat the "value" attribute of a project's property before it is set using the Ant API.
	
Normally in Ant, you can set properties using this syntax: 
	
    <property name="environment" value="DEVELOPMENT"/>

**ant.js** includes two new attributes: `argv` and `default`.

    <antjs:property name="environment" argv="env" default="DEVELOPMENT"/>

  - `argv` is the name of a property set on the command line (`-Denv=DEV`). *This must be different than the property you are setting - otherwise `ant.js` can't override it.*
  - `default` says that you're explicitly using `argv` (and not `value`) and to fallback if that's not set.

*You may need to move `./ant.js` to `./lib` or something similar so `cmd ant` runs Apache Ant and not `ant.js`.*

## Example

You need to edit `ant.js` with your custom logic for reformatting values, but here's an example of what a "hook" will look like:

    if (attributes.get('name') == [property]) {
        attributes.put('value', [updated/reformatted value]);
    }

This updates the `value` attribute, which the set through the API.