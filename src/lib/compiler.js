
class Compiler {

	compile ( ) {
		throw new Error( 'Not implemented' ) ;
	}

}

class BaseCompiler extends Compiler {

	compile ( ) {

		// check that at least text files have been defined

		//1. compiles dependencies (recursively) and own files into
			//1. single stylesheet (default `stylesheet.sty`)
			//2. single bib file (default `bibliography.bib`)
			//3. single text file (default `text.tex`)

	}

}

class XelatexCompiler extends BaseCompiler {

	compile ( ) {

		super.compile( ) ;
		// build pdf file using xelatex and bibtex

	}

}
