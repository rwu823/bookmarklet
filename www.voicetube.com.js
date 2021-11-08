(()=>{var o=n=>{let e=document,t=e.createElement("style");return t.textContent=n,e.head.append(t),t};var c=`.closed-captions { display: none !important; }

.video-subtitles .captions {
  display: none;
}
`;(()=>{o(c),document.querySelector(".video-subtitles")?.addEventListener("click",e=>{let t=e.target,s=t.querySelector(".captions")??t.closest(".captions");if(s){let i=s.offsetParent===null;s.style.display=i?"block":"none"}})})();})();
