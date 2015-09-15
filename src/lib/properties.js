
import { chainmap , dict } from 'aureooms-js-collections' ;
import object from 'aureooms-js-object' ;
import json from 'aureooms-js-json' ;
import mod from './module' ;

const DEFAULTS = dict.fromObject( {
	"compiler" : "xelatex" ,
	"dependencies" : { } ,
	"template" : "default" ,
	"stylesheet" : {
		"files" : "sty" ,
		"name" : "stylesheet" ,
		"processor" : "default" ,
	} ,
	"bibliography" : {
		"files" : "bib" ,
		"name" : "bibliography" ,
		"processor" : "default" ,
	} ,
	"text" : {
		"files" : "tex" ,
		"name" : "text" ,
		"processor" : "default" ,
	} ,
} ) ;

export async function load ( root = './' ) {

	return chainmap( DEFAULTS , await json.load( `${root}latex.json` ) ) ;

}

export async function dependencies ( root = './' ) {

	return load( root ).get( 'dependencies' ) ;

}

export async function addDependency ( module , root = './' ) {

	json.write( `${root}latex.json` , ( await load( root ) ).get( 'dependencies' )[module.name] = module.tag ;

}

export function getDependency ( module , root = './' ) {

	return load( root ).get( 'dependencies' )[module.name] ;

}
