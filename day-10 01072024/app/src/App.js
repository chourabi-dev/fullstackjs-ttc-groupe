
import Contact from './componenets/contact';


function App() {


  // Api 
  // data
  const data = [
    { fullname:'chourabi taher 1', email:'tchourabi@gmail' , address:'Tunisia,Tunis', old:false },
    { fullname:'chourabi taher 2', email:'tchourabi@gmail' , address:'Tunisia,Tunis', old:true },
    { fullname:'chourabi taher 3', email:'tchourabi@gmail' , address:'Tunisia,Tunis', old:false },
    { fullname:'chourabi taher 4', email:'tchourabi@gmail' , address:'Tunisia,Tunis', old:true },
    { fullname:'chourabi taher 5', email:'tchourabi@gmail' , address:'Tunisia,Tunis', old:true },
    
  ];

  return (
    <div>

      {
        /*
        <Contact  fullname="chourabi taher" email="tchourabi@gmail.com" address="Tunisia,tunis"  />

        */
      }


      <h3>Contact List:</h3>
      {
        data.map((c)=>{
          return(
            <Contact key={c.fullname} old={c.old} fullname={ c.fullname } email={c.email} address={c.address} />
          );
        })
      }

         

    </div>
    
  );
}

export default App;



