import React from 'react';
import './about.css';
import a1 from '../../assets/home.jpg';
import Card from '../../components/card/card.component';
import CardList from '../../components/card/cardlist.component';
const About = () => {
    return (
        <div >
      
            <h1 style={{color:"#ccd6f6",paddingTop:'2rem'}}>About Me</h1>
            <div className="about-component">
                <div className="left">
                   Hi there! I am Himanshu Dodrajka
                  <br /><br/>A passionate programmer and a developer.
                   I am a Full Stack Web Developer . My Web development stack is React.js, Redux, Express.js, Node.js, PostgreSQL ,Mongodb.
                  <br />
                  <br/>
                  Currently A 3rd year engineering student . Pursuing my B.tech in Computer Engineering from SVNIT Surat.
                  <br />
                  My goal is to Make amazing Web application which can provide the best level of quality and service to users.
                  <br />
    
                  <br />I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                  <br /> <br />

                </div>
            
                <div className="right">
                  <Card imgUrl={a1} title={""} content={"Me"}/>
                 </div> 

             </div>  
             <div className="intersets">
                 <h1 style={{color:"#ccd6f6",margin:"40px"}}>My Intersets</h1>
               <CardList/>
             </div>
           

        </div>
    )
}

export default About
