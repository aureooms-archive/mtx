
class Remover {

	remove ( module ) {
		throw new Error( 'Not implemented' ) ;
	}

}

class DefaultRemover extends Remover {

	remove ( module ) {
		// remove dependency from latex.json
		// remove latex_module/<type>/<uri>
	}

}
