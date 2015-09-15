
class Setup {

	setup ( directory ) {
		throw new Error( 'Not implemented' ) ;
	}

}

class URLSetup extends Setup {

	setup ( directory ) {
		// generate a latex.json file
		// depending on the type of the module
	}

}

class DBLPSetup extends Setup {

	setup ( directory ) {
		// generate a latex.json file
		// for a bib only module
	}

}

class GitHubSetup extends Setup {

	setup ( directory ) {
		// there should be nothing to do
	}

}
