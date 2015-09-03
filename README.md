***

_Work in progress_

***

# `mtx`
> LaTeX on crack

Package manager for LaTeX.

## `latex.json`

This file defines the properties of a module.

### Type of content

There can be up to three types of content files in a module:

  1. `stylesheet`
  2. `bibliography`
  3. `text`

#### `stylesheet`

Defines stylesheet components that can be included via the `\usepackage` macro.

#### `bibliography`

Defines bibliographical components. `mtx build` uses `bibtex` to generate the
bibliography.

#### `text`

### Defaults

```json
{
	"compiler" : "xelatex" ,
	"dependencies" : [ ] ,
	"template" : "default" ,
	"stylesheet" : {
		"files" : "sty" ,
		"name" : "stylesheet" ,
		"processor" : "default" ,
	} ,
	"bibliography" : {
		"files" : "bib" ,
		"name" : "bibliography" ,
		"processor" : "default" ,
	} ,
	"text" : {
		"files" : "tex" ,
		"name" : "text" ,
		"processor" : "default" ,
	} ,
}
```

The default template and processors simply concatenate files in lexicographic
order. *I am still not sure how we will allow to use external templates and
processors.*

### Examples

The following examples try to exhaustively expose the power of `mtx`.

#### Dependencies

This `latex.json` illustrates how to declare dependencies.

```json
{
	"dependencies" : [
		"dblp:journals/algorithmica/CardinalJ15" ,
		"github:aureooms/sty-symbols-polylog#master@^1.0.0" ,
		"github:aureooms/sty-symbols-3SUM#without-dash" ,
		"github:aureooms/sty-symbols-k-SUM#with-dash@^1.0.0" ,
		"github:aureooms/theorem-BSG" ,
	] ,
}
```

The syntax for a dependency is `registry:uri`. Currently supported
registries are:

  - url
  - github
  - dblp

Currently supported urls are:

  - git url
  - zip file containing any of the above
  - tar.gz file containing any of the above

## actions

### `mtx install`

  1. install dependencies

### `mtx install <module>`

  1. install module as a dependency

### `mtx remove <module>`

  1. remove a dependency

### `mtx update`

Updates dependencies.

### `mtx build [<**options>]`

Requires at least text files to be defined:

  1. compiles dependencies (recursively) and own files into
    1. single stylesheet (default `stylesheet.sty`)
    2. single bib file (default `bibliography.bib`)
    3. single text file (default `text.tex`)
  2. process text file with compiler of choice (default `xelatex`)

The `<**options>` arguments override the configuration found in the
`latex.json` file.

### `mtx detach <dependency>`

Create hard copy of dependency for modification. This removes the dependency
from the `latex.json` file.

### `mtx bundle <dest> [<**options>]`

Bundle all types of content files into a small number of files. Can be used to
make an archive of the project, share the project with peers, continue to work
without `mtx`, etc.

### `mtx archive <dest> [-a <archiver>] [<**options>]`

Bundles then compress the folder. Uses `zip` by default.
