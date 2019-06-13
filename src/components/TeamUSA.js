import React from "react";
import Athlete from "./Athlete";
import Carousel from 'nuka-carousel';

const athletes = [
  {
    name: "J'Den Cox",
    styleWrestling: "Freestyle",
    weight: "86kg",
    img:
      "https://content.themat.com/images/kidbio-pics/76424401.jpg"
  },
  {
    name: "Pat Smith",
    styleWrestling: "Greco-Roman",
    weight: "77kg",
    img: "https://www.teamusa.org/-/media/USA_Wrestling/Athlete-Bios/2017-Athlete-Mugs/PatSmith150x250.jpg?mh=250&mw=150&hash=60E752E9A991BD19DE32ABE3BC929C09C5A6741B"
  },
  {
    name: "Victoria Francis",
    styleWrestling: "Freestyle",
    weight: "75kg",
    img: "https://www.teamusa.org/-/media/USA_Wrestling/Athlete-Bios/2016-Athlete-Mugs/VictoriaFrancis150x250.jpg?mh=250&mw=150&hash=1A3D148FDB017E6FB8FCA773C85A2D5FE90350BB"
},
  {
    name: "Nick Gwiazdowski",
    styleWrestling: "Freestyle",
    weight: "125kg",
    img:
      "https://www.teamusa.org/-/media/USA_Wrestling/Athlete-Bios/2017-Athlete-Mugs/NickGwiazdowski150x250.jpg?mh=250&mw=150&hash=057F192D1E61544B1275D243C3F921CBA682FFD4"
  },
  {
    name: "Tamyra Mensah-Stock",
    styleWrestling: "Freestyle",
    weight: "68kg",
    img: "https://content.themat.com/images/kidbio-pics/1801129401.jpg"
  },
  {
      name:"Max Nowry, SSG US Army",
      styleWrestling: "Greco-Roman",
      weight: '55kg',
      img: "https://www.armywcap.com/application/files/6315/3789/4096/ssg-nowry---wrestling_44624084381_o-compressor.jpg"
  },
  {
      name: "Jenna Burkert",
      styleWrestling: "Freestyle",
      weight: '57kg',
      img:"https://www.teamusa.org/-/media/USA_Wrestling/Athlete-Bios/Old-Athlete-Mugs/Burkert150x250.jpg?mh=250&mw=150&hash=CE959EDC2420CBBE5F0BABF9831E72CED816FDF4"
  },
  {
    name:"John Stefanowicz, SGT USMC",
    styleWrestling: "Greco-Roman",
    weight: '82kg',
    img: "https://i.imgur.com/DW0JzKT.jpg?1"
  },
  {
      name: "Whitney Condor",
      styleWrestling: "Freestyle",
      weight: '53kg',
      img:"https://www.teamusa.org/-/media/USA_Wrestling/Athlete-Bios/2015-Athlete-Mugs/WhitneyConder150x250.jpg?mh=250&mw=150&hash=3CAFEF32A203121D8B1C84C3D20EE63F6EC0D4E7"
  },
  {
      name: "Joe Rau",
      styleWrestling:"Greco-Roman",
      weight: "87kg",
      img:"",
  },
  {
      name: "Zain Retherford",
      styleWrestling: "Freestyle",
      weight: '65kg',
      img: "https://www.teamusa.org/-/media/USA_Wrestling/Athlete-Bios/2017-Athlete-Mugs/ZainRetherford150x250.jpg?mh=250&mw=150&hash=C648DBDF59C6ECB357E3FB424679701DD8AA748C"
  },
  {
      name: "Ellis Coleman",
      styleWrestling:"Greco-Roman",
      weight: "67kg",
      img: "",

  },
  {
      name: "Pat Downey III",
      styleWrestling: "Freestyle",
      weight: '86kg',
      img:  "https://bloximages.chicago2.vip.townnews.com/globegazette.com/content/tncms/assets/v3/editorial/5/f6/5f6fb3de-6437-5088-8615-7887d6904c2d/5806a451a1236.image.jpg?resize=300%2C450"
  }
];

class TeamUSA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamUSA: athletes,
      name: "",
      styleWrestling: "",
      weight: "",
      img: "",
      renderBottomCenterControls: null
    };
  }

  changeHandler = event => {
    console.log(event.target.name);
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    const newAthlete = {
      name: this.state.name,
      styleWrestling: this.state.styleWrestling,
      weight: this.state.weight,
      img: this.state.img
    };

    this.setState({
      teamUSA: [...this.state.teamUSA, newAthlete]
    });
    athletes.push(newAthlete);
  };

  render() {
    return (
      <div className="mainContainer">
        <img id="teamUSALogo" alt="Team USA Logo" src="https://www.teamusa.org/-/media/IT/2017_Social-Avatars_5_ORG.png?bc=ffffff&h=90&la=en&mh=90&mw=90&w=90&hash=450D579DEF433307DFE3973096679623F450521F"></img>
        <h1 id="mainTitle">2019 Wrestling</h1>
        <div className="athlete-list">
        <Carousel
        renderBottomCenterControls={this.state.renderBottomCenterControls}
        >
        {this.state.teamUSA.map((teamUSA, index) => {
            return <Athlete athlete={teamUSA} key={index} />;
          })}
      </Carousel>
      </div>
      </div>
    );
  }
}

export default TeamUSA;