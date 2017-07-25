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
    render(PlayersController.playersHTML(team), 'table.players')
  })

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
    render(PlayersController.playersHTML(team), 'table.players')
  })


// renderPlayer();
// deletePlayer();
});


function addToDropDown() {
  if (store.teams !== undefined){
    let teamHTML = store.teams.map(function(team) {
      return team.teamDropDown()
    }).join(" ")
    render(teamHTML, '.teams-dropdown select')
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

function createPlayer(){

}

function createTeam(){

}
