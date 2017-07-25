const store = {teams: [], players: []}

nets = new Team("nets", "brookly")
knicks = new Team("knicks", "NY")
new Player("jeff", "ny", 30, 4000, nets)
new Player("beef", "ny", 30, 4000, nets)
new Player("reef", "ny", 30, 4000, knicks)

$(function(){

  addToDropDown()

  $('.teams-dropdown').on('change', function(event){
  //  debugger
    let teamName = event.target.value
    let team = Team.findByName(teamName)
    //let id = parseInt(this.id)
    //let team = Team.find(id)
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
    let newTeam = new Team(name, city)
    debugger
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
