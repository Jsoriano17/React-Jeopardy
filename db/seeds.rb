# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


category_one = Category.create(name: 'Nature');
card_one = category_one.cards.create(question: 'About the size of a large house cat the red panda also goes by this name known to users of Mozilla', answer: 'FIREFOX', points: 100 )
card_one = category_one.cards.create(question: 'This South American fish can grow 9 feet long & deliver a jolting 650 volts', answer: 'AN ELECTRIC EEL', points: 200 )
card_one = category_one.cards.create(question: 'Sharks can have as many as 5 rows of these which fall out & grow back', answer: 'TEETH', points: 300 )
card_one = category_one.cards.create(question: 'These large North American snakes get their name from their habit of feeding on other snake species; long live the...', answer: 'A KING SNAKE', points: 400 )
card_one = category_one.cards.create(question: 'A type of warship or a soaring bird with a nearly 8-foot wingspan that might follow it', answer: 'A FRIGATE', points: 500 )


category_two = Category.create(name: 'Geography');
card_two = category_two.cards.create(question: 'Asia forms the entire northern border of this ocean', answer: 'THE INDIAN OCEAN', points: 100 )
card_two = category_two.cards.create(question: 'The capital of the Cayman Islands & the capital of Guyana share this name', answer: 'GEORGETOWN', points: 200 )
card_two = category_two.cards.create(question: "First settled by the French it's Canada's largest province in area", answer: 'QUEBEC', points: 300 )
card_two = category_two.cards.create(question: 'An arm of the Baltic Sea the Gulf of Bothnia separates Sweden from this country to the east', answer: 'FINLAND', points: 400 )
card_two = category_two.cards.create(question: 'This capital on the island of Java is sometimes spelled with a D at the beginning', answer: 'JAKARTA', points: 500 )


category_three = Category.create(name: 'History');
card_three = category_three.cards.create(question: 'In 2003 in Ohio an overgrown tree touched a power line causing this event that affected 50 million North Americans', answer: 'A BLACKOUT', points: 100 )
card_three = category_three.cards.create(question: "In 1945 scientists in this state witnessed the detonation of the world's first atomic bomb", answer: 'NEW MEXICO', points: 200 )
card_three = category_three.cards.create(question: 'Thomas Jefferson appointed this man his personal secretary to lead an expedition to try to find the N.W. Passage', answer: '(MERIWETHER) LEWIS', points: 300 )
card_three = category_three.cards.create(question: "Under the 1832 Treaty of Payne's Landing chiefs in this tribe agreed to removal from Florida to points west", answer: 'SEMINOLE', points: 400 )
card_three = category_three.cards.create(question: "Last name of the man who broke ground for his first powder mills on Delaware's Brandywine River on July 19 1802", answer: 'DU PONT', points: 500 )

category_four = Category.create(name: 'Science');
card_four = category_four .cards.create(question: 'In 1985 a paper documented a hole over the south polar region in this layer of the atmosphere', answer: 'THE OZONE LAYER', points: 100 )
card_four = category_four .cards.create(question: "It's the largest blood vessel in the body", answer: 'THE AORTA', points: 200 )
card_four = category_four .cards.create(question: 'Seems counterintuitive but the Earth is farthest from the sun during this month', answer: 'JULY', points: 300 )
card_four = category_four .cards.create(question: "Of DNA's 8 bases this one was first discovered in animal dung hence its name", answer: 'GUANINE', points: 400 )
card_four = category_four .cards.create(question: 'Iron is Fe not Ir which belongs to this metallic element impervious to almost all acids', answer: 'IRIDIUM', points: 500 )

category_five = Category.create(name: 'Entertainment');
card_five = category_five.cards.create(question: "This song AKA Aladdin's Theme was a No. 1 hit", answer: 'A WHOLE NEW WORLD', points: 100 )
card_five = category_five.cards.create(question: 'What could go wrong at a park with genetically engineered hybrid dinosaurs? Everything says this 2015 film', answer: 'JURASSIC WORLD', points: 200 )
card_five = category_five.cards.create(question: 'It just takes some time but everything will be just fine if you name this emo band that sang The Middle', answer: 'JIMMY EAT WORLD', points: 300 )
card_five = category_five.cards.create(question: 'This anthology of athleticism ran on ABC from 1961 to 1998', answer: 'THE WIDE WORLD OF SPORTS', points: 400 )
card_five = category_five.cards.create(question: 'Kate Beckinsale plays a vampire warrioress named Selene in this epic saga', answer: 'UNDERWORLD', points: 500 )

puts 'seeded'