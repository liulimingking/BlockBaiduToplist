const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
let mo = new MutationObserver(function () {
    //搜索页
	Array.from(document.querySelectorAll('div.opr-toplist1-table_544Ty'), item => { 
        item.style.display = "none"; 
    });
	//首页
    Array.from(document.querySelectorAll('ul.s-hotsearch-content'), item => { 
      item.style.display = "none"; 
  });
});
mo.observe(document.getElementById("wrapper"), { attributes: true, subtree: true, childList: true });
  
