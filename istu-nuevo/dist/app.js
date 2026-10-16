(() => {
  'use strict';

  const icons = {
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 5 5"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M3 5c4-2 6-1 9 1 3-2 5-3 9-1v14c-4-2-6-1-9 1-3-2-5-3-9-1V5Zm9 1v14"/></svg>'
  };

  const careers = [
    {
      id: 'software', name: 'Desarrollo de Software', category: 'tecnologia', label: 'Tecnología', image: 'assets/software.jpg', imageAlt: 'Computadora portátil con herramientas de programación en un escritorio',
      description: 'Convertí ideas en soluciones digitales. Un camino para quienes disfrutan crear, resolver problemas y construir con tecnología.',
      interests: ['Programación', 'Creatividad', 'Soluciones digitales'],
      competencies: ['Pensar soluciones para problemas concretos.', 'Explorar el diseño y desarrollo de aplicaciones.', 'Colaborar en proyectos de software.'],
      profile: 'Te interesa crear aplicaciones y transformar una idea en algo que funciona.',
      focus: 'Creación de aplicaciones y soluciones digitales',
      tags: 'programacion aplicaciones codigo desarrollo web sistemas informatica tecnología'
    },
    {
      id: 'systems', name: 'Análisis de Sistemas', category: 'tecnologia', label: 'Tecnología', image: 'assets/systems.jpg', imageAlt: 'Trabajo en equipo para analizar un proyecto tecnológico',
      description: 'Entendé cómo funcionan las organizaciones y conectá sus necesidades con soluciones informáticas que generen valor.',
      interests: ['Lógica', 'Procesos', 'Tecnología'],
      competencies: ['Analizar necesidades y procesos de una organización.', 'Identificar oportunidades de mejora con tecnología.', 'Conectar equipos, información y soluciones informáticas.'],
      profile: 'Te gusta entender cómo funciona algo, ordenar información y encontrar mejoras.',
      focus: 'Análisis de necesidades, procesos y soluciones informáticas',
      tags: 'analisis informatica procesos organizaciones sistemas tecnologia lógica'
    },
    {
      id: 'data', name: 'Ciencia de Datos', category: 'tecnologia', label: 'Tecnología', image: 'assets/data.jpg', imageAlt: 'Exploración de información y visualizaciones de datos',
      description: 'Descubrí las historias que cuentan los datos. Explorá información, encontrá patrones y aportá nuevas miradas para decidir.',
      interests: ['Datos', 'Investigación', 'Pensamiento analítico'],
      competencies: ['Explorar y organizar información.', 'Reconocer patrones y formular preguntas a partir de datos.', 'Comunicar hallazgos para apoyar decisiones.'],
      profile: 'Disfrutás investigar, trabajar con números y encontrar respuestas en la información.',
      focus: 'Exploración, análisis e interpretación de datos',
      tags: 'datos analisis estadistica numeros investigacion informacion tecnologia inteligencia artificial'
    },
    {
      id: 'tourism', name: 'Administración de Empresas Hoteleras y Turísticas', category: 'turismo', label: 'Turismo y hospitalidad', image: 'assets/tourism.jpg', imageAlt: 'Paisaje natural de Misiones vinculado al turismo regional',
      description: 'Conectá personas, lugares y experiencias. Acercate a la gestión del turismo y la hospitalidad en una región con identidad propia.',
      interests: ['Turismo', 'Hospitalidad', 'Gestión'],
      competencies: ['Comprender la organización de servicios turísticos y hoteleros.', 'Pensar experiencias de atención y hospitalidad.', 'Explorar la gestión de proyectos vinculados al territorio.'],
      profile: 'Te atrae recibir personas, organizar experiencias y conocer el potencial de tu región.',
      focus: 'Gestión de organizaciones hoteleras y turísticas',
      tags: 'turismo hoteleria hoteles viajes hospitalidad administracion empresas servicio'
    },
    {
      id: 'people', name: 'Administración de Recursos Humanos', category: 'gestion', label: 'Gestión y personas', image: 'assets/people.jpg', imageAlt: 'Personas conversando y trabajando juntas en una organización',
      description: 'Poné a las personas en el centro. Explorá cómo acompañar equipos, mejorar la comunicación y contribuir al desarrollo de una organización.',
      interests: ['Personas', 'Equipos', 'Organizaciones'],
      competencies: ['Comprender la gestión de personas en las organizaciones.', 'Acompañar procesos de comunicación y trabajo en equipo.', 'Explorar prácticas para el desarrollo de equipos.'],
      profile: 'Te interesa escuchar, organizar equipos y ayudar a que las personas desarrollen su potencial.',
      focus: 'Gestión de personas y desarrollo de equipos',
      tags: 'recursos humanos rrhh personas equipos administracion gestion organizaciones comunicación'
    }
  ];

  const courses = [
    { id: 'auxiliar-datos', name: 'Auxiliar en Ciencia de Datos', category: 'Tecnología', description: 'Un primer acercamiento al mundo de los datos y la información.', tags: 'datos ciencia analisis tecnologia' },
    { id: 'operador-pc', name: 'Operador de PC', category: 'Tecnología', description: 'Explorá herramientas informáticas para tareas cotidianas.', tags: 'computacion informatica computadora tecnologia' },
    { id: 'ingles', name: 'Inglés Instrumental', category: 'Idiomas', description: 'Acercate al inglés como herramienta para tu formación y trabajo.', tags: 'idioma ingles english' },
    { id: 'recepcion', name: 'Telefonista / Recepcionista', category: 'Atención y servicios', description: 'Un recorrido vinculado a la atención y la recepción de personas.', tags: 'atencion recepcion telefonista oficina' },
    { id: 'mozos', name: 'Mozos / Camareras', category: 'Turismo y hospitalidad', description: 'Explorá el servicio de atención en espacios gastronómicos.', tags: 'turismo gastronomia servicio mozo camarera' },
    { id: 'housekeeping', name: 'Housekeeping', category: 'Turismo y hospitalidad', description: 'Conocé el área de cuidado y preparación de espacios de alojamiento.', tags: 'hoteleria turismo limpieza alojamiento' },
    { id: 'oficina', name: 'Auxiliar de Oficina', category: 'Administración', description: 'Acercate a tareas de apoyo en entornos de oficina.', tags: 'administracion gestion oficina' },
    { id: 'secretaria', name: 'Secretaría Administrativa', category: 'Administración', description: 'Explorá tareas de organización y asistencia administrativa.', tags: 'administracion secretaria gestion oficina' },
    { id: 'farmacia', name: 'Auxiliar de Farmacia', category: 'Servicios', description: 'Un acercamiento al ámbito de trabajo de una farmacia.', tags: 'farmacia salud auxiliar' },
    { id: 'bartender', name: 'Bartender', category: 'Gastronomía', description: 'Explorá el mundo de la barra y el servicio de bebidas.', tags: 'gastronomia bar bebidas turismo' },
    { id: 'hoteleria', name: 'Auxiliar de Hotelería', category: 'Turismo y hospitalidad', description: 'Acercate a tareas y servicios del sector hotelero.', tags: 'hoteleria hotel turismo hospitalidad' },
    { id: 'electricidad', name: 'Electricidad Básica o Domiciliaria', category: 'Oficios', description: 'Descubrí una propuesta de formación vinculada a un oficio técnico.', tags: 'oficio electricidad tecnico' }
  ];

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  const escapeHTML = (value) => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const normalize = (value) => String(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
  const matches = (item, query) => normalize(`${item.name} ${item.category} ${item.description} ${item.tags || ''}`).includes(normalize(query));
  const readStorage = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } };
  const saveStorage = (key, value) => { try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* Browsing remains available if storage is disabled. */ } };
  const storedCompare = readStorage('istu-compare-v1', []);
  const state = {
    filter: 'todas', query: '', courseQuery: '', coursesExpanded: false,
    compare: Array.isArray(storedCompare) ? [...new Set(storedCompare)].filter(id => careers.some(career => career.id === id)).slice(0, 3) : [],
    quizStep: 0, quizAnswers: [], dialogMode: '', returnFocus: null, preparedQuery: '', toastTimer: null
  };

  function toast(message) {
    const target = $('#toast');
    if (!target) return;
    target.textContent = message;
    target.hidden = false;
    target.setAttribute('role', 'status');
    target.setAttribute('aria-live', 'polite');
    target.classList.add('visible', 'show');
    clearTimeout(state.toastTimer);
    state.toastTimer = setTimeout(() => { target.classList.remove('visible', 'show'); target.hidden = true; }, 4200);
  }

  function guidanceCard() {
    return `<article class="guidance-card"><span class="career-category">ORIENTACIÓN</span><h3>¿Todavía no sabés qué elegir?</h3><p>Tus intereses pueden ser un buen comienzo. Explorá qué carrera va con vos en tres preguntas.</p><button type="button" class="button-primary" data-orientation>Encontrá tu camino ${icons.arrow}</button></article>`;
  }

  function renderCareers() {
    const grid = $('#career-grid');
    const result = careers.filter(career => (state.filter === 'todas' || career.category === state.filter) && matches(career, state.query));
    if (grid) {
      grid.innerHTML = result.length ? result.map(career => {
        const selected = state.compare.includes(career.id);
        return `<article class="career-card"><img class="career-image" src="${career.image}" alt="${career.imageAlt}" loading="lazy" width="720" height="480"><div class="career-body"><span class="career-category">${career.label}</span><h3 class="career-title"><button type="button" data-open-career="${career.id}">${career.name}</button></h3><p class="career-description">${career.description}</p><div class="career-footer"><button type="button" class="text-link" data-open-career="${career.id}" aria-label="Explorar ${career.name}">Explorar carrera ${icons.arrow}</button><button type="button" class="compare-toggle${selected ? ' selected' : ''}" data-compare="${career.id}" aria-pressed="${selected}" aria-label="${selected ? 'Quitar' : 'Agregar'} ${career.name} ${selected ? 'de la' : 'a la'} comparación">${selected ? icons.check : icons.plus}<span>Comparar</span></button></div></div></article>`;
      }).join('') + (state.filter === 'todas' && !state.query.trim() ? guidanceCard() : '') : `<div class="empty-state"><h3>No encontramos una carrera con esa búsqueda.</h3><p>Probá con otro nombre o explorá todas nuestras propuestas.</p><button type="button" class="button-secondary" data-reset-careers>Ver todas las carreras</button></div>`;
    }
    const count = $('#career-count');
    if (count) count.textContent = `${result.length} ${result.length === 1 ? 'carrera' : 'carreras'}`;
    $$('[data-filter]').forEach(button => {
      const active = button.dataset.filter === state.filter;
      button.classList.toggle('active', active);
      button.classList.toggle('selected', active);
      button.setAttribute('aria-pressed', String(active));
    });
  }

  function updateCompare() {
    saveStorage('istu-compare-v1', state.compare);
    const bar = $('#compare-bar');
    if (bar) { bar.hidden = state.compare.length === 0; bar.classList.toggle('visible', state.compare.length > 0); }
    const count = $('#compare-count');
    if (count) count.textContent = String(state.compare.length);
    const open = $('#compare-open');
    if (open) { open.disabled = state.compare.length === 0; open.setAttribute('aria-label', `Comparar ${state.compare.length} ${state.compare.length === 1 ? 'carrera seleccionada' : 'carreras seleccionadas'}`); }
    $$('[data-compare]').forEach(button => {
      const selected = state.compare.includes(button.dataset.compare);
      const career = careers.find(item => item.id === button.dataset.compare);
      button.classList.toggle('selected', selected);
      button.setAttribute('aria-pressed', String(selected));
      button.innerHTML = `${selected ? icons.check : icons.plus}<span>${button.dataset.compareLabel || 'Comparar'}</span>`;
      if (career) button.setAttribute('aria-label', `${selected ? 'Quitar' : 'Agregar'} ${career.name} ${selected ? 'de la' : 'a la'} comparación`);
    });
    document.body.classList.toggle('has-comparison', state.compare.length > 0);
  }

  function toggleCompare(id) {
    if (!careers.some(career => career.id === id)) return;
    if (state.compare.includes(id)) { state.compare = state.compare.filter(value => value !== id); toast('Carrera quitada de la comparación.'); }
    else {
      if (state.compare.length === 3) { toast('Podés comparar hasta 3 carreras. Quitá una para agregar otra.'); return; }
      state.compare.push(id);
      toast(`${careers.find(career => career.id === id).name} agregada. Podés comparar hasta 3 carreras.`);
    }
    updateCompare();
    if (state.dialogMode === 'comparison') renderComparison();
  }

  function dialogHeading(kicker, title, description = '') {
    return `<span class="dialog-kicker">${escapeHTML(kicker)}</span><h2 class="dialog-title" id="dialog-title" tabindex="-1">${escapeHTML(title)}</h2>${description ? `<p class="dialog-description">${escapeHTML(description)}</p>` : ''}`;
  }

  function setDialogContent(html, focusHeading = false) {
    const content = $('#dialog-content');
    if (!content) return;
    content.innerHTML = html;
    content.scrollTop = 0;
    const dialog = $('#main-dialog');
    if (dialog) dialog.scrollTop = 0;
    if (focusHeading) $('#dialog-title', content)?.focus({ preventScroll: true });
  }

  function openDialog(mode, html) {
    const dialog = $('#main-dialog');
    if (!dialog) return;
    if (!dialog.open) state.returnFocus = document.activeElement;
    state.dialogMode = mode;
    setDialogContent(html);
    dialog.setAttribute('aria-labelledby', 'dialog-title');
    if (!dialog.open) dialog.showModal();
    document.body.classList.add('dialog-open');
    $('#dialog-title', dialog)?.focus({ preventScroll: true });
  }

  function closeDialog() { const dialog = $('#main-dialog'); if (dialog?.open) dialog.close(); }

  function openCareer(id) {
    const career = careers.find(item => item.id === id);
    if (!career) return;
    const selected = state.compare.includes(id);
    openDialog('career', `${dialogHeading(career.label, career.name, career.description)}<div class="dialog-section"><h3>Un camino para vos si…</h3><p>${career.profile}</p><div class="dialog-tags">${career.interests.map(interest => `<span class="tag">${interest}</span>`).join('')}</div></div><div class="dialog-section"><h3>Áreas que conectan con esta carrera</h3><ul class="dialog-list">${career.competencies.map(item => `<li>${item}</li>`).join('')}</ul></div><p class="dialog-note">Esta descripción es orientativa. Consultá al instituto el plan de estudios vigente, la duración, la modalidad y las condiciones de inscripción.</p><div class="dialog-actions"><button type="button" class="button-primary" data-contact="${career.id}">Consultar por esta carrera ${icons.arrow}</button><button type="button" class="button-secondary compare-toggle${selected ? ' selected' : ''}" data-compare="${career.id}" aria-pressed="${selected}">${selected ? icons.check : icons.plus}<span>Comparar</span></button></div>`);
  }

  function comparisonHTML() {
    const selected = state.compare.map(id => careers.find(career => career.id === id)).filter(Boolean);
    if (!selected.length) return `${dialogHeading('DECIDÍ CON MÁS INFORMACIÓN', 'Tu comparación está vacía', 'Agregá hasta tres carreras para explorar sus diferencias.')}<div class="dialog-actions"><button type="button" class="button-primary" data-close-dialog>Explorar carreras ${icons.arrow}</button></div>`;
    const rows = [
      ['Área', career => career.label],
      ['Enfoque', career => career.focus],
      ['Conecta con vos si…', career => career.profile],
      ['Intereses', career => career.interests.join(' · ')]
    ];
    return `${dialogHeading('TU PRÓXIMO PASO', 'Compará tus opciones', 'Mirá qué conecta con tus intereses. Podés seleccionar hasta 3 carreras.')}<div class="dialog-table-wrap" tabindex="0" role="region" aria-label="Comparación de carreras"><table class="dialog-table"><caption class="sr-only">Diferencias entre las carreras seleccionadas</caption><thead><tr><th scope="col">Para elegir</th>${selected.map(career => `<th scope="col">${career.name}</th>`).join('')}</tr></thead><tbody>${rows.map(([label, value]) => `<tr><th scope="row">${label}</th>${selected.map(career => `<td>${escapeHTML(value(career))}</td>`).join('')}</tr>`).join('')}<tr><th scope="row">Más información</th>${selected.map(career => `<td><button type="button" class="text-link" data-open-career="${career.id}">Ver carrera ${icons.arrow}</button><button type="button" class="text-link" data-remove-compare="${career.id}" aria-label="Quitar ${career.name} de la comparación">Quitar</button></td>`).join('')}</tr></tbody></table></div><p class="dialog-note">Las descripciones de enfoque son orientativas. Para comparar planes oficiales, duración y modalidad, consultá directamente al ISTU.</p><div class="dialog-actions"><button type="button" class="button-primary" data-contact>Consultar al instituto ${icons.arrow}</button><button type="button" class="button-secondary" data-orientation>Explorar mis intereses</button></div>`;
  }

  function renderComparison() { setDialogContent(comparisonHTML(), true); }

  const quizQuestions = [
    { title: '¿Qué te despierta más curiosidad?', subtitle: 'Elegí la opción que más te representa hoy.', choices: [
      ['Crear aplicaciones y herramientas digitales.', { software: 4, systems: 1 }],
      ['Entender procesos y encontrar una mejor forma de hacer las cosas.', { systems: 4, data: 1 }],
      ['Investigar información y descubrir patrones.', { data: 4, systems: 1 }],
      ['Conocer lugares y diseñar experiencias para otras personas.', { tourism: 4, people: 1 }],
      ['Entender a las personas y acompañar equipos.', { people: 4, tourism: 1 }]
    ] },
    { title: 'En un proyecto, ¿qué tarea elegirías?', subtitle: 'Pensá en la actividad que más disfrutarías.', choices: [
      ['Construir un prototipo y probar cómo funciona.', { software: 3, systems: 1 }],
      ['Organizar los pasos y conectar las necesidades del equipo.', { systems: 3, people: 1 }],
      ['Analizar resultados y encontrar qué nos están diciendo.', { data: 3, systems: 1 }],
      ['Organizar la experiencia y cuidar cada detalle del servicio.', { tourism: 3, people: 1 }],
      ['Escuchar al equipo y ayudar a que trabaje mejor.', { people: 3, systems: 1 }]
    ] },
    { title: '¿Qué impacto te gustaría generar?', subtitle: 'No hay respuestas correctas: buscá lo que te entusiasma.', choices: [
      ['Crear una solución digital que alguien use todos los días.', { software: 3 }],
      ['Mejorar cómo una organización resuelve sus problemas.', { systems: 3, people: 1 }],
      ['Aportar evidencia para tomar mejores decisiones.', { data: 3, systems: 1 }],
      ['Impulsar el turismo y la hospitalidad de mi región.', { tourism: 3 }],
      ['Ayudar a que las personas crezcan en su trabajo.', { people: 3 }]
    ] }
  ];

  function quizHTML() {
    const question = quizQuestions[state.quizStep];
    const selected = state.quizAnswers[state.quizStep];
    return `${dialogHeading('ENCONTRÁ TU CAMINO', 'Una carrera empieza con una pregunta')}<p class="quiz-progress" aria-live="polite">Pregunta ${state.quizStep + 1} de ${quizQuestions.length}</p><progress class="quiz-meter" max="3" value="${state.quizStep + 1}" aria-label="Avance del cuestionario"></progress><fieldset class="quiz-fieldset"><legend id="quiz-question">${question.title}</legend><p class="dialog-description">${question.subtitle}</p><div class="quiz-options">${question.choices.map(([label], index) => `<label class="quiz-option${selected === index ? ' selected' : ''}"><input type="radio" name="quiz-answer" value="${index}" ${selected === index ? 'checked' : ''}><span>${label}</span></label>`).join('')}</div></fieldset><div class="dialog-actions">${state.quizStep > 0 ? '<button type="button" class="button-secondary" data-quiz-back>Anterior</button>' : ''}<button type="button" class="button-primary" data-quiz-next ${Number.isInteger(selected) ? '' : 'disabled'}>${state.quizStep === 2 ? 'Ver mis afinidades' : 'Siguiente'} ${icons.arrow}</button></div><p class="dialog-note">Es una guía para explorar tus intereses. No reemplaza una orientación vocacional profesional.</p>`;
  }

  function openQuiz() {
    state.quizStep = 0;
    state.quizAnswers = [];
    openDialog('quiz', quizHTML());
  }

  function quizResults() {
    const scores = Object.fromEntries(careers.map(career => [career.id, 0]));
    state.quizAnswers.forEach((answer, index) => {
      const weights = quizQuestions[index].choices[answer]?.[1] || {};
      Object.entries(weights).forEach(([id, score]) => { scores[id] += score; });
    });
    const ranked = [...careers].sort((a, b) => scores[b.id] - scores[a.id]);
    const first = ranked[0];
    state.dialogMode = 'quiz-results';
    setDialogContent(`${dialogHeading('TUS INTERESES, TU PUNTO DE PARTIDA', 'Hay un camino para explorar', 'Según tus respuestas, estas propuestas pueden conectar con vos.')}<article class="quiz-result"><span class="dialog-kicker">TU MAYOR AFINIDAD</span><h3>${first.name}</h3><p>${first.profile}</p><div class="dialog-tags">${first.interests.map(interest => `<span class="tag">${interest}</span>`).join('')}</div><button type="button" class="button-primary" data-open-career="${first.id}">Explorar esta carrera ${icons.arrow}</button></article><div class="dialog-section"><h3>También podrías explorar</h3>${ranked.slice(1, 3).map(career => `<button type="button" class="dialog-result" data-open-career="${career.id}"><span><strong>${career.name}</strong><small>${career.focus}</small></span>${icons.arrow}</button>`).join('')}</div><p class="dialog-note">Esta recomendación surge de los intereses que elegiste. Es una invitación a conocer las carreras y conversar con el instituto.</p><div class="dialog-actions"><button type="button" class="button-secondary" data-quiz-restart>Volver a empezar</button><button type="button" class="text-link" data-contact="${first.id}">Quiero recibir orientación ${icons.arrow}</button></div>`, true);
  }

  function openContact(interestId = '') {
    const interest = [...careers, ...courses].find(item => item.id === interestId);
    const options = items => items.map(item => `<option value="${escapeHTML(item.name)}" ${interest?.id === item.id ? 'selected' : ''}>${escapeHTML(item.name)}</option>`).join('');
    state.preparedQuery = '';
    openDialog('contact', `${dialogHeading('HABLEMOS DE TU FUTURO', 'Acercate al ISTU', 'Prepará tu consulta y contactate con el instituto por sus canales oficiales.')}<div class="dialog-grid"><div class="dialog-card"><h3>Por teléfono</h3><a class="text-link" href="tel:+543757447965">3757-447965 ${icons.arrow}</a><a class="text-link" href="tel:+543757506128">3757-506128 ${icons.arrow}</a></div><div class="dialog-card"><h3>En persona</h3><p>Guatambú 1459<br>Wanda, Misiones</p><a class="text-link" href="https://www.google.com/maps/search/?api=1&query=Guatamb%C3%BA%201459%2C%20Wanda%2C%20Misiones" target="_blank" rel="noopener noreferrer">Cómo llegar ${icons.arrow}<span class="sr-only"> (se abre en otra pestaña)</span></a></div></div><form id="contact-form" class="dialog-section"><h3>Prepará tu consulta</h3><label class="dialog-field" for="contact-name">Tu nombre <span>(opcional)</span><input id="contact-name" name="name" autocomplete="given-name" maxlength="100" placeholder="¿Cómo te llamás?"></label><label class="dialog-field" for="contact-interest">Me interesa<select id="contact-interest" name="interest"><option value="Información general" ${interest ? '' : 'selected'}>Información general</option><optgroup label="Carreras">${options(careers)}</optgroup><optgroup label="Cursos">${options(courses)}</optgroup></select></label><label class="dialog-field" for="contact-message">Tu consulta<textarea id="contact-message" name="message" rows="3" maxlength="2000" required>Quisiera conocer los requisitos de inscripción, la modalidad, la duración y las próximas fechas disponibles.</textarea></label><p class="dialog-note">Este formulario prepara un texto para vos. No envía datos ni mensajes al instituto.</p><button type="submit" class="button-primary">Preparar mi consulta ${icons.arrow}</button></form><div id="contact-prepared" class="contact-preview" hidden aria-live="polite"></div>`);
  }

  function prepareContact(form) {
    if (!form.reportValidity()) return;
    const name = $('#contact-name', form).value.trim();
    const interest = $('#contact-interest', form).value;
    const message = $('#contact-message', form).value.trim();
    state.preparedQuery = `Hola, ${name ? `soy ${name}. ` : ''}Quisiera consultar por ${interest}.\n\n${message}\n\nMuchas gracias.`;
    const output = $('#contact-prepared');
    if (!output) return;
    output.hidden = false;
    output.innerHTML = `<h3>Tu consulta está lista</h3><p>Copiala o descargala para tenerla a mano al comunicarte con el instituto.</p><textarea id="prepared-query" readonly rows="7" aria-label="Texto de tu consulta">${escapeHTML(state.preparedQuery)}</textarea><div class="dialog-actions"><button type="button" class="button-primary" data-copy-query>Copiar texto</button><button type="button" class="button-secondary" data-download-query>Descargar .txt</button></div><p class="dialog-note">Para contactar al ISTU, llamá al 3757-447965 o al 3757-506128. La consulta aún no fue enviada.</p>`;
    output.scrollIntoView({ behavior: reducedMotion() ? 'auto' : 'smooth', block: 'nearest' });
    $('#prepared-query')?.focus({ preventScroll: true });
    toast('Tu consulta está preparada. Podés copiarla o descargarla.');
  }

  async function copyQuery() {
    try {
      if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(state.preparedQuery);
      else {
        const textarea = $('#prepared-query');
        if (!textarea) throw new Error('No text');
        textarea.focus(); textarea.select();
        if (!document.execCommand('copy')) throw new Error('Copy unavailable');
      }
      toast('Consulta copiada al portapapeles.');
    } catch {
      const textarea = $('#prepared-query');
      textarea?.focus(); textarea?.select();
      toast('Seleccionamos el texto para que puedas copiarlo manualmente.');
    }
  }

  function downloadQuery() {
    if (!state.preparedQuery) return;
    const blob = new Blob(['\uFEFF', state.preparedQuery], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url; link.download = 'mi-consulta-istu.txt';
    document.body.appendChild(link); link.click(); link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    toast('Consulta descargada.');
  }

  function openCourse(id) {
    const course = courses.find(item => item.id === id);
    if (!course) return;
    openDialog('course', `${dialogHeading(`FORMACIÓN PROFESIONAL · ${course.category}`, course.name, course.description)}<div class="dialog-section"><h3>Sumá una nueva herramienta a tu futuro</h3><p>Esta propuesta forma parte del catálogo de cursos publicado por el instituto.</p></div><p class="dialog-note">La apertura de comisiones, las fechas, la duración, la modalidad, los requisitos y los aranceles deben confirmarse con el ISTU.</p><div class="dialog-actions"><button type="button" class="button-primary" data-contact="${course.id}">Consultar por este curso ${icons.arrow}</button><button type="button" class="button-secondary" data-close-dialog>Seguir explorando</button></div>`);
  }

  function renderCourses() {
    const target = $('#course-list');
    if (!target) return;
    const filtered = courses.filter(course => matches(course, state.courseQuery));
    const result = state.coursesExpanded || state.courseQuery ? filtered : filtered.slice(0, 4);
    target.innerHTML = result.length ? result.map((course, index) => `<article class="course-item"><span class="course-number" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span><div class="course-info"><span class="course-category">${course.category}</span><h3><button type="button" data-open-course="${course.id}">${course.name}</button></h3></div><button type="button" class="course-arrow" data-open-course="${course.id}" aria-label="Ver curso ${course.name}">${icons.arrow}</button></article>`).join('') : '<div class="empty-state"><p>No encontramos cursos con esa búsqueda. Probá con otra palabra.</p></div>';
    const more = $('#course-more');
    if (more) { more.hidden = !!state.courseQuery; more.setAttribute('aria-expanded', String(state.coursesExpanded)); more.innerHTML = `${state.coursesExpanded ? 'Ver menos cursos' : 'Ver los 12 cursos'} ${icons.arrow}`; }
  }

  function searchResultsHTML(query) {
    const careerResults = careers.filter(item => matches(item, query));
    const courseResults = courses.filter(item => matches(item, query));
    const campusMatch = !query.trim() || normalize('campus aula virtual acceso estudiantes').includes(normalize(query));
    const total = careerResults.length + courseResults.length + (campusMatch ? 1 : 0);
    const resultButton = (item, kind) => `<button type="button" class="dialog-result" data-open-${kind}="${item.id}"><span><small>${kind === 'career' ? 'Carrera' : 'Curso'} · ${kind === 'career' ? item.label : item.category}</small><strong>${item.name}</strong></span>${icons.arrow}</button>`;
    return `<p class="search-result-count" role="status">${total} ${total === 1 ? 'resultado' : 'resultados'}${query.trim() ? ` para “${escapeHTML(query.trim())}”` : ' para explorar'}</p>${careerResults.length ? `<section class="dialog-section"><h3>Carreras</h3>${careerResults.map(item => resultButton(item, 'career')).join('')}</section>` : ''}${courseResults.length ? `<section class="dialog-section"><h3>Cursos</h3>${courseResults.map(item => resultButton(item, 'course')).join('')}</section>` : ''}${campusMatch ? `<section class="dialog-section"><h3>Estudiantes</h3><a class="dialog-result" href="https://aulavirtual.istu.edu.ar/login/index.php" target="_blank" rel="noopener noreferrer"><span><strong>Campus virtual</strong><small>Accedé al aula virtual del ISTU</small></span>${icons.arrow}<span class="sr-only"> (se abre en otra pestaña)</span></a></section>` : ''}${!total ? '<div class="empty-state"><p>Probá con el nombre de una carrera, un curso o una palabra como “tecnología”, “turismo” o “campus”.</p></div>' : ''}`;
  }

  function openSearch() {
    openDialog('search', `${dialogHeading('TODO EL ISTU, MÁS CERCA', '¿Qué querés descubrir?')}<label class="dialog-field dialog-search" for="global-search"><span class="sr-only">Buscar carreras, cursos o campus virtual</span><input type="search" id="global-search" placeholder="Buscá carreras, cursos, campus…" autocomplete="off" aria-controls="global-results">${icons.search}</label><div id="global-results" class="dialog-results">${searchResultsHTML('')}</div>`);
    $('#global-search')?.focus();
  }

  function updateChecklist() {
    const inputs = $$('input[data-document]');
    if (!inputs.length) return;
    const complete = inputs.filter(input => input.checked).length;
    const progress = $('#document-progress');
    const percent = Math.round(complete / inputs.length * 100);
    if (progress) {
      if (progress.tagName === 'PROGRESS') { progress.max = inputs.length; progress.value = complete; }
      else { progress.style.width = `${percent}%`; progress.setAttribute('role', 'progressbar'); progress.setAttribute('aria-valuemin', '0'); progress.setAttribute('aria-valuemax', String(inputs.length)); progress.setAttribute('aria-valuenow', String(complete)); progress.setAttribute('aria-label', 'Documentación preparada'); }
    }
    const text = $('#document-progress-text');
    if (text) { text.textContent = `${complete} de ${inputs.length}`; text.setAttribute('aria-label', `${complete} de ${inputs.length} documentos preparados`); }
    const values = {};
    inputs.forEach((input, index) => { values[input.dataset.document || input.id || String(index)] = input.checked; });
    saveStorage('istu-documents-v1', values);
  }

  function restoreChecklist() {
    const saved = readStorage('istu-documents-v1', {});
    $$('input[data-document]').forEach((input, index) => { input.checked = !!saved?.[input.dataset.document || input.id || String(index)]; });
    updateChecklist();
  }

  function reducedMotion() { return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches; }

  function setMenu(open) {
    const toggle = $('#menu-toggle');
    const nav = $('#main-nav');
    if (!toggle || !nav) return;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    nav.classList.toggle('open', open);
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
  }

  document.addEventListener('click', event => {
    const button = event.target.closest('button, a');
    if (!button) return;
    if (button.matches('[data-filter]')) { state.filter = button.dataset.filter; renderCareers(); }
    else if (button.matches('[data-open-career]')) openCareer(button.dataset.openCareer);
    else if (button.matches('[data-compare]')) toggleCompare(button.dataset.compare);
    else if (button.matches('[data-remove-compare]')) toggleCompare(button.dataset.removeCompare);
    else if (button.matches('[data-orientation], [data-quiz-restart]')) openQuiz();
    else if (button.matches('[data-contact]')) openContact(button.dataset.contact);
    else if (button.matches('[data-search-open]')) openSearch();
    else if (button.matches('[data-open-course]')) openCourse(button.dataset.openCourse);
    else if (button.matches('[data-close-dialog], #dialog-close')) closeDialog();
    else if (button.matches('#compare-open')) openDialog('comparison', comparisonHTML());
    else if (button.matches('#compare-clear')) { state.compare = []; updateCompare(); toast('Comparación vaciada.'); }
    else if (button.matches('#course-more')) { state.coursesExpanded = !state.coursesExpanded; renderCourses(); }
    else if (button.matches('[data-reset-careers]')) { state.filter = 'todas'; state.query = ''; if ($('#career-search')) $('#career-search').value = ''; renderCareers(); }
    else if (button.matches('[data-quiz-next]')) {
      if (!Number.isInteger(state.quizAnswers[state.quizStep])) return;
      if (state.quizStep === 2) quizResults();
      else { state.quizStep += 1; setDialogContent(quizHTML(), true); }
    }
    else if (button.matches('[data-quiz-back]')) { state.quizStep = Math.max(0, state.quizStep - 1); setDialogContent(quizHTML(), true); }
    else if (button.matches('[data-copy-query]')) void copyQuery();
    else if (button.matches('[data-download-query]')) downloadQuery();
    else if (button.matches('#menu-toggle')) setMenu(button.getAttribute('aria-expanded') !== 'true');
    if (button.matches('#main-nav a, #main-nav button')) setMenu(false);
    if (button.matches('[data-orientation], [data-contact], [data-search-open], [data-open-career], [data-open-course]')) { event.preventDefault(); setMenu(false); }
  });

  document.addEventListener('input', event => {
    if (event.target.matches('#career-search')) { state.query = event.target.value; renderCareers(); }
    else if (event.target.matches('#course-search')) { state.courseQuery = event.target.value; renderCourses(); }
    else if (event.target.matches('#global-search')) { const results = $('#global-results'); if (results) results.innerHTML = searchResultsHTML(event.target.value); }
  });

  document.addEventListener('change', event => {
    if (event.target.matches('input[data-document]')) updateChecklist();
    else if (event.target.matches('input[name="quiz-answer"]')) {
      state.quizAnswers[state.quizStep] = Number(event.target.value);
      $$('.quiz-option').forEach(option => option.classList.toggle('selected', $('input', option)?.checked));
      const next = $('[data-quiz-next]'); if (next) next.disabled = false;
    }
  });

  document.addEventListener('submit', event => {
    if (event.target.matches('#contact-form')) { event.preventDefault(); prepareContact(event.target); }
    else if (event.target.matches('[data-search-form]')) { event.preventDefault(); openSearch(); }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && $('#menu-toggle')?.getAttribute('aria-expanded') === 'true') { setMenu(false); $('#menu-toggle')?.focus(); }
  });

  const dialog = $('#main-dialog');
  if (dialog) {
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const bounds = dialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) closeDialog();
    });
    dialog.addEventListener('close', () => {
      document.body.classList.remove('dialog-open');
      state.dialogMode = '';
      if (state.returnFocus?.isConnected) state.returnFocus.focus({ preventScroll: true });
      state.returnFocus = null;
    });
  }

  window.addEventListener('storage', event => {
    if (event.key === 'istu-compare-v1') {
      const stored = readStorage('istu-compare-v1', []);
      state.compare = Array.isArray(stored) ? [...new Set(stored)].filter(id => careers.some(career => career.id === id)).slice(0, 3) : [];
      updateCompare(); if (state.dialogMode === 'comparison') renderComparison();
    }
    if (event.key === 'istu-documents-v1') restoreChecklist();
  });

  renderCareers();
  renderCourses();
  updateCompare();
  restoreChecklist();
})();
