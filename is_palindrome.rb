def is_palindrome(x)
    return false if x < 0
    return true if x == 0

    digits = Math.log(x,10).floor + 1
    bound = (digits/2) + 1
    (0..bound).to_a.each do |i|
        digit_1 = (x/10**i).floor % 10
        digit_2 = (x/10 ** (digits-i-1) ).floor % 10
        return false if digit_1 != digit_2
    end
    return true
end