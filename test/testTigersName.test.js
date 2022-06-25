/**
 * @jest-environment jsdom
 */

 const rewire = require('rewire');
 var tutorialProperties = rewire("../application/js/tutorialProperties");
 //jest.spyOn(window, 'alert').mockImplementation(() => {});
 const page = require('./tutorialPage');

 test('tests testName function', () => {
   tutorialProperties.__set__('nameFiller', "Tigers");
   expect(() => tutorialProperties.testName().toBe("Tigers"));
   //window.alert.mockClear();
 });
 
 
 