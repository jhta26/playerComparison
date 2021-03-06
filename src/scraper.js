let domParser = new DOMParser();

class BasketballReferenceScraper{
  
  scrape(url) {

        return fetch(url)
          .then(response => response.text())
          .then(text => {
            return domParser.parseFromString(text, 'text/html');
          })
          .then(doc2 => {
            
             var playerObject = {}
            if(typeof playerObject.points17=='string'){
              playerObject = {}
            }
           
           
            ;
            (playerObject.photo = doc2.getElementsByClassName(
              'media-item'
            )[0].children[0].src), (playerObject.name = doc2.getElementsByTagName(
              'h1'
            )[0].innerText);
            (playerObject.games17 = doc2.getElementsByClassName(
              'p1'
            )[0].children[0].children[1].innerText), (playerObject.points17 = doc2.getElementsByClassName(
              'p1'
            )[0].children[1].children[1].innerText), (playerObject.rebounds17 = doc2.getElementsByClassName(
              'p1'
            )[0].children[2].children[1].innerText), (playerObject.assists17 = doc2.getElementsByClassName(
              'p1'
            )[0].children[3].children[1].innerText), (playerObject.gamesCar = doc2.getElementsByClassName(
              'p1'
            )[0].children[0].children[2].innerText), (playerObject.pointsCar = doc2.getElementsByClassName(
              'p1'
            )[0].children[1].children[2].innerText), (playerObject.reboundsCar = doc2.getElementsByClassName(
              'p1'
            )[0].children[2].children[2].innerText), (playerObject.assistsCar = doc2.getElementsByClassName(
              'p1'
            )[0].children[3].children[2].innerText);
          
            
            return playerObject;
          })
          .catch(err => err);
        
      };
  }

module.exports=BasketballReferenceScraper
