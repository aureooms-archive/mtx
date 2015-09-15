
class Updater {

	update ( module ) {
		throw new Error( 'Not implemented' ) ;
	}

}

class DefaultUpdater extends Updater {

	/**
	 * There is a more efficient way to do this.
	 *
	 */
	update ( module ) {
		// remove then
		// install the module
	}

}


