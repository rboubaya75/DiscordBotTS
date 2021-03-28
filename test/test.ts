
import {assert}  from 'chai';

//import { describe } from 'mocha';
 
import {Shuffle} from "../src/Shuffle"



  describe('something slow', function() {
    this.slow(300); 
  
    it('should take long enough for me to go make a sandwich', function() {
      
    });
  });



describe("Shuffle", function() {
  it('Shuffle should shuffle the list and render randomly the half of this list  ', function(){
    let team = ['Mohamed',"Rachid","Mouny",'Carina','JordanD','Tiphaine', 'JordanT','Joshua', 'Maria', 'Morjane', 'Bernard', 'Thibault','Farouk','Marwa', 'Souad','Bart', 'Maxime', 'Youcef','Adlane','Biben'];
    let result = Shuffle(team);
    assert.deepEqual(result, team);
  })
});


