
### simple notes program

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
    puts
    # add new note
    number_of_notes =+ 1
    @notes << @note_array
  end

  # delete method to be added

end

# initialize variables
choice = ""
number_of_notes = 0
notes = []
notes << ["Test", "here is my note text", "test status"]


# main program

note_list = NoteList.new
puts
puts "Simple Note App"
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
    puts
    notes.each_with_index do |note, index|
      puts "Note " + (index + 1).to_s
      puts "Title: " + note[0]
      puts "Text: " + note[1]
      puts "Text: " + note[2]
      puts
    end

  when 'a'
    notes = note_list.add (notes)
  end
end

