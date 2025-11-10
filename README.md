# Carecard

Application web pour éditer et prévisualiser la carte des soins RVB Spa.

## Fonctionnalités principales

- Édition bilingue (français / anglais) de chaque champ avec prévisualisation directe et bascule par drapeaux.
- Gestion des sections et des lignes (ajout, duplication manuelle, suppression) avec mise à jour automatique de l'ancre et du sommaire.
- Personnalisation fine de la palette via des variables CSS exportées dans le fichier généré.
- Import / export du fichier HTML final pour intégration côté site ou plugin WordPress.
- Téléchargement du HTML et envoi rapide par e-mail vers une adresse configurable via `.env`.

## Démarrage rapide avec Docker

1. Dupliquer le fichier d'exemple `.env.example` vers `.env` puis, au besoin, adapter les ports, le nom d'hôte et l'adresse `MAIL_RECIPIENT` utilisée par le bouton d'envoi :

   ```bash
   cp .env.example .env
   ```

2. Construire et lancer les services (éditeur + serveur mail de développement) :

   ```bash
   docker compose up --build
   ```

3. Ouvrir le navigateur sur l'adresse sécurisée indiquée dans `.env` (par défaut [https://carecard.local:8443](https://carecard.local:8443)). Le certificat auto-signé se trouve dans l'image Docker ; acceptez l'exception de sécurité lors du premier accès. Pensez à ajouter `carecard.local` à votre fichier `/etc/hosts` ou remplacez `SITE_HOST` par `localhost` si vous ne souhaitez pas modifier ce fichier.

4. Accéder à l'interface du serveur mail via [http://127.0.0.1:8025](http://127.0.0.1:8025) (valeur configurable dans `.env`). Les emails envoyés depuis votre environnement de développement y seront listés.

Le serveur Nginx intégré publie les fichiers statiques de l’éditeur et écoute sur les ports 80/443 dans le conteneur. Les mappages de ports et le nom d’hôte externe sont pilotés par le fichier `.env`.

### Relais SMTP (optionnel)

Mailpit reste le serveur de recette par défaut : il intercepte les messages émis depuis votre environnement sans les transmettre à l'extérieur. Si vous souhaitez tester un envoi réel, activez son mode relais en complétant les variables suivantes dans `.env` :

- `SMTP_RELAY_ENABLE=true` pour activer la redirection.
- `SMTP_RELAY_HOST` et `SMTP_RELAY_PORT` pour cibler le serveur de relais souhaité.
- `SMTP_RELAY_USERNAME` / `SMTP_RELAY_PASSWORD` si le relais exige une authentification.
- `SMTP_RELAY_STARTTLS` pour contrôler la négociation TLS (`auto`, `always` ou `never`).
- `SMTP_RELAY_FROM` afin d'imposer une adresse d'expéditeur spécifique si nécessaire.

Mailpit relayera alors chaque message intercepté vers le serveur configuré tout en conservant une copie consultable via son interface Web.

### Configuration du bouton « Envoyer par e-mail »

- Définissez la variable `MAIL_RECIPIENT` dans `.env` (ex. `MAIL_RECIPIENT=communication@exemple.com`).
- Au démarrage des conteneurs, le script d'entrypoint génère automatiquement `config.js` avec cette valeur pour alimenter l'interface.
- Si aucune adresse n'est fournie, le bouton reste grisé avec un message d'aide.
- Lorsque vous cliquez sur **Envoyer par e-mail**, l'éditeur télécharge d'abord le fichier HTML puis ouvre votre client de messagerie avec un message prérempli (FR/EN) adressé au destinataire configuré ; il ne reste plus qu'à joindre le fichier téléchargé.

## Plugin WordPress « RVB – Éditeur Carte des Soins »

Les sources du plugin sont regroupées dans le dossier `plugin/rvb-carte-editor`.

### Méthodes d'installation

#### 1. Création d'une archive ZIP prête à l'emploi

Un script d'assistance permet de générer une archive installable depuis l'interface d'administration WordPress :

```bash
./tools/package-plugin.sh
```

Le fichier `dist/rvb-carte-editor.zip` produit peut être téléversé via **Extensions → Ajouter → Téléverser une extension**.

#### 2. Installation manuelle

1. Copiez le dossier `plugin/rvb-carte-editor` dans l'installation WordPress (placez-le dans `wp-content/plugins`).
2. Activez le plugin « RVB – Éditeur Carte des Soins » depuis le panneau *Extensions*.

### Utilisation du plugin

1. Rendez-vous dans **Outils → Carte des soins** pour modifier le fichier persistant `wp-content/uploads/rvb-spa/carte-2025.html`.
2. Renseignez ou collez le contenu HTML dans le champ d'édition, puis cliquez sur **Enregistrer**.
3. Intégrez la carte dans un modèle PHP avec :

   ```php
   echo file_exists(RVB_CARTE_FILE) ? file_get_contents(RVB_CARTE_FILE) : '';
   ```

   …ou ajoutez le shortcode `[rvb_carte]` dans un contenu WordPress (bloc « Code » ou « Shortcode »).

### Sécurité et persistance

Le plugin écrit et lit le fichier via `WP_Filesystem`, protège l'accès avec la capacité `manage_options` et un nonce, et crée automatiquement le dossier persistant si nécessaire.
