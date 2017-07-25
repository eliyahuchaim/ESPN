function createTeam(){

  TeamId = 0;

  return class Team{

    constructor(name, city, image){
      this.name = name;
      this.city = city;
      this.teamImage = image
      this.id = ++TeamId
      store.teams.push(this)
      TeamsController.show()
    }

    teamHtml(){
      return `<tr id=team-${this.id}>
        <td>${this.name}</td>
        <td>${this.city}</td>
      </tr>`
    }

    mainTeamImage(){
      return `${this.teamImage}`
    }


    teamDropDown(){
      return `<option id=${this.id}>${this.name}</option>`
    }

    players(){
      return store.players.filter((player) =>{
        return player.teamID === this.id
      }).sort(function(a,b){
        return b.points - a.points
      })
    }

    static find(id){
      return store.teams.filter((team) => {
        return team.id === id
      })[0]
    }

    static findByName(name){
      return store.teams.filter((team) => {
        return team.name === name
      })[0]
    }

  };



};


Team = createTeam();
