//overwrite with stml.config.js
import fs from 'fs-extra';
import path from 'path';
import Partial from '../partial';
import Template from '../template';
import { ConfigOptions } from '../types/config';

export default class Loader {

    _config:ConfigOptions
    hasTemplates: boolean
    hasParts: boolean
    templates: Template[]
    partials: Partial[]

    constructor() {
        this._config = {
                        "rootDir":"views",
                        "templateDir":"pages",
                        "partialDir":"partials",
                        "staticGeneration":false,
                    }
        this.hasTemplates = false;
        this.hasParts = false;
        this.partials = [];
        this.templates = [];
        this._configure();
  
    }
    _configure() {
        const config_path = path.join( process.cwd(), `render.config.js` );
        const root_dir = path.join( process.cwd(), this._config.rootDir );

        if( fs.existsSync( config_path ) ) {
            this._config = require( config_path );
        }
        if( fs.pathExistsSync( root_dir ) ) {

            if( fs.pathExistsSync( path.join( root_dir, this._config.templateDir ) ) 
                && fs.pathExistsSync( path.join( root_dir, this._config.partialDir )) ) {

                    const templates_ = path.join( root_dir, this._config.templateDir )
                    const partials_ = path.join( root_dir, this._config.partialDir );

                    fs.readdirSync( templates_ ).forEach( _template => {
                        return this.templates.push( new Template( this, _template.split( '.html')[0], path.join( templates_, _template ) ) );
                    } );

                     fs.readdirSync( partials_ ).forEach( _partial => {
                         return this.partials.push( new Partial(  this, _partial.split( '.html')[0], path.join(partials_, _partial ) ) ) 
                     } );
                }
                else {
                    throw new Error( 'Directory not configured' );
                }

        }
    }

    getTemplates() {
        return this.templates;
    }

    getPartials() {
        return this.partials;
    }

    toObject() {
        return {
            config: this._config,
            templates: this.templates,
            partials: this.partials
        }
    }

    getTemplate( name, ...content ) {
        const target = this.templates.filter( _ => _.name === name )[0];
        if( !target.parsed ) {
            target.parse( content );
            return target.parsed;
        }
        else {
            throw new Error( 'Template Failed to Parse' );
        }
        
    }

}