const {
  div,
  p,
  input,
  button,
  h4,
  img,
  th,
  td,
  table,
  tr,
  tbody,
  thead
} = require('elementx');

var BasketballReferenceScraper = require('./scraper.js');

const masterDiv = div({ class: 'row m6 masterDiv', id: 'contain' });
const masterDiv2 = div({ class: 'row m6 masterDiv2', id: 'contain2' });
const div1 = div({ class: 'col s12 m6', id: 'div1' });
const div2 = div({ class: 'col s12 m6', id: 'div1' });
const div3 = div({ class: 'col s12 m6', id: 'div3' });
const div4 = div({ class: 'col s12 m6', id: 'div3' });
const div5 = div({ class: 'col  s12 m6', id: 'div3' });
var input1 = input({
  class: 'searchField input1and2',
  type: 'text',
  placeholder: 'Enter Player 1 Name'
});
var input2 = input({
  class: 'searchField input1and2',
  type: 'text',
  placeholder: 'Enter Player 2 Name'
});


masterDiv2.appendChild(div3);
masterDiv2.appendChild(div4);
masterDiv2.appendChild(div5);

const divButton = div({ class: 'col  s12 m6', id: 'div1' });
const divButtonButton = button(
  { class: 'button', value: 'compare', id: 'divActualButton' },
  'Click Here to Compare'
);

$body = document.getElementsByTagName('body')[0];

div1.appendChild(input1);
div2.appendChild(input2);
divButton.appendChild(divButtonButton);
masterDiv.appendChild(div1);
masterDiv.appendChild(divButton);
masterDiv.appendChild(div2);

$body.appendChild(masterDiv);
$body.appendChild(masterDiv2);

var currentdiv = null;
var currentdiv2 = null;
var currentdiv3 = null;
let playerArray1 = [];
let playerArray2 = [];

divButtonButton.addEventListener('click', event => {
  event.preventDefault();
  if (input1.value.length == 0 && input2.value.length == 0) {
    alert('Type a Name');
  }
  if (input1.value.length > 0 && input2.value.length > 0) {
    var obj = new BasketballReferenceScraper();
    obj.scrape(input1.value);
    var obj2 = new BasketballReferenceScraper();

    Promise.all([
      obj.scrape(input1.value),
      obj2.scrape(input2.value)
    ]).then(info => {
      var info1 = info[0];
      var info2 = info[1];
      if (currentdiv) {
        div3.removeChild(div3.childNodes[0]);
      }
      if (currentdiv2) {
        div5.removeChild(div5.childNodes[0]);
      }

      while (playerArray1.length !== 0) {
        playerArray1.pop();
      }
      while (playerArray2.length !== 0) {
        playerArray2.pop();
      }
      console.log(info1);
      console.log(info2);
      var card1 = div(
        { class: 'playerCards col s12' },
        div(
          { class: 'headImg' },
          h4({ class: 'cardHead' }, `${info1['name']}`),
          img({ src: `${info1['photo']}` })
        ),
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
              td({ class: 'td' }, `${info1['gamesCar']}`),
              td({ class: 'td' }, `${info1['games17']}`)
            ),
            tr(
              { class: 'tableRow' },
              td({ class: 'td' }, 'Points'),
              td({ class: 'td' }, `${info1['pointsCar']}`),
              td({ class: 'td' }, `${info1['points17']}`)
            ),
            tr(
              { class: 'tableRow' },
              td({ class: 'td' }, 'Rebounds'),
              td({ class: 'td' }, `${info1['reboundsCar']}`),
              td({ class: 'td' }, `${info1['rebounds17']}`)
            ),
            tr(
              { class: 'tableRow' },
              td({ class: 'td' }, 'Assists'),
              td({ class: 'td' }, `${info1['assistsCar']}`),
              td({ class: 'td' }, `${info1['assists17']}`)
            )
          )
        )
      );
      var card2 = div(
        { class: 'playerCards col s12' },
        div(
          { class: 'headImg' },
          h4({ class: 'cardHead' }, `${info2['name']}`),
          img({ src: `${info2['photo']}` })
        ),
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
              td({ class: 'td' }, `${info2['gamesCar']}`),
              td({ class: 'td' }, `${info2['games17']}`)
            ),
            tr(
              { class: 'tableRow' },
              td({ class: 'td' }, 'Points'),
              td({ class: 'td' }, `${info2['pointsCar']}`),
              td({ class: 'td' }, `${info2['points17']}`)
            ),
            tr(
              { class: 'tableRow' },
              td({ class: 'td' }, 'Rebounds'),
              td({ class: 'td' }, `${info2['reboundsCar']}`),
              td({ class: 'td' }, `${info2['rebounds17']}`)
            ),
            tr(
              { class: 'tableRow' },
              td({ class: 'td' }, 'Assists'),
              td({ class: 'td' }, `${info2['assistsCar']}`),
              td({ class: 'td' }, `${info2['assists17']}`)
            )
          )
        )
      );

      playerArray1.push(
        `${info1['name']}`,
        `${info1['gamesCar']}`,
        `${info1['pointsCar']}`,
        `${info1['reboundsCar']}`,
        `${info1['assistsCar']}`
      );
      playerArray2.push(
        `${info2['name']}`,
        `${info2['gamesCar']}`,
        `${info2['pointsCar']}`,
        `${info2['reboundsCar']}`,
        `${info2['assistsCar']}`
      );
      for (i = 1; i < playerArray1.length; i++) {
        playerArray1[i] = parseFloat(playerArray1[i]);
      }
      for (i = 1; i < playerArray2.length; i++) {
        playerArray2[i] = parseFloat(playerArray2[i]);
      }

      currentdiv = card1;
      currentdiv2 = card2;

      console.log(playerArray1);
      div3.appendChild(card1);
      div5.appendChild(card2);

      var gameString = '';
      var pointString = '';
      var reboundString = '';
      var assistsString = '';
      if (currentdiv3) {
        div4.removeChild(div4.childNodes[0]);
      }
      if (
        typeof playerArray1[0] !== 'string' &&
        typeof playerArray2[0] !== 'string'
      ) {
        alert('Search for Two Players');
      }
      if (
        typeof playerArray1[0] == 'string' &&
        typeof playerArray2[0] == 'string'
      ) {
        Math.max.apply(null, [playerArray1[1], playerArray2[1]]) ==
        playerArray1[1]
          ? (gameString = `${playerArray1[0]} has more Career Games Played`)
          : (gameString = `${playerArray2[0]} has more Career Games Played`);
        Math.max.apply(null, [playerArray1[2], playerArray2[2]]) ==
        playerArray1[2]
          ? (pointString = `${playerArray1[0]} has more Career PPG`)
          : (pointString = `${playerArray2[0]} has more Career PPG`);
        Math.max.apply(null, [playerArray1[3], playerArray2[3]]) ==
        playerArray1[3]
          ? (reboundString = `${playerArray1[0]} has more Career RPG`)
          : (reboundString = `${playerArray2[0]} has more Career RPG`);
        Math.max.apply(null, [playerArray1[4], playerArray2[4]]) ==
        playerArray1[4]
          ? (assistsString = `${playerArray1[0]} has more Career APG`)
          : (assistsString = `${playerArray2[0]} has more Career APG`);

        const compareDiv = div(
          { class: 'playerCards' },
          p({ class: 'compareInfo' }, `${gameString}`),
          p({ class: 'compareInfo' }, `${pointString}`),
          p({ class: 'compareInfo' }, `${reboundString}`),
          p({ class: 'compareInfo' }, `${assistsString}`)
        );

        currentdiv3 = compareDiv;
        var time = setInterval(() => {
          div4.appendChild(compareDiv);
          clearInterval(time);
        }, 2000);
      }
    });
  }
});
