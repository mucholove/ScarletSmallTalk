# Scarlet-SmallTalk

Scarlet SmallTalk is a Smalltalk to JavaScript cross-compiler and runtime.

The Scarlet Compiler is a modified version of the current Squeak compiler and generates code that is strongly influenced by Amber.

```
  ./scarlet 
Usage: scarlet [options] [command] <files-to-load...>

Options:
  -m, --mobile         build for mobile
  -i, --interactive    Interactive mode
  -h, --help           output usage information

Commands:
  compile <source...>  Compile a file or a directory of files
  build <source>       Compile files in a directory into an image

```

## Build the runtime(s)

Translates all .st files into JS using the Scarlet Compiler and assembles the Scarlet runtimes/images (kernel, prod, mobile)

```
make runtime
```

Produces

```
 artifacts/sk.kernel.js
 artifacts/sk.prod.js
 artifacts/mobile.js

```


## Run tests on the Scarlet Kernel

```
make test
```

## Build Scarlet Compiler

If you want to rebuild the Scarlet Compiler itself use 

```
  make compiler
```

It compiles a new compiler image, installs it as the new compiler (folder bootstrap) and recompiles everything again.

Produces 

```
  artifacts/sk.compiler.js
```

## Examples

The folder examples includes a simple mobile and a standalone example.
See the read me files in the example folders for details.

## Configurations

The build process is currently using Taskr (taskfile.js). A future goal is to bootstrap the build process in Smalltalk as well.

The build parameters for the different artifacts are defined by configurations in the configs folder. Any additions to or removals of files from the build process need to modify the respective configuration file(s).

