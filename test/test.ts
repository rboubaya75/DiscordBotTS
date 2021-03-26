
import {expect, assert} from 'chai';
import { describe } from 'mocha';
 
import {Shuffle} from "../src/Shuffle"



  describe('something slow', function() {
    this.slow(300000); // five minutes
  
    it('should take long enough for me to go make a sandwich', function() {
      // ...
    });
  });



describe("Shuffle", function() {
  it('Shuffle should randomly move array items by their index', function(){
    let team = ['Mohamed',"Rachid","Mouny",'Carina','JordanD','Tiphaine', 'JordanT','Joshua', 'Maria', 'Morjane', 'Bernard', 'Thibault','Farouk','Marwa', 'Souad','Bart', 'Maxime', 'Youcef','Adlane','Biben'];
    let result = Shuffle(team);
    assert.deepEqual(result, team);
  })
});


