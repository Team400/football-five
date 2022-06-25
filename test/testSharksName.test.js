/**
 * @jest-environment jsdom
 */

 const rewire = require('rewire');
 var tutorialProperties = rewire("../application/js/tutorialProperties");
 jest.spyOn(window, 'alert').mockImplementation(() => {});
 const page = require('./tutorialPage');

 test('tests Name function with "Sharks"', () => {
   tutorialProperties.__set__('nameFiller', "Sharks");
   expect(() => page.window.document.getElementById("nameBuilder").innerHTML.toBe(""));
   //expect(() => tutorialProperties.testName.toThrow("alert is not a function"));
   window.alert.mockClear();
 });
 
 
 