class Pet
  attr_accessor :name, :age, :gender, :color
end

class Cat < Pet
end

class Dog < Pet

end

class Sname < Pet
  attr_accessor :length
end

snake = Snake.new

snake.name = "Sammy"

snake.length = 500
