def unique_occurrences(arr)
    result = true
    occ = Hash.new(0)
    arr.each {|el| occ[el] += 1}
    values = occ.values
    values.each {|el| result = false if values.count(el) > 1}
    return result
end