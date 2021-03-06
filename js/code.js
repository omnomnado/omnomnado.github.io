const TABS = ['gal_tab', 'collab_tab', 'me_tab', 'shop_tab'];
const BTNS = ['gal_btn', 'collab_btn', 'me_btn', 'shop_btn'];
changeTab = new_tab => {
  TABS.forEach(tab => {
    if (document.getElementById(tab)) {
      document.getElementById(tab).style.display = 'none';
    }
  });
  document.getElementById(new_tab + '_tab').style.display = '';
  BTNS.forEach(btn => {
    if (document.getElementById(btn)) {
     document.getElementById(btn).style.fontWeight = '';
    }
  });
  document.getElementById(new_tab + '_btn').style.fontWeight = 700;
}

Array.from(document.getElementsByClassName('media_icon')).forEach(node => {
  node.addEventListener("mouseover", event => {
    event.target.src = "images/logo-ins_hover.png";
  });
});
