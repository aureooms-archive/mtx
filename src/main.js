
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

subparsers . addparser ( 'update' , { aliases : [ 'u' ] , addhelp : true } )
. setDefaults ( { 'action' : update } ) ;

subparsers . addparser ( 'upgrade' , { aliases : [ 'U' ] , addhelp : true } )
. setDefaults ( { 'action' : upgrade } ) ;

subparsers . addParser ( 'build' , { aliases : [ 'b' ] , addHelp : true } )
. setDefaults ( { 'action' : build } ) ;

subparsers . addParser ( 'detach' , { aliases : [ 'D' ] , addHelp : true } )
. setDefaults ( { 'action' : detach } ) ;

subparsers . addParser ( 'bundle' , { aliases : [ 'B' ] , addHelp : true } )
. setDefaults ( { 'action' : bundle } ) ;

subparsers . addParser ( 'archive' , { aliases : [ 'A' ] , addHelp : true } )
. setDefaults ( { 'action' : archive } ) ;

const args = parser . parseArgs ( ) ;

console . dir ( args ) ;
