import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> hello</h1>
      <div class="container-fluid mt-3">
         <h2>Ajouter une personne</h2>
 
         <form>
            
            <div class="form-group">
               <label for="myEmail">Email</label>
               <input type="email" id = "myEmail" class="form-control" placeholder="Email"/>
               <label for="myname">PRENOM</label>
               <input type="nom" id="myname" class="form-control" placeholder="prenom"/>
               <label for="last name">NOM</label>
               <input type="nom" id="my last name" class="form-control" placeholder="nom"/>
               <input class="btn btn-primary" type="submit" value="Submit" />
            </div>
         </form>
          
      </div>

    </div>
  );
}

export default App;
