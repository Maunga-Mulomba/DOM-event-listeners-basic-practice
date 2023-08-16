// Your code here

window.addEventListener("DOMContentLoaded", () => {
  // Tell the user the DOM has been loaded
  alert("The DOM has been loaded");

  let redInput = document.getElementById("red-input");
  let addItemButton = document.getElementById("add-item");
  let colorInput = document.getElementById("color-select");
  let removeListenersButton = document.getElementById("remove-listeners");
  let addListenersButton = document.getElementById("add-listeners");
  let hoverDiv = document.getElementById("hover-over-me");

  // Event listener for changing the background color of red-input
  let redInputListener = (event) => {
    if (redInput.value === "red") {
      redInput.style.backgroundColor = "red";
    } else {
      redInput.style.backgroundColor = "transparent";
    }
  };

  // Event listener for adding items to the list
  let addItemListener = (event) => {
    let input = document.getElementById("list-add");
    let listItem = input.value;
    let unorderedList = document.querySelector("ul");

    if (listItem.trim() !== "") {
      let newListElement = document.createElement("li");
      newListElement.innerText = listItem;
      unorderedList.appendChild(newListElement);
      input.value = "";
    }
  };

  // Event listener for changing the section background color
  let colorInputListener = (event) => {
    let section = document.getElementById("section-3");
    let color = colorInput.value;
    section.style.backgroundColor = color;
  };

  // Event listener to remove all listeners
  let removeAllListeners = (event) => {
    redInput.removeEventListener("input", redInputListener);
    addItemButton.removeEventListener("click", addItemListener);
    colorInput.removeEventListener("input", colorInputListener);
  };

  // Event listener to add back all listeners
  let addAllListeners = (event) => {
    redInput.addEventListener("click", redInputListener);
    addItemButton.addEventListener("click", addItemListener);
    colorInput.addEventListener("input", colorInputListener);
  };

  // Event listener to hover over a div
  let hoverDivListener = (event) => {
    hoverDiv.innerText = "You now hovering over this div";
  };

  //   Event listener for space bar
  let spaceBarListener = (event) => {
    if (event.code === "Space") {
      alert("You have pressed the space bar");
    }
  };

  // Attach event listeners
  redInput.addEventListener("input", redInputListener);
  addItemButton.addEventListener("click", addItemListener);
  colorInput.addEventListener("input", colorInputListener);
  removeListenersButton.addEventListener("click", removeAllListeners);
  addListenersButton.addEventListener("click", addAllListeners);
  hoverDiv.addEventListener("mouseenter", hoverDivListener);
  hoverDiv.addEventListener("mouseleave", () => {
    hoverDiv.innerText = "";
  });

  document.addEventListener("keypress", spaceBarListener);
});
