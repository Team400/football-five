/**
 * @jest-environment jsdom
 */

 const rewire = require('rewire');
 const { understandNext } = require('../application/js/tutorialProperties');
 var tutorialProperties = rewire("../application/js/tutorialProperties");
 const page = require('./tutorialPage');

 test('tests understandNext function', () => {
    expect(() => tutorialProperties.understandNext().toBe("block"));
 });
 
 
 