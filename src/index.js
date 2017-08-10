const {
  div,
  h1,
  a,
  p,
  input,
  button,
  nav,
  h4,
  h3,
  img,
  span,
  th,
  td,
  table,
  tr,
  tbody,
  thead
} = require('elementx');

var BasketballReferenceScraper = require('./scraper.js')

const card = div(
  h4({ class: 'cardHead' }, 'Sample'),
  img({ src: `N/A` }),
  table(
    { class: 'playerTable' },
    thead(
      { class: 'tableHead' },
      tr(
        { class: 'tableRow' },
        th({ class: 'tableHead' }),
        th({ class: 'tableHead' }, 'Career'),
        th({ class: 'tableHead' }, '16/17')
      )
    ),
    tbody(
      { class: 'tableBody' },
      tr(
        { class: 'tableRow' },
        td({ class: 'td' }, 'Games'),
        td({ class: 'td' }, '800'),
        td({ class: 'td' }, '82')
      ),
      tr(
        { class: 'tableRow' },
        td({ class: 'td' }, 'Points'),
        td({ class: 'td' }),
        td({ class: 'td' })
      ),
      tr(
        { class: 'tableRow' },
        td({ class: 'td' }, 'Rebounds'),
        td({ class: 'td' }),
        td({ class: 'td' })
      ),
      tr(
        { class: 'tableRow' },
        td({ class: 'td' }, 'Assists'),
        td({ class: 'td' }),
        td({ class: 'td' })
      )
    )
  )
);
//Sample Table
// const playerTable= table({class:'playerTable'},
// thead({class: 'tableHead'},
// tr({class: 'tableRow'},
// th({class:'tableHead'}),
// th({class:'tableHead'}, 'Career'),
// th({class:'tableHead'},'16/17')
//   )
//   ),
// tbody({class:'tableBody'},

// tr({class:'tableRow'},
// td({class:'td'},'Games'),
// td({class:'td'},'800'),
// td({class:'td'},'82')
//   ),
// tr({class:'tableRow'},
// td({class:'td'},'Points'),
// td({class:'td'}),
// td({class:'td'})
// ),
// tr({class:'tableRow'},
// td({class:'td'},'Rebounds'),
// td({class:'td'}),
// td({class:'td'})
// ),
// tr({class:'tableRow'},
// td({class:'td'},'Assists'),
// td({class:'td'}),
// td({class:'td'})
// ),

//   )
//   )

// <table>
//        <thead>
//          <tr>
//              <th>Name</th>
//              <th>Item Name</th>
//              <th>Item Price</th>
//          </tr>
//        </thead>

//        <tbody>
//          <tr>
//            <td>Alvin</td>
//            <td>Eclair</td>
//            <td>$0.87</td>
//          </tr>
//          <tr>
//            <td>Alan</td>
//            <td>Jellybean</td>
//            <td>$3.76</td>
//          </tr>
//          <tr>
//            <td>Jonathan</td>
//            <td>Lollipop</td>
//            <td>$7.00</td>
//          </tr>
//        </tbody>
//      </table>

const navb = div(h3({ id: 'mainHeader' }, 'Who is Better?'));
const masterDiv = div({ class: 'row', id: 'contain' });
const masterDiv2 = div({ class: 'row', id: 'contain' });
const div1 = div({ class: 'col', id: 'div1' });
var button1 = button({ class: 'button', value: 'search' }, 'Search');
var input1 = input({
  class: 'searchField',
  type: 'text',
  placeholder: 'Enter Player 1 Name'
});
const div2 = div({ class: 'col', id: 'div2' });
var button2 = button({ class: 'button', value: 'search' }, 'Search');
var input2 = input({
  class: 'searchField',
  type: 'text',
  placeholder: 'Enter Player 2 Name'
});


const div3 = div({ class: 'col', id: 'div3' });
const div4 = div({ class: 'col', id: 'div4' });
const div5 = div({ class: 'col', id: 'div5' });

$body = document.getElementsByTagName('body')[0];
$body.appendChild(navb);

div1.appendChild(input1);
div1.appendChild(button1);
div2.appendChild(card);
masterDiv.appendChild(div1);
masterDiv.appendChild(div2);

masterDiv2.appendChild(div3);
masterDiv2.appendChild(div4);
masterDiv2.appendChild(div5);

$body.appendChild(masterDiv);
$body.appendChild(masterDiv2);


//BUTTON 1
button1.addEventListener('click', event => {
  event.preventDefault();
  if (input1.value.length == 0) {
    alert('Type a Name');
  }
  if (input1.value.length > 0) {
    var obj = new BasketballReferenceScraper(input1.value);
    obj
      .scrape(
        'http://cors-bypass-proxy.axiomlogic.com/https://www.basketball-reference.com/players/'
      )
      .then(info => {
        console.log(info);
        const card = div(
          h4({ class: 'cardHead' }, `${info['name']}`),
          img({ src: `${info['photo']}` }),
          table(
            { class: 'playerTable' },
            thead(
              { class: 'tableHead' },
              tr(
                { class: 'tableRow' },
                th({ class: 'tableHead' }),
                th({ class: 'tableHead' }, 'Career'),
                th({ class: 'tableHead' }, '16/17')
              )
            ),
            tbody(
              { class: 'tableBody' },
              tr(
                { class: 'tableRow' },
                td({ class: 'td' }, 'Games'),
                td({ class: 'td' }, `${info['gamesCar']}`),
                td({ class: 'td' }, `${info['games17']}`)
              ),
              tr(
                { class: 'tableRow' },
                td({ class: 'td' }, 'Points'),
                td({ class: 'td' }, `${info['pointsCar']}`),
                td({ class: 'td' }, `${info['points17']}`)
              ),
              tr(
                { class: 'tableRow' },
                td({ class: 'td' }, 'Rebounds'),
                td({ class: 'td' }, `${info['reboundsCar']}`),
                td({ class: 'td' }, `${info['rebounds17']}`)
              ),
              tr(
                { class: 'tableRow' },
                td({ class: 'td' }, 'Assists'),
                td({ class: 'td' }, `${info['assistsCar']}`),
                td({ class: 'td' }, `${info['assists17']}`)
              )
            )
          )
        );

        div3.append(card);
        div2.appendChild(input2);
        div2.appendChild(button2);
      });
  }
});




//BUTTON2
button2.addEventListener('click', event => {
  event.preventDefault();
  if (input2.value.length == 0) {
    alert('Type a Name');
  }
  if (input2.value.length > 0) {
    var obj = new BasketballReferenceScraper(input2.value);
    obj
      .scrape(
        'http://cors-bypass-proxy.axiomlogic.com/https://www.basketball-reference.com/players/'
      )
      .then(info => {

        const card = div(
          h4({ class: 'cardHead' }, `${info['name']}`),
          img({ src: `${info['photo']}` }),
          table(
            { class: 'playerTable' },
            thead(
              { class: 'tableHead' },
              tr(
                { class: 'tableRow' },
                th({ class: 'tableHead' }),
                th({ class: 'tableHead' }, 'Career'),
                th({ class: 'tableHead' }, '16/17')
              )
            ),
            tbody(
              { class: 'tableBody' },
              tr(
                { class: 'tableRow' },
                td({ class: 'td' }, 'Games'),
                td({ class: 'td' }, `${info['gamesCar']}`),
                td({ class: 'td' }, `${info['games17']}`)
              ),
              tr(
                { class: 'tableRow' },
                td({ class: 'td' }, 'Points'),
                td({ class: 'td' }, `${info['pointsCar']}`),
                td({ class: 'td' }, `${info['points17']}`)
              ),
              tr(
                { class: 'tableRow' },
                td({ class: 'td' }, 'Rebounds'),
                td({ class: 'td' }, `${info['reboundsCar']}`),
                td({ class: 'td' }, `${info['rebounds17']}`)
              ),
              tr(
                { class: 'tableRow' },
                td({ class: 'td' }, 'Assists'),
                td({ class: 'td' }, `${info['assistsCar']}`),
                td({ class: 'td' }, `${info['assists17']}`)
              )
            )
          )
        );
        //this has the right 'info'
        // const card = div(
        //    h4({ class: 'cardHead' }, `${info['name']}`),
        //   img({ src: `${info['photo']}` }),
        //   p({ class: 'carGames' }, `Career Games: ${info['gamesCar']}`),
        //   p({ class: 'carPoints' }, `Career PPG: ${info['pointsCar']}`),
        //   p({ class: 'carRebounds' }, `Career RPG: ${info['reboundsCar']}`),
        //   p({ class: 'carAssists' }, `Career APG: ${info['assistsCar']}`),
        //   p({ class: 'carGames17' }, `16/17 Games: ${info['games17']}`),
        //   p({ class: 'carPoints17' }, `16/17 PPG: ${info['points17']}`),
        //   p({ class: 'carRebounds17' }, `16/17 RPG: ${info['rebounds17']}`),
        //   p({ class: 'carAssists17' }, `16/17 APG: ${info['assists17']}`)
        // );

        div5.append(card);

        if (div3.children[0] !== null && div5.children[0] !== null) {
        }

        // if(typeof playerArray1[2]=='string' && typeof playerArray2[2]=='string'){
        //   $h3= document.createElement("h3")
        //   var gamesMax= Math.max.apply(null,[playerArray1[1],playerArray2[1]])
        //   if(playerArray1.includes(`${gamesMax}`)){
        //     $h3.innerText = playerArray1[0] + " has played more games"
        //   }else {
        //     $h3.innerText = playerArray2[0] + " has played more games"
        //   }
        //   $h3two = document.createElement("h3")
        //   pointsMax= Math.max.apply(null,[playerArray1[2],playerArray2[2]])
        //   if(playerArray1.includes(`${pointsMax}`)){
        //     $h3two.innerText = playerArray1[0] + " has more career PPG"
        //   }else {
        //     $h3two.innerText = playerArray2[0] + " has more career PPG"
        //   }
        //   $h3three = document.createElement("h3")
        //   reboundsMax = Math.max.apply(null,[playerArray1[3],playerArray2[3]])
        //     if(playerArray1.includes(`${reboundsMax}`)){
        //     $h3three.innerText = playerArray1[0] + " has more career RPG"
        //   }else {
        //     $h3three.innerText = playerArray2[0] + " has more career RPG"
        //   }
        //   $h3four = document.createElement("h3")
        //   assistsMax =  Math.max.apply(null,[playerArray1[4],playerArray2[4]])
        //       if(playerArray1.includes(`${assistsMax}`)){
        //     $h3four.innerText = playerArray1[0] + " has more career APG"
        //   }else {
        //     $h3four.innerText = playerArray2[0] + " has more career APG"
        //   }
        //   $body.appendChild($h3)
        //   $body.appendChild($h3two)
        //   $body.appendChild($h3three)
        //   $body.appendChild($h3four)
        // }
      });
  }
});



// class BasketballReferenceScraper {
//   constructor(input) {
//     this.input = input;
//   }
//   scrape(url) {
//     var firstLetterLast = this.input.split(' ')[1][0].toLowerCase();
//     var searchName =
//       this.input.split(' ')[1].substr(0, 5).toLowerCase() +
//       this.input.split(' ')[0].substr(0, 2).toLowerCase();

//     var myInit = { headers: { origin: null } };
//     return fetch(url + firstLetterLast, myInit)
//       .then(response => response.text())
//       .then(text => {
//         let doc = domParser.parseFromString(text, 'text/html');

//         let $tbody = doc.getElementsByTagName('tbody')[0];
//         var array = [];
//         let $trs = $tbody.children;

//         for (let i = 0; i < $trs.length; i++) {
//           if ($trs[i].children[0].children[0].href == undefined) {
//             array.push($trs[i].children[0].children[0].children[0].href);
//           } else {
//             array.push($trs[i].children[0].children[0].href);
//           }
//         }

//         return array.filter(a => a.includes(searchName))[0];
//       })
//       .then(text => {
//         console.log(text);

//         return fetch(url + firstLetterLast + `/${text.substr(32)}`, myInit)
//           .then(response => response.text())
//           .then(text => {
//             return domParser.parseFromString(text, 'text/html');
//           })
//           .then(doc2 => {
//             var playerObject = {};
//             (playerObject.photo = doc2.getElementsByClassName(
//               'media-item'
//             )[0].children[0].src), (playerObject.name = doc2.getElementsByTagName(
//               'h1'
//             )[0].innerText);
//             (playerObject.games17 = doc2.getElementsByClassName(
//               'p1'
//             )[0].children[0].children[1].innerText), (playerObject.points17 = doc2.getElementsByClassName(
//               'p1'
//             )[0].children[1].children[1].innerText), (playerObject.rebounds17 = doc2.getElementsByClassName(
//               'p1'
//             )[0].children[2].children[1].innerText), (playerObject.assists17 = doc2.getElementsByClassName(
//               'p1'
//             )[0].children[3].children[1].innerText), (playerObject.gamesCar = doc2.getElementsByClassName(
//               'p1'
//             )[0].children[0].children[2].innerText), (playerObject.pointsCar = doc2.getElementsByClassName(
//               'p1'
//             )[0].children[1].children[2].innerText), (playerObject.reboundsCar = doc2.getElementsByClassName(
//               'p1'
//             )[0].children[2].children[2].innerText), (playerObject.assistsCar = doc2.getElementsByClassName(
//               'p1'
//             )[0].children[3].children[2].innerText);
//             console.log(playerObject.name);
//             return playerObject;
//           })
//           .catch(err => err);
//         // }
//       });
//   }
// }
