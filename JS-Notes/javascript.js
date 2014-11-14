
// initialize variables

var chioce = "";
var numberOfNotes = 0;
var notes = [];
var notes = ["Title1", "This is the note text.", "Status1"]

console.log("end of init")

// functions
var listAllNotes = function () {
  console.log("test funct");
  $( "#textNoteList" ).append( "<p>Test</p>" );
}

// main program

$(function() {
  $( "#listNotes" ).click(function() {
      console.log( "List notes" );
      listAllNotes();
  });
  $( "#addNote" ).click(function() {
      console.log( "Add a note" );
  });
  $( "#deleteNotes" ).click(function() {
      console.log( "Delete a note" );
  });
});
