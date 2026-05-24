const portfolioItems = [
  {
    id: "lumina-blond",
    category: "cor",
    label: "Cor & brilho",
    title: "Loiro cremoso com contorno de rosto",
    shortDescription:
      "Luminosidade suave, profundidade na raiz e acabamento polido para manutenção mais simples.",
    longDescription:
      "Este trabalho foi pensado para iluminar o rosto sem perder sofisticação. A construção mistura dimensão, gloss tonalizante e styling com brilho controlado, ideal para quem quer presença com rotina prática.",
    tags: ["Gloss tonalizante", "Contorno frontal", "Styling com brilho"],
    meta: ["Tempo médio: 3h30", "Perfil: manutenção elegante", "Acabamento: liso macio"],
    visual: "visual-glow",
  },
  {
    id: "lumina-noiva",
    category: "noivas",
    label: "Noivas",
    title: "Coque macio para cerimónia ao pôr do sol",
    shortDescription:
      "Penteado com estrutura invisível, volume equilibrado e leitura fotográfica delicada.",
    longDescription:
      "Um penteado construído para durar, mas com leveza visual. O objetivo foi preservar romantismo sem rigidez, garantindo conforto, movimento e presença nas fotografias do dia.",
    tags: ["Fixação leve", "Volume controlado", "Prova prévia"],
    meta: ["Tempo médio: 2h", "Perfil: cerimónia", "Acabamento: macio"],
    visual: "visual-blush",
  },
  {
    id: "lumina-corte",
    category: "cortes",
    label: "Corte",
    title: "Bob estruturado com textura natural",
    shortDescription:
      "Linhas limpas, queda precisa e movimento pensado para secagem rápida em casa.",
    longDescription:
      "Este corte valoriza a linha do maxilar e facilita o styling no dia a dia. A intenção foi unir sofisticação e praticidade, com um desenho que mantém forma mesmo fora do salão.",
    tags: ["Consultoria de formato", "Textura viva", "Secagem simplificada"],
    meta: ["Tempo médio: 1h15", "Perfil: urbano", "Acabamento: textura leve"],
    visual: "visual-wave",
  },
  {
    id: "lumina-editorial",
    category: "editorial",
    label: "Editorial",
    title: "Wet styling com contraste e atitude",
    shortDescription:
      "Direção visual para campanhas, sessões fotográficas e conteúdos com assinatura forte.",
    longDescription:
      "Uma proposta de styling mais ousada, pensada para editorial e comunicação de marca. Aqui o cabelo trabalha como elemento gráfico, criando impacto logo no primeiro olhar.",
    tags: ["Lookbook", "Fotografia", "Assinatura visual"],
    meta: ["Tempo médio: 1h40", "Perfil: campanha", "Acabamento: high-shine"],
    visual: "visual-noir",
  },
  {
    id: "lumina-beleza",
    category: "beleza",
    label: "Beleza",
    title: "Manicure clean com acabamento premium",
    shortDescription:
      "Formato refinado, brilho elegante e detalhe final a combinar com o look completo.",
    longDescription:
      "A proposta foi criar um serviço discreto, sofisticado e muito bem acabado. Um complemento ideal para noivas, eventos ou clientes que procuram coerência visual até ao último detalhe.",
    tags: ["Cutícula delicada", "Brilho espelhado", "Tom nude sofisticado"],
    meta: ["Tempo médio: 55 min", "Perfil: detalhe final", "Acabamento: clean"],
    visual: "visual-silk",
  },
  {
    id: "lumina-masculino",
    category: "masculino",
    label: "Masculino",
    title: "Corte clássico com leitura contemporânea",
    shortDescription:
      "Laterais equilibradas, topo com intenção e um desenho que funciona no escritório e no fim de semana.",
    longDescription:
      "Um corte masculino que prioriza elegância e versatilidade. A construção respeita o crescimento natural do cabelo e oferece um acabamento fácil de manter entre visitas.",
    tags: ["Precisão", "Versatilidade", "Perfil profissional"],
    meta: ["Tempo médio: 50 min", "Perfil: clássico atual", "Acabamento: natural"],
    visual: "visual-mirror",
  },
  {
    id: "lumina-caramel",
    category: "cor",
    label: "Cor & dimensão",
    title: "Castanho caramelo com reflexo quente",
    shortDescription:
      "Profundidade rica na base e reflexos que ganham vida em luz natural.",
    longDescription:
      "Uma construção pensada para clientes que querem renovar a imagem sem afastar-se da sua identidade. O reflexo quente traz sofisticação e sensação imediata de cabelo saudável.",
    tags: ["Reflexo quente", "Dimensão", "Brilho natural"],
    meta: ["Tempo médio: 2h45", "Perfil: mudança subtil", "Acabamento: brilho caloroso"],
    visual: "featured-cascade",
  },
  {
    id: "lumina-party",
    category: "penteados",
    label: "Penteados",
    title: "Ondas largas para festa e fotografia",
    shortDescription:
      "Definição suave, volume nos pontos certos e resultado pronto para durar até ao fim da noite.",
    longDescription:
      "Criado para eventos onde o cabelo precisa de ficar impecável em movimento e em fotografia. O styling dá presença sem parecer excessivo, com foco em textura, brilho e durabilidade.",
    tags: ["Festa", "Ondas largas", "Fixação leve"],
    meta: ["Tempo médio: 1h20", "Perfil: evento", "Acabamento: glamour leve"],
    visual: "visual-glow",
  },
  {
    id: "lumina-soft",
    category: "cortes",
    label: "Corte & styling",
    title: "Camadas suaves com ar de editorial diário",
    shortDescription:
      "Movimento desenhado para enquadrar o rosto e criar leveza sem perder densidade.",
    longDescription:
      "Aqui trabalhámos camadas longas e polimento de textura para um resultado com ar sofisticado, mas totalmente adaptado à rotina. É o tipo de corte que fotografa bem e vive melhor ainda no quotidiano.",
    tags: ["Camadas longas", "Leveza", "Rotina prática"],
    meta: ["Tempo médio: 1h25", "Perfil: versátil", "Acabamento: leve e solto"],
    visual: "visual-wave",
  },
  {
    id: "lumina-sculpt",
    category: "editorial",
    label: "Editorial",
    title: "Textura esculpida para imagem de campanha",
    shortDescription:
      "Trabalho de forma e contraste para marcas que precisam de impacto visual imediato.",
    longDescription:
      "Pensado para campanhas, social media e conteúdos premium, este look usa textura como elemento central de linguagem visual. A execução procura precisão, brilho e personalidade.",
    tags: ["Campanha", "Textura", "Imagem forte"],
    meta: ["Tempo médio: 1h50", "Perfil: comunicação", "Acabamento: escultural"],
    visual: "visual-noir",
  },
  {
    id: "lumina-bridal-glow",
    category: "noivas",
    label: "Noivas",
    title: "Semi-preso luminoso para dia inteiro",
    shortDescription:
      "Equilíbrio entre suavidade, fixação e leitura romântica sem excesso.",
    longDescription:
      "Um semi-preso criado para acompanhar cerimónia, festa e sessão fotográfica com o mesmo nível de elegância. A estrutura interna segura o look, enquanto a superfície mantém naturalidade.",
    tags: ["Semi-preso", "Fotogenia", "Durabilidade"],
    meta: ["Tempo médio: 1h45", "Perfil: noiva contemporânea", "Acabamento: luminoso"],
    visual: "visual-blush",
  },
  {
    id: "lumina-finish",
    category: "beleza",
    label: "Beleza",
    title: "Pedicure clean para fechar o ritual",
    shortDescription:
      "Cuidado discreto, confortável e perfeitamente alinhado ao resto da experiência.",
    longDescription:
      "Um serviço pensado para completar a sensação de cuidado integral. O enfoque é conforto, limpeza visual e detalhe, com um acabamento que reforça a imagem cuidada do conjunto.",
    tags: ["Conforto", "Detalhe", "Ritual completo"],
    meta: ["Tempo médio: 45 min", "Perfil: manutenção", "Acabamento: clean"],
    visual: "visual-silk",
  },
];

const filters = [
  { id: "all", label: "Todos" },
  { id: "cortes", label: "Cortes" },
  { id: "cor", label: "Cor" },
  { id: "penteados", label: "Penteados" },
  { id: "noivas", label: "Noivas" },
  { id: "beleza", label: "Beleza" },
  { id: "editorial", label: "Editorial" },
  { id: "masculino", label: "Masculino" },
];

const featuredVisual = document.getElementById("featured-visual");
const featuredTitle = document.getElementById("featured-title");
const featuredDescription = document.getElementById("featured-description");
const featuredTags = document.getElementById("featured-tags");
const featuredButton = document.getElementById("featured-button");
const portfolioGrid = document.getElementById("portfolio-grid");
const filterRow = document.getElementById("filter-row");

const modal = document.getElementById("portfolio-modal");
const modalClose = document.getElementById("modal-close");
const modalVisual = document.getElementById("modal-visual");
const modalCategory = document.getElementById("modal-category");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalMeta = document.getElementById("modal-meta");

let activeFilter = "all";
let featuredItem = portfolioItems[0];

function createTagList(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function createMetaList(items) {
  return items.map((item) => `<span>${item}</span>`).join("");
}

function updateFeatured(item) {
  featuredItem = item;
  featuredVisual.className = `featured-visual ${item.visual}`;
  featuredTitle.textContent = item.title;
  featuredDescription.textContent = item.longDescription;
  featuredTags.innerHTML = createTagList(item.tags);
  featuredButton.dataset.id = item.id;
}

function renderFilters() {
  filterRow.innerHTML = filters
    .map(
      (filter) => `
        <button
          class="filter-chip ${filter.id === activeFilter ? "is-active" : ""}"
          type="button"
          data-filter="${filter.id}"
        >
          ${filter.label}
        </button>
      `
    )
    .join("");

  filterRow.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      renderFilters();
      renderPortfolio();
    });
  });
}

function renderPortfolio() {
  const visibleItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  if (!visibleItems.find((item) => item.id === featuredItem.id)) {
    updateFeatured(visibleItems[0]);
  }

  portfolioGrid.innerHTML = visibleItems
    .map(
      (item) => `
        <article class="portfolio-card reveal is-visible">
          <button type="button" data-id="${item.id}">
            <div class="portfolio-visual ${item.visual}"></div>
            <div class="portfolio-copy">
              <span class="portfolio-label">${item.label}</span>
              <h3>${item.title}</h3>
              <p>${item.shortDescription}</p>
            </div>
          </button>
        </article>
      `
    )
    .join("");

  portfolioGrid.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const item = portfolioItems.find((entry) => entry.id === button.dataset.id);
      updateFeatured(item);
      openModal(item);
    });
  });
}

function openModal(item) {
  modalVisual.className = `modal-visual ${item.visual}`;
  modalCategory.textContent = item.label;
  modalTitle.textContent = item.title;
  modalDescription.textContent = item.longDescription;
  modalMeta.innerHTML = createMetaList([...item.tags, ...item.meta]);
  modal.showModal();
}

featuredButton.addEventListener("click", () => {
  openModal(featuredItem);
});

modalClose.addEventListener("click", () => modal.close());
modal.addEventListener("click", (event) => {
  const bounds = modal.getBoundingClientRect();
  const insideDialog =
    event.clientX >= bounds.left &&
    event.clientX <= bounds.right &&
    event.clientY >= bounds.top &&
    event.clientY <= bounds.bottom;

  if (!insideDialog) {
    modal.close();
  }
});

document.querySelector(".contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector("button");
  const originalText = button.textContent;
  button.textContent = "Pedido enviado";
  button.disabled = true;

  window.setTimeout(() => {
    button.textContent = originalText;
    button.disabled = false;
    event.currentTarget.reset();
  }, 1800);
});

const revealItems = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
  }
);

revealItems.forEach((item) => revealObserver.observe(item));

updateFeatured(featuredItem);
renderFilters();
renderPortfolio();
