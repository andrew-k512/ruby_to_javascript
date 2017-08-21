// EXERCISE 1
// apples = 14
// puts apples
//
// puts "I have #{apples} apples."

var apples = 14;
console.log(apples);
console.log("I have " + apples + " apples.");

// materials = ['wood', 'metal', 'stone']
// words = {
//   'elephant' => "The world's largest land mammal.",
//   'school' => 'A place of learning.',
//   'ice cream' => 'A delicious milk-based dessert.',
// }

var materials = ['wood', 'metal', 'stone'];
console.log(materials);
var words = {
'elephant': 'The world\'s largest land mammal.',
'school': 'A place of learning',
'ice cream': 'A delicious milk-based dessert.'
}
console.log(words);

/____________________________________

// num = 16
//   if num > 10
//     puts "#{num} is greater than 10"
//   elsif num == 10
//     puts "#{num} is exactly 10"
//   else
//     puts "#{num} must be less than 10"
//   end

var num = 16
if (num > 10) {
console.log(num + ' is greater than 10');
}
else if (num === 10) {
console.log(num + ' is exactly 10.');
}
else {
console.log(num + ' must be less than 10');
}

/____________________________________

for(i=1; i <= 10; i++){
console.log('Doing the same thing over and over.' + i);
}

/____________________________________

var base = 5;
for(num=0; num <=20; num++){
console.log(num + base);
}

// total = 0
// 100.times do |num|
//   total += num
// end
// puts total

var total = 0;
for(num=1; num <= 100; num++){
total += num }
console.log(total);

// (3..15).each do |height|
//   if height > 9
//     puts "You can get on the rollercoaster!"
//   else
//     puts "You are too short to ride this rollercoaster."
//   end
// end

for(num=3; num <=15; num++){
if (num > 9){
console.log("You can get on the rollercoaster");
}
else {
console.log("You are too short to ride this rollercoaster.");
}
}

// containers = ['purse', 'wallet', 'backback']
//   containers.each do |container|
//     puts container
//   end

var containers = ['purse', 'wallet', 'backback'];
for(i=0; i < containers.length; i++){
console.log(containers[i]);
}

// def hello_world
//   puts "Hello world!"
// end
//
// hello_world

function hello_world(){
  console.log("Hello world!")
}
hello_world()

// def add(first_num, second_num)
//   first_num + second_num
// end
//
// amount = add(5, 7)
// puts amount

function add(first_num, second_num){
  console.log(first_num + second_num)
}
add(1, 2)
