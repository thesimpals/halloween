// Monta a imagem de compartilhamento (PNG 1080px de largura) a partir do resultado.
// spec = { headline, kicker, lines: [[rótulo, valor], ...] }
(() => {
  const W = 1080;
  const PAD = 64;
  const PANEL_PAD = 46;
  const loadImg = (src) => new Promise((ok, fail) => { const i = new Image(); i.onload = () => ok(i); i.onerror = fail; i.src = src; });

  function wrap(ctx, text, maxW) {
    const words = String(text).split(/\s+/);
    const out = [];
    let line = "";
    for (const w of words) {
      const test = line ? `${line} ${w}` : w;
      if (ctx.measureText(test).width > maxW && line) { out.push(line); line = w; } else line = test;
    }
    if (line) out.push(line);
    return out;
  }

  function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  async function makeShareImage(spec) {
    await Promise.all([
      document.fonts.load('120px "Caveat Brush"'),
      document.fonts.load('800 30px "Shantell Sans"'),
      document.fonts.load('700 40px "Shantell Sans"'),
    ]).catch(() => {});
    const [bg, logo] = await Promise.all([loadImg("img/fundo-alto.webp?v=1"), loadImg("img/logo-migas.webp?v=1")]);

    const c = document.createElement("canvas");
    const ctx = c.getContext("2d");
    const innerW = W - 2 * PAD - 2 * PANEL_PAD;
    const LABEL = '800 26px "Shantell Sans", sans-serif';
    const VALUE = '700 38px "Shantell Sans", sans-serif';

    // mede o painel
    const rows = spec.lines.map(([label, value]) => {
      ctx.font = VALUE;
      const v = wrap(ctx, value, innerW);
      return { label, v, h: (label ? 36 : 0) + v.length * 48 + 22 };
    });
    const panelH = rows.reduce((s, r) => s + r.h, 0) + 2 * PANEL_PAD - 22;
    const TOP = 430;
    const H = Math.max(1350, TOP + panelH + 220);
    c.width = W;
    c.height = H;

    // fundo pintado + escurecido
    const s = Math.max(W / bg.width, H / bg.height);
    ctx.drawImage(bg, (W - bg.width * s) / 2, (H - bg.height * s) / 2, bg.width * s, bg.height * s);
    const g = ctx.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, "rgba(23,6,34,.25)");
    g.addColorStop(1, "rgba(23,6,34,.75)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);

    // logo
    ctx.save();
    ctx.shadowColor = "rgba(255,110,210,.7)";
    ctx.shadowBlur = 40;
    ctx.beginPath();
    ctx.arc(W / 2, 130, 78, 0, Math.PI * 2);
    ctx.clip();
    ctx.drawImage(logo, W / 2 - 78, 52, 156, 156);
    ctx.restore();

    // chamadinha
    ctx.textAlign = "center";
    ctx.font = '800 28px "Shantell Sans", sans-serif';
    ctx.fillStyle = "#ffd36b";
    ctx.fillText(spec.kicker.toUpperCase(), W / 2, 262);

    // título "bala de goma"
    ctx.font = '120px "Caveat Brush", cursive';
    let size = 120;
    while (ctx.measureText(spec.headline).width > W - 2 * PAD && size > 60) { size -= 6; ctx.font = `${size}px "Caveat Brush", cursive`; }
    ctx.lineJoin = "round";
    ctx.lineWidth = 18;
    ctx.strokeStyle = "#2a0838";
    ctx.strokeText(spec.headline, W / 2, 380);
    const tg = ctx.createLinearGradient(0, 380 - size, 0, 380);
    tg.addColorStop(0, "#ffffff");
    tg.addColorStop(.45, "#ffe6f7");
    tg.addColorStop(1, "#f48ad8");
    ctx.fillStyle = tg;
    ctx.fillText(spec.headline, W / 2, 380);

    // painel de papel
    const px = PAD, py = TOP;
    ctx.save();
    ctx.shadowColor = "rgba(0,0,0,.5)";
    ctx.shadowBlur = 40;
    ctx.shadowOffsetY = 16;
    roundRect(ctx, px, py, W - 2 * PAD, panelH, 28);
    ctx.fillStyle = "#fff5fb";
    ctx.fill();
    ctx.restore();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#e86bd0";
    roundRect(ctx, px, py, W - 2 * PAD, panelH, 28);
    ctx.stroke();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "rgba(232,107,208,.45)";
    roundRect(ctx, px + 10, py + 10, W - 2 * PAD - 20, panelH - 20, 20);
    ctx.stroke();

    ctx.textAlign = "left";
    let y = py + PANEL_PAD;
    for (const r of rows) {
      if (r.label) {
        ctx.font = LABEL;
        ctx.fillStyle = "#c0189e";
        ctx.fillText(r.label.toUpperCase(), px + PANEL_PAD, y + 24);
        y += 36;
      }
      ctx.font = VALUE;
      ctx.fillStyle = "#2a0838";
      for (const l of r.v) { ctx.fillText(l, px + PANEL_PAD, y + 38); y += 48; }
      y += 22;
    }

    // rodapé
    ctx.textAlign = "center";
    ctx.font = '64px "Caveat Brush", cursive';
    ctx.fillStyle = "#ffd3f2";
    ctx.fillText("E o seu? 👀", W / 2, H - 110);
    ctx.font = '700 28px "Shantell Sans", sans-serif';
    ctx.fillStyle = "#c4a2c6";
    ctx.fillText("thesimpals.github.io/halloween", W / 2, H - 58);

    return new Promise((ok) => c.toBlob(ok, "image/png"));
  }

  // Transforma o texto de compartilhamento ("Rótulo: valor" por linha) em linhas da imagem
  function linesFromText(text) {
    return text.split("\n").slice(1)
      .map((l) => l.replace(/[*_]/g, "").replace(/^[\s•✔]+/, "").trim())
      .filter((l) => l && !/^(Tire|Jogue)/.test(l))
      .map((l) => {
        const k = l.indexOf(": ");
        return k > 0 && k < 40 ? [l.slice(0, k).replace(/^[^\p{L}\d]+/u, ""), l.slice(k + 2)] : ["", l];
      });
  }

  window.makeShareImage = makeShareImage;
  window.linesFromText = linesFromText;
})();
