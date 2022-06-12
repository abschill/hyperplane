#!/usr/bin/env node
import { __DEFAULTS__ } from '../../util';
import { useConfig } from '../../config';
import { ConfigStringType } from '../../types';
/**
 * @function findConfig
 * @description command line interface for ssg templates
 * @example
 * ```npx html-chunk-loader find-config```
*/
export const findConfigCLI = (mode: ConfigStringType) => {
	const config = useConfig(mode);
	console.log('\x1b[32mhtml-chunk-loader config found\x1b[0m:\n');
	console.log(config);
};
