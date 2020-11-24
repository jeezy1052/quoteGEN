const allQuotes = [
  {
    source: 'Albert Einstein',
    quote: 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe',
    
  },
  {
    source: 'Friedrich Nietzsche',
    quote: 'Without music, life would be a mistake.',
    citation: 'Twilight of the Idols'
  },
  {
    source: 'Dr.Seuss',
    quote: 'I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.'
  },
  {
    source: 'William Shakespeare',
    quote: 'Love all, trust a few, do wrong to none.',
    citation: 'All\'s Well That Ends Well'
  },
  {
    source: 'Nelson Mandela',
    quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall'
  },
  {
    source: 'Walt Disney',
    quote: 'The way to get started is to quit talking and begin doing.'
  },
  {
    source: 'Steve Jobs',
    quote: 'Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking.'
  },
  {
    source: 'Eleanor Roosevelt',
    quote: 'If life were predictable it would cease to be life, and be without flavor.'
  },
  {
    source: 'Oprah Winfrey',
    quote: 'If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough'
  },
  {
    source: 'James Cameron',
    quote: 'If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success.'
  },
  {
    source: 'John Lennon',
    quote: 'Life is what happens when you\'re busy making other plans.'
  },
  {
    source: 'Franklin D. Roosevelt',
    quote: 'When you reach the end of your rope, tie a knot in it and hang on.'
  },
  {
    source: 'Benjamin Franklin',
    quote: 'Tell me and I forget. Teach me and I remember. Involve me and I learn.'
  },
  {
    source: 'Aristotle',
    quote: 'It is during our darkest moments that we must focus to see the light.'
  },
  {
    source: 'Ralph Waldo Emerson',
    quote: 'Do not go where the path may lead, go instead where there is no path and leave a trail.'
  },
  {
    source: 'Abraham Lincoln',
    quote: 'In the end, it\'s not the years in your life that count. It\'s the life in your years.'
  },
  {
    source: 'Babe Ruth',
    quote: 'Never let the fear of striking out keep you from playing the game.'
  },
  {
    source: 'Thomas A. Edison',
    quote: 'Many of life\'s failures are people who did not realize how close they were to success when they gave up.'
  },
  {
    source: 'Dr Suess',
    quote: 'You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.'
  },
  {
    source: 'Ralph Waldo Emerson',
    quote: 'Life is a succession of lessons which must be lived to be understood.'
  },
  {
    source: 'Maya Angelou',
    quote: 'You will face many defeats in life, but never let yourself be defeated.'
  },
  {
    source: 'Oscar Wilde',
    quote: '"Life is never fair, and perhaps it is a good thing for most of us that it is not.'
  },
  {
    source: 'Tony Robbins',
    quote: 'The only impossible journey is the one you never begin.'
  },
  {
    source: 'Albert Einstein',
    quote: 'Only a life lived for others is a life worthwhile.'
  },
  {
    source: 'Dalai Lama',
    quote: 'The purpose of our lives is to be happy.'
  },
  {
    source: 'Confucius',
    quote: 'Life is really simple, but we insist on making it complicated.'
  },
  {
    source: 'John Wooden',
    quote: 'Do not let making a living prevent you from making a life.'
  },
  {
    source: 'James M. Barrie',
    quote: 'Life is a long lesson in humility.'
  },
  {
    source: 'Robert Frost',
    quote: 'In three words I can sum up everything I\'ve learned about life: it goes on.'
  },
  {
    source: 'Bob Marley',
    quote: 'Love the life you live. Live the life you love.'
  },
  {
    source: 'Winston S. Churchill',
    quote: 'Success is not final; failure is not fatal: It is the courage to continue that counts.'
  },
  {
    source: 'Henry David Thoreau',
    quote: 'Success usually comes to those who are too busy to be looking for it.'
  },
  {
    source: 'Walt Disney',
    quote: 'The way to get started is to quit talking and begin doing.'
  },
  {
    source: 'Steve Jobs',
    quote: 'If you really look closely, most overnight successes took a long time.'
  },
  {
    source: 'John D. Rockefeller Jr.',
    quote: 'The secret of success is to do the common thing uncommonly well.'
  },
  {
    source: 'Thomas Jefferson',
    quote: '"I find that the harder I work, the more luck I seem to have.'
  },
  {
    source: 'Barack Obama',
    quote: 'The real test is not whether you avoid this failure, because you won\'t. It\'s whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere.'
  },
  {
    source: 'Zig Ziglar',
    quote: 'Don\'t be distracted by criticism. Remember -- the only taste of success some people get is to take a bite out of you.'
  },
  {
    source: 'Estee Lauder',
    quote: 'I never dreamed about success, I worked for it.'
  },
  {
    source: 'Conrad Hilton',
    quote: 'Success seems to be connected with action. Successful people keep moving. They make mistakes but they don\'t quit.'
  },
  {
    source: 'Franklin D. Roosevelt',
    quote: 'The only limit to our realization of tomorrow will be our doubts of today.'
  },
  {
    source: 'Herman Melville',
    quote: 'It is better to fail in originality than to succeed in imitation.'
  },
  {
    source: 'Jim Rohn',
    quote: 'Successful people do what unsuccessful people are not willing to do. Don\'t wish it were easier; wish you were better.'
  },
  {
    source: 'Colin R. Davis',
    quote: 'The road to success and the road to failure are almost exactly the same.'
  },
  {
    source: 'Thomas Edison',
    quote: 'I failed my way to success.'
  },
  {
    source: 'David Brinkley',
    quote: 'A successful man is one who can lay a firm foundation with the bricks others have thrown at him.'
  },
  {
    source: 'John D. Rockefeller',
    quote: 'Don\'t be afraid to give up the good to go for the great.'
  },
  {
    source: 'Abraham Lincoln',
    quote: 'Always bear in mind that your own resolution to success is more important than any other one thing.'
  },
  {
    source: 'Winston Churchill',
    quote: 'Success is walking from failure to failure with no loss of enthusiasm.'
  },
  {
    source: 'Thomas J. Watson',
    quote: 'If you want to achieve excellence, you can get there today. As of this second, quit doing less-than-excellent work.'
  },
  
]