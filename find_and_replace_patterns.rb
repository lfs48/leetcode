# @param {String[]} words
# @param {String} pattern
# @return {String[]}
def find_and_replace_pattern(words, pattern)
    symbolized_pattern = symbolize_word(pattern)
    return words.select {|word| symbolize_word(word) == symbolized_pattern}
end

def symbolize_word(word)
   symbolized = []
    counter = 1
    map = Hash.new()
    word.each_char do |char|
        if map[char]
            symbolized << map[char]
        else
            map[char] = counter
            counter += 1
            symbolized << map[char]
        end
    end
    return symbolized
end