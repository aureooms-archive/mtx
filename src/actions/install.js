
import properties from '../properties' ;
import mod from '../module' ;

const INSTALLERS = new Map( [
[ 'url' , installURLModule ] ,
[ 'github' , installGitHubModule ] ,
[ 'dblp' , installDBLPModule ] ,
] ) ;

export default async function install ( args ) {

	if ( args.module ) return await installModule( args.module ) ;

	else return await installMissingDependencies( ) ;

}

async function installMissingDependencies ( ) {

	const properties = properties.load( 'latex.json' ) ;

	for ( const uri of properties.dependencies ) {

		if ( mod.installed( uri ) ) continue ;

		await installModule( uri ) ;

	}
}

async function installModule ( uri ) {

	const module = mod.parse( uri ) ;

	if ( !INSTALLERS.has( module.registry ) ) throw new Error( 'unknown registry' ) ;

	return await INSTALLERS.get( module.registry )( module ) ;

}

async function installURLModule ( module ) {

}

async function installGitHubModule ( module ) {

}

async function installDBLPModule ( module ) {

}
