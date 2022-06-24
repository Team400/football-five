/**
 * @jest-environment jsdom
 */

 const rewire = require('rewire');
 var tutorialProperties = rewire("../application/js/tutorialProperties");
 jest.spyOn(window, 'alert').mockImplementation(() => {});
 const page = require('./tutorialPage');

 test('tests testName function', () => {
    expect(() => tutorialProperties.testName().toBe(""));
    window.alert.mockClear();
 });
 
 
 