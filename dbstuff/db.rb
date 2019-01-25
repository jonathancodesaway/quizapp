require 'pg'

$conn = PG.connect(dbname: 'quizapp',
          host: 'localhost',
          user: 'quizapp',
          password: 'test'
          )

def db_use(name)
 #$conn = PG.connect dbname: name
 create_quizlist_table()
rescue PG::ConnectionBad => e
 puts "making #{name}"
 $conn.exec("create database #{name}")
 $conn = PG.connect dbname: name
 create_quizlist_table()
end
=begin
questions json
ex: {"do you like chicken?" : {"yes" : 1, "no" : 0, "maybe" : -1}}
the question is a key and the value contains another json with all answers being the keys and the values being the weights of the answers
the final result is the culmination of all the weights after all questions have been answered.
=end

def create_quizlist_table()
 #create basic quizlist table
 $conn.exec("create table if not exists quizlist(id int primary key not null, info json not null)")
 #create first quiz question table
 $conn.exec(createQuizQues(1))
 #create first quiz answer table
 $conn.exec(createQuizRes(1))
 #prepare statements, inserquiz is to insert a new quiz into quizlist. insertres is to insert new answers into quizans#{id}
 $conn.prepare('insertquiz', 'insert into quizlist (id, info) values ($1, $2)')
 $conn.prepare('insertres1', insertQuizRes(1))
 $conn.prepare('insertques1', insertQuizQues(1))
 #create the first quiz
 $conn.exec_prepared('insertquiz', [1,'{ "title" : "Which disney princess are you?", "id" : 1 }'])
 $conn.exec_prepared('insertques1', ["Do you like to fight?", '{"yes" : 1, "no" : 0 }'])
 $conn.exec_prepared('insertres1', ['{"Mulan" : [1], "Bella" : [0] }'])
 #second quiz
 $conn.exec(createQuizQues(2))
 $conn.exec(createQuizRes(2))
 $conn.prepare('insertques2', insertQuizQues(2))
 $conn.prepare('insertres2', insertQuizRes(2))
 $conn.exec_prepared('insertquiz', [2,'{ "title" : "Which of Ilanas pets are you?", "id" : 2 }'])
 $conn.exec_prepared('insertques2', ["Do you like to eat?", '{"I am a hungry boi" : 1, "On a diet" : 0 }'])
 $conn.exec_prepared('insertques2', ["Are you a doggo or a catto?", '{"yes" : 2, "no" : 0 }'])
 $conn.exec_prepared('insertres2', ['{"Dante the dog": [2,3], "Buddy the Cat" : [1], "Steve the Cat" : [0]}'])

  #third quiz
 $conn.exec(createQuizQues(3))
 $conn.exec(createQuizRes(3))
 $conn.prepare('insertques3', insertQuizQues(3))
 $conn.prepare('insertres3', insertQuizRes(3))
 $conn.exec_prepared('insertquiz', [3,'{ "title" : "Pick A Vegetable In Every Color And We will Tell You Which Dog Breed You are Most Like", "id" : 3 }'])
 $conn.exec_prepared('insertques3', ["Pick a Red Vegetable", '{"Tomato" : 4, "Pepper" : 3, "Radish" : 2 , "Rhubarb" : 1, "Radicchio" : 0}'])
 $conn.exec_prepared('insertques3', ["Pick a Purple Vegetable", '{"Cabbage" : 4, "Asparagus" : 3, "Broccoli" : 2 , "Lettuce" : 1, "Cucumber" : 0}'])
 $conn.exec_prepared('insertques3', ["Pick a Yellow Vegetable", '{"Squash" : 4, "Pepper" : 3, "Potato" : 2 , "Corn" : 1, "Yellow Beans" : 0}'])
 $conn.exec_prepared('insertques3', ["Pick a Orange Vegetable", '{"Pumpkin" : 4, "Pepper" : 3, "Carrot" : 2 , "Acorn Squash" : 1, "Sweet Potato" : 0}'])
 $conn.exec_prepared('insertques3', ["Pick a Green Vegetable", '{"Beet" : 4, "Onion" : 3, "Eggplant" : 2 , "Purple Cauliflower" : 1, "Red Cabbage" : 0}'])
 $conn.exec_prepared('insertres3', ['{"Golden Retriever": [20,19,18,17], "Doberman Pinscher": [16,15,14,13,12,11], "Border Collie" : [10,9,8,7,6], "German Shepherd" : [5,4,3,2,1,0]}'])

 #fourth quiz
 $conn.exec(createQuizQues(4))
 $conn.exec(createQuizRes(4))
 $conn.prepare('insertques4', insertQuizQues(4))
 $conn.prepare('insertres4', insertQuizRes(4))
 $conn.exec_prepared('insertquiz', [4,'{ "title" : "The Sandwich You Make Will Reveal If Youll Find Your Soulmate This Year", "id" : 4 }'])
 $conn.exec_prepared('insertques4', ["Pick a Bread", '{"Sourdough" : 4, "Rye" : 3, "Ciabatta" : 2 , "Baguette" : 1, "Brioche" : 0}'])
 $conn.exec_prepared('insertques4', ["Pick a Cheese", '{"Cheddar" : 4, "Swiss" : 3, "Mozzarella" : 2 , "Gouda" : 1, "Goat" : 0}'])
 $conn.exec_prepared('insertques4', ["Pick a Protein", '{"Chicken" : 4, "Ham" : 3, "Beef" : 2 , "Bacon" : 1, "No Thanks" : 0}'])
 $conn.exec_prepared('insertques4', ["Pick a Vegetable", '{"Tomato" : 4, "Onion" : 3, "Pickle" : 2 , "Pepper" : 1, "Lettuce" : 0}'])
 $conn.exec_prepared('insertques4', ["Do you want it grilled?", '{"Yes" : 1, "No" : 0}'])
 $conn.exec_prepared('insertres4', ['{"You will find your partner!" : [20,19,18,17], "You will die alone" : [16,15,14,13,12,11], "Not this year. But maybe next..." : [10,9,8,7,6], "You craft your own destiny. Get out there." : [5,4,3,2,1,0]}'])






end

def insertQuizRes(id)
 temp = "insert into quizres#{id} (results) values ($1)"
 puts temp
 return temp
end

def insertQuizQues(id)
 temp = "insert into quizques#{id} (question, answers) values ($1, $2)"
 puts temp
 return temp
end

def createQuizQues(id)
 temp = "create table if not exists quizques#{id}(question text, answers json)"
 puts temp
 return temp
end

def createQuizRes(id)
 puts id
 temp = "create table if not exists quizres#{id}(results json)"
 puts temp
 return temp
end

db_use("quizapp")
