
import { ArgumentParser } from 'argparse' ;

import { version , description } from '../package.json' ;

import { install , remove , bundle , archive , build , update , detach } from './actions' ;

const parser = new ArgumentParser ( {
	    version ,
	    addHelp : true ,
	description ,
} ) ;

const subparsers = parser . addSubparsers ( {
	title : 'actions' ,
	 dest : '_action'
} ) ;

subparsers . addParser ( 'install' , { aliases : [ 'i' ] , addHelp : true } )
. setDefaults ( { 'action' : install } ) ;

subparsers . addParser ( 'remove' , { aliases : [ 'r' ] , addHelp : true } )
. setDefaults ( { 'action' : remove } ) ;

subparsers . addParser ( 'bundle' , { aliases : [ 'B' ] , addHelp : true } )
. setDefaults ( { 'action' : bundle } ) ;

subparsers . addParser ( 'archive' , { aliases : [ 'A' ] , addHelp : true } )
. setDefaults ( { 'action' : archive } ) ;

subparsers . addParser ( 'build' , { aliases : [ 'b' ] , addHelp : true } )
. setDefaults ( { 'action' : build } ) ;

subparsers . addParser ( 'update' , { aliases : [ 'u' ] , addHelp : true } )
. setDefaults ( { 'action' : update } ) ;

subparsers . addParser ( 'detach' , { aliases : [ 'd' ] , addHelp : true } )
. setDefaults ( { 'action' : detach } ) ;

const args = parser . parseArgs ( ) ;

console . dir ( args ) ;
