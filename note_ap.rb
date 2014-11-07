
### simple notes program

# classes

class NoteList

  def add (notes)
    @notes = notes

    puts "Enter Note Title:"
    title = gets.chomp
    puts "Enter Note Text:"
    text = gets.chomp
    puts "Enter Note Status:"
    status = gets.chomp

    @note_array = []
    @note_array << title << text << status
    puts @note_array.inspect

    puts "---"
    # for debugging
    puts "inside"
    puts @note_array.inspect

    # add new note
    notes << @note_array
  end

end

#
puts "start initialize"

# initialize variables
choice = ""
number_of_notes = 0
notes = []
notes << ["Test", "here is my note text", "test status"]

# main program

note_list = NoteList.new

    #pause
    puts "notes array at start:"
    puts notes
    a = gets.chomp

puts
puts "Note Taker"
puts
puts "Menu:"
puts
until choice == 'x' do
  puts "Enter <l> to List, <a> to Add an item, or <x> to Exit."
  choice = gets.chomp
  case choice
  when 'l'
    puts
    puts "Notes list:"
    puts notes.inspect
    puts
    # note_list.show
  when 'a'
    note_list.add (notes)
  end
end



# test



# note_list.add (notes)
# puts "step 2 after"
# b = gets.chomp

# puts notes.inspect

# start display
