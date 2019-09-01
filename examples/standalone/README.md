# Standalone Example

The standalone example adds a simple class and a doIt to the runtime.

Thanks to Alexandre Bergel for the MyApp example!


```

Object 
	subclass: #MyApp
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	category: 'Example'!

! MyApp class methodsFor: #public !
main
	" log 'Hello World' into the console/cmd "
	Transcript show: 'Hello world' ! !

MyApp main!

```

## Build the standalone runtime

```
./scarlet build examples/standalone/
```

Produces

```
examples/standalone/standalone.js
```

## run the standalone example

```
node examples/standalone/standalone.js 
Hello world

```

## interact with the standalone example

```
./scarlet -i examples/standalone/standalone.js
Hello world
> MyApp main
Hello world
Result: {st:MyApp}
> 

```
