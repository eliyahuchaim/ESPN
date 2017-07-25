function createTeamsController(){

  return class {

    static teamsHtml(){
      return store.teams.map(function(team) {
        return team.teamHtml()
    }).join(' ')
    }

    static show(){
      render(TeamsController.teamsHtml(), 'table.teams')
    }

  }
}


let TeamsController = createTeamsController();
