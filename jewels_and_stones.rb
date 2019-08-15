def num_jewels_in_stones(j, s)
    jewels = 0
    charCount = Hash.new(0)
    s.split("").each do |char|
        charCount[char] += 1
    end
    j.split("").each do |char|
        jewels += charCount[char]
    end
    return jewels
end