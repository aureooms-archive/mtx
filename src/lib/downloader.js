
class Downloader {

	download ( module ) {
		throw new Error( 'Not implemented' ) ;
	}

}

class URLDownloader {

	download ( module ) {
		// detect type of file and module
		// then download
		// file (and inflate if necessary) to latex_modules/url/<uri>
	}

}

class DBLPDownloader {

	download ( module ) {
		// download bib file to latex_modules/dblp/<uri>
	}

}

class GitHubDownloader {

	download ( module ) {
		// download zip file as temp file
		// extract to latex_modules/github/<uri>
	}

}
