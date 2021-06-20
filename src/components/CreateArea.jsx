import React from "react";


//6. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.

function CreateArea(props) {
  const [note, setNote] = React.useState({title: "", content: ""});

  function handleInput(event){
    const {name, value} = event.target;
    
    setNote(prevVal => {
      return ({...prevVal, [name]: value});
    }) 
  }

  function handleClick(event){
    event.preventDefault();
    props.onAdd(note);
  }

  return (
    <div>
      <form>
        <input name="title" value={note.title} placeholder="Title" onChange={handleInput}/>
        <textarea name="content" value={note.content} placeholder="Take a note..." rows="3" onChange={handleInput}/>
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
