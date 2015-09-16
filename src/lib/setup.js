
class Setup {

	setup ( module ) {
		throw new Error( 'Not implemented' ) ;
	}

}

class URLSetup extends Setup {

	setup ( module ) {
		// generate a latex.json file
		// depending on the type of the module
	}

}

class DBLPSetup extends Setup {

	setup ( module ) {
		// generate a latex.json file
		// for a bib only module
	}

}

class GitHubSetup extends Setup {

	setup ( module ) {
		// there should be nothing to do
	}

}
