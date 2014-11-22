
// initialize variables

var chioce = "";
// var numberOfNotes = 2;  not needed yet, using length method on array
var notes = [];
var notes = [["Home Life", "This is the note text.", "Home"],["Projext X", "This is the note text 2.", "Work"] ]

console.log("end of init")

// functions
var listAllNotes = function (notes) {
  console.log("List function");
  $( "#textNoteList" ).text("");
  for (index = 0; index < notes.length; ++index) {
    console.log("title: " + notes[index][0]);
    $( "#textNoteList" ).append( "Note " + (index + 1) + ":" );
    $( "#textNoteList" ).append( "<span>Title: " + notes[index][0] + "</span>" );
    $( "#textNoteList" ).append( "<span>" + notes[index][1] + "</span>" );
    $( "#textNoteList" ).append( "<span>Tag: " + notes[index][2] + "</span>" );
    $( "#textNoteList" ).append( "<hr />" );
  };
}

var addNote = function (notes) {
  console.log("Add Note");
}

var deleteNote = function (notes) {
  console.log("Delete Note");
}

// main program

$(function() {
  $( "#listNotes" ).click(function() {
      listAllNotes(notes);
  });
  $( "#addNote" ).click(function() {
      // console.log( "Add a note" );
      addNote();
  });
  $( "#deleteNotes" ).click(function() {
      deleteNote();
  });
});
