import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";


//6. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.

function CreateArea(props) {
  const [note, setNote] = React.useState({title: "", content: ""});
  const [isExpanded, setIsExpanded] = React.useState(false);

  function handleInput(event){
    const {name, value} = event.target;
    
    setNote(prevVal => {
      return ({...prevVal, [name]: value});
    }) 
  }

  function handleClick(event){
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expand(){
    setIsExpanded(true);
  }
  return (
    <div>
      <form className="create-note">
        {isExpanded && <input name="title" value={note.title} placeholder="Title" onChange={handleInput}/>
        }
        <textarea onClick={expand} name="content" value={note.content} placeholder="Take a note..." rows={isExpanded ? 3 : 1} onChange={handleInput}/>
        <Zoom in={isExpanded}><Fab onClick={handleClick}><AddIcon/></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
