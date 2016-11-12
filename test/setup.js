'use strict';

global.chai = require('chai');
global.expect = global.chai.expect;
global.chai.use(require('chai-http'));
global.should = global.chai.should();
global.sinon = require('sinon');
