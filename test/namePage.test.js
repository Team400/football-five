/**
 * @jest-environment jsdom
 */

 const rewire = require('rewire');
 var tutorialProperties = rewire("../application/js/tutorialProperties2");
 jest.spyOn(window, 'alert').mockImplementation(() => {});
 const page = require('./tutorialPage');

 test('tests testName function', () => {
    tutorialProperties.__set__("nameFiller", "Sharks");
    expect(() => tutorialProperties.testName().toBe(""));
    window.alert.mockClear();
 });
 
 
 