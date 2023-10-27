# revoltreaxchecker

# paste this code into your revolt console

xhr = new XMLHttpRequest()
xhr.open("GET", "https://raw.githubusercontent.com/waitthisisnt2015/revoltreaxchecker/main/script.js")
xhr.send("")
xhr.onload = function() {
  state.plugins.add({
      format: 1,
      version: "1.0",
      namespace: "waitthisisnt2015",
      id: "reaxchecker",
      entrypoint: xhr.response
  })
  window.location.reload()
};
