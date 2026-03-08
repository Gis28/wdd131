// getdates.js

// Comme le script est chargé avec "defer", le DOM est déjà parsé ici.

(function () {
  // 1) Année du droit d'auteur (année courante)
  const now = new Date();
  const currentYear = now.getFullYear();

  const copyrightEl = document.getElementById('copyright');
  if (copyrightEl) {
    // Exemple simple : "© 2026 — Mon Site"
    // Adapte le texte à ton contexte.
    copyrightEl.textContent = `© ${currentYear}`;
  }

  // 2) Date de dernière modification du document
  // Remarque : document.lastModified renvoie une chaîne (string)
  const lastModifiedEl = document.getElementById('lastModified');
  if (lastModifiedEl) {
    // Ex : "Last modified: 03/07/2026, 22:18:25"
    // (le format exact dépend du navigateur/locale)
    lastModifiedEl.textContent = document.lastModified;
  }

  // (Optionnel) Si tu veux montrer différentes manières d'utiliser l'objet Date,
  // voici quelques exemples rapides (non requis pour l’exercice) :
  // const iso = now.toISOString();
  // const locale = now.toLocaleString('fr-FR', { dateStyle: 'full', timeStyle: 'short' });
  // console.log({ currentYear, iso, locale });
})();
``