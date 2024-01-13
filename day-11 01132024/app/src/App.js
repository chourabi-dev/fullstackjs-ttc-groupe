import Article from "./componenets/article";
import ConnectForm from "./componenets/form";
import TodoApp from "./componenets/todo_app";
import ToggleSwitch from "./componenets/toggle_switch";

function App() {


  const articles = [
    { id:1, title:"ReactJS", likes:25, content:"lorem isupm lorem isupm lorem isupm lorem isupm lorem isupm lorem isupm lorem isupm lorem isupm lorem isupm lorem isupm lorem isupm lorem isupm lorem isupm lorem isupm lorem isupm lorem isupm lorem isupm  " },
    { id:2, title:"Angular 10", likes:10, content:"lorem isupm lorem isupm lorem isupm lorem isupm lorem isupm lorem isupm lorem isupm lorem isupm lorem isupm lorem isupm lorem isupm lorem isupm lorem isupm lorem isupm lorem isupm lorem isupm lorem isupm  " },
    { id:3, title:"Vue JS", likes:10, content:"lorem isupm lorem isupm lorem isupm lorem isupm lorem isupm lorem isupm lorem isupm lorem isupm lorem isupm lorem isupm lorem isupm lorem isupm lorem isupm lorem isupm lorem isupm lorem isupm lorem isupm  " },
    
  ];





  /**   EX 1
   * <div >
      
      <div className="container mt-5">
        <h3 className="text-center">List des articles</h3>

        {
          articles.map(( a )=>{
            return ( <Article title={ a.title } content={ a.content } likes={  a.likes } key={ a.id } /> );
          })
        }


      </div>
      
    </div>
   */


    /** EX2
     *         <ToggleSwitch active ={ false } />
        <ToggleSwitch active ={ false } />
        <ToggleSwitch active ={ true } />
         
     */


    /** EX 3
     * <ConnectForm />
      
     */

  return (
    <div>
        <TodoApp />
    </div>
  );
}

export default App;
