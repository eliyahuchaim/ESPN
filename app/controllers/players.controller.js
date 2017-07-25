function createPlayersController() {
  return class{

    static playersHTML(team){
      if (team !== undefined){
      return team.players().map(function(player) {
        return player.playerHTML()
      }).slice(0,4).join(" ")
    }
    }
    //moved to app.js
    // static show(){
    //   debugger
    //     let id = parseInt(this.id.replace("team-", ""))
    //     let team = Team.find(id)
    //     render(PlayersController.playersHTML(team), 'table.players')
    //   }


  }
}

PlayersController = createPlayersController()
// PlayersController.show()
