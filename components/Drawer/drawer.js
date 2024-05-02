const drawer = document.getElementById("drawer");
const Drawer = {
  open: function () {
    drawer.style.left = "0";
  },
  close: function () {
    drawer.style.left = "-300px";
  },
};

export default Drawer;
