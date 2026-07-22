import { useEffect, useRef } from "react";

const ACCENT = "#4F7C9E";
const ACCENT_LIGHT = "#7BA7C2";
const NAVY = "#1C2B3A";

declare global {
  interface Window {
    d3?: any;
    topojson?: any;
  }
}

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve();
    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(s);
  });
}

export function WorldMap() {
  const ref = useRef<HTMLDivElement>(null);
  const drawn = useRef(false);

  useEffect(() => {
    if (drawn.current) return;
    let cancelled = false;

    (async () => {
      await loadScript("https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js");
      await loadScript("https://cdnjs.cloudflare.com/ajax/libs/topojson/3.0.2/topojson.min.js");
      if (cancelled || !ref.current || drawn.current) return;
      drawn.current = true;

      const d3 = window.d3;
      const topojson = window.topojson;
      const el = ref.current;
      el.innerHTML = "";

      const targetNames = ["Poland","India","Singapore","Germany","Turkey","United Arab Emirates","Saudi Arabia","Jordan","Oman","Egypt","Nepal","Taiwan","Australia","South Korea","Italy","Switzerland","Russia","United States of America","Canada","Japan","China","Thailand"];
      const displayName: Record<string, string> = {
        "United Arab Emirates": "UAE",
        "United States of America": "USA",
      };

      const width = 900, height = 380;
      const landFill = "#EAEEF2";
      const landStroke = "#D5DEE6";
      const dubaiColor = NAVY;
      const dubaiDot = ACCENT;
      const targetFill = "#C5D2DC";
      const arrowColor = ACCENT;
      const labelColor = NAVY;
      const labelHalo = "#FFFFFF";

      const svg = d3.select(el).append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`)
        .attr("width", "100%")
        .attr("role", "img")
        .attr("aria-label", "World map with arrows from Dubai to 22 countries");

      const defs = svg.append("defs");
      defs.append("marker")
        .attr("id","arrowhead-kastor")
        .attr("viewBox","0 0 10 10")
        .attr("refX", 8).attr("refY", 5)
        .attr("markerWidth", 6).attr("markerHeight", 6)
        .attr("orient","auto-start-reverse")
        .append("path")
        .attr("d","M2 1L8 5L2 9")
        .attr("fill","none")
        .attr("stroke", arrowColor)
        .attr("stroke-width", 1.6)
        .attr("stroke-linecap","round")
        .attr("stroke-linejoin","round");

      const projection = d3.geoNaturalEarth1().scale(200).translate([width/2, height/2 + 40]);
      const path = d3.geoPath(projection);

      const mapG = svg.append("g");
      const linesG = svg.append("g");
      const dotsG = svg.append("g");
      const labelsG = svg.append("g");

      const world = await d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json");
      if (cancelled) return;
      const countries = topojson.feature(world, world.objects.countries).features
        .filter((c: any) => c.properties.name !== "Antarctica");

      mapG.selectAll("path")
        .data(countries)
        .join("path")
        .attr("d", path)
        .attr("fill", (d: any) => targetNames.includes(d.properties.name) ? targetFill : landFill)
        .attr("stroke", landStroke)
        .attr("stroke-width", 0.5);

      const dubaiXY = projection([55.27, 25.20]);

      const manualOverrides: Record<string, [number, number]> = {
        "United States of America": [-100, 40],
        "Canada": [-100, 56],
        "Russia": [60, 61],
        "Australia": [134, -25],
        "China": [104, 35],
        "India": [79, 22],
      };

      const targets = targetNames.map((name) => {
        const feat = countries.find((c: any) => c.properties.name === name);
        if (!feat) return null;
        const lonlat = manualOverrides[name] || d3.geoCentroid(feat);
        return { name, lonlat };
      }).filter(Boolean) as { name: string; lonlat: [number, number] }[];

      function curvedPath(p0: number[], p1: number[]) {
        const mx = (p0[0]+p1[0])/2, my = (p0[1]+p1[1])/2;
        const dx = p1[0]-p0[0], dy = p1[1]-p0[1];
        const dist = Math.sqrt(dx*dx+dy*dy);
        const curveAmt = Math.min(dist*0.18, 70);
        const nx = -dy/(dist||1), ny = dx/(dist||1);
        const cx = mx+nx*curveAmt, cy = my+ny*curveAmt;
        return `M${p0[0]},${p0[1]} Q${cx},${cy} ${p1[0]},${p1[1]}`;
      }

      const placed: { x: number; y: number }[] = [];
      function findFreeSpot(x: number, y: number): [number, number] {
        const cands: [number,number][] = [
          [x, y-14],[x, y+16],[x+10, y-10],[x-10, y-10],
          [x+14, y+6],[x-14, y+6],[x, y-24],[x, y+26]
        ];
        for (const [cx,cy] of cands) {
          let ok = true;
          for (const p of placed) {
            const dd = Math.sqrt((cx-p.x)**2+(cy-p.y)**2);
            if (dd<30) { ok=false; break; }
          }
          if (ok) return [cx,cy];
        }
        return [x, y-14];
      }

      const labelNudge: Record<string, [number, number]> = {
        "United Arab Emirates": [-30, 6],
        "Jordan": [-10, -4],
        "Egypt": [4, 14],
        "South Korea": [-8, -10],
        "Japan": [12, 6],
      };

      const animatables: { line: any; dot: any; label: any; length: number }[] = [];

      targets.forEach((t) => {
        const xy = projection(t.lonlat);
        if (!xy) return;
        const dx = xy[0]-dubaiXY[0], dy = xy[1]-dubaiXY[1];
        const dist = Math.sqrt(dx*dx+dy*dy) || 1;
        const endXY = [xy[0]-(dx/dist)*10, xy[1]-(dy/dist)*10];

        const line = linesG.append("path")
          .attr("d", curvedPath(dubaiXY, endXY))
          .attr("fill","none")
          .attr("stroke", arrowColor)
          .attr("stroke-width", 1)
          .attr("stroke-opacity", 0.7)
          .attr("marker-end","url(#arrowhead-kastor)");

        const lengthNode = line.node() as SVGPathElement;
        const length = lengthNode.getTotalLength();
        line
          .style("stroke-dasharray", `${length} ${length}`)
          .style("stroke-dashoffset", length)
          .style("transition", "none");

        const dot = dotsG.append("circle")
          .attr("cx", xy[0]).attr("cy", xy[1])
          .attr("r", 3)
          .attr("fill", dubaiDot)
          .attr("stroke", "#fff")
          .attr("stroke-width", 1)
          .style("opacity", 0)
          .style("transition", "opacity 300ms ease-out");

        let [lx, ly] = findFreeSpot(xy[0], xy[1]);
        if (labelNudge[t.name]) { lx += labelNudge[t.name][0]; ly += labelNudge[t.name][1]; }
        placed.push({ x: lx, y: ly });

        const label = labelsG.append("text")
          .attr("x", lx).attr("y", ly)
          .attr("text-anchor","middle")
          .attr("font-size", 11)
          .attr("font-weight", 500)
          .attr("paint-order","stroke")
          .attr("stroke", labelHalo)
          .attr("stroke-width", 3)
          .attr("fill", labelColor)
          .style("opacity", 0)
          .style("transition", "opacity 300ms ease-out")
          .text(displayName[t.name] || t.name);

        animatables.push({ line, dot, label, length });
      });

      dotsG.append("circle")
        .attr("cx", dubaiXY[0]).attr("cy", dubaiXY[1])
        .attr("r", 6)
        .attr("fill", dubaiColor)
        .attr("stroke", "#fff")
        .attr("stroke-width", 1.5);

      labelsG.append("text")
        .attr("x", dubaiXY[0]).attr("y", dubaiXY[1]-14)
        .attr("text-anchor","middle")
        .attr("font-size", 13)
        .attr("font-weight", 600)
        .attr("paint-order","stroke")
        .attr("stroke", labelHalo)
        .attr("stroke-width", 3)
        .attr("fill", dubaiColor)
        .text("Dubai");

      let started = false;
      const runAnimation = () => {
        if (started) return;
        started = true;
        animatables.forEach((a, i) => {
          const delay = i * 140;
          setTimeout(() => {
            a.line
              .style("transition", "stroke-dashoffset 900ms cubic-bezier(0.22, 1, 0.36, 1)")
              .style("stroke-dashoffset", 0);
            setTimeout(() => {
              a.dot.style("opacity", 1);
              a.label.style("opacity", 1);
            }, 700);
          }, delay);
        });
      };

      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runAnimation();
            io.disconnect();
          }
        });
      }, { threshold: 0.25 });
      io.observe(el);
    })().catch((e) => console.error("WorldMap error", e));

    return () => { cancelled = true; };
  }, []);

  return <div ref={ref} style={{ width: "100%" }} aria-label="Global distribution map" />;
}

export default WorldMap;

const _accents = { ACCENT, ACCENT_LIGHT };
void _accents;
