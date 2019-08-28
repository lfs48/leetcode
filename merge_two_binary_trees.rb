def merge_trees(t1, t2)
    return if (t1 == nil && t2 == nil)
    if t1 != nil && t2 != nil
        sum = t1.val + t2.val
        left = merge_trees(t1.left, t2.left)
        right = merge_trees(t1.right, t2.right)
    elsif t1 != nil && t2 == nil
        sum = t1.val
        left = merge_trees(t1.left, nil)
        right = merge_trees(t1.right, nil)
    elsif t1 == nil && t2 != nil
        sum = t2.val
        left = merge_trees(nil, t2.left)
        right = merge_trees(nil, t2.right)
    else
        sum = nil
        left = nil
        right = nil
    end
    
    head = TreeNode.new(sum)
    head.left = left
    head.right = right
    return head
end