def construct_maximum_binary_tree(nums)
    return nil if nums.length < 1
    maxIdx = max_index(nums)
    root = TreeNode.new(nums[maxIdx])
    left = nums[0...maxIdx]
    right = nums[maxIdx+1..-1]
    root.left = construct_maximum_binary_tree(left)
    root.right = construct_maximum_binary_tree(right)
    return root
end

def max_index(nums)
    maxIdx = 0
    nums.each_with_index do |num, i|
        maxIdx = i if nums[i] > nums[maxIdx]
    end
    return maxIdx
end