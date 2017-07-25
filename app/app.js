const store = {teams: [], players: []}

nets = new Team("nets", "brookly", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Brooklyn_Nets_newlogo.svg/1200px-Brooklyn_Nets_newlogo.svg.png" )
knicks = new Team("knicks", "NY", "http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/nyk.png" )
new Player("jeff", "ny", 30, 4000, nets)
new Player("beef", "ny", 30, 4000, nets)
new Player("reef", "ny", 30, 4000, knicks)

$(function(){

  addToDropDown()



  $('.table.players tbody').on('click', 'tr', function(event){
    // debugger
    let id = parseInt(this.id.replace("player-",""))
    let player = Player.find(id)[0]

    let x = event.pageX;
    let y = event.pageY;
      let div = document.createElement('div')
      div.append(player.name)
      $(div).append(`<a href="https://www.youtube.com/results?search_query=${player.name} top 10">Top 10 Plays</a>`)
      // $(div).append('<iframe width="560" height="315" src="https://www.youtube.com/embed/a5LMozhAeUg" frameborder="0" allowfullscreen></iframe>')
      div.style.position="fixed"
      div.style.left=x+"px";
      div.style.top=y+"px";
      div.style.border="3px solid #73AD21";
      $('body').append(div)
  })

  $('.teams-dropdown').on('change', function(event){
  //  debugger
    let teamName = event.target.value
    let team = Team.findByName(teamName)
    //let id = parseInt(this.id)
    //let team = Team.find(id)
    $(".team-image img").attr("src", team.mainTeamImage())
    // render(team.mainTeamImage(), 'team-image img')
    render(PlayersController.playersHTML(team), 'table.players tbody')
  });

  // $('body').on('click', 'table.teams tr', function(){
  //   let id = parseInt(this.id.replace("team-", ""))
  //   let team = Team.find(id)
  //   //render(TeamsController.teamHtml(team), 'table.teams')
  //   render(PlayersController.playersHTML(team), 'table.players')
  //   //PlayersController.show()
  //   })

  $('body').on('click', '.destroy-player', function() {
    let player = Player.find(parseInt(this.id))[0]
    player.destroy()
    let team = Team.find(player.teamID)
    render(PlayersController.playersHTML(team), 'table.players tbody')
  });

  $('.create-team').submit (function(input) {
    let name = $('input#team-name').val()
    let city = $('input#team-city').val()
    let image = $('input#team-image').val()
    let newTeam = new Team(name, city, image)
    addToDropDown()
    event.preventDefault()
  });

  $('.create-player').submit (function(input) {
  //debugger
    let name = $('input#player-name').val()
    let hometown = $('input#player-hometown').val()
    let age = parseInt($('input#player-age').val())
    let points = parseInt($('input#player-points').val())
    let team = $('input#player-team').val().toLowerCase()

    let foundTeam = Team.findByName(team)

    let player = new Player(name, hometown, age, points, foundTeam)
    render(PlayersController.playersHTML(foundTeam), 'table.players tbody')
    event.preventDefault()
  });

// renderPlayer();
// deletePlayer();
});


function addToDropDown() {
  if (store.teams !== undefined){
    let teamHTML = store.teams.map(function(team) {
      return team.teamDropDown()
    }).join(" ")
    render('<option disabled selected value> select a team' + teamHTML, '.teams-dropdown select')
  }
}


function render(html,into){
  $(into).empty()
  $(into).append(html)
}

// function renderPlayer() {


// function deletePlayer(){
//
//   })
// }

// function createPlayer(){
//
// }
//
// function createTeam(){
//
// }



// player3.on('mouseover', function(event){
// 	let x = event.pageX;
// 	let y = event.pageY;
// 		let div = document.createElement('div')
// 			div.append("hi")
// 			div.style.position="fixed"
// 			div.style.left=x;
// 			div.style.top=y;
// 			div.style.border="3px solid #73AD21";
// 			$('body').append(div)
// })
//
// //
