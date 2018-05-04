#!/usr/bin/env node

'use strict';

const fs = require('fs');

if (fs.existsSync('npm-shrinkwrap.json')) {
	console.warn('npm-shrinkwrap.json exists');
	process.exit(1);
} else {
	process.exit(0);
}
