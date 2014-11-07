
### simple notes program

# classes

class NoteList

  def add (notes)
    @notes = notes

    puts "Enter Note Title:"
    title = gets.chomp

    puts "Enter Note Text:"
    text = gets.chomp

    puts "Enter Note Title:"
    status = gets.chomp

    note_array = []
    note_array << title << text << status
    puts @note_array.inspect
    puts "---"
    # for debugging
    puts "inside"
    puts @notes.inspect

    # add new note
    notes  << ["Test2", "2 here is my note text", "test status 2"]
  end

end

#
puts "start initialize"

# initialize variables
choice = ""

number_of_notes = 0
notes = []
notes << ["Test", "here is my note text", "test status"]

note_list = NoteList.new

puts "notes array"
puts notes

a = gets.chomp


# test

puts notes.inspect
puts "step 1 before"
a = gets.chomp

note_list.add (notes)
puts "step 2 after"
b = gets.chomp

puts notes.inspect

# start display

puts
puts "Note Taker"
puts
puts "Menu:"