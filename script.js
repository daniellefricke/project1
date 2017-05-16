/*
Set these up as an array object with 2 keys (question & answer).
Envoke a function that takes the input and evaluates it aganst the answer
Add points when player is correct
Prompt a total after 10 questions
*/
$(document).ready(function () {

  var clickCounter = 0

  let questions = [
    {que: 'Kennedy and Taft are the only two presidents buried at Arlington National Cemetary', answer: 'true', backup: 'This is true!'},
    {que: 'The Liberty Rose is the official flower of DC', answer: 'false', backup: 'This is false. The official flower is the American Beauty Rose'},
    {que: 'Georgetown was incorporated into DC in 1871', answer: 'true', backup: 'This is true!'},
    {que: 'DCs pro football team is the Redskins', answer: 'true', backup: 'This is true!'},
    {que: 'Thomas Jefferson was the first president to live in the White House', answer: 'false', backup: 'This is false. John Adams was the first president to live in the White House'},
    {que: 'DCs landmass is 100 square miles', answer: 'true', backup: 'This is true!'},
    {que: 'The official tree of DC is the Scarlett Oak', answer: 'true', backup: 'This is true!'},
    {que: 'The official motto of DC is Ab Ordine Libertas - from order comes freedom', answer: 'false', backup: 'This is false! The official DC motto is Justitia Omnibus'},
    {que: 'Before being called The District of Columbia, DC was called Federal City', answer: 'true', backup: 'This is true!'},
    {que: 'The official bird of DC is the Bald Eagle', answer:'false', backup: 'This is false. The official bird is the Wood Thrush'}
  ]

  var output = questions[clickCounter].que;
  var currentQuestion = [];
  $(".appfield .qwindow").text(output)
  console.log(output)
  console.log(questions[0].backup)
  $(".appfield .go").click(function() {
      clickCounter++
      output = questions[clickCounter].que;
      $(".appfield .qwindow").text(output)
      console.log(output)
      console.log(questions[clickCounter].backup)
      })

//evaluat answer and award points
  var userAnswer = $("appfield .input").text();
  var balance = $("appfield .points").val();
  var currentAnswer = questions[clickCounter].answer;
  $(".appfield .go").click(function() {

      if (userAnswer == "true" && currentAnswer == "true" || userAnswer == "false" && currentAnswer == "false"){
        var givePoints = balance + 10;
        prompt: "You are correct!"
      } else {
        prompt: questions[clickCounter].backup
      }
  })
})




//function to add, maintain, and display score
//prompt after 10 questions with score & response
