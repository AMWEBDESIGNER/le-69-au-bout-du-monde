# Le 69 — site vitrine complet

Site vitrine multipage indépendant pour **Le 69**, pizzeria, bistrot et lieu de rencontre situé dans le village du Saix (05400).

- **Catégorie :** pizzeria, bistrot et lieu de rencontre
- **Commune :** Le Saix, Hautes-Alpes
- **État d’activité :** actif en saison, vérifié le 10 octobre 2026 via deux sources locales et le registre public

## Architecture

- accueil éditorial et galerie de photographies locales créditées ;
- pages L’esprit, À table, Rendez-vous, Infos pratiques et Contact ;
- téléphone, itinéraire, FAQ, page 404, sitemap, robots et pages légales.

## Liens

- Site Cloudflare Pages : [le-69-au-bout-du-monde.pages.dev](https://le-69-au-bout-du-monde.pages.dev)
- Dépôt GitHub : [AMWEBDESIGNER/le-69-au-bout-du-monde](https://github.com/AMWEBDESIGNER/le-69-au-bout-du-monde)
- Téléphone public : 06 30 80 59 63

## Sources publiques

- [Fiche Hautes-Alpes](https://www.hautes-alpes.net/fiche/le-69-la-pizzeria-au-bout-du-monde/)
- [Page commerces de la commune du Saix](https://village-le-saix.fr/decouvrir/commerces/)
- [Registre public de l’entreprise](https://www.pappers.fr/entreprise/campillo-stephane-439432097)

Les photographies locales présentes dans `assets/` proviennent de la fiche touristique Hautes-Alpes et sont créditées à **Stéphane Campillo** sur la source. Elles restent attachées à leurs auteurs et leur réutilisation commerciale doit être autorisée. Cette réalisation est une proposition indépendante et n’est pas le site officiel.

## Personnalisation

Site statique en HTML, CSS et JavaScript sans étape de compilation. Modifier les textes dans `index.html` et les pages thématiques, les couleurs et animations dans `styles.css`/`pages.css`, puis remplacer les photos dans `assets/` en conservant les noms de fichiers.

## Éléments à confirmer par l’établissement

- horaires, carte complète, tarifs et allergènes ;
- dates exactes des pizzas, de l’aïoli et de l’happy hour ;
- autorisation définitive des photographies et crédits ;
- mentions légales, SIRET, courriel et responsable de publication.

## Motion design et provenance du code

Animations réalisées en CSS vanilla, avec respect de `prefers-reduced-motion`, et une révélation progressive inspirée du pattern public [Scroll animation: IntersectionObserver and CSS](https://codepen.io/oscar-jite/pen/qBzwOVq). La logique reste locale, légère et adaptée à l’identité de chaque établissement ; aucune dépendance payante ni contenu généré n’est requis.

## Informations pratiques livrées

`site-enhance.js` ajoute sur l’accueil un bloc dédié à l’adresse, aux horaires, aux services, au téléphone et à l’itinéraire, ainsi qu’un footer local complet. Les informations signalées « à confirmer » doivent être validées par l’établissement avant mise en production commerciale.
