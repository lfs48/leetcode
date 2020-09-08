# Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
# Return the array in the form [x1,y1,x2,y2,...,xn,yn].

def shuffle(nums, n)
    
    result = []
    
    i = 0
    while result.length < nums.length
        result << nums[0+i]
        result << nums[n+i]
        i += 1
    end
    
    return result
    
end