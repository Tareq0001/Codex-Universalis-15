/**
 * Mechanics & Scientific Simulators for the 15 Folios
 * Author: Tareq Abuashi (أ. طارق ابوعشي)
 */

class MechanicsEngine {
  constructor() {
    this.activeInterval = null;
    this.activeAnimFrame = null;
  }

  cleanup() {
    if (this.activeInterval) {
      clearInterval(this.activeInterval);
      this.activeInterval = null;
    }
    if (this.activeAnimFrame) {
      cancelAnimationFrame(this.activeAnimFrame);
      this.activeAnimFrame = null;
    }
  }

  /**
   * Render the specific interactive widget based on folio mechanicType
   */
  renderMechanic(containerId, mechanicType, folio) {
    this.cleanup();
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';

    switch (mechanicType) {
      case 'cover':
        this.renderCoverMechanic(container);
        break;
      case 'astrolabe':
        this.renderAstrolabeMechanic(container);
        break;
      case 'antikythera':
        this.renderAntikytheraMechanic(container);
        break;
      case 'camera_obscura':
        this.renderCameraObscuraMechanic(container);
        break;
      case 'elephant_clock':
        this.renderElephantClockMechanic(container);
        break;
      case 'printing_press':
        this.renderPrintingPressMechanic(container);
        break;
      case 'slide_rule':
        this.renderSlideRuleMechanic(container);
        break;
      case 'pascaline':
        this.renderPascalineMechanic(container);
        break;
      case 'newton_telescope':
        this.renderNewtonTelescopeMechanic(container);
        break;
      case 'tourbillon':
        this.renderTourbillonMechanic(container);
        break;
      case 'harrison_h4':
        this.renderHarrisonMechanic(container);
        break;
      case 'steam_engine':
        this.renderSteamEngineMechanic(container);
        break;
      case 'analytical_engine':
        this.renderAnalyticalEngineMechanic(container);
        break;
      case 'morse_telegraph':
        this.renderMorseTelegraphMechanic(container);
        break;
      case 'grand_seal_certificate':
        this.renderCertificateMechanic(container);
        break;
      default:
        container.innerHTML = '<div style="text-align:center; padding:30px; color:#888;">محاكاة كلاسيكية معتمدة</div>';
    }
  }

  // 1. Cover: Grand Wax Seal & Royal Ribbon
  renderCoverMechanic(container) {
    container.innerHTML = `
      <div class="cover-interactive-box">
        <div class="wax-seal-large" id="cover-wax-seal" title="انقر لفتح المخطوطة">
          <div class="wax-seal-inner-large">⚜</div>
        </div>
        <div style="font-family:var(--font-ruqaa); font-size:1.4rem; color:var(--gold-bright); margin-top:16px;">
          خاتم قصر الأرشيف الملكي المعتمَد
        </div>
        <p style="font-size:0.95rem; color:#cfbe9f; margin-top:8px;">
          المخطوطة مرقمة من الورقة الأولى (Folio I) إلى الورقة الخامسة عشرة (Folio XV)
        </p>
        <button class="btn-brass-royal" id="btn-start-codex" style="margin-top:20px;">
          تصفح المخطوطة الكبرى (ابدأ الرحلة) ←
        </button>
      </div>
    `;

    const btnStart = document.getElementById('btn-start-codex');
    if (btnStart) {
      btnStart.addEventListener('click', () => {
        window.codexEngine.goToPage(2);
      });
    }
  }

  // 2. Astrolabe: Rotatable Brass Rete
  renderAstrolabeMechanic(container) {
    container.innerHTML = `
      <div class="canvas-widget-wrapper">
        <canvas id="mechanic-canvas" width="340" height="340"></canvas>
        <div class="widget-controls-line">
          <span>أدر الشبكة النحاسية بالفأرة</span>
          <span id="astrolabe-readout" style="color:var(--gold-bright); font-weight:bold;">الزاوية: 45°</span>
        </div>
      </div>
    `;
    const canvas = document.getElementById('mechanic-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let angle = 0.78;

    const draw = () => {
      ctx.clearRect(0, 0, 340, 340);
      const cx = 170, cy = 170, r = 140;

      // Brass Rim
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fillStyle = '#caa769';
      ctx.fill();
      ctx.strokeStyle = '#5a420e';
      ctx.lineWidth = 3;
      ctx.stroke();

      // Plate Almucantars
      for (let a = 10; a < 80; a += 15) {
        ctx.beginPath();
        ctx.arc(cx, cy - a * 0.4, r * (1 - a / 100), 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(74, 52, 17, 0.4)';
        ctx.stroke();
      }

      // Rete (Rotatable)
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(angle);

      // Ecliptic Circle
      ctx.beginPath();
      ctx.arc(0, r * 0.22, r * 0.6, 0, Math.PI * 2);
      ctx.strokeStyle = '#6e4f16';
      ctx.lineWidth = 8;
      ctx.stroke();

      // Star pointers
      for (let i = 0; i < 8; i++) {
        const rad = (i * Math.PI) / 4;
        const sx = Math.cos(rad) * (r * 0.75);
        const sy = Math.sin(rad) * (r * 0.75);
        ctx.beginPath();
        ctx.arc(sx, sy, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#fae19c';
        ctx.fill();
      }
      ctx.restore();

      // Center Pin
      ctx.beginPath();
      ctx.arc(cx, cy, 10, 0, Math.PI * 2);
      ctx.fillStyle = '#fae19c';
      ctx.fill();
      ctx.stroke();
    };

    draw();

    let dragging = false;
    let lastX = 0;
    canvas.addEventListener('mousedown', (e) => { dragging = true; lastX = e.clientX; });
    window.addEventListener('mousemove', (e) => {
      if (!dragging) return;
      const dx = e.clientX - lastX;
      angle += dx * 0.02;
      lastX = e.clientX;
      draw();
      const deg = Math.round(((angle * 180 / Math.PI) % 360 + 360) % 360);
      const readout = document.getElementById('astrolabe-readout');
      if (readout) readout.textContent = `الزاوية: ${deg}°`;
      if (window.CodexAudio) window.CodexAudio.playGearClick();
    });
    window.addEventListener('mouseup', () => { dragging = false; });
  }

  // 3. Antikythera: Interlocking Gear Train Simulation
  renderAntikytheraMechanic(container) {
    container.innerHTML = `
      <div class="canvas-widget-wrapper">
        <canvas id="mechanic-canvas" width="340" height="340"></canvas>
        <div class="widget-controls-line">
          <span>دوران تروس أنتيكيثيرا لحساب أطوار القمر والكسوف</span>
        </div>
      </div>
    `;
    const canvas = document.getElementById('mechanic-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let t = 0;

    const animate = () => {
      t += 0.02;
      ctx.clearRect(0, 0, 340, 340);
      ctx.fillStyle = '#101622';
      ctx.fillRect(0, 0, 340, 340);

      const drawGear = (x, y, r, teeth, speed, color) => {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(t * speed);
        ctx.fillStyle = color;
        ctx.strokeStyle = '#3a2707';
        ctx.lineWidth = 1.5;

        for (let i = 0; i < teeth; i++) {
          ctx.save();
          ctx.rotate((i * Math.PI * 2) / teeth);
          ctx.fillRect(-3, -r - 5, 6, 10);
          ctx.restore();
        }
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(0, 0, r * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = '#101622';
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      };

      // Sun Gear (Central)
      drawGear(170, 170, 65, 36, 1, '#c89b3c');
      // Lunar Epicyclic Gear
      drawGear(95, 120, 38, 20, -1.8, '#a37c2c');
      // Metonic Cycle Gear
      drawGear(245, 210, 48, 26, -1.38, '#dfb85a');

      this.activeAnimFrame = requestAnimationFrame(animate);
    };
    animate();
  }

  // 4. Camera Obscura: Ray Tracing Projection
  renderCameraObscuraMechanic(container) {
    container.innerHTML = `
      <div class="canvas-widget-wrapper">
        <canvas id="mechanic-canvas" width="340" height="260"></canvas>
        <div class="widget-controls-line">
          <span>شاهد انقلاب صورة الشمعة داخل قمرة ابن الهيثم المظلمة</span>
        </div>
      </div>
    `;
    const canvas = document.getElementById('mechanic-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#080c14';
    ctx.fillRect(0, 0, 340, 260);

    // Chamber Wall with pinhole
    ctx.fillStyle = '#3a2b1c';
    ctx.fillRect(150, 20, 12, 100);
    ctx.fillRect(150, 140, 12, 100);

    // Outside Candle (Right side)
    const cx = 270, cy = 130;
    ctx.fillStyle = '#f59e0b';
    ctx.fillRect(cx - 8, cy - 40, 16, 80); // Candle body
    // Flame
    ctx.beginPath();
    ctx.arc(cx, cy - 50, 10, 0, Math.PI * 2);
    ctx.fillStyle = '#ef4444';
    ctx.fill();

    // Light Rays passing through pinhole (156, 130)
    ctx.strokeStyle = 'rgba(253, 224, 71, 0.7)';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);

    // Top flame to bottom screen
    ctx.beginPath();
    ctx.moveTo(cx, cy - 50);
    ctx.lineTo(156, 130);
    ctx.lineTo(40, 210);
    ctx.stroke();

    // Bottom candle to top screen
    ctx.beginPath();
    ctx.moveTo(cx, cy + 40);
    ctx.lineTo(156, 130);
    ctx.lineTo(40, 50);
    ctx.stroke();
    ctx.setLineDash([]);

    // Inverted projected candle image inside chamber
    ctx.fillStyle = 'rgba(245, 158, 11, 0.75)';
    ctx.fillRect(35, 90, 10, 80);
    // Inverted flame at bottom
    ctx.beginPath();
    ctx.arc(40, 180, 8, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(239, 68, 68, 0.75)';
    ctx.fill();
  }

  // 5. Al-Jazari: Elephant Clock Hydraulic Mechanism
  renderElephantClockMechanic(container) {
    container.innerHTML = `
      <div class="canvas-widget-wrapper">
        <canvas id="mechanic-canvas" width="340" height="260"></canvas>
        <div class="widget-controls-line">
          <span>تدفق الماء في الطشت الهيدروليكي لتحريك رافعة الجزري</span>
        </div>
      </div>
    `;
    const canvas = document.getElementById('mechanic-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let waterLevel = 0;

    const anim = () => {
      waterLevel = (waterLevel + 0.4) % 90;
      ctx.clearRect(0, 0, 340, 260);
      ctx.fillStyle = '#121826';
      ctx.fillRect(0, 0, 340, 260);

      // Water Tank
      ctx.strokeStyle = '#c89b3c';
      ctx.lineWidth = 3;
      ctx.strokeRect(90, 80, 160, 120);

      // Water inside
      ctx.fillStyle = 'rgba(56, 189, 248, 0.5)';
      ctx.fillRect(92, 200 - waterLevel, 156, waterLevel);

      // Floating Bowl (Tipping Bucket)
      ctx.beginPath();
      ctx.arc(170, 195 - waterLevel, 24, 0, Math.PI);
      ctx.fillStyle = '#caa769';
      ctx.fill();
      ctx.stroke();

      this.activeAnimFrame = requestAnimationFrame(anim);
    };
    anim();
  }

  // 6. Gutenberg: Movable Type Lever Press
  renderPrintingPressMechanic(container) {
    container.innerHTML = `
      <div style="text-align:center; padding:16px;">
        <div id="printed-sheet" style="background:#fcf8ee; border:2px solid #caa769; padding:20px; color:#1a140e; font-family:var(--font-amiri); font-size:1.15rem; min-height:90px; border-radius:4px; box-shadow:0 4px 12px rgba(0,0,0,0.2);">
          « اسحب ذراع المكبس لطباعة السطر الأول من الإنجيل بحروف الرصاص »
        </div>
        <button class="btn-brass-royal" id="btn-pull-press" style="margin-top:16px;">
          ⚙️ شد ذراع المكبس اللولبي (Imprimer)
        </button>
      </div>
    `;
    const btn = document.getElementById('btn-pull-press');
    const sheet = document.getElementById('printed-sheet');
    if (btn && sheet) {
      btn.addEventListener('click', () => {
        sheet.innerHTML = `
          <strong style="color:#8b1819; font-size:1.3rem;">In principio creavit Deus caelum et terram.</strong><br>
          <span style="color:#4a3b2b;">« في البدء خلق الله السماوات والأرض » — طُبعت بماينتس عام 1455م</span>
        `;
        if (window.CodexAudio) {
          window.CodexAudio.playGearClick();
          window.CodexAudio.playPageTurn();
        }
      });
    }
  }

  // 7. Slide Rule: Interactive Logarithmic Calculation
  renderSlideRuleMechanic(container) {
    container.innerHTML = `
      <div style="padding:16px; text-align:center;">
        <div style="font-family:monospace; background:#caa769; border:3px solid #5a420e; padding:12px; border-radius:4px; color:#1a140e; margin-bottom:12px;">
          <div>مقياس C الثابت: [ 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 ]</div>
          <div style="color:#8b1819; font-weight:bold; margin-top:4px;">مقياس D المنزلق: [ 1.0 ... 3.5 ... 7.0 ... 9.0 ]</div>
        </div>
        <input type="range" id="slide-cursor" min="1" max="10" step="0.1" value="3" style="width:80%;">
        <div style="margin-top:12px; font-size:1.1rem; color:var(--gold-bright);" id="slide-result">
          الحساب اللوغاريتمي: 2 × 3 = 6
        </div>
      </div>
    `;
    const slider = document.getElementById('slide-cursor');
    const res = document.getElementById('slide-result');
    if (slider && res) {
      slider.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        res.textContent = `الحساب اللوغاريتمي: 2 × ${val.toFixed(1)} = ${(2 * val).toFixed(1)}`;
        if (window.CodexAudio) window.CodexAudio.playGearClick();
      });
    }
  }

  // 8. Pascaline: Adding Machine Dial
  renderPascalineMechanic(container) {
    container.innerHTML = `
      <div style="padding:16px; text-align:center;">
        <div style="display:flex; justify-content:center; gap:20px; margin-bottom:14px;">
          <div style="background:#1e2638; border:2px solid var(--gold-primary); padding:10px 20px; border-radius:4px; font-size:1.8rem; font-weight:bold; color:#fff;" id="pascal-digit">
            5
          </div>
        </div>
        <button class="btn-brass-royal" id="btn-turn-pascaline">
          🔄 تدوير ترس الآحاد (+1 في نظام باسكال)
        </button>
      </div>
    `;
    let count = 5;
    const btn = document.getElementById('btn-turn-pascaline');
    const disp = document.getElementById('pascal-digit');
    if (btn && disp) {
      btn.addEventListener('click', () => {
        count = (count + 1) % 10;
        disp.textContent = count;
        if (window.CodexAudio) window.CodexAudio.playGearClick();
      });
    }
  }

  // 9. Newton Reflecting Telescope: Concave Speculum Mirror
  renderNewtonTelescopeMechanic(container) {
    container.innerHTML = `
      <div class="canvas-widget-wrapper">
        <canvas id="mechanic-canvas" width="340" height="240"></canvas>
        <div class="widget-controls-line">
          <span>مسار الأشعة الضوئية وانعكاسها على المرآة المقعرة لنيوتن</span>
        </div>
      </div>
    `;
    const canvas = document.getElementById('mechanic-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#080e1a';
    ctx.fillRect(0, 0, 340, 240);

    // Telescope Tube
    ctx.strokeStyle = '#caa769';
    ctx.lineWidth = 4;
    ctx.strokeRect(30, 70, 260, 90);

    // Primary Concave Mirror at left
    ctx.beginPath();
    ctx.arc(40, 115, 60, -Math.PI / 3, Math.PI / 3);
    ctx.strokeStyle = '#60a5fa';
    ctx.lineWidth = 6;
    ctx.stroke();

    // 45-degree Diagonal Flat Mirror
    ctx.beginPath();
    ctx.moveTo(220, 100);
    ctx.lineTo(240, 120);
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 4;
    ctx.stroke();

    // Eyepiece at top
    ctx.fillStyle = '#caa769';
    ctx.fillRect(225, 40, 20, 30);
  }

  // 10. Tourbillon Escapement: Rotating Carriage
  renderTourbillonMechanic(container) {
    container.innerHTML = `
      <div class="canvas-widget-wrapper">
        <canvas id="mechanic-canvas" width="340" height="260"></canvas>
        <div class="widget-controls-line">
          <span>قفص التوربيون لبريغيه يدور حول محوره لإلغاء تأثير الجاذبية</span>
        </div>
      </div>
    `;
    const canvas = document.getElementById('mechanic-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let angle = 0;

    const anim = () => {
      angle += 0.03;
      ctx.clearRect(0, 0, 340, 260);
      ctx.fillStyle = '#0a0d14';
      ctx.fillRect(0, 0, 340, 260);

      const cx = 170, cy = 130;
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(angle);

      // Tourbillon Cage
      ctx.strokeStyle = '#caa769';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(0, 0, 65, 0, Math.PI * 2);
      ctx.stroke();

      // Blued Steel Bridge
      ctx.fillStyle = '#2563eb';
      ctx.fillRect(-60, -6, 120, 12);

      // Balance Wheel
      ctx.beginPath();
      ctx.arc(0, 0, 48, 0, Math.PI * 2);
      ctx.strokeStyle = '#fae19c';
      ctx.stroke();
      ctx.restore();

      this.activeAnimFrame = requestAnimationFrame(anim);
    };
    anim();
  }

  // 11. Harrison H4: Marine Chronometer
  renderHarrisonMechanic(container) {
    container.innerHTML = `
      <div style="padding:16px; text-align:center;">
        <div style="width:130px; height:130px; margin:0 auto; background:radial-gradient(circle, #fcf6e8 0%, #caa769 100%); border:6px solid #4a340b; border-radius:50%; box-shadow:0 8px 20px rgba(0,0,0,0.4); display:flex; align-items:center; justify-content:center;">
          <div style="font-family:serif; font-size:1.8rem; font-weight:bold; color:#1a140e;" id="h4-seconds">
            12:00:45
          </div>
        </div>
        <div style="margin-top:14px; color:var(--gold-bright); font-size:1rem;">
          توقيت غرينتش المرجعي (GMT) الدقيق لحساب خطوط الطول
        </div>
      </div>
    `;
    const secDisp = document.getElementById('h4-seconds');
    let s = 45;
    this.activeInterval = setInterval(() => {
      s++;
      if (secDisp) secDisp.textContent = `12:00:${s.toString().padStart(2, '0')}`;
      if (window.CodexAudio) window.CodexAudio.playGearClick();
    }, 1000);
  }

  // 12. Watt Steam Engine: Reciprocating Piston
  renderSteamEngineMechanic(container) {
    container.innerHTML = `
      <div class="canvas-widget-wrapper">
        <canvas id="mechanic-canvas" width="340" height="240"></canvas>
        <div class="widget-controls-line">
          <span>حركة المكبس والذراع الهزاز ومكثف واط المنفصل</span>
        </div>
      </div>
    `;
    const canvas = document.getElementById('mechanic-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let theta = 0;

    const anim = () => {
      theta += 0.05;
      ctx.clearRect(0, 0, 340, 240);
      ctx.fillStyle = '#0c1018';
      ctx.fillRect(0, 0, 340, 240);

      // Walking beam pivot
      const bx = 170, by = 60;
      const beamAngle = Math.sin(theta) * 0.25;

      ctx.save();
      ctx.translate(bx, by);
      ctx.rotate(beamAngle);
      ctx.fillStyle = '#caa769';
      ctx.fillRect(-80, -8, 160, 16);
      ctx.restore();

      // Flywheel on right
      const fx = 250, fy = 160;
      ctx.save();
      ctx.translate(fx, fy);
      ctx.rotate(theta);
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(0, 0, 45, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      this.activeAnimFrame = requestAnimationFrame(anim);
    };
    anim();
  }

  // 13. Analytical Engine: Punch Card Algorithm
  renderAnalyticalEngineMechanic(container) {
    container.innerHTML = `
      <div style="padding:16px; text-align:center;">
        <div style="background:#e5d5be; border:2px solid #8b6b3e; padding:14px; border-radius:4px; font-family:monospace; color:#1a140e; margin-bottom:12px; font-size:1rem;">
          [● ○ ● ● ○ ●] الخوارزمية 01: حساب حدود برنولي<br>
          [○ ● ○ ● ● ○] وحدة الذاكرة: Mill -> Store
        </div>
        <button class="btn-brass-royal" id="btn-read-card">
          📜 قراءة البطاقة المثقوبة لخوارزمية لوفليس
        </button>
      </div>
    `;
    const btn = document.getElementById('btn-read-card');
    if (btn) {
      btn.addEventListener('click', () => {
        alert('تم تنفيذ خوارزمية أدا لوفليس بنجاح على المحرك التحليلي!');
        if (window.CodexAudio) window.CodexAudio.playGearClick();
      });
    }
  }

  // 14. Morse Telegraph: Live Interactive Key & Audio
  renderMorseTelegraphMechanic(container) {
    container.innerHTML = `
      <div style="padding:16px; text-align:center;">
        <button class="btn-brass-royal" id="btn-morse-tap" style="padding:16px 36px; font-size:1.3rem;">
          ⚡ اضغط مفتاح التليغراف لإرسال نبضة
        </button>
        <div style="margin-top:16px; font-family:monospace; font-size:1.3rem; color:var(--gold-bright);" id="morse-output">
          - . .-.. . --. .-. .- .--. ....
        </div>
      </div>
    `;
    const btn = document.getElementById('btn-morse-tap');
    const out = document.getElementById('morse-output');
    if (btn && out) {
      btn.addEventListener('mousedown', () => {
        if (window.CodexAudio) window.CodexAudio.playMorse(false);
        out.textContent += '.';
      });
    }
  }

  // 15. Grand Seal & Certificate: Museum Grade Presentation
  renderCertificateMechanic(container) {
    container.innerHTML = `
      <div style="padding:20px; text-align:center; background:#fbf7ee; border:6px double #caa769; border-radius:4px; color:#1a140e;">
        <div style="font-family:var(--font-ruqaa); font-size:1.8rem; color:#8b1819;">
          شهادة ختم مخطوطة الكون الخالدة
        </div>
        <p style="margin:12px 0; font-family:var(--font-amiri); font-size:1.1rem; line-height:1.8;">
          نُقشت هذه المخطوطة الأرشيفية الكبرى بصفحاتها الخمس عشرة توثيقاً لروائع الإبداع البشري.
        </p>
        <div style="margin:20px auto; width:70px; height:70px; background:radial-gradient(circle, #b92b2c 0%, #580c0d 100%); border-radius:50%; display:flex; align-items:center; justify-content:center; color:#fff; font-size:1.6rem; box-shadow:0 6px 16px rgba(88,12,13,0.4);">
          ⚜
        </div>
        <div style="font-family:var(--font-amiri); font-weight:bold; font-size:1.25rem;">
          أ. طارق ابوعشي — Tareq Abuashi
        </div>
        <button class="btn-brass-royal" id="btn-print-codex" style="margin-top:16px;">
          🖨️ طباعة المخطوطة الأرشيفية الكاملة
        </button>
      </div>
    `;
    const btn = document.getElementById('btn-print-codex');
    if (btn) {
      btn.addEventListener('click', () => {
        window.print();
      });
    }
  }
}

window.MechanicsEngine = new MechanicsEngine();
