$('#submit-btn').click(function(){
  event.preventDefault();
  console.log(1);
  var city = $('#city-type').val().toLowerCase();
  console.log(2);
  if (city === 'nyc' || city === 'ny' || city === 'new york city') {
    console.log(3);
  $('body').css('background-image', 'url(images/nyc.jpg)')
  console.log(4)}
});

$('#submit-btn').click(function(){
  event.preventDefault();
  var city = $('#city-type').val().toLowerCase();
  if (city === 'la' || city === 'LAX' || city === 'Los Angeles') {
  $('body').css('background-image', 'url(images/la.jpg)')
  }
})

$('#submit-btn').click(function(){
  event.preventDefault();
  var city = $('#city-type').val().toLowerCase();
  if (city === 'sf' || city === 'san francisco' || city === 'san fran') {
  $('body').css('background-image', 'url(images/sf.jpg)')
  }
})

$('#submit-btn').click(function(){
  event.preventDefault();
  var city = $('#city-type').val().toLowerCase();
  if (city === 'Sydney') {
  $('body').css('background-image', 'url(images/sydney.jpg)')
  }
})



//case sensitivity
