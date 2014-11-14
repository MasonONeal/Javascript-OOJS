
// initialize variables

var chioce = "";
var numberOfNotes = 0;
var notes = [];
var notes = [["Home Life", "This is the note text.", "Home"],["Projext X", "This is the note text 2.", "Work"] ]

console.log("end of init")

// functions
var listAllNotes = function (notes) {
  console.log("test funct");
  for (index = 0; index < notes.length; ++index) {
    console.log("title: " + notes[index][0]);
    $( "#textNoteList" ).append( "Note " + (index + 1) + ":" );
    $( "#textNoteList" ).append( "<span>Title: " + notes[index][0] + "</span>" );
    $( "#textNoteList" ).append( "<span>" + notes[index][1] + "</span>" );
    $( "#textNoteList" ).append( "<span>Tag: " + notes[index][2] + "</span>" );
    $( "#textNoteList" ).append( "<hr />" );
  };
}

// main program

$(function() {
  $( "#listNotes" ).click(function() {
      console.log( "List notes" );
      listAllNotes(notes);
  });
  $( "#addNote" ).click(function() {
      console.log( "Add a note" );
  });
  $( "#deleteNotes" ).click(function() {
      console.log( "Delete a note" );
  });
});
