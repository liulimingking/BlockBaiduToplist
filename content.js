const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
let mo = new MutationObserver(function () {
    Array.from(document.querySelectorAll('div.opr-toplist1-table_544Ty'), item => { 
        item.style.display = "none"; 
    });
    Array.from(document.querySelectorAll('ul.s-news-rank-content'), item => { 
      item.style.display = "none"; 
  });
});
mo.observe(document.getElementById("wrapper"), { attributes: true, subtree: true, childList: true });
  
