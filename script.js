// Points the download buttons at the newest installer on GitHub Releases.
// Without JavaScript (or if GitHub is unreachable) they open the Releases page, which still works.
(function () {
  var REPO = "FrancisOtieno-Hub/scotech-writer-site";
  document.getElementById("yr").textContent = new Date().getFullYear();
  fetch("https://api.github.com/repos/" + REPO + "/releases/latest", { headers: { Accept: "application/vnd.github+json" } })
    .then(function (r) { return r.ok ? r.json() : Promise.reject(); })
    .then(function (rel) {
      var a = (rel.assets || []).filter(function (x) { return /-Setup\.exe$/i.test(x.name); })[0];
      if (!a) return;
      var ver = (rel.tag_name || "").replace(/^v/, "");
      var mb = (a.size / 1048576).toFixed(1);
      ["dl-main", "dl-btn"].forEach(function (id) {
        var el = document.getElementById(id);
        el.href = a.browser_download_url;
        el.textContent = "Download for Windows" + (ver ? " (v" + ver + ")" : "");
      });
      document.getElementById("dl-meta").textContent = "Version " + ver + " · " + mb + " MB · Windows 10 or 11 · no account, no ads";
      document.getElementById("dl-info").textContent = "Version " + ver + " · " + mb + " MB · Windows 10 or 11, 64-bit";
      if (a.digest && /^sha256:/.test(a.digest)) {
        document.getElementById("sha").textContent = a.digest.slice(7);
        document.getElementById("sha-line").hidden = false;
      }
    })
    .catch(function () {});
})();
