def two_sum(nums, target)
    numsHash = {}
    nums.each_with_index {|num, i| numsHash[num] = i}
    nums.each_with_index do |num, i|
        diff = target - num
        return [i, numsHash[diff]] if numsHash[diff] && i != numsHash[diff]
    end
end