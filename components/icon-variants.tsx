// 5 variants per subject. Used by the /icons preview page.

const W = 80;
const H = 54;
const S = 1.5;

const ink = "#0d0d0d";
const accent = "#ff5c1c";
const muted = "#9a9a9a";
const bg = "#fafafa";

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox={`0 0 ${String(W)} ${String(H)}`} width={W} height={H} xmlns="http://www.w3.org/2000/svg">
      {children}
    </svg>
  );
}

// Flat-top hexagon path centered at (40, 27), enlarged so its height matches
// the pointy-top Artanis hex (height ~36).
const flatHex = "M19 27 L29.5 9 L50.5 9 L61 27 L50.5 45 L29.5 45 Z";

// ───── ARTANIS — real vector logo (from o27gp01.svg) embedded directly ─────

const artanisPathD =
  "M2640 4920 c-16 -9 -102 -58 -190 -109 -88 -51 -173 -101 -190 -112 -16 -10 -43 -25 -60 -33 -16 -7 -96 -52 -177 -100 -80 -47 -149 -86 -153 -86 -3 0 -232 -135 -507 -300 -276 -165 -511 -300 -522 -300 -12 0 -57 -36 -101 -80 l-80 -80 0 -1078 c0 -1336 -37 -1191 364 -1428 157 -93 331 -194 386 -224 55 -31 165 -95 245 -143 79 -48 149 -87 155 -87 6 0 49 -25 95 -55 125 -80 161 -101 205 -122 22 -10 157 -90 300 -177 143 -87 276 -165 296 -172 48 -18 165 43 771 404 279 166 510 302 514 302 4 0 41 23 83 52 42 29 94 60 116 70 22 10 54 27 70 38 74 49 296 182 352 210 34 17 92 63 130 102 l68 70 5 1107 c7 1217 9 1186 -120 1263 -190 114 -659 388 -664 388 -2 0 -202 114 -443 253 -241 138 -456 262 -478 275 -22 13 -76 46 -120 74 -140 89 -278 120 -350 78z m776 -606 c311 -186 563 -348 559 -359 -4 -12 -101 -85 -216 -165 -115 -79 -384 -266 -598 -417 -424 -298 -423 -298 -527 -218 -40 30 -118 87 -174 125 -57 39 -113 80 -126 91 -13 12 -94 71 -179 130 -86 60 -244 171 -350 246 -107 75 -220 152 -250 170 -63 38 -71 73 -20 90 19 7 49 21 65 32 90 62 842 500 1050 612 108 58 100 61 766 -337z m-1824 -839 c152 -201 284 -374 293 -385 262 -327 305 -417 227 -485 -65 -56 -533 -405 -544 -405 -5 0 -57 -38 -117 -85 -59 -47 -147 -114 -194 -149 -100 -73 -157 -117 -239 -183 -121 -97 -118 -117 -118 903 l0 927 49 46 c50 47 302 179 344 180 12 1 147 -163 299 -364z m2831 257 c139 -71 155 -86 167 -150 17 -89 -11 -1822 -29 -1822 -8 0 -60 34 -117 75 -56 41 -193 138 -304 215 -111 77 -284 202 -386 277 -101 75 -230 167 -286 204 -204 137 -200 150 241 681 55 67 173 220 260 339 88 120 175 233 195 253 40 40 40 40 259 -72z m-2348 -427 c30 -19 60 -39 65 -45 6 -5 51 -37 100 -70 50 -33 95 -65 100 -71 6 -7 52 -40 104 -76 129 -88 130 -92 22 -172 -120 -88 -106 -91 -197 44 -43 63 -83 120 -89 125 -5 6 -35 46 -65 90 -30 44 -86 116 -124 160 -83 94 -91 128 -21 82 28 -17 75 -48 105 -67z m1466 40 c-30 -52 -322 -437 -465 -615 -33 -40 -127 -165 -166 -219 -22 -31 -62 -83 -89 -117 -109 -133 -866 -1128 -965 -1268 -59 -83 -38 -89 -321 79 -135 80 -288 168 -340 195 -210 110 -210 110 264 450 53 38 429 322 549 415 153 118 754 561 943 695 116 83 241 173 278 200 76 57 105 77 231 160 106 70 108 71 81 25z m-272 -920 c45 -30 279 -203 521 -383 242 -180 496 -369 564 -420 68 -51 122 -101 119 -112 -6 -22 -331 -224 -473 -294 -49 -24 -129 -71 -177 -103 -73 -49 -90 -54 -113 -31 -14 16 -207 256 -429 534 l-404 505 133 180 c150 201 147 200 259 124z m-162 -915 c341 -424 439 -551 430 -558 -13 -12 -595 -361 -685 -411 -98 -55 -88 -57 -302 68 -66 38 -138 79 -160 89 -105 52 -398 234 -404 252 -5 17 77 131 240 330 13 17 73 93 134 170 60 77 119 151 130 164 11 14 47 62 80 107 33 44 87 113 119 152 l59 72 67 -78 c37 -42 168 -203 292 -357z";

function ArtanisLogo({ fillColor = ink }: { fillColor?: string }) {
  return (
    <g transform="translate(13.2 0) scale(0.207)">
      <g transform="translate(0 261) scale(0.05 -0.05)" fill={fillColor} stroke="none">
        <path d={artanisPathD} />
      </g>
    </g>
  );
}

const artanis_a = () => (
  <Frame>
    <ArtanisLogo />
  </Frame>
);

const artanis_b = () => (
  <Frame>
    <ArtanisLogo fillColor={accent} />
  </Frame>
);

const artanis_c = () => (
  <Frame>
    {/* slightly smaller */}
    <g transform="translate(16 4) scale(0.18)">
      <g transform="translate(0 261) scale(0.05 -0.05)" fill={ink} stroke="none">
        <path d={artanisPathD} />
      </g>
    </g>
  </Frame>
);

const artanis_d = () => (
  <Frame>
    {/* larger, fills more of the frame */}
    <g transform="translate(8.4 -3) scale(0.23)">
      <g transform="translate(0 261) scale(0.05 -0.05)" fill={ink} stroke="none">
        <path d={artanisPathD} />
      </g>
    </g>
  </Frame>
);

const artanis_e = () => (
  <Frame>
    <ArtanisLogo fillColor={ink} />
    <circle cx={40} cy={27} r={2} fill={accent} />
  </Frame>
);

// ───── MULTIVERSE — simple M inside hexagon ───────────────────────────────

// All 5: filled hex (one solid color) with M cut out as negative space (showing bg).
// Variations differ in fill color (ink vs accent) and M proportions.

// M paths scaled up to fit the larger hex.
const multiverse_a = () => (
  <Frame>
    <path d={flatHex} fill={ink} stroke="none" />
    <path d="M29 38 L29 16 L40 31 L51 16 L51 38" stroke={bg} strokeWidth={S * 2.8} fill="none" strokeLinejoin="miter" />
  </Frame>
);

const multiverse_b = () => (
  <Frame>
    <path d={flatHex} fill={accent} stroke="none" />
    <path d="M29 38 L29 16 L40 31 L51 16 L51 38" stroke={bg} strokeWidth={S * 2.8} fill="none" strokeLinejoin="miter" />
  </Frame>
);

const multiverse_c = () => (
  <Frame>
    <path d={flatHex} fill={ink} stroke="none" />
    <path d="M32 34 L32 20 L40 28 L48 20 L48 34" stroke={bg} strokeWidth={S * 2.2} fill="none" strokeLinejoin="miter" />
  </Frame>
);

const multiverse_d = () => (
  <Frame>
    <path d={flatHex} fill={ink} stroke="none" />
    <path d="M28 40 L28 14 L40 32 L52 14 L52 40" stroke={bg} strokeWidth={S * 3.2} fill="none" strokeLinejoin="miter" />
  </Frame>
);

const multiverse_e = () => (
  <Frame>
    <path d={flatHex} fill={accent} stroke="none" />
    <path d="M30 36 L30 18 L40 30 L50 18 L50 36" stroke={bg} strokeWidth={S * 2.4} fill="none" strokeLinejoin="miter" />
  </Frame>
);

// ───── ATLAS — real vector logo (from picsvg.com SVG), hole filled in ────

const atlasPathD =
  "M1468 1939 c-125 -19 -182 -79 -594 -619 -217 -285 -474 -619 -571 -742 -96 -124 -178 -230 -181 -236 -2 -7 130 -12 294 -12 l298 0 96 131 c54 72 198 264 322 425 124 162 258 339 297 394 82 115 85 117 123 51 60 -104 329 -501 365 -540 21 -22 32 -42 25 -43 -8 -1 -167 -1 -354 2 -333 3 -340 3 -357 -28 -10 -18 -81 -110 -159 -205 -78 -95 -142 -176 -142 -180 0 -4 425 -7 945 -7 520 0 945 4 945 9 0 6 -46 75 -103 154 -56 80 -280 408 -496 730 -412 613 -457 668 -577 705 -73 22 -98 23 -176 11z";

function AtlasLogo({ fillColor = accent, scale = 0.26 }: { fillColor?: string; scale?: number }) {
  // Fit 196x135 pt logo into 80x54 frame, centered.
  const w = 196 * scale;
  const h = 135 * scale;
  const tx = (80 - w) / 2;
  const ty = (54 - h) / 2;
  return (
    <g transform={`translate(${String(tx)} ${String(ty)}) scale(${String(scale)})`}>
      <g transform="translate(0 135) scale(0.066667 -0.066667)" fill={fillColor} stroke="none">
        <path d={atlasPathD} />
      </g>
    </g>
  );
}

const atlas_a = () => (
  <Frame>
    <AtlasLogo />
  </Frame>
);

const atlas_b = () => (
  <Frame>
    <AtlasLogo scale={0.22} />
  </Frame>
);

const atlas_c = () => (
  <Frame>
    <AtlasLogo scale={0.3} />
  </Frame>
);

const atlas_d = () => (
  <Frame>
    <AtlasLogo fillColor={ink} />
  </Frame>
);

const atlas_e = () => (
  <Frame>
    <AtlasLogo />
    <circle cx={40} cy={42} r={1.8} fill={ink} />
  </Frame>
);

// ───── WARWICK — two solid triangles forming a W ──────────────────────────

// All 5: just two triangles forming a W (no wordmark). Variations on accent treatment.

const warTri1 = "M12 10 L40 10 L26 42 Z";
const warTri2 = "M40 10 L68 10 L54 42 Z";

// a: pure black, no accent.
const warwick_a = () => (
  <Frame>
    <path d={warTri1} fill={ink} stroke="none" />
    <path d={warTri2} fill={ink} stroke="none" />
  </Frame>
);

// b: orange tips (each triangle's pointy bottom dipped in accent).
const warwick_b = () => (
  <Frame>
    <path d={warTri1} fill={ink} stroke="none" />
    <path d={warTri2} fill={ink} stroke="none" />
    <path d="M21 30 L31 30 L26 42 Z" fill={accent} stroke="none" />
    <path d="M49 30 L59 30 L54 42 Z" fill={accent} stroke="none" />
  </Frame>
);

// c: one black triangle + one orange triangle.
const warwick_c = () => (
  <Frame>
    <path d={warTri1} fill={ink} stroke="none" />
    <path d={warTri2} fill={accent} stroke="none" />
  </Frame>
);

// d: black triangles with a thin orange line between them (in the W valley).
const warwick_d = () => (
  <Frame>
    <path d={warTri1} fill={ink} stroke="none" />
    <path d={warTri2} fill={ink} stroke="none" />
    <line x1={40} y1={12} x2={40} y2={40} stroke={accent} strokeWidth={S * 1.2} strokeLinecap="round" />
  </Frame>
);

// e: orange triangles with black accent tips.
const warwick_e = () => (
  <Frame>
    <path d={warTri1} fill={accent} stroke="none" />
    <path d={warTri2} fill={accent} stroke="none" />
    <path d="M21 30 L31 30 L26 42 Z" fill={ink} stroke="none" />
    <path d="M49 30 L59 30 L54 42 Z" fill={ink} stroke="none" />
  </Frame>
);

// ───── WORKBENCH — kept (workbench.e is perfect) ──────────────────────────

const workbench_a = () => (
  <Frame>
    <rect x={26} y={12} width={28} height={28} rx={3} fill="none" stroke={ink} strokeWidth={S} />
    <path
      d="M32 26 l5 5 11 -12"
      stroke={accent}
      strokeWidth={S * 1.4}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Frame>
);
const workbench_b = () => (
  <Frame>
    <rect x={10} y={20} width={14} height={14} rx={2} fill="none" stroke={ink} strokeWidth={S} />
    <path d="M24 27 H32" stroke={muted} strokeWidth={S} strokeLinecap="round" />
    <rect x={33} y={16} width={14} height={22} rx={2} fill={accent} />
    <path d="M47 27 H56" stroke={muted} strokeWidth={S} strokeLinecap="round" />
    <rect x={56} y={20} width={14} height={14} rx={2} fill="none" stroke={ink} strokeWidth={S} />
  </Frame>
);
const workbench_c = () => (
  <Frame>
    <line x1={16} y1={18} x2={44} y2={18} stroke={ink} strokeWidth={S * 1.5} strokeLinecap="round" />
    <line x1={24} y1={27} x2={52} y2={27} stroke={accent} strokeWidth={S * 1.5} strokeLinecap="round" />
    <line x1={20} y1={36} x2={40} y2={36} stroke={ink} strokeWidth={S * 1.5} strokeLinecap="round" />
  </Frame>
);
const workbench_d = () => (
  <Frame>
    <rect x={20} y={14} width={40} height={26} fill="none" stroke={ink} strokeWidth={S} />
    <line x1={30} y1={14} x2={30} y2={40} stroke={ink} strokeWidth={S * 0.7} />
    <line x1={40} y1={14} x2={40} y2={40} stroke={ink} strokeWidth={S * 0.7} />
    <line x1={50} y1={14} x2={50} y2={40} stroke={ink} strokeWidth={S * 0.7} />
    <line x1={20} y1={22} x2={60} y2={22} stroke={ink} strokeWidth={S * 0.7} />
    <line x1={20} y1={32} x2={60} y2={32} stroke={ink} strokeWidth={S * 0.7} />
    <rect x={30} y={22} width={10} height={10} fill={accent} />
  </Frame>
);
const workbench_e = () => (
  <Frame>
    <rect x={20} y={14} width={40} height={26} rx={2} fill="none" stroke={ink} strokeWidth={S} />
    <circle cx={26} cy={20} r={2.4} fill={accent} />
    <circle cx={26} cy={27} r={2.4} fill={ink} />
    <circle cx={26} cy={34} r={2.4} fill={accent} />
    <line x1={32} y1={20} x2={56} y2={20} stroke={ink} strokeWidth={S * 0.8} strokeLinecap="round" />
    <line x1={32} y1={27} x2={50} y2={27} stroke={ink} strokeWidth={S * 0.8} strokeLinecap="round" />
    <line x1={32} y1={34} x2={54} y2={34} stroke={ink} strokeWidth={S * 0.8} strokeLinecap="round" />
  </Frame>
);

// ───── MOT (Kesa) — kept (mot.b is perfect) ──────────────────────────────

const mot_a = () => (
  <Frame>
    <rect x={14} y={20} width={14} height={14} fill="none" stroke={ink} strokeWidth={S} />
    <rect x={33} y={14} width={14} height={14} fill="none" stroke={ink} strokeWidth={S} />
    <rect x={52} y={26} width={14} height={14} fill="none" stroke={accent} strokeWidth={S} />
  </Frame>
);
const mot_b = () => (
  <Frame>
    <rect x={14} y={18} width={12} height={10} fill="none" stroke={ink} strokeWidth={S} />
    <path d="M27 22 q 5 -3 9 -5" stroke={accent} strokeWidth={S} fill="none" strokeDasharray="2 2" />
    <rect x={38} y={11} width={10} height={8} fill="none" stroke={accent} strokeWidth={S} strokeDasharray="2 2" />
    <rect x={28} y={30} width={12} height={10} fill="none" stroke={ink} strokeWidth={S} />
    <path d="M41 34 q 5 -2 9 -4" stroke={accent} strokeWidth={S} fill="none" strokeDasharray="2 2" />
    <rect x={51} y={25} width={10} height={8} fill="none" stroke={accent} strokeWidth={S} strokeDasharray="2 2" />
  </Frame>
);
const mot_c = () => (
  <Frame>
    <rect x={18} y={20} width={16} height={14} fill="none" stroke={ink} strokeWidth={S} />
    <rect x={22} y={24} width={16} height={14} fill="none" stroke={ink} strokeWidth={S} />
    <rect x={26} y={28} width={16} height={14} fill={accent} stroke={accent} strokeWidth={S} opacity="0.85" />
  </Frame>
);
const mot_d = () => (
  <Frame>
    <rect x={14} y={14} width={52} height={26} fill="none" stroke={ink} strokeWidth={S * 0.7} strokeDasharray="2 2" />
    <rect x={18} y={18} width={12} height={10} fill="none" stroke={ink} strokeWidth={S} />
    <rect x={34} y={24} width={12} height={10} fill={accent} stroke="none" />
    <rect x={50} y={20} width={12} height={10} fill="none" stroke={ink} strokeWidth={S} />
  </Frame>
);
const mot_e = () => (
  <Frame>
    <rect x={14} y={20} width={14} height={14} fill="none" stroke={ink} strokeWidth={S} />
    <rect x={33} y={14} width={14} height={14} fill="none" stroke={ink} strokeWidth={S} />
    <rect x={52} y={26} width={14} height={14} fill="none" stroke={accent} strokeWidth={S} />
  </Frame>
);

// ───── TENSOR — kept (tensor.b is perfect) ────────────────────────────────

function tensorBox({
  x,
  y,
  hl,
  strokeColor = ink,
  fillColor = bg,
  showGrid = true,
}: {
  x: number;
  y: number;
  hl?: [number, number];
  strokeColor?: string;
  fillColor?: string;
  showGrid?: boolean;
}) {
  const wCells = 4;
  const hCells = 3;
  const cell = 6;
  const w = wCells * cell;
  const h = hCells * cell;
  const cells: React.ReactNode[] = [];
  cells.push(<rect key="bg" x={x} y={y} width={w} height={h} fill={fillColor} stroke={strokeColor} strokeWidth={S} />);
  if (hl) {
    cells.push(<rect key="hl" x={x + hl[0] * cell} y={y + hl[1] * cell} width={cell} height={cell} fill={accent} />);
  }
  if (showGrid) {
    for (let i = 1; i < wCells; i++) {
      cells.push(
        <line
          key={`v-${String(i)}`}
          x1={x + i * cell}
          y1={y}
          x2={x + i * cell}
          y2={y + h}
          stroke={strokeColor}
          strokeWidth={S * 0.7}
        />,
      );
    }
    for (let i = 1; i < hCells; i++) {
      cells.push(
        <line
          key={`h-${String(i)}`}
          x1={x}
          y1={y + i * cell}
          x2={x + w}
          y2={y + i * cell}
          stroke={strokeColor}
          strokeWidth={S * 0.7}
        />,
      );
    }
  }
  return <g>{cells}</g>;
}

const tensor_a = () => (
  <Frame>
    {tensorBox({ x: 38, y: 12 })}
    {tensorBox({ x: 31, y: 21 })}
    {tensorBox({ x: 24, y: 30, hl: [2, 1] })}
  </Frame>
);
const tensor_b = tensor_a;
const tensor_c = tensor_a;
const tensor_d = tensor_a;
const tensor_e = tensor_a;

// ───── MCTF — 2 simple cameras + clear trajectory arrow ──────────────────

// Boxy camera: small body with lens + viewfinder bump.
function boxyCamera({ cx, cy, color = ink }: { cx: number; cy: number; color?: string }) {
  return (
    <g>
      <rect x={cx - 7} y={cy - 4} width={14} height={9} rx={1} fill="none" stroke={color} strokeWidth={S} />
      <rect x={cx - 3} y={cy - 6} width={4} height={2} fill={color} />
      <circle cx={cx + 1} cy={cy + 0.5} r={2} fill={color} />
    </g>
  );
}

// Arrowhead helper at the end of a path, pointing toward (px, py) from (qx, qy)
function arrowHead({ x, y, dx, dy, color = ink }: { x: number; y: number; dx: number; dy: number; color?: string }) {
  // dx, dy is the direction
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len;
  const uy = dy / len;
  const size = 5;
  const back = 2.5;
  const ax = x - ux * size;
  const ay = y - uy * size;
  // perpendicular
  const px = -uy;
  const py = ux;
  const lx = ax + px * back;
  const ly = ay + py * back;
  const rx = ax - px * back;
  const ry = ay - py * back;
  return (
    <path
      d={`M${String(lx)} ${String(ly)} L${String(x)} ${String(y)} L${String(rx)} ${String(ry)}`}
      stroke={color}
      strokeWidth={S}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
}

// Layout principle: avoid cameras-at-top + arc-at-bottom (reads as a face).
// Trajectory goes BETWEEN the cameras or diagonally — never as a "smile".

// All 5: stickfigure at start + 2 cameras + trajectory arrow ending well.
// Variations: layout (cameras top/bottom, side/side, diagonal, etc).

function stickFigure({ cx, cy, color = ink, scale = 1 }: { cx: number; cy: number; color?: string; scale?: number }) {
  const s = scale;
  return (
    <g>
      <circle cx={cx} cy={cy - 8 * s} r={2.4 * s} fill="none" stroke={color} strokeWidth={S} />
      <line x1={cx} y1={cy - 5.6 * s} x2={cx} y2={cy + 1 * s} stroke={color} strokeWidth={S} strokeLinecap="round" />
      <line
        x1={cx}
        y1={cy + 1 * s}
        x2={cx - 3 * s}
        y2={cy + 7 * s}
        stroke={color}
        strokeWidth={S}
        strokeLinecap="round"
      />
      <line
        x1={cx}
        y1={cy + 1 * s}
        x2={cx + 3 * s}
        y2={cy + 7 * s}
        stroke={color}
        strokeWidth={S}
        strokeLinecap="round"
      />
      <line
        x1={cx}
        y1={cy - 3 * s}
        x2={cx - 4 * s}
        y2={cy - 1 * s}
        stroke={color}
        strokeWidth={S}
        strokeLinecap="round"
      />
      <line
        x1={cx}
        y1={cy - 3 * s}
        x2={cx + 4 * s}
        y2={cy - 1 * s}
        stroke={color}
        strokeWidth={S}
        strokeLinecap="round"
      />
    </g>
  );
}

// All 5: variations on the mctf.d layout (stickfigure + 2 diagonal cameras + curved trajectory).
// Focus: cleaner arrow geometry — arrowhead tangent aligned with curve tangent, no breaks.

// Attempt A: original mctf.d layout, smoother single curve.
const mctf_a = () => (
  <Frame>
    {stickFigure({ cx: 12, cy: 40 })}
    {boxyCamera({ cx: 32, cy: 14 })}
    {boxyCamera({ cx: 62, cy: 30 })}
    <path d="M18 38 Q 28 16 38 22 Q 50 28 56 30" stroke={accent} strokeWidth={S} fill="none" strokeLinecap="round" />
    {arrowHead({ x: 56, y: 30, dx: 6, dy: 2, color: accent })}
  </Frame>
);

// Attempt B: same layout, curve passes below cameras.
const mctf_b = () => (
  <Frame>
    {stickFigure({ cx: 12, cy: 38 })}
    {boxyCamera({ cx: 32, cy: 14 })}
    {boxyCamera({ cx: 62, cy: 30 })}
    <path d="M18 36 Q 32 20 38 20 Q 50 22 58 30" stroke={accent} strokeWidth={S} fill="none" strokeLinecap="round" />
    {arrowHead({ x: 58, y: 30, dx: 8, dy: 8, color: accent })}
  </Frame>
);

// Attempt C: mirror layout — camera1 upper-right, camera2 lower-middle.
const mctf_c = () => (
  <Frame>
    {stickFigure({ cx: 12, cy: 40 })}
    {boxyCamera({ cx: 48, cy: 14 })}
    {boxyCamera({ cx: 64, cy: 38 })}
    <path
      d="M18 38 Q 30 30 38 22 Q 50 16 54 22 Q 60 32 60 36"
      stroke={accent}
      strokeWidth={S}
      fill="none"
      strokeLinecap="round"
    />
    {arrowHead({ x: 60, y: 36, dx: 0, dy: 4, color: accent })}
  </Frame>
);

// Attempt D: wider spread — stickfigure far left, camera1 top-middle, camera2 far right.
const mctf_d = () => (
  <Frame>
    {stickFigure({ cx: 10, cy: 40 })}
    {boxyCamera({ cx: 36, cy: 12 })}
    {boxyCamera({ cx: 64, cy: 28 })}
    <path d="M16 38 Q 26 22 36 22 Q 52 22 60 28" stroke={accent} strokeWidth={S} fill="none" strokeLinecap="round" />
    {arrowHead({ x: 60, y: 28, dx: 8, dy: 6, color: accent })}
  </Frame>
);

// Attempt E: cameras stacked vertically on right with curving trajectory through both.
const mctf_e = () => (
  <Frame>
    {stickFigure({ cx: 12, cy: 28 })}
    {boxyCamera({ cx: 50, cy: 14 })}
    {boxyCamera({ cx: 50, cy: 42 })}
    <path d="M18 28 Q 32 14 44 22 Q 56 30 44 38" stroke={accent} strokeWidth={S} fill="none" strokeLinecap="round" />
    {arrowHead({ x: 44, y: 38, dx: -12, dy: 8, color: accent })}
  </Frame>
);

// ───── MOF — 2 objects, each with current + future box ────────────────────

// Object pair: solid current box + dashed future box + arrow between
function objectPair({
  x,
  y,
  futureDx = 14,
  futureDy = -6,
  color = ink,
  futureColor = accent,
}: {
  x: number;
  y: number;
  futureDx?: number;
  futureDy?: number;
  color?: string;
  futureColor?: string;
}) {
  const boxW = 10;
  const boxH = 8;
  return (
    <g>
      <rect x={x} y={y} width={boxW} height={boxH} fill="none" stroke={color} strokeWidth={S} />
      <rect
        x={x + futureDx}
        y={y + futureDy}
        width={boxW}
        height={boxH}
        fill="none"
        stroke={futureColor}
        strokeWidth={S}
        strokeDasharray="2 2"
      />
      <path
        d={`M${String(x + boxW + 1)} ${String(y + boxH / 2)} L${String(x + futureDx - 1)} ${String(y + futureDy + boxH / 2)}`}
        stroke={muted}
        strokeWidth={S * 0.8}
        strokeDasharray="1.5 2"
      />
    </g>
  );
}

const mof_a = () => (
  <Frame>
    {objectPair({ x: 8, y: 14 })}
    {objectPair({ x: 8, y: 34 })}
  </Frame>
);

const mof_b = () => (
  <Frame>
    {objectPair({ x: 8, y: 10 })}
    {objectPair({ x: 8, y: 32, futureDx: 14, futureDy: -4 })}
  </Frame>
);

const mof_c = () => (
  <Frame>
    {objectPair({ x: 8, y: 12, futureDx: 12, futureDy: -6 })}
    {objectPair({ x: 8, y: 34, futureDx: 12, futureDy: -8 })}
    <line x1={48} y1={6} x2={48} y2={48} stroke={muted} strokeWidth={S * 0.4} strokeDasharray="1.5 2" />
  </Frame>
);

const mof_d = () => (
  <Frame>
    <rect x={6} y={14} width={10} height={8} fill="none" stroke={ink} strokeWidth={S} />
    <rect x={6} y={32} width={10} height={8} fill="none" stroke={ink} strokeWidth={S} />
    <path
      d="M16 18 Q 34 6 56 12"
      stroke={accent}
      strokeWidth={S}
      fill="none"
      strokeLinecap="round"
      strokeDasharray="2 2"
    />
    <path
      d="M16 36 Q 34 48 56 42"
      stroke={accent}
      strokeWidth={S}
      fill="none"
      strokeLinecap="round"
      strokeDasharray="2 2"
    />
    <rect x={56} y={6} width={10} height={8} fill="none" stroke={accent} strokeWidth={S} strokeDasharray="2 2" />
    <rect x={56} y={38} width={10} height={8} fill="none" stroke={accent} strokeWidth={S} strokeDasharray="2 2" />
  </Frame>
);

const mof_e = () => (
  <Frame>
    {/* 2 objects, each with current (ink solid) + future (accent dashed). Bigger boxes. */}
    <rect x={6} y={10} width={18} height={14} fill="none" stroke={ink} strokeWidth={S} />
    <rect x={38} y={4} width={18} height={14} fill="none" stroke={accent} strokeWidth={S} strokeDasharray="2.5 2.5" />
    <path d="M25 16 L36 11" stroke={muted} strokeWidth={S * 0.8} strokeDasharray="1.5 2" />

    <rect x={6} y={32} width={18} height={14} fill="none" stroke={ink} strokeWidth={S} />
    <rect x={38} y={28} width={18} height={14} fill="none" stroke={accent} strokeWidth={S} strokeDasharray="2.5 2.5" />
    <path d="M25 40 L36 35" stroke={muted} strokeWidth={S * 0.8} strokeDasharray="1.5 2" />
  </Frame>
);

// ───── IV — pedestrian + curved trajectory with proper arrowhead ──────────

// Cleaner arrowhead using arrowHead helper.

const iv_a = () => (
  <Frame>
    <path d="M16 40 Q 40 6 64 22" stroke={ink} strokeWidth={S} fill="none" strokeLinecap="round" />
    <circle cx={16} cy={40} r={2.6} fill={ink} />
    {arrowHead({ x: 64, y: 22, dx: 18, dy: -10, color: ink })}
  </Frame>
);

const iv_b = () => (
  <Frame>
    <circle cx={20} cy={14} r={3} fill="none" stroke={ink} strokeWidth={S} />
    <line x1={20} y1={17} x2={20} y2={30} stroke={ink} strokeWidth={S} strokeLinecap="round" />
    <line x1={20} y1={30} x2={16} y2={42} stroke={ink} strokeWidth={S} strokeLinecap="round" />
    <line x1={20} y1={30} x2={24} y2={42} stroke={ink} strokeWidth={S} strokeLinecap="round" />
    <line x1={20} y1={22} x2={15} y2={28} stroke={ink} strokeWidth={S} strokeLinecap="round" />
    <line x1={20} y1={22} x2={25} y2={28} stroke={ink} strokeWidth={S} strokeLinecap="round" />
    {/* curve ends exactly where the arrowhead tip is positioned */}
    <path d="M30 30 Q 48 14 64 22" stroke={accent} strokeWidth={S} fill="none" strokeLinecap="round" />
    {arrowHead({ x: 64, y: 22, dx: 16, dy: 8, color: accent })}
  </Frame>
);

const iv_c = () => (
  <Frame>
    <circle cx={16} cy={40} r={2.4} fill={ink} />
    <circle cx={28} cy={32} r={1.6} fill={ink} />
    <circle cx={40} cy={24} r={1.6} fill={ink} />
    <circle cx={52} cy={18} r={1.6} fill={accent} />
    <path d="M16 40 L60 18" stroke={muted} strokeWidth={S * 0.6} strokeDasharray="1.5 2" />
    {arrowHead({ x: 60, y: 18, dx: 14, dy: -7, color: accent })}
  </Frame>
);

const iv_d = () => (
  <Frame>
    <line x1={10} y1={42} x2={70} y2={42} stroke={ink} strokeWidth={S} />
    <line x1={20} y1={40} x2={20} y2={44} stroke={ink} strokeWidth={S} />
    <line x1={40} y1={40} x2={40} y2={44} stroke={ink} strokeWidth={S} />
    <line x1={60} y1={40} x2={60} y2={44} stroke={ink} strokeWidth={S} />
    <path d="M14 38 Q 38 10 62 22" stroke={accent} strokeWidth={S} fill="none" />
    <circle cx={14} cy={38} r={2.4} fill={ink} />
    {arrowHead({ x: 62, y: 22, dx: 14, dy: 4, color: accent })}
  </Frame>
);

const iv_e = () => (
  <Frame>
    <circle cx={20} cy={14} r={3} fill="none" stroke={ink} strokeWidth={S} />
    <line x1={20} y1={17} x2={20} y2={30} stroke={ink} strokeWidth={S} strokeLinecap="round" />
    <line x1={20} y1={30} x2={16} y2={42} stroke={ink} strokeWidth={S} strokeLinecap="round" />
    <line x1={20} y1={30} x2={24} y2={42} stroke={ink} strokeWidth={S} strokeLinecap="round" />
    <line x1={20} y1={22} x2={15} y2={28} stroke={ink} strokeWidth={S} strokeLinecap="round" />
    <line x1={20} y1={22} x2={25} y2={28} stroke={ink} strokeWidth={S} strokeLinecap="round" />
    <line x1={32} y1={28} x2={60} y2={28} stroke={accent} strokeWidth={S} strokeLinecap="round" />
    {arrowHead({ x: 60, y: 28, dx: 10, dy: 0, color: accent })}
  </Frame>
);

// ───── DASA placeholder (no longer used) ──────────────────────────────────

const dasa_a = () => (
  <Frame>
    <path
      d="M40 10 L54 14 L54 28 Q54 38 40 44 Q26 38 26 28 L26 14 Z"
      fill="none"
      stroke={ink}
      strokeWidth={S}
      strokeLinejoin="round"
    />
    <path
      d="M34 27 l4 4 8 -10"
      stroke={accent}
      strokeWidth={S * 1.3}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Frame>
);
const dasa_b = dasa_a;
const dasa_c = dasa_a;
const dasa_d = dasa_a;
const dasa_e = dasa_a;

// ───── EXPORTS ────────────────────────────────────────────────────────────

export type VariantKey = "a" | "b" | "c" | "d" | "e";
export type IconKey =
  | "artanis"
  | "multiverse"
  | "atlas"
  | "dasa"
  | "warwick"
  | "workbench"
  | "mot"
  | "tensor"
  | "mctf"
  | "mof"
  | "iv";

const map: Record<IconKey, Record<VariantKey, () => React.JSX.Element>> = {
  artanis: { a: artanis_a, b: artanis_b, c: artanis_c, d: artanis_d, e: artanis_e },
  multiverse: { a: multiverse_a, b: multiverse_b, c: multiverse_c, d: multiverse_d, e: multiverse_e },
  atlas: { a: atlas_a, b: atlas_b, c: atlas_c, d: atlas_d, e: atlas_e },
  dasa: { a: dasa_a, b: dasa_b, c: dasa_c, d: dasa_d, e: dasa_e },
  warwick: { a: warwick_a, b: warwick_b, c: warwick_c, d: warwick_d, e: warwick_e },
  workbench: { a: workbench_a, b: workbench_b, c: workbench_c, d: workbench_d, e: workbench_e },
  mot: { a: mot_a, b: mot_b, c: mot_c, d: mot_d, e: mot_e },
  tensor: { a: tensor_a, b: tensor_b, c: tensor_c, d: tensor_d, e: tensor_e },
  mctf: { a: mctf_a, b: mctf_b, c: mctf_c, d: mctf_d, e: mctf_e },
  mof: { a: mof_a, b: mof_b, c: mof_c, d: mof_d, e: mof_e },
  iv: { a: iv_a, b: iv_b, c: iv_c, d: iv_d, e: iv_e },
};

export function variantIcon(key: IconKey, variant: VariantKey) {
  return map[key][variant]();
}

export const subjects: { key: IconKey; label: string }[] = [
  { key: "artanis", label: "Artanis" },
  { key: "atlas", label: "Atlas AI" },
];
