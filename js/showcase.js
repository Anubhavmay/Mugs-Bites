// var showcases = [
//   {
//     image: "",
//     title: "",
//     description: ""
//   }];

var showcaseContainer = document.getElementById("showcase-container");

showcases.forEach(function(showcase, index) {
  var isTextImage = index % 2 === 0;
  var showcaseClass = isTextImage ? ["order-lg-1", "order-lg-2"] : ["",""];

  var showcaseHTML = `
  <div class="row no-gutters">
  <div class="col-lg-6 text-white showcase-img ${showcaseClass[1]}" style="background-image: url('${showcase.image}')"></div>
  <div class="col-lg-6 my-auto showcase-text ${showcaseClass[0]}">
    <h2>${showcase.title}</h2>
    <p class="lead mb-0">${showcase.description}</p>
  </div>
  </div>
`;

  showcaseContainer.insertAdjacentHTML("beforeend", showcaseHTML);
});
