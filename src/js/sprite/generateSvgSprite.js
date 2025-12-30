import { globSync } from "glob";
import fs from "fs";
import { parse } from "node-html-parser";
import path from "path";

const svgFiles = globSync("src/images/icons/sprite.svg");

svgFiles.forEach((file) => {
  const code = fs.readFileSync(file, "utf8");
  const svgElement = parse(code).querySelector("svg");
  const symbolElement = parse("<symbol/>").querySelector("symbol");
  const fileName = path.basename(file, ".svg");

  svgElement.childNodes.forEach((child) => symbolElement.appendChild(child));

  symbolElement.setAttribute("id", fileName);

  if (svgElement.attributes.viewBox) {
    symbolElement.setAttribute("viewBox", svgElement.attributes.viewBox.value);
  }
});
