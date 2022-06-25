const {TextEncoder, TextDecoder} = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
const { JSDOM } = require('jsdom');

//const $ = require( "jquery" )( window );
var $ = require('jquery');

//const properties = require('../application/js/properties');

describe("draft", function() {
  let jsdom;
  beforeAll(async function() {
    jsdom = await JSDOM.fromFile("../application/draft.html", {
      resources: "usable",
      runScripts: "dangerously"
    });
    await new Promise(resolve =>
      jsdom.window.addEventListener("load", resolve)
    );
  });

  /* it('confirms the innerHTML of element with id "firsttimer"', function() {
    expect(jsdom.window.document.getElementById("firsttimer").innerHTML).toBe(
      "<u>First time user? Click here!</u>"
    );

    jsdom.window.updateMsg("The new msg!");
    expect(jsdom.window.document.getElementById("msg").innerHTML).to.equal(
      "The new msg!"
    );
  }); */

    it('simulates clicking "draftPlayer" button click', function() {
        //$('#draftPlayer').trigger('click');
        $('#draftPlayer').find('button').simulate('click');
        //properties.DraftPlayer(1);
        expect(jsdom.window.document.getElementById("numOfPlayers").innerHTML).toBe("(0/10)");
        
    });
});