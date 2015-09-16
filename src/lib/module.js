
import string from 'aureooms-js-string' ;

const PARSERS = new Map( [
[ 'url' , parseURL ] ,
[ 'github' , parseGitHub ] ,
[ 'dblp' , parseDBLP ] ,
] ) ;


class Module {

	constructor ( registry ) {
		this.registry = registry ;
	}

	get url ( ) {
		throw new Error( 'not implemented' ) ;
	}

	get directory ( ) {
		throw new Error( 'not implemented' ) ;
	}
}

class URLModule extends Module {

	constructor ( url ) {
		super( 'url' ) ;
		this.url = url ;
	}

	get directory ( ) {
		return `./latex_modules/url/${escape(this.url)}` ;
	}

}

class GitHubModule extends Module {

	constructor ( username , repository , at = 'master' ) {
		super( 'github' ) ;
		this.username = username ;
		this.repository = repository ;
		this.at = at ;
	}

	get url ( ) {
		return `https://github.com/${this.username}/${this.repository}/archive/${this.at}.zip` ;
	}

	get directory ( ) {
		return `./latex_modules/github/${this.username}/${this.repository}` ;
	}

}

class DBLPModule extends Module {

	constructor ( uri ) {
		super( 'dblp' ) ;
		this.uri = uri ;
	}

	get url ( ) {
		return `http://dblp.uni-trier.de/rec/bib2/${this.uri}.bib` ;
	}

	get directory ( ) {
		return `./latex_modules/dblp/${escape(this.uri)}` ;
	}

}

export function parse ( uri ) {

	const [ registry , tail ] = string.split( uri , ':' , 1 ) ;

	if ( !PARSERS.has( registry ) ) throw new Error( `unknown registry '${registry}'` ) ;

	return PARSERS.get( registry )( tail ) ;

}

export function parseURL ( url ) {

	return new URLModule( url ) ;

}

export function parseDBLP ( uri ) {

	return new DBLPModule( uri ) ;

}

export function parseGitHub ( uri ) {

	const [ username , tail ] = string.split( uri , '/' , 1 ) ;
	if ( username === undefined ) throw new Error( `could not parse username in '${uri}'` ) ;

	const [ author , at ] = string.split( tail , '@' , 1 ) ;
	if ( author === undefined ) throw new Error( `could not parse author in '${uri}'` ) ;

	return new GitHubModule( username , author , at ) ;

}
