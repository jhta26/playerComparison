domParser = new DOMParser();

class BasketballReferenceScraper{
  constructor(input) {
    this.input = input;
  }
  scrape(url) {
    var firstLetterLast = this.input.split(' ')[1][0].toLowerCase();
    var searchName =
      this.input.split(' ')[1].substr(0, 5).toLowerCase() +
      this.input.split(' ')[0].substr(0, 2).toLowerCase();

    var myInit = { headers: { origin: null } };
    return fetch(url + firstLetterLast, myInit)
      .then(response => response.text())
      .then(text => {
        let doc = domParser.parseFromString(text, 'text/html');

        let $tbody = doc.getElementsByTagName('tbody')[0];
        var array = [];
        let $trs = $tbody.children;

        for (let i = 0; i < $trs.length; i++) {
          if ($trs[i].children[0].children[0].href == undefined) {
            array.push($trs[i].children[0].children[0].children[0].href);
          } else {
            array.push($trs[i].children[0].children[0].href);
          }
        }

        return array.filter(a => a.includes(searchName))[0];
      })
      .then(text => {
        
        let strPlace = text.indexOf(searchName)

        return fetch(url + firstLetterLast + `/${text.substr(strPlace)}`, myInit)
          .then(response => response.text())
          .then(text => {
            return domParser.parseFromString(text, 'text/html');
          })
          .then(doc2 => {
            console.log(doc2)
            var playerObject = {};
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
            console.log(playerObject.name);
            return playerObject;
          })
          .catch(err => err);
        // }
      });
  }
}
module.exports=BasketballReferenceScraper