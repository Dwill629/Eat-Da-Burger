$(".devour-btn").click(function (e) {
  e.preventDefault();

  const id = $(this).attr("data-id");

  $.ajax(
    {
      url: `/api/burgers/${id}`,
      method: "PUT",
      data: { devoured: 1 }
    })
    .then(response => location.reload());
});