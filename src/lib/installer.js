
class Installer {

	constructor ( { downloader , setup } ) {
		this.downloader = downloader ;
		this.setup = setup ;
	}

	install ( module ) {
		this.downloader.download( module ) ;
		this.setup.setup( module ) ;
	}

}
