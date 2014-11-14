
// initialize variables

var chioce = "";
var numberOfNotes = 0;
var notes = [];
var notes = [["Title1", "This is the note text.", "Status1"],["Title2", "This is the note text 2.", "Status 2"] ]

console.log("end of init")

// functions
var listAllNotes = function (notes) {
  console.log("test funct");
  for (index = 0; index < notes.length; ++index) {
    console.log("title: " + notes[index][0]);
    $( "#textNoteList" ).append( "<span>Title: " + notes[index][0] + "</span>" );
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
