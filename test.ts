import { checkTemplate } from "./";

checkTemplate(
  "test/polygerrit/gr-change-list-view.html",
  "test/polygerrit/gr-change-list-view.js",
  "foo.bar.gr-change-list-view",
  [
    {
      path: "custom-externs.js",
      src: "/** @externs */ var page; var Gerrit;"
    }
  ]
)
  .then(() => {
    console.log("test pass!");
  })
  .catch(e => {
    console.log("ERRORS", e);
  });
