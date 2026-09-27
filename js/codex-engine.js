/**
 * Master Codex Folio Navigator & Presentation Engine
 * Controls page-turning for the 15 folios, Table of Contents, and Loupe Inspector
 * Author: Tareq Abuashi (أ. طارق ابوعشي)
 */

class CodexEngine {
  constructor() {
    this.currentPage = 1;
    this.totalPages = 15;
    this.init();
  }

  init() {
    this.renderCurrentFolio();
    this.initNavControls();
    this.initTableOfContents();
    this.initKeyboardNav();
    this.initLoupe();
  }

  goToPage(pageNum) {
    if (pageNum < 1 || pageNum > this.totalPages) return;
    this.currentPage = pageNum;
    this.renderCurrentFolio();
    if (window.CodexAudio) {
      window.CodexAudio.playPageTurn();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.goToPage(this.currentPage + 1);
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.goToPage(this.currentPage - 1);
    }
  }

  renderCurrentFolio() {
    const folio = window.CodexData[this.currentPage - 1];
    if (!folio) return;

    // Header & Meta elements
    const elPageNum = document.getElementById('folio-page-num');
    const elRoman = document.getElementById('folio-roman-num');
    const elTitle = document.getElementById('folio-title');
    const elCategory = document.getElementById('folio-category');
    const elDateOrigin = document.getElementById('folio-date-origin');
    const elLatinQuote = document.getElementById('folio-latin-quote');
    const elArabicQuote = document.getElementById('folio-arabic-quote');
    const elEssay = document.getElementById('folio-essay');
    const elTags = document.getElementById('folio-tags');

    if (elPageNum) elPageNum.textContent = `الصفحة ${folio.pageNumber} من ${this.totalPages}`;
    if (elRoman) elRoman.textContent = `Folio ${folio.romanNum}`;
    if (elTitle) elTitle.textContent = folio.titleAr;
    if (elCategory) elCategory.textContent = folio.category;
    if (elDateOrigin) elDateOrigin.textContent = `${folio.date} • ${folio.origin}`;
    if (elLatinQuote) elLatinQuote.textContent = folio.latinQuote;
    if (elArabicQuote) elArabicQuote.textContent = folio.arabicQuote;
    if (elEssay) elEssay.innerHTML = folio.essay;

    if (elTags) {
      elTags.innerHTML = folio.tags.map(t => `<span class="folio-tag-pill">#${t}</span>`).join(' ');
    }

    // Update pagination controls status
    const btnPrev = document.getElementById('btn-prev-page');
    const btnNext = document.getElementById('btn-next-page');
    if (btnPrev) btnPrev.disabled = this.currentPage === 1;
    if (btnNext) btnNext.disabled = this.currentPage === this.totalPages;

    // Trigger Mechanics Simulator
    window.MechanicsEngine.renderMechanic('mechanic-display-container', folio.mechanicType, folio);

    // Update active state in Table of Contents
    const tocItems = document.querySelectorAll('.toc-item');
    tocItems.forEach(item => {
      const p = parseInt(item.getAttribute('data-page'));
      item.classList.toggle('active', p === this.currentPage);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  initNavControls() {
    const btnPrev = document.getElementById('btn-prev-page');
    const btnNext = document.getElementById('btn-next-page');

    if (btnPrev) btnPrev.addEventListener('click', () => this.prevPage());
    if (btnNext) btnNext.addEventListener('click', () => this.nextPage());
  }

  initKeyboardNav() {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        this.nextPage(); // RTL: Arrow Left goes forward
      } else if (e.key === 'ArrowRight') {
        this.prevPage(); // RTL: Arrow Right goes back
      }
    });
  }

  initTableOfContents() {
    const tocList = document.getElementById('toc-items-list');
    if (!tocList) return;

    tocList.innerHTML = window.CodexData.map(f => `
      <div class="toc-item ${f.pageNumber === 1 ? 'active' : ''}" data-page="${f.pageNumber}">
        <span class="toc-roman">${f.romanNum}</span>
        <div class="toc-details">
          <div class="toc-item-title">${f.titleAr}</div>
          <div class="toc-item-meta">${f.category} • ${f.date}</div>
        </div>
      </div>
    `).join('');

    const items = tocList.querySelectorAll('.toc-item');
    items.forEach(it => {
      it.addEventListener('click', () => {
        const page = parseInt(it.getAttribute('data-page'));
        this.goToPage(page);
        this.toggleTocDrawer(false);
      });
    });

    const btnOpenToc = document.getElementById('btn-open-toc');
    const btnCloseToc = document.getElementById('btn-close-toc');
    if (btnOpenToc) btnOpenToc.addEventListener('click', () => this.toggleTocDrawer(true));
    if (btnCloseToc) btnCloseToc.addEventListener('click', () => this.toggleTocDrawer(false));
  }

  toggleTocDrawer(open) {
    const drawer = document.getElementById('toc-drawer');
    if (drawer) {
      drawer.classList.toggle('open', open);
      if (open && window.CodexAudio) window.CodexAudio.playParchmentFlip();
    }
  }

  initLoupe() {
    const folioBody = document.getElementById('folio-body-area');
    const loupe = document.getElementById('manuscript-loupe');
    if (!folioBody || !loupe) return;

    folioBody.addEventListener('mouseenter', () => { loupe.style.display = 'block'; });
    folioBody.addEventListener('mouseleave', () => { loupe.style.display = 'none'; });

    folioBody.addEventListener('mousemove', (e) => {
      const rect = folioBody.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      loupe.style.left = `${x}px`;
      loupe.style.top = `${y}px`;
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.codexEngine = new CodexEngine();

  // Audio Toggle
  const btnAudio = document.getElementById('btn-sound-toggle');
  if (btnAudio) {
    btnAudio.addEventListener('click', () => {
      const on = window.CodexAudio.toggle();
      btnAudio.textContent = on ? '🔊 الصوت: مفعّل' : '🔇 الصوت: صامت';
    });
  }

  // Bilingual Language Toggle
  const btnLang = document.getElementById('btn-codex-lang');
  let isAr = true;
  if (btnLang) {
    btnLang.addEventListener('click', () => {
      isAr = !isAr;
      document.body.style.direction = isAr ? 'rtl' : 'ltr';
      btnLang.textContent = isAr ? 'Langue Classique (Français & English)' : 'النسخة العربية الفصحى';
      const cur = window.CodexData[window.codexEngine.currentPage - 1];
      const elTitle = document.getElementById('folio-title');
      if (elTitle) elTitle.textContent = isAr ? cur.titleAr : cur.titleEn;
      if (window.CodexAudio) window.CodexAudio.playPageTurn();
    });
  }
});
