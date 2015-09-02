
import str from 'aureooms-js-string' ;

export default async function install ( args ) {

	if ( args.module ) installModule( args.module ) ;

}


async function installModule ( module ) {

	[ registry , url ] = str.split( module , ':' , 1 ) ;

	switch ( module ) {

		case 'github' :
			await installGithubModule( url ) ;
			break ;

		default :
			break ;

	}

	// add dependency to latex.json

}
